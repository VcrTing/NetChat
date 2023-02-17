'use strict';

/**
 * contact controller 
 * const { parseMultipartData } = require('@strapi/utils')
 */
const define = require('../../define')
const { createCoreController } = require('@strapi/strapi').factories;

// 为 query 加入 filters.whatsapp_send_number_id
const insert_send_id_for_query = async (ctx, strapi) => {
    let whatsapp_app = await strapi.service( define['API_MSG'] ).getWhatsappDetail(ctx)
    define['TEST_IOG'] ? console.log(whatsapp_app) : undefined
    if (whatsapp_app != undefined) {
        ctx = define.fiii_ctx_query( ctx )
        ctx.query.filters.whatsapp_send_number_id = { '$eq': whatsapp_app.whatsapp_send_number_id }
    } return ctx
}
// 修改 contact 的 show 与 hide
const edit_show_or_hide = async (ctx, strapi, phone_number, isShow) => {
    // 先 根据 phone_number 查询 contact
    let contact = await strapi.db.query( define['API_CONTACT'] ).findOne({
        where: { phone_number }
    })
    // 修改 contact 状态
    contact = await strapi.service( define['API_CONTACT'] ).update( contact.id, { data: { isShow } } )
    return ctx.send("hide", 200)
}

module.exports = createCoreController( define['API_CONTACT'] , ({ strapi }) => ({
    
    async findOne(ctx) {
        // 加入 send_id 限制
        ctx = await insert_send_id_for_query( ctx, strapi )
        // 返回 find one 结果
        return await super.findOne(ctx);
    },
    async find(ctx) {
        // 加入 send_id 限制
        ctx = await insert_send_id_for_query( ctx, strapi )
        // 获取 whatsapp 详情
        const { data, meta } = await super.find(ctx); 
        return { data, meta };
    },


    async hide(ctx) {
        const phone = ctx.params['phone_number']
        if (phone) { return await edit_show_or_hide(ctx, strapi, phone, false ) }
    },
    async show(ctx) {
        const phone = ctx.params['phone_number']
        if (phone) { return await edit_show_or_hide(ctx, strapi, phone, true ) }
    },
}))

/*
    let contact = await strapi.db.query( define['API_CONTACT'] ).findOne({
        where: { phone_number : ctx.params.phone_number }
    })
    contact = await strapi.service( define['API_CONTACT'] ).update( contact.id, { data: { isShow : false } } )
    return ctx.send("hide", 200)
*/