/*! For license information please see 247.3f22fcfe.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{606:function(t,r,n){n.d(r,{EF:function(){return m},Fg:function(){return y},II:function(){return x},W2:function(){return w},eb:function(){return v},hc:function(){return g},zx:function(){return b}});var e,o,i,a,c,u,f,s,h,l=n(168),p=n(87),d=n(867),v=d.ZP.h2(e||(e=(0,l.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),y=(d.ZP.h3(o||(o=(0,l.Z)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),(0,d.ZP)(p.rU)(i||(i=(0,l.Z)(["\n  color: #007bff;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"])))),g=d.ZP.ul(a||(a=(0,l.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),m=d.ZP.li(c||(c=(0,l.Z)(["\n  margin-bottom: 10px;\n"]))),w=d.ZP.div(u||(u=(0,l.Z)(["\n  margin: 20px;\n"]))),x=(d.ZP.form(f||(f=(0,l.Z)(["\n  margin-bottom: 20px;\n"]))),d.ZP.input(s||(s=(0,l.Z)(["\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"])))),b=d.ZP.button(h||(h=(0,l.Z)(["\n  padding: 8px 12px;\n  font-size: 16px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"])))},247:function(t,r,n){n.r(r);var e=n(165),o=n(861),i=n(439),a=n(791),c=n(689),u=n(577),f=n(606),s=n(184);r.default=function(){var t=(0,c.UO)().movieId,r=(0,a.useState)([]),n=(0,i.Z)(r,2),h=n[0],l=n[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,o.Z)((0,e.Z)().mark((function r(){var n,o;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat(u._,"/movies/get-movie-credits/").concat(t,"?api_key=").concat(u.$));case 3:return n=r.sent,r.next=6,n.json();case 6:o=r.sent,l(o.cast),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.error("Error fetching cast details:",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,s.jsxs)(f.W2,{children:[(0,s.jsx)(f.eb,{children:"Cast"}),(0,s.jsx)(f.hc,{children:h.map((function(t){return(0,s.jsx)(f.EF,{children:t.name},t.id)}))})]})}},577:function(t,r,n){n.d(r,{$:function(){return e},_:function(){return o}});var e="8aba4e3419a44727b7eb66f35fce4fa2",o="https://api.themoviedb.org/3"},861:function(t,r,n){function e(t,r,n,e,o,i,a){try{var c=t[i](a),u=c.value}catch(f){return void n(f)}c.done?r(u):Promise.resolve(u).then(e,o)}function o(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}n.d(r,{Z:function(){return o}})},165:function(t,r,n){n.d(r,{Z:function(){return o}});var e=n(2);function o(){o=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,r,n){t[r]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(O){s=function(t,r,n){return t[r]=n}}function h(t,r,n,e){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),c=new j(e||[]);return i(a,"_invoke",{value:E(t,n,c)}),a}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=h;var p={};function d(){}function v(){}function y(){}var g={};s(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(P([])));w&&w!==r&&n.call(w,c)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function o(i,a,c,u){var f=l(t[i],t,a);if("throw"!==f.type){var s=f.arg,h=s.value;return h&&"object"==(0,e.Z)(h)&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(f.arg)}var a;i(this,"_invoke",{value:function(t,n){function e(){return new r((function(r,e){o(t,n,r,e)}))}return a=a?a.then(e,e):e()}})}function E(t,r,n){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=Z(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===e)throw e="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e="executing";var u=l(t,r,n);if("normal"===u.type){if(e=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e="completed",n.method="throw",n.arg=u.arg)}}}function Z(t,r){var n=r.method,e=t.iterator[n];if(void 0===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=void 0,Z(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=l(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}throw new TypeError((0,e.Z)(t)+" is not iterable")}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,f,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,f,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(L.prototype),s(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new L(h(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),s(x,f,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(n,e){return a.type="throw",a.arg=t,r.next=n,e&&(r.method="next",r.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=247.3f22fcfe.chunk.js.map