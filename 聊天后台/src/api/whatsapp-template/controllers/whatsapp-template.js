'use strict';
const define = require('../../define')
/**
 * whatsapp-template controller
 * 
    const fs = require('fs');
    const FormData = require('form-data');
 */
const axios = require('axios');
const { parseMultipartData } = require('@strapi/utils')
const { createCoreController } = require('@strapi/strapi').factories;

const get_whatsapp_acc = async function(ctx, strapi) {
    return await strapi.service( define['API_WHATSAPP_MSG'] ).getWhatsappDetail( ctx )
}

module.exports = createCoreController( define['API_WHATSAPP_TMP'], ({ strapi }) => ({
    async findOne(ctx) {
        const wozapp_acc = await get_whatsapp_acc(ctx, strapi)
        if (wozapp_acc) {
            ctx = define.fiii_ctx_query( ctx )
            ctx.query.filters.whatsapp_busisness_account_id = { $eq: wozapp_acc[ 'whatsapp_busisness_account_id' ] }
        }
        return await super.findOne(ctx);
    },
    async find(ctx) {
        const wozapp_acc = await get_whatsapp_acc(ctx, strapi)
        if (wozapp_acc) {
            ctx = define.fiii_ctx_query( ctx )
            ctx.query.filters.whatsapp_busisness_account_id = wozapp_acc[ 'whatsapp_busisness_account_id' ]
        }
        const { data, meta } = await super.find( ctx) ; return { data, meta };
    },
    async getTemplate(ctx){
        const wozapp_acc = await get_whatsapp_acc(ctx, strapi)
        var response = await strapi.service( define['API_WHATSAPP_TMP'] ).getTemplate( wozapp_acc )
        return ctx.send(response.message, response.status) 
    },

    /*

    以下是 跨平台 模版 操作的 方法 =================================================================================

    */

    // 创建 Template of facekboook
    async createTemplate(ctx){
        var token = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_token;
        var whatsapp_busisness_account_id = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_busisness_account_id
        var whatsapp_send_number_id = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_send_number_id
        var whatsapp_app = await strapi.service( define['API_WHATSAPP_MSG'] ).getWhatsappDetail(ctx)
        if(whatsapp_app != undefined){
            whatsapp_send_number_id = whatsapp_app.whatsapp_send_number_id
            token = whatsapp_app.whatsapp_token
            whatsapp_phone_number = whatsapp_app.whatsapp_phone_number
            whatsapp_busisness_account_id = whatsapp_app.whatsapp_busisness_account_id
        }
        var whatsapp_api_version = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_api_version

        var post, media
        if (ctx.is('multipart')) {
            
            const { data, files } = parseMultipartData(ctx);
            post = data
            media = files
        }else{
            post = ctx.request.body
        }
        //filter fail entry
        if(post.category == undefined){
            return ctx.send("Message must have category (possible entries: [TRANSACTIONAL, MARKETING, OTP])", 400)
        }else{
            var categoryList = ["TRANSACTIONAL", "MARKETING", "OTP"]
            if(categoryList.includes(post.category)==false){
                return ctx.send("Category must be one of the following: [TRANSACTIONAL, MARKETING, OTP]", 400)
            }
        }
        if(post.name == undefined){
            return ctx.send("Message must have name", 400)
        }else{
            var stored = await strapi.db.query( define['API_WHATSAPP_TMP'] ).findOne({where: {name: post.name }})
            if(stored != undefined){
                return ctx.send("Message Template of name: " + post.name + " already exist", 400)
            }
        }
        if(post.language == undefined){
            return ctx.send("Message must have language", 400)
        }else{
            var languageList = [
                "en",
                "en_GB",
                "en_US",
                "zh_CN",                
                "zh_HK",
                "zh_TW"
            ]
            if(languageList.includes(post.language )==false){
                return ctx.send("language must be one of the following: " + languageList + "", 400)
            }
        }
        if(post.components == undefined){
            return ctx.send("Message must have components", 400)
        }else{
            if(Array.isArray(post.components)){
                var hasBody = false
                for(var entry of post.components){
                    if(entry.type == "BODY" || entry.type == "body" || entry.type == "Body"){
                        entry.type = "BODY"
                        hasBody = true

                    }
                }
                if(hasBody == false){
                    return ctx.send("Message.components must have BODY", 400)
                }
            }else{
                return ctx.send("Components must be array", 400)
            }
        }

        var endpoint =  "https://graph.facebook.com/" + whatsapp_api_version + "/"+ whatsapp_busisness_account_id + "/message_templates"
        
        var data = {
            components: post.components,
            language: post.language,
            name: post.name,
            category : post.category
        }
        data = JSON.stringify(data)

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
        }).catch(function (error) {
                //console.log(error);
                body = error.response
        });
        if(body.status != 200){
            console.log(body.data.error.message)
            return ctx.send(body.data.error.message, 400) 
        }else{
            console.log("sent")
            body = body.data
            console.log(body)
        }
        return ctx.send("done", 200)
    },
    // 
    async sendTemplate(ctx){
        var token = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_token;
        var whatsapp_send_number_id = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_send_number_id
        var whatsapp_phone_number = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_phone_number

        var whatsapp_app = await strapi.service( define['API_WHATSAPP_MSG'] ).getWhatsappDetail(ctx)
        if(whatsapp_app != undefined){
            whatsapp_send_number_id = whatsapp_app.whatsapp_send_number_id
            token = whatsapp_app.whatsapp_token
            whatsapp_phone_number = whatsapp_app.whatsapp_phone_number
        }

        var whatsapp_api_version = await strapi.service( define['API_WHATSAPP_MSG'] ).whatsapp_api_version
        var query = ctx.query;
        const parseBody = ctx => {
            if (ctx.is('multipart')) {
                return parseMultipartData(ctx)
            }
            var { data } = ctx.request.body || {}
            if(data == undefined)
                data = ctx.request.body
            return { data }
        }
    
        var { data, files } = parseBody(ctx)
        var post = data;
        console.log(post)
        //get recipient
        if(post.recipient == undefined){
            console.log("Message must have a recipient")
            return ctx.send("Message must have a recipient", 400)
        }else{
            //check if free session expired
            // post.recipient = post.recipient.replace(/[ -+()\s]/g, '');
            // var contact = await strapi.db.query('api::contact.contact').findOne({where: {phone_number: post.recipient, whatsapp_send_number_id : whatsapp_app.whatsapp_send_number_id}})
            // console.log(contact,post.recipient)
            // if(contact != undefined){
            //     var now = new Date()
            //     var limit = new Date(contact.free_response_limit)
            //     if(now > limit){
            //         console.log("Free response session limit passed")
            //         return ctx.send("Free response session limit passed", 400)
            //     }
            // }
        }

        var endpoint = "https://graph.facebook.com/"+ whatsapp_api_version +"/"+ whatsapp_send_number_id +"/messages"
        
        var message = "test_template_message_01"
        var lang_list = [
            "en",
            "zh_HK",
            "zh_CN"
        ]
        var type = "template"
        var data = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": post.recipient,
            "type": type,
            "template": {
                "name": "",
                "language": {
                    "code": "zh_HK"
                },
                "components": []
            }
        }
        if(query.lang != undefined){
            if(lang_list.includes(query.lang)){
                data.template.language.code = query.lang
            }
        }
        if(post.components != undefined){
            data.template.components = post.components
        }
        console.log(data)
        if(post.name != undefined){
            data.template.name = post.name
            message = post.name
        }else{
            console.log("Template_message must have a name")
            return ctx.send("Template_message must have a name", 400)
        }
        console.log(data)
        var postdata = JSON.stringify(data)

        var config = {
            method: "post",
            url : endpoint,
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + token,
            },
            data : postdata
        };
        
        var body
        await axios(config)
        .then(function (response) {
                body = response
        }).catch(function (error) {
                body = error.response
        });
        if(body.status != 200){
            var toSave = {}
            if(body.data.error.fbtrace_id != undefined){
                toSave.whatsapp_message_id = body.data.error.fbtrace_id
            }
            toSave.business_phone_number_id = whatsapp_app.whatsapp_send_number_id
            toSave.direction = "send"
            toSave.dateTime = new Date()
            toSave.send_detail = data
            toSave.raw = [body.data, data]
            var contact = await strapi.db.query('api::contact.contact').findOne({where: {phone_number:post.recipient, whatsapp_send_number_id : whatsapp_app.whatsapp_send_number_id}})
            if(contact != undefined){
                toSave.contact = contact.id
            }
            toSave.message = message
            toSave.phone_number = post.recipient
            toSave.status = "failed"
            toSave.type = type
            toSave.business_phone_number = whatsapp_phone_number
            if(ctx.state.user != undefined){
                toSave.sent_by = ctx.state.user.id
            }
            var test = strapi.service( define['API_WHATSAPP_MSG'] ).create({data: toSave})

            return ctx.send(body.data.error.message, 400) 
        }else{
            body = body.data
            var toSave = {}
            toSave.direction = "send"
            toSave.phone_number = body.contacts[0].wa_id
            toSave.whatsapp_message_id = body.messages[0].id
            toSave.business_phone_number_id = whatsapp_app.whatsapp_send_number_id
            toSave.business_phone_number = whatsapp_phone_number
            toSave.dateTime = new Date()
            toSave.message = message
            toSave.type = type
            toSave.send_detail = data
            toSave.raw = [body.data, data]
            if(ctx.state.user != undefined){
                toSave.sent_by = ctx.state.user.id
            }
            var contact = await strapi.service( define['API_WHATSAPP_MSG'] ).saveContact(toSave.phone_number,null,null,whatsapp_app.whatsapp_send_number_id)
            if(contact != undefined){
                toSave.contact = contact.id
            }
            var test = strapi.service( define['API_WHATSAPP_MSG'] ).create({data:toSave})
        }
        return ctx.send("done")
    },

    // 关闭 Template of facebook
    async disableTemplate(ctx){

        var post, media
        if (ctx.is('multipart')) {
            
            const { data, files } = parseMultipartData(ctx);
            post = data
            media = files
        }else{
            post = ctx.request.body
        }

        if(post.name == undefined){
            console.log("name must not be undefined")
            return ctx.send("name must not be undefined", 400) 
        }

        var stored = await strapi.db.query( define['API_WHATSAPP_TMP'] ).findMany({where : { name: post.name }})
        if(stored.length == 0){
            return ctx.send("No related Template found", 400)
        }else{
            var date = new Date()
            //date = date.setDate(date.getDate() + 30);
            //date = new Date(date)
            for(var entry of stored){
                var save = {isBlocked : true, expectedDeleteDate : date}
                var stored = await strapi.db.query( define['API_WHATSAPP_TMP'] ).update( entry.id, {data :save})
            }
        }
        //var response = await strapi.service( define['API_WHATSAPP_MSG'] ).deleteTemplate(post.name,user)
        //return ctx.send(response.message, response.status)
        ctx.send("done", 200)
    },
    // 启用 Template of facebook
    async enableTemplate(ctx){
        var post, media
        if (ctx.is('multipart')) {
            
            const { data, files } = parseMultipartData(ctx);
            post = data
            media = files
        }else{
            post = ctx.request.body
        }

        if(post.name == undefined){
            console.log("name must not be undefined")
            return ctx.send("name must not be undefined", 400) 
        }

        var stored = await strapi.db.query( define['API_WHATSAPP_TMP'] ).findMany({where: {name: post.name}})
        if(stored.length == 0){
            return ctx.send("No related Template found", 400)
        }else{
            for(var entry of stored){
                var save = {isBlocked : false, expectedDeleteDate : null}
                var stored = await strapi.db.query( define['API_WHATSAPP_TMP'] ).update(entry.id, {data : save})
            }
        }
        ctx.send("done", 200)
    }
}))
