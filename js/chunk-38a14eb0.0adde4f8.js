(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a14eb0"],{"159b":function(t,e,n){var a=n("da84"),s=n("fdbc"),o=n("785a"),i=n("17c2"),c=n("9112"),r=function(t){if(t&&t.forEach!==i)try{c(t,"forEach",i)}catch(e){t.forEach=i}};for(var l in s)s[l]&&r(a[l]&&a[l].prototype);r(o)},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,s=n("a640"),o=s("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"313e":function(t,e,n){},"3a34":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"my-animation-slide-top"},[n("twoPoem",{attrs:{isHitokoto:!1}})],1),n("div",{staticClass:"my-animation-slide-bottom",staticStyle:{background:"var(--background)"}},[n("div",{staticClass:"about-wrap"},[n("h1",{staticStyle:{"font-size":"40px","font-weight":"500","letter-spacing":"5px"}},[t._v(" 两只毛驴鸣翠柳 ")]),n("div",{staticClass:"about-box"},[n("h4",[t._v("与 "+t._s(t.$store.state.webInfo.webName)+" 对话中...")]),t.sayShow?n("div",{attrs:{id:"say-container"}}):t._e()])]),n("myFooter")],1)])},s=[],o=(n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("99af"),function(){return n.e("chunk-758da430").then(n.bind(null,"0223"))}),i=function(){return n.e("chunk-113d5e0f").then(n.bind(null,"68e4"))},c={components:{twoPoem:o,myFooter:i},data:function(){return{sayShow:!1,sayContent:[{talk:["Hi, there👋","这是一个 Vue2 Vue3 与 SpringBoot 结合的产物~"],reply:["然后呢？ 😃","少废话！ 🙄"]},{talk:["😘","本站平时仅用于交流和学习新知识","如涉及侵权请联系站长删除对应资源，谢谢！！！"],reply:["这个网站有什么用吗？ 😂"]},{talk:["拥有自己的独立网站难道不酷吗🚀","那就摸鱼吧👋","摸鱼大军请在聊天室集合🥝"],reply:[]}],sayIndex:0}},computed:{},watch:{},created:function(){var t=this;"wjyispig"!=localStorage.getItem("userToken")&&this.$router.push({path:"/user"}),setTimeout((function(){t.sayShow=!0,t.say()}),2e3)},mounted:function(){},methods:{answer:function(t,e){var n=this;$(".say-select").remove();var a='<div class="say-right my-animation-slide-bottom"><span class="say-item-right">'.concat(e,"</span></div>"),s=document.createRange().createContextualFragment(a);if(document.getElementById("say-container").appendChild(s),0===t)setTimeout((function(){n.say()}),500);else{var o='<div class="say-left my-animation-slide-bottom"><span class="say-item-left">👋 👋 👋</span></div>',i=document.createRange().createContextualFragment(o);document.getElementById("say-container").appendChild(i)}},say:function(){var t=this;this.$common.isEmpty(this.sayContent[this.sayIndex])||this.$common.isEmpty(this.sayContent[this.sayIndex].talk)||this.sayContent[this.sayIndex].talk.forEach((function(e,n,a){setTimeout((function(){var s='<div class="say-left my-animation-slide-bottom"><span class="say-item-left">'.concat(e,"</span></div>"),o=document.createRange().createContextualFragment(s);document.getElementById("say-container").appendChild(o),a.length===n+1&&(t.$common.isEmpty(t.sayContent[t.sayIndex].reply)||setTimeout((function(){if(2===t.sayContent[t.sayIndex].reply.length){var e=t.sayContent[t.sayIndex].reply[0],n=t.sayContent[t.sayIndex].reply[1],a='<div class="say-left my-animation-slide-bottom"><span class="say-select">'.concat(e,'</span><span class="say-select">').concat(n,"</span></div>"),s=document.createRange().createContextualFragment(a);document.getElementById("say-container").appendChild(s),document.getElementsByClassName("say-select")[0].onclick=function(){t.answer(0,e)},document.getElementsByClassName("say-select")[1].onclick=function(){t.answer(1,n)}}else if(1===t.sayContent[t.sayIndex].reply.length){var o=t.sayContent[t.sayIndex].reply[0],i='<div class="say-left my-animation-slide-bottom"><span class="say-select">'.concat(o,"</span></div>"),c=document.createRange().createContextualFragment(i);document.getElementById("say-container").appendChild(c),document.getElementsByClassName("say-select")[0].onclick=function(){t.answer(0,o)}}t.sayIndex+=1}),500))}),500*n)}))}}},r=c,l=(n("a61d"),n("2877")),d=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=d.exports},"99af":function(t,e,n){"use strict";var a=n("23e7"),s=n("da84"),o=n("d039"),i=n("e8b5"),c=n("861d"),r=n("7b0b"),l=n("07fa"),d=n("8418"),u=n("65f0"),y=n("1dde"),m=n("b622"),f=n("2d00"),p=m("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=s.TypeError,b=f>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),C=y("concat"),w=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},x=!b||!C;a({target:"Array",proto:!0,arity:1,forced:x},{concat:function(t){var e,n,a,s,o,i=r(this),c=u(i,0),y=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],w(o)){if(s=l(o),y+s>h)throw g(v);for(n=0;n<s;n++,y++)n in o&&d(c,y,o[n])}else{if(y>=h)throw g(v);d(c,y++,o)}return c.length=y,c}})},a61d:function(t,e,n){"use strict";n("313e")}}]);
//# sourceMappingURL=chunk-38a14eb0.0adde4f8.js.map