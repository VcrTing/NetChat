<template>
    <div class="chat-user-paner">
        <eos-user-room-filter @search="searchUser" @sort="sortUser"></eos-user-room-filter>
        <div v-if="has_room">
            <div @click="change(v)" v-for="(v, i) in contacts" :key="i">
                <eos-user-room-card v-if="v" :chatter="v" :msgs="getMsgs(v)"></eos-user-room-card>
            </div>
        </div>
        <eos-empty-conact v-else></eos-empty-conact>
    </div>
</template>

<script>
import EosUserRoomCard from '../../../../eos/user/room/EosUserRoomCard.vue'
import EosUserRoomFilter from '../../../../eos/user/filter/EosUserRoomFilter.vue'
import EosEmptyConact from '../../../../eos/shimmer/empty/EosEmptyConact.vue'

export default {
  components: { EosUserRoomCard, EosUserRoomFilter, EosEmptyConact },
    methods: {
        searchUser(q) {
            console.log('筛选 =', q)
            console.log('要从中 =', this.rooms)
        },
        sortUser(v) {
            console.log('SORT =', v)
        },  
        change(chr) {
            const ph_oid = chr.phone_number // 
            if (ph_oid != this.chatter.phone_number) {
                console.log('改变 oid =', ph_oid)
                this.pina().change_chatter( ph_oid )
            }
        },

        // 根据用户 contact   
        getMsgs(uu) {
            let src = uu ? uu.phone_number : ''
            let res = undefined
            for (let k in this.rooms) {
                if (k == src) {
                    res = this.rooms[k].msgs
                }
            }; return res ? res : [ ]
        }        
    },
    mounted() {
        console.log(this.contacts)
    },
    computed: {
        users() {
            let res = [ ]

        },

        // 所有聊天
        rooms() { return this.pina().rooms },
        // 
        chatter() { return this.pina().chatter },
        // 所有联络人
        contacts() { 
            let res = [ ]
            for (let k in this.rooms) {
                res.push(this.rooms[k].chatter)
            }; return res
        },

        has_room() { 
            let res = true
            if (JSON.stringify(this.rooms) == '{}') { res = false }
            return res },
    }
}
</script>

<style>

</style>