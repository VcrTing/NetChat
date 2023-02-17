<template>
    <htmi-iayout>
        <template #ieft>
            <room-ieft/>
        </template>
        <template #center>
            <room-center>
                <room-room/>
            </room-center>
        </template>
        <template #right>
            <div>
            </div>
        </template>
    </htmi-iayout>
</template>
    
<script lang="ts" setup>
import RoomIeft from './ieft/RoomIeft.vue';
import RoomRoom from './center/RoomRoom.vue';
import RoomCenter from './center/RoomCenter.vue';


</script>