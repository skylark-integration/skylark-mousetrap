/**
 * skylark-mousetrap - A version of mousetrap.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-mousetrap/
 * @license MIT
 */
define(["skylark-langx/skylark"],function(t){for(var e,n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},a={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},i={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},o=1;o<20;++o)n[111+o]="f"+o;for(o=0;o<=9;++o)n[o+96]=o.toString();function c(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function s(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return n[t.which]?n[t.which]:r[t.which]?r[t.which]:String.fromCharCode(t.which).toLowerCase()}function l(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function u(t,r,a){return a||(a=function(){if(!e)for(var t in e={},n)t>95&&t<112||n.hasOwnProperty(t)&&(e[n[t]]=t);return e}()[t]?"keydown":"keypress"),"keypress"==a&&r.length&&(a="keydown"),a}function p(t,e){var n,r,o,c=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),o=0;o<n.length;++o)r=n[o],i[r]&&(r=i[r]),e&&"keypress"!=e&&a[r]&&(r=a[r],c.push("shift")),l(r)&&c.push(r);return{key:r,modifiers:c,action:e=u(r,c,e)}}function f(t){var e=this;if(t=t||document,!(e instanceof f))return new f(t);e.target=t,e._callbacks={},e._directMap={};var n,r={},a=!1,i=!1,o=!1;function u(t){t=t||{};var e,n=!1;for(e in r)t[e]?n=!0:r[e]=0;n||(o=!1)}function h(t,n,a,i,o,c){var s,u,p,f,h=[],y=a.type;if(!e._callbacks[t])return[];for("keyup"==y&&l(t)&&(n=[t]),s=0;s<e._callbacks[t].length;++s)if(u=e._callbacks[t][s],(i||!u.seq||r[u.seq]==u.level)&&y==u.action&&("keypress"==y&&!a.metaKey&&!a.ctrlKey||(p=n,f=u.modifiers,p.sort().join(",")===f.sort().join(",")))){var d=!i&&u.combo==o,m=i&&u.seq==i&&u.level==c;(d||m)&&e._callbacks[t].splice(s,1),h.push(u)}return h}function y(t,n,r,a){e.stopCallback(n,n.target||n.srcElement,r,a)||!1===t(n,r)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function d(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=s(t);n&&("keyup"!=t.type||a!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):a=!1)}function m(t,e,i,c){function l(e){return function(){o=e,++r[t],clearTimeout(n),n=setTimeout(u,1e3)}}function f(e){y(i,e,t),"keyup"!==c&&(a=s(e)),setTimeout(u,10)}r[t]=0;for(var h=0;h<e.length;++h){var d=h+1===e.length?f:l(c||p(e[h+1]).action);k(e[h],d,c,t,h)}}function k(t,n,r,a,i){e._directMap[t+":"+r]=n;var o,c=(t=t.replace(/\s+/g," ")).split(" ");c.length>1?m(t,c,n,r):(o=p(t,r),e._callbacks[o.key]=e._callbacks[o.key]||[],h(o.key,o.modifiers,{type:o.action},a,t,i),e._callbacks[o.key][a?"unshift":"push"]({callback:n,modifiers:o.modifiers,action:o.action,seq:a,level:i,combo:t}))}e._handleKey=function(t,e,n){var r,a=h(t,e,n),c={},s=0,p=!1;for(r=0;r<a.length;++r)a[r].seq&&(s=Math.max(s,a[r].level));for(r=0;r<a.length;++r)if(a[r].seq){if(a[r].level!=s)continue;p=!0,c[a[r].seq]=1,y(a[r].callback,n,a[r].combo,a[r].seq)}else p||y(a[r].callback,n,a[r].combo);var f="keypress"==n.type&&i;n.type!=o||l(t)||f||u(c),i=p&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var r=0;r<t.length;++r)k(t[r],e,n)},c(t,"keypress",d),c(t,"keydown",d),c(t,"keyup",d)}return f.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},f.prototype.unbind=function(t,e){return this.bind.call(this,t,function(){},e)},f.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},f.prototype.reset=function(){return this._callbacks={},this._directMap={},this},f.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){return null!==e&&e!==document&&(e===n||t(e.parentNode,n))}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},f.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},f.addKeycodes=function(t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);e=null},f.init=function(){var t=f(document);for(var e in t)"_"!==e.charAt(0)&&(f[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},t.attach("intg.Mousetrap",f)});
//# sourceMappingURL=sourcemaps/Mousetrap.js.map
