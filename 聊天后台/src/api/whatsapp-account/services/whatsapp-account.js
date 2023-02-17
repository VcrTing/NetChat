'use strict';

/**
 * whatsapp-account service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whatsapp-account.whatsapp-account');
