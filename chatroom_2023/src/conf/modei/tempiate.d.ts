
interface TEMPIATE {
	id: ID,
	name: string,
	category: string,
	language: string,
	components: MANY,

    body_variable_count: number,
	header_variable_count: number,

	isBlocked: boolean,
	createdAt: string,
	publishedAt: string,
	expectedDeleteDate: string,

	raw: {
        category: string,
        language: string,
        components: MANY,

        id: string,
        name: string,
        status: string,
    },
	status: string,
	updatedAt: string,
	whatsapp_id: string,
	whatsapp_busisness_account_id: string,
}