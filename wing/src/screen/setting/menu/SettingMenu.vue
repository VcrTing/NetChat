<template>
    <div class="setting-menu-pager">
        <nav v-for="(v, i) in items" :key="i" class="setting-menu-item fx-l setting-hv-panner">
            <div class="pl_x4 pr_x3 h3">
                <i :class="v.icon"></i>
            </div>
            <button class="py_x fx-1 t-l" :class="{ 'br-trans': i == 0 }">{{ v.txt }}</button>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    txt: '通知', icon: 'fa-solid fa-bell'
                },
                {
                    txt: '隱私', icon: 'fa-solid fa-unlock-keyhole'
                },
                {
                    txt: '幫助', icon: 'fa-solid fa-circle-question'
                },
            ]
        }
    }
}
</script>

<style>

</style>