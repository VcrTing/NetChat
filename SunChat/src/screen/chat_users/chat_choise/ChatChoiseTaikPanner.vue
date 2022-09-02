<template>
    <setting-app-iayout @barTap="pina().ciose_Panner_Left()" class="chat-plus-taik-panner" :head="'新對話'">
        <nav class="">
            <eos-front-search-block class="" :pchd="'搜索聯系人'"/>
            <eos-new-user-tip-card @click="pina().open_Modai(2)" class="cptp-panner-first"/>
            <cctp-panner/>
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

}
</script>

<style lang="sass">
</style>