(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32ab531b"],{"0aed":function(t,e,n){"use strict";n("aaba");var r=n("bf16"),i=n("86d4"),c=n("238a"),o=n("f6b4"),a=n("cb3d"),u=n("8714"),s=a("species"),l=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=a(t),d=!c((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),p=d?!c((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[h](""),!e})):void 0;if(!d||!p||"replace"===t&&!l||"split"===t&&!f){var v=/./[h],b=n(o,h,""[t],(function(t,e,n,r,i){return e.exec===u?d&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=b[0],y=b[1];r(String.prototype,t,g),i(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"2fd4":function(t,e,n){var r=n("fb68"),i=n("75c4"),c=n("cb3d")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},"3d19":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wordCloud__tagBall",style:{width:this.width+"px",height:this.height+"px"}},t._l(t.data,(function(e,r){return n("span",{key:r,staticClass:"wordCloud__tag",style:Object.assign({},{color:t.color[r%t.color.length]},t.contentEle[r].style)},[t._v(t._s(e))])})),0),n("div",{staticClass:"wordCloud__home"},[n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.handleSpeed("slow")}}},[t._v("降低速度")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleRotate("-1")}}},[t._v("横向顺时针")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleRotate("1")}}},[t._v("横向逆时针")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleRotate("-2")}}},[t._v("纵向顺时针")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleRotate("2")}}},[t._v("纵向逆时针")]),n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.handleSpeed("fast")}}},[t._v("增加速度")])],1)])},i=[];n("5ab2"),n("6d57"),n("e10e");function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("163d"),n("ed63"),n("8cf2"),n("51f1"),n("9a33");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"",data:function(){return{data:[],color:["#2D4DB6","#04B67C","#D1AF07","#E27914","#CB4A4D","#B02690"],contentEle:[],width:500,height:500,direction:"-1",speed:400}},created:function(){this.data="中国加油, 武汉加油,".repeat(20).slice(0,-1).split(","),this.contentEle=this.data.map((function(){return{x:0,y:0,z:0,style:{}}}))},mounted:function(){this.innit()},methods:{innit:function(){var t=(this.width-50)/2,e=(this.height-50)/2;this.contentEle=[];for(var n=0;n<this.data.length;n+=1){var r=(2*(n+1)-1)/this.data.length-1,i=Math.acos(r),c=i*Math.sqrt(this.data.length*Math.PI),o=t*Math.sin(i)*Math.cos(c),a=e*Math.sin(i)*Math.sin(c),u=t*Math.cos(i),s={x:o,y:a,z:u,style:{}};this.contentEle.push(s)}this.animate()},animate:function(){this.rotateX(),this.rotateY(),this.move(),window.requestAnimationFrame(this.animate)},rotateX:function(){var t=["-1","1"].includes(this.direction)?Math.PI/(1/0):Math.PI/(Number(this.direction)/2*Number(this.speed)),e=Math.cos(t),n=Math.sin(t);this.contentEle=this.contentEle.map((function(t){var r=t.y*e-t.z*n,i=t.z*e+t.y*n;return a(a({},t),{},{y:r,z:i})}))},rotateY:function(){var t=["-2","2"].includes(this.direction)?Math.PI/(1/0):Math.PI/(Number(this.direction)*Number(this.speed)),e=Math.cos(t),n=Math.sin(t);this.contentEle=this.contentEle.map((function(t){var r=t.x*e-t.z*n,i=t.z*e+t.x*n;return a(a({},t),{},{x:r,z:i})}))},move:function(){var t=this,e=this.width/2,n=this.height/2;this.contentEle=this.contentEle.map((function(r){var i=r.x,c=r.y,o=r.z,u=500,s=(t.width-50)/2,l=u/(u-o),f=(o+s)/(2*s),h="".concat(i+e-15,"px"),d="".concat(c+n-15,"px"),p="translate(".concat(h,", ").concat(d,") scale(").concat(l,")"),v=a(a({},r.style),{},{opacity:f+.5,zIndex:parseInt(100*l,10),transform:p});return{x:i,y:c,z:o,style:v}}))},handleRotate:function(t){this.direction=t},handleSpeed:function(t){var e={fast:-50,slow:50};this.speed+=e[t],0===this.speed&&(this.speed=50)}}},s=u,l=(n("684e"),n("9ca4")),f=Object(l["a"])(s,r,i,!1,null,"93239fe8",null);e["default"]=f.exports},"41b6":function(t,e,n){},"4ba2":function(t,e,n){var r=n("2ea2"),i=n("2f77"),c=n("69b3"),o=n("e7ad").Reflect;t.exports=o&&o.ownKeys||function(t){var e=r.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},"51f1":function(t,e,n){var r=n("e46b");r(r.P,"String",{repeat:n("f160")})},"5ab2":function(t,e,n){var r=n("e46b"),i=n("4ba2"),c=n("09b9"),o=n("dcb7"),a=n("ebc3");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),u=o.f,s=i(r),l={},f=0;while(s.length>f)n=u(r,e=s[f++]),void 0!==n&&a(l,e,n);return l}})},"684e":function(t,e,n){"use strict";var r=n("41b6"),i=n.n(r);i.a},7108:function(t,e,n){"use strict";var r=n("7e23"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"7c0a":function(t,e,n){var r=n("2fd4"),i=n("f6b4");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},8714:function(t,e,n){"use strict";var r=n("f1fe"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,a="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),s=void 0!==/()??/.exec("")[1],l=u||s;l&&(o=function(t){var e,n,o,l,f=this;return s&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),u&&(e=f[a]),o=i.call(f,t),u&&o&&(f[a]=f.global?o.index+o[0].length:e),s&&o&&o.length>1&&c.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},"8cf2":function(t,e,n){"use strict";var r=n("e46b"),i=n("7c0a"),c="includes";r(r.P+r.F*n("bc96")(c),"String",{includes:function(t){return!!~i(this,t,c).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"9a33":function(t,e,n){"use strict";var r=n("2fd4"),i=n("69b3"),c=n("f63e"),o=n("e754"),a=n("eafa"),u=n("7108"),s=n("8714"),l=n("238a"),f=Math.min,h=[].push,d="split",p="length",v="lastIndex",b=4294967295,g=!l((function(){RegExp(b,"y")}));n("0aed")("split",2,(function(t,e,n,l){var y;return y="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var c,o,a,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?b:e>>>0,g=new RegExp(t.source,l+"g");while(c=s.call(g,i)){if(o=g[v],o>f&&(u.push(i.slice(f,c.index)),c[p]>1&&c.index<i[p]&&h.apply(u,c.slice(1)),a=c[0][p],f=o,u[p]>=d))break;g[v]===c.index&&g[v]++}return f===i[p]?!a&&g.test("")||u.push(""):u.push(i.slice(f)),u[p]>d?u.slice(0,d):u}:"0"[d](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,r):y.call(String(i),n,r)},function(t,e){var r=l(y,t,this,e,y!==n);if(r.done)return r.value;var s=i(t),h=String(this),d=c(s,RegExp),p=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"y":"g"),x=new d(g?s:"^(?:"+s.source+")",v),m=void 0===e?b:e>>>0;if(0===m)return[];if(0===h.length)return null===u(x,h)?[h]:[];var w=0,E=0,O=[];while(E<h.length){x.lastIndex=g?E:0;var j,R=u(x,g?h:h.slice(E));if(null===R||(j=f(a(x.lastIndex+(g?0:E)),h.length))===w)E=o(h,E,p);else{if(O.push(h.slice(w,E)),O.length===m)return O;for(var P=1;P<=R.length-1;P++)if(O.push(R[P]),O.length===m)return O;E=w=j}}return O.push(h.slice(w)),O}]}))},aaba:function(t,e,n){"use strict";var r=n("8714");n("e46b")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},bc96:function(t,e,n){var r=n("cb3d")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},e10e:function(t,e,n){var r=n("008a"),i=n("80a9");n("f0cc")("keys",(function(){return function(t){return i(r(t))}}))},e754:function(t,e,n){"use strict";var r=n("fc81")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},ebc3:function(t,e,n){"use strict";var r=n("064e"),i=n("cc33");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},ed63:function(t,e,n){"use strict";var r=n("e46b"),i=n("b3a6")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("0e8b")("includes")},f0cc:function(t,e,n){var r=n("e46b"),i=n("7ddc"),c=n("238a");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*c((function(){n(1)})),"Object",o)}},f160:function(t,e,n){"use strict";var r=n("ee21"),i=n("f6b4");t.exports=function(t){var e=String(i(this)),n="",c=r(t);if(c<0||c==1/0)throw RangeError("Count can't be negative");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(n+=e);return n}},f1fe:function(t,e,n){"use strict";var r=n("69b3");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},fc81:function(t,e,n){var r=n("ee21"),i=n("f6b4");t.exports=function(t){return function(e,n){var c,o,a=String(i(e)),u=r(n),s=a.length;return u<0||u>=s?t?"":void 0:(c=a.charCodeAt(u),c<55296||c>56319||u+1===s||(o=a.charCodeAt(u+1))<56320||o>57343?t?a.charAt(u):c:t?a.slice(u,u+2):o-56320+(c-55296<<10)+65536)}}}}]);