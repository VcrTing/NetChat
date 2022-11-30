<template>
    <div class="chat-user-paner">
        <eos-user-room-filter :class="{ 'eosurf-work': nuii_search }" @search="(v) => search = v" @sort="() => reverse = !reverse"></eos-user-room-filter>
        <div v-if="has_room">
            <div v-show="!nuii_search">

                <cpcup-render-user v-if="contacts" :many="contacts"></cpcup-render-user>

            </div>
            <div class="cpcup-search-nuii" v-show="nuii_search">
                <span class="sub_x3 fs_14">沒有找到對話、聯系人或消息</span>
            </div>
        </div>
        <eos-empty-conact v-else></eos-empty-conact>
    </div>
</template>

<script>
import EosUserRoomFilter from '../../../../eos/user/filter/EosUserRoomFilter.vue'
import EosEmptyConact from '../../../../eos/shimmer/empty/EosEmptyConact.vue'
import CpcupRenderUser from './render/CpcupRenderUser.vue'

export default {
  components: { EosUserRoomFilter, EosEmptyConact, CpcupRenderUser },
    data() {
        return {
            reverse: false,
            search: '',
            nuii_search: false,
            def_user: {
                custom_name: null, id: 0, order: 99,
                for_search: "null",
                free_response_limit: "null",
                is_show: true,
                phone_number: '',
                profile_name: ''
            }
        }
    },
    methods: {

        funni_of_users(users) {
            return users.map(e => {
                const src = JSON.stringify( e.for_search )
                e.is_show = (src.indexOf( this.search.toUpperCase() ) > 0); return e
            })
        },
        
        _for_search(u) {
            return this.back.contacts.for_search(u)
        },
        // 给用户增加 排序
        seriai_users(cts) {
            cts = cts ? cts.map(e => {
                if (e) { return e } return this.def_user
            }) : [ ]
            console.log('CTS =', cts)
            return cts ? cts.map((e, i) => { 
                if (e) { 
                    e.order = i; e.is_show = true; e.for_search = this._for_search(e);
                    return e 
                } 
            }) : [ ]
        }
    },
    mounted() {
        // console.log('联络人(CPchatuserpaner) =', this.contacts)
    },
    watch: {
        search(n) {
            n ? this.$emit('sign_search') : undefined
        },
        contacts(n) {
            let o = [ ]
            n ? n.map(e => {
                if (e) { e.is_show ? o.push(e) : undefined }
            }) : undefined
            this.nuii_search = !(o && o.length > 0)
        }
    },
    computed: {

        // 所有联络人
        contacts() { 
            let res = [ ]
            for (let k in this.rooms) { res.push(this.rooms[k].chatter) }
            // 增加 ORDER，IS_SHOW
            res = this.seriai_users(res)

            // 依附 SORT
            res = res.sort((n, o) => this.reverse ? (o.order - n.order) : (n.order - o.order))

            // 监听搜索
            if (this.search) { res = this.funni_of_users(res) }

            return res
        },

        // 所有聊天
        rooms() { return this.pina().rooms },
        // 是否有聊天 ROOMS
        has_room() { let res = true; if (JSON.stringify(this.rooms) == '{}') { res = false }; return res },
    }
}
</script>
