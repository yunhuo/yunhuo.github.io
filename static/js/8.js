webpackJsonp([8,15],{145:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),i=o(s);e.default={data:function(){return{phone:"",code:"",password:""}},components:{},methods:{sendCode:function(){i.default.post("sendCode",{appId:APP_ID,phone:this.phone},function(t){toastr.success("发送验证码成功")})},signUp:function(){this.$store.dispatch("signUp",{appId:APP_ID,phone:this.phone,code:this.code,password:this.password})}},mounted:function(){}}},159:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"",""])},175:function(t,e,n){var o=n(159);"string"==typeof o&&(o=[[t.id,o,""]]);n(3)(o,{});o.locals&&(t.exports=o.locals)},211:function(t,e,n){var o,s;n(175),o=n(145);var i=n(217);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},217:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"view-profile"},[_h("div",{staticClass:"user-view view"},[_m(0)," ",_h("ul",{staticClass:"meta"},[_m(1)," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:phone,expression:"phone"}],attrs:{type:"text"},domProps:{value:_s(phone)},on:{input:function(t){t.target.composing||(phone=t.target.value)}}})," ",_m(2)," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:code,expression:"code"}],attrs:{type:"text"},domProps:{value:_s(code)},on:{input:function(t){t.target.composing||(code=t.target.value)}}})," ",_m(3)," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:password,expression:"password"}],attrs:{type:"password"},domProps:{value:_s(password)},on:{input:function(t){t.target.composing||(password=t.target.value)}}})," ",_h("button",{staticClass:"button ",on:{click:function(t){sendCode()}}},["发送验证码"])," ",_h("button",{staticClass:"button is-primary",on:{click:function(t){signUp()}}},["注册"])])," ",_h("p",{staticClass:"links"},[_h("router-link",{attrs:{to:"/signIn"}},["登录"])])])])},staticRenderFns:[function(){with(this)return _h("h1",["注册"])},function(){with(this)return _h("h5",["手机号："])},function(){with(this)return _h("h5",["验证码："])},function(){with(this)return _h("h5",["密码："])}]}}});