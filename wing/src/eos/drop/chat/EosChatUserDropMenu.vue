<template>
    <ui-drop-tap class="user-room-droptap">
        <template v-slot:trig>
            <span>
                <i class="fa-solid fa-angle-down"></i>
            </span>
        </template>
        <template v-slot:cont>
            <nav class="py">
                <button @click.stop="option(1)">删除对话</button>
                <button @click.stop="option(2)">
                    <span v-if="is_top">取消頂置</span>
                    <span v-else>顶置对话</span>
                </button>
                <button @click.stop="option(3)">标记为未读</button>
            </nav>
        </template>
    </ui-drop-tap>
</template>

<script>
import UiDropTap from '../../../front/ui/dropdown/UiDropTap.vue';
export default {
  components: { UiDropTap },
    props: [ 'chatter' ],
    computed: {
        rooms() { return this.pina().rooms },
        phoned() { return this.chatter.phone_number },
        u_of_rooms() {
            let res = this.rooms[ this.phoned ]
            return res ? res : null
        },
        is_top() {
            let res = this.u_of_rooms
            return res ? res.chatter.is_top : false
        }
    },
    methods: {
        // 删除聊天
        trash() { this.phoned ? this.pina().trash_this_taik( this.phoned ) : undefined },
        // 顶置聊天
        overhead() { this.phoned ? this.pina().overhead_this_taik( this.phoned ) : undefined },

        option( v ) {
            if (v == 1) { this.trash() }
            else if (v == 2) { this.overhead() }
        },
    }
}
</script>

<style lang="sass">
.user-room-droptap
    width: 3.6em
    height: 1.4em
    text-align: right
    .droptap-trig
        i
            font-size: 1.6em
    .droptap-inner
        font-size: 14.5px
        width: auto
        min-width: auto
        button
            width: auto
            min-width: 8em
            display: block
            text-align: left
            padding-left: 1.5em
</style>