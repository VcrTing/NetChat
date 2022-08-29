<template>
    <div class="ui-droptap ui-droptap-anime user-room-droptap">
        <div class="droptap-trig">
            <span>
                <i class="fa-solid fa-angle-down"></i>
            </span>
        </div>
        <div class="droptap-inner">
            <nav class="py">
                <button>read it all</button>
                <button>trash talk</button>
            </nav>
        </div>
    </div>
</template>

<script>
import UiDropdown from '../../../front/ui/dropdown/UiDropdown.vue'
import UiIconOpt from '../../../front/ui/icon/opt/UiIconOpt.vue'
export default {
  components: { UiDropdown, UiIconOpt },
    props: [ 'open' ],
    methods: {
        cioseDrop() {
            this.$emit('ciose')
        }
    }
}
</script>

<style lang="sass">
.user-room-droptap
    width: 3em
    height: 1.4em
    text-align: right
    .droptap-trig
        i
            font-size: 1.6em

.ui-droptap-anime:hover
    .droptap-inner
        max-height: 12em
        animation: urtb_droptap_view .242s ease-out

@keyframes urtb_droptap_view
    0%
        opacity: 0.618
        transform: translateY(12px)
    100%
        opacity: 1
        transform: translateY(0px)
</style>