'use strict';

/**
 * whatsapp-template service
 */

const { createCoreService } = require('@strapi/strapi').factories;

const axios = require('axios');

module.exports = createCoreService('api::whatsapp-template.whatsapp-template', ({ strapi }) => ({
    
    // 自动删除 模版
    async autoDeleteTemplate(){
        var date = new Date()
        var stored = await strapi.db.query('api::whatsapp-template.whatsapp-template').findMany({where: {isBlocked : true, expectedDeleteDate_lte : date}})
        for(var entry of stored){
            var response = await strapi.service('api::whatsapp-template.whatsapp-template').deleteTemplate(entry.name)
            console.log(response)
        }
    },

    // 获取模版 by Axios
    async getTemplate(app){
        var whatsapp_api_version = await strapi.service('api::whatsapp-message.whatsapp-message').whatsapp_api_version
        var whatsapp_busisness_account_id = app.whatsapp_busisness_account_id
        var token = app.whatsapp_token;
        var config = {
            method: 'get',
            url: "https://graph.facebook.com/" + whatsapp_api_version + "/"+ whatsapp_busisness_account_id +"/message_templates",
            headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token, 
            },
        };
        var body
        await axios(config)
        .then(function (response) {
                body = response
                console.log("sent")
        }).catch(function (error) {
                body = error.response
        });
        var response = {status: body.status}
        if(body.status != 200){
            console.log(body.data.error.message)
            response.message = body.data.error.message
            return response
        }
        var excludeList = [
            "hello_world",
            "sample_flight_confirmation",
            "sample_happy_hour_announcement",
            "sample_issue_resolution",
            "sample_movie_ticket_confirmation",
            "sample_purchase_feedback",
            "sample_shipping_confirmation"
        ]
        body = body.data
        console.log("refreshing Template list")
        for(var entry of body.data){
            if(excludeList .includes(entry.name) == false ){
                entry.raw = JSON.parse(JSON.stringify(entry));
                var whatsapp_id = entry.id
                entry.whatsapp_busisness_account_id = whatsapp_busisness_account_id
                delete entry["id"]
                entry["whatsapp_id"] = whatsapp_id
                var stored = await strapi.db.query('api::whatsapp-template.whatsapp-template').findOne({where:{whatsapp_id: whatsapp_id }})
                if(stored != undefined){
                    var stored = await strapi.service('api::whatsapp-template.whatsapp-template').update(stored.id, {data : entry})
                }else{
                    entry.isBlocked = false
                    var stored = await strapi.service('api::whatsapp-template.whatsapp-template').create({data: entry})
                }
            }
           
        }
        response.message = "ok"
        return response
    },

    // 删掉 by Axios
    async deleteTemplate(name,app){
        var whatsapp_api_version = await strapi.service('api::whatsapp-message.whatsapp-message').whatsapp_api_version
        var whatsapp_busisness_account_id = app.whatsapp_busisness_account_id
        var token = app.whatsapp_token;
        var config = {
            method: 'DELETE',
            url: "https://graph.facebook.com/" + whatsapp_api_version + "/"+ whatsapp_busisness_account_id +"/message_templates",
            headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token, 
            },
            data: {name: name}
        };
        var body
        await axios(config)
        .then(function (response) {
                body = response
                console.log("sent")
        }).catch(function (error) {
                body = error.response
        });
        var response = {status: body.status}
        if(body.status != 200){
            console.log(body.data.error.message)
            response.message = body.data.error.message
            return response
        }
        response.message = "ok"
        return response
    },
}))
