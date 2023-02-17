'use strict';

module.exports = {
    routes: [  
      {
        "method": "GET",
        "path": "/whatsapp_template",
        "handler": "whatsapp-template.getTemplate"
      },
      {
        "method": "GET",
        "path": "/whatsapp_template/:whatsapp_send_number_id",
        "handler": "whatsapp-template.getTemplate"
      },
      {
        "method": "POST",
        "path": "/send_whatsapp_message_template",
        "handler": "whatsapp-template.sendTemplate"
      },
      {
        "method": "POST",
        "path": "/send_whatsapp_message_template/:whatsapp_send_number_id",
        "handler": "whatsapp-template.sendTemplate"
      },
      {
        "method": "POST",
        "path": "/whatsapp_createTemplate",
        "handler": "whatsapp-template.createTemplate"
      },
      {
        "method": "POST",
        "path": "/whatsapp_createTemplate/:whatsapp_send_number_id",
        "handler": "whatsapp-template.createTemplate"
      },
      {
        "method": "POST",
        "path": "/whatsapp_disableTemplate",
        "handler": "whatsapp-template.disableTemplate"
      },
      {
        "method": "POST",
        "path": "/whatsapp_disableTemplate/:whatsapp_send_number_id",
        "handler": "whatsapp-template.disableTemplate"
      },
      {
        "method": "POST",
        "path": "/whatsapp_enableTemplate",
        "handler": "whatsapp-template.enableTemplate"
      },
      {
        "method": "POST",
        "path": "/whatsapp_enableTemplate/:whatsapp_send_number_id",
        "handler": "whatsapp-template.enableTemplate"
      }
    ]
  }
