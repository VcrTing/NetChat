'use strict';

module.exports = {
    routes: [
      {
        "method": "GET",
        "path": "/whatsapp-messages",
        "handler": "whatsapp-message.find"
      },
      {
        "method": "GET",
        "path": "/whatsapp-messages-verify",
        "handler": "whatsapp-message.verify"
      },
      {
        "method": "POST",
        "path": "/whatsapp-messages-verify",
        "handler": "whatsapp-message.receive"
      },
      {
        "method": "POST",
        "path": "/send_whatsapp_messages",
        "handler": "whatsapp-message.send"
      },
      {
        "method": "POST",
        "path": "/send_whatsapp_messages/:whatsapp_send_number_id",
        "handler": "whatsapp-message.send"
      },
      {
        "method": "GET",
        "path": "/whatsapp_messages/manual",
        "handler": "whatsapp-message.manual"
      },
      {
        "method": "PATCH",
        "path": "/whatsapp_messages/hide/:id",
        "handler": "whatsapp-message.hide"
      },
      {
        "method": "PATCH",
        "path": "/whatsapp_messages/show/:id",
        "handler": "whatsapp-message.show"
      }
    ]
  }
