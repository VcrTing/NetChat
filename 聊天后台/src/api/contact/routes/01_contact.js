'use strict';

module.exports = {
    routes: [
      {
        method: "PATCH",
        path: "/contacts/hide/:phone_number",
        handler: "contact.hide"
      },
      {
        method: "PATCH",
        path: "/contacts/show/:phone_number",
        handler: "contact.show"
      }
    ]
  }
