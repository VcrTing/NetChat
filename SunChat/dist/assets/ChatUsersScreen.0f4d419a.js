import{_ as d,o as n,c as r,a as t,b as g,n as f,d as i,e as x,t as $,f as u,j as C,v as E,F as U,r as S,h as v,i as D,w as y,E as T}from"./index.952d6d03.js";import{E as M,T as B}from"./TookitSpoonTimed.7ddeab44.js";const N={props:["clear","_cis"],mounted(){}},R={class:"dropdown"},V=["id"],z=["id"];function F(s,o,a,l,c,e){return n(),r("div",R,[t("div",{class:"drop-trig",id:"popper_trig_"+s.$.uid},[g(s.$slots,"tit")],8,V),t("div",{class:f(["drop-inner",a._cis]),id:"popper_cont_"+s.$.uid},[g(s.$slots,"cont")],10,z)])}const b=d(N,[["render",F]]),O={props:["is_eff"]},L=t("i",null,"...",-1),j=[L];function A(s,o,a,l,c,e){return n(),r("div",{class:f(["ui-i",{"ui-i-eff":a.is_eff}])},j,2)}const k=d(O,[["render",A]]);const I={components:{UiDropdown:b,UiIconOpt:k},props:["open"],methods:{cioseDrop(){console.log("\u5931\u53BB\u7126\u70B9"),this.$emit("ciose")}}},J={class:"ui-droptap ui-droptap-anime user-room-droptap"},P=t("div",{class:"droptap-trig"},[t("span",null,"...")],-1),q=t("div",{class:"droptap-inner"},[t("nav",{class:"py"},[t("button",null,"read it all"),t("button",null,"trash talk")])],-1),G=[P,q];function H(s,o,a,l,c,e){return n(),r("div",J,G)}const K=d(I,[["render",H]]);const Q={components:{EosChatUserDropMenu:K,EosUserAvatarDef:M,TookitSpoonTimed:B},props:["chatter","msgs"],data(){return{drop:!1}},methods:{editDrop(){this.drop=!this.drop}},computed:{cher(){return this.chatter},reciever(){return this.pina().chatter},is_now(){return this.cher?this.cher.phone_number==this.reciever.phone_number:!1},name_avatar(){const s=this.cher?this.cher.profile_name:"";return s?s.substring(0,1):""},iast_msg(){let s=this.msgs;s=s||[];let o=s.length;return o=o?o-1:0,s[o]}}},W=t("span",{class:"pl"},null,-1),X={class:"user-avatar fx-c"},Y={key:1},Z={class:""},ss={key:1},ts=t("span",{class:"px_s"},null,-1),es={class:"t-l fx-1"},os={class:"fx-s"},ns={class:"fs_s sub"},rs={class:"fs_s fx-s"},cs={class:"thd"},as={key:1};function _s(s,o,a,l,c,e){const _=i("eos-user-avatar-def"),p=i("tookit-spoon-timed"),h=i("eos-chat-user-drop-menu");return e.cher?(n(),r("nav",{key:0,class:f(["eos-user-room-card fx-s",{"bg-def":e.is_now}])},[W,t("div",X,[e.cher.avatar?(n(),r("div",{key:0,style:x({background:"url("+e.cher.avatar+")","background-size":"cover","background-repeat":"no-repeat","background-position":"center"})},null,4)):(n(),r("div",Y,[e.name_avatar?(n(),r("div",{key:0,class:f(["user-avatar user-def-avatar bg-avatar",{"bg-avatar":!e.is_now,"bg-avatar":e.is_now}])},[t("span",Z,$(e.name_avatar),1)],2)):(n(),r("div",ss,[u(_,{class:"w-100"})]))]))]),ts,t("nav",es,[t("div",os,[t("div",null,$(e.cher.profile_name?e.cher.profile_name:"\u672A\u77E5\u7528\u6236(\u5C0D\u65B9\u672A\u56DE\u5FA9)"),1),t("div",ns,[u(p,{_timed:e.iast_msg.date_time,mode:2},null,8,["_timed"])])]),t("nav",rs,[t("span",cs,$(e.cher.phone_number),1),t("div",null,[u(h,{open:c.drop,onCiose:e.editDrop},null,8,["open","onCiose"])])])])],2)):(n(),r("div",as))}const is=d(Q,[["render",_s]]),ds={data(){return{word:"",is_sort:!1}},watch:{word(s){this.$emit("search",s)},is_sort(s){this.$emit("sort",s)}},methods:{sort(){this.is_sort=!this.is_sort}}},ls={class:"f-row eos-user-room-filter"},ps={class:"ip-i-i fx-1"},us=t("span",null,[t("i",{class:"fa-solid fa-magnifying-glass"})],-1),hs={key:0,class:"fa-solid fa-arrow-down-short-wide"},ms={key:1,class:"fa-solid fa-arrow-down-wide-short"};function fs(s,o,a,l,c,e){return n(),r("div",ls,[t("nav",ps,[us,C(t("input",{class:"input","onUpdate:modelValue":o[0]||(o[0]=_=>c.word=_),placeholder:"\u641C\u7D22\u6216\u5F00\u59CB\u65B0\u5BF9\u8BDD"},null,512),[[E,c.word]])]),t("div",{onClick:o[1]||(o[1]=(..._)=>e.sort&&e.sort(..._)),class:"euef-btn-funni"},[c.is_sort?(n(),r("i",ms)):(n(),r("i",hs))])])}const $s=d(ds,[["render",fs]]);const vs={},gs={class:"empty empty-contact fx-c t-c"},ys=t("div",null,[t("h6",{class:"pb_s"},"\u8054\u7EDC\u4EBA\u4E3A\u7A7A"),t("button",{class:"thd btn-txt-acc"},[t("i",{class:"fa-solid fa-plus"}),t("span",{class:"pl_s"},"\u5F00\u59CB\u65B0\u5BF9\u8BDD")])],-1),bs=[ys];function ks(s,o,a,l,c,e){return n(),r("div",gs,bs)}const ws=d(vs,[["render",ks]]),xs={components:{EosUserRoomCard:is,EosUserRoomFilter:$s,EosEmptyConact:ws},methods:{searchUser(s){console.log("\u7B5B\u9009 =",s),console.log("\u8981\u4ECE\u4E2D =",this.rooms)},sortUser(s){console.log("SORT =",s)},change(s){const o=s.phone_number;o!=this.chatter.phone_number&&(console.log("\u6539\u53D8 oid =",o),this.pina().change_chatter(o))}},computed:{rooms(){return this.pina().rooms},chatter(){return this.pina().chatter},contacts(){return this.pina().contacts},has_room(){let s=!0;return JSON.stringify(this.rooms)=="{}"&&(s=!1),s}}},Cs={class:"chat-user-paner"},Es={key:0},Us=["onClick"];function Ss(s,o,a,l,c,e){const _=i("eos-user-room-filter"),p=i("eos-user-room-card"),h=i("eos-empty-conact");return n(),r("div",Cs,[u(_,{onSearch:e.searchUser,onSort:e.sortUser},null,8,["onSearch","onSort"]),e.has_room?(n(),r("div",Es,[(n(!0),r(U,null,S(e.rooms,(m,w)=>(n(),r("div",{onClick:As=>e.change(m.chatter),key:w},[m.chatter?(n(),v(p,{key:0,chatter:m.chatter,msgs:m.msgs},null,8,["chatter","msgs"])):D("",!0)],8,Us))),128))])):(n(),v(h,{key:1}))])}const Ds=d(xs,[["render",Ss]]);const Ts={components:{UiDropdown:b,UiIconOpt:k}},Ms={class:"dropmenu-def drop-chat-setting tit"},Bs=t("button",null,"Starred messages",-1);function Ns(s,o,a,l,c,e){const _=i("ui-icon-opt"),p=i("ui-dropdown");return n(),v(p,null,{tit:y(()=>[u(_)]),cont:y(()=>[t("nav",Ms,[Bs,t("button",{onClick:o[0]||(o[0]=h=>s.go("/chat/settings"))},"Settings")])]),_:1})}const Rs=d(Ts,[["render",Ns]]),Vs={components:{EosChatSettingDropMenu:Rs,EosUserEasyCard:T}},zs={class:"fx-r"};function Fs(s,o,a,l,c,e){return n(),r("div",zs)}const Os=d(Vs,[["render",Fs]]),Ls={components:{ChatTbLeft:Os,CpChatUsersPaner:Ds}};function js(s,o,a,l,c,e){const _=i("chat-tb-left"),p=i("cp-chat-users-paner");return n(),r("div",null,[u(_,{class:"chat-top-bar px"}),u(p)])}const Ps=d(Ls,[["render",js]]);export{Ps as default};
