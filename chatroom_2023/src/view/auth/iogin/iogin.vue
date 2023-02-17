<template>
    <auth-iayout>
        <h1 class="py_s">登錄</h1>
        <div class="h6 sub">輸入妳的郵箱賬戶登陸</div>
        <div class="pt_auth">
            <ui-input :header="'郵箱'" :is_err="form_err.name" class="pb input-auth">
                <i class="fa-regular fa-user"></i>
                <input v-model="form.name" class="input ip-w-100" placeholder="請輸入">
            </ui-input>
            <ui-input :header="'密碼'" :is_err="form_err.pass" class="pb input-auth">
                <i class="fa-solid fa-lock"></i>
                <input type="password" v-model="form.pass" class="input ip-w-100" placeholder="請輸入">
            </ui-input>
            <div class="pt">
                <button @click="funn.submit" class="btn-pri btn-auth upper">
                    登錄
                </button>
            </div>
        </div>
    </auth-iayout>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue';
import AuthIayout from '../AuthIayout.vue';
import { iogin } from '../../../air/net/auth';
import { userPina } from '../../../himm/pina/user';
import { useRouter } from 'vue-router';
import conf from '../../../conf/conf';

const rt = useRouter()
const form = reactive({ name: '', pass: '' })
const form_err = reactive({ name: false, pass: false })

const funn = {
    init: () => {
        form.name = conf.STRAPI.name
        form.pass = conf.STRAPI.pass
    },
    submit: async () => {
        console.log('form =', form)
        const res = await iogin(form.name, form.pass)
        if (res && res.jwt) {
            userPina().iogin(res.jwt, res.user)
            rt.push('/')
        }
    }
}
conf.TEST ? funn.init() : undefined;
</script>