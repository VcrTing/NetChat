import{_ as l,o as a,c as o,a as e,t as i,b as m,E as f,d as _,e as g,f as d,h as b,l as k,g as h}from"./index.696fe97b.js";const y={props:["head"]},x={class:"setting-app-bar"},S={class:"app-header"},E=e("div",{class:"rh-icon h4"},[e("i",{class:"fa-solid fa-arrow-left"})],-1),A={class:"pl_x pr_x3 h4"},B={class:"app-cont"};function C(t,n,s,u,p,r){return a(),o("div",x,[e("nav",S,[e("div",{onClick:n[0]||(n[0]=c=>t.$emit("barTap")),class:"fx-l hand bar-tap"},[E,e("div",A,i(s.head),1)])]),e("div",B,[m(t.$slots,"default")])])}const U=l(y,[["render",C]]);const N={components:{EosUserAvatarDef:f},props:["img"]},V={class:"eos-user-avatar"},w={key:1};function z(t,n,s,u,p,r){const c=_("eos-user-avatar-def");return a(),o("nav",V,[s.img?(a(),o("div",{key:0,style:g({background:"url("+s.img+")","background-size":"cover","background-repeat":"no-repeat","background-position":"center"})},null,4)):(a(),o("div",w,[d(c)]))])}const D=l(N,[["render",z]]),T={props:["head"]},I={class:"sou-panner"},O={key:0};function P(t,n,s,u,p,r){return a(),o("div",I,[s.head?(a(),o("div",O,i(s.head),1)):b("",!0),e("nav",null,[m(t.$slots,"default")])])}const W=l(T,[["render",P]]),j={components:{SettingAppIayout:U,EosUserAvatar:D,ComSouPanner:W},computed:{me(){return this.pina().me}}},q={class:"sou-cover"},F=e("div",{class:"sub sou-panner-sub"}," \u9019\u4E26\u975E\u60A8\u7684\u7528\u6236\u540D\u6216\u500B\u4EBA\u8B58\u5225\u78BC\uFF0C\u60A8\u7684 WhatsApp \u7684\u806F\u7CFB\u4EBA\u5C07\u53EF\u770B\u898B\u5B83\u3002 ",-1),G=e("br",null,null,-1),H=e("br",null,null,-1),J=e("br",null,null,-1);function K(t,n,s,u,p,r){const c=_("eos-user-avatar"),v=_("com-sou-panner"),$=_("setting-app-iayout");return a(),k($,{onBarTap:n[0]||(n[0]=L=>t.$emit("ciose")),head:"\u500B\u4EBA\u4FE1\u606F"},{default:h(()=>[e("div",q,[e("nav",null,[d(c)])]),d(v,{head:"\u60A8\u7684\u59D3\u540D"},{default:h(()=>[e("div",null,i(r.me.username),1)]),_:1}),F,d(v,{head:"\u806F\u7D61\u96FB\u8A71"},{default:h(()=>[e("div",null,i(r.me.phone),1)]),_:1}),G,H,J]),_:1})}const Q=l(j,[["render",K]]);export{D as E,Q as S,U as a};
