'use strict';

/**
 * Auth.js controller
 *
 * @description: A set of functions called "actions" for managing `Auth`.
 */

/* eslint-disable no-useless-escape */

const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel('plugin::users-permissions.user');

  return sanitize.contentAPI.output(user, userSchema, { auth });
};
const { parseMultipartData } = require('@strapi/utils')

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




module.exports = (plugin) => {
  //extend user service
  const sanitizeOutput = (user) => {
    var {
      password, resetPasswordToken, confirmationToken,whatsapp_account, ...sanitizedUser
    } = user; // be careful, you need to omit other private attributes yourself
    sanitizedUser.whatsapp_send_number_id = whatsapp_account.whatsapp_send_number_id
    sanitizedUser.whatsapp_busisness_account_id = whatsapp_account.whatsapp_busisness_account_id
    sanitizedUser.whatsapp_app_name = whatsapp_account.whatsapp_app_name
    sanitizedUser.whatsapp_phone_number = whatsapp_account.whatsapp_phone_number
    return sanitizedUser;
  };
  
  //extend user controller
  plugin.controllers.user.find = async (ctx) => {
    const users = await strapi.entityService.findMany(
      'plugin::users-permissions.user',
      { ...ctx.params, populate: ['role', 'avatar', 'whatsapp_account'] }
    );

    ctx.body = users.map(user => sanitizeOutput(user));
  };
  return plugin;
};
