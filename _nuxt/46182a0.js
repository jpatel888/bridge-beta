(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{768:function(t,e,o){var content=o(771);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("069a4c91",content,!0,{sourceMap:!1})},770:function(t,e,o){"use strict";o(768)},771:function(t,e,o){var n=o(107)(!1);n.push([t.i,".amount-input[data-v-490ba338]{width:0;position:relative;font-weight:500;outline:none;font-size:24px;border:none;flex:1 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0;-webkit-appearance:textfield}.amount-input[data-v-490ba338]::-moz-placeholder{color:var(--placeholder-color);opacity:1}.amount-input[data-v-490ba338]:-ms-input-placeholder{color:var(--placeholder-color);opacity:1}.amount-input[data-v-490ba338]::placeholder{color:var(--placeholder-color);opacity:1}.amount-input[data-v-490ba338] ::-webkit-search-decoration{-webkit-appearance:none}.amount-input [type=number][data-v-490ba338]{-moz-appearance:textfield}.amount-input[data-v-490ba338] ::-webkit-inner-spin-button,.amount-input[data-v-490ba338] ::-webkit-outer-spin-button{-webkit-appearance:none}",""]),t.exports=n},772:function(t,e,o){"use strict";o.r(e);o(122),o(53),o(52),o(105),o(106),o(230);var n=o(229),l=o.n(n),c={props:{value:{default:""},allowedDecimals:{default:20},disabled:{type:Boolean,default:!1}},data:function(){return{amount:"",isFocused:!1}},mounted:function(){this.setVal()},methods:{isValid:function(t){return this.validationRegex.test(t)},enforce:function(t){return null==t?void 0:t.replace(/,/g,".")},setVal:function(){l()(this.value).isEqualTo(l()(this.amount))||(this.amount=0==Number(this.value)?"":l()(this.value).toString())}},watch:{value:function(){this.isFocused||this.setVal()},amount:function(t,e){var o=this.enforce(t),n=this.isValid(o);this.amount=n?o:e,this.$emit("input-model-changed",{amount:this.amount})}},computed:{validationRegex:function(){return RegExp(0==this.allowedDecimals?"^\\d{0,20}$":"^\\d{0,20}$|^((\\d{0,20})?\\.\\d{0,".concat(this.allowedDecimals,"})$"))},dynamicStyle:function(){return{color:this.theme.text1,background:this.theme.bg1,"--placeholder-color":this.theme.text4}}}},r=(o(770),o(12)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],ref:"amountInput",staticClass:"amount-input error",style:t.dynamicStyle,attrs:{disabled:t.disabled,inputmode:"decimal",title:"Token Amount",autocomplete:"off",autocorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0.0",minlength:"1",maxlength:"79",spellcheck:"false"},domProps:{value:t.amount},on:{change:function(e){return t.setVal()},blur:function(e){t.isFocused=!1,t.setVal()},focus:function(e){t.isFocused=!0},input:function(e){e.target.composing||(t.amount=e.target.value)}}})}),[],!1,null,"490ba338",null);e.default=component.exports}}]);