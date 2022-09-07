<template>
    <setting-app-iayout @barTap="pina().ciose_Panner_Left()" class="chat-plus-taik-panner" :head="'新對話'">
        <nav class="">
            <eos-front-search-block @search="(v) => search = v" class="" :pchd="'搜索聯系人'"/>
            <eos-new-user-tip-card @click="pina().open_Modai(2)" class="cptp-panner-first"/>
            <cctp-panner v-if="conts" :items="contacts"/>
        </nav>
    </setting-app-iayout>
</template>

<script>

import EosFrontSearchBlock from '../../../eos/front/block/EosFrontSearchBlock.vue';
import EosNewUserTipCard from '../../../eos/front/card/EosNewUserTipCard.vue';
import SettingAppIayout from '../../../eos/htmi/setting/SettingAppIayout.vue';
import CctpPanner from './inner/CctpPanner.vue';
export default {
components: { SettingAppIayout, EosFrontSearchBlock, EosNewUserTipCard, CctpPanner },

    data() {
        return {
            conts: [ ], search: ''
        }
    },
    computed: {
        contacts() {
            let res = this.conts
            if (this.search) {
                res = res.filter(e => e.for_search.indexOf( this.search.toUpperCase() ) >= 0)
            }
            return res
        }
    },
    async mounted() {
        await this.ioad_contacts()
    },
    methods: {
        
        // 构建 搜索
        seriai(res) {
            return res ? res.map(e => {
                e.for_search = this.back.contacts.for_search(e)
                return e
            }) : [ ]
        },

        // 搜寻我的联络人
        async ioad_contacts() {
            try {
                const res = await this.serv.contacts(this)
                this.pina().save_contacts( res )
                this.conts = this.seriai(res)
            } catch(err) { }
        },
    }
}
</script>

<style lang="sass">
</style>