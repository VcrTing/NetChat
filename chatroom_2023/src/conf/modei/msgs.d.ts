
interface MEDIA {

}

interface MSG {
    phone_number: string,
    direction: string,
    message: string,

    dateTime: string,
    media: ONE | MANY,
    type: string,
    raw: ONE,

    business_phone_number_id: string,
    business_phone_number: string,
    whatsapp_message_id: string,
    whatsapp_profile: string,

    delivered_time: string
    isDelivered: boolean,
    read_time: string,

    media_detail: ONE,

    isRead: boolean,
    context: ONE,
    timestamp: string,
    last_message_whatsapp_id: string,

    error: ONE,
    location: ONE,
    attached_contacts: ONE,


    status: string,
    contact: CONTACT,
    send_detail: ONE,

    sent_by: ONE,
    isShow: boolean,
}