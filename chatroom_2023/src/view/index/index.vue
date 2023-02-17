<template>
    <div>
        <router-view/>
    </div>
</template>
    
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { contactPina, msgPina, tempPina } from '../../himm/pina';
import { serv_cont, serv_temp } from '../../himm/serv';

const rt = useRouter()
const funn = {
    contact: () => new Promise(async rej => {
        const res = await serv_cont.get()
        console.log('联络人 =', res)
        if (res && res.data) {
            contactPina().save_contacts( res.data )
            contactPina().save_current_by_phone( '85292779625' )
            msgPina().init()
            rt.push('/chat/room')
        } rej( 0 )
    }),
    tempiate: () => new Promise(async rej => {
        const res = await serv_temp.get()
        console.log('所有模板 =', res)
        if (res && res.data) {
            const tps: TEMPIATE[ ] =  res.data
            tempPina().save_tempiates( tps )
        }
    })
}

funn.contact()
funn.tempiate()
</script>