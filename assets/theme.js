window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Vendor ================*/
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*============================================================================
	Ajax the add to cart experience by revealing it in a side drawer
	Plugin Documentation - http://shopify.github.io/Timber/#ajax-cart
	(c) Copyright 2015 Shopify Inc. Author: Carson Shold (@cshold). All Rights Reserved.

	This file includes:
	- Basic Shopify Ajax API calls
	- Ajax cart plugin

	This requires:
	- jQuery 1.8+
	- squirrelly.min.js (for cart template)
	- modernizer.min.js
	- snippet/ajax-cart-template.liquid

	Customized version of Shopify's jQuery API
	(c) Copyright 2009-2015 Shopify Inc. Author: Caroline Schnapp. All Rights Reserved.
==============================================================================*/
if ((typeof ShopifyAPI) === 'undefined') { ShopifyAPI = {}; }

/*============================================================================
	API Helper Functions
==============================================================================*/
function attributeToString(attribute) {
	if ((typeof attribute) !== 'string') {
		attribute += '';
		if (attribute === 'undefined') {
			attribute = '';
		}
	}
	return jQuery.trim(attribute);
};

/*============================================================================
	API Functions
==============================================================================*/
ShopifyAPI.onCartUpdate = function(cart) {
	// alert('There are now ' + cart.item_count + ' items in the cart.');
};

ShopifyAPI.updateCartNote = function(note, callback) {
	var params = {
		type: 'POST',
		url: window.routes.cart_url + '/update.js',
		data: 'note=' + attributeToString(note),
		dataType: 'json',
		success: function(cart) {
			if ((typeof callback) === 'function') {
				callback(cart);
			}
			else {
				ShopifyAPI.onCartUpdate(cart);
			}
		},
		error: function(XMLHttpRequest, textStatus) {
			ShopifyAPI.onError(XMLHttpRequest, textStatus);
		}
	};
	jQuery.ajax(params);
};

ShopifyAPI.onError = function(XMLHttpRequest, textStatus) {
	var data = eval('(' + XMLHttpRequest.responseText + ')');
	//Do not throw 'cannot update empty cart' error.
	//It results only from clicking the '-' sign too much
	if (!!data.message && data.message != 'cannot update empty cart') {
	alert(data.message + '(' + data.status  + '): ' + data.description);
	}
};

/*============================================================================
	POST to cart/add.js returns the JSON of the cart
	- Allow use of form element instead of just id
	- Allow custom error callback
==============================================================================*/
ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
	var params = {
		type: 'POST',
		url: window.routes.cart_url + '/add.js',
		data: jQuery(form).serialize(),
		dataType: 'json',
		success: function(line_item) {
			if ((typeof callback) === 'function') {
				callback(line_item, form);
			}
			else {
				ShopifyAPI.onItemAdded(line_item, form);
			}
		},
		error: function(XMLHttpRequest, textStatus) {
			if ((typeof errorCallback) === 'function') {
				errorCallback(XMLHttpRequest, textStatus, form);
			}
			else {
				ShopifyAPI.onError(XMLHttpRequest, textStatus);
			}

			$( 'body' ).trigger( 'ajaxCart.errorAddItem' );
		}
	};
	jQuery.ajax(params);
};

// Get from cart.js returns the cart in JSON
ShopifyAPI.getCart = function(callback) {
	jQuery.getJSON( window.routes.shop_url + '/cart.js', function (cart, textStatus) {
		if ((typeof callback) === 'function') {
			callback(cart);
		}
		else {
			ShopifyAPI.onCartUpdate(cart);
		}
	});
};

// POST to cart/change.js returns the cart in JSON
ShopifyAPI.changeItem = function(line, quantity, callback) {
	var $cartContainer = $( '#CartContainer' );
	var params = {
		type: 'POST',
		url: window.routes.cart_url + '/change.js',
		data: 'quantity=' + quantity + '&line=' + line,
		dataType: 'json',
		cache: false,
		success: function(cart) {
			if ((typeof callback) === 'function') {
				callback(cart);
			}
			else {
				ShopifyAPI.onCartUpdate(cart);
			}
		},
		error: function(XMLHttpRequest, textStatus) {
			ShopifyAPI.onError(XMLHttpRequest, textStatus);
			$cartContainer.removeClass('is-updating');
		}
	};
	jQuery.ajax(params);
};

/*============================================================================
	Ajax Shopify Add To Cart
==============================================================================*/
var ajaxCart = (function(module, $) {

	'use strict';

	// Public functions
	var init, loadCart, destroy;

	// Private general variables
	var settings, isUpdating;

	// Private plugin variables
	var $formContainer, $addToCart, $cartCountSelector, $cartCostSelector, $cartContainer, $drawerContainer;

	// Private functions
	var updateCountPrice, formOverride, itemAddedCallback, itemErrorCallback, cartUpdateCallback, buildCart, cartCallback, cartAcceptanceCallback, adjustCart, adjustCartCallback, qtySelectors, validateQty;

	// Hide errors timeout
	var hideErrors = 0;

	var namespace = '.ajaxCart';

	/*============================================================================
	Initialise the plugin and define global options
	==============================================================================*/
	init = function (options) {

		// Default settings
		settings = {
			namespace 		   :  '.ajaxCart',
			formSelector       : 'form[action^="/cart/add"]',
			cartContainer      : '#CartContainer',
			addToCartSelector  : 'input[type="submit"]',
			cartCountSelector  : '.CartCount',
			cartCostSelector   : null,
			moneyFormat        : '${{amount}}',
			disableAjaxCart    : window.settings.cartType == 'page',
			enableQtySelectors : true
		};

		// Override defaults with arguments
		$.extend(settings, options);

		// Select DOM elements
		$formContainer     = $(settings.formSelector);
		$cartContainer     = $(settings.cartContainer);
		$addToCart         = $formContainer.find(settings.addToCartSelector);
		$cartCountSelector = $(settings.cartCountSelector);
		$cartCostSelector  = $(settings.cartCostSelector);

		// Override namespace
		namespace = settings.namespace;

		// Track cart activity status
		isUpdating = false;

		// Reset all cart listeners
		$cartContainer.off( namespace );

		// Setup ajax quantity selectors on the any template if enableQtySelectors is true
		if (settings.enableQtySelectors) {
			qtySelectors();
		}

		// Take over the add to cart form submit action if ajax enabled
		if (!settings.disableAjaxCart && $addToCart.length) {
			formOverride();
		}

		// Run this function in case we're using the quantity selector outside of the cart
		adjustCart();
	};

	loadCart = function () {
		$( 'body' ).addClass( 'drawer--is-loading' );
		ShopifyAPI.getCart(cartUpdateCallback);
	};

	updateCountPrice = function (cart) {
		$( '.CartCount' ).each(function() {
			$(this).html(cart.item_count);
		});
	};

	formOverride = function () {
		$formContainer.on('submit', function(evt) {
			evt.preventDefault();
			var $qtyInput = $formContainer.find('.quantity-input'),
				qty = $qtyInput.val(),
				$submitButton = $(this).find( '[data-add-to-cart]' );

			// Prevent multiple form submits
			if ( $submitButton.hasClass( 'is-adding') ) return;

			// Prevent adding a product with zero quantity or it's currently loading
			if ( qty < 1 ) {
				$qtyInput.addClass( 'field-error' )
				$formContainer.find( '.errors' ).remove();
				$formContainer.find( '.variants-wrapper' ).after( '<div class="errors qty-error">' + window.translations.zero_qty_error + '</div>' );

				// Clear hide errors timeout
				if ( hideErrors ) clearTimeout( hideErrors );

				hideErrors = setTimeout( function() {
					$formContainer.find( '.errors' ).fadeOut(function() {
						$qtyInput.removeClass( 'field-error' );
						$formContainer.find( '.errors' ).remove();
					});
				}, 3000);

				return;
			} else {
				$qtyInput.removeClass( 'field-error' );
				$formContainer.find( '.errors' ).remove();
			}

			// Add class to be styled if desired
			$submitButton
				.removeClass( 'is-added' )
				.addClass( 'is-adding' )
				.attr( 'disabled', true );

			// Remove any previous quantity errors
			$formContainer.find( '.errors' ).remove();

			ShopifyAPI.addItemFromForm(evt.target, itemAddedCallback, itemErrorCallback);
		});
	};

	itemAddedCallback = function (product, form ) {
		var $submitButton = $(form).find( '[data-add-to-cart]' );

		$submitButton
			.removeClass( 'is-adding' )
			.addClass( 'is-added' )
			.attr( 'disabled', false );

		ShopifyAPI.getCart(cartUpdateCallback);
	};

	itemErrorCallback = function (XMLHttpRequest, textStatus, form) {
		var response = XMLHttpRequest.responseJSON,
			$qtyInput = $formContainer.find('.quantity-input'),
			$submitButton = $(form).find( '[data-add-to-cart]' );

		if ( typeof(response) === 'object' && response.status == 422 ) {
			$formContainer.find('.variants-wrapper').after('<div class="errors qty-error">'+ response.description +'</div>');

			// Clear hide errors timeout
			if ( hideErrors ) clearTimeout( hideErrors );

			hideErrors = setTimeout( function() {
				$formContainer.find( '.errors' ).fadeOut(function() {
					$qtyInput.removeClass( 'field-error' );
					$formContainer.find( '.errors' ).remove();
				});
			}, 3000);
		}

		$formContainer.removeClass( 'is-loading' );
		$submitButton.removeClass( 'is-adding is-added' ).attr( 'disabled', false );
	};

	cartUpdateCallback = function (cart) {
		// Update quantity and price
		updateCountPrice(cart);
		buildCart(cart);
	};

	buildCart = function (cart) {
		// Start with a fresh cart div
		var $cartContainer = $( '#CartContainer' ),
			acceptanceChecked = !!$cartContainer.attr( 'data-acceptance-checked' ) || false,
			isCartTemplate = $( 'body' ).hasClass( 'template-cart' );

		$cartContainer.empty();

		// Show empty cart
		if (cart.item_count === 0) {
			$cartContainer.append('<p>' + window.translations.cart_empty + '</p>');
			cartCallback(cart);
			return;
		}

		// Squirrelly.js cart layout
		var items = [],
			item = {},
			discounts = [],
			data = {},
			source = $("#CartTemplate").html();

		// Add each item to our squirrelly.js data
		$.each(cart.items, function(index, cartItem) {
			var itemDiscounts = [],
				itemDiscount = [],
				unitPrice = '',
				unitBase = '';

			/* Hack to get product image thumbnail
			*   - If image is not null
			*     - Remove file extension, add _grande, and re-add extension
			*     - Create server relative link
			*   - A hard-coded url of no-image
			*/
			if (cartItem.image != null){
				var prodImg = cartItem.image.replace(/(\.[^.]*)$/, "_120x120$1").replace('http:', '');
			} else {
				var prodImg = "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif";
			}

			// Discounts
			$.each(cartItem.discounts, function(index, discountItem) {
				itemDiscount = {
					title: discountItem.title,
					amount: slate.Currency.formatMoney(discountItem.amount, window.moneyFormat)
				};

				itemDiscounts.push( itemDiscount );
			});

			// Unit price
			if ( cartItem.unit_price ) {
				unitPrice = slate.Currency.formatMoney(cartItem.unit_price, window.moneyFormat) + ' ';

				if ( cartItem.unit_price_measurement.reference_value != 1 ) {
					unitBase += cartItem.unit_price_measurement.reference_value;
				}
				unitBase += cartItem.unit_price_measurement.reference_unit;
			}

			// Create item's data object and add to 'items' array
			item = {
				id: cartItem.variant_id,
				line: index + 1, // Shopify uses a 1+ index in the API
				url: cartItem.url,
				img: prodImg,
				name: cartItem.product_title,
				variation: cartItem.variant_title,
				properties: cartItem.properties,
				itemAdd: cartItem.quantity++,
				itemMinus: cartItem.quantity--,
				itemQty: cartItem.quantity,
				finalPrice: slate.Currency.formatMoney(cartItem.final_line_price, window.moneyFormat),
				originalPrice: cartItem.original_line_price > cartItem.final_line_price ? slate.Currency.formatMoney(cartItem.original_line_price, window.moneyFormat) : 0,
				unitPrice: unitPrice,
				unitBase: unitBase,
				discounts: itemDiscounts,
				vendor: cartItem.vendor
			};

			items.push(item);
		});

		$.each(cart.cart_level_discount_applications, function(index, discountItem) {
			item = {
				title: discountItem.title,
				total_allocated_amount: slate.Currency.formatMoney(discountItem.total_allocated_amount, window.moneyFormat)
			};

			discounts.push( item );
		});

		// Gather all cart data and add to DOM
		data = {
			items: items,
			discounts: discounts,
			note: cart.note,
			totalPrice: slate.Currency.formatMoney(cart.total_price, window.moneyFormat),
			acceptanceChecked: acceptanceChecked,
			isCartTemplate: isCartTemplate
		}

		var template = Sqrl.render( source, data );
		$cartContainer.append(template);

		cartCallback(cart);
	};

	cartAcceptanceCallback = function(cart) {
		// Terms and conditions checkbox listener
		var selectors = {
			cartForm: 'form.cart',
			cartContainer: '#CartContainer',
			cartFormDynamicCheckout: '.additional-checkout-buttons form',
			cartAcceptance: '[data-cart-acceptance]',
			cartButtons: '[data-cart-buttons]',
			cartButtonsFieldset: '[data-cart-buttons-fieldset]',
			cartFormError: '[data-cart-error]'
		};

		if ( $( selectors.cartAcceptance ).length ) {
			var cartFormErrorElement = '<div class="errors" data-cart-error>' + window.translations.cart_acceptance_error + '</div>',
				termsAccepted = $( selectors.cartAcceptance ).is( ':checked' );

			var	formSubmitFunction = function(e) {
				var termsAccepted = $( selectors.cartAcceptance ).is( ':checked' );

				// Disable form submit if terms and conditions are not accepted
				if ( !termsAccepted ) {
					e.preventDefault();
					if ( $( selectors.cartFormError ).length ) return;

					$( selectors.cartButtonsFieldset ).attr( 'disabled', true );
					$( selectors.cartButtons ).before( cartFormErrorElement );
					$( selectors.cartFormError ).slideDown( 'fast' );
					$( selectors.cartContainer ).removeAttr( 'data-acceptance-checked' );
				} else {
					// Enable buttons
					$( selectors.cartFormError ).stop().slideUp( 'fast', function() {
						$(this).remove();
					});
					$( selectors.cartButtonsFieldset ).removeAttr( 'disabled' );
					$( selectors.cartContainer ).attr( 'data-acceptance-checked', 'checked' );
				}
			};

			if ( !termsAccepted ) {
				// Disable buttons
				$( selectors.cartButtonsFieldset ).attr( 'disabled', true );
			}

			// Init listeners
			$( selectors.cartContainer )
				.on( 'click' + namespace, selectors.cartButtons, formSubmitFunction )
				.on( 'submit' + namespace, selectors.cartForm, formSubmitFunction )
				.on( 'submit' + namespace, selectors.cartFormDynamicCheckout, formSubmitFunction )
				.on( 'change' + namespace, selectors.cartAcceptance, formSubmitFunction );
		}
	};

	cartCallback = function(cart) {
		var $body = $( 'body' ),
			$cartContainer = $( '#CartContainer' );

		$body.removeClass( 'drawer--is-loading' );
		$body.trigger( 'ajaxCart.afterCartLoad', cart );
		$cartContainer.removeClass( 'is-updating' );

		adjustCart();
		cartAcceptanceCallback(cart);
		qtySelectors();

		if (window.Shopify && Shopify.StorefrontExpressButtons) {
			Shopify.StorefrontExpressButtons.initialize();
		}
	};

	adjustCart = function () {
		// Add or remove from the quantity
		var $cartContainer = $( '#CartContainer' ),
			actions = 'click change submit focus';

		$cartContainer.off( actions );

		$cartContainer.on( 'click' + namespace, '.ajaxcart__qty-adjust', function() {
			var $el = $(this),
				line = $el.data('line'),
				$qtySelector = $el.siblings('.ajaxcart__qty-num'),
				qty = parseInt($qtySelector.val().replace(/\D/g, ''));

			var qty = validateQty(qty);

			// Add or subtract from the current quantity
			if ($el.hasClass('ajaxcart__qty--plus')) {
				qty++;
			} else {
				qty--;
				if (qty <= 0) qty = 0;
			}

			// If it has a data-line, update the cart.
			// Otherwise, just update the input's number
			if (line) {
				updateQuantity(line, qty);
			} else {
				$qtySelector.val(qty);
			}
		});

		// Update quantity based on input on change
		$cartContainer.on( 'change' + namespace, '.ajaxcart__qty-num', function() {
			var $el = $(this),
				line = $el.data('line'),
				qty = parseInt($el.val().replace(/\D/g, ''));

			var qty = validateQty(qty);

			// If it has a data-line, update the cart
			if (line) {
				updateQuantity(line, qty);
			}
		});

		// Prevent cart from being submitted while quantities are changing

		$cartContainer.on( 'submit' + namespace, 'form.ajaxcart', function(evt) {
			if (isUpdating) {
				evt.preventDefault();
			}
		});

		// Highlight the text when focused
		$cartContainer.on( 'focus' + namespace, '.ajaxcart__qty-adjust', function() {
			var $el = $(this);
			setTimeout(function() {
				$el.select();
			}, 50);
		});

		// Save note anytime it's changed
		$cartContainer.on( 'change' + namespace, 'textarea[name="note"]', function() {
			var newNote = $(this).val();

			// Update the cart note in case they don't click update/checkout
			ShopifyAPI.updateCartNote(newNote, function(cart) {});
		});

		function updateQuantity(line, qty) {
			isUpdating = true;

			// Add activity classes when changing cart quantities
			$cartContainer.addClass( 'is-updating' );
			var $row = $cartContainer.find( '.ajaxcart__row[data-line="' + line + '"]' ).addClass( 'is-loading' );

			if (qty === 0) {
				$row.parent().addClass('is-removed');
			}

			// Slight delay to make sure removed animation is done
			setTimeout(function() {
				ShopifyAPI.changeItem(line, qty, adjustCartCallback);
			}, 250);
		}
	};

	adjustCartCallback = function (cart) {
		isUpdating = false;

		// Update quantity and price
		updateCountPrice(cart);

		// Reprint cart on short timeout so you don't see the content being removed
		setTimeout(function() {
			ShopifyAPI.getCart(buildCart);
		}, 150)
	};

	qtySelectors = function() {
		// Change number inputs to JS ones, similar to ajax cart but without API integration.
		// Make sure to add the existing name and id to the new input element
		var $body = $( 'body' ),
			numInputs = $('input[type="number"]');

		if (numInputs.length) {
			numInputs.each(function() {
				var $el = $(this),
					currentQty = $el.val(),
					inputName = $el.attr('name'),
					inputId = $el.attr('id');

				var itemAdd = currentQty++,
					itemMinus = currentQty--,
					itemQty = currentQty;

				var source   = $("#JsQty").html(),
					data = {
						id: $el.data('id'),
						itemQty: itemQty,
						itemAdd: itemAdd,
						itemMinus: itemMinus,
						inputName: inputName,
						inputId: inputId
					};

				// Append new quantity selector then remove original
				var template = Sqrl.render( source, data );
				$el.after(template).remove();
			});

			// Setup listeners to add/subtract from the input
			$body
				.off( 'click', '.js-qty__adjust' )
				.on( 'click', '.js-qty__adjust', function() {
					var $el = $(this),
						$qtySelector = $el.siblings( '.js-qty__num' ),
						qty = parseInt($qtySelector.val().replace(/\D/g, ''));

					var qty = validateQty(qty);

					// Add or subtract from the current quantity
					if ($el.hasClass('js-qty__adjust--plus')) {
						qty += 1;
					} else {
						qty -= 1;
						if (qty <= 0) qty = 0;
					}

					// Update the input's number
					$qtySelector.val(qty);

					// Trigger change
					$qtySelector.trigger('change');
				});
		}
	};

	validateQty = function (qty) {
		if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
			// We have a valid number!
		} else {
			// Not a number. Default to 1.
			qty = 1;
		}
		return qty;
	};

	destroy = function () {
		var $body = $( 'body' ),
			$cartContainer = $( '#CartContainer' );

		$body
			.off( namespace )
			.off( 'ajaxCart' );

		$cartContainer.off( namespace );
	};

	module = {
		init: init,
		load: loadCart,
		initQtySelectors: qtySelectors,
		destroy: destroy
	};

	return module;

}(ajaxCart || {}, jQuery));
/* ===================================================================================== @preserve =
___  _   _    _
/   || | | |  | |
\__  | | | |  | |  __
/    |/  |/_) |/  /  \_/\/
\___/|__/| \_/|__/\__/  /\_/
						|\
						|/
Ajaxinate
version v2.0.11
https://github.com/Elkfox/Ajaxinate
Copyright (c) 2017 Elkfox Co Pty Ltd
https://elkfox.com
MIT License
================================================================================================= */

var Ajaxinate = function ajaxinateConstructor(config) {
	var settings = config || {};
	/*
		pagination: Selector of pagination container
		method: [options are 'scroll', 'click']
		container: Selector of repeating content
		offset: 0, offset the number of pixels before the bottom to start loading more on scroll
		loadingText: 'Loading', The text changed during loading
		callback: null, function to callback after a new page is loaded
	*/
	var defaultSettings = {
		pagination: '.AjaxinatePagination',
		method: 'scroll',
		namespace: '.Ajaxinate',
		container: '.AjaxinateLoop',
		offset: 0,
		loadingText: window.translations.loading + '<span class="dots dots--animated"><span>.</span><span>.</span><span>.</span></span>',
		callback: null
	};
	// Merge configs
	this.settings = Object.assign(defaultSettings, settings);

	// Bind 'this' to applicable prototype functions
	this.addScrollListeners = this.addScrollListeners.bind(this);
	this.addClickListener = this.addClickListener.bind(this);
	this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this);
	this.stopMultipleClicks = this.stopMultipleClicks.bind(this);
	this.destroy = this.destroy.bind(this);
	this.namespace = this.settings.namespace;

	// Set up our element selectors
	this.containerElement = document.querySelector(this.settings.container);
	this.paginationElement = document.querySelector(this.settings.pagination);

	this.initialize();
};

Ajaxinate.prototype.initialize = function initializeTheCorrectFunctionsBasedOnTheMethod() {
	// Find and initialise the correct function based on the method set in the config
	if (this.containerElement) {
		var initializers = {
			click: this.addClickListener,
			scroll: this.addScrollListeners
		};
		initializers[this.settings.method]();
	}
};

Ajaxinate.prototype.addScrollListeners = function addEventListenersForScrolling() {
	if (this.paginationElement) {
		$(window)
			.on('scroll' + this.namespace, this.checkIfPaginationInView)
			.on('resize' + this.namespace, this.checkIfPaginationInView)
			.on('orientationchange' + this.namespace, this.checkIfPaginationInView);
	}
};

Ajaxinate.prototype.addClickListener = function addEventListenerForClicking() {
	if (this.paginationElement) {
		this.nextPageLinkElement = this.paginationElement.querySelector('a');
		this.clickActive = true;
		if (this.nextPageLinkElement !== null) {
			this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
		}
	}
};

Ajaxinate.prototype.stopMultipleClicks = function handleClickEvent(event) {
	event.preventDefault();
	if (this.clickActive) {
		this.nextPageLinkElement.innerHTML = this.settings.loadingText;
		this.nextPageUrl = this.nextPageLinkElement.href;
		this.clickActive = false;
		this.loadMore();
	}
};

Ajaxinate.prototype.checkIfPaginationInView = function handleScrollEvent() {
	var top = this.paginationElement.getBoundingClientRect().top - this.settings.offset;
	var bottom = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;
	if (top <= window.innerHeight && bottom >= 0) {
		this.nextPageLinkElement = this.paginationElement.querySelector('a');
		this.removeScrollListener();
		if (this.nextPageLinkElement) {
			this.nextPageLinkElement.innerHTML = this.settings.loadingText;
			this.nextPageUrl = this.nextPageLinkElement.href;
			this.loadMore();
		}
	}
};

Ajaxinate.prototype.loadMore = function getTheHtmlOfTheNextPageWithAnAjaxRequest() {
	this.request = new XMLHttpRequest();
	this.request.onreadystatechange = function success() {
		if (this.request.readyState === 4 && this.request.status === 200) {
			var newContainer = $(this.request.response).find( this.settings.container );
			var newPagination = $(this.request.response).find( this.settings.pagination );
			this.containerElement.insertAdjacentHTML('beforeend', newContainer.html());
			this.paginationElement.innerHTML = newPagination.html();
			if (this.settings.callback && typeof this.settings.callback === 'function') {
				this.settings.callback( this.request.response );
			}
			this.initialize();
		}
	}.bind(this);
	this.request.open('GET', this.nextPageUrl);
	this.request.send();
};

Ajaxinate.prototype.removeClickListener = function removeClickEventListener() {
	this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
};

Ajaxinate.prototype.removeScrollListener = function removeScrollEventListener() {
	$(window)
		.off('scroll' + this.namespace, this.checkIfPaginationInView)
		.off('resize' + this.namespace, this.checkIfPaginationInView)
		.off('orientationchange' + this.namespace, this.checkIfPaginationInView);
};

Ajaxinate.prototype.destroy = function removeEventListenersAndReturnThis() {
	// This method is used to unbind event listeners from the DOM
	// This function is called manually to destroy "this" Ajaxinate instance
	var destroyers = {
		click: this.removeClickListener.bind(this),
		scroll: this.removeScrollListener.bind(this)
	};
	destroyers[this.settings.method]();
	return this;
};
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var f=p[u].split("="),l=f[0].replace(d,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t.read?t.read(m,l):t(m,l)||m.replace(d,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}return o.get=o.set=o,o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});
/*
 * Debounce function
 * based on unminified version from http://davidwalsh.name/javascript-debounce-function
 */
PaloAlto.debounce = function(n,t,u){var e;return function(){var a=this,r=arguments,i=function(){e=null,u||n.apply(a,r)},o=u&&!e;clearTimeout(e),e=setTimeout(i,t),o&&n.apply(a,r)}}
/*
    Default Passive events
    https://github.com/zzarcon/default-passive-events
*/
var e,t=["scroll","wheel","touchstart","touchmove","touchenter","touchend","touchleave","mouseout","mouseleave","mouseup","mousedown","mousemove","mouseenter","mousewheel","mouseover"];if(function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}()){var o=EventTarget.prototype.addEventListener;e=o,EventTarget.prototype.addEventListener=function(o,r,n){var s,a="object"==typeof n&&null!==n,i=a?n.capture:n;(n=a?function(e){var t=Object.getOwnPropertyDescriptor(e,"passive");return t&&!0!==t.writable&&void 0===t.set?Object.assign({},e):e}(n):{}).passive=void 0!==(s=n.passive)?s:-1!==t.indexOf(o)&&!0,n.capture=void 0!==i&&i,e.call(this,o,r,n)},EventTarget.prototype.addEventListener._original=e}
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Sqrl={})}(this,(function(e){"use strict";function t(e){var n,r,a=new Error(e);return n=a,r=t.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,a}function n(e,n,r){var a=n.slice(0,r).split(/\n/),i=a.length,s=a[i-1].length+1;throw t(e+=" at line "+i+" col "+s+":\n\n  "+n.split(/\n/)[i-1]+"\n  "+Array(s).join(" ")+"^")}t.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var r=new Function("return this")().Promise,a=!1;try{a=new Function("return (async function(){}).constructor")()}catch(e){if(!(e instanceof SyntaxError))throw e}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t,n){for(var r in t)i(t,r)&&(null==t[r]||"object"!=typeof t[r]||"storage"!==r&&"prefixes"!==r||n?e[r]=t[r]:e[r]=s({},t[r]));return e}var c=/^async +/,o=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,f=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,u=/[.*+\-?^${}()|[\]\\]/g;function p(e){return u.test(e)?e.replace(u,"\\$&"):e}function h(e,r){r.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),o.lastIndex=0,l.lastIndex=0,f.lastIndex=0;var a=r.prefixes,i=[a.h,a.b,a.i,a.r,a.c,a.e].reduce((function(e,t){return e&&t?e+"|"+p(t):t?p(t):e}),""),s=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+p(r.tags[1])+")","g"),u=new RegExp("([^]*?)"+p(r.tags[0])+"(-|_)?\\s*("+i+")?\\s*","g"),h=0,d=!1;function g(t,a){var i,p={f:[]},g=0,v="c";function m(t){var a=e.slice(h,t),i=a.trim();if("f"===v)"safe"===i?p.raw=!0:r.async&&c.test(i)?(i=i.replace(c,""),p.f.push([i,"",!0])):p.f.push([i,""]);else if("fp"===v)p.f[p.f.length-1][1]+=i;else if("err"===v){if(i){var s=a.search(/\S/);n("invalid syntax",e,h+s)}}else p[v]=i;h=t+1}for("h"===a||"b"===a||"c"===a?v="n":"r"===a&&(p.raw=!0,a="i"),s.lastIndex=h;null!==(i=s.exec(e));){var y=i[1],x=i[2],b=i[3],w=i[4],F=i[5],S=i.index;if(y)"("===y?(0===g&&("n"===v?(m(S),v="p"):"f"===v&&(m(S),v="fp")),g++):")"===y?0===--g&&"c"!==v&&(m(S),v="err"):0===g&&"|"===y?(m(S),v="f"):"=>"===y&&(m(S),h+=1,v="res");else if(x){if("/*"===x){var I=e.indexOf("*/",s.lastIndex);-1===I&&n("unclosed comment",e,i.index),s.lastIndex=I+2}else if("'"===x){l.lastIndex=i.index,l.exec(e)?s.lastIndex=l.lastIndex:n("unclosed string",e,i.index)}else if('"'===x){f.lastIndex=i.index,f.exec(e)?s.lastIndex=f.lastIndex:n("unclosed string",e,i.index)}else if("`"===x){o.lastIndex=i.index,o.exec(e)?s.lastIndex=o.lastIndex:n("unclosed string",e,i.index)}}else if(b)return m(S),h=S+i[0].length,u.lastIndex=h,d=F,w&&"h"===a&&(a="s"),p.t=a,p}return n("unclosed tag",e,t),p}var v=function i(s,o){s.b=[],s.d=[];var l,f=!1,p=[];function v(e,t){e&&(e=function(e,t,n,r){var a,i;return"string"==typeof t.autoTrim?a=i=t.autoTrim:Array.isArray(t.autoTrim)&&(a=t.autoTrim[1],i=t.autoTrim[0]),(n||!1===n)&&(a=n),(r||!1===r)&&(i=r),"slurp"===a&&"slurp"===i?e.trim():("_"===a||"slurp"===a?e=String.prototype.trimLeft?e.trimLeft():e.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==a&&"nl"!==a||(e=e.replace(/^(?:\n|\r|\r\n)/,"")),"_"===i||"slurp"===i?e=String.prototype.trimRight?e.trimRight():e.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==i&&"nl"!==i||(e=e.replace(/(?:\n|\r|\r\n)$/,"")),e)}(e,r,d,t))&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),p.push(e))}for(;null!==(l=u.exec(e));){var m,y=l[1],x=l[2],b=l[3]||"";for(var w in a)if(a[w]===b){m=w;break}v(y,x),h=l.index+l[0].length,m||n("unrecognized tag type: "+b,e,h);var F=g(l.index,m),S=F.t;if("h"===S){var I=F.n||"";r.async&&c.test(I)&&(F.a=!0,F.n=I.replace(c,"")),F=i(F),p.push(F)}else if("c"===S){if(s.n===F.n)return f?(f.d=p,s.b.push(f)):s.d=p,s;n("Helper start and end don't match",e,l.index+l[0].length)}else if("b"===S){f?(f.d=p,s.b.push(f)):s.d=p;var R=F.n||"";r.async&&c.test(R)&&(F.a=!0,F.n=R.replace(c,"")),f=F,p=[]}else if("s"===S){var T=F.n||"";r.async&&c.test(T)&&(F.a=!0,F.n=T.replace(c,"")),p.push(F)}else p.push(F)}if(!o)throw t('unclosed helper "'+s.n+'"');return v(e.slice(h,e.length),!1),s.d=p,s}({f:[]},!0);if(r.plugins)for(var m=0;m<r.plugins.length;m++){var y=r.plugins[m];y.processAST&&(v.d=y.processAST(v.d,r))}return v.d}function d(e,t){var n=h(e,t),r="var tR='';"+(t.useWith?"with("+t.varName+"||{}){":"")+x(n,t)+"if(cb){cb(null,tR)} return tR"+(t.useWith?"}":"");if(t.plugins)for(var a=0;a<t.plugins.length;a++){var i=t.plugins[a];i.processFnString&&(r=i.processFnString(r,t))}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n][0],a=t[n][1];e=(t[n][2]?"await ":"")+"c.l('F','"+r+"')("+e,a&&(e+=","+a),e+=")"}return e}function v(e,t,n,r,a,i){var s="{exec:"+(a?"async ":"")+y(n,t,e)+",params:["+r+"]";return i&&(s+=",name:'"+i+"'"),a&&(s+=",async:true"),s+="}"}function m(e,t){for(var n="[",r=0;r<e.length;r++){var a=e[r];n+=v(t,a.res||"",a.d,a.p||"",a.a,a.n),r<e.length&&(n+=",")}return n+="]"}function y(e,t,n){return"function("+t+"){var tR='';"+x(e,n)+"return tR}"}function x(e,t){for(var n=0,r=e.length,a="";n<r;n++){var i=e[n];if("string"==typeof i){a+="tR+='"+i+"';"}else{var s=i.t,c=i.c||"",o=i.f,l=i.n||"",f=i.p||"",u=i.res||"",p=i.b,h=!!i.a;if("i"===s){t.defaultFilter&&(c="c.l('F','"+t.defaultFilter+"')("+c+")");var d=g(c,o);!i.raw&&t.autoEscape&&(d="c.l('F','e')("+d+")"),a+="tR+="+d+";"}else if("h"===s)if(t.storage.nativeHelpers.get(l))a+=t.storage.nativeHelpers.get(l)(i,t);else{var y=(h?"await ":"")+"c.l('H','"+l+"')("+v(t,u,i.d,f,h);y+=p?","+m(p,t):",[]",a+="tR+="+g(y+=",c)",o)+";"}else"s"===s?a+="tR+="+g((h?"await ":"")+"c.l('H','"+l+"')({params:["+f+"]},[],c)",o)+";":"e"===s&&(a+=c+"\n")}}return a}var b=function(){function e(e){this.cache=e}return e.prototype.define=function(e,t){this.cache[e]=t},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e]},e.prototype.reset=function(){this.cache={}},e.prototype.load=function(e){s(this.cache,e,!0)},e}(),w=new b({});function F(e,n,r,a){if(n&&n.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept blocks");if(r&&r.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept filters")}var S=new b({each:function(e,t){var n="",r=e.params[0];if(F("each",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i){r(t[n],n).then((function(s){a+=s,n===t.length-1?i(a):e(t,n+1,r,a,i)}))}(r,0,e.exec,n,t)}));for(var a=0;a<r.length;a++)n+=e.exec(r[a],a);return n},foreach:function(e,t){var n=e.params[0];if(F("foreach",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i,s){a(n[r],t[n[r]]).then((function(c){i+=c,r===n.length-1?s(i):e(t,n,r+1,a,i,s)}))}(n,Object.keys(n),0,e.exec,"",t)}));var r="";for(var a in n)i(n,a)&&(r+=e.exec(a,n[a]));return r},include:function(e,n,r){F("include",n,!1);var a=r.storage.templates.get(e.params[0]);if(!a)throw t('Could not fetch template "'+e.params[0]+'"');return a(e.params[1],r)},extends:function(e,n,r){var a=e.params[1]||{};a.content=e.exec();for(var i=0;i<n.length;i++){var s=n[i];a[s.name]=s.exec()}var c=r.storage.templates.get(e.params[0]);if(!c)throw t('Could not fetch template "'+e.params[0]+'"');return c(a,r)},useScope:function(e,t){return F("useScope",t,!1),e.exec(e.params[0])}}),I=new b({if:function(e,t){F("if",!1,e.f,!0);var n="if("+e.p+"){"+x(e.d,t)+"}";if(e.b)for(var r=0;r<e.b.length;r++){var a=e.b[r];"else"===a.n?n+="else{"+x(a.d,t)+"}":"elif"===a.n&&(n+="else if("+a.p+"){"+x(a.d,t)+"}")}return n},try:function(e,n){if(F("try",!1,e.f,!0),!e.b||1!==e.b.length||"catch"!==e.b[0].n)throw t("native helper 'try' only accepts 1 block, 'catch'");var r="try{"+x(e.d,n)+"}",a=e.b[0];return r+="catch"+(a.res?"("+a.res+")":"")+"{"+x(a.d,n)+"}"},block:function(e,t){return F("block",e.b,e.f,!0),"if(!"+t.varName+"["+e.p+"]){tR+=("+y(e.d,"",t)+")()}else{tR+="+t.varName+"["+e.p+"]}"}}),R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function T(e){return R[e]}var E=new b({e:function(e){var t=String(e);return/[&<>"']/.test(t)?t.replace(/[&<>"']/g,T):t}}),j={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(e,n){if("H"===e){var r=this.storage.helpers.get(n);if(r)return r;throw t("Can't find helper '"+n+"'")}if("F"===e){var a=this.storage.filters.get(n);if(a)return a;throw t("Can't find filter '"+n+"'")}},async:!1,storage:{helpers:S,nativeHelpers:I,filters:E,templates:w},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function H(e,t){var n={};return s(n,j),t&&s(n,t),e&&s(n,e),n.l.bind(n),n}function O(e,n){var r=H(n||{}),i=Function;if(r.async){if(!a)throw t("This environment doesn't support async/await");i=a}try{return new i(r.varName,"c","cb",d(e,r))}catch(n){throw n instanceof SyntaxError?t("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+d(e,r)):n}}function _(e,t){var n;return t.cache&&t.name&&t.storage.templates.get(t.name)?t.storage.templates.get(t.name):(n="function"==typeof e?e:O(e,t),t.cache&&t.name&&t.storage.templates.define(t.name,n),n)}j.l.bind(j),e.compile=O,e.compileScope=x,e.compileScopeIntoFunction=y,e.compileToString=d,e.defaultConfig=j,e.filters=E,e.getConfig=H,e.helpers=S,e.nativeHelpers=I,e.parse=h,e.render=function(e,n,a,i){var s=H(a||{});if(!s.async)return _(e,s)(n,s);if(!i){if("function"==typeof r)return new r((function(t,r){try{t(_(e,s)(n,s))}catch(e){r(e)}}));throw t("Please provide a callback function, this env doesn't support Promises")}try{_(e,s)(n,s,i)}catch(e){return i(e)}},e.templates=w,Object.defineProperty(e,"__esModule",{value:!0})}));
/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/* isElementVisible */
PaloAlto.isInViewport = function(el) {
	const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
};
/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.6.1
*/
!function(o){var t=null;o.modal=function(e,i){o.modal.close();var s,l;if(this.$body=o("body"),this.options=o.extend({},o.modal.defaults,i),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),e.is("a"))if(l=e.attr("href"),/^#/.test(l)){if(this.$elm=o(l),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),s=function(o,t){t.elm.remove()},this.showSpinner(),e.trigger(o.modal.AJAX_SEND),o.get(l).done(function(i){t&&(e.trigger(o.modal.AJAX_SUCCESS),t.$elm.empty().append(i).on(o.modal.CLOSE,s),t.hideSpinner(),t.open(),e.trigger(o.modal.AJAX_COMPLETE))}).fail(function(){e.trigger(o.modal.AJAX_FAIL),t.hideSpinner(),e.trigger(o.modal.AJAX_COMPLETE)});else this.$elm=e,this.$body.append(this.$elm),this.open()},o.modal.prototype={constructor:o.modal,open:function(){var t=this;this.options.doFade?(this.block(),setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay)):(this.block(),this.show()),this.options.escapeClose&&o(document).on("keydown.modal",function(t){27==t.which&&o.modal.close()}),this.options.clickClose&&this.blocker.click(function(t){t.target==this&&o.modal.close()})},close:function(){this.unblock(),this.hide(),o(document).off("keydown.modal")},block:function(){this.$elm.trigger(o.modal.BEFORE_BLOCK,[this._ctx()]),this.blocker=o('<div class="jquery-modal blocker"></div>'),this.$body.css("overflow","hidden"),this.$body.append(this.blocker),this.options.doFade&&this.blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.BLOCK,[this._ctx()])},unblock:function(){if(this.options.doFade){var o=this;this.blocker.fadeOut(this.options.fadeDuration,function(){o.blocker.children().appendTo(o.$body),o.blocker.remove(),o.$body.css("overflow","")})}else this.blocker.children().appendTo(this.$body),this.blocker.remove(),this.$body.css("overflow","")},show:function(){this.$elm.trigger(o.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass+" current"),this.$elm.appendTo(this.blocker),this.options.doFade?this.$elm.css("opacity",0).show().animate({opacity:1},this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(o.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove(),this.$elm.removeClass("current");var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,blocker:this.blocker,options:this.options}}},o.modal.close=function(o){if(t){o&&o.preventDefault(),t.close();var e=t.$elm;return t=null,e}},o.modal.isActive=function(){return t?!0:!1},o.modal.defaults={escapeClose:!0,clickClose:!0,closeText:"",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.modal.BEFORE_BLOCK="modal:before-block",o.modal.BLOCK="modal:block",o.modal.BEFORE_OPEN="modal:before-open",o.modal.OPEN="modal:open",o.modal.BEFORE_CLOSE="modal:before-close",o.modal.CLOSE="modal:close",o.modal.AFTER_CLOSE="modal:after-close",o.modal.AJAX_SEND="modal:ajax:send",o.modal.AJAX_SUCCESS="modal:ajax:success",o.modal.AJAX_FAIL="modal:ajax:fail",o.modal.AJAX_COMPLETE="modal:ajax:complete",o.fn.modal=function(e){return 1===this.length&&(t=new o.modal(this,e)),this},o(document).on("click.modal",'a[rel="modal:close"]',o.modal.close),o(document).on("click.modal",'a[rel="modal:open"]',function(t){t.preventDefault(),o(this).modal()})}(jQuery);
/**
 * @license
 * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
}function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
}return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
!r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
})){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
}function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
}),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov;
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
PaloAlto.Modals = (function() {
	function Modal(id, name, options) {
		var defaults = {
			close: '.js-modal-close',
			open: '.js-modal-open-' + name,
			openClass: 'modal--is-active',
			openBodyClass: 'modal--is-visible',
			closeModalOnClick: false,
			scrollIntoView: false
		};
		this.modal = document.getElementById(id);
		if (!this.modal) return false;
		this.nodes = {
			parents: [document.querySelector('html'), document.body]
		};
		this.config = Object.assign(defaults, options);
		this.modalIsOpen = false;
		this.focusOnOpen = this.config.focusOnOpen
			? document.getElementById(this.config.focusOnOpen)
			: this.modal;
		this.openElement = document.querySelector(this.config.open);
		this.init();
	}
	Modal.prototype.init = function() {
		this.openElement.addEventListener('click', this.open.bind(this));
		this.modal
			.querySelector(this.config.close)
			.addEventListener('click', this.closeModal.bind(this));
	};
	Modal.prototype.open = function(evt) {
		var self = this;
		// Keep track if modal was opened from a click, or called by another function
		var externalCall = false;
		if (this.modalIsOpen) return;
		// Prevent following href if link is clicked
		if (evt) {
			evt.preventDefault();
		} else {
			externalCall = true;
		}
		// Without this, the modal opens, the click event bubbles up
		// which closes the modal.
		if (evt && evt.stopPropagation) {
			evt.stopPropagation();
		}
		if (this.modalIsOpen && !externalCall) {
			this.closeModal();
		}
		PaloAlto.Drawers.close();
		this.modal.classList.add(this.config.openClass);
		this.nodes.parents.forEach(function(node) {
			node.classList.add(self.config.openBodyClass);
		});
		this.modalIsOpen = true;
		var scrollableElement = document.querySelector( '.store-availabilities-list' );
		scrollLock.disablePageScroll( scrollableElement );
		if (this.config.scrollIntoView) {
			this.scrollIntoView();
		}
		this.bindEvents();
	};
	Modal.prototype.closeModal = function() {
		if (!this.modalIsOpen) return;
		document.activeElement.blur();
		this.modal.classList.remove(this.config.openClass);
		var self = this;
		this.nodes.parents.forEach(function(node) {
			node.classList.remove(self.config.openBodyClass);
		});
		this.modalIsOpen = false;
		this.openElement.focus();
		this.unbindEvents();
		var scrollableElement = document.querySelector( '.store-availabilities-list' );
		scrollLock.enablePageScroll( scrollableElement );
	};
	Modal.prototype.bindEvents = function() {
		this.keyupHandler = this.keyupHandler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		document.body.addEventListener('keyup', this.keyupHandler);
		document.body.addEventListener('click', this.clickHandler);
	};
	Modal.prototype.unbindEvents = function() {
		document.body.removeEventListener('keyup', this.keyupHandler);
		document.body.removeEventListener('click', this.clickHandler);
	};
	Modal.prototype.keyupHandler = function(event) {
		if (event.keyCode === 27) {
			this.closeModal();
		}
	};
	Modal.prototype.clickHandler = function(event) {
		if (this.config.closeModalOnClick && !this.modal.contains(event.target)) {
			this.closeModal();
		}
	};
	Modal.prototype.scrollIntoView = function() {
		this.focusOnOpen.scrollIntoView({
			behavior: 'smooth'
		});
	};
	return Modal;
})();
/*!
* parallax.js v2.0.0 (http://pixelcog.github.io/parallax.js/)
* @copyright 2017 PixelCog, Inc.
* @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
*/
!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),s=o(0),a=i(s),f=o(2),l=i(f),d=function(){function t(e,o){function i(t,e,i){var r=parseInt(o[t]);isNaN(r)?o[t]!==e&&o[t]!==i&&(o.pos+=(o[t]="center")+" "):o.pos+=(o[t]=r)+"px "}r(this,t);var n=(0,a.default)(e);if(o.pos="",i("posX","left","right"),i("posY","top","bottom"),navigator.userAgent.match(o.excludeAgents))o.src&&!n.is("img")&&n.css("background",'url("'+o.src+'") '+o.pos+"/cover");else{o.scrollingSelector&&(t.scrollingElement=(0,a.default)(o.scrollingSelector)[0]),t.isSet||t.init(),t.iList.push(this);var s=(0,a.default)("<div>").addClass("parallax-mirror").css({visibility:"hidden",zIndex:o.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}).prependTo((0,a.default)(o.mirrorSelector)),f=n.find(o.sliderSelector);0===f.length?f=(0,a.default)("<img>").attr("src",o.src):(o.formerParent=f.parent(),o.formerStyles=f.prop("style")),f.addClass("parallax-slider").prependTo(s),f.children("img").add(f).on("load",function(){t.update(!0)}),this.$s=f,this.$m=s}this.$w=n,this.o=o,"function"==typeof o.afterSetup&&o.afterSetup(this)}return n(t,[{key:"refresh",value:function(){var e=this.$w,o=this.o;o.dH=t.dH,o.dW=t.dW;var i=o.scrollingElement;if(i&&i!==document&&(o.dH=i.scrollHeight,o.dW=i.scrollWidth),o){o.aspectRatio||function(t,e){var o=0,i=0,r=0,n=0;if(0===t.children().each(function(){var t=(0,a.default)(this),e=t.offset(),s=e.top+t.outerHeight(),f=e.left+t.outerWidth();o=e.top<o?e.top:o,r=e.left<r?e.left:r,i=s>i?s:i,n=f>n?f:n}).length)e.aspectRatio=t[0].naturalWidth/(t[0].naturalHeight||1);else{var s=t.offset(),f=i-Math.max(o,s.top),l=n-Math.max(r,s.left);e.aspectRatio=l/(f||1)}}(this.$s,o);var r=o.aspectRatio||1;o.boxWidth=e.outerWidth(),o.boxHeight=e.outerHeight()+2*o.bleed,o.boxOffsetTop=e.offset().top-o.bleed,o.boxOffsetLeft=e.offset().left,o.boxOffsetBottom=o.boxOffsetTop+o.boxHeight;var n=t.wH,s=t.dH,f=Math.min(o.boxOffsetTop,s-n),l=Math.max(o.boxOffsetTop+o.boxHeight-n,0),d=o.boxHeight+(f-l)*(1-o.speed)|0,u=(o.boxOffsetTop-f)*(1-o.speed)|0,p=void 0;o.boxWidth<d*r?(o.imageWidth=d*r|0,o.imageHeight=d,o.offsetBaseTop=u,p=o.imageWidth-o.boxWidth,"left"===o.posX?o.offsetLeft=0:"right"===o.posX?o.offsetLeft=-p:isNaN(o.posX)?o.offsetLeft=-p/2|0:o.offsetLeft=Math.max(o.posX,-p)):(o.imageWidth=o.boxWidth,o.imageHeight=o.boxWidth/r|0,o.offsetLeft=0,p=o.imageHeight-d,"top"===o.posY?o.offsetBaseTop=u:"bottom"===o.posY?o.offsetBaseTop=u-p:isNaN(o.posY)?o.offsetBaseTop=u-p/2|0:o.offsetBaseTop=u+Math.max(o.posY,-p)),"function"==typeof o.afterRefresh&&o.afterRefresh(this)}}},{key:"render",value:function(){var e=this.o,o=t.sT,i=t.sL,r=e.overScrollFix?t.overScroll:0,n=o+t.wH;e.boxOffsetBottom>o&&e.boxOffsetTop<=n?(e.visibility="visible",e.mirrorTop=e.boxOffsetTop-o,e.mirrorLeft=e.boxOffsetLeft-i,e.offsetTop=e.offsetBaseTop-e.mirrorTop*(1-e.speed)):e.visibility="hidden",this.$m.css({transform:"translate3d("+e.mirrorLeft+"px, "+(e.mirrorTop-r)+"px, 0px)",visibility:e.visibility,height:e.boxHeight,width:e.boxWidth}),this.$s.css({transform:"translate3d("+e.offsetLeft+"px, "+e.offsetTop+"px, 0px)",position:"absolute",height:e.imageHeight,width:e.imageWidth,maxWidth:"none"}),"function"==typeof e.afterRender&&e.afterRender(this)}},{key:"destroy",value:function(){if(this.$m&&this.$m.remove(),this.$s){for(var e=0;e<t.iList.length;e++)t.iList[e]===this&&t.iList.splice(e,1);this.o.formerParent&&(this.$s.prop("style",this.o.formerStyles),this.o.formerParent.append(this.$s))}0===t.iList.length&&((0,a.default)(window).off("scroll.px.parallax resize.px.parallax load.px.parallax"),t.isSet=!1),"function"==typeof this.o.afterDestroy&&this.o.afterDestroy(this)}}],[{key:"init",value:function(){function e(){t.wH=r.height(),t.wW=r.width(),t.dH=i[0].scrollHeight||i.height(),t.dW=i[0].scrollWidth||i.width()}function o(){var e=n.scrollTop(),o=t.dH-t.wH,i=t.dW-t.wW;t.sT=Math.max(0,Math.min(o,e)),t.sL=Math.max(0,Math.min(i,n.scrollLeft())),t.overScroll=Math.max(e-o,Math.min(e,0))}if(!t.isSet){var i=(0,a.default)(t.scrollingElement||document),r=(0,a.default)(window),n=(0,a.default)(t.scrollingElement||window);r.on("resize.px.parallax load.px.parallax",function(){e(),t.update(!0)}),e(),t.isSet=!0;var s=-1;!function e(){var i=n.scrollTop();s!==i&&(s=i,o(),t.update()),window.requestAnimationFrame(e)}()}}},{key:"update",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&a.default.each(t.iList,function(){this.refresh()}),a.default.each(t.iList,function(){this.render()})}}]),t}();d.DEFAULTS={src:null,speed:.2,bleed:0,zIndex:-100,posX:"center",posY:"center",overScrollFix:!1,excludeAgents:/(iPod|iPhone|iPad|Android)/,aspectRatio:null,sliderSelector:">.parallax-slider",mirrorSelector:"body",scrollingSelector:null,afterRefresh:null,afterRender:null,afterSetup:null,afterDestroy:null},d.AUTOINIT=!0,d.sT=0,d.sL=0,d.wH=0,d.wW=0,d.dH=1<<30,d.dW=1<<30,d.iList=[],d.isSet=!1,(0,a.default)(function(){d.AUTOINIT&&(0,a.default)("[data-parallax]").parallax()}),(0,l.default)("parallax",d)},function(t,e,o){"use strict";function i(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="__"+t,n=s.default.fn[t];s.default.fn[t]=function(t){return this.each(function(){var o=(0,s.default)(this),n=o.data(i);if(n||"destroy"===t)"function"==typeof n.configure&&n.configure(options);else{var a=s.default.extend({},e.DEFAULTS,o.data(),"object"===(void 0===t?"undefined":r(t))&&t);o.data(i,n=new e(this,a))}"string"==typeof t&&("destroy"===t?(n.destroy(),o.data(i,!1)):n[t]())})},o&&(s.default[t]=function(e){return(0,s.default)({})[t](e)}),s.default.fn[t].noConflict=function(){return s.default.fn[t]=n}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=i;var n=o(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n)}]);
/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
!function(n){n.fn.prepareTransition=function(){return this.each(function(){var i=n(this);i.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){i.removeClass("is-transitioning")});var t=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"],o=0;n.each(t,function(n,t){o||(o=parseFloat(i.css(t)))}),0!=o&&(i.addClass("is-transitioning"),i[0].offsetWidth)})}}(jQuery);
/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};
/*!
 * Scroll lock
 * https://github.com/FL3NKEY/scroll-lock
*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.scrollLock=t():e.scrollLock=t()}(this,function(){return function(l){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=l,o.c=r,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(l,r,function(e){return t[e]}.bind(null,r));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,l){"use strict";l.r(t);var r=function(e){return Array.isArray(e)?e:[e]},a=function(e){return e instanceof Node},o=function(e,t){if(e&&t){e=e instanceof NodeList?e:[e];for(var l=0;l<e.length&&!0!==t(e[l],l,e.length);l++);}},n=function(e){return console.error("[scroll-lock] ".concat(e))},b=function(e){if(Array.isArray(e))return e.join(", ")},c=function(e){var t=[];return o(e,function(e){return t.push(e)}),t},h=function(e,t){var l=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:document;if(l&&-1!==c(r.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===c(r.querySelectorAll(t)).indexOf(e););return e},v=function(e,t){var l=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;return-1!==c(l.querySelectorAll(t)).indexOf(e)},i=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},m=function(e){if(e)return!!i(e)||e.scrollTop<=0},S=function(e){if(e){if(i(e))return!0;var t=e.scrollTop;return e.scrollHeight<=t+e.offsetHeight}},y=function(e){if(e)return!!i(e)||e.scrollLeft<=0},k=function(e){if(e){if(i(e))return!0;var t=e.scrollLeft;return e.scrollWidth<=t+e.offsetWidth}};l.d(t,"disablePageScroll",function(){return d}),l.d(t,"enablePageScroll",function(){return s}),l.d(t,"getScrollState",function(){return f}),l.d(t,"clearQueueScrollLocks",function(){return p}),l.d(t,"getTargetScrollBarWidth",function(){return g}),l.d(t,"getCurrentTargetScrollBarWidth",function(){return A}),l.d(t,"getPageScrollBarWidth",function(){return G}),l.d(t,"getCurrentPageScrollBarWidth",function(){return T}),l.d(t,"addScrollableTarget",function(){return L}),l.d(t,"removeScrollableTarget",function(){return W}),l.d(t,"addScrollableSelector",function(){return x}),l.d(t,"removeScrollableSelector",function(){return F}),l.d(t,"addLockableTarget",function(){return Y}),l.d(t,"addLockableSelector",function(){return E}),l.d(t,"setFillGapMethod",function(){return O}),l.d(t,"addFillGapTarget",function(){return P}),l.d(t,"removeFillGapTarget",function(){return j}),l.d(t,"addFillGapSelector",function(){return q}),l.d(t,"removeFillGapSelector",function(){return M}),l.d(t,"refillGaps",function(){return N});var u=["padding","margin","width","max-width","none"],w={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:u[0],startTouchY:0,startTouchX:0},d=function(e){w.queue<=0&&(w.scroll=!1,B(),X()),L(e),w.queue++},s=function(e){0<w.queue&&w.queue--,w.queue<=0&&(w.scroll=!0,C(),Q()),W(e)},f=function(){return w.scroll},p=function(){w.queue=0},g=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(a(e)){var l=e.style.overflowY;t?f()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=A(e);return e.style.overflowY=l,r}return 0},A=function(e){if(a(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var l=e.style.borderLeftWidth,r=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var o=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=l,e.style.borderRightWidth=r,o}return 0},G=function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return g(document.body,e)},T=function(){return A(document.body)},L=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?e.setAttribute("data-scroll-lock-scrollable",""):n('"'.concat(e,'" is not a Element.'))})})},W=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?e.removeAttribute("data-scroll-lock-scrollable"):n('"'.concat(e,'" is not a Element.'))})})},x=function(e){e&&r(e).map(function(e){w.scrollableSelectors.push(e)})},F=function(e){e&&r(e).map(function(t){w.scrollableSelectors=w.scrollableSelectors.filter(function(e){return e!==t})})},Y=function(e){e&&(r(e).map(function(e){o(e,function(e){a(e)?e.setAttribute("data-scroll-lock-lockable",""):n('"'.concat(e,'" is not a Element.'))})}),f()||B())},E=function(e){e&&(r(e).map(function(e){w.lockableSelectors.push(e)}),f()||B(),q(e))},O=function(e){if(e)if(-1!==u.indexOf(e))w.fillGapMethod=e,N();else{var t=u.join(", ");n('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},P=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),w.scroll||H(e)):n('"'.concat(e,'" is not a Element.'))})})},j=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),w.scroll||I(e)):n('"'.concat(e,'" is not a Element.'))})})},q=function(e){e&&r(e).map(function(e){-1===w.fillGapSelectors.indexOf(e)&&(w.fillGapSelectors.push(e),w.scroll||D(e))})},M=function(e){e&&r(e).map(function(t){w.fillGapSelectors=w.fillGapSelectors.filter(function(e){return e!==t}),w.scroll||z(t)})},N=function(){w.scroll||X()},B=function(){var e=b(w.lockableSelectors);K(e)},C=function(){var e=b(w.lockableSelectors);R(e)},K=function(e){var t=document.querySelectorAll(e);o(t,function(e){U(e)})},R=function(e){var t=document.querySelectorAll(e);o(t,function(e){_(e)})},U=function(e){if(a(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},_=function(e){a(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},X=function(){w.fillGapSelectors.map(function(e){D(e)})},Q=function(){w.fillGapSelectors.map(function(e){z(e)})},D=function(e){var t=document.querySelectorAll(e),l=-1!==w.lockableSelectors.indexOf(e);o(t,function(e){H(e,l)})},H=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(a(e)){var l;if(""===e.getAttribute("data-scroll-lock-lockable")||t)l=g(e,!0);else{var r=h(e,b(w.lockableSelectors));l=g(r,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&I(e);var o=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",w.fillGapMethod),"margin"===w.fillGapMethod){var n=parseFloat(o.marginRight);e.style.marginRight="".concat(n+l,"px")}else if("width"===w.fillGapMethod)e.style.width="calc(100% - ".concat(l,"px)");else if("max-width"===w.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(l,"px)");else if("padding"===w.fillGapMethod){var c=parseFloat(o.paddingRight);e.style.paddingRight="".concat(c+l,"px")}}},z=function(e){var t=document.querySelectorAll(e);o(t,function(e){I(e)})},I=function(e){if(a(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",function(e){N()}),"undefined"!=typeof document&&(document.addEventListener("touchstart",function(e){w.scroll||(w.startTouchY=e.touches[0].clientY,w.startTouchX=e.touches[0].clientX)}),document.addEventListener("touchmove",function(n){if(!w.scroll){var e=w.startTouchY,t=w.startTouchX,l=n.touches[0].clientY,r=n.touches[0].clientX;if(n.touches.length<2){var c=b(w.scrollableSelectors),a=e<l,i=l<e,u=t<r,d=r<t,s=e+3<l,f=l<e-3,p=t+3<r,g=r<t-3;!function e(t){var l=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t){var r=h(t,c,!1);if(v(t,'input[type="range"]'))return!1;if(l||v(t,'textarea, [contenteditable="true"]')&&h(t,c)||v(t,c)){var o=!1;y(t)&&k(t)?(a&&m(t)||i&&S(t))&&(o=!0):m(t)&&S(t)?(u&&y(t)||d&&k(t))&&(o=!0):(s&&m(t)||f&&S(t)||p&&y(t)||g&&k(t))&&(o=!0),o&&(r?e(r,!0):n.preventDefault())}else e(r)}else n.preventDefault()}(n.target)}}},{passive:!1}),document.addEventListener("touchend",function(e){w.scroll||(w.startTouchY=0,w.startTouchX=0)}));var J={hide:function(e){n('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),d(e)},show:function(e){n('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),s(e)},toggle:function(e){n('"toggle" is deprecated! Do not use it.'),f()?d():s(e)},getState:function(){return n('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),f()},getWidth:function(){return n('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),G()},getCurrentWidth:function(){return n('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),T()},setScrollableTargets:function(e){n('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),L(e)},setFillGapSelectors:function(e){n('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),q(e)},setFillGapTargets:function(e){n('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),P(e)},clearQueue:function(){n('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),p()}},V=function(o){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(e){var t,l,r;t=o,r=n[l=e],l in t?Object.defineProperty(t,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[l]=r})}return o}({disablePageScroll:d,enablePageScroll:s,getScrollState:f,clearQueueScrollLocks:p,getTargetScrollBarWidth:g,getCurrentTargetScrollBarWidth:A,getPageScrollBarWidth:G,getCurrentPageScrollBarWidth:T,addScrollableSelector:x,removeScrollableSelector:F,addScrollableTarget:L,removeScrollableTarget:W,addLockableSelector:E,addLockableTarget:Y,addFillGapSelector:q,removeFillGapSelector:M,addFillGapTarget:P,removeFillGapTarget:j,setFillGapMethod:O,refillGaps:N,_state:w},J);t.default=V}]).default});
/* Throttle & Debounce */
!function(n,t){"$:nomunge";var o,u=n.jQuery||n.Cowboy||(n.Cowboy={});u.throttle=o=function(n,o,e,i){var r,a=0;function c(){var u=this,c=+new Date-a,f=arguments;function d(){a=+new Date,e.apply(u,f)}i&&!r&&d(),r&&clearTimeout(r),i===t&&c>n?d():!0!==o&&(r=setTimeout(i?function(){r=t}:d,i===t?n-c:n))}return"boolean"!=typeof o&&(i=e,e=o,o=t),u.guid&&(c.guid=e.guid=e.guid||u.guid++),c}}(this);
/**!
 * trunk8 v1.3.3
 * https://github.com/rviscomi/trunk8
 *
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 *
 * Date: September 26, 2012
 */

!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?e(require("jquery")):e(t.jQuery)}(this,function(t){var e,n,r="center",i="left",a="right",s={auto:"auto"};function o(e){this.$element=t(e),this.original_text=t.trim(this.$element.html()),this.settings=t.extend({},t.fn.trunk8.defaults)}function l(t){var e=document.createElement("DIV");return e.innerHTML=t,void 0!==e.textContent?e.textContent:e.innerText}function u(e,n,r){e=e.replace(r,"");var i=function(n,a){var s,o,l,u,h="";for(u=0;u<n.length;u++)s=n[u],l=t.trim(e).split(" ").length,t.trim(e).length&&("string"==typeof s?(/<br\s*\/?>/i.test(s)||(1===l&&t.trim(e).length<=s.length?(s=e,"p"!==a&&"div"!==a||(s+=r),e=""):e=e.replace(s,"")),h+=t.trim(s)+(u===n.length-1||l<=1?"":" ")):(o=i(s.content,s.tag),s.after&&(e=e.replace(s.after,"")),o&&(s.after||(s.after=" "),h+="<"+s.tag+s.attribs+">"+o+"</"+s.tag+">"+s.after)));return h},a=i(n);return a.slice(a.length-r.length)!==r&&(a+=r),a}function h(){var e,r,i,a,o,h,c=this.data("trunk8"),f=c.settings,g=f.width,d=f.side,p=f.fill,m=f.parseHTML,v=n.getLineHeight(this)*f.lines,y=c.original_text,S=y.length,x="";if(this.html(y),o=this.text(),m&&l(y)!==y&&(h=function t(e){if(l(e)===e)return e.split(/\s/g);for(var n,r,i=[],a=/<([a-z]+)([^<]*)(?:>([\S\s]*?(?!<\1>))<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/gi,s=a.exec(e);s&&n!==a.lastIndex;)n=a.lastIndex,s[5]?i.push(s[5]):s[1]&&i.push({tag:s[1],attribs:s[2],content:s[3],after:s[4]}),s=a.exec(e);for(r=0;r<i.length;r++)"string"!=typeof i[r]&&i[r].content&&(i[r].content=t(i[r].content));return i}(y),S=(y=l(y)).length),g===s.auto){if(this.height()<=v)return;for(e=0,r=S-1;e<=r;)i=e+(r-e>>1),a=n.eatStr(y,d,S-i,p),m&&h&&(a=u(a,h,p)),this.html(a),this.height()>v?r=i-1:(e=i+1,x=x.length>a.length?x:a);this.html(""),this.html(x),f.tooltip&&this.attr("title",o)}else{if(isNaN(g))return void t.error('Invalid width "'+g+'".');i=S-g,a=n.eatStr(y,d,i,p),this.html(a),f.tooltip&&this.attr("title",y)}f.onTruncate()}o.prototype.updateSettings=function(e){this.settings=t.extend(this.settings,e)},e={init:function(e){return this.each(function(){var n=t(this),r=n.data("trunk8");r||n.data("trunk8",r=new o(this)),r.updateSettings(e),h.call(n)})},update:function(e){return this.each(function(){var n=t(this);e&&(n.data("trunk8").original_text=e),h.call(n)})},revert:function(){return this.each(function(){var e=t(this).data("trunk8").original_text;t(this).html(e)})},getSettings:function(){return t(this.get(0)).data("trunk8").settings}},(n={eatStr:function(e,s,o,l){var u,h,c=e.length,f=n.eatStr.generateKey.apply(null,arguments);if(n.eatStr.cache[f])return n.eatStr.cache[f];if("string"==typeof e&&0!==c||t.error('Invalid source string "'+e+'".'),o<0||o>c)t.error('Invalid bite size "'+o+'".');else if(0===o)return e;switch("string"!=typeof(l+"")&&t.error("Fill unable to be converted to a string."),s){case a:return n.eatStr.cache[f]=t.trim(e.substr(0,c-o))+l;case i:return n.eatStr.cache[f]=l+t.trim(e.substr(o));case r:return u=c>>1,h=o>>1,n.eatStr.cache[f]=t.trim(n.eatStr(e.substr(0,c-u),a,o-h,""))+l+t.trim(n.eatStr(e.substr(c-u),i,h,""));default:t.error('Invalid side "'+s+'".')}},getLineHeight:function(e){var n=t(e).css("float");"none"!==n&&t(e).css("float","none");var r=t(e).css("position");"absolute"===r&&t(e).css("position","static");var i,a=t(e).html(),s="line-height-test";return t(e).html("i").wrap('<div id="'+s+'" />'),i=t("#"+s).innerHeight(),t(e).html(a).css({float:n,position:r}).unwrap(),i}}).eatStr.cache={},n.eatStr.generateKey=function(){return Array.prototype.join.call(arguments,"")},t.fn.trunk8=function(n){return e[n]?e[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void t.error("Method "+n+" does not exist on jQuery.trunk8"):e.init.apply(this,arguments)},t.fn.trunk8.defaults={fill:"&hellip;",lines:1,side:a,tooltip:!0,width:s.auto,parseHTML:!1,onTruncate:function(){}}});
/* YoutTube API */
window.isYoutubeAPILoaded = false;

function loadYoutubeAPI() {
	if (isYoutubeAPILoaded) {
		return;
	} else {
		// Load Youtube API script
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}
}

function onYouTubeIframeAPIReady() {
	window.isYoutubeAPILoaded = true;
	PaloAlto.ProductVideo.loadVideos(PaloAlto.ProductVideo.hosts.youtube);
	$('body').trigger('youtubeAPIReady');
}
/*!
  Zoom 1.7.20
  license: MIT
  http://www.jacklmoore.com/zoom
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,r,a,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(a=c,r=u):(a=d.outerWidth(),r=d.outerHeight()),m=(e.width-c)/a,l=(e.height-u)/r,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,r),0),t=Math.max(Math.min(t,a),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),r=document.createElement("img"),a=o(r),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,r.onload=null,a.remove()}.bind(this,i.style.position,i.style.overflow)),r.onload=function(){function t(t){f.init(),f.move(t),a.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(r):!1)}function n(){a.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(r):!1)}var f=o.zoom(i,u,r,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(r)},r.setAttribute("role","presentation"),r.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);

/*================ Slate ================*/
slate.a11y = {
/**
 * For use when focus shifts to a container rather than a link
 * eg for In-page links, after scroll, focus shifts to content area so that
 * next `tab` is where user expects if focusing a link, just $link.focus();
 *
 * @param {JQuery} $element - The element to be acted upon
 */
	state: {
		firstFocusable: null,
		lastFocusable: null
	},

	pageLinkFocus: function($element) {
		var focusClass = 'js-focus-hidden';

		$element
			.first()
			.attr('tabIndex', '-1')
			.focus()
			.addClass(focusClass)
			.one('blur', callback);

		function callback() {
			$element
				.first()
				.removeClass(focusClass)
				.removeAttr('tabindex');
		}
	},

	trapFocus: function(options) {
		var focusableElements = Array.from(
		  options.container.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
		  )
		).filter(function(element) {
		  var width = element.offsetWidth;
		  var height = element.offsetHeight;

		  return (
			width !== 0 &&
			height !== 0 &&
			getComputedStyle(element).getPropertyValue('display') !== 'none'
		  );
		});

		this.state.firstFocusable = focusableElements[0];
		this.state.lastFocusable = focusableElements[focusableElements.length - 1];

		if (!options.elementToFocus) {
		  options.elementToFocus = options.container;
		}

		options.container.setAttribute('tabindex', '-1');
		options.elementToFocus.focus();

		this._setupHandlers();

		document.addEventListener('focusin', this._onFocusInHandler);
		document.addEventListener('focusout', this._onFocusOutHandler);
	  },

	  removeTrapFocus: function(options) {
		if (options.container) {
		  options.container.removeAttribute('tabindex');
		}
		document.removeEventListener('focusin', this._onFocusInHandler);
	  },

	  _manageFocus: function(evt) {
		if (evt.keyCode !== slate.utils.keyboardKeys.TAB) return;

		/**
		 * On the last focusable element and tab forward,
		 * focus the first element.
		 */
		if (evt.target === this.state.lastFocusable && !evt.shiftKey) {
		  evt.preventDefault();
		  this.state.firstFocusable.focus();
		}
		/**
		 * On the first focusable element and tab backward,
		 * focus the last element.
		 */
		if (evt.target === this.state.firstFocusable && evt.shiftKey) {
		  evt.preventDefault();
		  this.state.lastFocusable.focus();
		}
	  },

	  _onFocusOut: function() {
		document.removeEventListener('keydown', this._manageFocusHandler);
	  },

	  _onFocusIn: function(evt) {
		if (
		  evt.target !== this.state.lastFocusable &&
		  evt.target !== this.state.firstFocusable
		)
		  return;

		document.addEventListener('keydown', this._manageFocusHandler);
	  },

	  _setupHandlers: function() {
		if (!this._onFocusInHandler) {
		  this._onFocusInHandler = this._onFocusIn.bind(this);
		}

		if (!this._onFocusOutHandler) {
		  this._onFocusOutHandler = this._onFocusIn.bind(this);
		}

		if (!this._manageFocusHandler) {
		  this._manageFocusHandler = this._manageFocus.bind(this);
		}
	  }

};
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

slate.Currency = (function() {
	var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

	function formatMoney(cents, format) {
		if (typeof cents === 'string') {
			cents = cents.replace('.', '');
		}
		var value = '';
		var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
		var formatString = format || moneyFormat;

		function formatWithDelimiters(number, precision, thousands, decimal) {
			thousands = thousands || ',';
			decimal = decimal || '.';

			if (isNaN(number) || number === null) {
				return 0;
			}

			number = (number / 100.0).toFixed(precision);

			var parts = number.split('.');
			var dollarsAmount = parts[0].replace(
				/(\d)(?=(\d\d\d)+(?!\d))/g,
				'$1' + thousands
			);
			var centsAmount = parts[1] ? decimal + parts[1] : '';

			return dollarsAmount + centsAmount;
		}

		switch (formatString.match(placeholderRegex)[1]) {
			case 'amount':
				value = formatWithDelimiters(cents, 2);
				break;
			case 'amount_no_decimals':
				value = formatWithDelimiters(cents, 0);
				break;
			case 'amount_with_comma_separator':
				value = formatWithDelimiters(cents, 2, '.', ',');
				break;
			case 'amount_no_decimals_with_comma_separator':
				value = formatWithDelimiters(cents, 0, '.', ',');
				break;
			case 'amount_no_decimals_with_space_separator':
				value = formatWithDelimiters(cents, 0, ' ');
				break;
			case 'amount_with_apostrophe_separator':
				value = formatWithDelimiters(cents, 2, "'");
				break;
		}

		return formatString.replace(placeholderRegex, value);
	}

	return {
		formatMoney: formatMoney
	};
})();
/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {

	/**
	 * Return an object from an array of objects that matches the provided key and value
	 *
	 * @param {array} array - Array of objects
	 * @param {string} key - Key to match the value against
	 * @param {string} value - Value to get match of
	 */
	findInstance: function(array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
	},

	/**
	 * Remove an object from an array of objects by matching the provided key and value
	 *
	 * @param {array} array - Array of objects
	 * @param {string} key - Key to match the value against
	 * @param {string} value - Value to get match of
	 */
	removeInstance: function(array, key, value) {
		var i = array.length;
		while(i--) {
			if (array[i][key] === value) {
				array.splice(i, 1);
				break;
			}
		}

		return array;
	},

	/**
	 * _.compact from lodash
	 * Remove empty/false items from array
	 * Source: https://github.com/lodash/lodash/blob/master/compact.js
	 *
	 * @param {array} array
	 */
	compact: function(array) {
		var index = -1;
		var length = array == null ? 0 : array.length;
		var resIndex = 0;
		var result = [];

		while (++index < length) {
			var value = array[index];
			if (value) {
				result[resIndex++] = value;
			}
		}
		return result;
	},

	/**
	 * _.defaultTo from lodash
	 * Checks `value` to determine whether a default value should be returned in
	 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	 * or `undefined`.
	 * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
	 *
	 * @param {*} value - Value to check
	 * @param {*} defaultValue - Default value
	 * @returns {*} - Returns the resolved value
	 */
	defaultTo: function(value, defaultValue) {
		return (value == null || value !== value) ? defaultValue : value
	},

	keyboardKeys: {
		TAB: 9,
		ENTER: 13,
		ESCAPE: 27,
		SPACE: 32,
		LEFTARROW: 37,
		RIGHTARROW: 39
	}
};

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {

	/**
	 * Variant constructor
	 *
	 * @param {object} options - Settings from `product.js`
	 */
	function Variants(options) {
		this.$container = options.$container;
		this.product = options.product;
		this.singleOptionSelector = options.singleOptionSelector;
		this.originalSelectorId = options.originalSelectorId;
		this.enableHistoryState = options.enableHistoryState;
		this.currentVariant = this._getVariantFromOptions();
      	/*this._filterThumbnails(this.currentVariant);*/
      	
		this.storeAvailability = options.storeAvailability;

		$(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));

		if (this.storeAvailability) {
			this.storeAvailability.updateContent(
				this.currentVariant.id,
				this.product.title
			);
		}
	}

	Variants.prototype = $.extend({}, Variants.prototype, {

		/**
		 * Get the currently selected options from add-to-cart form. Works with all
		 * form input elements.
		 *
		 * @return {array} options - Values of currently selected variants
		 */
		_getCurrentOptions: function() {
          

          var isProductTemplate = $('body').hasClass( 'template-product' );
			var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
				var $element = $(element);
				var type = $element.attr('type');
				var currentOption = {};

				if (type === 'radio' || type === 'checkbox') {
					if ($element[0].checked) {
						currentOption.value = $element.val();
						currentOption.index = $element.data('index');
                      if( currentOption.index == "option1" ){
                        //if ( isProductTemplate ) {
                        var x = currentOption.value;
                        var z = x.toLowerCase();
                       
                        var s = document.getElementsByClassName("sand");
                         var c = document.getElementsByClassName("cocoa");
                         var b = document.getElementsByClassName("bloom");
                         var t = document.getElementsByClassName("tea");
                        
                        if(z == 'sand'){
                         
                         
                          for(i = 0; i < s.length; i++){
                            s[i].style.display = "inline-block";
                          }
                          for(i = 0; i < c.length; i++){
                            c[i].style.display = "none";
                          }
                          for(i = 0; i < b.length; i++){
                            b[i].style.display = "none";
                          }
                          for(i = 0; i < t.length; i++){
                            t[i].style.display = "none";
                          }
                        } else if(z == 'cocoa'){
                          
                          for(i = 0; i < c.length; i++){
                            c[i].style.display = "inline-block";
                          }
                          for(i = 0; i < s.length; i++){
                            s[i].style.display = "none";
                          }
                          for(i = 0; i < b.length; i++){
                            b[i].style.display = "none";
                          }
                          for(i = 0; i < t.length; i++){
                            t[i].style.display = "none";
                          }
                        } else if(z == 'bloom'){
                          
                          for(i = 0; i < b.length; i++){
                            b[i].style.display = "inline-block";
                          }
                          for(i = 0; i < c.length; i++){
                            c[i].style.display = "none";
                          }
                          for(i = 0; i < s.length; i++){
                            s[i].style.display = "none";
                          }
                          for(i = 0; i < t.length; i++){
                            t[i].style.display = "none";
                          }
                        } else if(z == 'tea'){
                          
                          for(i = 0; i < t.length; i++){
                            t[i].style.display = "inline-block";
                          }
                          for(i = 0; i < c.length; i++){
                            c[i].style.display = "none";
                          }
                          for(i = 0; i < b.length; i++){
                            b[i].style.display = "none";
                          }
                          for(i = 0; i < s.length; i++){
                            s[i].style.display = "none";
                          }
                        } 
                        
                        document.getElementById('AddToCart--product-template').style.backgroundImage="url('//cdn.shopify.com/s/files/1/0525/0190/5599/t/15/assets/"+z+".png?v=12564662586016329751')";
                        document.getElementById('SubscribeSubmit--product-template').style.backgroundImage="url('//cdn.shopify.com/s/files/1/0525/0190/5599/t/15/assets/"+z+".png?v=12564662586016329751')";
                        document.getElementById('color_label').innerHTML = x;
                        document.getElementById('added_color_name').innerHTML = x;
                        var sizeChartCells = document. getElementsByClassName('customBackground'); // get all elements.
                        for(var i = 0; i < sizeChartCells.length; i++){
                          sizeChartCells[i].style.backgroundImage="url('//cdn.shopify.com/s/files/1/0525/0190/5599/t/15/assets/"+z+".png?v=12564662586016329751')";
                        }
                        document.getElementById('Email--product-template').style.borderImage="url('//cdn.shopify.com/s/files/1/0525/0190/5599/t/15/assets/"+z+".png?v=12564662586016329751') 30 stretch";
                        document.getElementById('SubscribeSubmit--product-template').style.borderImage="url('//cdn.shopify.com/s/files/1/0525/0190/5599/t/15/assets/"+z+".png?v=12564662586016329751') 30 stretch";
                        if(x == "BLOOM"){
                          document.getElementById('SubscribeSubmit--product-template').style.color="#826d76";
                          document.getElementById('AddToCart--product-template').style.color="#826d76";
                          for(var i = 0; i < sizeChartCells.length; i++){
                            sizeChartCells[i].style.color="#826d76";
                          }
                        }
                        else if(x == "SAND"){
                          document.getElementById('SubscribeSubmit--product-template').style.color="#a8a49b";
                          document.getElementById('AddToCart--product-template').style.color="#a8a49b";
                          for(var i = 0; i < sizeChartCells.length; i++){
                            sizeChartCells[i].style.color="#a8a49b";
                          }
                        }else{
                          document.getElementById('SubscribeSubmit--product-template').style.color="white";
                          document.getElementById('AddToCart--product-template').style.color="white";
                          for(var i = 0; i < sizeChartCells.length; i++){
                            sizeChartCells[i].style.color="white";
                          }
                        }
                        
                      //}
                      }
						return currentOption;
					} else {
						return false;
					}
				} else {
					currentOption.value = $element.val();
					currentOption.index = $element.data('index');

					return currentOption;
				}
			});

			// remove any unchecked input values if using radio buttons or checkboxes
			currentOptions = slate.utils.compact(currentOptions);

			return currentOptions;
		},

		/**
		 * Find variant based on selected values.
		 *
		 * @param  {array} selectedValues - Values of variant inputs
		 * @return {object || undefined} found - Variant object from product.variants
		 */
		_getVariantFromOptions: function() {
			var selectedValues = this._getCurrentOptions();
			var variants = this.product.variants;
			var found = false;

			variants.forEach(function(variant) {
				var satisfied = true;

				selectedValues.forEach(function(option) {
					if (satisfied) {
						satisfied = (option.value === variant[option.index]);
					}
				});

				if (satisfied) {
					found = variant;
				}
			});

			return found || null;
		},

		/**
		 * Event handler for when a variant input changes.
		 */
		_onSelectChange: function() {
           /* setTimeout(function() {
              location.reload();
              $(this).scrollTop(0);
            }, 100);*/
			var variant = this._getVariantFromOptions();

			this.$container.trigger({
				type: 'variantChange',
				variant: variant
			});

			if (!variant) {
				return;
			}
            
			this._updateMasterSelect(variant);
			this._updateImages(variant);
          	
          	/*this._filterThumbnails(variant);*/
            
			this._updatePrice(variant);
			this._updateUnits(variant);
			this._updateStoreAvailabilityContent(variant);
			this.currentVariant = variant;
            

			if (this.enableHistoryState) {
				this._updateHistoryState(variant);
			}
		},

		/**
		 * Trigger event when variant image changes
		 *
		 * @param  {object} variant - Currently selected variant
		 * @return {event}  variantImageChange
		 */
      _filterThumbnails: function(variant){
        
        if(variant.featured_image != null && variant.featured_image.alt != null){
          $('[data-thumbnail-color]').hide();
        	//show tumbnails for selected color
          var selected_color = variant.option1.toLowerCase();
          var thumbnail_selector = '[data-thumbnail-color*="'+ selected_color +'"]';
          $(thumbnail_selector).show();
        }
        else {
        //show all thumbnails
          $('[data-thumbnail-color]').show();
        }
      
        
      },
      
		_updateImages: function(variant) {
			var variantImage = variant.featured_image || {};
			var currentVariantImage = this.currentVariant.featured_image || {};

			if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
				return;
			}

			this.$container.trigger({
				type: 'variantImageChange',
				variant: variant
			});
		},

		/**
		 * Trigger event when variant price changes.
		 *
		 * @param  {object} variant - Currently selected variant
		 * @return {event} variantPriceChange
		 */
		_updatePrice: function(variant) {
			if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
				return;
			}

			this.$container.trigger({
				type: 'variantPriceChange',
				variant: variant
			});
		},

		/**
		 * Trigger event when variant price per unit changes.
		 *
		 * @param  {object} variant - Currently selected variant
		 * @return {event} variantUnitChange
		 */
		_updateUnits: function(variant) {
			this.$container.trigger({
				type: 'variantUnitChange',
				variant: variant
			});
		},

		/**
		 * Update history state for product deeplinking
		 *
		 * @param {object} variant - Currently selected variant
		 */
		_updateHistoryState: function(variant) {
			if (!history.replaceState || !variant) {
				return;
			}

			var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
			window.history.replaceState({path: newurl}, '', newurl);
		},

		_updateStoreAvailabilityContent: function(variant) {
			if (!this.storeAvailability) {
				return;
			}

			if (variant) {
				this.storeAvailability.updateContent(
					variant.id,
					this.product.title
				);
			} else {
				this.storeAvailability.clearContent();
			}
		},

		/**
		 * Update hidden master select of variant change
		 *
		 * @param {object} variant - Currently selected variant
		 */
		_updateMasterSelect: function(variant) {
			$(this.originalSelectorId, this.$container)[0].value = variant.id;
		}
	});

	return Variants;
})();


/*================ Global ================*/
PaloAlto.BlockSections = (function() {

	function BlockSections(container) {
		var $container = this.$container = $( container );
		PaloAlto.videoLink();
	}

	BlockSections.prototype = $.extend({}, BlockSections.prototype, {
		/**
		 * Event callback for Theme Editor `section:select` event
		 */
		onBlockSelect: function(evt) {
			var mapContainer = $(evt.target).find( '[data-section-type="map"]' ),
					hasMap = mapContainer.length;

			if ( hasMap ) {
				PaloAlto.createMap( mapContainer );
			}
		}
	});

	return BlockSections;
})();
PaloAlto.initCart = function() {
	var selectors = {
		templateCart: '.template-cart',
		cart: '.cart',
		cartForm: 'form.cart',
		cartFormDynamicCheckout: '.additional-checkout-buttons form',
		cartRow: '.cart__row',
		cartRemove: '.cart__remove',
		cartCount: '#CartCount',
		cartItems: '.cart__items',
		cartDiscount: '.cart__discounts',
		cartSubtotalPrice: '.cart__subtotal-price',
		cartAcceptance: '[data-cart-acceptance]',
		cartButtons: '[data-cart-buttons]',
		cartButtonsFieldset: '[data-cart-buttons-fieldset]',
		cartFormError: '[data-cart-error]',
		inputQty: '.js-qty__num',
		inputQtyParent: '.js-qty',
		continueShopping: '[data-continue-shopping]'
	};

	var classes = {
		isLoading: 'is-loading'
	}

	var namespace = '.cart';

	ajaxCart.initQtySelectors();

	// Init listeners
	$( selectors.templateCart )
		.off( namespace )
		.on( 'change' + namespace, selectors.inputQty, function(e) {
			var $this = $(this),
				$form = $( selectors.cartForm ),
				$cart = $( selectors.cart ),
				qty = $this.val(),
				line = parseInt( $this.closest( selectors.cartRow ).index() + 1 );

			$form.addClass( classes.isLoading );

			$this
				.prop( 'disabled', true )
				.parents( selectors.inputQtyParent )
				.end()
				.siblings()
				.prop( 'disabled', true );

			$.ajax( {
				type: 'post',
				url: '/cart/change.js',
				dataType: 'json',
				data: {
					'quantity': qty,
					'line': line
				},
				success: function( data ) {
					var $cartItems = $cart.find( selectors.cartItems ),
						totalItems = data.item_count,
						updatedItems = '';

					if ( totalItems == 0 ) {
						// Empty cart
						var emptyCartContent = '<div class="text-center">\
													<h2>' + window.translations.cart_title + '</h2>\
													<p>' + window.translations.cart_empty + '</p>\
													<p><a href="' + window.routes.root_url + '" class="btn">' + window.translations.continue_shopping + '</a></p>\
												</div>';
						$cart.parent().html( emptyCartContent );
					} else {
						// Update all line items changed
						for ( var i = 0; i < data.items.length; i++ ) {
							var currentItem = data.items[i],
								discountsArray = data.items[i].discounts,
								discounts = '',
								price = '',
								unitPrice = '',
								totalPrice = '',
								image = currentItem.image != null ? currentItem.image.replace(/(\.[^.]*)$/, "_large$1").replace('http:', '') : "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif",
								totalDiscount = '',
								cartDiscounts = data.cart_level_discount_applications;

							// Get discounts
							if ( discountsArray.length ) {
								discounts += '<div class="cart__row-discounts">';
								for ( var j = 0; j < discountsArray.length; j++ ) {
									discounts += '<p>' + discountsArray[j].title + ' (-' + slate.Currency.formatMoney( discountsArray[j].amount, moneyFormat ) + ')</p>';
								}
								discounts += '</div>';
							}

							// Get unit price
							if ( currentItem.unit_price_measurement ) {
								unitPrice = slate.Currency.formatMoney(currentItem.unit_price, moneyFormat) + ' ';
								unitPrice += '<span aria-hidden="true">/</span><span class="visually-hidden">' + window.translations.unit_price_separator + '</span>&nbsp;';
								if ( currentItem.unit_price_measurement.reference_value != 1 ) {
									unitPrice += currentItem.unit_price_measurement.reference_value;
								}
								unitPrice += currentItem.unit_price_measurement.reference_unit;
							}

							// Get line price value
							price += '<span class="price">';
							if ( currentItem.original_price > currentItem.final_price ) {
								price += '<s>' + slate.Currency.formatMoney( currentItem.original_price, moneyFormat ) + '</s> ';
							}
							price += slate.Currency.formatMoney( currentItem.final_price, moneyFormat );
							price += '</span>';

							if ( unitPrice ) {
								price += '<span class="product-unit-price">' + unitPrice + '</span>';
							}

							// Get total line price
							totalPrice += '<span class="price price--total">';
							if ( currentItem.original_line_price > currentItem.final_line_price ) {
								totalPrice += '<s>' + slate.Currency.formatMoney( currentItem.original_line_price, moneyFormat ) + '</s> ';
							}
							totalPrice += slate.Currency.formatMoney( currentItem.final_line_price, moneyFormat );
							totalPrice += '</span>' + discounts;

							// Update the whole cart
							updatedItems += '<tr class="cart__row table__section" data-variant-id="' + currentItem.variant_id + '" data-total-price="' + currentItem.final_line_price + '">\
												<td class="product-remove-cell">\
													<a href="' + window.routes.cart_change_url + '?line=' + i + '&amp;quantity=0" class="cart__remove">\
														<i class="custom-icon-x"></i>\
													</a>\
												</td>\
												<td class="product-name-label">\
													<div class="cart__image">\
														<a href="' + currentItem.url + '" class="product-image lazyload" data-bgset="' + image + '" data-sizes="auto" data-parent-fit="' + window.settings.gridImageSize + '"></a>\
													</div>\
												</td>\
												<td class="product-title-cell">\
													<a href="' + currentItem.url + '">' + currentItem.title + '</a>\
												</td>\
												<td class="product-price-cell text-center" data-label="' + window.translations.cart_price + '">' + price + '</td>\
												<td data-label="' + window.translations.cart_quantity + '">\
													<div class="js-qty">\
														<button type="button" class="js-qty__adjust js-qty__adjust--minus icon-fallback-text" data-id="updates_' + currentItem.id + '" data-qty="' + parseInt(currentItem.quantity - 1) + '">\
															<span class="icon icon-minus custom-icon-minus" aria-hidden="true"></span>\
															<span class="fallback-text">−</span>\
														</button>\
														<input type="text" class="js-qty__num" value="' + currentItem.quantity + '" min="1" data-id="updates_' + currentItem.id + '" aria-label="quantity" pattern="[0-9]*" name="updates[]" id="updates_' + currentItem.id + '">\
														<button type="button" class="js-qty__adjust js-qty__adjust--plus icon-fallback-text" data-id="updates_' + currentItem.id + '" data-qty="' + parseInt(currentItem.quantity + 1) + '">\
															<span class="icon icon-plus custom-icon-plus" aria-hidden="true"></span>\
															<span class="fallback-text">+</span>\
														</button>\
													</div>\
												</td>\
												<td data-label="' + window.translations.cart_total + '" class="text-right">' + totalPrice + '</td>\
											</tr>';

							$cartItems.empty().append( updatedItems );
						}

						// Update cart totals
						for ( var j = 0; j < cartDiscounts.length; j++ ) {
							totalDiscount += '<span>' + cartDiscounts[j].title + '</span><span>-' + slate.Currency.formatMoney( cartDiscounts[j].total_allocated_amount, moneyFormat ) + '</span>';
						}

						// Set the new total price
						$cart.find( selectors.cartDiscount ).empty().append( totalDiscount );
						$cart.find( selectors.cartSubtotalPrice ).empty().append( slate.Currency.formatMoney( data.total_price, moneyFormat ) );

						// Update cart total
						updateCartTotal();

						// Init Quantity selectors
						ajaxCart.initQtySelectors();

						$this
							.prop( 'disabled', false )
							.parents( selectors.inputQtyParent )
							.end()
							.siblings()
							.prop( 'disabled', false);
					}

					$form.removeClass( classes.isLoading );
				},
				error: function() {
					$this
						.prop( 'disabled', false)
						.parents( selectors.inputQtyParent )
						.end()
						.siblings()
						.prop( 'disabled', false);

					$form.removeClass( classes.isLoading );
				}
			});

			// remove line item if the quantity is 0
			if ( qty == 0 ) {
				$( this ).closest( selectors.cartRow ).fadeOut( function() {
					$( this ).remove();
					updateCartTotal();
				} );
			}

			function updateCartTotal() {
				$.getJSON( '/cart.js', function(cart) {
					$( selectors.cartCount ).html( cart.item_count );
				});
			}
		})
		.on( 'click' + namespace, selectors.cartRemove, function(e) {
			e.preventDefault();
			$( this )
				.closest( selectors.cartRow )
				.find( selectors.inputQty )
				.prop( 'value', 0 )
				.change();
		})
		.on( 'click' + namespace, selectors.continueShopping, function(e) {
			var referrer = document.referrer,
				origin = window.location.origin + '/',
				isCustomLink = $(this)[0].hasAttribute( 'data-custom-link' );

			// If not a custom link go back to the previous page
			if ( !isCustomLink ) {
				e.preventDefault();

				if ( referrer === origin ) {
					window.location.href = window.routes.root_url;
				} else {
					history.back(1);
				}
			}
		});

	// Terms and conditions checkbox listener
	if ( $( selectors.cartAcceptance ).length ) {
		var cartFormErrorElement = '<div class="errors" data-cart-error>' + window.translations.cart_acceptance_error + '</div>',
			termsAccepted = $( selectors.cartAcceptance ).is( ':checked' );

		var	formSubmitFunction = function(e) {
			var termsAccepted = $( selectors.cartAcceptance ).is( ':checked' );

			// Disable form submit if terms and conditions are not accepted
			if ( !termsAccepted ) {
				e.preventDefault();
				if ( $( selectors.cartFormError ).length ) return;

				$( selectors.cartButtonsFieldset ).attr( 'disabled', true );
				$( selectors.cartButtons ).before( cartFormErrorElement );
				$( selectors.cartFormError ).slideDown();
				$( selectors.cartContainer ).removeAttr( 'data-acceptance-checked' );
			} else {
				// Enable buttons
				$( selectors.cartFormError ).stop().slideUp( 'fast', function() {
					$(this).remove();
				});
				$( selectors.cartButtonsFieldset ).removeAttr( 'disabled' );
				$( selectors.cartContainer ).attr( 'data-acceptance-checked', 'checked' );
			}
		};

		if ( !termsAccepted ) {
			// Disable buttons
			$( selectors.cartButtonsFieldset ).attr( 'disabled', true );
		}

		$( selectors.templateCart )
			.on( 'click' + namespace, selectors.cartButtons, formSubmitFunction )
			.on( 'submit' + namespace, selectors.cartForm, formSubmitFunction )
			.on( 'submit' + namespace, selectors.cartFormDynamicCheckout, formSubmitFunction )
			.on( 'change' + namespace, selectors.cartAcceptance, formSubmitFunction );
	};
};
PaloAlto.checkFirstSectionHeight = function() {
	var showAnnouncementBar = $( '.top-bar' ).length,
		announcementBarHeight = $( '#shopify-section-announcement-bar' ).height(),
		$firstSection = $('.main-content').children( '.shopify-section' ).first(),
		$firstBlock = $('.page-block-sections').children().first(),
		$sliders = $firstSection.add( $firstBlock ).find( '.flickity-enabled' );

	if ( showAnnouncementBar ) {
		$firstSection.add( $firstBlock ).find( '.one-hundred-height-hero' ).css( 'max-height', 'calc(100vh - ' + announcementBarHeight + 'px)' );
	} else {
		$firstSection.add( $firstBlock ).find( '.one-hundred-height-hero' ).css( 'max-height', '100vh' );
	}

	$sliders.each( function() {
		if ( $(this).data( 'flickity') ) {
			$(this).flickity( 'resize' );
		}
	});
};
PaloAlto.checkReviewsApp = (function() {
	// Check if SPR app installed
	var checking = setInterval(function() {
		var reviewsAppInstalled = typeof window.SPR != 'undefined' || typeof yotpo != 'undefined';

		if (!reviewsAppInstalled) {
			$('body').attr('data-app-reviews', 'not-installed');
		} else {
			$('body').removeAttr('data-app-reviews');
			clearInterval(checking);
		}
	}, 1000);

	// Stop checking loop after 20 seconds
	setTimeout(function() {
		clearInterval(checking);
	}, 20000);
});
PaloAlto.initCollapsible = function() {
	var selectors = {
		collapsibleTrigger: '[data-collapsible-trigger]',
		collapsibleTriggerMobile: '[data-collapsible-trigger-mobile]',
		collapsibleContent: '[data-collapsible-content]',
		collapsibleContentMobile: '[data-collapsible-content-mobile]'
	};

	var classes = {
		isExpanded: 'is-expanded'
	};

	var isTransitioning = false;
	var resetHeight = 0;

	var collapsibleToggleEvent = function(e) {
		// Do nothing if any different than ESC key pressed
		if ( e.keyCode && e.keyCode !== slate.utils.keyboardKeys.ESCAPE ) return;

		// Do nothing if transitioning
		if ( isTransitioning ) return;

		var windowWidth = window.innerWidth || document.documentElement.clientWidth,
			isMobile = windowWidth < 768,
			trigger = $(this),
			triggerMobile = $(this).is( selectors.collapsibleTriggerMobile ),
			dropdownId = $(this).attr( 'aria-controls' ),
			dropdown = $('#' + dropdownId),
			dropdownHeight = $(dropdown).find( selectors.collapsibleContent ).eq(0).outerHeight() || $(dropdown).find( selectors.collapsibleContentMobile ).eq(0).outerHeight(),
			isExpanded = $(trigger).hasClass( classes.isExpanded );

		if ( triggerMobile && !isMobile ) return;

		if ( !isExpanded && e.keyCode === slate.utils.keyboardKeys.ESCAPE ) return;

		isTransitioning = true;

		if ( isExpanded ) {
			setTimeout( function() {
				dropdownHeight = 0;
				setDropdownHeight( dropdown, dropdownHeight, isExpanded );
			}, 0);
		}

		$(trigger)
			.attr( 'aria-expanded', !isExpanded )
			.toggleClass( classes.isExpanded, !isExpanded );

		setDropdownHeight( dropdown, dropdownHeight, isExpanded );
	}

	function setDropdownHeight(dropdown, dropdownHeight, isExpanded ) {
		$(dropdown)
			.prepareTransition()
			.css( 'height', dropdownHeight )
			.toggleClass( classes.isExpanded, !isExpanded );

		if ( resetHeight ) clearTimeout( resetHeight );

		if ( dropdownHeight == 0 ) {
			resetHeight = setTimeout( function() {
				$(dropdown).css( 'height', '' );
			}, 500 );
		}

		if ( !isExpanded ) {
			setTimeout( function() {
				$(dropdown).css( 'height', 'auto' );
				isTransitioning = false;
			}, 500 );
		} else {
			isTransitioning = false;
		}
	}

	$( selectors.collapsibleTrigger )
		.off( 'click keyup' )
		.on( 'click keyup', collapsibleToggleEvent );

	$( selectors.collapsibleTriggerMobile )
		.off( 'click keyup' )
		.on( 'click keyup', collapsibleToggleEvent );
};
PaloAlto.Drawers = {
	selectors: {
		body: 'body',
		header: '.site-header',
		drawer: '.drawer',
		openDrawer: '.js-drawer-open',
		openNavDrawer: '.js-drawer-open-nav',
		openCartDrawer: '.js-drawer-open-cart',
		closeDrawer: '.js-drawer-close',
		drawerTriggers: '[data-drawer]'
	},
	classes: {
		drawer: 'js-drawer-open-',
		drawers: 'js-drawer-open js-drawer-open-left js-drawer-open-right',
		drawerOpen: 'js-drawer-open',
		navDrawer: 'js-drawer-open-left',
		cartDrawer: 'js-drawer-open-right'
	},
	initCloseListener: function() {
		var instance = this;

		$( this.selectors.closeDrawer ).on( 'click', function(e) {
			e.preventDefault();
			instance.close();
		});

		// Close drawers if escape key pressed
		$( this.selectors.drawer ).on( 'keyup', function(e) {
			if ( e.keyCode === slate.utils.keyboardKeys.ESCAPE ) {
				PaloAlto.NavSearch.close();
				PaloAlto.Drawers.close();
			}
		});
	},
	initOpenListener: function( element ) {
		var instance = this,
			drawerClass = this.classes.drawerOpen + ' ' + this.classes.drawer + $( element ).data( 'drawer' ),
			drawer = $( element ).attr( 'aria-controls' );

		$( element ).on( 'click', function(e) {
			e.preventDefault();

			var isDrawerOpen = $( instance.selectors.body ).hasClass( instance.classes.drawerOpen );

			if ( isDrawerOpen ) {
				instance.close();
			} else {
				$( this ).attr( 'aria-expanded', true );
				instance.open( drawer, drawerClass );
			}
		});
	},
	open: function ( drawer, drawerClass ) {
		$( this.selectors.body ).addClass( drawerClass );
		$( this.selectors.body ).trigger( drawer + ':open' );
	},
	close: function () {
		var drawerOpen = $( this.selectors.body ).hasClass( this.classes.drawerOpen );

		if ( !drawerOpen ) return;

		var $currentDrawer = this.getCurrentVisibleDrawer(),
			drawer = $currentDrawer.attr( 'aria-controls' );

		$( this.selectors.body ).removeClass( this.classes.drawers );
		$( this.selectors.drawerTriggers ).attr( 'aria-expanded', false );
		$( this.selectors.body ).trigger( drawer + ':close' );
	},
	getCurrentVisibleDrawer: function() {
		var isNavDrawer = $( this.selectors.body ).hasClass( this.classes.navDrawer ),
			isCartDrawer = $( this.selectors.body ).hasClass( this.classes.cartDrawer );

		if ( isNavDrawer ) {
			return $( this.selectors.openNavDrawer );
		} else if ( isCartDrawer ) {
			return $( this.selectors.openCartDrawer );
		}
	}
};
PaloAlto.flickitySmoothScrolling = function( slider ) {
	// iOS smooth scrolling fix
	$(slider).on( 'dragStart.flickity', function( event, pointer ) {
		document.ontouchmove = function (e) {
			e.preventDefault();
		}
	});
	$(slider).on( 'dragEnd.flickity', function( event, pointer ) {
		document.ontouchmove = function (e) {
			return true;
		}
	});
}
PaloAlto.Helpers = (function() {
    function cookiesEnabled() {
        var cookieEnabled = navigator.cookieEnabled;
        if (!cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
        }
        return cookieEnabled;
    }
    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    function getCookie(name) {
        var cookie = document.cookie.split('; ').find(function(row) {
            return row.startsWith(name);
        });
        if (cookie) {
            return cookie.split('=')[1];
        } else {
            return null;
        }
    }
    return {
        cookiesEnabled: cookiesEnabled,
        setCookie: setCookie,
        getCookie: getCookie
    };
})();
PaloAlto.initTransparentHeader = function() {
	var selectors = {
		body: 'body',
		header: '.site-header',
		mainContent: '.main-content',
		shopifySection: '.shopify-section',
		blockSections: '.page-block-sections',
		preventTransparentHeader: '[data-prevent-transparent-header]'
	};
	var classes = {
		transparentHeader: 'transparent-header',
		siteHeaderTransparent: 'site-header--transparent',
		hasTransparentHeader: 'has-transparent-header'
	};

	// Determine what is the first
	var $body = $( selectors.body ),
		$header = $( selectors.header ),
		transparent = $header.data( 'transparent' ),
		firstSection = $( selectors.mainContent ).children( selectors.shopifySection ).first(),
		firstBlock = $( selectors.blockSections ).children().first(),
		preventTransparentHeader =
			$( firstSection ).find( selectors.preventTransparentHeader + ':first-child' ).length ||
			$( selectors.preventTransparentHeader, firstBlock ).length;

	isHeaderTransparent = transparent && ( $(firstSection).hasClass( classes.transparentHeader ) || $(firstBlock).hasClass( classes.transparentHeader ) );

	if ( preventTransparentHeader ) isHeaderTransparent = false;

	// Set transparent header class
	if ( isHeaderTransparent ) {
		$header.addClass( classes.siteHeaderTransparent );
		$body.addClass( classes.hasTransparentHeader );
	} else {
		$header.removeClass( classes.siteHeaderTransparent );
		$body.removeClass( classes.hasTransparentHeader );
	}
}
PaloAlto.initListeners = function(){
	var namespace = '.listeners';
	var selectors = {
		body: 'body',
		jsDrawerOpenCart: '.js-drawer-open-cart',
		cartDrawerTriggers: '#CartDrawer, #CartDrawer *, .js-drawer-open-cart, .js-drawer-open-cart *',
		navDrawerTriggers: '#NavDrawer, #NavDrawer *, .js-drawer-open-nav, .js-drawer-open-nav *',
		mfpProductForm: '.mfp-wrap .product-form',
		buttonSubmit: 'button[type="submit"]'
	};
	var classes = {
		noOutline: 'no-outline',
		isLoading: 'is-loading',
		jsDrawerOpen: 'js-drawer-open',
		jsDrawerOpenRight: 'js-drawer-open-right',
		quickViewEnabled: 'quick-view-enabled'
	};
	var isQuickViewEnabled = window.settings.quickButton == 'view';

	// Reset listneners
	$(document).off( namespace );
	$( selectors.body ).off( namespace );

	// Init listneners
	$(document)
		.one( 'mousedown' + namespace, selectors.body, function(){
			$(this).addClass( classes.noOutline );
		})
		.on( 'keydown' + namespace, selectors.body, function(e){
			if ( e.keyCode === slate.utils.keyboardKeys.TAB ) {
				$(selectors.body)
					.removeClass( classes.noOutline )
					.one( 'mousedown', function(){
						$(this).addClass( classes.noOutline );
					});
			};
		})
		.on( 'click' + namespace, selectors.body, function(e) {
			var clickOutsideCart = !$(e.target).is( selectors.cartDrawerTriggers ),
				clickOutsideMobileNav = !$(e.target).is( selectors.navDrawerTriggers ),
				isDrawerOpen = $( selectors.body ).hasClass( classes.jsDrawerOpen );

			if ( clickOutsideCart && clickOutsideMobileNav && isDrawerOpen ) {
				PaloAlto.Drawers.close();
			}
		});

	$( selectors.body ).on( 'ajaxCart.afterCartLoad' + namespace, function(evt, cart) {
		if ( window.settings.cartType == 'drawer' ) {
			var $openCartDrawer = $( selectors.jsDrawerOpenCart ),
				isCartDrawerOpen = $( selectors.body ).hasClass( classes.jsDrawerOpenRight );

			if ( !isCartDrawerOpen ) {
				$openCartDrawer.eq(0).trigger( 'click' );
			}
		}
	});

	if ( isQuickViewEnabled ) {
		$( selectors.body )
			.on( 'ajaxCart.afterCartLoad' + namespace, function() {
				$.magnificPopup.close();
				setTimeout(function() {
					$( selectors.mfpProductForm )
						.removeClass( classes.isLoading )
						.find( selectors.buttonSubmit )
						.attr( 'disabled', false );
				}, 500);
			})
			.on( 'ajaxCart.errorAddItem' + namespace, function() {
				setTimeout(function() {
					$( selectors.mfpProductForm )
						.removeClass( classes.isLoading )
						.find( selectors.buttonSubmit )
						.attr( 'disabled', false );
				}, 500);
			});
	}
};
PaloAlto.initQuickButton = (function(container) {
	var quickButton = window.settings.quickButton;

	switch ( quickButton ) {
		case 'view':
			PaloAlto.QuickViewPopup.init( container );
			break;

		case 'buy':
			PaloAlto.QuickBuy.init( container );
			break;
	}
});
PaloAlto.initReviews = (function() {
	var selectors = {
		htmlBody: 'html, body',
		body: 'body',
		header: '.site-header',
		starClickable: '.star-clickable',
		reviewStarsBadge: '.product-single .star-clickable, .product-single .spr-badge',
		reviewsTabContainer: '#ProductTab--reviews-container',
		reviewsTrigger: '[data-collapsible-trigger][aria-controls="ProductTab--reviews"]'
	};
	var classes = {
		templateProduct: 'template-product',
		fixed: 'fixed'
	};
	var enableSPR = window.settings.enableReviews,
		enableYotpo = window.settings.enableYotpo,
		yotpoId = window.settings.yotpoId,
		isProductTemplate = $( selectors.body ).hasClass( classes.templateProduct );

	if ( enableYotpo && yotpoId != '' && typeof yotpo != 'undefined' ) {
		yotpo.initialized ? yotpo.refreshWidgets() : yotpo.initWidgets();
		$( selectors.starClickable ).removeAttr( 'tabindex' );
	} else if ( enableSPR && typeof window.SPR == 'function' ) {
		window.SPR.initDomEls();
		window.SPR.loadBadges();
		window.SPR.loadProducts();
	}

	if ( isProductTemplate ) {
		// Open reviews tab on star rating badge click
		$( document )
			.off( 'click', selectors.reviewStarsBadge )
			.on( 'click', selectors.reviewStarsBadge, function(e) {
				e.preventDefault();
				e.stopImmediatePropagation();

				if ( $( selectors.reviewsTabContainer ).length ) {
					var $header = $( selectors.header ),
						headerHeight = $header.hasClass( classes.fixed ) ? $header.outerHeight() : 0,
						reviewsTop = $( selectors.reviewsTabContainer ).offset().top - headerHeight;

					$( selectors.reviewsTrigger ).trigger( 'click' );
					$( selectors.htmlBody ).stop(true).animate({ 'scrollTop': reviewsTop }, 300 );
				}
			});
	}
});
PaloAlto.initSections = function() {
	var sections = new PaloAlto.Sections();

	sections.register('header', PaloAlto.Header);
	sections.register('footer', PaloAlto.Footer);
	sections.register('announcement-bar', PaloAlto.AnnouncementBar);
	sections.register('product-template', PaloAlto.Product);
	sections.register('related-products', PaloAlto.RelatedProducts);
	sections.register('store-availability', PaloAlto.StoreAvailability);
	sections.register('collection-template', PaloAlto.CollectionTemplate);
	sections.register('list-collections', PaloAlto.ListCollections);
	sections.register('featured-collection', PaloAlto.FeaturedCollection);
	sections.register('tabbed-collections', PaloAlto.TabbedCollections);
	sections.register('featured-product', PaloAlto.Product);
	sections.register('slider', PaloAlto.Slider);
	sections.register('image-with-text', PaloAlto.RichText);
	sections.register('featured-image', PaloAlto.FeaturedImage);
	sections.register('blog-posts', PaloAlto.BlogPosts);
	sections.register('featured-video', PaloAlto.FeaturedVideo);
	sections.register('logo-list', PaloAlto.LogoList);
	sections.register('icons-row', PaloAlto.IconsRow);
	sections.register('map', PaloAlto.Map);
	sections.register('testimonials', PaloAlto.Testimonials);
	sections.register('faq', PaloAlto.Faq);
	sections.register('press', PaloAlto.Press);
	sections.register('popup', PaloAlto.Popup);
	sections.register('image-columns', PaloAlto.ImageColumns);
	sections.register('contact-page', PaloAlto.BlockSections);
	sections.register('about-page', PaloAlto.AboutPage );
	sections.register('about-page', PaloAlto.BlockSections );
	sections.register('password-template', PaloAlto.PasswordTemplate);
	sections.register('search-template', PaloAlto.SearchTemplate);

	// Recheck sticky header settings if section is set to hidden
	$(document).on('shopify:section:load shopify:section:reorder shopify:section:unload', function() {
		setTimeout( function() {
			PaloAlto.initTransparentHeader();
			PaloAlto.setMainSpacing();
			PaloAlto.checkFirstSectionHeight();
		}, 300);
	});
};
PaloAlto.pauseOtherMedia = (function( mediaId ) {
	var productMediaWrapper = '[data-product-single-media-wrapper]',
		$currentMedia = $( productMediaWrapper + '[data-media-id="' + mediaId + '"]' ),
		$otherMedia = $( productMediaWrapper + ':not([data-media-id="' + mediaId + '"])' );

	$currentMedia.removeClass( 'media--hidden' );
	$otherMedia.trigger( 'mediaHidden' ).addClass( 'media--hidden' );
});
PaloAlto.preventOverflow = function() {
	$( '.js-section-container' ).each( function() {
		// Reset min height
		$(this).css( 'min-height', 0 );

		var contentHeight = $(this).find( '.js-section-content' ).outerHeight( true );

		// Set a new min height
		$(this).css( 'min-height', contentHeight );
	});

	$(document).trigger( 'preventOverflow' );
}
PaloAlto.Badge = {
	setPosition: function() {
		var $saleBadge = $( '.tag' ),
			imageSize = window.settings.gridImageSize;

		if ( !$saleBadge.length || imageSize == 'cover' ) return;

		$saleBadge.each( function() {
			var $saleBadge = $(this),
				$image = $saleBadge.siblings( '.product__media' ),
				imageAspectRatio = $image.data( 'aspectratio' ),
				imageWidth = $image.outerWidth(),
				imageHeight = $image.outerHeight(),
				containerAspectRatio = imageWidth / imageHeight,
				posTop = 0,
				posLeft = 0;

			if ( imageAspectRatio < containerAspectRatio ) {
				posLeft = (imageWidth - (imageHeight * imageAspectRatio)) / 2;
			} else {
				posTop = (imageHeight - (imageWidth / imageAspectRatio)) / 2;
			}

			$saleBadge.css({
				'top': posTop,
				'left': posLeft
			});
		});
	}
}
PaloAlto.QuickBuy = {
	init: function(container) {
		// Submit the form and redicert to the cart page if ajax cart is not enabled
		if ( window.settings.cartType == 'page' ) return true;

		var selectors = {
			body: 'body',
			form: 'form',
			quickBuy: '[data-quick-buy]',
			productGridImage: '.product-grid-item__image',
			error: '.error'
		};
		var classes = {
			isLoading: 'is-loading'
		};
		var isSubmitting = false,
			$quickBuyButton = $( selectors.quickBuy, container ),
			$body = $( selectors.body ),
			removeError = 0;

		$quickBuyButton.off( 'click' );
		$quickBuyButton.on( 'click', function(e) {
			e.preventDefault();

			var $imageContainer = $(this).closest( selectors.productGridImage );
			var $form = $(this).closest( selectors.form );
				formArray = $form.serializeArray(),
				formData = {};

			$.map(formArray, function(val, i){
				formData[val.name] = val.value;
			});

			if (!isSubmitting) {
				isSubmitting = true;

				$(this).attr( 'disabled', true ).addClass( classes.isLoading );

				$.ajax({
					type: 'POST',
					url: '/cart/add.js',
					data: formData,
					dataType: 'json',
					success: function( line_item ) {
						// Open cart drawer and reload cart items
						ajaxCart.load();
					},
					error: function(XMLHttpRequest, textStatus) {
						$body.trigger( 'ajaxCart.errorAddItem' );
					}
				}).always(function() {
					setTimeout(function() {
						isSubmitting = false;
						$quickBuyButton
							.removeClass( classes.isLoading )
							.attr( 'disabled', false );
					}, 500);
				}).fail(function( XMLHttpRequest ) {
					if ( typeof(XMLHttpRequest.responseJSON) === 'object' ) {
						var errorHTML = '<div class="error">' + XMLHttpRequest.responseJSON.description + '</div>';

						$imageContainer
							.find( selectors.error )
							.remove()
							.end()
							.append( errorHTML );

						// Clear an existing error timeout function
						if ( removeError ) clearTimeout( removeError );

						// Hide error after 3 seconds
						removeError = setTimeout(function() {
							$imageContainer.find( selectors.error ).remove();
						}, 3000);
					}
				});
			} else {
				return false;
			}
		});
	}
};
PaloAlto.QuickViewPopup = {
	init: function(container) {
		var self = this;

		this.$container = $(container);
		this.sectionId = $(container).data( 'section-id' );
		this.product = {};
		this.isFlickityDragging = false;
		this.enablePaymentButton = window.settings.enablePaymentButton && !window.settings.enableAcceptTerms;
		this.selectors = {
			addToCart: '[data-add-to-cart]',
			addToCartText: '[data-add-to-cart-text]',
			productPrice: '[data-product-price]',
			comparePrice: '[data-compare-price]',
			unitPrice: '[data-unit-price]',
			unitBase: '[data-unit-base]',
			unitWrapper: '[data-unit-wrapper]',
			priceWrapper: '[data-price-wrapper]',
			productFormWrapper: '[data-product-form-wrapper]',
			productSingle: '.product-single',
			productForm: '.product-form',
			productTitle: '.product-title',
			productTabs: '.js-product-tabs',
			dynamicButton: '.shopify-payment-button',
			productMediaSlider: '[data-product-single-media-slider]',
			productMediaWrapper: '[data-product-single-media-wrapper]',
			productMediaThumbs: '[data-product-single-media-thumbs]',
			productMediaThumb: '[data-thumbnail-id]',
			productMediaThumbLink: '.product-single__thumbnail-link',
			productVideo: '[data-product-media-type-video]',
			productModel: '[data-product-media-type-model]',
			notificationForm: '[data-notification-form]',
			originalSelectorId: '[data-product-select]',
			singleOptionSelector: '[data-single-option-selector]',
			quickButton: '.quick_view_button'
		};

		$( this.selectors.quickButton, container ).magnificPopup({
			type: 'ajax',
			cache: false,
			alignTop: true,
			removalDelay: 300,
			mainClass: 'popup-quick-buy mfp-fade',
			autoFocusLast: false,
			callbacks: {
				parseAjax: function(mfpResponse) {
					var $mfpContent = $(mfpResponse.data),
						$mfpData = $mfpContent.find( self.selectors.productSingle ).add( $mfpContent.find( '[id^="ProductJson-"]') ),
						$productContainer = $mfpData.filter( self.selectors.productSingle ),
						sectionId = $productContainer.data( 'section-id' );
						product = JSON.parse($mfpData.filter( '#ProductJson-' + sectionId )[0].innerHTML);

					self.$container = $productContainer;
					self.$container.addClass( 'is-loading' );
					self.sectionId = sectionId;
					self.product = product;

					return mfpResponse.data = $mfpData;
				},
				ajaxContentAdded: function() {
					// Ajax content is loaded and appended to DOM
					var isSoldout = self.$container.find( '#AddToCart--' + self.sectionId ).hasClass( 'disabled' ),
						$dynamicButton = self.$container.find( self.selectors.dynamicButton ),
						productUrl = this.currItem.src,
						formSuffix = self.sectionId + '-' + self.product.handle;

					$( this.content ).on( 'click', '.spr-badge, .spr-badge *', function(e) {
						e.preventDefault();
						e.stopPropagation();
						return false;
					});

					self.addProductTitleLink( self.$container, productUrl );
					self.addFormSuffix( self.$container, formSuffix );
					self.initProductSlider();
					self.initMediaSwitch();
					self.initProductVideo();
					self.initModelViewerLibraries();
					self.initShopifyXrLaunch();
					self.bindFormSubmit( self.$container );

					isSoldout ? $dynamicButton.hide() : $dynamicButton.show();

					PaloAlto.initReviews();

					if ( self.enablePaymentButton ) {
						self.$container.find( '.btn--submit' ).removeClass( 'btn--submit' ).addClass( 'btn--secondary' );

						if (Shopify.PaymentButton) {
							Shopify.PaymentButton.init();
						}
					}

					self.$container.find( self.selectors.productForm ).removeClass( 'product-form--is-loading' );
					self.$container.find( self.selectors.productTabs ).remove();

					var options = {
						$container: self.$container,
						enableHistoryState: false,
						singleOptionSelector: self.selectors.singleOptionSelector,
						originalSelectorId: self.selectors.originalSelectorId,
						product: self.product
					};

					self.namespace = '.product';
					self.variants = new slate.Variants(options);

					self.$container.on('variantChange' + self.namespace, self.updateAddToCartState.bind(self));
					self.$container.on('variantPriceChange' + self.namespace, self.updateProductPrices.bind(self));
					self.$container.on('variantUnitChange' + self.namespace, self.updateProductUnits.bind(self));
					self.$container.on('variantImageChange' + self.namespace, self.updateProductImage.bind(self));

					ajaxCart.init({
						namespace: '.ajaxCart' + formSuffix,
						formSelector: '#AddToCartForm--' + formSuffix,
						cartContainer: '#CartContainer',
						addToCartSelector: '#AddToCart--' + formSuffix,
						cartCountSelector: '.CartCount',
						cartCostSelector: '#CartCost',
						moneyFormat: window.moneyFormat
					});

					PaloAlto.initListeners();
					PaloAlto.videoLink();

					self.$container.removeClass( 'is-loading' );
				}
			}
		});
	},

	updateAddToCartState: function(evt) {
		var variant = evt.variant;

		if ( variant ) {
			if ( variant.available ) {
				$( this.selectors.addToCart, this.$container ).prop( 'disabled', false );
				$( this.selectors.addToCartText, this.$container ).html( window.translations.add_to_cart );
				$( this.selectors.notificationForm, this.$container ).addClass( 'visually-hidden' );
			} else {
				$( this.selectors.addToCart, this.$container ).prop('disabled', true);
				$( this.selectors.addToCartText, this.$container ).html( window.translations.sold_out );
				$( this.selectors.notificationForm, this.$container ).removeClass( 'visually-hidden' );
			}
		} else {
			$( this.selectors.addToCart, this.$container ).prop('disabled', true);
			$( this.selectors.addToCartText, this.$container ).html( window.translations.unavailable );
			$( this.selectors.notificationForm, this.$container ).removeClass( 'visually-hidden' );
		}

		if ( !variant ) return;
	},

	updateProductPrices: function(evt) {
		var variant = evt.variant,
			$comparePrice = $( this.selectors.comparePrice, this.$container ),
			$productPrice =  $( this.selectors.productPrice, this.$container );

		// Update product price
		$( this.selectors.productPrice, this.$container ).html( slate.Currency.formatMoney(variant.price, window.moneyFormat));

		// Update sale price
		if ( variant.compare_at_price > variant.price ) {
			$comparePrice
				.html( slate.Currency.formatMoney(variant.compare_at_price, window.moneyFormat) )
				.removeClass('hide');
			$productPrice.addClass('product__price--sale');
		} else {
			$comparePrice
				.html('')
				.addClass('hide');
			$productPrice.removeClass('product__price--sale');
		}
	},

	updateProductUnits: function(evt) {
		var variant = evt.variant;

		if (typeof variant.unit_price !== 'undefined'){
			var price = slate.Currency.formatMoney(variant.unit_price, window.moneyFormat),
				base = this.getBaseUnit(variant);

			$( this.selectors.unitPrice, this.$container ).html( price );
			$( this.selectors.unitBase, this.$container ).html( base );
			$( this.selectors.unitWrapper, this.$container ).show()
		} else{
			$( this.selectors.unitWrapper, this.$container ).hide()
		}
	},

	getBaseUnit: function(variant) {
		return variant.unit_price_measurement.reference_value === 1
			? variant.unit_price_measurement.reference_unit
			: variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
	},

	updateProductImage: function(evt) {
		var variant = evt.variant,
			variantMediaId = variant.featured_media ? variant.featured_media.id : '',
			$imgSlider = $( this.selectors.productMediaSlider, this.$container ),
			flick = $imgSlider.data('flickity');

		// Activate image slide in mobile view
		if ( flick && flick.isActive) {
			var $variantSlide = $imgSlider.find( '[data-id="' + variantMediaId + '"]' );

			if ($variantSlide.index() != -1) {
				flick.select($variantSlide.index());
			}
		}
	},

	bindFormSubmit: function( container ) {
		var hideErrors = 0;

		// Bind form submit event functions
		$( this.selectors.addToCart, container ).on( 'click', function(e) {
			var $productForm = $(this).closest( 'form' ),
				$qtyInput = $productForm.find( '[name="quantity"]'),
				qty = $qtyInput.val()
				isSubmitting = $productForm.hasClass( 'is-loading' );

			// Clear hide errors timeout
			if ( hideErrors ) clearTimeout( hideErrors );

			if (!isSubmitting && qty > 0) {
				$(this).attr( 'disabled', true ).closest( '.product-form' ).submit().addClass( 'is-loading' );
				$qtyInput.removeClass( 'field-error' );
				$productForm.find( '.errors' ).remove();
			} else {
				if ( qty == 0 ) {
					$qtyInput.addClass( 'field-error' );
					$productForm.find( '.errors' ).remove();
					$productForm.find( '.variants-wrapper' ).after( '<div class="errors qty-error">' + window.translations.zero_qty_error + '</div>');
				}

				hideErrors = setTimeout( function() {
					$productForm.find( '.errors' ).fadeOut(function() {
						$productForm.find( '.errors' ).remove();
						$qtyInput.removeClass( 'field-error' );
					});
				}, 3000);

				return false;
			}
		});
	},

	initProductSlider: function() {
		var self = this,
			$slider = $( this.selectors.productMediaSlider, this.$container),
			$thumbs = $( this.selectors.productMediaThumbs , this.$container),
			$thumbLink = $( this.selectors.productMediaThumbLink , this.$container),
			hasSlides = $( this.selectors.productMediaWrapper, this.$container ).length > 1,
			isDraggable = !( $( this.selectors.productVideo, this.$container ).length || $( this.selectors.productModel, this.$container ).length);

		if (hasSlides) {
			$slider
				.on( 'ready.flickity', function( event, pointer, moveVector ) {
					$slider.attr( 'tabindex', '-1' );
				})
				.on( 'dragMove.flickity', function( event, pointer, moveVector ) {
					// Prevent lightbox trigger on dragMove
					self.isFlickityDragging = true;
				})
				.on( 'staticClick.flickity', function( event, pointer, moveVector ) {
					// Allow lightbox trigger on staticClick
					self.isFlickityDragging = false;
				})
				.on( 'settle.flickity', function( event, index ) {
					var $currentSlide = $slider.find( self.selectors.productMediaWrapper ).eq( index ),
						mediaId = $currentSlide.data( 'media-id' );

					$currentSlide.has( '.product-single__media--image' ).attr( 'tabindex', '0' ).siblings().attr( 'tabindex', '-1' );

					self.switchMedia( mediaId );
				});

			$slider.flickity({
				wrapAround: true,
				pageDots: false,
				adaptiveHeight: true,
				draggable: isDraggable,
				arrowShape: {
					x0: 20,
					x1: 65, y1: 35,
					x2: 70, y2: 30,
					x3: 30
				}
			});

			// iOS smooth scrolling fix
			PaloAlto.flickitySmoothScrolling( $slider );

			$thumbs.on( 'ready.flickity', function() {
				$thumbs.attr( 'tabindex', '-1' );
			});

			$thumbs.flickity({
				asNavFor: $slider[0],
				pageDots: false,
				contain: true,
				prevNextButtons: false
			});

			// Disable link click
			$thumbLink.on( 'click', function(e) {
				e.preventDefault();
			});
		}
	},

	handleMediaFocus: function( e ) {
		// Do nothing if not ENTER key (13) or TAB key (9)
		if (e.keyCode !== 13 && e.keyCode !== 9) return;

		var mediaId = $(e.currentTarget).data( 'thumbnail-id' ),
			slideIndex = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]', this.$container ).index(),
			flick = $( this.selectors.productMediaSlider, this.$container ).data('flickity'),
			flickNav = $( this.selectors.productMediaThumbs, this.$container ).data('flickity');

		// Go to the related slide media
		if (flick && flick.isActive && slideIndex > -1 && e.keyCode === 13 ) {
			flick.select( slideIndex );
		}

		// Move thumbs to the selected one
		if (flickNav && flickNav.isActive && slideIndex > -1 ) {
			flickNav.select( slideIndex );
		}
	},

	switchMedia: function( mediaId ) {
		var $currentMedia = $( this.selectors.productMediaWrapper + ':not(.media--hidden)', this.$container ),
			$newMedia = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]', this.$container ),
			$otherMedia = $( this.selectors.productMediaWrapper + ':not([data-media-id="' + mediaId + '"])', this.$container ),
			isFocusEnabled = !$( 'body' ).hasClass( 'no-outline' );

		if ( isFocusEnabled ) $newMedia.focus();

		$currentMedia.trigger( 'mediaHidden' );
		$newMedia.removeClass( 'media--hidden' ).trigger( 'mediaVisible' );
		$otherMedia.addClass( 'media--hidden' );
	},

	initMediaSwitch: function() {
		var self = this,
			$productThumbImages = $( this.selectors.productMediaThumb, this.$container );

		if (!$productThumbImages.length) return;

		$productThumbImages
			.on( 'click', function(e) {
				e.preventDefault();
			})
			.on( 'keyup', self.handleMediaFocus.bind(self) );
	},

	initProductVideo: function() {
		var sectionId = this.sectionId;
		$( this.selectors.productVideo, this.$container).each(function() {
			var $video = $(this);
			PaloAlto.ProductVideo.init($video, sectionId);
		});
	},

	initModelViewerLibraries: function() {
		var $modelViewerElements = $( this.selectors.productModel, this.$container );

		if ($modelViewerElements.length < 1) return;

		PaloAlto.ProductModel.init($modelViewerElements, this.sectionId);
	},

	initShopifyXrLaunch: function() {
		var self = this;

		$(document).on('shopify_xr_launch', function() {
			var $currentMedia = $( self.selectors.productMediaWrapper + ':not(.hide)', self.$container );
			$currentMedia.trigger( 'xrLaunch' );
		});
	},

	addProductTitleLink: function( container, productUrl ) {
		// Add link to the quick view product title
		var $productTitle = $( this.selectors.productTitle, container ),
			productTitleText = $productTitle.text();

		$productTitle.html( '<a href="' + productUrl + '">' + productTitleText + '</a>' );
	},

	addFormSuffix: function( container, formSuffix ) {
		var formId = 'AddToCartForm--' + formSuffix,
			addToCartId = 'AddToCart--' + formSuffix;

		$( this.selectors.productForm, container ).attr( 'id', formId );
		$( this.selectors.addToCart, container ).attr( 'id', addToCartId );
	}
};
PaloAlto.Sections = function Sections() {
	this.constructors = {};
	this.instances = [];

	$(document)
		.on('shopify:section:load', this._onSectionLoad.bind(this))
		.on('shopify:section:unload', this._onSectionUnload.bind(this))
		.on('shopify:section:select', this._onSelect.bind(this))
		.on('shopify:section:deselect', this._onDeselect.bind(this))
		.on('shopify:block:select', this._onBlockSelect.bind(this))
		.on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

PaloAlto.Sections.prototype = _.assignIn({}, PaloAlto.Sections.prototype, {
	_createInstance: function(container, constructor) {
		var $container = $(container);
		var id = $container.attr('data-section-id');
		var type = $container.attr('data-section-type');

		constructor = constructor || this.constructors[type];

		if (_.isUndefined(constructor)) {
			return;
		}

		var instance = _.assignIn(new constructor(container), {
			id: id,
			type: type,
			container: container
		});

		this.instances.push(instance);
	},

	_onSectionLoad: function(evt) {
		var container = $('[data-section-id]', evt.target)[0];
		if (container) {
			this._createInstance(container);
		}
	},

	_onSectionUnload: function(evt) {
		this.instances = _.filter(this.instances, function(instance) {
			var isEventInstance = (instance.id === evt.detail.sectionId);

			if (isEventInstance) {
				if (_.isFunction(instance.onUnload)) {
					instance.onUnload(evt);
				}
			}

			return !isEventInstance;
		});
	},

	_onSelect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
			instance.onSelect(evt);
		}
	},

	_onDeselect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
			instance.onDeselect(evt);
		}
	},

	_onBlockSelect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
			instance.onBlockSelect(evt);
		}
	},

	_onBlockDeselect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
			instance.onBlockDeselect(evt);
		}
	},

	register: function(type, constructor) {
		this.constructors[type] = constructor;

		$('[data-section-type=' + type + ']').each(function(index, container) {
			this._createInstance(container, constructor);
		}.bind(this));
	}
});
PaloAlto.setMainSpacing = function() {
	// Reset header to its initial state in order to calculate the proper header height
	$('body').removeClass( 'has-scrolled' );

	var $pageContainer = $( '#PageContainer' ),
		$header = $( '.site-header' ),
		$headerSection = $( '#shopify-section-header' ),
		isHeaderSticky = $header.data( 'position' ) == 'fixed',
		isListCollectionsTemplate = $( '.template-list-collections' ).length,
		hasCollectionFilters = $( '#collection__filters' ).length,
		$collectionHeader = $( '.collection-header' ),
		hasCollectionHeaderImage = $collectionHeader.hasClass( 'collection-header--has-image' ),
		headerHeight = !isHeaderTransparent ? parseInt( $header.outerHeight() ) : 0;

	// Define the initial header height
	initialHeaderHeight = parseInt( $header.data( 'height' ) );

	// Set main header push if the first section doesn't use transparent header
	$pageContainer.css( 'paddingTop', headerHeight );

	// Update header position
	if ( isHeaderSticky && !hasCollectionFilters )  {
		$header.parent().addClass( 'header--sticky' );
	} else {
		$header.parent().removeClass( 'header--sticky' );
	}

	// Push collection template banner text down
	if ( isHeaderTransparent && hasCollectionHeaderImage ) {
		headerHeight = $header.outerHeight();
		$collectionHeader
			.find( '.js-section-content' )
			.css( 'padding-top', headerHeight )
			.closest( '.shopify-section' )
			.css( 'margin-top', 0 );
	}

	if ( !isHeaderSticky && isListCollectionsTemplate ) {
		$headerSection.addClass( 'header--relative' );
	}

	// Prevent sections overflow after content has been pushed down
	PaloAlto.preventOverflow();

	// Update header state
	$(window).trigger( 'scroll.header' );
}
PaloAlto.setScrollbarWidth = function() {
    if ( typeof scrollLock == 'undefined' ) return;

    var root = document.documentElement,
        scrollbarWidth = scrollLock.getPageScrollBarWidth() + 'px';

    root.style.setProperty('--scrollbar-width', scrollbarWidth );
};
PaloAlto.videoLink = function() {
	var $playButton = $( '[data-play-button]' );

	if ( $playButton.length ) {
		$playButton.each( function() {
			$(this).magnificPopup({
				disableOn: 200,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
				preloader: false,
				fixedContentPos: false,
				closeMarkup: '<button title="%title%" class="mfp-close"><i class="custom-icon-x mfp-icon-x"></i></button>',
				closeOnBgClick: true,
				tClose: 'Close (Esc)',
				iframe: {
					markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>'+
					'</div>',
					patterns: {
						youtube_short: {
							index: 'youtu.be/',
							id: 'youtu.be/',
							src: '//www.youtube.com/embed/%id%?autoplay=1&autohide=0&branding=0&cc_load_policy=0&controls=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&quality=hd720&rel=0&showinfo=0&wmode=opaque'
						}
					}
				}
			});
		})
	}
}

/*================ Features ================*/
PaloAlto.Disclosure = (function() {
	var selectors = {
		disclosureList: '[data-disclosure-list]',
		disclosureToggle: '[data-disclosure-toggle]',
		disclosureInput: '[data-disclosure-input]',
		disclosureOptions: '[data-disclosure-option]'
	};

	var classes = {
		listVisible: 'disclosure-list--visible'
	};

	function Disclosure($disclosure) {
		this.$container = $disclosure;
		this.cache = {};
		this._cacheSelectors();
		this._connectOptions();
		this._connectToggle();
		this._onFocusOut();
	}

	Disclosure.prototype = $.extend({}, Disclosure.prototype, {
		_cacheSelectors: function() {
			this.cache = {
				$disclosureList: this.$container.find(selectors.disclosureList),
				$disclosureToggle: this.$container.find(selectors.disclosureToggle),
				$disclosureInput: this.$container.find(selectors.disclosureInput),
				$disclosureOptions: this.$container.find(selectors.disclosureOptions)
			};
		},

		_connectToggle: function() {
			this.cache.$disclosureToggle.on(
				'click',
				function(evt) {
					var ariaExpanded =
						$(evt.currentTarget).attr('aria-expanded') === 'true';
					$(evt.currentTarget).attr('aria-expanded', !ariaExpanded);

					this.cache.$disclosureList.toggleClass(classes.listVisible);
				}.bind(this)
			);
		},

		_connectOptions: function() {
			this.cache.$disclosureOptions.on(
				'click',
				function(evt) {
					this._submitForm($(evt.currentTarget).data('value'));
					evt.preventDefault();
				}.bind(this)
			);
		},

		_onFocusOut: function() {
			this.cache.$disclosureToggle.on(
				'focusout',
				function(evt) {
					var disclosureLostFocus =
						this.$container.has(evt.relatedTarget).length === 0;

					if (disclosureLostFocus) {
						this._hideList();
					}
				}.bind(this)
			);

			this.cache.$disclosureList.on(
				'focusout',
				function(evt) {
					var childInFocus =
						$(evt.currentTarget).has(evt.relatedTarget).length > 0;
					var isVisible = this.cache.$disclosureList.hasClass(
						classes.listVisible
					);

					if (isVisible && !childInFocus) {
						this._hideList();
					}
				}.bind(this)
			);

			this.$container.on(
				'keyup',
				function(evt) {
					if (evt.which !== slate.utils.keyboardKeys.ESCAPE) return;
					this._hideList();
					this.cache.$disclosureToggle.focus();
				}.bind(this)
			);

			this.bodyOnClick = function(evt) {
				var isOption = this.$container.has(evt.target).length > 0;
				var isVisible = this.cache.$disclosureList.hasClass(
					classes.listVisible
				);

				if (isVisible && !isOption) {
					this._hideList();
				}
			}.bind(this);

			$('body').on('click', this.bodyOnClick);
		},

		_submitForm: function(value) {
			this.cache.$disclosureInput.val(value);
			this.$container.parents('form').submit();
		},

		_hideList: function() {
			this.cache.$disclosureList.removeClass(classes.listVisible);
			this.cache.$disclosureToggle.attr('aria-expanded', false);
		},

		unload: function() {
			$('body').off('click', this.bodyOnClick);
			this.cache.$disclosureOptions.off();
			this.cache.$disclosureToggle.off();
			this.cache.$disclosureList.off();
			this.$container.off();
		}
	});

	return Disclosure;
})();
// Library loader for 3D Model and Plyr video player
var LibraryLoader = (function() {
	var types = {
		link: 'link',
		script: 'script'
	};

	var status = {
		requested: 'requested',
		loaded: 'loaded'
	};

	var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

	var libraries = {
		youtubeSdk: {
			tagId: 'youtube-sdk',
			src: 'https://www.youtube.com/iframe_api',
			type: types.script
		},
		plyrShopifyStyles: {
			tagId: 'plyr-shopify-styles',
			src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
			type: types.link
		},
		modelViewerUiStyles: {
			tagId: 'shopify-model-viewer-ui-styles',
			src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
			type: types.link
		}
	};

	function load(libraryName, callback) {
		var library = libraries[libraryName];

		if (!library) return;
		if (library.status === status.requested) return;

		callback = callback || function() {};
		if (library.status === status.loaded) {
			callback();
			return;
		}

		library.status = status.requested;

		var tag;

		switch (library.type) {
			case types.script:
				tag = createScriptTag(library, callback);
				break;
			case types.link:
				tag = createLinkTag(library, callback);
				break;
		}

		tag.id = library.tagId;
		library.element = tag;

		var firstScriptTag = document.getElementsByTagName(library.type)[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	function createScriptTag(library, callback) {
		var tag = document.createElement('script');
		tag.src = library.src;
		tag.addEventListener('load', function() {
			library.status = status.loaded;
			callback();
		});
		return tag;
	}

	function createLinkTag(library, callback) {
		var tag = document.createElement('link');
		tag.href = library.src;
		tag.rel = 'stylesheet';
		tag.type = 'text/css';
		tag.addEventListener('load', function() {
			library.status = status.loaded;
			callback();
		});
		return tag;
	}

	return {
		load: load
	};
})();
PaloAlto.NavSearch = {
	selectors: {
		body: 'body',
		header: '.site-header',
		topBar: '.top-bar',
		loadMore: '.js-loadMore',
		search: '[data-nav-search]',
		searchOpen: '[data-nav-search-open]',
		searchClose: '[data-nav-search-close]',
		searchForm: '[data-nav-search-form]',
		searchContainer: '[data-nav-search-container]',
		searchScroller: '[data-nav-search-scroller]',
		searchResultsContainer: '[data-nav-search-results]',
		searchInput: '[data-nav-search-input]',
		searchType: '[data-nav-search-type]',
		popularSearchLink: '[data-popular-search-link]',
		pagination: '.pagination',
		resultsList: '.results__list'
	},
	classes: {
		pushUp: 'push-up',
		relative: 'relative',
		drawerOpen: 'js-drawer-open',
		isSearching: 'is-searching',
		isSearchVisible: 'is-search-visible',
		navSearchIsVisible: 'nav-search--is-visible',
		loading: 'loading'
	},
	init: function() {
		this.namespace = '.search';
		this.searchRequest = null;

		this.initListeners();
		this.initInfiniteScroll();

		$(window)
			.off( this.namespace )
			.on( 'resize' + this.namespace, PaloAlto.debounce( PaloAlto.Badge.setPosition, 150));
	},
	initListeners: function() {
		var self = this;

		$( this.selectors.searchForm ).on( 'keyup', this.selectors.searchInput, function(e) {
			$( self.selectors.searchContainer ).addClass( self.classes.pushUp );

			var query = $(this).val();
			if (query.length) {
					query += '*';
				self.request(query);
			} else {
				self.reset();
			}
		});

		$( this.selectors.search ).on( 'keyup', function(e) {
			if ( e.keyCode === slate.utils.keyboardKeys.ESCAPE ) {
				e.stopImmediatePropagation();
				self.close();
			}
		});

		$( this.selectors.searchOpen ).on( 'click', function(e) {
			e.preventDefault();
			self.open();
		});

		$( this.selectors.searchClose ).on( 'click', function(e) {
			e.preventDefault();
			self.close();
		});

		$( this.selectors.searchContainer ).on( 'click', this.selectors.loadMore, function(e) {
			e.preventDefault();
			var requestedURL = this.href;
			$(this).addClass( self.classes.loading );
			self.loadMore( requestedURL );
		});

		$( this.selectors.popularSearchLink ).on( 'click', function(e) {
			e.preventDefault();
			var searchText = $(this).text();
			$( self.selectors.searchInput ).val( searchText );
			self.request( searchText );
		});
	},
	open: function() {
		var self = this,
			scrollPosition = $(window).scrollTop(),
			pageOffset = $( this.selectors.topBar ).length ? $( this.selectors.topBar ).outerHeight() : 0,
			isDrawerOpen = $( this.selectors.body ).hasClass( this.classes.drawerOpen ),
			$scrollableElement = document.querySelector( this.selectors.searchScroller );

		if ( isDrawerOpen ) {
			PaloAlto.Drawers.close();
			setTimeout( openSearch, 400);
		} else {
			openSearch();
		}

		function openSearch() {
			var isHeaderRelative = $( self.selectors.header ).hasClass( self.classes.relative );

			$( self.selectors.header ).addClass( self.classes.isSearchVisible );
			$( self.selectors.search ).addClass( self.classes.navSearchIsVisible );

			scrollLock.disablePageScroll( $scrollableElement );

			setTimeout(function() {
				$( self.selectors.searchInput ).focus().select();
			}, 100);

			// Scroll to top in order to show the search container properly on the screen
			if ( isHeaderRelative && scrollPosition > pageOffset || scrollPosition < initialHeaderHeight ) {
				$( 'html, body' ).animate({ 'scrollTop': pageOffset }, 250);
			}
		}
	},
	close: function() {
		var self = this,
			$scrollableElement = document.querySelector( this.selectors.searchScroller );

		self.reset();
		$( this.selectors.header ).removeClass( self.classes.isSearchVisible );
		$( this.selectors.search ).removeClass( self.classes.navSearchIsVisible );
		$( this.selectors.searchOpen ).trigger( 'focus' );

		scrollLock.enablePageScroll( $scrollableElement );
	},
	reset: function() {
		$( this.selectors.searchForm )[0].reset();
		$( this.selectors.searchResultsContainer ).empty();
		$( this.selectors.searchContainer ).removeClass( [this.classes.isSearching, this.classes.pushUp] ) ;
	},
	request: function(searchQuery) {
		var self = this,
			searchType = $( this.selectors.searchType ).val();

		$( this.selectors.searchResultsContainer ).empty();
		$( this.selectors.searchContainer ).addClass( this.classes.isSearching );

		// Kill previous ajax request
		if (this.searchRequest != null) {
			this.searchRequest.abort();
		}

		// Do a new ajax request
		this.searchRequest = $.ajax({
			method: 'GET',
			url: window.routes.search_url + '?view=json',
			dataType: 'json',
			data: {
				q: searchQuery,
				type: searchType
			}
		}).done(function(data) {
			var searchResultsContent = '';
			var pagination = '';

			if (data.results_count) {
				var resultsText = data.results_count == 1 ? data.results_count + window.translations.results_one : data.results_count + window.translations.results_other;
				var nextPage = data.next_page;

				searchResultsContent += '<div class="results__count">' + resultsText + '</div>\
										<ul class="results__list product-grid--' + window.settings.productGridLayout + '">' + self.getResultsContent(data) + '</ul>';

				if (nextPage) {
					if ( window.settings.enableInfinityScroll ) {
						pagination = '<div class="pagination pagination--loadmore u-center"><a href="' + nextPage + '" class="js-loadMore loadMore button">' + window.translations.load_more + '</a></div>';
					} else {
						pagination = '<div class="pagination u-center"><a href="' + window.routes.search_url + '?type=product&q=' + searchQuery + '&options[prefix]=' + searchType + '" class="btn">' + window.translations.view_all + '</a></div>';
					}
				}

			} else {
				searchResultsContent = '<p class="no-results">' + window.translations.no_results + '</p>';
			}

			$( self.selectors.searchResultsContainer ).html( searchResultsContent );
			$( self.selectors.searchResultsContainer ).append( pagination );
			$( self.selectors.searchContainer ).removeClass( self.classes.isSearching );
			self.initInfiniteScroll();
			PaloAlto.Badge.setPosition();
		});
	},
	initInfiniteScroll: function() {
		var self = this;

		$( this.selectors.searchScroller ).off( 'scroll' );
		$( this.selectors.searchScroller ).on( 'scroll', $.throttle(150, function(){
			var scrolled = $( self.selectors.searchScroller ).scrollTop(),
				scrollTriggerPoint = $( self.selectors.searchContainer ).height() - $( self.selectors.searchScroller ).height() * 2,
				isSearching = $( self.selectors.searchContainer ).hasClass( self.classes.isSearching );

			if (scrolled >= scrollTriggerPoint && !isSearching) {
				$( self.selectors.loadMore, self.selectors.searchContainer ).trigger( 'click' );
				$( self.selectors.searchScroller ).off( 'scroll' );
			}
		}));
	},
	loadMore: function(requestedURL) {
		var self = this;

		$( this.selectors.searchContainer ).addClass( this.classes.isSearching );

		this.searchRequest = $.ajax({
			method: 'GET',
			url: requestedURL,
			dataType: 'json'
		}).done(function(data) {
			var pagination = '';
			var searchResultsContent = '';
			var nextPage = data.next_page;

			if (data.results_count) {
				searchResultsContent = self.getResultsContent(data);

				if (nextPage) {
					pagination = '<div class="pagination pagination--loadmore u-center"><a href="' + nextPage + '" class="js-loadMore loadMore button">' + window.translations.load_more + '</a></div>';
				}
			}

			$( self.selectors.pagination, self.selectors.searchResultsContainer ).remove();
			$( self.selectors.resultsList, self.selectors.searchResultsContainer ).append(searchResultsContent);
			$( self.selectors.searchResultsContainer ).append( pagination );
			$( self.selectors.searchContainer ).removeClass( self.classes.isSearching );
			self.initInfiniteScroll();
			PaloAlto.Badge.setPosition();
		});
	},
	getResultsContent: function(data) {
		var searchResultsContent = '';

		for ( var i = 0; i < data.results.length; i++ ) {
			var title = data.results[i].title;
			var url = data.results[i].url;
			var image = data.results[i].featured_image;
			var imageAspectRatio = data.results[i].image_aspectratio;
			var bgset = this.bgset( image, imageAspectRatio );
			var badge = '';

			// Check if Sale or Sold out
			if ( data.results[i].available == 'false' ) {
				badge = '<div class="tag tag--' + window.settings.productBadgeStyle + '"><span>' + window.translations.sold_out_html + '</span></div>';
			} else if ( data.results[i].price < data.results[i].compare_at_price ) {
				badge = '<div class="tag tag--' + window.settings.productBadgeStyle + '"><span>' + window.translations.on_sale_html + '</span></div>';
			}

			searchResultsContent += '<li class="result">\
										<div class="result__image" data-aspectratio="' + imageAspectRatio + '">\
											<a href="' + url + '" class="result__image-link">\
												<div class="result__image-img product__media lazyload fade-in"\
													data-bgset="' + bgset + '"\
													data-aspectratio="' + imageAspectRatio + '"\
													data-sizes="auto"></div>' + badge + '\
											</a>\
										</div>\
										<p class="result__title"><a href="' + url + '">' + title + '</a></p>\
									</li>';
		}

		return searchResultsContent;
	},

	bgset: function( image, imageAspectRatio ) {
		var bgset = '';

		// Don't use bgset if image is blank
		if ( image.indexOf( 'blank.gif' ) != -1) return image;

		bgset += image.replace( '_2048x.', '_180x.' ) + ' 180w ' + Math.round(180 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_360x.' ) + ' 360w ' + Math.round(360 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_540x.' ) + ' 540w ' + Math.round(540 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_720x.' ) + ' 720w ' + Math.round(720 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_900x.' ) + ' 900w ' + Math.round(900 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_1080x.' ) + ' 1080w ' + Math.round(1080 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_1296x.' ) + ' 1296w ' + Math.round(1296 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_1512x.' ) + ' 1512w ' + Math.round(1512 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_1728x.' ) + ' 1728w ' + Math.round(1728 / imageAspectRatio) + 'h,';
		bgset += image.replace( '_2048x.', '_1950x.' ) + ' 1950w ' + Math.round(1950 / imageAspectRatio) + 'h,';
		bgset += image + ' 2048w ' + Math.round(2048 / imageAspectRatio) + 'h';

		return bgset;
	}
};
PaloAlto.ProductVideo = (function() {
	var videos = {};

	var hosts = {
		html5: 'html5',
		youtube: 'youtube'
	};

	var selectors = {
		productMediaSlider: '[data-product-single-media-slider]'
	};

	var attributes = {
		enableVideoLooping: 'enable-video-looping',
		videoId: 'video-id',
		mediaId: 'media-id'
	};

	function init(videoContainer, sectionId) {
		if (!videoContainer.length) {
			return;
		}

		var videoElement = videoContainer.find('iframe, video')[0];
		var mediaId = videoContainer.data('mediaId');

		if (!videoElement) {
			return;
		}

		videos[mediaId] = {
			mediaId: mediaId,
			sectionId: sectionId,
			host: hostFromVideoElement(videoElement),
			container: videoContainer,
			element: videoElement,
			ready: function() {
				createPlayer(this);
			}
		};

		var video = videos[mediaId];

		switch (video.host) {
			case hosts.html5:
				window.Shopify.loadFeatures([
					{
						name: 'video-ui',
						version: '1.0',
						onLoad: setupPlyrVideos
					}
				]);
				LibraryLoader.load('plyrShopifyStyles');
				break;
			case hosts.youtube:
				if ( window.isYoutubeAPILoaded ) {
					PaloAlto.ProductVideo.loadVideos(PaloAlto.ProductVideo.hosts.youtube);
				} else {
					LibraryLoader.load('youtubeSdk');
				}
				break;
		}
	}

	function setupPlyrVideos(errors) {
		if (errors) {
			fallbackToNativeVideo();
			return;
		}

		loadVideos(hosts.html5);
	}

	function createPlayer(video) {
		if (video.player) {
			return;
		}

		var productMediaWrapper = video.container,
			enableLooping = productMediaWrapper.data(attributes.enableVideoLooping),
			mediaId = productMediaWrapper.data(attributes.mediaId);

		switch (video.host) {
			case hosts.html5:
				// eslint-disable-next-line no-undef
				video.player = new Shopify.Plyr(video.element, {
					loop: { active: enableLooping },
					focusOnPlay: true
				});

				video.player.on( 'play', function() {
					PaloAlto.pauseOtherMedia( mediaId );
					video.container.closest( selectors.productMediaSlider ).addClass( 'has-media-active' );
				});
				video.player.on( 'pause', function() {
					video.container.closest( selectors.productMediaSlider ).removeClass( 'has-media-active' );
				});
				break;
			case hosts.youtube:
				var videoId = productMediaWrapper.data(attributes.videoId);
				video.player = new YT.Player(video.element, {
					videoId: videoId,
					events: {
						// onReady: function(event) {},
						onStateChange: function(event) {
							if (event.data === 0 ) {
								if (enableLooping) event.target.seekTo(0);
								video.container.closest( selectors.productMediaSlider ).removeClass( 'has-media-active' );
							}
							if (event.data === 1 ) {
								PaloAlto.pauseOtherMedia( mediaId );
								video.container.closest( selectors.productMediaSlider ).addClass( 'has-media-active' );
							}
							if (event.data === 2 ) {
								PaloAlto.pauseOtherMedia( mediaId );
								video.container.closest( selectors.productMediaSlider ).removeClass( 'has-media-active' );
							}
						}
					}
				});
				break;
		}

		productMediaWrapper.on('mediaHidden xrLaunch', function( e ) {
			if (!video.player) return;

			if (video.host === hosts.html5) {
				video.player.pause();
			}

			if (video.host === hosts.youtube && video.player.pauseVideo) {
				video.player.pauseVideo();
			}
		});

		productMediaWrapper.on('mediaVisible', function( e ) {
			if ( window.isTouch ) return;
			if (!video.player) return;

			if (video.host === hosts.html5) {
				video.player.play();
			}

			if (video.host === hosts.youtube && video.player.playVideo) {
				video.player.playVideo();
			}
		});
	}

	function hostFromVideoElement(video) {
		if (video.tagName === 'VIDEO') {
			return hosts.html5;
		}

		if (video.tagName === 'IFRAME') {
			if (
				/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
					video.src
				)
			) {
				return hosts.youtube;
			}
		}
		return null;
	}

	function loadVideos(host) {
		for (var key in videos) {
			if (videos.hasOwnProperty(key)) {
				var video = videos[key];
				if (video.host === host) {
					video.ready();
				}
			}
		}
	}

	function fallbackToNativeVideo() {
		for (var key in videos) {
			if (videos.hasOwnProperty(key)) {
				var video = videos[key];

				if (video.nativeVideo) continue;

				if (video.host === hosts.html5) {
					video.element.setAttribute('controls', 'controls');
					video.nativeVideo = true;
				}
			}
		}
	}

	function removeSectionVideos(sectionId) {
		for (var key in videos) {
			if (videos.hasOwnProperty(key)) {
				var video = videos[key];

				if (video.sectionId === sectionId) {
					if (video.player) video.player.destroy();
					delete videos[key];
				}
			}
		}
	}

	return {
		init: init,
		hosts: hosts,
		loadVideos: loadVideos,
		removeSectionVideos: removeSectionVideos
	};
})();
PaloAlto.ProductModel = (function() {
	var modelJsonSections = {},
		models = {},
		xrButtons = {};

	var selectors = {
		mediaGroup: '[data-product-single-media-group]',
		xrButton: '[data-shopify-xr]',
		productMediaSlider: '[data-product-single-media-slider]'
	};

	function init(modelViewerContainers, sectionId) {
		modelJsonSections[sectionId] = {
			loaded: false
		};

		modelViewerContainers.each(function(index) {
			var $modelViewerContainer = $(this);
			var mediaId = $modelViewerContainer.data('media-id');
			var $modelViewerElement = $(
				$modelViewerContainer.find('model-viewer')[0]
			);
			var modelId = $modelViewerElement.data('model-id');

			if (index === 0) {
				var $xrButton = $modelViewerContainer
					.closest(selectors.mediaGroup)
					.find(selectors.xrButton);
				xrButtons[sectionId] = {
					$element: $xrButton,
					defaultId: modelId
				};
			}

			models[mediaId] = {
				modelId: modelId,
				mediaId: mediaId,
				sectionId: sectionId,
				$container: $modelViewerContainer,
				$element: $modelViewerElement
			};
		});

		window.Shopify.loadFeatures([
			{
				name: 'shopify-xr',
				version: '1.0',
				onLoad: setupShopifyXr
			},
			{
				name: 'model-viewer-ui',
				version: '1.0',
				onLoad: setupModelViewerUi
			}
		]);
		LibraryLoader.load('modelViewerUiStyles');
	}

	function setupShopifyXr(errors) {
		if (errors) return;

		if (!window.ShopifyXR) {
			document.addEventListener('shopify_xr_initialized', function() {
				setupShopifyXr();
			});
			return;
		}

		for (var sectionId in modelJsonSections) {
			if (modelJsonSections.hasOwnProperty(sectionId)) {
				var modelSection = modelJsonSections[sectionId];

				if (modelSection.loaded) continue;
				var $modelJson = $('#ModelJson-' + sectionId);

				if ( !$modelJson.length ) return;

				window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
				modelSection.loaded = true;
			}
		}
		window.ShopifyXR.setupXRElements();
	}

	function setupModelViewerUi(errors) {
		if (errors) return;

		var config = {
			focusOnPlay: true
		}

		for (var key in models) {
			if (models.hasOwnProperty(key)) {
				var model = models[key];
				if (!model.modelViewerUi) {
					model.modelViewerUi = new Shopify.ModelViewerUI(model.$element, config);
				}

				setupModelViewerListeners(model);
			}
		}
	}

	function setupModelViewerListeners(model) {
		var xrButton = xrButtons[model.sectionId];

		model.$container.on('mediaVisible', function() {
			xrButton.$element.attr('data-shopify-model3d-id', model.modelId);
			PaloAlto.pauseOtherMedia( model.mediaId );
			if ( window.isTouch ) return;
			model.modelViewerUi.play();
			model.$container.closest( selectors.productMediaSlider ).addClass( 'has-media-active' );
		});

		model.$container
			.on('mediaHidden', function() {
				xrButton.$element.attr('data-shopify-model3d-id', xrButton.defaultId);
				model.modelViewerUi.pause();
			})
			.on('xrLaunch', function() {
				model.modelViewerUi.pause();
			});

		model.$element.on( 'shopify_model_viewer_ui_toggle_play', function() {
			PaloAlto.pauseOtherMedia( model.mediaId );
			model.$container.closest( selectors.productMediaSlider ).addClass( 'has-media-active' );
		});

		model.$element.on( 'shopify_model_viewer_ui_toggle_pause', function() {
			model.$container.closest( selectors.productMediaSlider ).removeClass( 'has-media-active' );
		});
	}

	function removeSectionModels(sectionId) {
		for (var key in models) {
			if (models.hasOwnProperty(key)) {
				var model = models[key];
				if (model.sectionId === sectionId) {
					models[key].modelViewerUi.destroy();
					delete models[key];
				}
			}
		}
		delete modelJsonSections[sectionId];
	}

	return {
		init: init,
		removeSectionModels: removeSectionModels
	};
})();

/*================ Sections ================*/
PaloAlto.AnnouncementBar = (function() {

	function AnnouncementBar(container) {
		var $container = this.$container = $(container),
			sectionId = this.sectionId = $(container).attr('data-section-id');

		this.initSlider();
	}

	AnnouncementBar.prototype = $.extend({}, AnnouncementBar.prototype, {

		/* Init Slider */
		initSlider: function() {
			var $slider = $( '.top-bar__slider', this.$container);

			$slider.flickity({
				cellSelector: '.top-bar__slide',
				pageDots: false,
				prevNextButtons: false,
				wrapAround: true,
				autoPlay: 5000
			});
		},

		onBlockSelect: function(evt) {
			var $slider = $( evt.target ).parents( '.top-bar__slider' );
			var index = $( evt.target ).index();

			if ( $slider.data( 'flickity' ) ) {
				$slider.flickity( 'select', index );
				$slider.flickity( 'pausePlayer' );
			}
		},

		onBlockDeselect: function(evt) {
			var $slider = $( evt.target ).parents( '.top-bar__slider' );

			if ( $slider.data( 'flickity' ) ) {
				$slider.flickity( 'unpausePlayer' );
			}
		}
	});

	return AnnouncementBar;
})();
PaloAlto.BlogPosts = (function() {

	function BlogPosts(container) {
		this.$container = $(container);
		this.endlessBlogPosts = {};
		this.initInfinityScroll();
	}

	BlogPosts.prototype = $.extend({}, BlogPosts.prototype, {
		initInfinityScroll: function() {
			if ( !window.settings.enableInfinityScroll ) return;

			var self = this;

			this.endlessBlogPosts = new Ajaxinate({
				container: '#AjaxinateLoop',
				pagination: '#AjaxinatePagination',
				method: 'scroll'
			});
		},

		onUnload: function(evt) {
			if ( typeof( this.endlessBlogPosts ) === 'object') this.endlessBlogPosts.destroy();
		}
	});

	return BlogPosts;

})();
PaloAlto.Faq = (function() {
	function Faq(container) {
		PaloAlto.initCollapsible();
	}

	return Faq;
})();
PaloAlto.FeaturedCollection = (function() {
	function FeaturedCollection(container) {
		this.$container = $(container);
		this.$collectionSlider = this.$container.find( '.js-featured-collection--slider' );

		this.init();
	}

	FeaturedCollection.prototype = $.extend({}, FeaturedCollection.prototype, {
		init: function() {
			var self = this,
				enableSlider = this.$container.data( 'slider' ),
				productGridSlideshow = this.$container.data( 'product-grid-slideshow' );

			if ( enableSlider ) {
				this.checkSlider();

				$(window).on( 'resize', $.throttle(150, self.checkSlider.bind(self) ) );
			}

			if ( productGridSlideshow ) {
				this.productGridSlideshow();
			}

			PaloAlto.initQuickButton( this.$container );
			PaloAlto.Badge.setPosition();
			$(window).on( 'resize', PaloAlto.debounce( PaloAlto.Badge.setPosition, 250));
		},

		checkSlider: function() {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth,
				slidesCount = this.$collectionSlider.find( '[data-product-slide]' ).length,
				productColumns = this.$container.data( 'product-columns' );

			if ( windowWidth >= 768 && slidesCount > productColumns ) {
				this.initSlider();
				this.setSliderArrowsPosition();
			} else {
				this.destroySlider();
			}
		},

		initSlider: function() {
			var self = this,
				$slider = this.$collectionSlider;

			$slider.removeClass( 'slider--disabled' );

			if ( !$slider.data( 'flickity' ) ) {
				$slider.on( 'ready.flickity', function() {
					self.setSliderArrowsPosition();
				});

				$slider.flickity({
					cellSelector: '[data-product-slide]',
					cellAlign: 'left',
					contain: true,
					groupCells: true,
					imagesLoaded: true,
					lazyLoad: true,
					pageDots: false,
					adaptiveHeight: false,
					arrowShape: {
						x0: 20,
						x1: 65, y1: 35,
						x2: 70, y2: 30,
						x3: 30
					}
				});

				// iOS smooth scrolling fix
				PaloAlto.flickitySmoothScrolling( $slider );
			}
		},

		destroySlider: function() {
			this.$collectionSlider.addClass( 'slider--disabled' );

			if ( this.$collectionSlider.data( 'flickity' ) ) {
				this.$collectionSlider.flickity( 'destroy' );
			}
		},

		setSliderArrowsPosition: function() {
			var $arrows = this.$collectionSlider.find( '.flickity-button' ),
				imageHeight = this.$collectionSlider.find( '.product-grid-item__image' ).outerHeight();

			$arrows.css('top', imageHeight / 2 );
		},

		/* Product grid slideshow */
		productGridSlideshow: function() {
			var $productGridSlider = this.$container.find( '.product__media-slider' );

			$productGridSlider.each( function() {
				var countImages = $( this ).find( '.product__media' ).length;

				if ( countImages > 1 ) {
					$( this ).flickity({
						cellSelector: '.product__media-slide',
						contain: true,
						wrapAround: true,
						imagesLoaded: true,
						lazyLoad: true,
						pageDots: false,
						adaptiveHeight: false,
						arrowShape: {
							x0: 0,
							x1: 45, y1: 50,
							x2: 50, y2: 50,
							x3: 5
						}
					});
				}
			});

			// Prevent page redirect on slideshow arrow click
			this.$container.on( 'click', '.product-grid-item__image', function(e) {
				if ( $(e.target).is( '.flickity-button, .flickity-button *' ) ) {
					e.preventDefault();
				}
			});
		},

		/**
		 * Event callback for Theme Editor `section:select` event
		 */
		onSelect: function() {
			PaloAlto.initReviews();
			PaloAlto.initQuickButton( this.$container );
		},

		onDeselect: function() {
			$.magnificPopup.close();
		},

		onBlockSelect: function(evt) {
			var $slider = $( evt.target ).parents( '.js-featured-collection--slider' );
			var index = $( evt.target ).index();

			if ( $slider.data( 'flickity' ) ) {
				$slider.flickity( 'select', index );
			}
		},

		onUnload: function(evt) {
			$.magnificPopup.close();

			var $slider = $(evt.target).parents('.js-featured-collection--slider');

			if ( $slider.data('flickity') ) {
				$slider.flickity('destroy');
			}
		}
	});

	return FeaturedCollection;
})();
PaloAlto.FeaturedImage = (function() {
	var selectors = {
		parallax: '[data-parallax-src]',
		parallaxMirror: '.parallax-mirror',
		parallaxSlider: '.parallax-slider',
		featuredImage: '#featured-image--',
		imageOverlay: '.overlay'
	};

	function FeaturedImage(container) {
		this.$container = $(container);
		this.enableParallax = this.$container.data( 'parallax-src' );
		this.sectionId = this.$container.attr( 'data-section-id' );
		this.featuredImageSelector = selectors.featuredImage + this.sectionId;
		this.parallaxSliderSelector = selectors.featuredImage + this.sectionId + ' ' + selectors.parallaxSlider;
		this.parallaxMirrorSelector = selectors.parallaxMirror;
		this.imageOverlaySelector = selectors.imageOverlay;
		this.$featuredImage = $( this.featuredImageSelector );

		this.init();
	}

	FeaturedImage.prototype =  $.extend({}, FeaturedImage.prototype, {
		init: function() {
			if ( !this.enableParallax ) return;

			var parallaxSlider = this.parallaxSliderSelector,
				$featuredImage = this.$featuredImage,
				imagePosition = $featuredImage.data( 'image-position' ).split('-'),
				options = {
					src: $featuredImage.data( 'parallax-src' ),
					mirrorSelector: this.featuredImageSelector,
					parallax: 'scroll',
					posX: imagePosition[0],
					posY: imagePosition[1],
					speed: 0,
					bleed: 0,
					zIndex: 0,
					excludeAgents: /(iPod)/,
					afterRefresh: function() {
						$featuredImage.parallax( 'render' );
					}
				};

			$featuredImage.parallax( options );

			$(document).on( 'preventOverflow.' + this.sectionId, function() {
				$featuredImage.parallax( 'refresh' );
			});

			$.each( $featuredImage.data(), function(key,val) {
				if ( key == 'widths' ) {
					val = "[" + val + "]"
				}
				var kebabKey = "data-" + key;
				kebabKey = kebabKey.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
				$( parallaxSlider ).attr( kebabKey, val );
			});

			$( parallaxSlider ).addClass( 'lazyload' );

			$( this.imageOverlaySelector, this.$container).remove().appendTo( $( this.parallaxMirrorSelector, this.$container) );

			$(window).trigger( 'resize' );
		},

		onUnload: function() {
			$(document).off( 'preventOverflow.' + this.sectionId );
			if ( this.$featuredImage.attr( 'data-parallax-src' ) ) {
				this.$featuredImage.parallax( 'destroy' );
			}
		}
	});

	return FeaturedImage;
})();
/**
 * FeaturedVideo Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the FeaturedVideo template.
 *
 * @namespace FeaturedVideo
 */

PaloAlto.FeaturedVideo = (function() {
	var players = [];
	var isYoutubeAPIReady = false;
	var enableSound = false;
	var defaultYoutubeOptions = {
		height: '720',
		width: '1280',
		playerVars: {
			showinfo: 0,
			controls: 0,
			fs: 0,
			rel: 0,
			height: "100%",
			width: "100%",
			iv_load_policy: 3,
			html5: 1,
			loop: 1,
			playsinline: 1,
			modestbranding: 1,
			disablekb: 1,
			wmode: 'opaque'
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	};

	function FeaturedVideo(container) {
		var $container = this.$container = $(container),
			$player = this.$player = $container.find('.video__iframe');

		enableSound = $container.data('enable-sound');

		if ($player.length) {
			this.playerID = $player.attr('id');
			this.videoID = $player.data('video-id');
			this.init();
		}
	}

	function onPlayerReady(event) {
		var iframe = event.target.getIframe(),
			id = $(iframe).attr('id');

		if ( id ) {
			$(iframe).attr('tabindex', '-1');

			if (enableSound) {
				event.target.unMute();
			} else {
				event.target.mute();
			}

			event.target.playVideo();

			$(iframe).parent().addClass('loaded');

			checkPlayerVisibility(id);

			$(window).on('scroll.' + id, { id: id }, $.throttle(150, checkPlayerVisibility));
		}
	}

	function onPlayerStateChange(event) {
		// Loop video if state is ended
		if (event.data == 0) {
			event.target.playVideo();
		}
	}

	function checkPlayerVisibility(id) {
		if ( typeof id === 'string' ) {
			var playerID = id;
		} else if ( id.data != undefined ) {
			var playerID = id.data.id;
		} else {
			return false;
		}
		var playerElement = document.getElementById(playerID + '-container');
		var player = players[playerID];
		var isVisible = PaloAlto.isInViewport(playerElement);

		if (isVisible && player && typeof player.playVideo === 'function') {
			player.playVideo();
		} else if (!isVisible && player && typeof player.pauseVideo === 'function') {
			player.pauseVideo();
		}
	}

	FeaturedVideo.prototype = $.extend({}, FeaturedVideo.prototype, {
		init: function() {
			var self = this;

			this.$container.on( 'click touchstart', '.video-wrapper', function(e) {
				var playerID = $(this).find('.video__iframe').attr('id');

				if ( players[playerID] && players[playerID].playVideo ) {
					players[playerID].playVideo();
				}
			});

			this.setVideoFullscreenSize();
			$(window).on('resize.' + this.playerID, PaloAlto.debounce( self.setVideoFullscreenSize.bind(self) , 250 ));

			// Recalculate video height when preventOverflow section fix has been done
			$(document).on( 'preventOverflow', this.setVideoFullscreenSize.bind(this) );

			if (isYoutubeAPIReady) {
				this.loadYoutubePlayer();
			} else {
				// Load Youtube API if not loaded yet
				window.loadYoutubeAPI();
				$('body').on('youtubeAPIReady', this.loadYoutubePlayer.bind(this));
			}
		},

		loadYoutubePlayer: function() {
			var currentYoutubeOptions = $.extend({}, defaultYoutubeOptions);
			currentYoutubeOptions.videoId = this.videoID;
			players[this.playerID] = new YT.Player( this.playerID , currentYoutubeOptions );
			isYoutubeAPIReady = true;
		},

		setVideoFullscreenSize: function() {
			var $player = this.$container.find( '.video__iframe' ),
				videoAspectRatio = 16/9,
				containerAspectRatio = this.$container.width() / this.$container.outerHeight(),
				videoWidth = 0,
				videoHeight = 0;

			if (videoAspectRatio > containerAspectRatio) {
				videoWidth = this.$container.outerHeight() * videoAspectRatio;
				videoHeight = this.$container.outerHeight();
			} else {
				videoWidth = this.$container.width();
				videoHeight = this.$container.width() / videoAspectRatio;
			}

			$player.css({
				'width': videoWidth,
				'height': videoHeight
			});
		},

		onUnload: function(evt) {
			var playerID = 'video-' + this.$container.data('section-id');
			delete players[playerID];
			$(window).off( 'resize.' + this.playerID );
			$(window).off( 'scroll.' + this.playerID );
		}
	});

	return FeaturedVideo;
})();
PaloAlto.Footer = (function() {

	function Footer(container) {
		var $container = this.$container = $(container);
		var selectors = {
			disclosureLocale: '[data-disclosure-locale]',
			disclosureCurrency: '[data-disclosure-currency]'
		};

		var $disclosureLocale = $( selectors.disclosureLocale, $container );
		var disclosureLocale = {};

		var $disclosureCurrency = $( selectors.disclosureCurrency, $container );
		var disclosureCurrency = {};

		if ( $disclosureLocale.length ){
			disclosureLocale = new PaloAlto.Disclosure( $disclosureLocale );
		}
		if ( $disclosureCurrency.length ) {
			disclosureCurrency = new PaloAlto.Disclosure( $disclosureCurrency );
		}

		PaloAlto.initCollapsible();
	};

	return Footer;
})();
PaloAlto.Header = (function() {
	var $window = $(window),
		$body = $( 'body' ),
		$pageContainer = $( '#PageContainer' ),
		scrollingDirection = 'down',
		lastScrollTop = $(window).scrollTop(),
		lastWindowWidth = window.innerWidth || document.documentElement.clientWidth,
		headerHeight = 60;

	var selectors = {
		activeDropdowns: '.is-expanded',
		cartDrawer: '#CartDrawer',
		cartContainer: '#CartContainer',
		closeDrawer: '.js-drawer-close',
		collectionFilters: '#collection__filters',
		dropdown: '.dropdown',
		dropdownSubmenu: '.dropdown--level-3',
		dropdownParents: '.nav__item--has-items, .dropdown__item--has-items',
		dropdownTrigger: '.dropdown__trigger--hover',
		dropdownLink: '.dropdown__link',
		dropdownCollapsible: '.dropdown__links-container',
		headerTopLevelLinks: '.nav__link, .logo__image-link, .logo__text-link, .cart__toggle',
		logo: '.logo',
		logoLinkHome: '.logo__image-link--home',
		logoImage: '.logo__image',
		logoImageHome: '.logo__image-link--home .logo__image',
		logoImageOther: '.logo__image-link--other .logo__image',
		megamenu: '.megamenu',
		nav: '.nav',
		navDrawer: '#NavDrawer',
		navItem: '.nav__item',
		navSearch: '[data-nav-search]',
		openNavDrawer: '.js-drawer-open-nav',
		openCartDrawer: '.js-drawer-open-cart',
		wrapper: '.wrapper',
		mobileNavLink: '.mobile-nav__link',
		mobileNavDropdownTrigger: '.mobile-nav__trigger'
	};

	var classes = {
		navActive: 'nav--active',
		isExpanded: 'is-expanded',
		jsDrawerOpen: 'js-drawer-open',
		jsDrawerOpenAll: 'js-drawer-open js-drawer-open-left js-drawer-open-right',
		jsFocusVisible: 'js-focus-visible',
		dropdownTrigger: 'dropdown__trigger--hover',
		dropdownTriggerCollapsible: 'dropdown__trigger--collapsible',
		dropdownParents: 'nav__item--has-items',
		dropdownLink: 'dropdown__link',
		dropdownOpen: 'dropdown--open',
		dropdownRight: 'dropdown--level-2--right',
		dropdownSubmenuLeft: 'dropdown--level-3--left',
		megamenuOpen: 'megamenu--open',
		megamenuLink: 'megamenu__link',
		headerMegamenuOpen: 'is-megamenu-open',
		headerNavRight: 'site-header--nav-right',
		headerNavCenter: 'site-header--nav-center',
		headerTransparent: 'site-header--transparent',
		headerLoading: 'site-header--loading',
		hasMegamenu: 'nav__item--has-megamenu',
		hasScrolled: 'has-scrolled',
		hasTransparentHeader: 'has-transparent-header',
		hideHeader: 'hide-header',
		navCompress: 'nav--compress',
		navDefault: 'nav--default',
		navItemCompress: 'nav__item--compress',
		mobileNavDropdownTrigger: 'mobile-nav__link--trigger',
		isTransitioning: 'is-transitioning',
		headerSticky: 'header--sticky'
	};

	function Header(container) {
		var $container = this.$container = $(container),
			$navSearch = this.$navSearch = $( selectors.navSearch, $container );

		this.namespace = '.header';
		this.$header = $container,
		this.$headerSection = $container.parent(),
		this.$headerWrapper = $container.children( selectors.wrapper ),
		this.$siteNav = $( selectors.nav, $container ),
		this.$logo = $( selectors.logo, $container ),
		this.$navDrawer = $( selectors.navDrawer ),
		this.$cartDrawer = $( selectors.cartDrawer ),
		this.activeDropdownsClose = 0;

		PaloAlto.initCollapsible();
		PaloAlto.initCart();
		PaloAlto.initListeners();
		PaloAlto.initTransparentHeader();
		PaloAlto.setMainSpacing();

		this.fitNav();
		this.initStickyNav();
		this.initAccessibleNav();
		this.initMobileNav();
		this.initDrawers();
		this.headerState();

		// Init ajax search only when search icon is shown
		if ( $navSearch.length ) {
			PaloAlto.NavSearch.init();
		}
	}

	Header.prototype = $.extend({}, Header.prototype, {
		initStickyNav: function() {
			var hasCollectionFilters = $( selectors.collectionFilters ).length,
				position = hasCollectionFilters ? 'relative' : this.$header.data( 'position' );

			headerHeight = parseInt( this.$header.data( 'height' ) );

			// Set fixed header class
			if ( position == 'fixed' ) {
				this.$headerSection.addClass( classes.headerSticky );
			} else {
				this.$headerSection.removeClass( classes.headerSticky );
			}

			$window.on( 'scroll' + this.namespace, this.headerState.bind(this) );
		},

		// Switch to "compact" header on scroll
		headerState: function() {
			var hasCollectionFilters = $( selectors.collectionFilters ).length;

			// Don't change header state if it's on collection page and has filters enabled
			if ( hasCollectionFilters ) return;

			var pageOffset = $pageContainer.offset().top + headerHeight,
				currentScrollTop = $window.pageYOffset || document.documentElement.scrollTop,
				position = this.$header.data( 'position' );

			// Detect scrolling direction
			scrollingDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
			lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

			if ( position == 'fixed'  ) {
				// Show compact header when scroll down
				if ( currentScrollTop > pageOffset ) {
					$body.addClass( classes.hasScrolled );
					this.$header.removeClass( classes.headerTransparent );
				} else {
					$body.removeClass( classes.hasScrolled );

					if ( isHeaderTransparent ) this.$header.addClass( classes.headerTransparent );
				}

				// Hide compact header when scroll back to top
				if ( currentScrollTop < pageOffset + 60 && scrollingDirection == 'up' ) {
					$body.addClass( classes.hideHeader );
				} else {
					$body.removeClass( classes.hideHeader );
				}
			}
		},

		fitNav: function() {
			var self = this;

			$window
				.on( 'load', this.controlNav.bind(this) )
				.on( 'resize' + this.namespace, $.throttle( 100, function() {
						var newWindowWidth = window.innerWidth || document.documentElement.clientWidth;

						// Skip window height resize event
						if ( newWindowWidth != lastWindowWidth) {
							// Measure children of site nav on load and resize.
							// If wider than parent, switch to mobile nav.
							self.controlNav();

							$( selectors.dropdownParents ).each( function() {
								self.dropdownFix( $(this) );
							});

							// Update last window width after resize ended
							lastWindowWidth = newWindowWidth;
						}
				}) );

			this.controlNav();
		},

		controlNav: function() {
			// Reset nav to normal state
			this.$header.removeClass( classes.headerNavRight );
			this.$siteNav.removeClass( classes.navCompress ).addClass( classes.navDefault );

			// Subtract 50 from width to give space between the logo and links
			var maxNavWidth = this.$headerWrapper.width() - this.$logo.outerWidth() - 50,
				navWidth = this.$headerWrapper.width() - this.$logo.width() - 20,
				navItemsWidth = 0,
				isNavCentered = this.$header.data( 'nav-position' ) == 'center';

			if ( isNavCentered ) {
				navWidth = this.$headerWrapper.width() - this.$logo.width() * 2 - 20;
			}

			navItemsWidth = this.getNavItemsWidth();

			if ( navItemsWidth > navWidth ) {
				this.$header
					.removeClass( classes.headerNavCenter )
					.addClass( classes.headerNavRight );
			} else {
				this.$header.removeClass( classes.headerNavRight );

				if ( isNavCentered ) this.$header.addClass( classes.headerNavCenter );
			}

			// Recalculate nav items width when nav is forced to align right to get the updated width
			navItemsWidth = this.getNavItemsWidth();

			if (navItemsWidth > maxNavWidth) {
				this.$siteNav.addClass( classes.navCompress ).removeClass( classes.navDefault );
			} else {
				this.$siteNav.removeClass( classes.navCompress ).addClass( classes.navDefault );
			}

			// Trigger scoll event to set the header state
			$window.trigger( 'scroll' + this.namespace );
		},

		getNavItemsWidth: function() {
			// Reset nav items width
			navItemsWidth = 0;

			this.$siteNav.children( selectors.navItem ).each(function() {
				var $el = $(this);
				if (!$el.hasClass( classes.navItemCompress )) {
					// Round up to be safe
					navItemsWidth += Math.ceil($(this).outerWidth(true));
				}
			});

			return navItemsWidth;
		},

		initAccessibleNav: function () {
			var self = this,
				$headerTopLevelLinks = $( selectors.headerTopLevelLinks, this.$header ),
				$dropdownParents =  $( selectors.dropdownParents, this.$siteNav );

			// Reset event listeners
			$dropdownParents.off( this.namespace );
			$headerTopLevelLinks.off( this.namespace );
			this.$header.removeClass( classes.headerLoading )

			$dropdownParents
				.on( 'mouseenter' + this.namespace, function() {
					if ( window.isTouch ) return;
					showDropdown( $(this) );
				})
				.on( 'mouseleave' + this.namespace, function() {
					if ( window.isTouch ) return;
					hideDropdown( $(this) );
				})
				.on( 'keyup touchstart', selectors.dropdownTrigger, function(e) {
					if ( e.keyCode === slate.utils.keyboardKeys.ENTER || e.keyCode === slate.utils.keyboardKeys.SPACE || e.type === 'touchstart' ) {
						e.stopImmediatePropagation();
						var $el = $(this).closest( selectors.dropdownParents ),
							dropdownOpen = $el.hasClass( classes.navActive );
						dropdownOpen ? hideDropdown( $el ) : showDropdown( $el );
					}
				})
				.on( 'keyup' + this.namespace, function(e) {
					if ( e.keyCode === slate.utils.keyboardKeys.ESCAPE ) {
						e.stopImmediatePropagation();
						var $dropdownParent,
							$el = $(e.target),
							isDropdownParent = $el.hasClass( classes.dropdownParents ),
							isDropdownTrigger = $el.hasClass( classes.dropdownTrigger ),
							isDropdownTriggerCollapsible = $el.hasClass( classes.dropdownTriggerCollapsible ),
							isDropdownLink = $el.hasClass( classes.dropdownLink ),
							isMegamenuLink = $el.hasClass( classes.megamenuLink );

						if ( isDropdownParent ) {
							$dropdownParent = $(this);
							hideDropdown( $dropdownParent );
						} else if ( isDropdownTrigger || isDropdownLink || isMegamenuLink ) {
							$dropdownParent = $el.parents( selectors.dropdownParents );
							hideDropdown( $dropdownParent );
						} else if ( isDropdownTriggerCollapsible ) {
							var $dropdown = $( '#' + $el.attr( 'aria-controls' ) ),
								isExpanded = $dropdown.hasClass( classes.isExpanded ),
								isTransitioning = $dropdown.hasClass( classes.isTransitioning );

							if ( isExpanded || !isTransitioning ) {
								$dropdownParent = $el.parents( selectors.dropdownParents );
								hideDropdown( $dropdownParent );
							}
						}

						// Focus last element
						if ( $dropdownParent ) {
							$dropdownParent.find( selectors.dropdownTrigger ).eq(0).trigger( 'focus' );
						}
					}
				})
				.each( function() {
					self.dropdownFix( $(this) );
				});

			$headerTopLevelLinks.on( 'focus' + this.namespace, function(e) {
				hideDropdown( $dropdownParents );
			});

			function showDropdown ($el) {
				var $dropdownParent = $el,
					$dropdownTrigger = $el.children( selectors.dropdownTrigger ),
					$dropdown = $dropdownParent.children( selectors.dropdown ),
					$megamenu = $dropdownParent.children( selectors.megamenu ),
					isMegamenu = $dropdownParent.hasClass( classes.hasMegamenu );

				clearTimeout( self.activeDropdownsClose );

				// Hide other active dropdowns
				if ( $dropdownParent.siblings().hasClass( classes.navActive ) ) {
					hideDropdown( $dropdownParent.siblings() );
				}

				$dropdownParent.addClass( classes.navActive );
				$dropdownTrigger.attr( 'aria-expanded', true );
				$dropdown.addClass( classes.dropdownOpen ).attr( 'aria-hidden', false );

				// Change header style when open a mega menu
				if ( isMegamenu ) {
					self.$header.addClass( classes.headerMegamenuOpen );
					$megamenu.addClass( classes.megamenuOpen )
				}

				setTimeout(function() {
					$body.on( 'touchstart' + self.namespace, function(e) {
						if ( !$(e.target).parents( selectors.dropdownParents ).length ) {
							hideDropdown($el);
						}
					});
				}, 250);
			}

			function hideDropdown ($el) {
				var isDropdownOpen = $el.hasClass( classes.navActive );
				if ( !isDropdownOpen ) return;

				var $dropdownParent = $el,
					$dropdownTrigger = $el.children( selectors.dropdownTrigger ),
					$dropdown = $dropdownParent.children( selectors.dropdown ),
					$megamenu = $dropdownParent.children( selectors.megamenu ),
					$activeDropdowns = $el.find( selectors.activeDropdowns );

				$dropdownParent.removeClass( classes.navActive );
				$dropdownTrigger.attr( 'aria-expanded', false );
				$dropdown.removeClass( classes.dropdownOpen ).attr( 'aria-hidden', true );
				$megamenu.removeClass( classes.megamenuOpen ).attr( 'aria-hidden', true );
				self.$header.removeClass( classes.headerMegamenuOpen );
				$body.off( 'touchstart' + self.namespace );

				var hasActiveDropdown = !$dropdownParent.parents( selectors.dropdownParents ).hasClass( classes.navActive );

				// Reset collapsible dropdowns to their initial state
				if ( hasActiveDropdown ) {
					hideActiveCollapsibleDropdowns( $activeDropdowns );
					self.activeDropdownsClose = setTimeout( function() {
						hideActiveCollapsibleDropdowns( $activeDropdowns )
					}, 500);
				}
			}

			function hideActiveCollapsibleDropdowns( $activeDropdowns ) {
				$activeDropdowns
					.removeClass( classes.isExpanded )
					.filter( selectors.dropdownCollapsible )
					.css( 'height', 0 );
			}
		},

		dropdownFix: function( $el ) {
			if ( !$el.hasClass( classes.dropdownParents ) ) return;

			var self = this,
				$dropdownMenu = $el.find( selectors.dropdown ).removeClass( classes.dropdownRight ),
				$dropdownSubmenu = $el.find( selectors.dropdownSubmenu ).removeClass( classes.dropdownSubmenuLeft ),
				elementOffset = $el.offset().left;

			if ( !$dropdownMenu.length ) return;

			var dropdownMenuWidth = $dropdownMenu.outerWidth() + 20,
				dropdownSubmenuWidth = $dropdownSubmenu.length ? $dropdownSubmenu.outerWidth() : 0,
				headerWidth = self.$header.width() + self.$headerWrapper.offset().left;

			if ( parseInt(elementOffset + dropdownMenuWidth ) > headerWidth ) {
				$dropdownMenu.addClass( classes.dropdownRight );
			}

			if ( parseInt( elementOffset + dropdownMenuWidth + dropdownSubmenuWidth ) > headerWidth ) {
				$dropdownSubmenu.addClass( classes.dropdownSubmenuLeft );
			}
		},

		initMobileNav: function() {
			if ( window.settings.mobileMenuBehaviour == 'link' ) return;

			$( selectors.mobileNavLink ).on( 'click', function(e) {
				var hasDropdown = $(this).hasClass( classes.mobileNavDropdownTrigger ),
					$dropdownTrigger = $(this).next( selectors.mobileNavDropdownTrigger );

				if ( hasDropdown ) {
					e.preventDefault();
					$dropdownTrigger.trigger( 'click' );
				}
			});
		},

		initDrawers: function () {
			var $openNavDrawer = $( selectors.openNavDrawer, this.$container ),
				$openCartDrawer = $( selectors.openCartDrawer, this.$container ),
				$closeNavDrawer = $( selectors.closeDrawer, this.$navDrawer ),
				$closeCartDrawer = $( selectors.closeDrawer, this.$cartDrawer );

			PaloAlto.Drawers.initCloseListener();
			PaloAlto.Drawers.initOpenListener( $openNavDrawer );

			$body
				.on( 'NavDrawer:open' + this.namespace, function() {
					$closeNavDrawer.trigger( 'focus' );
				})
				.on( 'NavDrawer:close' + this.namespace, function() {
					var isFocusVisible = $body.hasClass( classes.jsFocusVisible );
					if ( isFocusVisible ) {
						$openNavDrawer.trigger( 'focus' );
					}
				});

			if ( window.settings.cartType == 'drawer' ) {
				PaloAlto.Drawers.initOpenListener( $openCartDrawer );
				$body
					.on( 'CartDrawer:open' + this.namespace, function() {
						var isCartLoaded = !!$( selectors.cartContainer ).html();

						if ( !isCartLoaded ) ajaxCart.load();

						$closeCartDrawer.trigger( 'focus' );
					})
					.on( 'CartDrawer:close' + this.namespace, function() {
						var isFocusVisible = $body.hasClass( classes.jsFocusVisible );
						if ( isFocusVisible ) {
							$openCartDrawer.trigger( 'focus' );
						}
					});
			}
		},

		onUnload: function() {
			$window.off( this.namespace );
			$body
				.off( this.namespace )
				.removeClass( classes.jsDrawerOpenAll );
			ajaxCart.destroy();
		}
	});

	return Header;
})();
PaloAlto.IconsRow = (function() {
	function IconsRow(container) {
		var self = this,
				$container = this.$container = $(container),
				$slider = this.$slider = $container.find('.icons-row__slider');

		this.checkSlides();

		$(window)
			.on( 'load', self.resizeSlider.bind(self) )
			.on('resize', $.throttle(150, self.checkSlides.bind(self) ));
	}

	IconsRow.prototype = $.extend({}, IconsRow.prototype, {
		checkSlides: function() {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth;

			if ( windowWidth < 768 ) {
				this.initSlider();
			} else {
				this.destroySlider();
			}
		},

		// slider height fix on window load
		resizeSlider: function() {
			var hasSlider = this.$slider.hasClass( 'flickity-enabled' );

			if ( hasSlider ) {
				this.$slider.flickity( 'resize' );
			}
		},

		initSlider: function() {
			var slidesCount = this.$slider.find( '.icons-row__item' ).length;

			if ( !this.$slider.data('flickity') && slidesCount > 1 ) {
				this.$slider.flickity({
					contain: true,
					wrapAround: true,
					pageDots: true,
					adaptiveHeight: true,
					arrowShape: {
						x0: 0,
						x1: 45, y1: 50,
						x2: 50, y2: 50,
						x3: 5
					}
				});

				// iOS smooth scrolling fix
				PaloAlto.flickitySmoothScrolling( this.$slider );
			}
		},

		destroySlider: function() {
			if ( this.$slider.data('flickity') ) {
				this.$slider.flickity('destroy');
			}
		},

		onBlockSelect: function(evt) {
			var $slider = $(evt.target).parents('.icons-row__slider');
			var index = $(evt.target).index();

			if ( $slider.data('flickity') ) {
				$slider.flickity('select', index);
			}
		},

		onUnload: function(evt) {
			var $slider = $(evt.target).parents('.icons-row__slider');

			if ( $slider.data('flickity') ) {
				$slider.flickity('destroy');
			}
		}
	});

	return IconsRow;
})();
PaloAlto.ImageColumns = (function() {

	function ImageColumns(container) {
		var $container = this.$container = $(container);
		this.init();
	}

	ImageColumns.prototype = $.extend({}, ImageColumns.prototype, {

		/* Init function */
		init: function() {
			var $dots = this.$container.find( '.image-column__dot' );

			$dots.each( function() {
				var $dot = $(this);

				if ( $dot.data('left') < 25 ) {
					$dot.addClass( 'image-column__dot--end' );
				} else if ( $dot.data('left') > 50 && $dot.data('left') <= 75 ) {
					$dot.addClass( 'image-column__dot--reverse' );
				} else if ( $dot.data('left') > 75 ) {
					$dot.addClass( 'image-column__dot--reverse image-column__dot--reverse-end' );
				}

				if ( $dot.data('top') < 35 ) {
					$dot.addClass( 'image-column__dot--bottom' );
				}
			});
		}
	});

	return ImageColumns;
})();
PaloAlto.ListCollections = (function() {

	function ListCollections(container) {
		var self = this;
		this.$container = $( container );
		this.$slider = $( '.js-list-collections__slider', this.$container );
		this.checkSlidesSize();

		$(window).on('resize', PaloAlto.debounce(self.checkSlidesSize.bind(self), 250));
	}

	ListCollections.prototype = $.extend({}, ListCollections.prototype, {
		checkSlidesSize: function() {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth,
				columns = this.$slider.data( 'columns' ),
				slidesCount = this.$slider.find( '.list-collections__slide' ).length;

			// Center columns and remove slider if the columns are more than the slides
			if ( slidesCount > columns && windowWidth >= 768 ) {
				this.$slider.removeClass( 'list-collections__slider--center' );

				if ( !this.$slider.data( 'flickity' ) ) {
					this.$slider.flickity({
						pageDots: false,
						cellAlign: 'left',
						contain: true,
						groupCells: true,
						arrowShape: {
							x0: 20,
							x1: 65, y1: 35,
							x2: 70, y2: 30,
							x3: 30
						}
					});

					// iOS smooth scrolling fix
					PaloAlto.flickitySmoothScrolling( this.$slider );
				} else {
					this.$slider.flickity( 'resize' );
				}
			} else {
				this.$slider.addClass( 'list-collections__slider--center' );

				if ( this.$slider.data( 'flickity' ) ) {
					this.$slider.flickity( 'destroy' );
				}
			}
		},
		onBlockSelect: function(evt) {
			var $slider = $( evt.target ).parents( '.js-list-collections__slider' ),
				sliderData = $slider.data( 'flickity' );

			if ( sliderData ) {
				var index = parseInt( $( evt.target ).index() ),
					slidesPerPage = parseInt( sliderData.slides[0].cells.length ),
					groupIndex = Math.floor( index / slidesPerPage );

				$slider.flickity( 'select', groupIndex );
			}
		}
	});

	return ListCollections;
})();
PaloAlto.LogoList = (function() {
	function LogoList(container) {
		var self = this;
		var $container = self.$container = $(container);
		var $slider = self.$slider = $container.find('.logo-list__slider');

		self.checkSlides(self);

		$(window).on('resize', $.throttle(150, function() {
			self.checkSlides(self)
		}));
	}

	LogoList.prototype = $.extend({}, LogoList.prototype, {
		checkSlides: function(self) {
			var sliderWidth = self.$slider.width();
			var slideWidth = self.$slider.find('.logo-list__slide').outerWidth();
			var slideCount = self.$slider.find('.logo-list__slide').length;

			if ( slideCount * slideWidth > sliderWidth ) {
				self.initSlider(self);
			} else {
				self.destroySlider(self);
			}
		},

		initSlider: function(self) {
			if ( !self.$slider.data('flickity') ) {
				self.$slider.flickity({
					contain: true,
					wrapAround: true,
					pageDots: false,
					arrowShape: {
						x0: 0,
						x1: 45, y1: 50,
						x2: 50, y2: 50,
						x3: 5
					}
				});

				// iOS smooth scrolling fix
				PaloAlto.flickitySmoothScrolling( self.$slider );
			}
		},

		destroySlider: function(self) {
			if ( self.$slider.data('flickity') ) {
				self.$slider.flickity('destroy');
			}
		},

		onBlockSelect: function(evt) {
			var $slider = $(evt.target).parents('.logo-list__slider');
			var index = $(evt.target).index();

			if ( $slider.data('flickity') ) {
				$slider.flickity('select', index);
			}
		},

		onUnload: function(evt) {
			var $slider = $(evt.target).parents('.logo-list__slider');

			if ( $slider.data('flickity') ) {
				$slider.flickity('destroy');
			}
		}
	});

	return LogoList;
})();
PaloAlto.Map = (function() {
	var apiStatus = null,
		mapsToLoad = [];

	function Map(container) {
		this.$container = $(container);

		var instance = this,
			key = this.$container.data( 'api-key' );

		if (typeof key !== 'string' || key === '') {
			return;
		}

		if (apiStatus === 'loaded') {
			// Check if the script has previously been loaded with this key
			var $script = $('script[src*="' + key + '&"]');
			if ($script.length === 0) {
				$.getScript(
					'https://maps.googleapis.com/maps/api/js?key=' + key
				).then(function() {
					apiStatus = 'loaded';
					instance.createMap();
				});
			} else {
				this.createMap();
			}
		} else {
			mapsToLoad.push(this);
			if (apiStatus !== 'loading') {
				apiStatus = 'loading';
				if (typeof window.google === 'undefined') {
					$.getScript(
						'https://maps.googleapis.com/maps/api/js?key=' + key
					).then(function() {
						apiStatus = 'loaded';
						initAllMaps();
					});
				}
			}
		}
	}

	// API has loaded, load all Map instances in queue
	function initAllMaps() {
		$.each(mapsToLoad, function(index, instance) {
			instance.createMap();
		});
	}

	function geolocate($map) {
		var deferred = $.Deferred(),
			geocoder = new google.maps.Geocoder(),
			defaultAddress = '37.4439064, -122.1639733',
			address = $map.data('address') || defaultAddress;

		geocoder.geocode({ address: address }, function(results, status) {
			if (status !== google.maps.GeocoderStatus.OK) {
				deferred.reject(status);
			}

			deferred.resolve(results);
		});

		return deferred;
	}

	Map.prototype = $.extend({}, Map.prototype, {
		createMap: function() {
			var style = this.$container.data('style'),
				zoom = this.$container.data('zoom'),
				id = this.$container.data('section-id'),
				$map = $( '.map--' + id );

			var standard =[];
			var silver =[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
			var retro =[{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}];
			var dark =[{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}];
			var night =[{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}];
			var aubergine =[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}];

			var styles = '';
			if ( style == 'standard' ){
				styles = standard;
			} else if (style == 'silver') {
				styles = silver;
			} else if (style == 'retro') {
				styles = retro;
			} else if (style == 'dark') {
				styles = dark;
			} else if (style == 'night') {
				styles = night;
			} else {
				styles = aubergine;
			}

			return geolocate($map)
				.then(
					function(results) {
						var mapOptions = {
							zoom: zoom,
							styles: styles,
							center: results[0].geometry.location,
							avigationControl: false,
							mapTypeControl: false,
							scaleControl: false,
							draggable: false,
							clickableIcons: false,
							scrollwheel: false,
							zoomControl: true,
							disableDefaultUI: true
						};

						var map = (this.map = new google.maps.Map($map[0], mapOptions));
						var center = (this.center = map.getCenter());

						//eslint-disable-next-line no-unused-vars
						var marker = new google.maps.Marker({
							map: map,
							position: center
						});

						google.maps.event.addDomListener(window, 'resize', function() {
							google.maps.event.trigger(map, 'resize');
							map.setCenter(center);
						});
					}.bind(this)
				);
		}
	});

	return Map;
})();
PaloAlto.Popup = (function() {

	function Popup(container) {
		var $container = this.$container = $( container ),
			$popup = $container.find( '#popup' ),
			modalDelay = parseInt( $popup.data( 'delay' ) ),
			reappearTime = parseInt( $popup.data( 'reappear-time' ) ),
			testMode = $popup.data('testmode');

		if (testMode) {
			showModal(modalDelay);
		} else {
			//If cookie doesn't exist or it's expired
			if (Cookies.get('newsletter_delay') === undefined || reappearTime == 0){
				showModal(modalDelay);
				createCookie(reappearTime);
			}
		}

		function showModal(modalDelay){
			if ( this.showModalDelayed != null ) {
				clearTimeout( this.showModalDelayed );
			}

			//Only show if it hasn't already been shown during that browser session
			if (sessionStorage.name != "popup_shown" && $('html').hasClass('lt-ie9') == false){

				this.showModalDelayed = setTimeout(function() {
					$popup.modal();
					$popup.addClass( 'popup--visible' );
					truncateText();
				}, modalDelay);
				$('.close-modal').append('<i class="custom-icon-x"></i>');

				// Safari Private Browsing Mode shiv
				if (typeof localStorage === 'object') {
					try {
						localStorage.setItem('localStorage', 1);
						localStorage.removeItem('localStorage');
						sessionStorage.name = "popup_shown";

					} catch (e) {
						Storage.prototype._setItem = Storage.prototype.setItem;
						Storage.prototype.setItem = function() {};
					}
				}
			}  else if (testMode) {
				this.showModalDelayed = setTimeout(function() {
					$popup.modal();
					$popup.addClass( 'popup--visible' );
					truncateText();
				}, modalDelay);
				$('.close-modal').append('<i class="custom-icon-x"></i>');
			}

			$(window).on( 'resize', PaloAlto.debounce(truncateText, 250) );
		};

		function createCookie(reappearTime){
			if (reappearTime != 0){
				Cookies.set('newsletter_delay', 'value', { expires: reappearTime });
			}
		};

		function truncateText() {
			$popup.find( '.popup__text' ).trunk8({
				lines: 5
			});
		}

		// Allow body scrolling
		$( document ).on( 'modal:block', function() {
			$( 'body' ).css( 'overflow', '' );
		});

		$.modal.defaults = {
			escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
			clickClose: true,       // Allows the user to close the modal by clicking the overlay
			closeText: " ",         // Text content for the close <a> tag.
			closeClass: 'close-modal', // Add additional class(es) to the close <a> tag.
			showClose: true,        // Shows a (X) icon/link in the top-right corner
			modalClass: "modal",    // CSS class added to the element being displayed in the modal.
			spinnerHtml: null,      // HTML appended to the default spinner during AJAX requests.
			showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
			fadeDuration: 250,      // Number of milliseconds the fade transition takes (null means no transition)
			fadeDelay: .5           // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
		};
	}

	Popup.prototype = $.extend({}, Popup.prototype, {
		/**
		 * Event callback for Theme Editor `section:select` event
		 */
		onUnload: function() {
			$( '#popup' ).add( '.jquery-modal' ).remove();

			if ( this.showModalDelayed != null ) {
				clearTimeout( this.showModalDelayed );
			}
		}
	});

	return Popup;
})();
PaloAlto.Press = (function() {

	function Press(container) {
		var self = this;

		this.$container = $(container),
		this.$slider = this.$container.find( '.press__items' ),
		this.$sliderNav = this.$container.find( '.press__logos-slider' );

		this.initSlider();

		$(window).on( 'load', self.resizeSlider.bind(self) );
	}

	Press.prototype = $.extend({}, Press.prototype, {

		/* Init slider */
		initSlider: function() {
			var $slider = this.$slider,
				$sliderNav = this.$sliderNav,
				slidesCount = $slider.data( 'count' );

			$slider.flickity({
				wrapAround: true,
				adaptiveHeight: true,
				prevNextButtons: false,
				pageDots: false
			});

			// iOS smooth scrolling fix
			PaloAlto.flickitySmoothScrolling( $slider );

			if ( slidesCount > 2 ) {

				$sliderNav.flickity({
					wrapAround: true,
					initialIndex: 2,
					imagesLoaded: true,
					lazyLoad: true,
					asNavFor: $slider[0],
					prevNextButtons: false,
					pageDots: false
				});

				// Trigger text change on image move/drag
				$sliderNav.on( 'change.flickity', function( event, pointer ) {
					var flkty = $sliderNav.data( 'flickity' );
					var index = flkty.selectedIndex;
					$slider.flickity( 'selectCell', index );
				});

				// Trigger text change on image move/drag
				$slider.on( 'change.flickity', function( event, pointer ) {
					var flkty = $slider.data( 'flickity' );
					var index = flkty.selectedIndex;
					$sliderNav.flickity( 'selectCell', index );
				});
			} else {
				$sliderNav.on( 'click', '.press__logo', function() {
					var index = $(this).index();

					$(this).addClass( 'is-selected' ).siblings().removeClass( 'is-selected' );
					$slider.flickity( 'selectCell', index );
				});

				$slider.on( 'change.flickity', function( event, pointer ) {
					var flkty = $slider.data( 'flickity' );
					var index = flkty.selectedIndex;
					$sliderNav.find( '.press__logo' ).eq( index ).addClass( 'is-selected' ).siblings().removeClass( 'is-selected' );
				});
			}
		},

		// slider height fix on window load
		resizeSlider: function() {
			var hasSlider = this.$slider.hasClass( 'flickity-enabled' );

			if ( hasSlider ) {
				this.$slider.flickity( 'resize' );
			}
		},

		onBlockSelect: function(evt) {
			var $slider = $( evt.target ).parents( '.press__items' ),
				$sliderNav = $( evt.target ).parents( '.press__logos-slider' ),
				index = $( evt.target ).index();

			if ( $slider.data( 'flickity' ) ) {
				$slider.flickity( 'select', index );
			}

			if ( $sliderNav.data( 'flickity' ) ) {
				$sliderNav.flickity( 'select', index );
			}
		}
	});

	return Press;
})();
PaloAlto.Product = (function() {
	function Product(container) {
		if ( $(container).hasClass( 'featured-product--onboarding' ) ) return;
		var self = this;

		this.$container = $(container);
		this.sectionId = $(container).data( 'section-id' );
		this.product = JSON.parse(document.getElementById('ProductJson-' + this.sectionId).innerHTML);
		this.enableHistoryState = !this.$container.hasClass( 'featured-product' );
		this.isFlickityDragging = false;
		this.selectors = {
			addToCart: '[data-add-to-cart]',
			addToCartText: '[data-add-to-cart-text]',
			productPrice: '[data-product-price]',
			comparePrice: '[data-compare-price]',
			unitPrice: '[data-unit-price]',
			unitBase: '[data-unit-base]',
			unitWrapper: '[data-unit-wrapper]',
			priceWrapper: '[data-price-wrapper]',
			productFormWrapper: '[data-product-form-wrapper]',
			productForm: '.product-form',
			productMediaSlider: '[data-product-single-media-slider]',
			productMediaWrapper: '[data-product-single-media-wrapper]',
			productMediaThumbs: '[data-product-single-media-thumbs]',
			productMediaThumb: '[data-thumbnail-id]',
			productBadge: '[data-product-badge]',
			productVideo: '[data-product-media-type-video]',
			productModel: '[data-product-media-type-model]',
			productImageLightbox: '[data-mfp-src]',
			productImageZoom: '[data-zoom]',
			notificationForm: '[data-notification-form]',
			originalSelectorId: '[data-product-select]',
			singleOptionSelector: '[data-single-option-selector]',
			storeAvailabilityContainer: '[data-store-availability-container]'
		};

		this.storeAvailabilityContainer = container.querySelector(
			this.selectors.storeAvailabilityContainer
		  );

		if (this.storeAvailabilityContainer) {
			this.storeAvailability = new PaloAlto.StoreAvailability(
			  this.storeAvailabilityContainer
			);
		}

		var options = {
			$container: this.$container,
			enableHistoryState: this.enableHistoryState,
			singleOptionSelector: this.selectors.singleOptionSelector,
			originalSelectorId: this.selectors.originalSelectorId,
			product: this.product,
			storeAvailability: this.storeAvailability
		};

		this.namespace = '.product';
		this.variants = new slate.Variants(options);

		this.$container.on('variantChange' + this.namespace, this.updateAddToCartState.bind(this));
		this.$container.on('variantPriceChange' + this.namespace, this.updateProductPrices.bind(this));
		this.$container.on('variantUnitChange' + this.namespace, this.updateProductUnits.bind(this));
		this.$container.on('variantImageChange' + this.namespace, this.updateProductImage.bind(this));

		ajaxCart.init({
			namespace: '.ajaxCart' + this.sectionId,
			formSelector: '#AddToCartForm--' + this.sectionId,
			cartContainer: '#CartContainer',
			addToCartSelector: '#AddToCart--' + this.sectionId,
			cartCountSelector: '.CartCount',
			cartCostSelector: '#CartCost',
			moneyFormat: window.moneyFormat
		});

		PaloAlto.initListeners();
		PaloAlto.initCollapsible();
		PaloAlto.videoLink();

		$( this.selectors.productForm, this.$container ).removeClass( 'product-form--is-loading' );

		this.initProductSlider();
		this.initProductImageGallery();
		this.initMediaSwitch();
		this.initProductVideo();
		this.initModelViewerLibraries();
		this.initShopifyXrLaunch();
		this.initCheckoutButtons();

		if ( this.$container.hasClass( 'featured-product' ) ) {
			this.initThumbs();
			this.setBadgePosition();

			$(window).on( 'resize.' + this.sectionId, PaloAlto.debounce( self.setBadgePosition.bind(self), 250));
			$(window).on( 'resize.' + this.sectionId, PaloAlto.debounce( self.initThumbs.bind(self), 250));
		}
	}

	Product.prototype = $.extend({}, Product.prototype, {
		updateAddToCartState: function(evt) {
			var variant = evt.variant;

			if ( variant ) {
				if ( variant.available ) {
					$( this.selectors.addToCart, this.$container ).prop( 'disabled', false );
					$( this.selectors.addToCartText, this.$container ).html( window.translations.add_to_cart );
					$( this.selectors.notificationForm, this.$container ).addClass( 'visually-hidden' );
				} else {
					$( this.selectors.addToCart, this.$container ).prop('disabled', true);
					$( this.selectors.addToCartText, this.$container ).html( window.translations.sold_out );
					$( this.selectors.notificationForm, this.$container ).removeClass( 'visually-hidden' );
				}
			} else {
				$( this.selectors.addToCart, this.$container ).prop('disabled', true);
				$( this.selectors.addToCartText, this.$container ).html( window.translations.unavailable );
				$( this.selectors.notificationForm, this.$container ).removeClass( 'visually-hidden' );
			}

			if ( !variant ) return;
		},

		updateProductPrices: function(evt) {
			var variant = evt.variant,
				$comparePrice = $( this.selectors.comparePrice, this.$container ),
				$productPrice =  $( this.selectors.productPrice, this.$container );

			// Update product price
			$( this.selectors.productPrice, this.$container ).html( slate.Currency.formatMoney(variant.price, window.moneyFormat));

			// Update sale price
			if ( variant.compare_at_price > variant.price ) {
				$comparePrice
					.html( slate.Currency.formatMoney(variant.compare_at_price, window.moneyFormat) )
					.removeClass('hide');
				$productPrice.addClass('product__price--sale');
			} else {
				$comparePrice
					.html('')
					.addClass('hide');
				$productPrice.removeClass('product__price--sale');
			}
		},

		updateProductUnits: function(evt) {
			var variant = evt.variant;

			if (typeof variant.unit_price !== 'undefined'){
				var price = slate.Currency.formatMoney(variant.unit_price, window.moneyFormat),
					base = this.getBaseUnit(variant);

				$( this.selectors.unitPrice, this.$container ).html( price );
				$( this.selectors.unitBase, this.$container ).html( base );
				$( this.selectors.unitWrapper, this.$container ).show()
			} else{
				$( this.selectors.unitWrapper, this.$container ).hide()
			}
		},

		getBaseUnit: function(variant) {
			return variant.unit_price_measurement.reference_value === 1
				? variant.unit_price_measurement.reference_unit
				: variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
		},

		updateProductImage: function(evt) {
			var variant = evt.variant,
				variantMediaId = variant.featured_media ? variant.featured_media.id : '',
				$imgSlider = $( this.selectors.productMediaSlider, this.$container ),
				flick = $imgSlider.data('flickity');

			// Activate image slide in mobile view
			if ( flick && flick.isActive) {
				var $variantSlide = $imgSlider.find( '[data-id="' + variantMediaId + '"]' );

				if ($variantSlide.index() != -1) {
					flick.select($variantSlide.index());
				}
			}
		},

		/* Product Slider */
		initProductSlider: function() {
			var self = this,
				$slider = $( this.selectors.productMediaSlider, this.$container ),
				$thumbs = $( this.selectors.productMediaThumbs , this.$container ),
				hasSlides = $( this.selectors.productMediaWrapper, this.$container ).length > 1,
				isDraggable = !( $( this.selectors.productVideo, this.$container ).length || $( this.selectors.productModel, this.$container ).length);

			if (hasSlides) {
				$slider
					.on( 'ready.flickity', function( event, pointer, moveVector ) {
						$slider.attr( 'tabindex', '-1' );
					})
					.on( 'dragMove.flickity', function( event, pointer, moveVector ) {
						// Prevent lightbox trigger on dragMove
						self.isFlickityDragging = true;
					})
					.on( 'staticClick.flickity', function( event, pointer, moveVector ) {
						// Allow lightbox trigger on staticClick
						self.isFlickityDragging = false;
					})
					.on( 'settle.flickity', function( event, index ) {
						var $currentSlide = $slider.find( self.selectors.productMediaWrapper ).eq( index ),
							mediaId = $currentSlide.data( 'media-id' );

						$currentSlide.has( '.product-single__media--image' ).attr( 'tabindex', '0' ).siblings().attr( 'tabindex', '-1' );

						self.switchMedia( mediaId );
					})
					.flickity({
						wrapAround: true,
						pageDots: false,
						adaptiveHeight: true,
						draggable: isDraggable,
						arrowShape: {
							x0: 20,
							x1: 65, y1: 35,
							x2: 70, y2: 30,
							x3: 30
						}
					});

				// iOS smooth scrolling fix
				PaloAlto.flickitySmoothScrolling( $slider );

				$thumbs.on( 'ready.flickity', function() {
					$thumbs.attr( 'tabindex', '-1' );
				});

				$thumbs.flickity({
					asNavFor: $slider[0],
					contain: true,
					pageDots: false,
					prevNextButtons: false
				});

				// Disable link click
				$thumbs.on( 'click', '.product-single__thumbnail-link', function(e) {
					e.preventDefault();
				});
			}
		},

		handleMediaFocus: function( e ) {
			// Do nothing if not ENTER key (13) or TAB key (9)
			if (e.keyCode !== 13 && e.keyCode !== 9) return;

			var mediaId = $(e.currentTarget).data( 'thumbnail-id' ),
				slideIndex = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]', this.$container ).index(),
				flick = $( this.selectors.productMediaSlider, this.$container ).data('flickity'),
				flickNav = $( this.selectors.productMediaThumbs, this.$container ).data('flickity');

			// Go to the related slide media
			if (flick && flick.isActive && slideIndex > -1 && e.keyCode === 13 ) {
				flick.select( slideIndex );
			}

			// Move thumbs to the selected one
			if (flickNav && flickNav.isActive && slideIndex > -1 ) {
				flickNav.select( slideIndex );
			}
		},

		switchMedia: function( mediaId ) {
			var $currentMedia = $( this.selectors.productMediaWrapper + ':not(.media--hidden)', this.$container ),
				$newMedia = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]', this.$container ),
				$otherMedia = $( this.selectors.productMediaWrapper + ':not([data-media-id="' + mediaId + '"])', this.$container ),
				isFocusEnabled = !$( 'body' ).hasClass( 'no-outline' );

			if ( isFocusEnabled ) $newMedia.focus();

			$currentMedia.trigger( 'mediaHidden' );
			$newMedia.removeClass( 'media--hidden' ).trigger( 'mediaVisible' );
			$otherMedia.addClass( 'media--hidden' );
		},

		initMediaSwitch: function() {
			var self = this,
				$productThumbImages = $( this.selectors.productMediaThumb, this.$container );

			if (!$productThumbImages.length) return;

			$productThumbImages
				.on( 'click', function(e) {
					e.preventDefault();
				})
				.on( 'keyup', self.handleMediaFocus.bind(self) );
		},

		initProductVideo: function() {
			var sectionId = this.sectionId;
			$( this.selectors.productVideo, this.$container ).each(function() {
				var $video = $(this);
				PaloAlto.ProductVideo.init($video, sectionId);
			});
		},

		initModelViewerLibraries: function() {
			var $modelViewerElements = $( this.selectors.productModel, this.$container );

			if ($modelViewerElements.length < 1) return;

			PaloAlto.ProductModel.init($modelViewerElements, this.sectionId);
		},

		initShopifyXrLaunch: function() {
			var self = this;

			$(document).on('shopify_xr_launch', function() {
				var $currentMedia = $( self.selectors.productMediaWrapper + ':not(.hide)', self.$container );
				$currentMedia.trigger( 'xrLaunch' );
			});
		},

		initCheckoutButtons: function() {
			var $dynamicButton = this.$container.find( '.shopify-payment-button' );
			var isSoldout = this.$container.find( '#AddToCart--' + this.sectionId ).hasClass( 'disabled' )

			if ( isSoldout ) {
				$dynamicButton.hide();
			} else {
				$dynamicButton.show();
			}
		},

		initProductImageGallery: function() {
			var self = this;
			$( this.selectors.productMediaWrapper, this.$container ).each(function() {
				var $productImage = $(this),
					$productImageZoom = $( self.selectors.productImageZoom, $productImage ),
					$productImageLightbox = $( self.selectors.productImageLightbox, $productImage ),
					hasZoom = $productImageZoom.length,
					hasLightbox = $productImageLightbox.length;

				if ( hasLightbox ) {
					// Lightbox
					$( self.selectors.productImageLightbox, $productImage ).magnificPopup({
						type: 'image',
						mainClass: 'mfp-fade',
						closeOnBgClick: true,
						closeBtnInside: false,
						closeOnContentClick: false,
						tClose: 'Close (Esc)',
						removalDelay: 300,
						closeMarkup: '<button title="%title%" class="mfp-close"><i class="custom-icon-x mfp-icon-x"></i></button>',
						disableOn: function() {
							if( $(window).width() < 768 || self.isFlickityDragging) {
								return false;
							}
							return true;
						},
						gallery: {
							enabled: true,
							navigateByImgClick: false,
							arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="mfp-chevron mfp-chevron-%dir%"></span></button>',
							tPrev: 'Previous (Left arrow key)',
							tNext: 'Next (Right arrow key)'
						}
					});

					// Close popup on resize or device rotate if screen size is < 768px
					$(window).on( 'resize.product', PaloAlto.debounce( function() {
						var windowWidth = window.innerWidth || document.documentElement.clientWidth;

						if ( windowWidth < 768 ) {
							$.magnificPopup.close();
						}
					}, 250));
				} else if ( hasZoom ) {
					// Zoom
					enquire.register("screen and (min-width: 768px)", {
						match: function() {
							$productImageZoom.parent().zoom({
								magnify: 1.5,
								duration: 300,
								url: $productImageZoom.data('zoom'),
								target: $productImageZoom.parent(),
								callback: function() {
									var forceZoomRatio = 1.5,
										originalImgWidth = this.width,
										originalImgHeight = this.height,
										imageAspectRatio = $productImageZoom.data( 'aspectratio' ),
										containerWidth = $productImageZoom.parent().width(),
										containerHeight = $productImageZoom.parent().height();

									if (originalImgWidth < containerWidth) {
										$(this).width(containerWidth * forceZoomRatio);
										$(this).height(containerWidth / imageAspectRatio * forceZoomRatio);
									} else if (originalImgHeight < containerHeight) {
										$(this).width(containerHeight * imageAspectRatio * forceZoomRatio);
										$(this).height(containerHeight * forceZoomRatio);
									}
								},
								onZoomIn: function() {
									$(this).parent().addClass('zoomed');
								},
								onZoomOut: function() {
									$(this).parent().removeClass('zoomed');
								}
							});
						}
					});
				}
			});
		},

		initThumbs: function() {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth,
				isOneColumn = this.$container.hasClass( 'featured-product--one-column' ),
				$slider = $( this.selectors.productMediaSlider, this.$container ),
				$thumbs = $( this.selectors.productMediaThumbs , this.$container );

			if ( isOneColumn && windowWidth >= 1024 ) {

				// Destroy thumbs slider if enabled
				if ( $thumbs.data( 'flickity' ) ) {
					$thumbs.flickity( 'destroy' );
				}

				// Change slider image on thumb click
				$thumbs.on( 'click', this.selectors.productMediaThumb, function() {
					var index = $(this).index();
					$slider.flickity( 'select', index );
				});
			} else {
				$thumbs.off( 'click', this.selectors.productMediaThumb );
				$thumbs.flickity({
					asNavFor: $slider[0],
					contain: true,
					pageDots: false,
					prevNextButtons: false
				});

				// iOS smooth scrolling fix
				PaloAlto.flickitySmoothScrolling( $thumbs );
			}
		},

		setBadgePosition: function() {
			$( this.selectors.productBadge, this.$container ).each( function() {
				var $productBadge = $(this),
					$imageContainer = $(this).parent(),
					imageAspectRatio = $imageContainer.data( 'aspectratio' ),
					containerAspectRatio = $imageContainer.width() / $imageContainer.height(),
					productBadgeLeftPosition = 0;

				if ( imageAspectRatio < containerAspectRatio ) {
					productBadgeLeftPosition = parseInt( ( $imageContainer.width() - $imageContainer.height() * imageAspectRatio ) / 2 );
				}
				$productBadge.css( 'left', productBadgeLeftPosition )
			});
		},

		onUnload: function() {
			$(window).off( 'resize.' + this.sectionId );
		}
	});

	return Product;
})();
PaloAlto.RelatedProducts = (function() {
	function RelatedProducts(container) {
		this.$container = $(container);
		this.$relatedSection = $( '[data-related-products]' );
		this.init();
	}
	RelatedProducts.prototype = $.extend({}, RelatedProducts.prototype, {
		init: function() {
			var self = this,
				$relatedSection = this.$relatedSection,
				productId = $relatedSection.data( 'product-id' ),
				limit = $relatedSection.data('limit'),
				productGridSlideshow = $relatedSection.data( 'product-grid-slideshow' ),
				requestUrl = window.routes.product_recommendations_url + "?section_id=related-products&limit=" + limit + "&product_id=" + productId;

			$.get(requestUrl)
				.done(function(data) {
					var inner = $( data ).find( '[data-related-products]' ).html();
					$relatedSection.hide().html( inner ).slideDown( 'slow' );

					// Show sale/sold out tags
					PaloAlto.Badge.setPosition();
					$(window).on('resize', PaloAlto.debounce( PaloAlto.Badge.setPosition, 250));

					PaloAlto.initQuickButton( self.$container );
					PaloAlto.initReviews();

					if ( productGridSlideshow ) {
						self.productGridSlideshow();
					}
				});
		},
		productGridSlideshow: function() {
			var $productGridSlider = this.$relatedSection.find( '.product__media-slider' );

			$productGridSlider.each( function() {
				var countImages = $( this ).find( '.product__media' ).length;

				if ( countImages > 1 ) {
					$( this ).flickity({
						cellSelector: '.product__media-slide',
						contain: true,
						wrapAround: true,
						imagesLoaded: true,
						lazyLoad: true,
						pageDots: false,
						adaptiveHeight: false,
						arrowShape: {
							x0: 0,
							x1: 45, y1: 50,
							x2: 50, y2: 50,
							x3: 5
						}
					});
				}
			});

			// Prevent page redirect on slideshow arrow click
			this.$relatedSection.on( 'click', '.product-grid-item__image', function(e) {
				if ( $(e.target).is( '.flickity-button, .flickity-button *' ) ) {
					e.preventDefault();
				}
			});
		}
	});
	return RelatedProducts;
})();
PaloAlto.StoreAvailability = (function() {
	var selectors = {
		body: 'body',
		storeAvailabilityModal: '[data-store-availability-modal]',
		storeAvailabilityModalOpen: '[data-store-availability-modal-open]',
		storeAvailabilityModalProductTitle: '[data-store-availability-modal-product-title]',
		storeAvailabilityUnitSystem: '[data-unit-system]',
		storeAvailabilityLocationDistance: '[data-distance]',
		storeAvailabilityDistanceUnit: '[data-distance-unit]'
	};
	var classes = {
		hidden: 'visually-hidden'
	}

	function StoreAvailability(container) {
		this.container = container;
	}

	StoreAvailability.prototype = Object.assign({}, StoreAvailability.prototype, {
		updateContent: function(variantId, productTitle) {
			var options = {
				maximumAge: 3600000, // 1 hour
				timeout: 5000
			};
			var self = this;
			// Not all browsers have geolocation API
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					// success callback
					function(position) {
						self._useGeolocation(position, variantId, productTitle);
					},
					// failure callback
					function() {
						self._fetchStoreAvailabilities(variantId, productTitle);
					},
					options
				);
			} else {
				this._fetchStoreAvailabilities(variantId, productTitle);
			}
		},

		clearContent: function() {
			this.container.innerHTML = '';
		},

		_initModal: function() {
			return new PaloAlto.Modals(
				'StoreAvailabilityModal',
				'store-availability-modal',
				{
					close: '.js-modal-close-store-availability-modal',
					closeModalOnClick: true,
					openClass: 'store-availabilities-modal--active',
					scrollIntoView: false
				}
			);
		},

		_useGeolocation: function(position, variantId, productTitle) {
			var coordinates = position.coords;
			var latitude = coordinates.latitude;
			var longitude = coordinates.longitude;
			if (PaloAlto.Helpers.cookiesEnabled()) {
				var latitudeFromCookie = PaloAlto.Helpers.getCookie('latitude');
				var longitudeFromCookie = PaloAlto.Helpers.getCookie('longitude');
				if (
					latitudeFromCookie &&
					longitudeFromCookie &&
					parseFloat(latitudeFromCookie) === latitude &&
					parseFloat(longitudeFromCookie) === longitude
				) {
					this._fetchStoreAvailabilities(
						variantId,
						productTitle,
						latitude,
						longitude
					);
				} else {
					var oneHour = 1 / 24;
					PaloAlto.Helpers.setCookie('latitude', latitude, oneHour);
					PaloAlto.Helpers.setCookie('longitude', longitude, oneHour);
					this._setBuyerLocation(latitude, longitude, variantId, productTitle);
				}
			} else {
				this._fetchStoreAvailabilities(variantId, productTitle);
			}
		},

		_setBuyerLocation: function(latitude, longitude, variantId, productTitle) {
			var self = this;
			fetch('/localization.json', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ latitude: latitude, longitude: longitude })
			}).then(function() {
				self._fetchStoreAvailabilities(
					variantId,
					productTitle,
					latitude,
					longitude
				);
			});
		},

		_fetchStoreAvailabilities: function(
			variantId,
			productTitle,
			latitude,
			longitude
		) {
			var variantSectionUrl =
				'/variants/' + variantId + '/?section_id=store-availability';
			this.clearContent();
			var self = this;
			fetch(variantSectionUrl)
				.then(function(response) {
					return response.text();
				})
				.then(function(storeAvailabilityHTML) {
					if (storeAvailabilityHTML.trim() === '') {
						return;
					}

					var body = document.querySelector( selectors.body );
										var storeAvailabilityModal = body.querySelector( selectors.storeAvailabilityModal );
										if ( storeAvailabilityModal ) {
												storeAvailabilityModal.remove();
										}

					self.container.innerHTML = storeAvailabilityHTML;
					self.container.innerHTML = self.container.firstElementChild.innerHTML;

					var storeAvailabilityModalOpen = self.container.querySelector(
						selectors.storeAvailabilityModalOpen
					);
					// Only create modal if open modal element exists
					if (!storeAvailabilityModalOpen) {
						return;
					}

					self.modal = self._initModal();
					self._updateProductTitle(productTitle);
					if (latitude && longitude) {
						self._updateLocationDistances(latitude, longitude);
					} else {
						self._hideDistanceUnits();
					}

					var storeAvailabilityModal = self.container.querySelector( selectors.storeAvailabilityModal );
					if ( storeAvailabilityModal ) {
						body.appendChild( storeAvailabilityModal );
					}
				});
		},

		_updateProductTitle: function(productTitle) {
			var storeAvailabilityModalProductTitle = this.container.querySelector(
				selectors.storeAvailabilityModalProductTitle
			);
			storeAvailabilityModalProductTitle.textContent = productTitle;
		},

		// Haversine Distance
		// The haversine formula is an equation giving great-circle distances between
		// two points on a sphere from their longitudes and latitudes
		_calculateDistance: function(
			latitude1,
			longitude1,
			latitude2,
			longitude2,
			unitSystem
		) {
			var dtor = Math.PI / 180;
			var radius = unitSystem === 'metric' ? 6378.14 : 3959;

			var rlat1 = latitude1 * dtor;
			var rlong1 = longitude1 * dtor;
			var rlat2 = latitude2 * dtor;
			var rlong2 = longitude2 * dtor;

			var dlon = rlong1 - rlong2;
			var dlat = rlat1 - rlat2;

			var a =
				Math.pow(Math.sin(dlat / 2), 2) +
				Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(dlon / 2), 2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			return radius * c;
		},

		_updateLocationDistances: function(latitude, longitude) {
			var countryCode = document.querySelector(
				selectors.storeAvailabilityUnitSystem
		);
			var unitSystem = countryCode.dataset.unitSystem;
			var allDistances = document.querySelectorAll(
				selectors.storeAvailabilityLocationDistance
			);
			var allDistancesArray = Array.from(allDistances);
			var self = this;
			allDistancesArray.forEach(function(locationDistance) {
				var distance = self
					._calculateDistance(
						latitude,
						longitude,
						parseFloat(locationDistance.dataset.latitude),
						parseFloat(locationDistance.dataset.longitude),
						unitSystem
					)
					.toFixed(1);
				locationDistance.innerHTML = distance;
			});
		},

		_hideDistanceUnits: function() {
			var distanceUnits = document.querySelectorAll(
				selectors.storeAvailabilityDistanceUnit
			);

			if (!distanceUnits) {
				return;
			}

			var distanceUnitsArray = Array.from(distanceUnits);
			distanceUnitsArray.forEach(function(distanceUnit) {
				distanceUnit.classList.add(classes.hidden);
			});
		}
	});
	return StoreAvailability;
})();
PaloAlto.RichText = (function() {
	function RichText(container) {
		PaloAlto.videoLink();
	}

	return RichText;
})();
PaloAlto.Slider = (function() {

	function Slider(container) {
		this.$container = $( container );

		this.initSlider();
		this.bindScrollButton();

		PaloAlto.videoLink();
	}

	Slider.prototype = $.extend({}, Slider.prototype, {
		initSlider: function() {
			var $slider = this.$container,
				slidesCount = $slider.find( '.item' ).length,
				autoplay = this.$container.data( 'autoplay' ),
				duration = this.$container.data( 'duration' ),
				pageDots = this.$container.data( 'page-dots' ) && slidesCount > 1,
				prevNextButtons = this.$container.data( 'nav-arrows' ) && slidesCount > 1;

			if ( autoplay ) autoplay = duration;

			$slider
				.on('ready.flickity', function() {
					var currentStyle = $(this).find('.item[data-slide-position="1"]').data('style');
					$(this).attr('data-current-style', currentStyle);
					$(this).find('.initial-slide').removeClass('initial-slide');
				})
				.on('change.flickity', function(event, index) {
					var $currentSlide = $(this).find('.item[data-slide-position="' + parseInt(index + 1) +'"]')
					var currentStyle = $currentSlide.data('style');
					$(this).attr('data-current-style', currentStyle);

					// Activate keyboard accessability of the current slide
					$currentSlide.find( 'a, button' ).removeAttr( 'tabindex' );

					// Disable keyboard accessability of the other slides
					$currentSlide.siblings().find('a, button').attr('tabindex', '-1');
				})
				.flickity({
					cellSelector: '.item',
					autoPlay: autoplay,
					wrapAround: true,
					adaptiveHeight: true,
					setGallerySize: true,
					imagesLoaded: true,
					pageDots: pageDots,
					prevNextButtons: false
			});

			// iOS smooth scrolling fix
			PaloAlto.flickitySmoothScrolling( $slider );

			if ( prevNextButtons ) {
				this.$container.on( 'click', '.slider__arrow--previous', function() {
					$slider.flickity('previous');
				});
				// next
				this.$container.on( 'click', '.slider__arrow--next', function() {
					$slider.flickity('next');
				});
			}

			$(document).on( 'preventOverflow.slideshow', function() {
				$slider.flickity( 'resize' );
			});
		},

		// Scroll down function
		bindScrollButton: function() {
			var $slider = this.$container;

			$slider.on( 'click', '.js-scroll-down', function(e) {
				e.preventDefault();
				var headerHeight = $( '.site-header' ).hasClass( 'site-header--fixed' ) ? 60 : 0,
					scrollToPosition = parseInt( Math.ceil( $slider.offset().top + $slider.outerHeight() - headerHeight ) );

				$('html, body').animate({ 'scrollTop': scrollToPosition }, 500);
			});
		},

		onBlockSelect: function(evt) {
			var $slider = $(evt.target).parents( '.slider' ),
				index = $(evt.target).index(),
				isFlickityEnabled = $slider.hasClass( 'flickity-enabled' );

			if ( isFlickityEnabled ) {
				$slider.flickity( 'select', index );
				$slider.flickity( 'pausePlayer' );
			}
		},

		onBlockDeselect: function(evt) {
			var $slider = $(evt.target).parents( '.slider' ),
				autoplay = this.$container.data( 'autoplay' ),
				isFlickityEnabled = $slider.hasClass( 'flickity-enabled' );

			if ( autoplay && isFlickityEnabled ) {
				$slider.flickity( 'playPlayer' );
			}
		},

		onUnload: function(evt) {
			$(document).off( 'preventOverflow.slideshow' );
		}
	});

	return Slider;
})();
PaloAlto.TabbedCollections = (function() {
	function TabbedCollections(container) {
		this.$container = $(container);
		this.$productSliders = this.$container.find( '.product__media-slider' );
		this.$collectionTabsNav = this.$container.find( '.collection__tabs-nav' );

		this.init();
	}

	TabbedCollections.prototype = $.extend({}, TabbedCollections.prototype, {
		init: function() {
			var self = this;
				enableSlider = this.$container.data( 'slider' ),
				productGridSlideshow = this.$container.data( 'product-grid-slideshow' );

			if ( enableSlider ) {
				this.checkSlider();

				$( window ).on( 'resize', $.throttle(150, self.checkSlider.bind(self) ) );
			}

			if ( productGridSlideshow ) {
				this.productGridSlideshow();
			}

			PaloAlto.Badge.setPosition();
			$(window).on('resize', PaloAlto.debounce( PaloAlto.Badge.setPosition, 250));

			this.$collectionTabsNav.on( 'click', 'button', function(e) {
				e.preventDefault();
				var $tabs = self.$container.find( '.collection__tab' );
				var currentTab = '#' + $(this).data( 'tab' );
				var $currentSlider = $(currentTab).find( '.js-featured-collection--slider' );

				$(this).parent().addClass( 'is-active' ).siblings().removeClass( 'is-active' );
				$tabs.removeClass( 'is-active' ).filter( $(currentTab) ).addClass( 'is-active' );

				// Fade out slider until it initializes
				$currentSlider.addClass( 'is-loading' );

				self.checkSlider();

				// Update product grid images slideshow
				self.$productSliders.filter( ':visible' ).flickity( 'resize' );

				// Fix blurry images on tab select
				$(currentTab).find( '.product__media' ).not( '.lazyloaded' ).addClass( 'lazyload' );

				// Fade in slider
				$currentSlider.removeClass( 'is-loading' );
			});

			// Bind quick buy/view buttons
			PaloAlto.initQuickButton( this.$container );
		},

		checkSlider: function() {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth,
				$collectionSlider = this.$container.find( '.is-active .js-featured-collection--slider' ),
				slidesCount = $collectionSlider.find( '[data-product-slide]' ).length,
				productColumns = this.$container.data( 'product-columns' );

			if ( windowWidth >= 768 && slidesCount > productColumns ) {
				this.initSlider();
				this.setSliderArrowsPosition();
			} else {
				this.destroySlider();
			}
		},

		initSlider: function() {
			var self = this,
				$slider = this.$container.find( '.is-active .js-featured-collection--slider' );

			$slider.removeClass( 'slider--disabled' );

			if ( !$slider.data( 'flickity' ) ) {
				$slider.on( 'ready.flickity', function() {
					self.setSliderArrowsPosition();
				});

				$slider.flickity({
					cellSelector: '[data-product-slide]',
					cellAlign: 'left',
					contain: true,
					groupCells: true,
					imagesLoaded: true,
					lazyLoad: true,
					pageDots: false,
					adaptiveHeight: false,
					arrowShape: {
						x0: 20,
						x1: 65, y1: 35,
						x2: 70, y2: 30,
						x3: 30
					}
				});

				// iOS smooth scrolling fix
				PaloAlto.flickitySmoothScrolling( $slider );
			}
		},

		destroySlider: function() {
			var $slider = this.$container.find( '.is-active .js-featured-collection--slider' );

			$slider.addClass( 'slider--disabled' );

			if ( $slider.data( 'flickity' ) ) {
				$slider.flickity( 'destroy' );
			}
		},

		setSliderArrowsPosition: function() {
			var $slider = this.$container.find( '.is-active .js-featured-collection--slider' );
			var $arrows = $slider.find('.flickity-button');
			var imageHeight = $slider.find('.product-grid-item__image').outerHeight();

			$arrows.css('top', imageHeight / 2 );
		},

		/* Product grid slideshow */
		productGridSlideshow: function() {
			var $productGridSlider = this.$container.find( '.product__media-slider' );

			$productGridSlider.each( function() {
				var countImages = $( this ).find( '.product__media' ).length;

				if ( countImages > 1 ) {
					$( this ).flickity({
						cellSelector: '.product__media-slide',
						contain: true,
						wrapAround: true,
						imagesLoaded: true,
						lazyLoad: true,
						pageDots: false,
						adaptiveHeight: false,
						arrowShape: {
							x0: 0,
							x1: 45, y1: 50,
							x2: 50, y2: 50,
							x3: 5
						}
					});
				}
			});

			// Prevent page redirect on slideshow arrow click
			this.$container.on( 'click', '.product-grid-item__image', function(e) {
				if ( $(e.target).is( '.flickity-button, .flickity-button *' ) ) {
					e.preventDefault();
				}
			});
		},

		/**
		 * Event callback for Theme Editor `section:select` event
		 */
		onSelect: function() {
			PaloAlto.initReviews();
			PaloAlto.initQuickButton( this.$container );
		},

		onDeselect: function() {
			$.magnificPopup.close();
		},

		onBlockSelect: function(evt) {
			// Show selected tab
			$( evt.target ).find( 'button' ).trigger( 'click' );
		},

		onUnload: function(evt) {
			$.magnificPopup.close();

			var $slider = $(evt.target).find( '.is-active .js-featured-collection--slider' );

			if ( $slider.data('flickity') ) {
				$slider.flickity('destroy');
			}
		}
	});

	return TabbedCollections;
})();
PaloAlto.Testimonials = (function() {

	function Testimonials(container) {
		var self = this;
		this.sectionId = $(container).attr('data-section-id'),
		this.$slider = $( '.testimonials__slider', this.$container );

		this.initSlider();

		$(window).on( 'resize.' + this.sectionId, PaloAlto.debounce( self.initSlider.bind(self), 250 ));
	}

	Testimonials.prototype = $.extend({}, Testimonials.prototype, {

		/* Init Slider */
		initSlider: function() {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth;

			windowWidth >= 768 ? this.runSliderDesktop() : this.runSliderMobile();
		},

		runSliderDesktop: function() {
			var self = this,
				windowWidth = window.innerWidth || document.documentElement.clientWidth,
				slidesCount = this.$slider.find( '.testimonial__item' ).length,
				hasSlider = this.$slider.hasClass( 'flickity-enabled' );

			// Destroy mobile slider if exists
			if ( this.$slider.hasClass( 'testimonials__slider--mobile' )) {
				this.$slider.removeClass( 'testimonials__slider--mobile' );

				if ( hasSlider ) this.$slider.flickity( 'destroy' )
			}

			// Remove min height to prevent slider height enlarge only on window resize
			this.$slider.find( '.testimonial__item' ).css( 'min-height', 0);

			// Destroy slider if there are 3 slides on desktop or 2 on tablet
			if ( slidesCount == 3 && windowWidth >= 1024 || slidesCount == 2 && windowWidth >= 768 || slidesCount == 1 ) {
				hasSlider = this.$slider.hasClass( 'flickity-enabled' );

				if ( hasSlider ) this.$slider.flickity( 'destroy' );

				this.$slider.find( '.testimonial__item' ).css( 'min-height', '100%' );

				return;
			}

			this.$slider
				.addClass( 'testimonials__slider--desktop' )
				.flickity({
					cellSelector: '.testimonial__item',
					imagesLoaded: true,
					pageDots: true,
					contain: true,
					groupCells: true,
					adaptiveHeight: false,
					arrowShape: {
						x0: 0,
						x1: 45, y1: 50,
						x2: 50, y2: 50,
						x3: 5
					}
				});

			// iOS smooth scrolling fix
			PaloAlto.flickitySmoothScrolling( this.$slider );

			self.$slider
				.flickity( 'resize' )
				.find( '.testimonial__item' ).css( 'min-height', '100%' );
		},

		runSliderMobile: function() {
			var self = this,
				slidesCount = this.$slider.find( '.testimonial__item' ).length,
				hasSlider = this.$slider.hasClass( 'flickity-enabled' );

			if ( this.$slider.hasClass( 'testimonials__slider--desktop' )) {
				this.$slider
					.removeClass( 'testimonials__slider--desktop' )
					.find( '.testimonial__item' ).css( 'min-height', '0' );

				if ( hasSlider ) this.$slider.flickity( 'destroy' )
			}

			if ( slidesCount > 1 ) {
				this.$slider
					.addClass( 'testimonials__slider--mobile' )
					.flickity({
						cellSelector: '.testimonial__item',
						imagesLoaded: true,
						pageDots: true,
						contain: true,
						groupCells: true,
						adaptiveHeight: true,
						arrowShape: {
							x0: 0,
							x1: 45, y1: 50,
							x2: 50, y2: 50,
							x3: 5
						}
					});

				// iOS smooth scrolling fix
				PaloAlto.flickitySmoothScrolling( this.$slider );
				self.$slider
					.find( '.testimonial__item' ).css( 'min-height', '0' )
			}
		},

		onBlockSelect: function(evt) {
			var $slider = $( evt.target ).parents( '.testimonials__slider' ),
				sliderData = $slider.data( 'flickity' );

			if ( sliderData ) {
				var index = parseInt( $( evt.target ).index() ),
					slidesPerPage = parseInt( sliderData.slides[0].cells.length ),
					groupIndex = Math.floor( index / slidesPerPage );

				$slider.flickity( 'select', groupIndex );
			}
		},

		onUnload: function() {
			$(window).off( 'resize.' + this.sectionId );
		}
	});

	return Testimonials;
})();

/*================ Templates ================*/
PaloAlto.Account = function() {
	var addressCountryNew = document.getElementById( 'AddressCountryNew' );

	if ( !addressCountryNew ) return;

	// Initialize observers on address selectors, defined in shopify_common.js
	if ( Shopify && Shopify.CountryProvinceSelector ) {
		new Shopify.CountryProvinceSelector(
			"AddressCountryNew",
			"AddressProvinceNew",
			{
				hideElement: "AddressProvinceContainerNew"
			}
		);
	}

	// Initialize each edit form's country/province selector
	$( '.address-country-option' ).each(function() {
		var formId = $(this).data('form-id'),
			countrySelector = 'AddressCountry_' + formId,
			provinceSelector = 'AddressProvince_' + formId,
			containerSelector = 'AddressProvinceContainer_' + formId;

		// eslint-disable-next-line no-new
		new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
			hideElement: containerSelector
		});
	});

	// Modified contents of customer_area.js (global asset)
	Shopify.CustomerAddress = {
		toggleForm: function(id) {
			var editEl = document.getElementById('EditAddress_'+id);
			editEl.style.display = editEl.style.display == 'none' ? '' : 'none';
			return false;
		},

		toggleNewForm: function() {
			var el = document.getElementById('AddAddress');
			el.style.display = el.style.display == 'none' ? '' : 'none';
			return false;
		},

		destroy: function(id, confirm_msg) {
			if (confirm(confirm_msg || "Are you sure you wish to delete this address?")) {
				Shopify.postLink('/account/addresses/'+id, {'parameters': {'_method': 'delete'}});
			}
		}
	}
};
PaloAlto.AboutPage = (function() {
	function AboutPage(container) {
		PaloAlto.videoLink();
	}

	return AboutPage;
})();
PaloAlto.CollectionTemplate = (function() {
	var constants = {
		SORT_BY: 'sort_by',
		DEFAULT_SORT: 'title-ascending'
	};
	var selectors = {
		sortSelection: '.filters-toolbar__input--sort',
		defaultSort: '.filters-toolbar__default-sort'
	};

	var filterProductsRequest;

	function CollectionTemplate(container) {
		this.$container = $(container);
		this.namespace = '.' + this.$container.data( 'section-id' );

		var self = this,
			namespace = this.namespace,
			productGridSlideshow = this.$container.data( 'product-grid-slideshow' );

		PaloAlto.initQuickButton( this.$container );
		PaloAlto.initReviews();
		PaloAlto.Badge.setPosition();

		$(window).on( 'resize' + this.namespace, PaloAlto.debounce( PaloAlto.Badge.setPosition, 250));

		/* Filters */
		this.initFilters();
		this.defaultSort = this._getDefaultSortValue();
		this.$sortSelect = $(selectors.sortSelection, this.$container);
		this.$sortSelect.on( 'change', this._onSortChange.bind(this));

		if ( productGridSlideshow ) {
			this.productGridSlideshow();
		}

		this.endlessCollection = new Ajaxinate({
			container: '#AjaxinateLoop',
			pagination: '#AjaxinatePagination',
			method: 'scroll',
			namespace: namespace,
			callback: function() {
				PaloAlto.initQuickButton( self.$container);
				PaloAlto.initReviews();

				if ( productGridSlideshow ) {
					self.productGridSlideshow();
				}

				$(window).trigger( self.namespace );
			}
		});
	}

	CollectionTemplate.prototype = $.extend({}, CollectionTemplate.prototype, {
		/* Product grid slideshow */
		productGridSlideshow: function() {
			var $productGridSlider = this.$container.find( '.product__media-slider' );

			$productGridSlider.each( function() {
				var countImages = $( this ).find( '.product__media' ).length;

				if ( countImages > 1 ) {
					var $imageSlider = $( this ).flickity({
						cellSelector: '.product__media-slide',
						contain: true,
						wrapAround: true,
						imagesLoaded: true,
						lazyLoad: true,
						pageDots: false,
						adaptiveHeight: false,
						arrowShape: {
							x0: 0,
							x1: 45, y1: 50,
							x2: 50, y2: 50,
							x3: 5
						}
					});
				}
			});

			// Prevent page redirect on slideshow arrow click
			this.$container.on( 'click', '.product-grid-item__image', function(e) {
				if ( $(e.target).is( '.flickity-button, .flickity-button *' ) ) {
					e.preventDefault();
				}
			});
		},

		initFilters: function() {
			var self = this,
				filtersPosition = this.$container.data( 'filters-position' )
				$collectionWrapper = this.$container.find( '.collection__wrapper' ),
				$collectionProducts = this.$container.find( '.collection__products' ),
				$filtersContainer = this.$container.find( '.collection__filters-wrapper' ),
				$filtersContainerParent = this.$container.find( '#collection__filters' );

			if ( !$filtersContainerParent.length ) return;

			var tags = this.$container.data( 'tags' ),
				collection = this.$container.data( 'collection' ),
				sort = this.$container.data( 'sort' );

			setCollectionContainerHeight();
			this.checkFiltersPosition();

			/* Bind toggle buttons */
			$filtersContainer
				.on( 'click', '.collection__filter-title', function() {
					var isTopPosition = $( window ).width() < 1024 || filtersPosition == 'top',
						isExpanded = !$(this).parent().hasClass( 'is-expanded' ),
						$collectionFilter = $(this).parent( '.collection__filter' );

					if ( isTopPosition ) {
						$collectionFilter
							.toggleClass( 'is-expanded' )
							.siblings()
							.removeClass( 'is-expanded' )
							.find( '.collection__filter-title' )
							.attr( 'aria-expanded', false );

						$(this).attr( 'aria-expanded', isExpanded )

						if ( $filtersContainer.find( '.collection__filter.is-expanded' ).length ) {
							$filtersContainerParent.addClass( 'has-tags-expanded' );
						} else {
							$filtersContainerParent.removeClass( 'has-tags-expanded' );
						}
					}
				})
				.on( 'keyup', function(e) {
					if ( e.keyCode === slate.utils.keyboardKeys.ESCAPE ) {
						$(this)
							.find( '.collection__filter' )
							.removeClass( 'is-expanded' )
							.find( '.collection__filter-title' )
							.attr( 'aria-expanded', false );

						$filtersContainerParent.removeClass( 'has-tags-expanded' );
					}
				});

			/* Close dropdowns on click outside their container */
			$( document ).on( 'click touchstart', function(e) {
				if ( !$( e.target ).is( '#collection__filters *' ) ) {
					$filtersContainer
						.find( '.collection__filter' )
						.removeClass( 'is-expanded' )
						.find( '.collection__filter-title' )
						.attr( 'aria-expanded', false );

					$filtersContainerParent.removeClass( 'has-tags-expanded' );
				}
			});

			$filtersContainer.on( 'click', '.tag-button', function(e) {
				e.preventDefault();

				var selectedTag = $( this ).data( 'tag' );
				var isTagSelected = $( this ).parent().hasClass( 'is-active' );

				if ( isTagSelected ) {
					var tagIndex = tags.indexOf( selectedTag );

					$( this ).parent().removeClass( 'is-active' );

					if ( tagIndex > -1 ) {
						tags.splice( tagIndex, 1 );
					}
				} else {
					$( this ).parent().addClass( 'is-active' );

					tags.push( selectedTag );
				}

				self.$container.attr( 'data-tags', tags );

				// Close filters dropdown on tag select
				$filtersContainer.find( '.collection__filter' ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
				$filtersContainerParent.removeClass( 'has-tags-expanded' );

				var requestedURL = collection + '/' + tags.join( '+' ) + '?sort_by=' + sort;

				requestFilteredProducts( requestedURL, tags );
			});

			/* Reset filters */
			var bindResetButton = function(e) {
				var requestedURL = collection + '/?sort_by=' + sort;

				$filtersContainer.find( '.collection__filter-tags > li' ).removeClass( 'is-active' );
				$filtersContainer.find( '.collection__filter' ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
				$filtersContainerParent.removeClass( 'has-tags-expanded' );

				// Reset saved tags
				tags = [];
				self.$container.attr( 'data-tags', false );

				requestFilteredProducts( requestedURL, tags );
			}

			self.$container.find( '[data-reset-filters]' ).on( 'click', bindResetButton );

			/* Animate products container height in order to make the filters move smooth */
			$(window).on( 'resize.collection', PaloAlto.debounce( function() {
				setCollectionContainerHeight();
				self.checkFiltersPosition(self);
			}, 250));

			function requestFilteredProducts( requestedURL, tags ) {
				var subcollectionsHeight = self.$container.find( '.subcollections--top' ).length ? self.$container.find( '.subcollections' ).outerHeight() : 0,
					productsTop = self.$container.find( '.collection__wrapper' ).offset().top + subcollectionsHeight,
					productGridSlideshow = self.$container.data( 'product-grid-slideshow' );

				// Kill previous ajax request
				if ( filterProductsRequest != null ) {
					filterProductsRequest.abort();
				}

				if ( !tags.length ) {
					self.$container.find( '[data-reset-filters]' ).removeClass( 'is-visible' );
					self.$container.find( '.collection__filters' ).removeClass( 'collection__filters--has-tags-selected' );
				}

				self.$container.addClass( 'is-loading' );

				if ( typeof self.endlessCollection === 'object' ) self.endlessCollection.destroy();

				// Scroll back to top
				$( 'html, body' ).stop().animate({ 'scrollTop': productsTop });

				filterProductsRequest = $.ajax({
					method: 'GET',
					url: requestedURL,
					dataType: 'html',
				}).done(function(data) {
					var filteredItems = $( data ).find( '.collection__items' ).html();
					var $pagination = $( data ).find( '.pagination' );
					var productsFound = $( data ).find( '.products-found' ).html();

					self.$container.find( '.collection__items' ).html( filteredItems );
					self.$container.find( '.products-found' ).html( productsFound );
					self.$container.find( '[data-reset-filters]' ).off().on( 'click', bindResetButton );

					PaloAlto.Badge.setPosition();

					if ( $pagination.length ) {
						self.$container.find( '.pagination' ).html( $pagination.html() );
					} else {
						self.$container.find( '.pagination' ).empty();
					}

					self.endlessCollection = new Ajaxinate({
						container: '#AjaxinateLoop',
						pagination: '#AjaxinatePagination',
						method: 'scroll',
						namespace: self.namespace,
						callback: function() {
							PaloAlto.initQuickButton( self.$container );
							PaloAlto.initReviews();

							if ( productGridSlideshow ) {
								self.productGridSlideshow();
							}

							$(window).trigger( self.namespace );
						}
					});

					// Show reset button if there are tags selected
					if ( tags.length ) {
						self.$container.find( '[data-reset-filters]' ).addClass( 'is-visible' );

						var subcollectionsHeight = self.$container.find( '.subcollections--top' ).length ? self.$container.find( '.subcollections' ).outerHeight() : 0;
						var productsTop = self.$container.find( '.collection__wrapper' ).offset().top + subcollectionsHeight;

						// Scroll back to top
						$( 'html, body' ).stop().animate({ 'scrollTop': productsTop });
						self.$container.find( '.collection__filters' ).addClass( 'collection__filters--has-tags-selected' );
					}

					PaloAlto.initQuickButton( self.$container );
					PaloAlto.initReviews();

					if ( productGridSlideshow ) {
						self.productGridSlideshow();
					}

					// Stop loading animation
					setTimeout(function() {
						self.$container.removeClass( 'is-loading' );
						setCollectionContainerHeight();
					}, 450);

					// Update page URL if supported by the browser
					if (history.replaceState) {
						window.history.pushState( { path: requestedURL }, '', requestedURL );
					}
				}).fail( function( jqXHR, textStatus, errorThrown ) {
					self.$container.removeClass( 'is-loading' );
				});
			}

			/* Need that function in order to animate the stickiy filters when new products are loaded */
			function setCollectionContainerHeight() {
				var isLeftPosition = $filtersContainerParent.hasClass( 'collection__filters--left' ) && $(window).width() >= 1024;
				var newContainerHeight = $collectionProducts.outerHeight();

				if ( isLeftPosition ) {
					$collectionWrapper.css( 'height', newContainerHeight );
				} else {
					$collectionWrapper.css( 'height', 'initial' );
				}
			}
		},

		checkFiltersPosition: function() {
			var filtersPosition = this.$container.data( 'filters-position' ),
				windowWidth = window.innerWidth || document.documentElement.clientWidth,
				$resetButton = this.$container.find( '[data-reset-filters]' ),
				$collectionFilters = this.$container.find( '.collection__filter' ),
				resetButtonWidth = $resetButton.outerWidth() + 100,
				collectionFiltersWidth = 0,
				isOverlapping = false;

			// Run only if filters position is set to "Top" or window width is < 1024
			if ( filtersPosition == 'top' || windowWidth < 1024 ) {
				$collectionFilters.each( function() {
					collectionFiltersWidth += $(this).outerWidth( true );
				});

				isOverlapping = (windowWidth - collectionFiltersWidth) / 2 < resetButtonWidth;

				if ( isOverlapping ) {
					$resetButton.parent().addClass( 'collection__filters-reset--fullwidth' );
				} else {
					$resetButton.parent().removeClass( 'collection__filters-reset--fullwidth' );
				}
			}
		},

		/**
		 * Event callback for Theme Editor `section:select` event
		 */
		onSelect: function() {
			PaloAlto.initReviews();
			PaloAlto.initQuickButton( this.$container );
		},

		onDeselect: function() {
			$.magnificPopup.close();
		},

		_onSortChange: function(evt) {
			var query = '';

			this.sort = this._getSortValue();

			query = [constants.SORT_BY + '=' + this.sort];

			var search = document.location.search = query.length ? '?' + query : '';

			document.location.href = search;
		},

		_getSortValue: function() {
			return this.$sortSelect.val() || this.defaultSort;
		},

		_getDefaultSortValue: function() {
			return $(selectors.defaultSort, this.$container).val() || constants.DEFAULT_SORT;
		},

		onUnload: function(evt) {
			this.$sortSelect.off( 'change', this._onSortChange);

			$(window).off( this.namespace );

			if ( typeof( this.endlessCollection ) === 'object') this.endlessCollection.destroy();

			$.magnificPopup.close();
		}
	});

	return CollectionTemplate;
})();
PaloAlto.loginForms = function() {
	var selectors = {
		// General
		$html                    : $('html'),
		$body                    : $('body'),

		// Customer Pages
		$recoverPasswordLink     : $('#RecoverPassword'),
		$hideRecoverPasswordLink : $('#HideRecoverPasswordLink'),
		$recoverPasswordForm     : $('#RecoverPasswordForm'),
		$customerLoginForm       : $('#CustomerLoginForm')
	};
	function showRecoverPasswordForm() {
		selectors.$recoverPasswordForm.show();
		selectors.$customerLoginForm.hide();
	}

	function hideRecoverPasswordForm() {
		selectors.$recoverPasswordForm.hide();
		selectors.$customerLoginForm.show();
	}

	selectors.$recoverPasswordLink.on('click', function(evt) {
		evt.preventDefault();
		showRecoverPasswordForm();
	});

	selectors.$hideRecoverPasswordLink.on('click', function(evt) {
		evt.preventDefault();
		hideRecoverPasswordForm();
	});

	// Allow deep linking to recover password form
	if (PaloAlto.getHash() == '#recover') {
		showRecoverPasswordForm();
	}
};
PaloAlto.PasswordTemplate = (function() {

	function PasswordTemplate(container) {
		var self = this;
		var $container = this.$container = $(container);
		var hasLoginErrors = $('#login_form .errors').length;

		$('#AdminLoginToggle', this.$container).on( 'click', function(e) {
			e.preventDefault();
			self.showRecoverPasswordForm();
		});

		$('#NewsletterToggle', this.$container).on( 'click', function(e) {
			e.preventDefault();
			self.hideRecoverPasswordForm();
		});

		if (window.location.hash == '#login' || hasLoginErrors ) {
			this.showRecoverPasswordForm();
		} else {
			this.hideRecoverPasswordForm();
		}
	}

	PasswordTemplate.prototype = $.extend({}, PasswordTemplate.prototype, {
		showRecoverPasswordForm: function() {
			$('#AdminLogin').show();
			$('#login_form .errors').show();
			$('#CustomerSignup').hide();
			$('#contact_form .errors').hide();
			window.location.hash = '#login';
		},

		hideRecoverPasswordForm: function() {
			$('#contact_form .errors').show();
			$('#CustomerSignup').show();
			$('#AdminLogin').hide();
			$('#login_form .errors').hide();
			window.location.hash = '';
		}
	});

	return PasswordTemplate;
})();
PaloAlto.SearchTemplate = (function() {
	function SearchTemplate(container) {
		if ( window.settings.enableInfinityScroll ) {
			this.endlessCollection = new Ajaxinate({
				container: '#AjaxinateLoop',
				pagination: '#AjaxinatePagination',
				method: 'scroll'
			});
		}
	}

	SearchTemplate.prototype = $.extend({}, SearchTemplate.prototype, {
		onUnload: function(evt) {
			if ( typeof( this.endlessCollection ) === 'object') this.endlessCollection.destroy();
		}
	});

	return SearchTemplate;
})();

$.ajaxSetup({ cache: false });

$(document).ready(function() {
	PaloAlto.init();
	PaloAlto.initSections();
	PaloAlto.preventOverflow();

	$(window).on( 'resize', PaloAlto.debounce( function() {
		var windowWidth = window.innerWidth || document.documentElement.clientWidth;

		// Do nothing if window width isn't changed
		if ( windowWidth == currentWindowWidth ) return;

		PaloAlto.setMainSpacing();

		// Update last window width variable
		currentWindowWidth = windowWidth;
	}, 250 ) );

	slate.a11y.pageLinkFocus($(window.location.hash));

	$('.in-page-link').on('click', function(evt) {
		slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
	});
});

PaloAlto.init = function(){
	// Show the body on load
	$('html').removeClass( 'no-js' ).addClass( 'supports-js' );
	PaloAlto.setScrollbarWidth();
	PaloAlto.checkReviewsApp();
	PaloAlto.loginForms();
	PaloAlto.initCart();
	PaloAlto.Account();
	PaloAlto.checkFirstSectionHeight();
	$(window).on( 'resize', PaloAlto.debounce( PaloAlto.checkFirstSectionHeight, 250 ) );
};

PaloAlto.getHash = function () {
	return window.location.hash;
};

PaloAlto.updateHash = function (hash) {
	window.location.hash = '#' + hash;
	$('#' + hash).attr('tabindex', -1).focus();
};

// Fire theme:touch once and set window.isTouch to the value of whether it's a touch device.
function wasTouched() {
	window.isTouch = true;
	document.removeEventListener('touchstart', wasTouched, { passive: true });
	document.documentElement.className = document.documentElement.className.replace('no-touch', 'touch');
	document.dispatchEvent(new CustomEvent('theme:touch', {
		bubbles: true
	}));
}
document.addEventListener('touchstart', wasTouched, { passive: true });

if ( typeof window.settings.newHash != 'undefined' ) {
	PaloAlto.updateHash( window.settings.newHash );
}

document.getElementById("AddToCartForm--product-template").onsubmit = function() {myFunction22()};

function myFunction22() {
  document.getElementById("AddToCartText").innerHTML = "Added";
  setTimeout(function(){ document.getElementById("AddToCartText").innerHTML = "Add to cart"; }, 3000);
}

