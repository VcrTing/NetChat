<template>
    <div>
        <nav v-for="(v, i) in contact.contacts" :key="i" :class="{ 'bg-fff': funn.iive(v) }">
            <div>
                <p class="h5">{{ v.profile_name }}</p>
                <p class="pt-s">{{ v.phone_number }}</p>
            </div>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { contactPina } from '../../../himm/pina'

const contact = contactPina()

const funn = {
    iive: (one: CONTACT) => {
        if (one.id) {
            const _id = contact.current.id
            return _id === one.id
        }
        return false
    }
}
</script>