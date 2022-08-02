<template>
    <div>
        <ui-room-header class="app-bar" :size="6" :head="'Settings'"></ui-room-header>
        <br/>
        <br/>
        <div class="px py">

            <eos-user-card></eos-user-card>
        </div>
    </div>
</template>

<script>
import UiRoomHeader from '../../front/ui/header/UiRoomHeader.vue';
import EosUserCard from '../../eos/user/info/EosUserCard.vue';
export default {
    components: { UiRoomHeader, EosUserCard }
}
</script>

<style>

</style>