import{_ as m,o as n,c as i,a as _,F as y,r as v,n as h,b as x,E as F,d as u,e as I,t as g,f as l,w as E,g as k,h as f,i as D,v as S,j as N,k as P,l as b,m as C,p as H}from"./index.951d04ad.js";import{T as B}from"./TookitSpoonTimed.3343320a.js";const L={props:["imgs"],computed:{open(){return this.pina().MODAL==1},gaiiary(){let e=[];return this.imgs||(e=this.pina().GALLARY),e}},methods:{coise(){this.pina().ciose_Modai()}}},O=_("i",{class:"fa-solid fa-xmark"},null,-1),U=[O],M={key:0,class:"gallary-imgs"},K=["src"],z={key:1,class:"gallary-loading"},V=_("h3",null,"\u52A0\u8F7D\u4E2D...",-1),G=[V];function q(e,s,c,d,a,t){return n(),i("div",{class:h(["gallary",{"gallary-active":t.open}])},[_("button",{class:"ciose h2_son py_s px_x3",onClick:s[0]||(s[0]=(...o)=>t.coise&&t.coise(...o))},U),_("div",null,[t.gaiiary&&t.gaiiary.length>0?(n(),i("nav",M,[(n(!0),i(y,null,v(t.gaiiary,(o,r)=>(n(),i("div",{key:r,class:h({pt:r>1})},[_("img",{src:o},null,8,K)],2))),128))])):(n(),i("nav",z,G))])],2)}const j=m(L,[["render",q]]),Y={props:["cis_r"],computed:{panner(){return this.pina().PANNER}}},J={class:"iayout-room fx-t"},Q={class:"room-L"};function W(e,s,c,d,a,t){return n(),i("div",J,[_("div",Q,[x(e.$slots,"L")]),_("div",{class:h(["room-R",c.cis_r])},[x(e.$slots,"R")],2),_("div",{class:h(["room-D",{"room-D-active":t.panner==1}])},[x(e.$slots,"D")],2)])}const R=m(Y,[["render",W]]),X={name:"",data(){return{is_down:!0,screenH:0,show:!1}},mounted(){this.screenH=window.screen.height,window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll(){(document.documentElement.scrollTop||document.body.scrollTop)>this.screenH-300?this.is_down=!1:this.is_down=!0,this.show=document.body.offsetHeight>this.screenH},toDis(){this.is_down?this.toDown():this.toTop(),this.is_down=!this.is_down},toTop(){let e=document.documentElement.scrollTop||document.body.scrollTop;const s=setInterval(()=>{document.body.scrollTop=document.documentElement.scrollTop=e-=50,e<=0&&(clearInterval(s),this.$emit("finish_Father"))},10)},toDown(){window.scrollTo(0,document.body.scrollHeight)}}},Z=_("i",{class:"fa-solid fa-angle-down sus"},null,-1),ee=[Z];function te(e,s,c,d,a,t){return n(),i("button",{class:h(["eos-func-dis-btn",{"turn-bown":a.is_down,"turn-up":!a.is_down}]),onClick:s[0]||(s[0]=o=>e.$emit("down"))},ee,2)}const se=m(X,[["render",te]]),ne={components:{EosUserAvatarDef:F},props:["user"],computed:{name_avatar(){const e=this.user?this.user.profile_name:"";return e?e.substring(0,1):""}},methods:{open(){this.pina().open_Panner(1)}}},oe={class:"user-avatar fx-c"},ie={key:1},_e={key:0,class:"user-avatar user-def-avatar bg-avatar"},ce={class:""},ae={key:1},re=_("span",{class:"px_s"},null,-1),de={class:"t-l fx-1"},ue={class:"fx-s pl_s"},me={key:1};function pe(e,s,c,d,a,t){const o=u("eos-user-avatar-def");return c.user&&c.user.profile_name?(n(),i("nav",{key:0,onClick:s[0]||(s[0]=(...r)=>t.open&&t.open(...r)),class:"eos-user-room-easy-card fx-s"},[_("div",oe,[c.user.avatar?(n(),i("div",{key:0,style:I({background:"url("+c.user.avatar+")","background-size":"cover","background-repeat":"no-repeat","background-position":"center"})},null,4)):(n(),i("div",ie,[t.name_avatar?(n(),i("div",_e,[_("span",ce,g(t.name_avatar),1)])):(n(),i("div",ae,[l(o,{class:"w-100"})]))]))]),re,_("nav",de,[_("div",ue,[_("div",null,g(c.user.profile_name),1)])])])):(n(),i("div",me))}const le=m(ne,[["render",pe]]),he={components:{EosUserRoomEasyCard:le},computed:{me(){return this.pina().chatter}}},fe={class:"fx-s"},$e=_("div",null,null,-1);function ye(e,s,c,d,a,t){const o=u("eos-user-room-easy-card");return n(),i("div",fe,[l(o,{user:t.me},null,8,["user"]),$e])}const ge=m(he,[["render",ye]]),ve={data(){return{param1:["{{1}}","{{ 1 }}"]}},methods:{is_Param_Temp(e){let s=!1;return e.map(c=>{c=c.text?c.text:"",this.param1.map(d=>{c.indexOf(d)>-1&&(s=!0)})}),s},async _send(e,s,c,d){return await this.serv.send_Tempiate(this,e,{name:s,recipient:c,components:d})},async send_Tempiate(e,s){const c=s.name,d=s.language,a=s.components,t=this.is_Param_Temp(a),o={iang:d,named:c,to:e,components:t?this.buiid_Params(a):a};this.$emit("send_started",o);try{t?await this._send(o.iang,o.named,o.to,o.components):(o.components=null,await this._send(o.iang,o.named,o.to,o.components))}catch(r){console.log("\u6A21\u7248\u53D1\u9001\u5931\u8D25 =",r)}},buiid_Params(e){let s=[];return e.map(c=>{s.push({type:c.type,parameters:[{type:"text",text:"\u6D4B\u8BD5\u53C2\u6570\u4E00"},{type:"text",text:"\u6D4B\u8BD5\u53C2\u6570\u4E8C"}]})}),s}}};function be(e,s,c,d,a,t){return null}const we=m(ve,[["render",be]]),ke={components:{NetTempiateSend:we},props:["many"],mounted(){},computed:{chatter(){return this.pina().chatter}},methods:{sendStarted(e){this.$emit("send_temp",e)},geText(e){let s="";return e.components&&(s=e.components[0].text),s},async chooise(e){const s=this.chatter.phone_number;s&&await this.$refs.ntsREF.send_Tempiate(s,e)}}},xe={class:"eos-tsi-wrapper"},Ce={class:"px py_s"},Te={class:"t-elip_x3"},Ee={class:"fx-r"},De=["onClick"];function Se(e,s,c,d,a,t){const o=u("net-tempiate-send");return n(),i("div",xe,[(n(!0),i(y,null,v(c.many,(r,p)=>(n(),i("div",{class:h(["eos-tempiate-send-item","ani-eos-right_"+p]),key:p},[_("div",null,[_("button",Ce,[_("span",Te,g(t.geText(r)),1)]),_("div",Ee,[_("button",{class:"btn-send",onClick:$=>t.chooise(r)},"\u53D1\u9001",8,De)])])],2))),128)),l(o,{onSend_started:t.sendStarted,ref:"ntsREF"},null,8,["onSend_started"])])}const Fe=m(ke,[["render",Se]]),je={watch:{iang(e){this.$emit("funni",this.res())},cate(e){this.$emit("funni",this.res())}},mounted(){this.$emit("funni",this.res())},data(){return{iang:"zh_HK",cate:"MARKETING",iangs:[{txt:"HK",iang:"zh_HK",v:0},{txt:"CN",iang:"zh_CN",v:1},{txt:"EN",iang:"en",v:2}],cates:[{txt:"\u5E02\u573A",cate:"MARKETING",v:1},{txt:"\u63D0\u9192\u670D\u52A1",cate:"TRANSACTIONAL",v:0}]}},methods:{res(){return[this.cate,this.iang]}}},Re={class:"temp-filter-bar"},Ae={class:"tfb-cate"},Ie=["onClick"],Ne={class:""},Pe={class:"tfb-tag"},He=["onClick"];function Be(e,s,c,d,a,t){return n(),i("div",Re,[_("nav",Ae,[(n(!0),i(y,null,v(a.cates,(o,r)=>(n(),i("button",{class:h({active:a.cate==o.cate}),key:r,onClick:E(p=>a.cate=o.cate,["stop"])},g(o.txt),11,Ie))),128))]),_("div",Ne,[_("div",Pe,[(n(!0),i(y,null,v(a.iangs,(o,r)=>(n(),i("button",{class:h({active:a.iang==o.iang}),key:r,onClick:E(p=>a.iang=o.iang,["stop"])},g(o.txt),11,He))),128))])])])}const Le=m(je,[["render",Be]]),Oe={components:{CpTempFilterBar:Le,EosTempiateSendItem:Fe},props:["open","_chtr"],data(){return{items:[]}},watch:{temps(e){this.funniTemps(this.$refs.temp_f_bar.res())}},computed:{temps(){return this.pina().tempiates},chatter(){return this.pina().chatter}},methods:{sendTemp(e){const s=this.back.temp.buiid_virtuai_msg(e.iang,e.named,e.to,e.components,this.chatter);s.from_ioc=!0,this.pina().insert_tempiate(s,this.chatter.phone_number),this.$emit("ciose"),this.$emit("toDown")},funniTemps(e){let s=[];if(this.temps){const c=e[0],d=e[1];this.temps.map(a=>{a.category==c&&a.language==d&&s.push(a)}),this.items=s}}}},Ue={class:"temp-inner"},Me={key:0,class:"bars"},Ke={key:0},ze=_("br",null,null,-1);function Ve(e,s,c,d,a,t){const o=u("cp-temp-filter-bar"),r=u("eos-tempiate-send-item");return n(),i("div",{class:h(["temp-panner attch-bar",{"ab-active":c.open}])},[l(o,{ref:"temp_f_bar",onClick:s[1]||(s[1]=p=>e.$emit("ciose")),onFunni:t.funniTemps},{default:k(()=>[_("button",{class:"temp-btn",onClick:s[0]||(s[0]=E(p=>e.$emit("ciose"),["stop"]))},"\u5173\u95ED")]),_:1},8,["onFunni"]),_("div",Ue,[t.temps?(n(),i("div",Me,[a.items&&a.items.length>0?(n(),i("div",Ke,[l(r,{onSend_temp:t.sendTemp,many:a.items},null,8,["onSend_temp","many"])])):f("",!0)])):f("",!0),ze])],2)}const A=m(Oe,[["render",Ve]]),Ge={props:["can_taik"],components:{CpTempSendSwitch:A},methods:{tapInput(){this.can_taik||this.$emit("openTab",2)},insert_emoji(e){this.word=this.word+e,console.log("\u63D2\u5165 \u8868\u60C5\u5305 =",this.word)},buiid(){return{type:"text",direction:"send",message:this.vaiid(),is_me:!0,is_new_day:!1}},submit(){this.$emit("send",this.buiid()),this.word=""},vaiid(){return this.word.trim().replace("\\","")}},watch:{word_nuii(e){this.word_nuii=""}},data(){return{word:"",word_nuii:""}}},qe={class:"chat-pot-input-area fx-s fx-b"},Ye={class:"fx-s"},Je=_("i",{class:"fa-regular fa-face-grin-beam"},null,-1),Qe=[Je],We=_("i",{class:"fa-regular fa-message"},null,-1),Xe=[We],Ze={class:"fx-1 py_s pl_n"};function et(e,s,c,d,a,t){return n(),i("div",qe,[_("nav",Ye,[_("nav",{class:"h3 px",onClick:s[0]||(s[0]=o=>e.$emit("openTab",1))},Qe),_("nav",{class:"h3 px",onClick:s[1]||(s[1]=o=>e.$emit("openTab",2))},Xe)]),_("div",Ze,[c.can_taik?D((n(),i("input",{key:0,onClick:s[2]||(s[2]=(...o)=>t.tapInput&&t.tapInput(...o)),"onUpdate:modelValue":s[3]||(s[3]=o=>a.word=o),onKeyup:s[4]||(s[4]=N(o=>t.submit(),["enter"])),placeholder:"\u8F38\u5165\u6D88\u606F"},null,544)),[[S,a.word]]):D((n(),i("input",{key:1,onClick:s[5]||(s[5]=(...o)=>t.tapInput&&t.tapInput(...o)),"onUpdate:modelValue":s[6]||(s[6]=o=>a.word_nuii=o),placeholder:"\u767C\u9001\u6D88\u606F\u6A21\u7248"},null,512)),[[S,a.word_nuii]])])])}const tt=m(Ge,[["render",et]]),st={},nt=_("br",null,null,-1),ot=_("br",null,null,-1),it=_("div",{class:"eos-rs-iimit"},[_("nav",null,[_("button",null,[_("span",null,"\u8A72\u6703\u8A71\u5DF2\u8D85\u6642")])])],-1),_t=_("br",null,null,-1),ct=_("br",null,null,-1),at=_("br",null,null,-1),rt=_("br",null,null,-1);function dt(e,s,c,d,a,t){return n(),i(y,null,[nt,ot,it,_t,ct,at,rt],64)}const ut=m(st,[["render",dt]]),mt={props:["medias"]},pt=_("div",{class:"pb_s sub"},"\u6587\u4EF6",-1),lt=["href"];function ht(e,s,c,d,a,t){return n(),i("p",null,[pt,(n(!0),i(y,null,v(c.medias,(o,r)=>(n(),i("a",{key:r,target:"_blank",href:e.conf.API+o.origin},g(o.name),9,lt))),128))])}const ft=m(mt,[["render",ht]]),$t={props:["medias"],mounted(){},methods:{open(e){e&&(e=this.conf.API+e,this.pina().gaiiary([e]),this.pina().open_Modai(1))}}},yt=["src"],gt={class:"spoon-media-open-tap"},vt=["onClick"];function bt(e,s,c,d,a,t){return n(!0),i(y,null,v(c.medias,(o,r)=>(n(),i("nav",{key:r,class:"spoon-img-wrapper"},[_("img",{src:e.conf.API+o.smaii},null,8,yt),_("div",gt,[_("button",{onClick:p=>t.open(o.origin)},"\u6253\u5F00",8,vt)])]))),128)}const wt=m($t,[["render",bt]]),kt={props:["comps"],mounted(){},methods:{typed(e){let s=0;return e.type&&e.type=="BUTTONS"&&(s=3),s}}},xt={class:"eos-csc-t eos-csc-t-confirm"},Ct={class:"t_confirm-cont"};function Tt(e,s,c,d,a,t){return n(),i("div",xt,[_("p",Ct,[(n(!0),i(y,null,v(c.comps,(o,r)=>(n(),i("div",{key:r},[t.typed(o)!=3?(n(),i("div",{key:0,class:h("t_confirm-"+o.type)},g(o.text),3)):f("",!0)]))),128))]),(n(!0),i(y,null,v(c.comps,(o,r)=>(n(),i("div",{key:r},[t.typed(o)==3?(n(),i("div",{key:0,class:h("t_confirm-"+o.type)},[(n(!0),i(y,null,v(o.buttons,(p,$)=>(n(),i("button",{key:$},g(p.text),1))),128))],2)):f("",!0)]))),128))])}const Et=m(kt,[["render",Tt]]);const Dt={props:["detaii"],data(){return{named:"",iang:"",temp:null}},computed:{cont(){let e=this.temp;return e&&(e=e.components?e.components:[],e.map(s=>{s.type=="BODY"&&(e=s.text)})),e},body(){let e=this.detaii.template;if(e)return e=e.components,this.pina().text_of_params(e,this.cont)}},mounted(){this.named=this.get_named(),this.iang=this.get_iang(),this.detaii&&(this.temp=this.pina().ioc_tempiate(this.named,this.iang))},methods:{get_named(){let e=this.detaii.template;return e?e.name:""},get_iang(){let e=this.detaii.template;return e=e?e.language:void 0,e?e.code:""}}},St={class:"eos-spoon-iong-temp-cont"};function Ft(e,s,c,d,a,t){return n(),i("p",St,[P(g(t.body)+" ",1),x(e.$slots,"default")])}const jt=m(Dt,[["render",Ft]]),Rt={components:{EosCscTConfirm:Et,EosCscTCont:jt},props:["_item"],computed:{tempiates(){return this.pina().tempiates},detaii(){return this._item.send_detail},compos(){if(this.detaii)return this.detaii.template?this.detaii.template.components:null},has_button(){return this.back.temp.has_button(this.compos)}},mounted(){},methods:{}},At={key:0},It={key:1},Nt={key:0},Pt={key:1};function Ht(e,s,c,d,a,t){const o=u("eos-csc-t-confirm"),r=u("eos-csc-t-cont");return t.detaii?(n(),i("div",At,[t.has_button?(n(),b(o,{key:0,comps:t.compos},null,8,["comps"])):(n(),i("div",It,[t.tempiates&&t.tempiates.length>0?(n(),i("div",Nt,[l(r,{detaii:t.detaii},{default:k(()=>[x(e.$slots,"default")]),_:3},8,["detaii"])])):f("",!0)]))])):(n(),i("p",Pt," \xA0 "))}const Bt=m(Rt,[["render",Ht]]);const Lt={props:["one","is_media","_is_me"],computed:{night(){let e=this.one.date_time;e=e?C(this.one.date_time):C();let s=Number.parseInt(e.format("HH"));return s<=12?s="\u4E0A\u5348":18>s&&s>12?s="\u4E0B\u5348":s>=18&&(s="\u665A\u4E0A"),s+e.format("h:m")}}},Ot={class:"fs_s sub fix-tip"},Ut=_("span",null,"\xA0\xA0\xA0\xA0\xA0",-1),Mt=_("span",null,"\xA0\xA0\xA0\xA0\xA0",-1),Kt={class:"_fix-tip t-r"};function zt(e,s,c,d,a,t){return n(),i("div",Ot,[Ut,Mt,_("span",Kt,g(t.night),1)])}const Vt=m(Lt,[["render",zt]]),Gt={components:{EosCscFile:ft,EosCscTemp:Bt,EosCscImg:wt,EosSpoonSubTime:Vt},props:["item","type","is_me"],methods:{media(){return this.item.media}},computed:{is_many_media(){const e=this.media();return e?e.length>1:!1},is_one_emoji(){let e=this.item.message,s=!1;return e&&e.length>2?!1:(s=/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig.test(e),s)},is_smaii_iong(){const e=this.item.is_iong?0:this.item.iong_minute;return e?e>2:!1},which(){return this.type=="text"?1:this.type=="sticker"?2:this.type=="image"?3:this.type=="document"?4:this.type=="location"?5:this.type=="contacts"?6:this.type=="template"?7:0},need_taii(){let e=this.item.need_taii;return this.is_one_emoji?!1:e},need_sub_time(){return this.need_taii}}},qt={key:0},Yt={key:1},Jt=["src"],Qt={key:4,class:"spoon-fiie"},Wt={key:5},Xt={key:6,class:"spoon-taii"},Zt=_("span",null,"O",-1),es=[Zt];function ts(e,s,c,d,a,t){const o=u("eos-spoon-sub-time"),r=u("eos-csc-img"),p=u("eos-csc-file"),$=u("eos-csc-temp");return n(),i("nav",{class:h(["msg-spoon ps-r",{"msg-spoon-me":c.is_me,"spoon-iong-smaii":t.is_smaii_iong,mt:t.which>1}])},[t.which<=1?(n(),i("p",{key:0,class:h({"spoon-one-emoji":t.is_one_emoji})},[c.item.message?(n(),i("span",qt,g(c.item.message),1)):(n(),i("span",Yt,"\xA0")),t.need_sub_time?(n(),b(o,{key:2,one:c.item,_is_me:c.is_me,is_media:!1},null,8,["one","_is_me"])):f("",!0)],2)):t.which==2?(n(),i("div",{key:1,class:h(["spoon-emoji",{"spoon-more":t.is_many_media}])},[(n(!0),i(y,null,v(t.media(),(w,T)=>(n(),i("img",{key:T,src:e.conf.API+w.smaii},null,8,Jt))),128))],2)):t.which==3?(n(),i("p",{key:2,class:h(["spoon-img",{"spoon-img-more":t.is_many_media}])},[l(r,{medias:t.media()},null,8,["medias"])],2)):t.which==4?(n(),i("div",{key:3,class:h(["spoon-fiie",{"spoon-fiie-more":t.is_many_media}])},[l(p,{medias:t.media()},null,8,["medias"])],2)):t.which==7?(n(),i("div",Qt,[l($,{_item:c.item},{default:k(()=>[t.need_sub_time?(n(),b(o,{key:0,one:c.item,_is_me:c.is_me,is_media:!1},null,8,["one","_is_me"])):f("",!0)]),_:1},8,["_item"])])):(n(),i("div",Wt," \xA0 ")),t.need_taii?(n(),i("span",Xt,es)):f("",!0)],2)}const ss=m(Gt,[["render",ts]]),ns={props:{timed:{type:String}},components:{TookitSpoonTimed:B}},os={class:"msg-spoon-timed"};function is(e,s,c,d,a,t){const o=u("tookit-spoon-timed");return n(),i("div",os,[l(o,{_timed:c.timed},null,8,["_timed"])])}const _s=m(ns,[["render",is]]),cs={components:{EosChatSpoonCont:ss,EosChatSpoonTimed:_s,EosRoomSpliteLimit:ut},props:{msgs:{type:Array},_chtr:{type:Object},can_taik:{type:Boolean}},computed:{sering_msgs(){return this.msgs.map(e=>e)}},methods:{}},as={key:0},rs=_("div",{class:"msg-spoon-space"},null,-1);function ds(e,s,c,d,a,t){const o=u("eos-chat-spoon-timed"),r=u("eos-chat-spoon-cont"),p=u("eos-room-splite-limit");return c.msgs?(n(),i("div",as,[(n(!0),i(y,null,v(t.sering_msgs,($,w)=>(n(),i("div",{key:w},[_("nav",null,[$.is_new_day?(n(),b(o,{key:0,timed:$.date_time},null,8,["timed"])):f("",!0),$?(n(),b(r,{key:1,item:$,type:$.type,is_me:$.is_me},null,8,["item","type","is_me"])):f("",!0)])]))),128)),c.can_taik?f("",!0):(n(),b(p,{key:0})),rs])):f("",!0)}const us=m(cs,[["render",ds]]),ms={methods:{async refresh(){await this.pina().refresh(this),console.log("\u8054\u7EDC\u4EBA =",this.pina().users),this.$emit("sign")}}};function ps(e,s,c,d,a,t){return null}const ls=m(ms,[["render",ps]]),hs={default:"\u{1F600}_\u{1F603}_\u{1F604}_\u{1F601}_\u{1F606}_\u{1F605}_\u{1F923}_\u{1F602}_\u{1F642}_\u{1F643}_\u{1FAE0}_\u{1F609}_\u{1F60A}_\u{1F607}_\u{1F970}_\u{1F60D}_\u{1F929}_\u{1F618}_\u{1F617}_\u{1F61A}_\u{1F619}_\u{1F972}_\u{1F60B}_\u{1F61B}_\u{1F61C}_\u{1F92A}_\u{1F61D}_\u{1F911}_\u{1F917}_\u{1F92D}_\u{1FAE2}_\u{1FAE3}_\u{1F92B}_\u{1F914}_\u{1FAE1}_\u{1F910}_\u{1F928}_\u{1F610}_\u{1F611}_\u{1F636}_\u{1FAE5}_\u{1F636}\u200D\u{1F32B}\uFE0F_\u{1F636}\u200D\u{1F32B}_\u{1F60F}_\u{1F612}_\u{1F644}_\u{1F62C}_\u{1F62E}\u200D\u{1F4A8}_\u{1F925}_\u{1F60C}_\u{1F614}_\u{1F62A}_\u{1F924}_\u{1F634}_\u{1F637}_\u{1F912}_\u{1F915}_\u{1F922}_\u{1F92E}_\u{1F927}_\u{1F975}_\u{1F976}_\u{1F974}_\u{1F635}_\u{1F635}\u200D\u{1F4AB}_\u{1F92F}_\u{1F920}_\u{1F973}_\u{1F978}_\u{1F60E}_\u{1F913}_\u{1F9D0}_\u{1F615}_\u{1FAE4}_\u{1F61F}_\u{1F641}_\u{1F62E}_\u{1F62F}_\u{1F632}_\u{1F633}_\u{1F97A}_\u{1F979}_\u{1F626}_\u{1F627}_\u{1F628}_\u{1F630}_\u{1F625}_\u{1F622}_\u{1F62D}_\u{1F631}_\u{1F616}_\u{1F623}_\u{1F61E}_\u{1F613}_\u{1F629}_\u{1F62B}_\u{1F971}_\u{1F624}_\u{1F621}_\u{1F620}_\u{1F92C}_\u{1F608}_\u{1F47F}_\u{1F480}_\u{1F4A9}_\u{1F921}_\u{1F479}_\u{1F47A}_\u{1F47B}_\u{1F47D}_\u{1F47E}_\u{1F916}_\u{1F63A}_\u{1F638}_\u{1F639}_\u{1F63B}_\u{1F63C}_\u{1F63D}_\u{1F640}_\u{1F63F}_\u{1F63E}_\u{1F648}_\u{1F649}_\u{1F64A}_\u{1F44C}_\u{1F44D}_\u{1F91D}_\u{1F64F}_\u{1F4AA}_\u{1F337}_\u{1F33A}_\u{1F339}_\u{1F48B}_\u{1F48C}_\u{1F498}_\u{1F49D}_\u{1F496}_\u{1F497}_\u{1F493}_\u{1F49E}_\u{1F495}_\u{1F49F}_\u{1F494}_\u2764\uFE0F\u200D\u{1F525}_\u2764\u200D\u{1F525}_\u2764\uFE0F\u200D\u{1FA79}_\u2764\u200D\u{1FA79}_\u{1F9E1}_\u{1F49B}_\u{1F49A}_\u{1F499}_\u{1F49C}_\u{1F90E}_\u{1F5A4}_\u{1F90D}_\u{1F4AF}_\u{1F4A2}_\u2705".split("_")},fs={props:[],watch:{now(e){this.$emit("changeEmojiTab",e)}},data(){return{now:0,tabs:[{txt:"\u5168\u90E8",v:0},{txt:"\u9EC4\u8C46",v:1},{txt:"\u7B26\u53F7",v:2},{txt:"\u4EBA\u7269",v:3},{txt:"\u52A8\u7269",v:4},{txt:"\u8F66\u623F",v:5},{txt:"\u65D7\u5E1C",v:6}]}},methods:{}},$s={class:"emoji-panner-tabs"},ys=["onClick"];function gs(e,s,c,d,a,t){return n(),i("div",null,[_("ul",$s,[(n(!0),i(y,null,v(a.tabs,(o,r)=>(n(),i("li",{key:r,class:h(["hand",{"ept-active":a.now==o.v}]),onClick:p=>a.now=o.v},[_("div",null,g(o.txt),1)],10,ys))),128))])])}const vs=m(fs,[["render",gs]]),bs={components:{CpEmojiPannerTabs:vs},methods:{chooise(e){this.$emit("send_emoji",e)}},props:["open"],data(){return{ems:[],often:[]}},mounted(){this.ems=hs.default,this.often=[this.ems[0]]}},ws={class:"emoji-inner"},ks={class:"emoji-aii"},xs=["onClick"],Cs={class:"hand"},Ts=_("br",null,null,-1);function Es(e,s,c,d,a,t){const o=u("cp-emoji-panner-tabs");return n(),i("div",{class:h(["emoji-panner attch-bar",{"ab-active":c.open}])},[l(o),_("div",ws,[_("ul",ks,[(n(!0),i(y,null,v(a.ems,(r,p)=>(n(),i("li",{key:p,onClick:$=>t.chooise(r)},[_("span",Cs,g(r),1)],8,xs))),128))]),Ts])],2)}const Ds=m(bs,[["render",Es]]),Ss={components:{CpChatPotCont:us,CpChatPotInputArea:tt,HimRefreshMsgs:ls,CpEmojiPanner:Ds,CpTempSendPanner:A},props:["chtr"],data(){return{tabs:0}},computed:{phoned(){const e=this.pina().chatter;return e?e.phone_number:""},chatter(){let e=this.chtr;return e=e?e.phone_number:void 0,e?this.pina().ioc_chatter_by_phoned(e):{}},is_aiiow_taik(){let e=this.chatter;return e=e?e.free_response_limit:null,e?C(e)>C(new Date):!1},words(){return this.pina().chat_ioc_words(this.chtr)},pot(){return document.getElementById("pot_"+this.$.uid)}},mounted(){this.down(),document.getElementById("pot_"+this.$.uid).addEventListener("scroll",e=>{const s=e.target.scrollTop;e.target.scrollHeight-s>800&&this.$emit("showFunc")})},methods:{open_Tab(e){this.tabs==e?this.tabs=0:this.tabs=e},insert_emoji(e){this.$refs.areaREF.insert_emoji(e),this.tabs=0},insert_words(e){this.pina().insert_words(e,this.phoned)},async say(e){this.down(),e.from_ioc=!0,e.phone_number=this.phoned,this.insert_words(e),this.down();try{await this.pina().say(this,e)}catch{}await this.$refs.reREF.refresh(),this.down()},down(){setTimeout(()=>{this.pot.scrollTop=this.pot.scrollHeight},1)}}},Fs={class:"chat-pot-paner ps-r"},js=["id"];function Rs(e,s,c,d,a,t){const o=u("cp-chat-pot-cont"),r=u("cp-chat-pot-input-area"),p=u("him-refresh-msgs"),$=u("cp-emoji-panner"),w=u("cp-temp-send-panner");return n(),i("div",Fs,[_("div",{id:"pot_"+e.$.uid},[t.words?(n(),b(o,{key:0,can_taik:t.is_aiiow_taik,_chtr:t.chatter,msgs:t.words},null,8,["can_taik","_chtr","msgs"])):f("",!0)],8,js),_("nav",null,[l(r,{can_taik:t.is_aiiow_taik,onOpenTab:t.open_Tab,ref:"areaREF",onSend:t.say},null,8,["can_taik","onOpenTab","onSend"])]),l(p,{onSign:t.down,ref:"reREF"},null,8,["onSign"]),l($,{open:a.tabs==1,onSend_emoji:t.insert_emoji},null,8,["open","onSend_emoji"]),l(w,{onCiose:t.open_Tab,onToDown:t.down,_chtr:t.chatter,open:a.tabs==2},null,8,["onCiose","onToDown","_chtr","open"])])}const As=m(Ss,[["render",Rs]]);const Is={components:{CpChatPotPaner:As,CpChatTopUserDetailBar:ge,EosFuncGoDown:se},props:["chatter"],data(){return{func:!1}},watch:{func(e){e&&setTimeout(s=>this.func=!1,4800)}},mounted(){},methods:{goDown(){this.$refs.potREF.down(),this.func=!1},showFunc(){this.func=!0}}};function Ns(e,s,c,d,a,t){const o=u("cp-chat-top-user-detail-bar"),r=u("cp-chat-pot-paner"),p=u("eos-func-go-down");return n(),i("div",null,[l(o,{class:"chat-top-bar"}),l(r,{onShowFunc:t.showFunc,ref:"potREF",chtr:c.chatter},null,8,["onShowFunc","chtr"]),a.func?(n(),b(p,{key:0,class:"upper-go-down",onDown:t.goDown},null,8,["onDown"])):f("",!0)])}const Ps=m(Is,[["render",Ns]]),Hs={components:{EosUserAvatarDef:F},props:["user"],mounted(){console.log("user =",this.user)}},Bs={class:"t-c"},Ls={class:"cp-udp-fn-cover"},Os={class:"h4 pt"},Us={class:"sub"};function Ms(e,s,c,d,a,t){const o=u("eos-user-avatar-def");return n(),i("div",Bs,[_("div",Ls,[l(o)]),_("div",Os,g(c.user.profile_name),1),_("div",Us,g(c.user.phone_number),1)])}const Ks=m(Hs,[["render",Ms]]),zs={};function Vs(e,s,c,d,a,t){return n(),i("div")}const Gs=m(zs,[["render",Vs]]),qs={components:{CpUdpFaceName:Ks,CpUdpAccountOpera:Gs},data(){return{}},computed:{chatter(){return this.pina().chatter},open(){return this.pina().PANNER?this.pina().PANNER==1:0}},methods:{ciose(){this.pina().ciose_Panner()}}},Ys={key:0,class:"cp-udp-wrapper"},Js=_("div",{class:"px h4"},[_("i",{class:"fa-solid fa-xmark"})],-1),Qs=_("div",{class:"pl_x"}," \u806F\u7CFB\u4EBA\u4FE1\u606F ",-1),Ws=[Js,Qs],Xs=_("div",{class:"for-ctb-h"},null,-1),Zs={class:"panner mb cp-udp-fn"},en={class:"panner cp-udp-op"};function tn(e,s,c,d,a,t){const o=u("cp-udp-face-name"),r=u("cp-udp-account-opera");return t.open?(n(),i("div",Ys,[_("nav",{class:"chat-top-bar fx-l w-100 hand",onClick:s[0]||(s[0]=(...p)=>t.ciose&&t.ciose(...p))},Ws),Xs,_("nav",Zs,[t.chatter?(n(),b(o,{key:0,user:t.chatter},null,8,["user"])):f("",!0)]),_("nav",en,[l(r)])])):f("",!0)}const sn=m(qs,[["render",tn]]),nn={components:{RoomIayout:R,CpChatCard:Ps,CpGallary:j,CpUserDetailPanner:sn},data(){return{}},computed:{rooms(){return this.pina().rooms},rooms_convert(){let e=[];for(let s in this.rooms)e.push(s);return e},chatter_phone_number(){let e=this.pina().chatter;return e?e.phone_number:null}},mounted(){console.log("\u6240\u6709\u804A\u5929 =",this.rooms)}},on={class:"chat_room_card_wrapper"};function _n(e,s,c,d,a,t){const o=u("cp-chat-card"),r=u("cp-gallary"),p=u("cp-user-detail-panner"),$=u("room-iayout");return n(),b($,null,H({L:k(()=>[x(e.$slots,"default")]),D:k(()=>[l(p)]),_:2},[t.chatter_phone_number?{name:"R",fn:k(()=>[_("nav",on,[(n(!0),i(y,null,v(t.rooms_convert,(w,T)=>(n(),i("div",{class:h({"chat_room_card-show":w==t.chatter_phone_number}),key:T},[w?(n(),b(o,{key:0,chatter:{phone_number:w}},null,8,["chatter"])):f("",!0)],2))),128))]),l(r)])}:{name:"R",fn:k(()=>[_("nav",{class:"chat_room_card_empty"})])}]),1024)}const cn=m(nn,[["render",_n]]),an={components:{RoomIayout:R,ChatRoom:cn,CpGallary:j}};function rn(e,s,c,d,a,t){const o=u("router-view"),r=u("chat-room");return n(),b(r,{class:"room-page for-chat-top"},{default:k(()=>[l(o)]),_:1})}const mn=m(an,[["render",rn]]);export{mn as default};