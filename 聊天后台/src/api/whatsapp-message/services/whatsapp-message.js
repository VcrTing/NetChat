'use strict';

/**
 * whatsapp-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;
var axios = require('axios');
var fs = require('fs');
const whatsapp_token = "EAAOVe1zzX2oBAFU4dWdZBJZBTsUjH99vCyoIh1SC4FURLzsO65ll4djEZBFU3pyuofAv74lSMpJEbBxZCt12g6kYHnQOP9hog6Y2hdMLXf7FpAPrNhBSPMD8pyGkp0gqM5rojo1BRAHpx61npfZCJXHZBOWqzAjWWZA5IzzxWUZAhaf5vHjpVLJiMhePsvwgutttclZAQ1nJ94gZDZD"
const whatsapp_api_version = "v14.0"
const whatsapp_send_number_id = "107489675310013"
const whatsapp_busisness_account_id = "104064659185997"
const whatsapp_phone_number = "85251282825"

const { Readable } = require("stream");

const getServiceUpload = (name) => {
  return strapi.plugin("upload").service(name);
};

const uploadAndLinkDocument = async (buffer, fileDetail, refId, ref, field) => {
  const config = strapi.config.get("plugin.upload");

  // add generated document
  const entity = {
    name: fileDetail.name,
    hash: fileDetail.name,
    ext: "."+fileDetail.extension,
    mime: fileDetail.type,
    size: buffer.length,
    provider: config.provider,
  };
  if (refId) {
    entity.related = [
      {
        id: refId,
        __type: ref,
        __pivot: { field },
      },
    ];
  }
  console.log(entity)
  entity.getStream = () => Readable.from(buffer);
  await getServiceUpload("provider").upload(entity);

  const fileValues = { ...entity };
  console.log(fileValues)
  const res = await strapi
    .db.query("plugin::upload.file")
    .create({ data: fileValues });
  return res;
};


module.exports = createCoreService('api::whatsapp-message.whatsapp-message', ({ strapi }) => ({
    async getWhatsappDetail(ctx) {
        var whatsapp_app
        if(ctx.state.user != undefined){
            var user = await strapi.db.query('plugin::users-permissions.user').findOne({where :{id: ctx.state.user.id }, populate:{whatsapp_account:true}})
            if(ctx.state.user.role.type == "messager"){
                whatsapp_app = user.whatsapp_account
            }
            if(ctx.state.user.role.type == "admin"){
                if(ctx.query.filters != undefined){
                    if(ctx.query.filters.whatsapp_send_number_id != undefined){
                        if(ctx.query.filters.whatsapp_send_number_id.$eq!= undefined){
                            whatsapp_app = await strapi.db.query('api::whatsapp-account.whatsapp-account').findOne({where: { whatsapp_send_number_id: ctx.query.filters.whatsapp_send_number_id.$eq} })
                        }
                    }
                }
                if(ctx.params.whatsapp_send_number_id != undefined){
                    whatsapp_app = await strapi.db.query('api::whatsapp-account.whatsapp-account').findOne({where: { whatsapp_send_number_id: ctx.params.whatsapp_send_number_id} })
                }
            }
            if(whatsapp_app == undefined){
                whatsapp_app = user.whatsapp_account
            }
        }
        if(whatsapp_app == undefined){
            var whatsapp_send_number_id = await strapi.service('api::whatsapp-message.whatsapp-message').whatsapp_send_number_id
            whatsapp_app = await strapi.db.query('api::whatsapp-account.whatsapp-account').findOne({where: { whatsapp_send_number_id: whatsapp_send_number_id} })
        }
        return whatsapp_app
    },
    async saveContact(phone_number, profile_name, message_time, whatsapp_send_number_id){
        var contact = await strapi.db.query('api::contact.contact').findOne({ where :{ phone_number : phone_number, whatsapp_send_number_id : whatsapp_send_number_id}})
        var c = {}
        c.phone_number = phone_number
        c.isShow = true
        if(profile_name != undefined){
            c.profile_name = profile_name
        }
        if(message_time != undefined){
            c.last_conversation_time = message_time
            //add 24 hours
            var day_after =  new Date(new Date(message_time).getTime() + 60 * 60 * 24 * 1000);
            c.free_response_limit = day_after
        }
        if(whatsapp_send_number_id != undefined){
            c.whatsapp_send_number_id = whatsapp_send_number_id
        }
        if(contact == undefined){
            contact = await strapi.service('api::contact.contact').create({data : c})
        }else{
            contact = await strapi.service('api::contact.contact').update(contact.id, {data : c})
        }
        return contact
    },
    async saveBufferAsImage (givenDay, db_name, buffer, fieldname, id, additional_name = '',fileDetail) {
        //save and upload signature
        var name = fileDetail.name + "." + fileDetail.extension
        var month = givenDay.getUTCMonth() + 1; //months from 1-12
        var day = givenDay.getUTCDate();
        var year = givenDay.getUTCFullYear();
        var path = "../" +year+"-"+month+"-"+day+"-"+ fieldname + "_" + fileDetail.name + "." + fileDetail.extension
        fs.writeFileSync(path, buffer);
        const fileStat = fs.statSync(path);
        console.log(fileDetail)
        /*
        const attachment = await strapi.plugins.upload.services.upload.upload({
            data: {
                refId: id,
                ref: db_name,
                field: fieldname,
                'source':'content-manager'
            },
            files: {
                path: path,
                name: name,
                type: fileDetail.type, // mime type
                size: fileStat.size,
            },
        });*/
        var attachment = await uploadAndLinkDocument(buffer, fileDetail, id , db_name, fieldname)

        
        fs.unlink(path,function(err){
            if(err) return console.log(err);
            console.log('temporary file deleted successfully');
        }); 
        return attachment
    },
    async processMessage(change){
        var whatsapp_id
        var files
        var received_message = {}
        var changeClone = JSON.parse(JSON.stringify(change));
        received_message.raw = changeClone
        var phone_detail
        if(change.value != undefined){
            var value = change.value
            if(value.metadata != undefined){
                if(value.metadata.display_phone_number != undefined){
                    received_message.business_phone_number = value.metadata.display_phone_number
                }
                if(value.metadata.phone_number_id != undefined){
                    received_message.business_phone_number_id = value.metadata.phone_number_id
                }
                var waAcc = await strapi.db.query('api::whatsapp-account.whatsapp-account').findOne({where :{ whatsapp_send_number_id: value.metadata.phone_number_id}})
                if(waAcc != undefined){
                    phone_detail = waAcc
                }
            }
            var contactList = {}
            if(value.contacts != undefined){
                for(var contact of value.contacts){
                    contactList[contact.wa_id] = contact.profile.name
                }
            }
            //receiving messages
            if(value.messages != undefined){
                received_message.direction = "receive"
                for(var message of value.messages){
                    if(message.context != undefined){
                        received_message.context = message.context
                        received_message.last_message_whatsapp_id = message.context.id
                        var last = await strapi.db.query('api::whatsapp-message.whatsapp-message').findOne({where :{whatsapp_message_id: message.context.id }})
                        if(last != undefined){
                            received_message.last_message_relation = last.id
                        }
                         
                    }
    
                    whatsapp_id =  message.id
                    var timeDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
                    timeDate.setUTCSeconds(message.timestamp);
                    received_message.dateTime = timeDate
                    received_message.timestamp = message.timestamp
                    received_message.type = message.type
                    if(message.type == "location"){
                        if(message.location != undefined){
                            received_message.location = message.location
                        }
                    }
                    if(message.type == "contacts"){
                        if(message.contacts != undefined){
                            received_message.attached_contacts = message.contacts
                        }
                    }
                    if(message.type == "text"){
                        if(message.text != undefined){
                            received_message.message = message.text.body
                        }
                    }
                    if(message.type == "button"){
                        if(message.button != undefined){
                            received_message.message = message.button.payload
                        }
                    }
                    var media_type = ["document", "video", "sticker", "audio","image"]
                    if(media_type.includes(message.type)){
                        files = await strapi.service('api::whatsapp-message.whatsapp-message').getWhatsappMedia(message[message.type].id,phone_detail)
                        received_message.media_detail = message[message.type]
                        received_message.media_detail.whatsapp_id = message[message.type].id
                        received_message.media_detail.extension = files.fileDetail.extension
                        delete received_message.media_detail["id"]
                    }
                    if(message.errors != undefined){
                        console.log(message.errors[0])
                        received_message.errors = message.errors[0]
                    }
                    received_message.whatsapp_message_id = message.id
                    received_message.phone_number = message.from
                    received_message.whatsapp_profile = contactList[message.from]
                    var contact = await strapi.service('api::whatsapp-message.whatsapp-message').saveContact(received_message.phone_number,received_message.whatsapp_profile,timeDate,phone_detail.whatsapp_send_number_id)
                    if(contact != undefined){
                        received_message.contact = contact.id
                    }
                    
                }
            }
            //receiving message status update
            if(value.statuses != undefined){
                for(var status of value.statuses){
                    whatsapp_id = status.id
                    if(status["conversation"] != undefined){
                        if(status["conversation"]["origin"] != undefined){
                            // if(status["conversation"]["origin"]["type"] != undefined){
                            //     received_message.type = status["conversation"]["origin"]["type"]
                            // }
                        }
                    }
                    switch (status.status) {
                        case 'sent':
                            received_message.status = 'sent'
                            var dateTime = new Date(0); // The 0 there is the key, which sets the date to the epoch
                            dateTime.setUTCSeconds(status.timestamp);
                            received_message.dateTime = dateTime;
                            received_message.timestamp = status.timestamp
                            break;
                        case 'delivered':
                            received_message.status = 'delivered'
                            var deliveredDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
                            deliveredDate.setUTCSeconds(status.timestamp);
                            received_message.delivered_time = deliveredDate
                            received_message.isDelivered = true
                            break;
                        case 'read':
                            received_message.status = 'read'
                            var readDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
                            readDate.setUTCSeconds(status.timestamp);
                            received_message.read_time = readDate
                            received_message.isRead = true
                            break;
                        case 'failed':
                            received_message.status = 'failed'
                            console.log('error');
                            for(var error of status.errors){
                                console.log(error)
                            }
                            break;

                        default:
                            console.log('error');
                      }
                    
                }
            }

            //saving messages
            var stored = await strapi.db.query('api::whatsapp-message.whatsapp-message').findOne({where :{whatsapp_message_id: whatsapp_id }})
            var raw = []
            received_message.isShow = true
            if(stored == undefined){
                raw.push(received_message.raw)
                received_message.raw = raw
                stored = await strapi.service('api::whatsapp-message.whatsapp-message').create({data: received_message})
            }else{
                var raw = stored.raw
                if(Array.isArray(stored.raw ) == false){
                    raw = []
                }
                raw.push(received_message.raw)
                received_message.raw = raw
                stored = await strapi.db.query('api::whatsapp-message.whatsapp-message').update({where: {whatsapp_message_id: whatsapp_id }, data: received_message})
            }
            if(files != undefined){
                if(stored != undefined){
                    console.log(files)
                    await strapi.service('api::whatsapp-message.whatsapp-message').saveBufferAsImage (new Date(), "api::whatsapp-message.whatsapp-message", files.media, "media", stored.id , "" ,files.fileDetail)
                }
            }
        }
        
    
    },
    async updateMessageTemplateStatus(change){
        //receiving template status update
        if(change.value != undefined){
            // console.log(change)
            var value = change.value
            if(value.message_template_id != undefined){
                await strapi.service('api::whatsapp-message.whatsapp-message').getTemplate()
                console.log(value.message_template_name + " has been updated")
            }
        }
    },
    async getWhatsappMedia(media_id, phone_detail){
        var endpoint = "https://graph.facebook.com/v13.0/"+ media_id
        var config = {
            method: "get",
            url : endpoint,
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + phone_detail.whatsapp_token,
            },
        };
        var urlResponse = await axios(config)
        const mime = require('mime-types');
        var extension = mime.extension(urlResponse.data.mime_type); 
        var fileDetail = {
            name: urlResponse.data.id,
            type: urlResponse.data.mime_type, // mime type
            size: urlResponse.data.file_size,
            extension: extension
        }
        if(urlResponse.data.url != undefined){
            var endpoint = urlResponse.data.url + "/" + media_id
            var config = {
                method: "get",
                url : endpoint,
                headers: { 
                    'Content-Type': urlResponse.data.mime_type, 
                    'Authorization': 'Bearer ' + phone_detail.whatsapp_token,
                },
                responseType: 'arraybuffer'
            };
            var response = await axios(config)
            if(response.status == 200){
                var media = response.data
                return {
                    media: media,
                    fileDetail: fileDetail
                }
            }
           
        }


    },
    whatsapp_token : whatsapp_token,
    whatsapp_api_version : whatsapp_api_version,
    whatsapp_send_number_id : whatsapp_send_number_id,
    whatsapp_busisness_account_id : whatsapp_busisness_account_id
}))
