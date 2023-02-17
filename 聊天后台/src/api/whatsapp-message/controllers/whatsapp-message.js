'use strict';
const define = require('../../define');
/**
 * whatsapp-message controller
 * //  console.log(ctx.query)
    // return entities.map(entity => sanitizeEntity(entity, { model: strapi.models["whatsapp-message"] }));
 */

const { createCoreController } = require('@strapi/strapi').factories;


var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

const { parseMultipartData } = require('@strapi/utils')

// 隐藏 或 启用 单条 msg
// 没有

module.exports = createCoreController('api::whatsapp-message.whatsapp-message', ({ strapi }) => ({


    // 获取 MSG
    async find(ctx) {
        ctx = define.fiii_ctx_query( ctx )
        ctx.populate = { contact : true };

        if (ctx.query.filters.isShow != false) {
            ctx.query.filters["$or"] = [
                { isShow: true },
                { isShow: { $null: true, } }
            ]
        }
        ctx.query.filters["contact"] = { $or: [
            { isShow: true },
            { isShow: { $null: true, } }
        ]}
        const wozapp_acc = await strapi.service( define['API_WHATSAPP_MSG'] ).getWhatsappDetail(ctx)
        const whatsapp_send_number_id = wozapp_acc ? wozapp_acc.whatsapp_send_number_id : undefined

        if(ctx.state.user) {
            ctx.query.filters.business_phone_number_id = { $eq: whatsapp_send_number_id }
            delete ctx.query.filters.whatsapp_send_number_id
        }
        ctx.query.populate = {
            contact: true, last_message_relation: true,
            media : true, media_detail : true
        }
        ctx.query.sort = ctx.query.sort ? ctx.query.sort : { dateTime: 'desc' }
        return await super.find(ctx);
    },
    // 发送 MSG
    async send(ctx) {
        var token = await strapi.service('api::whatsapp-message.whatsapp-message').whatsapp_token;
        var whatsapp_send_number_id = await strapi.service('api::whatsapp-message.whatsapp-message').whatsapp_send_number_id
        var whatsapp_phone_number = await strapi.service('api::whatsapp-message.whatsapp-message').whatsapp_phone_number
        var whatsapp_app = await strapi.service('api::whatsapp-message.whatsapp-message').getWhatsappDetail(ctx)
        if(whatsapp_app != undefined){
            whatsapp_send_number_id = whatsapp_app.whatsapp_send_number_id
            token = whatsapp_app.whatsapp_token
            whatsapp_phone_number = whatsapp_app.whatsapp_phone_number
        }
       
        // test user account()
        var whatsapp_api_version = await strapi.service('api::whatsapp-message.whatsapp-message').whatsapp_api_version
        var post, media, hasFile
        if (ctx.is('multipart')) {
            
            const { data, files } = parseMultipartData(ctx);
            post = data
            media = files
        }else{
            post = ctx.request.body
        }
        var media_id, media_detail, type = "text"
        var message = ""
        //get recipient
        if(post.recipient == undefined){
            return ctx.send("Message must have a recipient", 400)
        }else{
            //check if free session expired
            post.recipient = post.recipient.replace(/[ -+()\s]/g, '');
            var contact = await strapi.db.query('api::contact.contact').findOne({where: {phone_number: post.recipient, whatsapp_send_number_id: whatsapp_send_number_id}})
            console.log(contact)
            if(contact != undefined){
                var now = new Date()
                var limit = new Date(contact.free_response_limit)
                if(now > limit){
                    console.log("Free response session limit passed")
                    return ctx.send("Free response session limit passed", 400)
                }
            }
        }
        // upload media to whatsapp
        if(media != undefined){
            if(media.file != undefined){
                hasFile = true
                //check mime type
                var mime_list = {
                    "audio": ["audio/aac", "audio/mp4", "audio/mpeg", "audio/amr", "audio/ogg"],
                    "document": [ 	
                        "text/plain",
                        "application/pdf",
                        "application/vnd.ms-powerpoint", 
                        "application/msword", 
                        "application/vnd.ms-excel", 
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation", 
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    ],
                    "image":["image/jpeg", "image/png"],
                    "video":["video/mp4", "video/3gp"],
                    "sticker":["image/webp"]
                }
                var file_included = false
                for(var t in mime_list){
                    if(mime_list[t].includes(media.file.type)){
                        type = t
                        file_included = true
                    }
                }
                if(file_included == false){
                    return ctx.send("whatsapp does not support the given file type",400)
                }
                //upload media to whatsapp
                var data = new FormData();
                data.append('messaging_product', 'whatsapp');
                data.append('file', fs.createReadStream(media.file.path),{ filename: media.file.name });
                var config = {
                method: 'post',
                url: 'https://graph.facebook.com/'+whatsapp_api_version+ '/'+ whatsapp_send_number_id +'/media',
                headers: { 
                    'Authorization': 'Bearer ' + token, 
                    ...data.getHeaders()
                },
                data : data
                };
                var response = await axios(config)
                if(response.status == 200){
                    media_id = response.data.id
                    media_detail = response.data
                }else{
                    return ctx.send(response.message, response.status)
                }
            }
        }
        if(post.message != undefined)
        {
            message = post.message
        }
        // send message to whatsapp
        var endpoint = "https://graph.facebook.com/"+whatsapp_api_version+"/"+ whatsapp_send_number_id +"/messages"
        console.log(endpoint)
        var data = {
            "messaging_product": "whatsapp",
            "preview_url": false,
            "recipient_type": "individual",
            "to": post.recipient,
            "type": type
        }
        if(hasFile != true){
            data[type] =  {
                "body": message  
            }
        }else{
            data[type] = {
                "id": media_id
            }
        }
        var data = JSON.stringify(data)

        var config = {
            method: "post",
            url : endpoint,
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + token,
            },
            data : data
        };
        
        var body
        await axios(config)
        .then(function (response) {
                body = response
                console.log("sent")
                //console.log(body.message[0])
        }).catch(function (error) {
                //console.log(error);
                body = error.response
        });
        if(body.status != 200){
            console.log(body.data.error.message)

            var toSave = {}
            if(body.data.error.fbtrace_id != undefined){
                toSave.whatsapp_message_id = body.data.error.fbtrace_id
            }
            toSave.direction = "send"
            toSave.isShow = true
            toSave.dateTime = new Date()
            toSave.raw = [body.data, JSON.parse(data)]
            toSave.send_detail = JSON.parse(data)
            var contact = await strapi.db.query('api::contact.contact').findOne({where: {phone_number:post.recipient,whatsapp_send_number_id: whatsapp_send_number_id}})
            if(contact != undefined){
                toSave.contact = contact.id
            }
            toSave.phone_number = post.recipient
            toSave.status = "failed"
            toSave.type = type
            toSave.business_phone_number = whatsapp_phone_number
            if(ctx.state.user != undefined){
                toSave.sent_by = ctx.state.user.id
            }
            if(message != undefined && type == "text"){
                toSave.message = message
            }
            var test = strapi.service('api::whatsapp-message.whatsapp-message').create({data:toSave})

            return ctx.send(body.data.error.message, 400) 
        }else{
            body = body.data
            if(body.status == "failed"){
                return ctx.send("error", 400)
            }
            var toSave = {}
            toSave.isShow = true
            toSave.direction = "send"
            toSave.phone_number = body.contacts[0].wa_id
            toSave.whatsapp_message_id = body.messages[0].id
            toSave.type = type
            toSave.send_detail = JSON.parse(data)
            toSave.raw = [body, JSON.parse(data)]
            toSave.dateTime = new Date()
            toSave.business_phone_number = whatsapp_phone_number
            if(ctx.state.user != undefined){
                toSave.sent_by = ctx.state.user.id
            }
            var contact = await strapi.service('api::whatsapp-message.whatsapp-message').saveContact(toSave.phone_number,null,null,whatsapp_send_number_id)
            if(contact != undefined){
                toSave.contact = contact.id
            }
            if(message != undefined && type == "text"){
                toSave.message = message
            }
            var files
            if(media_id != undefined){
                files = await strapi.service('api::whatsapp-message.whatsapp-message').getWhatsappMedia(media_id)
                toSave.media_detail = media_detail
                toSave.media_detail.whatsapp_id = media_detail.id
                toSave.media_detail.mime_type = files.fileDetail.type
                toSave.media_detail.extension = files.fileDetail.extension
                delete toSave.media_detail["id"]
            }
            var stored = await strapi.db.query('api::whatsapp-message.whatsapp-message').findOne({where: {whatsapp_message_id: toSave.whatsapp_message_id }})
            if(stored == undefined){
                stored = await strapi.service('api::whatsapp-message.whatsapp-message').create({data: toSave}) 
            }else{
                stored = await strapi.service('api::whatsapp-message.whatsapp-message').update(stored.id, {data:toSave})
            }
            
            if(files != undefined){
                console.log(files)
                await strapi.service('api::whatsapp-message.whatsapp-message').saveBufferAsImage (new Date(), "api::whatsapp-message.whatsapp-message", files.media, "media", stored.id , "" ,files.fileDetail)
            }
            console.log("end")
            
        }
        return ctx.send("done")
    },
    // 隐藏 某条消息
    async hide(ctx){
        if(ctx.params.id != undefined){
            await strapi.service('api::whatsapp-message.whatsapp-message').update(ctx.params.id,{data: {isShow : false}})
            return ctx.send("hide",200)
        }
    },
    // 启用 某条消息
    async show(ctx){
        if(ctx.params.id != undefined){
            await strapi.service('api::whatsapp-message.whatsapp-message').update(ctx.params.id,{data: {isShow : true}})
            return ctx.send("show",200)
        }
    },

    async receive(ctx) {
        var post = ctx.request.body
        console.log("post : ",post)
        for(var entry of post.entry){
            for(var change of entry.changes){
                console.log("change.value : ",change.value)
                console.log("change.field : ", change.field)
                if(change.field == "messages"){
                    await strapi.service('api::whatsapp-message.whatsapp-message').processMessage(change);
                }
                if(change.field == "message_template_status_update"){
                    await strapi.service('api::whatsapp-message.whatsapp-message').updateMessageTemplateStatus(change);
                }
            }
        }
        return ctx.send("done",200)
    },
    async verify(ctx) {
        console.log(ctx)
        const verify_token = "manfullsTechnology";
        var req = ctx.query;
        // Parse params from the webhook verification request
        let mode = req["hub.mode"];
        let token = req["hub.verify_token"];
        let challenge = req["hub.challenge"];

        // Check if a token and mode were sent
        if (mode && token) {
            // Check the mode and token sent are correct
            if (mode === "subscribe" && token === verify_token) {
                // Respond with 200 OK and challenge token from the request
                console.log("WEBHOOK_VERIFIED");
                ctx.send(challenge,200)
            } else {
            // Responds with '403 Forbidden' if verify tokens do not match
                ctx.forbidden("end of controller")
            }
        }
    },

    async manual(ctx) {
        // console.log(await strapi.db.query('api::whatsapp-message.whatsapp-message').find({where:{phone_number:"92779625"}}))
        var messages = await strapi.db.query('api::whatsapp-message.whatsapp-message').findMany({where :{"_limit" : -1}})
        for(var message of messages){
            await strapi.service('api::whatsapp-message.whatsapp-message').update(message.id,{data:{isShow:true}})
        }
        // await strapi.db.query('api::whatsapp-message.whatsapp-message').delete({phone_number:"92779625"})
    },
}))
