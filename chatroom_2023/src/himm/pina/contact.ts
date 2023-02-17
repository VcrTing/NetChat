import { defineStore } from 'pinia'

export const contactPina = defineStore("contactPina", {
    state: () => ({
        current: <CONTACT>{ },
        contacts: <CONTACT[]>[ ]
    }),
    actions: {
        save_current_by_phone(phone: string) {
            let res = <CONTACT>{ }
            this.contacts.map((e: CONTACT) => {
                if (e.phone_number === phone) { res = e }
            }); this.current = res
        },
        save_current(v: CONTACT) { this.current = v ? v : <CONTACT>{ } },
        save_contacts(v: CONTACT[]) { this.contacts = v ? v : <CONTACT[]>[ ] }
    },
    getters: {
        has_current(state) { return (state.current && state.current.phone_number) }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'wind_contact',
                storage: sessionStorage, 
                paths: [ 'contact' ]
            }
        ]
    }
}); 