!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).publish=e()}(this,(function(){"use strict";function t(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var e=t((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}));var n=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};function i(){}function r(t,e){for(var n in e)t[n]=e[n];return t}function s(t,e){for(var n in e)t[n]=1;return t}function o(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n)}function c(t){t.parentNode.removeChild(t)}function u(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}function l(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(){return document.createDocumentFragment()}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function h(){return document.createComment("")}function b(t,e,n,i){t.addEventListener(e,n,i)}function m(t,e,n,i){t.removeEventListener(e,n,i)}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function g(t,e){t.data=""+e}function _(t,e,n){t.style.setProperty(e,n)}function y(t,e,n){t.classList[n?"add":"remove"](e)}function w(){return Object.create(null)}function x(t){t._lock=!0,T(t._beforecreate),T(t._oncreate),T(t._aftercreate),t._lock=!1}function N(t,e){t._handlers=w(),t._slots=w(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function T(t){for(;t&&t.length;)t.shift()()}function O(){this.store._remove(this)}var j={destroy:function(t){this.destroy=i,this.fire("destroy"),this.set=i,this._fragment.d(!1!==t),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var i=0;i<n.length;i+=1){var r=n[i];if(!r.__calling)try{r.__calling=!0,r.call(this,e)}finally{r.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(r({},t)),this.root._lock||x(this.root)},_recompute:i,_set:function(t){var e=this._state,n={},i=!1;for(var s in t=r(this._staged,t),this._staged={},t)this._differs(t[s],e[s])&&(n[s]=i=!0);i&&(this._state=r(r({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))},_stage:function(t){r(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}};var H={show:function(){var t=this,e=setTimeout((function(){t.set({visible:!0})}),400);this.set({t:e})},hide:function(){var t=this.get().t;clearTimeout(t),this.set({visible:!1})}};function A(t,e){var n,i,r,s,u=t._slotted.default;return{c:function(){n=d("div"),i=d("i"),r=f("\n        "),i.className="hat-icon im im-graduation-hat svelte-19xfki7",n.className="content svelte-19xfki7"},m:function(t,e){a(t,n,e),o(n,i),o(n,r),u&&(o(n,s||(s=h())),o(n,u))},d:function(t){t&&c(n),u&&function(t,e){for(;t.nextSibling;)e.appendChild(t.nextSibling)}(s,u)}}}function k(t){N(this,t),this._state=r({visible:!1},t.data),this._intro=!0,this._slotted=t.slots||{},this._fragment=function(t,e){var n,i,r,s=e.visible&&A(t);function u(e){t.show()}function l(e){t.hide()}return{c:function(){n=d("div"),(i=d("span")).textContent="?",r=f("\n    "),s&&s.c(),i.className="help-icon svelte-19xfki7",b(n,"mouseenter",u),b(n,"mouseleave",l),n.className="help svelte-19xfki7"},m:function(t,e){a(t,n,e),o(n,i),o(n,r),s&&s.m(n,null)},p:function(e,i){i.visible?s||((s=A(t)).c(),s.m(n,null)):s&&(s.d(1),s=null)},d:function(t){t&&c(n),s&&s.d(),m(n,"mouseenter",u),m(n,"mouseleave",l)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}r(k.prototype,j),r(k.prototype,H);var C={};function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"core";"chart"===t?window.__dw&&window.__dw.vis&&window.__dw.vis.meta&&(C[t]=window.__dw.vis.meta.locale||{}):C[t]="core"===t?dw.backend.__messages.core:Object.assign({},dw.backend.__messages.core,dw.backend.__messages[t])}function L(t){var e=arguments,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"core";if(t=t.trim(),C[n]||E(n),!C[n][t])return"MISSING:"+t;var i=C[n][t];return"string"==typeof i&&arguments.length>2&&(i=i.replace(/\$(\d)/g,(function(t,n){return n=2+Number(n),void 0===e[n]?t:e[n]}))),i}function M(t,e,n,i){window._paq&&window._paq.push(["trackEvent",t,e,n,i])}var S=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var U=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var P=function(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?U(t):n},D=t((function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e})),I=t((function(t){function e(n,i){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,i)}t.exports=e}));var $=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)};var G=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")};var q=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}},R=t((function(t){function e(n,i,r){return q()?t.exports=e=Reflect.construct:t.exports=e=function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&I(r,n.prototype),r},e.apply(null,arguments)}t.exports=e})),F=t((function(t){function e(n){var i="function"==typeof Map?new Map:void 0;return t.exports=e=function(t){if(null===t||!G(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return R(t,arguments,D(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),I(e,t)},e(n)}t.exports=e}));var W=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r};var z=function(t,e){if(null==t)return{};var n,i,r=W(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r};function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function J(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?B(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function V(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=J({payload:null,raw:!1,method:"GET",baseUrl:"//".concat(dw.backend.__api_domain),mode:"cors",credentials:"include"},e,{headers:J({"Content-Type":"application/json"},e.headers)}),i=n.payload,r=n.baseUrl,s=n.raw,o=z(n,["payload","baseUrl","raw"]),a="".concat(r.replace(/\/$/,""),"/").concat(t.replace(/^\//,""));return i&&(o.body=JSON.stringify(i)),window.fetch(a,o).then((function(t){if(s)return t;if(!t.ok)throw new Q(t);if(204===t.status||!t.headers.get("content-type"))return t;var e=t.headers.get("content-type").split(";")[0];return"application/json"===e?t.json():"image/png"===e||"application/pdf"===e?t.blob():t.text()}))}V.get=K("GET"),V.patch=K("PATCH"),V.put=K("PUT"),V.post=K("POST"),V.head=K("HEAD");function K(t){return function(e,n){if(n&&n.method)throw new Error("Setting option.method is not allowed in httpReq.".concat(t.toLowerCase(),"()"));return V(e,J({},n,{method:t}))}}V.delete=K("DELETE");var Q=function(t){function e(t){var n;return S(this,e),(n=P(this,D(e).call(this))).name="HttpReqError",n.status=t.status,n.statusText=t.statusText,n.message="[".concat(t.status,"] ").concat(t.statusText),n.response=t,n}return $(e,t),e}(F(Error));function X(t,e){var n;return{c:function(){(n=d("p")).innerHTML='<i class="fa fa-spinner fa-pulse fa-fw"></i> loading...',n.className="mini-help"},m:function(t,e){a(t,n,e)},d:function(t){t&&c(n)}}}function Y(t){var e,n,i;N(this,t),this._state=r({loading:!1},t.data),this._intro=!0,this._fragment=(e=this._state,i=e.loading&&X(),{c:function(){i&&i.c(),n=h()},m:function(t,e){i&&i.m(t,e),a(t,n,e)},p:function(t,e){e.loading?i||((i=X()).c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d:function(t){i&&i.d(t),t&&c(n)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}r(Y.prototype,j);var Z=!0;var tt={publish:function(){var t=this;this.set({publishing:!0,publishStarted:(new Date).getTime(),now:(new Date).getTime(),progress:[],publish_error:!1});var e=this.store;M("Chart Editor","publish");var n=e.get().id;e.store((function(){t.set({statusUrl:"/v3/charts/".concat(n,"/publish/status/").concat(e.get().publicVersion)}),V.post("/v3/charts/".concat(n,"/publish")).then((function(e){t.set({published:!0,progress:["done"]}),V.get("/v3/charts/".concat(n)).then((function(e){M("Chart Editor","publish-success"),t.publishFinished(e)}))})).catch((function(e){t.set({publish_error:e.message}),M("Chart Editor","publish-error",e.message)})),setTimeout((function(){t.get().publishing&&t.updateStatus()}),1e3)}))},updateStatus:function(){var t=this,e=this.get().statusUrl;e&&V.get(e).then((function(e){t.set({progress:e.progress||[],now:(new Date).getTime()}),t.get().publishing&&setTimeout((function(){t.updateStatus()}),500)}))},publishFinished:function(t){var e=this;this.set({progress:["done"],published:!0,publishStarted:0,needs_republish:!1}),this.store.set({lastEditStep:5}),window.parent.postMessage({source:"datawrapper",type:"chart-publish",chartId:t.id},"*"),setTimeout((function(){return e.set({publishing:!1})}),1e3),this.store.set(t)},setEmbedCode:function(){var t=this.store,e=this.get();if(e){var n=e.embed_type?"embed-method-".concat(e.embed_type):null,i=t.get().publicUrl,r=t.getMetadata("publish.embed-codes"),s=t.getMetadata("publish.embed-height");this.set({embedCode:r&&r[n]?r[n]:"custom"===n?"":'<iframe src="'.concat(i,'" width="100%" height="').concat(s,'" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')})}},copy:function(){var t=this;t.refs.embedInput.select();try{document.execCommand("copy")&&(M("Chart Editor","embedcode-copy"),t.set({copy_success:!0}),setTimeout((function(){return t.set({copy_success:!1})}),300))}catch(t){}},select:function(t,e){var n=this;e.preventDefault(),window.location.hash=t.id;var i=this.get().active_action;if(t.id===i)return this.set({active_action:"",Action:Y});this.set({active_action:t.id}),t.mod?t.mod.App?(this.refs.action.set({show:!1}),this.set({Action:t.mod.App}),this.refs.action.set({show:!0})):(this.set({Action:Y}),this.refs.action.set({loading:!0}),t.mod.css&&function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;new Promise((function(n,i){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){e&&e(),n()},r.onerror=i,document.head.appendChild(r)}))}(t.mod.css),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;new Promise((function(n,i){var r=document.createElement("script");r.src=t,r.onload=function(){e&&e(),n()},r.onerror=i,document.body.appendChild(r)}))}(t.mod.src,(function(){setTimeout((function(){require([t.mod.id],(function(e){Object.assign(t.mod,e),n.set({Action:t.mod.App}),n.refs.action.set({show:!0}),e.init&&e.init(n.refs.action),t.mod.data&&n.refs.action.set(t.mod.data)}))}),200)}))):t.action&&this[t.action]?(this.set({Action:Y}),this[t.action]()):"function"==typeof t.action&&(this.set({Action:Y}),t.action())},duplicate:function(){var t=this.store.get().id;M("Chart Editor","duplicate"),V.post("/v3/charts/".concat(t,"/copy")).then((function(t){window.location.href="/edit/".concat(t.id,"/visualize")}))}};function et(){var t=this,e=this.store.get().lastEditStep;this.set({published:e>4}),window.dw.backend.fire("edit.publish.oncreate",this),this.setEmbedCode();var n=this.store;n.observeDeep("metadata.publish.embed-codes",(function(){return t.setEmbedCode()})),n.observeDeep("metadata.publish.embed-height",(function(){return t.setEmbedCode()})),n.observeDeep("publicUrl",(function(){return t.setEmbedCode()}))}function nt(t){var e=t.changed,n=t.current,i=window.dw&&window.dw.backend&&window.dw.backend.setUserData;if(e.embed_type&&i){var r=window.dw.backend.__userData;if(!n.embed_type||!r)return;r.embed_type=n.embed_type,window.dw.backend.setUserData(r)}if(e.embed_type&&this.setEmbedCode(),e.shareurl_type&&i){var s=window.dw.backend.__userData;if(!n.shareurl_type||!s)return;s.shareurl_type=n.shareurl_type,window.dw.backend.setUserData(s)}if(e.published){var o=window.document.querySelector(".dw-create-publish .publish-step");o&&o.classList[n.published?"add":"remove"]("is-published")}e.auto_publish&&n.auto_publish&&Z&&(this.publish(),Z=!1,window.history.replaceState("","",window.location.pathname))}function it(t){var e=this._svelte,n=e.component,i=e.ctx;n.select(i.action,t)}function rt(t,e,n){var i=Object.create(t);return i.action=e[n],i}function st(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function ot(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function at(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function ct(t,e,n){var i=Object.create(t);return i.step=e[n],i.i=n,i}function ut(t,e){var n;return{c:function(){(n=d("h2")).className="pad-top"},m:function(t,i){a(t,n,i),n.innerHTML=e.publishHed},p:function(t,e){t.publishHed&&(n.innerHTML=e.publishHed)},d:function(t){t&&c(n)}}}function lt(t,e){var n,r=L("publish / publish-intro");return{c:function(){_(n=d("p"),"margin-bottom","20px")},m:function(t,e){a(t,n,e),n.innerHTML=r},p:i,d:function(t){t&&c(n)}}}function pt(t,e){var n,r=L("publish / republish-intro");return{c:function(){n=d("p")},m:function(t,e){a(t,n,e),n.innerHTML=r},p:i,d:function(t){t&&c(n)}}}function dt(t,e){var n;return{c:function(){n=d("p")},m:function(t,i){a(t,n,i),n.innerHTML=e.publishIntro},p:function(t,e){t.publishIntro&&(n.innerHTML=e.publishIntro)},d:function(t){t&&c(n)}}}function ft(t,e){var n,r=L("publish / forbidden");return{c:function(){(n=d("div")).className="alert alert-info svelte-8g6t36"},m:function(t,e){a(t,n,e),n.innerHTML=r},p:i,d:function(t){t&&c(n)}}}function ht(t,e){var n,i,r,s,o,u,l,p;function v(t){return t.published?mt:bt}var g=v(e),_=g(t,e);function y(e){t.publish()}var w=!e.published&&vt(),x=e.needs_republish&&!e.publishing&&gt(),N=e.published&&!e.needs_republish&&e.progress&&e.progress.includes("done")&&!e.publishing&&_t(),T=e.publish_error&&yt(t,e),O=e.publishing&&wt(t,e);return{c:function(){n=d("button"),_.c(),r=f("\n\n    "),w&&w.c(),s=f(" "),x&&x.c(),o=f(" "),N&&N.c(),u=f(" "),T&&T.c(),l=f(" "),O&&O.c(),p=h(),b(n,"click",y),n.disabled=e.publishing,n.className=i="btn-publish btn btn-primary btn-large "+(e.published?"":"btn-first-publish")+" svelte-8g6t36"},m:function(t,e){a(t,n,e),_.m(n,null),a(t,r,e),w&&w.m(t,e),a(t,s,e),x&&x.m(t,e),a(t,o,e),N&&N.m(t,e),a(t,u,e),T&&T.m(t,e),a(t,l,e),O&&O.m(t,e),a(t,p,e)},p:function(e,r){g===(g=v(r))&&_?_.p(e,r):(_.d(1),(_=g(t,r)).c(),_.m(n,null)),e.publishing&&(n.disabled=r.publishing),e.published&&i!==(i="btn-publish btn btn-primary btn-large "+(r.published?"":"btn-first-publish")+" svelte-8g6t36")&&(n.className=i),r.published?w&&(w.d(1),w=null):w||((w=vt()).c(),w.m(s.parentNode,s)),r.needs_republish&&!r.publishing?x||((x=gt()).c(),x.m(o.parentNode,o)):x&&(x.d(1),x=null),r.published&&!r.needs_republish&&r.progress&&r.progress.includes("done")&&!r.publishing?N||((N=_t()).c(),N.m(u.parentNode,u)):N&&(N.d(1),N=null),r.publish_error?T?T.p(e,r):((T=yt(t,r)).c(),T.m(l.parentNode,l)):T&&(T.d(1),T=null),r.publishing?O?O.p(e,r):((O=wt(t,r)).c(),O.m(p.parentNode,p)):O&&(O.d(1),O=null)},d:function(t){t&&c(n),_.d(),m(n,"click",y),t&&c(r),w&&w.d(t),t&&c(s),x&&x.d(t),t&&c(o),N&&N.d(t),t&&c(u),T&&T.d(t),t&&c(l),O&&O.d(t),t&&c(p)}}}function bt(t,e){var n,i,r,s,u,l,p=L("publish / publish-btn");return{c:function(){n=d("span"),i=d("i"),s=f("\n            "),u=d("span"),l=f(p),i.className=r="fa fa-fw "+(e.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-8g6t36",u.className="title svelte-8g6t36",n.className="publish"},m:function(t,e){a(t,n,e),o(n,i),o(n,s),o(n,u),o(u,l)},p:function(t,e){t.publishing&&r!==(r="fa fa-fw "+(e.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-8g6t36")&&(i.className=r)},d:function(t){t&&c(n)}}}function mt(t,e){var n,i,r,s,u,l,p=L("publish / republish-btn");return{c:function(){n=d("span"),i=d("i"),s=f("\n            "),u=d("span"),l=f(p),i.className=r="fa fa-fw fa-refresh "+(e.publishing?"fa-spin":"")+" svelte-8g6t36",u.className="title svelte-8g6t36",n.className="re-publish"},m:function(t,e){a(t,n,e),o(n,i),o(n,s),o(n,u),o(u,l)},p:function(t,e){t.publishing&&r!==(r="fa fa-fw fa-refresh "+(e.publishing?"fa-spin":"")+" svelte-8g6t36")&&(i.className=r)},d:function(t){t&&c(n)}}}function vt(t,e){var n,i,r,s,u=L("publish / publish-btn-intro");return{c:function(){n=d("div"),(i=d("div")).innerHTML='<i class="fa fa-chevron-left"></i>',r=f("\n        "),s=d("div"),i.className="arrow svelte-8g6t36",s.className="text svelte-8g6t36",n.className="publish-intro svelte-8g6t36"},m:function(t,e){a(t,n,e),o(n,i),o(n,r),o(n,s),s.innerHTML=u},d:function(t){t&&c(n)}}}function gt(t,e){var n,i=L("publish / republish-alert");return{c:function(){(n=d("div")).className="btn-aside alert svelte-8g6t36"},m:function(t,e){a(t,n,e),n.innerHTML=i},d:function(t){t&&c(n)}}}function _t(t,e){var n,i=L("publish / publish-success");return{c:function(){(n=d("div")).className="alert alert-success svelte-8g6t36"},m:function(t,e){a(t,n,e),n.innerHTML=i},d:function(t){t&&c(n)}}}function yt(t,e){var n;return{c:function(){(n=d("div")).className="alert alert-error svelte-8g6t36"},m:function(t,i){a(t,n,i),n.innerHTML=e.publish_error},p:function(t,e){t.publish_error&&(n.innerHTML=e.publish_error)},d:function(t){t&&c(n)}}}function wt(t,e){var n,i,r,s=L("publish / progress / please-wait"),u=e.publishWait>3e3&&xt(t,e);return{c:function(){n=d("div"),i=f(s),r=f(" "),u&&u.c(),n.className="alert alert-info publishing svelte-8g6t36"},m:function(t,e){a(t,n,e),o(n,i),o(n,r),u&&u.m(n,null)},p:function(e,i){i.publishWait>3e3?u?u.p(e,i):((u=xt(t,i)).c(),u.m(n,null)):u&&(u.d(1),u=null)},d:function(t){t&&c(n),u&&u.d()}}}function xt(t,e){for(var n,i=e.progress,r=[],s=0;s<i.length;s+=1)r[s]=Nt(t,ct(e,i,s));return{c:function(){n=d("ul");for(var t=0;t<r.length;t+=1)r[t].c();n.className="publish-progress unstyled svelte-8g6t36"},m:function(t,e){a(t,n,e);for(var i=0;i<r.length;i+=1)r[i].m(n,null)},p:function(e,s){if(e.progress){i=s.progress;for(var o=0;o<i.length;o+=1){var a=ct(s,i,o);r[o]?r[o].p(e,a):(r[o]=Nt(t,a),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=i.length}},d:function(t){t&&c(n),l(r,t)}}}function Nt(t,e){var n,i,r,s,l,p=L("publish / status / "+e.step);return{c:function(){n=d("li"),i=d("i"),s=f("\n                "),l=d("noscript"),i.className=r="fa fa-fw "+(e.i<e.progress.length-1?"fa-check":"fa-spinner fa-pulse")+" svelte-8g6t36",n.className="svelte-8g6t36",y(n,"done",e.i<e.progress.length-1)},m:function(t,e){a(t,n,e),o(n,i),o(n,s),o(n,l),l.insertAdjacentHTML("afterend",p)},p:function(t,e){t.progress&&r!==(r="fa fa-fw "+(e.i<e.progress.length-1?"fa-check":"fa-spinner fa-pulse")+" svelte-8g6t36")&&(i.className=r),t.progress&&p!==(p=L("publish / status / "+e.step))&&(u(l),l.insertAdjacentHTML("afterend",p)),t.progress&&y(n,"done",e.i<e.progress.length-1)},d:function(t){t&&c(n)}}}function Tt(t,e){var n,i,r,s,l,p=e.tpl.name;function h(){t.set({shareurl_type:i.__value})}return{c:function(){n=d("label"),i=d("input"),s=f("\n                            "),l=d("noscript"),t._bindingGroups[0].push(i),b(i,"change",h),i.__value=r=e.tpl.id,i.value=i.__value,v(i,"type","radio"),i.name="url-type",i.className="svelte-8g6t36",n.className="radio"},m:function(t,r){a(t,n,r),o(n,i),i.checked=i.__value===e.shareurl_type,o(n,s),o(n,l),l.insertAdjacentHTML("afterend",p)},p:function(t,e){t.shareurl_type&&(i.checked=i.__value===e.shareurl_type),t.plugin_shareurls&&r!==(r=e.tpl.id)&&(i.__value=r),i.value=i.__value,t.plugin_shareurls&&p!==(p=e.tpl.name)&&(u(l),l.insertAdjacentHTML("afterend",p))},d:function(e){e&&c(n),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf(i),1),m(i,"change",h)}}}function Ot(t,e){var n,i,r,s,l,p=e.tpl.title;function h(){t.set({embed_type:i.__value})}return{c:function(){n=d("label"),i=d("input"),s=f(" "),l=d("noscript"),t._bindingGroups[1].push(i),b(i,"change",h),v(i,"type","radio"),i.__value=r=e.tpl.id,i.value=i.__value,i.className="svelte-8g6t36",n.className="radio"},m:function(t,r){a(t,n,r),o(n,i),i.checked=i.__value===e.embed_type,o(n,s),o(n,l),l.insertAdjacentHTML("afterend",p)},p:function(t,e){t.embed_type&&(i.checked=i.__value===e.embed_type),t.embed_templates&&r!==(r=e.tpl.id)&&(i.__value=r),i.value=i.__value,t.embed_templates&&p!==(p=e.tpl.title)&&(u(l),l.insertAdjacentHTML("afterend",p))},d:function(e){e&&c(n),t._bindingGroups[1].splice(t._bindingGroups[1].indexOf(i),1),m(i,"change",h)}}}function jt(t,e){var n,i,r,s,l,p,h=e.tpl.title,b=e.tpl.text;return{c:function(){n=d("div"),i=d("b"),r=f(h),s=f(":"),l=f(" "),p=d("noscript")},m:function(t,e){a(t,n,e),o(n,i),o(i,r),o(i,s),o(n,l),o(n,p),p.insertAdjacentHTML("afterend",b)},p:function(t,e){t.embed_templates&&h!==(h=e.tpl.title)&&g(r,h),t.embed_templates&&b!==(b=e.tpl.text)&&(u(p),p.insertAdjacentHTML("afterend",b))},d:function(t){t&&c(n)}}}function Ht(t,e){var n;return{c:function(){n=d("p")},m:function(t,i){a(t,n,i),n.innerHTML=e.exportIntro},p:function(t,e){t.exportIntro&&(n.innerHTML=e.exportIntro)},d:function(t){t&&c(n)}}}function At(t,e){var n,i,r,s,u,l,p,h,g=e.action.title,_=e.action.banner&&"FALSE"!=e.action.banner.text&&"-"!=e.action.banner.text&&kt(t,e);return{c:function(){n=d("li"),i=d("a"),r=d("i"),u=d("span"),p=f("\n                "),_&&_.c(),r.className=s="fa fa-"+e.action.icon+" svelte-8g6t36",u.className="title svelte-8g6t36",i._svelte={component:t,ctx:e},b(i,"click",it),v(i,"role","button"),i.href=l=e.action.url?e.action.url:"#"+e.action.id,n.className=h="action action-"+e.action.id+" "+(e.action.class||"")+" "+(e.action.id==e.active_action?"active":"")+" svelte-8g6t36"},m:function(t,e){a(t,n,e),o(n,i),o(i,r),o(i,u),u.innerHTML=g,o(n,p),_&&_.m(n,null)},p:function(o,a){e=a,o.sortedChartActions&&s!==(s="fa fa-"+e.action.icon+" svelte-8g6t36")&&(r.className=s),o.sortedChartActions&&g!==(g=e.action.title)&&(u.innerHTML=g),i._svelte.ctx=e,o.sortedChartActions&&l!==(l=e.action.url?e.action.url:"#"+e.action.id)&&(i.href=l),e.action.banner&&"FALSE"!=e.action.banner.text&&"-"!=e.action.banner.text?_?_.p(o,e):((_=kt(t,e)).c(),_.m(n,null)):_&&(_.d(1),_=null),(o.sortedChartActions||o.active_action)&&h!==(h="action action-"+e.action.id+" "+(e.action.class||"")+" "+(e.action.id==e.active_action?"active":"")+" svelte-8g6t36")&&(n.className=h)},d:function(t){t&&c(n),m(i,"click",it),_&&_.d()}}}function kt(t,e){var n,i,r,s=e.action.banner.text;return{c:function(){n=d("div"),i=f(s),n.className="banner",n.style.cssText=r=e.action.banner.style},m:function(t,e){a(t,n,e),o(n,i)},p:function(t,e){t.sortedChartActions&&s!==(s=e.action.banner.text)&&g(i,s),t.sortedChartActions&&r!==(r=e.action.banner.style)&&(n.style.cssText=r)},d:function(t){t&&c(n)}}}function Ct(t,e){var n,i=e.action&&At(t,e);return{c:function(){i&&i.c(),n=h()},m:function(t,e){i&&i.m(t,e),a(t,n,e)},p:function(e,r){r.action?i?i.p(e,r):((i=At(t,r)).c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d:function(t){i&&i.d(t),t&&c(n)}}}function Et(t){var e=this;N(this,t),this.refs={},this._state=r(r(this.store._init(["id","publicUrl","metadata","actions","user"]),{active_action:"",embed_templates:[],plugin_shareurls:[],published:!1,publishing:!1,publishStarted:0,needs_republish:!1,publish_error:!1,auto_publish:!1,progress:[],shareurl_type:"default",embed_type:"responsive",copy_success:!1,Action:Y,chartActions:[{id:"duplicate",icon:"code-fork",title:L("Duplicate"),order:500,action:"duplicate"}],publishHed:"",publishIntro:"",beforeExport:null,exportHed:L("publish / export-duplicate"),exportIntro:L("publish / export-duplicate / intro"),embedCode:"",statusUrl:!1}),t.data),this.store._add(this,["id","publicUrl","metadata","actions","user"]),this._recompute({shareurl_type:1,$id:1,$publicUrl:1,$metadata:1,plugin_shareurls:1,published:1,chartActions:1,$actions:1,publishStarted:1,now:1},this._state),this._bindingGroups=[[],[]],this._intro=!0,this._handlers.state=[nt],this._handlers.destroy=[O],nt.call(this,{changed:s({},this._state),current:this._state}),this._fragment=function(t,e){var n,i,r,s,u,h,y,w,x,N,T,O,j,H,A,C,E,M,S,U,P,D,I,$,G,q,R,F,W,z,B,J,V,K,Q,X,Y,Z,tt,et,nt,it,ct,bt,mt,vt,gt,_t,yt,wt,xt,Nt,At,kt,Et,Lt,Mt,St,Ut,Pt,Dt,It=L("publish / share-embed"),$t=L("publish / share-url"),Gt=L("publish / share-url / fullscreen"),qt=L("publish / help / share-url"),Rt=L("publish / embed"),Ft=L("publish / copy"),Wt=L("publish / copy-success"),zt=L("publish / embed / help"),Bt=e.publishHed&&ut(t,e);function Jt(t){return t.publishIntro?dt:t.published?pt:lt}var Vt=Jt(e),Kt=Vt(t,e);function Qt(t){return t.$user.mayPublish?ht:ft}var Xt=Qt(e),Yt=Xt(t,e);function Zt(){t.set({shareurl_type:E.__value})}for(var te=e.plugin_shareurls,ee=[],ne=0;ne<te.length;ne+=1)ee[ne]=Tt(t,at(e,te,ne));var ie=new k({root:t.root,store:t.store,slots:{default:p()}}),re=e.embed_templates,se=[];for(ne=0;ne<re.length;ne+=1)se[ne]=Ot(t,ot(e,re,ne));function oe(n){t.copy(e.embedCode)}var ae=e.embed_templates.slice(2),ce=[];for(ne=0;ne<ae.length;ne+=1)ce[ne]=jt(t,st(e,ae,ne));var ue=new k({root:t.root,store:t.store,slots:{default:p()}}),le=e.beforeExport;function pe(e){return{root:t.root,store:t.store}}if(le)var de=new le(pe());var fe=e.exportIntro&&Ht(t,e),he=e.sortedChartActions,be=[];for(ne=0;ne<he.length;ne+=1)be[ne]=Ct(t,rt(e,he,ne));var me=e.Action;function ve(e){return{root:t.root,store:t.store,data:{visible:!0,show:!1}}}if(me)var ge=new me(ve());return{c:function(){n=d("div"),Bt&&Bt.c(),i=f(" "),Kt.c(),r=f("\n\n    "),Yt.c(),s=f("\n\n    "),u=d("div"),h=d("h2"),y=f("\n        "),w=d("div"),x=d("i"),N=f("\n            "),T=d("div"),O=d("div"),j=d("b"),H=f("\n                    "),A=d("div"),C=d("label"),E=d("input"),M=f("\n                            "),S=d("noscript"),U=f("\n                        ");for(var o=0;o<ee.length;o+=1)ee[o].c();P=f("\n                "),D=d("div"),I=d("a"),$=f(e.shareUrl),G=f("\n            "),q=d("div"),ie._fragment.c(),R=f("\n\n        "),F=d("div"),W=d("i"),z=f("\n            "),B=d("div"),J=d("div"),V=d("b"),K=f("\n                    "),Q=d("div");for(o=0;o<se.length;o+=1)se[o].c();X=f("\n                "),Y=d("div"),Z=d("textarea"),tt=f("\n                    "),et=d("button"),nt=d("i"),it=f(" "),ct=f(Ft),bt=f("\n                    "),mt=d("div"),vt=f(Wt),_t=f("\n            "),yt=d("div"),wt=d("noscript"),xt=f(" ");for(o=0;o<ce.length;o+=1)ce[o].c();ue._fragment.c(),At=f("\n\n    \n    "),de&&de._fragment.c(),kt=f("\n\n    \n    "),Et=d("div"),Lt=d("div"),Mt=d("h2"),St=f("\n            "),fe&&fe.c(),Ut=f("\n\n        "),Pt=d("ul");for(o=0;o<be.length;o+=1)be[o].c();Dt=f("\n\n        "),ge&&ge._fragment.c(),x.className="icon fa fa-link fa-fw",t._bindingGroups[0].push(E),b(E,"change",Zt),E.__value="default",E.value=E.__value,v(E,"type","radio"),E.name="url-type",E.className="svelte-8g6t36",C.className="radio",A.className="embed-options svelte-8g6t36",O.className="h",I.target="_blank",I.className="share-url svelte-8g6t36",I.href=e.shareUrl,D.className="inpt",T.className="ctrls",w.className="block",W.className="icon fa fa-code fa-fw",Q.className="embed-options svelte-8g6t36",J.className="h",v(Z,"type","text"),Z.className="input embed-code svelte-8g6t36",Z.readOnly=!0,Z.value=e.embedCode,nt.className="fa fa-copy",b(et,"click",oe),et.className="btn btn-copy",et.title="copy",mt.className=gt="copy-success "+(e.copy_success?"show":"")+" svelte-8g6t36",Y.className="inpt",B.className="ctrls",F.className="block",_(u,"margin-top","30px"),u.className=Nt=e.published?"":"inactive",Mt.className="pad-top",Pt.className="chart-actions",Et.className="export-and-duplicate"},m:function(c,l){a(c,n,l),Bt&&Bt.m(n,null),o(n,i),Kt.m(n,null),o(n,r),Yt.m(n,null),o(n,s),o(n,u),o(u,h),h.innerHTML=It,o(u,y),o(u,w),o(w,x),o(w,N),o(w,T),o(T,O),o(O,j),j.innerHTML=$t,o(O,H),o(O,A),o(A,C),o(C,E),E.checked=E.__value===e.shareurl_type,o(C,M),o(C,S),S.insertAdjacentHTML("afterend",Gt),o(A,U);for(var p=0;p<ee.length;p+=1)ee[p].m(A,null);o(T,P),o(T,D),o(D,I),o(I,$),o(w,G),o(ie._slotted.default,q),q.innerHTML=qt,ie._mount(w,null),o(u,R),o(u,F),o(F,W),o(F,z),o(F,B),o(B,J),o(J,V),V.innerHTML=Rt,o(J,K),o(J,Q);for(p=0;p<se.length;p+=1)se[p].m(Q,null);o(B,X),o(B,Y),o(Y,Z),t.refs.embedInput=Z,o(Y,tt),o(Y,et),o(et,nt),o(et,it),o(et,ct),o(Y,bt),o(Y,mt),o(mt,vt),o(F,_t),o(ue._slotted.default,yt),o(yt,wt),wt.insertAdjacentHTML("beforebegin",zt),o(yt,xt);for(p=0;p<ce.length;p+=1)ce[p].m(yt,null);ue._mount(F,null),o(n,At),de&&de._mount(n,null),o(n,kt),o(n,Et),o(Et,Lt),o(Lt,Mt),Mt.innerHTML=e.exportHed,o(Lt,St),fe&&fe.m(Lt,null),o(Et,Ut),o(Et,Pt);for(p=0;p<be.length;p+=1)be[p].m(Pt,null);o(Et,Dt),ge&&(ge._mount(Et,null),t.refs.action=ge)},p:function(o,a){if((e=a).publishHed?Bt?Bt.p(o,e):((Bt=ut(t,e)).c(),Bt.m(n,i)):Bt&&(Bt.d(1),Bt=null),Vt===(Vt=Jt(e))&&Kt?Kt.p(o,e):(Kt.d(1),(Kt=Vt(t,e)).c(),Kt.m(n,r)),Xt===(Xt=Qt(e))&&Yt?Yt.p(o,e):(Yt.d(1),(Yt=Xt(t,e)).c(),Yt.m(n,s)),o.shareurl_type&&(E.checked=E.__value===e.shareurl_type),o.plugin_shareurls||o.shareurl_type){te=e.plugin_shareurls;for(var c=0;c<te.length;c+=1){var l=at(e,te,c);ee[c]?ee[c].p(o,l):(ee[c]=Tt(t,l),ee[c].c(),ee[c].m(A,null))}for(;c<ee.length;c+=1)ee[c].d(1);ee.length=te.length}if(o.shareUrl&&(g($,e.shareUrl),I.href=e.shareUrl),o.embed_templates||o.embed_type){re=e.embed_templates;for(c=0;c<re.length;c+=1){var p=ot(e,re,c);se[c]?se[c].p(o,p):(se[c]=Ot(t,p),se[c].c(),se[c].m(Q,null))}for(;c<se.length;c+=1)se[c].d(1);se.length=re.length}if(o.embedCode&&(Z.value=e.embedCode),o.copy_success&&gt!==(gt="copy-success "+(e.copy_success?"show":"")+" svelte-8g6t36")&&(mt.className=gt),o.embed_templates){ae=e.embed_templates.slice(2);for(c=0;c<ae.length;c+=1){var d=st(e,ae,c);ce[c]?ce[c].p(o,d):(ce[c]=jt(t,d),ce[c].c(),ce[c].m(yt,null))}for(;c<ce.length;c+=1)ce[c].d(1);ce.length=ae.length}if(o.published&&Nt!==(Nt=e.published?"":"inactive")&&(u.className=Nt),le!==(le=e.beforeExport)&&(de&&de.destroy(),le?((de=new le(pe()))._fragment.c(),de._mount(n,kt)):de=null),o.exportHed&&(Mt.innerHTML=e.exportHed),e.exportIntro?fe?fe.p(o,e):((fe=Ht(t,e)).c(),fe.m(Lt,null)):fe&&(fe.d(1),fe=null),o.sortedChartActions||o.active_action){he=e.sortedChartActions;for(c=0;c<he.length;c+=1){var f=rt(e,he,c);be[c]?be[c].p(o,f):(be[c]=Ct(t,f),be[c].c(),be[c].m(Pt,null))}for(;c<be.length;c+=1)be[c].d(1);be.length=he.length}me!==(me=e.Action)&&(ge&&ge.destroy(),me?((ge=new me(ve()))._fragment.c(),ge._mount(Et,null),t.refs.action=ge):(ge=null,t.refs.action===ge&&(t.refs.action=null)))},d:function(e){e&&c(n),Bt&&Bt.d(),Kt.d(),Yt.d(),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf(E),1),m(E,"change",Zt),l(ee,e),ie.destroy(),l(se,e),t.refs.embedInput===Z&&(t.refs.embedInput=null),m(et,"click",oe),l(ce,e),ue.destroy(),de&&de.destroy(),fe&&fe.d(),l(be,e),ge&&ge.destroy()}}}(this,this._state),this.root._oncreate.push((function(){et.call(e),e.fire("update",{changed:s({},e._state),current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),x(this))}return r(Et.prototype,j),r(Et.prototype,tt),Et.prototype._recompute=function(t,e){var n,i,r,s,o,a;(t.shareurl_type||t.$id||t.$publicUrl||t.$metadata||t.plugin_shareurls||t.published)&&this._differs(e.shareUrl,e.shareUrl=function(t){var e=t.shareurl_type,n=t.$id,i=t.$publicUrl,r=t.$metadata,s=t.plugin_shareurls;if(!t.published)return"https://www.datawrapper.de/...";if("default"===e)return i;var o="";return s.forEach((function(t){t.id===e&&(o=(o=t.url.replace(/%chart_id%/g,n)).replace(/%(.*?)%/g,(function(t,e){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e)return t;for(var i=e.split("."),r=t,s=0;s<i.length&&null!=r;s++)r=r[i[s]];return null==r?n:r}({id:n,metadata:r},e)})))})),o}(e))&&(t.shareUrl=!0),(t.chartActions||t.$actions)&&this._differs(e.sortedChartActions,e.sortedChartActions=(i=(n=e).chartActions,r=n.$actions,i.concat(r).filter((function(t){return"publish-s3"!==t.id})).sort((function(t,e){return t.order-e.order}))))&&(t.sortedChartActions=!0),(t.publishStarted||t.now)&&this._differs(e.publishWait,e.publishWait=(o=(s=e).publishStarted,a=s.now,o>0?a-o:0))&&(t.publishWait=!0)},{Publish:Et}}));
