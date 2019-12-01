/**
 * skylark-mousetrap - A version of mousetrap.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-mousetrap/
 * @license MIT
 */
!function(t,e){var n=e.define,require=e.require,r="function"==typeof n&&n.amd,a=!r&&"undefined"!=typeof exports;if(!r&&!n){var o={};n=e.define=function(t,e,n){"function"==typeof n?(o[t]={factory:n,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var n=e.split("/"),r=t.split("/");n.pop();for(var a=0;a<r.length;a++)"."!=r[a]&&(".."==r[a]?n.pop():n.push(r[a]));return n.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):o[t]={factory:null,resolved:!0,exports:n}},require=e.require=function(t){if(!o.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=o[t];if(!module.resolved){var n=[];module.deps.forEach(function(t){n.push(require(t))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-langx-ns/_attach",[],function(){return function(t,e,n){"string"==typeof e&&(e=e.split("."));for(var r=e.length,a=t,o=0,i=e[o++];o<r;)a=a[i]=a[i]||{},i=e[o++];return a[i]=n}}),t("skylark-langx-ns/ns",["./_attach"],function(t){var e={attach:function(n,r){return t(e,n,r)}};return e}),t("skylark-langx-ns/main",["./ns"],function(t){return t}),t("skylark-langx-ns",["skylark-langx-ns/main"],function(t){return t}),t("skylark-langx/skylark",["skylark-langx-ns"],function(t){return t}),t("skylark-mousetrap/Mousetrap",["skylark-langx/skylark"],function(t){for(var e,n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},a={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},o={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},i=1;i<20;++i)n[111+i]="f"+i;for(i=0;i<=9;++i)n[i+96]=i.toString();function s(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function u(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return n[t.which]?n[t.which]:r[t.which]?r[t.which]:String.fromCharCode(t.which).toLowerCase()}function c(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function l(t,r,a){return a||(a=function(){if(!e)for(var t in e={},n)t>95&&t<112||n.hasOwnProperty(t)&&(e[n[t]]=t);return e}()[t]?"keydown":"keypress"),"keypress"==a&&r.length&&(a="keydown"),a}function f(t,e){var n,r,i,s=[];for(n=function(t){if("+"===t)return["+"];return(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),i=0;i<n.length;++i)r=n[i],o[r]&&(r=o[r]),e&&"keypress"!=e&&a[r]&&(r=a[r],s.push("shift")),c(r)&&s.push(r);return e=l(r,s,e),{key:r,modifiers:s,action:e}}function p(t){var e=this;if(t=t||document,!(e instanceof p))return new p(t);e.target=t,e._callbacks={},e._directMap={};var n,r={},a=!1,o=!1,i=!1;function l(t){t=t||{};var e,n=!1;for(e in r)t[e]?n=!0:r[e]=0;n||(i=!1)}function h(t,n,a,o,i,s){var u,l,f,p,h=[],y=a.type;if(!e._callbacks[t])return[];for("keyup"==y&&c(t)&&(n=[t]),u=0;u<e._callbacks[t].length;++u)if(l=e._callbacks[t][u],(o||!l.seq||r[l.seq]==l.level)&&y==l.action&&("keypress"==y&&!a.metaKey&&!a.ctrlKey||(f=n,p=l.modifiers,f.sort().join(",")===p.sort().join(",")))){var k=!o&&l.combo==i,d=o&&l.seq==o&&l.level==s;(k||d)&&e._callbacks[t].splice(u,1),h.push(l)}return h}function y(t,n,r,a){e.stopCallback(n,n.target||n.srcElement,r,a)||!1===t(n,r)&&(function(t){if(t.preventDefault)return void t.preventDefault();t.returnValue=!1}(n),function(t){if(t.stopPropagation)return void t.stopPropagation();t.cancelBubble=!0}(n))}function k(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=u(t);n&&("keyup"!=t.type||a!==n?e.handleKey(n,function(t){var e=[];t.shiftKey&&e.push("shift");t.altKey&&e.push("alt");t.ctrlKey&&e.push("ctrl");t.metaKey&&e.push("meta");return e}(t),t):a=!1)}function d(t,e,o,s){function c(e){return function(){i=e,++r[t],clearTimeout(n),n=setTimeout(l,1e3)}}function p(e){y(o,e,t),"keyup"!==s&&(a=u(e)),setTimeout(l,10)}r[t]=0;for(var h=0;h<e.length;++h){var k=h+1===e.length,d=k?p:c(s||f(e[h+1]).action);m(e[h],d,s,t,h)}}function m(t,n,r,a,o){e._directMap[t+":"+r]=n;var i,s=(t=t.replace(/\s+/g," ")).split(" ");s.length>1?d(t,s,n,r):(i=f(t,r),e._callbacks[i.key]=e._callbacks[i.key]||[],h(i.key,i.modifiers,{type:i.action},a,t,o),e._callbacks[i.key][a?"unshift":"push"]({callback:n,modifiers:i.modifiers,action:i.action,seq:a,level:o,combo:t}))}e._handleKey=function(t,e,n){var r,a=h(t,e,n),s={},u=0,f=!1;for(r=0;r<a.length;++r)a[r].seq&&(u=Math.max(u,a[r].level));for(r=0;r<a.length;++r)if(a[r].seq){if(a[r].level!=u)continue;f=!0,s[a[r].seq]=1,y(a[r].callback,n,a[r].combo,a[r].seq)}else f||y(a[r].callback,n,a[r].combo);var p="keypress"==n.type&&o;n.type!=i||c(t)||p||l(s),o=f&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var r=0;r<t.length;++r)m(t[r],e,n)},s(t,"keypress",k),s(t,"keydown",k),s(t,"keyup",k)}return p.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},p.prototype.unbind=function(t,e){return this.bind.call(this,t,function(){},e)},p.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},p.prototype.reset=function(){return this._callbacks={},this._directMap={},this},p.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){if(null===e||e===document)return!1;if(e===n)return!0;return t(e.parentNode,n)}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},p.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},p.addKeycodes=function(t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);e=null},p.init=function(){var t=p(document);for(var e in t)"_"!==e.charAt(0)&&(p[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},t.attach("intg.Mousetrap",p)}),t("skylark-mousetrap/main",["./Mousetrap"],function(t){return t.init(),t}),t("skylark-mousetrap",["skylark-mousetrap/main"],function(t){return t})}(n),!r){var i=require("skylark-langx/skylark");a?module.exports=i:e.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-mousetrap-all.js.map