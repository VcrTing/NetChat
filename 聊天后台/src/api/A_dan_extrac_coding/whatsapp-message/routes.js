'use strict';

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/whatsapp-messages",
            "handler": "whatsapp-message.find"
        },
    ]
}