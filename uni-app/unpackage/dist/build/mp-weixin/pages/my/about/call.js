(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/about/call"],{"0b98":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{callList:[{title:"官方微信",msg:"lyt"},{title:"官方电话",msg:"0516-5201234"},{title:"官方邮箱",msg:"lyt1105290566@qq.com"},{title:"官方网站",msg:"www.lytSoftware.com"}]}},methods:{callClick:function(n,e){t.setClipboardData({data:n.msg,success:function(){1!=e?t.showToast({title:"复制成功了呦~",duration:2e3}):t.makePhoneCall({phoneNumber:n.title})}})}}};n.default=e}).call(this,e("543d")["default"])},"24c8":function(t,n,e){"use strict";var c=e("e521"),u=e.n(c);u.a},"40e7":function(t,n,e){"use strict";e.r(n);var c=e("0b98"),u=e.n(c);for(var a in c)"default"!==a&&function(t){e.d(n,t,(function(){return c[t]}))}(a);n["default"]=u.a},"6ac3":function(t,n,e){"use strict";(function(t){e("79c3");c(e("66fd"));var n=c(e("7126"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},7126:function(t,n,e){"use strict";e.r(n);var c=e("8cf9"),u=e("40e7");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("24c8");var l,o=e("f0c5"),i=Object(o["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],l);n["default"]=i.exports},"8cf9":function(t,n,e){"use strict";var c,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return c}))},e521:function(t,n,e){}},[["6ac3","common/runtime","common/vendor"]]]);