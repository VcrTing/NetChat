
module.exports = {
    /*
    contact是儲存通話對象的table。
        1.（即使是同一個通話對象，每一個WhatsApp account 都會有不同的儲存格）
        2. 每一個 WhatsApp Account可能會与同一個人對話，但是不同 WhatsApp account 對話時間都不同。
        WHATSAPP_SEND_NUMBER_ID: 
    */
    API_CONTACT: 'api::contact.contact',

    /*
    User是客戶登入我們系統的table ，
        裏面有連接WhatsApp Account的relation。
    */
    API_USER: '',

    /*
    Whatsapp-account 是whatsapp 的帳戶資料，
        裏面儲存了連接去WhatsApp的ID，存取碼等。
        裏面的資料因為安全理由不會給客戶看。
        Edgaremma官方人员账号
    */
    API_WHATSAPP_ACC: 'api::whatsapp-account.whatsapp-account',

    /*
    Whatsapp_message 就是從WhatsApp收到的訊息。
        （主要由Whatsapp_message controller “receive” 處理）
    */
    API_WHATSAPP_MSG: 'api::whatsapp-message.whatsapp-message',

    /*
    Whatsapp-template 是儲存了從WhatsApp找到的Temptate。
    */
    API_WHATSAPP_TMP: 'api::whatsapp-template.whatsapp-template',

    TEST_IOG: true,

    // 方法
    fiii_ctx_query(ctx) {
        if (ctx.query == undefined) { ctx.query = { } }
        if (ctx.query.filters == undefined) { ctx.query.filters = { } } return ctx
    }
}