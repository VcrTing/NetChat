import{_ as d,o,c as r,a as e,r as g,n as m,d as i,j as v,k as f,e as l,b as w,t as $,w as C,v as y,F as U,g as E,h as S,E as D}from"./index.706f447b.js";const M={props:["clear","_cis"],mounted(){}},B={class:"dropdown"},V=["id"],z=["id"];function F(t,n,a,u,_,s){return o(),r("div",B,[e("div",{class:"drop-trig",id:"popper_trig_"+t.$.uid},[g(t.$slots,"tit")],8,V),e("div",{class:m(["drop-inner",a._cis]),id:"popper_cont_"+t.$.uid},[g(t.$slots,"cont")],10,z)])}const b=d(M,[["render",F]]),N={props:["is_eff"]},L=e("i",null,"...",-1),R=[L];function T(t,n,a,u,_,s){return o(),r("div",{class:m(["ui-i",{"ui-i-eff":a.is_eff}])},R,2)}const x=d(N,[["render",T]]);const j={components:{UiDropdown:b,UiIconOpt:x}},A=e("nav",{class:"dropmenu-def drop-chat-user tit"},[e("button",null,"Archive chat"),e("button",null,"Mute notifications"),e("button",null,"Unpin chat"),e("button",null,"Mark as unread")],-1);function I(t,n,a,u,_,s){const c=i("ui-icon-opt"),p=i("ui-dropdown");return o(),v(p,null,{tit:f(()=>[l(c)]),cont:f(()=>[A]),_:1})}const O=d(j,[["render",I]]),P={components:{EosChatUserDropMenu:O},props:["chatter","msgs"],computed:{cher(){return this.chatter},reciever(){return this.pina().chatter},is_now(){return this.cher?this.cher.phone_number==this.reciever.phone_number:!1},name_avatar(){const t=this.cher?this.cher.profile_name:"";return t?t.substring(0,1):""}}},q=e("span",{class:"px_s"},null,-1),G={class:"user-avatar fx-c"},H=e("span",{class:"px_s"},null,-1),J={class:"t-l fx-1"},K={class:"fx-s"},Q=e("div",{class:"fs_s sus"},"\u6628\u5929 12:20",-1),W={class:"fs_s sub fx-s"},X={key:1};function Y(t,n,a,u,_,s){const c=i("eos-chat-user-drop-menu");return s.cher?(o(),r("nav",{key:0,class:m(["eos-user-room-card fx-s",{"bg-def":s.is_now}])},[q,e("div",G,[s.cher.avatar?(o(),r("div",{key:0,style:w({background:"url("+s.cher.avatar+")","background-size":"cover","background-repeat":"no-repeat","background-position":"center"})},null,4)):(o(),r("div",{key:1,class:m(["user-avatar user-def-avatar",{"bg-def":!s.is_now,"bg-avatar":s.is_now}])},[e("span",null,$(s.name_avatar),1)],2))]),H,e("nav",J,[e("div",K,[e("div",null,$(s.cher.profile_name),1),Q]),e("nav",W,[e("span",null,$(s.cher.phone_number),1),e("div",null,[l(c)])])])],2)):(o(),r("div",X))}const Z=d(P,[["render",Y]]),ee={data(){return{word:""}}},te={class:"f-row eos-user-room-filter"},se=e("div",null," \u6392\u5E8F ",-1);function ne(t,n,a,u,_,s){return o(),r("div",te,[C(e("input",{class:"input","onUpdate:modelValue":n[0]||(n[0]=c=>_.word=c),placeholder:"\u641C\u7D22\u7528\u6237"},null,512),[[y,_.word]]),se])}const oe=d(ee,[["render",ne]]),re={components:{EosUserRoomCard:Z,EosUserRoomFilter:oe},methods:{change(t){const n=t.phone_number;n!=this.chatter.phone_number&&(console.log("\u6539\u53D8 oid =",n),this.pina().change_chatter(n))}},computed:{rooms(){return this.pina().rooms},chatter(){return this.pina().chatter}}},ce={class:"chat-user-paner"},ae=["onClick"];function _e(t,n,a,u,_,s){const c=i("eos-user-room-filter"),p=i("eos-user-room-card");return o(),r("div",ce,[l(c),(o(!0),r(U,null,E(s.rooms,(h,k)=>(o(),r("div",{onClick:xe=>s.change(h.chatter),key:k},[h.chatter?(o(),v(p,{key:0,chatter:h.chatter,msgs:h.msgs},null,8,["chatter","msgs"])):S("",!0)],8,ae))),128))])}const ie=d(re,[["render",_e]]);const de={components:{UiDropdown:b,UiIconOpt:x}},ue={class:"dropmenu-def drop-chat-setting tit"},pe=e("button",null,"Starred messages",-1);function le(t,n,a,u,_,s){const c=i("ui-icon-opt"),p=i("ui-dropdown");return o(),v(p,null,{tit:f(()=>[l(c)]),cont:f(()=>[e("nav",ue,[pe,e("button",{onClick:n[0]||(n[0]=h=>t.go("/chat/settings"))},"Settings")])]),_:1})}const he=d(de,[["render",le]]),me={components:{EosChatSettingDropMenu:he,EosUserEasyCard:D}},fe={class:"fx-r"};function $e(t,n,a,u,_,s){return o(),r("div",fe)}const ve=d(me,[["render",$e]]),ge={components:{ChatTbLeft:ve,CpChatUsersPaner:ie}};function be(t,n,a,u,_,s){const c=i("chat-tb-left"),p=i("cp-chat-users-paner");return o(),r("div",null,[l(c,{class:"chat-top-bar px"}),l(p)])}const we=d(ge,[["render",be]]);export{we as default};