(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function KT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iv={exports:{}},nu={},ov={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),GT=Symbol.for("react.portal"),QT=Symbol.for("react.fragment"),YT=Symbol.for("react.strict_mode"),XT=Symbol.for("react.profiler"),JT=Symbol.for("react.provider"),ZT=Symbol.for("react.context"),eI=Symbol.for("react.forward_ref"),tI=Symbol.for("react.suspense"),nI=Symbol.for("react.memo"),rI=Symbol.for("react.lazy"),Am=Symbol.iterator;function sI(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lv=Object.assign,uv={};function oi(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||av}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cv(){}cv.prototype=oi.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||av}var Sd=Id.prototype=new cv;Sd.constructor=Id;lv(Sd,oi.prototype);Sd.isPureReactComponent=!0;var xm=Array.isArray,hv=Object.prototype.hasOwnProperty,Ad={current:null},dv={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)hv.call(e,r)&&!dv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:$o,type:t,key:i,ref:o,props:s,_owner:Ad.current}}function iI(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function oI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cm=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oI(""+t.key):e.toString(36)}function Wa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case GT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+pc(o,0):r,xm(s)?(n="",t!=null&&(n=t.replace(Cm,"$&/")+"/"),Wa(s,e,n,"",function(h){return h})):s!=null&&(xd(s)&&(s=iI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Cm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",xm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+pc(i,l);o+=Wa(i,e,n,u,s)}else if(u=sI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+pc(i,l++),o+=Wa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],s=0;return Wa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function aI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Ha={transition:null},lI={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Ha,ReactCurrentOwner:Ad};function pv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=oi;te.Fragment=QT;te.Profiler=XT;te.PureComponent=Id;te.StrictMode=YT;te.Suspense=tI;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;te.act=pv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Ad.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)hv.call(e,u)&&!dv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:$o,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:ZT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JT,_context:t},t.Consumer=t};te.createElement=fv;te.createFactory=function(t){var e=fv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:eI,render:t}};te.isValidElement=xd;te.lazy=function(t){return{$$typeof:rI,_payload:{_status:-1,_result:t},_init:aI}};te.memo=function(t,e){return{$$typeof:nI,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ha.transition;Ha.transition={};try{t()}finally{Ha.transition=e}};te.unstable_act=pv;te.useCallback=function(t,e){return yt.current.useCallback(t,e)};te.useContext=function(t){return yt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};te.useEffect=function(t,e){return yt.current.useEffect(t,e)};te.useId=function(){return yt.current.useId()};te.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return yt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};te.useRef=function(t){return yt.current.useRef(t)};te.useState=function(t){return yt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return yt.current.useTransition()};te.version="18.3.1";ov.exports=te;var U=ov.exports;const uI=KT(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cI=U,hI=Symbol.for("react.element"),dI=Symbol.for("react.fragment"),fI=Object.prototype.hasOwnProperty,pI=cI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mI={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fI.call(e,r)&&!mI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:hI,type:t,key:i,ref:o,props:s,_owner:pI.current}}nu.Fragment=dI;nu.jsx=mv;nu.jsxs=mv;iv.exports=nu;var p=iv.exports,rh={},gv={exports:{}},Lt={},yv={exports:{}},vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var Q=$.length;$.push(G);e:for(;0<Q;){var he=Q-1>>>1,ce=$[he];if(0<s(ce,G))$[he]=G,$[Q]=ce,Q=he;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],Q=$.pop();if(Q!==G){$[0]=Q;e:for(var he=0,ce=$.length,Se=ce>>>1;he<Se;){var jt=2*(he+1)-1,Qt=$[jt],Yt=jt+1,Ft=$[Yt];if(0>s(Qt,Q))Yt<ce&&0>s(Ft,Qt)?($[he]=Ft,$[Yt]=Q,he=Yt):($[he]=Qt,$[jt]=Q,he=jt);else if(Yt<ce&&0>s(Ft,Q))$[he]=Ft,$[Yt]=Q,he=Yt;else break e}}return G}function s($,G){var Q=$.sortIndex-G.sortIndex;return Q!==0?Q:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,w=3,A=!1,P=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=$)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function V($){if(b=!1,x($),!P)if(n(u)!==null)P=!0,me(F);else{var G=n(h);G!==null&&ae(V,G.startTime-$)}}function F($,G){P=!1,b&&(b=!1,I(g),g=-1),A=!0;var Q=w;try{for(x(G),m=n(u);m!==null&&(!(m.expirationTime>G)||$&&!C());){var he=m.callback;if(typeof he=="function"){m.callback=null,w=m.priorityLevel;var ce=he(m.expirationTime<=G);G=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),x(G)}else r(u);m=n(u)}if(m!==null)var Se=!0;else{var jt=n(h);jt!==null&&ae(V,jt.startTime-G),Se=!1}return Se}finally{m=null,w=Q,A=!1}}var L=!1,y=null,g=-1,v=5,E=-1;function C(){return!(t.unstable_now()-E<v)}function k(){if(y!==null){var $=t.unstable_now();E=$;var G=!0;try{G=y(!0,$)}finally{G?S():(L=!1,y=null)}}else L=!1}var S;if(typeof T=="function")S=function(){T(k)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,se=Me.port2;Me.port1.onmessage=k,S=function(){se.postMessage(null)}}else S=function(){R(k,0)};function me($){y=$,L||(L=!0,S())}function ae($,G){g=R(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,me(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var Q=w;w=G;try{return $()}finally{w=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=w;w=$;try{return G()}finally{w=Q}},t.unstable_scheduleCallback=function($,G,Q){var he=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?he+Q:he):Q=he,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Q+ce,$={id:f++,callback:G,priorityLevel:$,startTime:Q,expirationTime:ce,sortIndex:-1},Q>he?($.sortIndex=Q,e(h,$),n(u)===null&&$===n(h)&&(b?(I(g),g=-1):b=!0,ae(V,Q-he))):($.sortIndex=ce,e(u,$),P||A||(P=!0,me(F))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var G=w;return function(){var Q=w;w=G;try{return $.apply(this,arguments)}finally{w=Q}}}})(vv);yv.exports=vv;var gI=yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI=U,Vt=gI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,co={};function ls(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(co[t]=e,t=0;t<e.length;t++)_v.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=Object.prototype.hasOwnProperty,vI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},km={};function _I(t){return sh.call(km,t)?!0:sh.call(Rm,t)?!1:vI.test(t)?km[t]=!0:(Rm[t]=!0,!1)}function wI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EI(t,e,n,r){if(e===null||typeof e>"u"||wI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,Rd);Ze[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,Rd);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,Rd);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var s=Ze.hasOwnProperty(e)?Ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EI(e,n,s,r)&&(n=null),r||s===null?_I(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),ah=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),Pm=Symbol.iterator;function ki(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,mc;function Fi(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function yc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fi(t):""}function TI(t){switch(t.tag){case 5:return Fi(t.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case Is:return"Portal";case ih:return"Profiler";case Pd:return"StrictMode";case oh:return"Suspense";case ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ev:return(t.displayName||"Context")+".Consumer";case wv:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:lh(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return lh(t(e))}catch{}}return null}function II(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lh(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SI(t){var e=Iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=SI(t))}function Sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Iv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uh(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Av(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function ch(t,e){Av(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&hh(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hh(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Ls(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ui(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function xv(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AI=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(t){AI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ki[e]=Ki[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ki.hasOwnProperty(t)&&Ki[t]?(""+e).trim():e+"px"}function Pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var xI=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ph(t,e){if(e){if(xI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yh=null,Ms=null,js=null;function Om(t){if(t=Wo(t)){if(typeof yh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=au(e),yh(t.stateNode,t.type,e))}}function Nv(t){Ms?js?js.push(t):js=[t]:Ms=t}function bv(){if(Ms){var t=Ms,e=js;if(js=Ms=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function Dv(t,e){return t(e)}function Vv(){}var vc=!1;function Ov(t,e,n){if(vc)return t(e,n);vc=!0;try{return Dv(t,e,n)}finally{vc=!1,(Ms!==null||js!==null)&&(Vv(),bv())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var vh=!1;if(On)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){vh=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{vh=!1}function CI(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Gi=!1,pl=null,ml=!1,_h=null,RI={onError:function(t){Gi=!0,pl=t}};function kI(t,e,n,r,s,i,o,l,u){Gi=!1,pl=null,CI.apply(RI,arguments)}function PI(t,e,n,r,s,i,o,l,u){if(kI.apply(this,arguments),Gi){if(Gi){var h=pl;Gi=!1,pl=null}else throw Error(j(198));ml||(ml=!0,_h=h)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lm(t){if(us(t)!==t)throw Error(j(188))}function NI(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Lm(s),t;if(i===r)return Lm(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Mv(t){return t=NI(t),t!==null?jv(t):null}function jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jv(t);if(e!==null)return e;t=t.sibling}return null}var Fv=Vt.unstable_scheduleCallback,Mm=Vt.unstable_cancelCallback,bI=Vt.unstable_shouldYield,DI=Vt.unstable_requestPaint,be=Vt.unstable_now,VI=Vt.unstable_getCurrentPriorityLevel,Vd=Vt.unstable_ImmediatePriority,Uv=Vt.unstable_UserBlockingPriority,gl=Vt.unstable_NormalPriority,OI=Vt.unstable_LowPriority,zv=Vt.unstable_IdlePriority,ru=null,pn=null;function LI(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:FI,MI=Math.log,jI=Math.LN2;function FI(t){return t>>>=0,t===0?32:31-(MI(t)/jI|0)|0}var Ca=64,Ra=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=zi(l):(i&=o,i!==0&&(r=zi(i)))}else o=n&~s,o!==0?r=zi(o):i!==0&&(r=zi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),s=1<<n,r|=t[n],e&=~s;return r}function UI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-rn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=UI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $v(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function $I(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-rn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function Bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qv,Ld,Wv,Hv,Kv,Eh=!1,ka=[],ar=null,lr=null,ur=null,po=new Map,mo=new Map,Jn=[],BI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Ni(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Wo(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function qI(t,e,n,r,s){switch(e){case"focusin":return ar=Ni(ar,t,e,n,r,s),!0;case"dragenter":return lr=Ni(lr,t,e,n,r,s),!0;case"mouseover":return ur=Ni(ur,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return po.set(i,Ni(po.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,mo.set(i,Ni(mo.get(i)||null,t,e,n,r,s)),!0}return!1}function Gv(t){var e=Br(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=Lv(n),e!==null){t.blockedOn=e,Kv(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gh=r,n.target.dispatchEvent(r),gh=null}else return e=Wo(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){Ka(t)&&n.delete(e)}function WI(){Eh=!1,ar!==null&&Ka(ar)&&(ar=null),lr!==null&&Ka(lr)&&(lr=null),ur!==null&&Ka(ur)&&(ur=null),po.forEach(Fm),mo.forEach(Fm)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,Eh||(Eh=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,WI)))}function go(t){function e(s){return bi(s,t)}if(0<ka.length){bi(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&bi(ar,t),lr!==null&&bi(lr,t),ur!==null&&bi(ur,t),po.forEach(e),mo.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&Jn.shift()}var Fs=qn.ReactCurrentBatchConfig,vl=!0;function HI(t,e,n,r){var s=de,i=Fs.transition;Fs.transition=null;try{de=1,Md(t,e,n,r)}finally{de=s,Fs.transition=i}}function KI(t,e,n,r){var s=de,i=Fs.transition;Fs.transition=null;try{de=4,Md(t,e,n,r)}finally{de=s,Fs.transition=i}}function Md(t,e,n,r){if(vl){var s=Th(t,e,n,r);if(s===null)kc(t,e,r,_l,n),jm(t,r);else if(qI(s,t,e,n,r))r.stopPropagation();else if(jm(t,r),e&4&&-1<BI.indexOf(t)){for(;s!==null;){var i=Wo(s);if(i!==null&&qv(i),i=Th(t,e,n,r),i===null&&kc(t,e,r,_l,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var _l=null;function Th(t,e,n,r){if(_l=null,t=Dd(r),t=Br(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function Qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VI()){case Vd:return 1;case Uv:return 4;case gl:case OI:return 16;case zv:return 536870912;default:return 16}default:return 16}}var sr=null,jd=null,Ga=null;function Yv(){if(Ga)return Ga;var t,e=jd,n=e.length,r,s="value"in sr?sr.value:sr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ga=s.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pa(){return!0}function Um(){return!1}function Mt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pa:Um,this.isPropagationStopped=Um,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Mt(ai),qo=Ce({},ai,{view:0,detail:0}),GI=Mt(qo),wc,Ec,Di,su=Ce({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(wc=t.screenX-Di.screenX,Ec=t.screenY-Di.screenY):Ec=wc=0,Di=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),zm=Mt(su),QI=Ce({},su,{dataTransfer:0}),YI=Mt(QI),XI=Ce({},qo,{relatedTarget:0}),Tc=Mt(XI),JI=Ce({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),ZI=Mt(JI),eS=Ce({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tS=Mt(eS),nS=Ce({},ai,{data:0}),$m=Mt(nS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iS[t])?!!e[t]:!1}function Ud(){return oS}var aS=Ce({},qo,{key:function(t){if(t.key){var e=rS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lS=Mt(aS),uS=Ce({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Mt(uS),cS=Ce({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),hS=Mt(cS),dS=Ce({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Mt(dS),pS=Ce({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mS=Mt(pS),gS=[9,13,27,32],zd=On&&"CompositionEvent"in window,Qi=null;On&&"documentMode"in document&&(Qi=document.documentMode);var yS=On&&"TextEvent"in window&&!Qi,Xv=On&&(!zd||Qi&&8<Qi&&11>=Qi),qm=" ",Wm=!1;function Jv(t,e){switch(t){case"keyup":return gS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function vS(t,e){switch(t){case"compositionend":return Zv(e);case"keypress":return e.which!==32?null:(Wm=!0,qm);case"textInput":return t=e.data,t===qm&&Wm?null:t;default:return null}}function _S(t,e){if(As)return t==="compositionend"||!zd&&Jv(t,e)?(t=Yv(),Ga=jd=sr=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xv&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wS[t.type]:e==="textarea"}function e_(t,e,n,r){Nv(r),e=wl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,yo=null;function ES(t){h_(t,0)}function iu(t){var e=Rs(t);if(Sv(e))return t}function TS(t,e){if(t==="change")return e}var t_=!1;if(On){var Ic;if(On){var Sc="oninput"in document;if(!Sc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Sc=typeof Km.oninput=="function"}Ic=Sc}else Ic=!1;t_=Ic&&(!document.documentMode||9<document.documentMode)}function Gm(){Yi&&(Yi.detachEvent("onpropertychange",n_),yo=Yi=null)}function n_(t){if(t.propertyName==="value"&&iu(yo)){var e=[];e_(e,yo,t,Dd(t)),Ov(ES,e)}}function IS(t,e,n){t==="focusin"?(Gm(),Yi=e,yo=n,Yi.attachEvent("onpropertychange",n_)):t==="focusout"&&Gm()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(yo)}function AS(t,e){if(t==="click")return iu(e)}function xS(t,e){if(t==="input"||t==="change")return iu(e)}function CS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:CS;function vo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!sh.call(e,s)||!on(t[s],e[s]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function r_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RS(t){var e=s_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r_(n.ownerDocument.documentElement,n)){if(r!==null&&$d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ym(n,i);var o=Ym(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kS=On&&"documentMode"in document&&11>=document.documentMode,xs=null,Ih=null,Xi=null,Sh=!1;function Xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||xs==null||xs!==fl(r)||(r=xs,"selectionStart"in r&&$d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&vo(Xi,r)||(Xi=r,r=wl(Ih,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Ac={},i_={};On&&(i_=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function ou(t){if(Ac[t])return Ac[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i_)return Ac[t]=e[n];return t}var o_=ou("animationend"),a_=ou("animationiteration"),l_=ou("animationstart"),u_=ou("transitionend"),c_=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){c_.set(t,e),ls(e,[t])}for(var xc=0;xc<Jm.length;xc++){var Cc=Jm[xc],PS=Cc.toLowerCase(),NS=Cc[0].toUpperCase()+Cc.slice(1);Rr(PS,"on"+NS)}Rr(o_,"onAnimationEnd");Rr(a_,"onAnimationIteration");Rr(l_,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(u_,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PI(r,e,void 0,t),t.currentTarget=null}function h_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Zm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Zm(s,l,h),i=u}}}if(ml)throw t=_h,ml=!1,_h=null,t}function ve(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var r=t+"__bubble";n.has(r)||(d_(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),d_(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[ba]){t[ba]=!0,_v.forEach(function(n){n!=="selectionchange"&&(bS.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Rc("selectionchange",!1,e))}}function d_(t,e,n,r){switch(Qv(e)){case 1:var s=HI;break;case 4:s=KI;break;default:s=Md}n=s.bind(null,e,n,t),s=void 0,!vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Ov(function(){var h=i,f=Dd(n),m=[];e:{var w=c_.get(t);if(w!==void 0){var A=Fd,P=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":A=lS;break;case"focusin":P="focus",A=Tc;break;case"focusout":P="blur",A=Tc;break;case"beforeblur":case"afterblur":A=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=YI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=hS;break;case o_:case a_:case l_:A=ZI;break;case u_:A=fS;break;case"scroll":A=GI;break;case"wheel":A=mS;break;case"copy":case"cut":case"paste":A=tS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Bm}var b=(e&4)!==0,R=!b&&t==="scroll",I=b?w!==null?w+"Capture":null:w;b=[];for(var T=h,x;T!==null;){x=T;var V=x.stateNode;if(x.tag===5&&V!==null&&(x=V,I!==null&&(V=fo(T,I),V!=null&&b.push(wo(T,V,x)))),R)break;T=T.return}0<b.length&&(w=new A(w,P,null,n,f),m.push({event:w,listeners:b}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",w&&n!==gh&&(P=n.relatedTarget||n.fromElement)&&(Br(P)||P[Ln]))break e;if((A||w)&&(w=f.window===f?f:(w=f.ownerDocument)?w.defaultView||w.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Br(P):null,P!==null&&(R=us(P),P!==R||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(b=zm,V="onMouseLeave",I="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(b=Bm,V="onPointerLeave",I="onPointerEnter",T="pointer"),R=A==null?w:Rs(A),x=P==null?w:Rs(P),w=new b(V,T+"leave",A,n,f),w.target=R,w.relatedTarget=x,V=null,Br(f)===h&&(b=new b(I,T+"enter",P,n,f),b.target=x,b.relatedTarget=R,V=b),R=V,A&&P)t:{for(b=A,I=P,T=0,x=b;x;x=_s(x))T++;for(x=0,V=I;V;V=_s(V))x++;for(;0<T-x;)b=_s(b),T--;for(;0<x-T;)I=_s(I),x--;for(;T--;){if(b===I||I!==null&&b===I.alternate)break t;b=_s(b),I=_s(I)}b=null}else b=null;A!==null&&eg(m,w,A,b,!1),P!==null&&R!==null&&eg(m,R,P,b,!0)}}e:{if(w=h?Rs(h):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var F=TS;else if(Hm(w))if(t_)F=xS;else{F=SS;var L=IS}else(A=w.nodeName)&&A.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(F=AS);if(F&&(F=F(t,h))){e_(m,F,n,f);break e}L&&L(t,w,h),t==="focusout"&&(L=w._wrapperState)&&L.controlled&&w.type==="number"&&hh(w,"number",w.value)}switch(L=h?Rs(h):window,t){case"focusin":(Hm(L)||L.contentEditable==="true")&&(xs=L,Ih=h,Xi=null);break;case"focusout":Xi=Ih=xs=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,Xm(m,n,f);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":Xm(m,n,f)}var y;if(zd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else As?Jv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Xv&&n.locale!=="ko"&&(As||g!=="onCompositionStart"?g==="onCompositionEnd"&&As&&(y=Yv()):(sr=f,jd="value"in sr?sr.value:sr.textContent,As=!0)),L=wl(h,g),0<L.length&&(g=new $m(g,t,null,n,f),m.push({event:g,listeners:L}),y?g.data=y:(y=Zv(n),y!==null&&(g.data=y)))),(y=yS?vS(t,n):_S(t,n))&&(h=wl(h,"onBeforeInput"),0<h.length&&(f=new $m("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=y))}h_(m,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=fo(t,n),i!=null&&r.unshift(wo(t,i,s)),i=fo(t,e),i!=null&&r.push(wo(t,i,s))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=fo(n,i),u!=null&&o.unshift(wo(n,u,l))):s||(u=fo(n,i),u!=null&&o.push(wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(DS,`
`).replace(VS,"")}function Da(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(j(425))}function El(){}var Ah=null,xh=null;function Ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(MS)}:Rh;function MS(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);go(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var li=Math.random().toString(36).slice(2),dn="__reactFiber$"+li,Eo="__reactProps$"+li,Ln="__reactContainer$"+li,kh="__reactEvents$"+li,jS="__reactListeners$"+li,FS="__reactHandles$"+li;function Br(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[dn])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[dn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function au(t){return t[Eo]||null}var Ph=[],ks=-1;function kr(t){return{current:t}}function we(t){0>ks||(t.current=Ph[ks],Ph[ks]=null,ks--)}function ge(t,e){ks++,Ph[ks]=t.current,t.current=e}var wr={},ct=kr(wr),It=kr(!1),Xr=wr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function Tl(){we(It),we(ct)}function sg(t,e,n){if(ct.current!==wr)throw Error(j(168));ge(ct,e),ge(It,n)}function f_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,II(t)||"Unknown",s));return Ce({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Xr=ct.current,ge(ct,t),ge(It,It.current),!0}function ig(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=f_(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,we(It),we(ct),ge(ct,t)):we(It),ge(It,n)}var xn=null,lu=!1,Nc=!1;function p_(t){xn===null?xn=[t]:xn.push(t)}function US(t){lu=!0,p_(t)}function Pr(){if(!Nc&&xn!==null){Nc=!0;var t=0,e=de;try{var n=xn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,lu=!1}catch(s){throw xn!==null&&(xn=xn.slice(t+1)),Fv(Vd,Pr),s}finally{de=e,Nc=!1}}return null}var Ps=[],Ns=0,Sl=null,Al=0,Ut=[],zt=0,Jr=null,Cn=1,Rn="";function Fr(t,e){Ps[Ns++]=Al,Ps[Ns++]=Sl,Sl=t,Al=e}function m_(t,e,n){Ut[zt++]=Cn,Ut[zt++]=Rn,Ut[zt++]=Jr,Jr=t;var r=Cn;t=Rn;var s=32-rn(r)-1;r&=~(1<<s),n+=1;var i=32-rn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Cn=1<<32-rn(e)+s|n<<s|r,Rn=i+t}else Cn=1<<i|n<<s|r,Rn=t}function Bd(t){t.return!==null&&(Fr(t,1),m_(t,1,0))}function qd(t){for(;t===Sl;)Sl=Ps[--Ns],Ps[Ns]=null,Al=Ps[--Ns],Ps[Ns]=null;for(;t===Jr;)Jr=Ut[--zt],Ut[zt]=null,Rn=Ut[--zt],Ut[zt]=null,Cn=Ut[--zt],Ut[zt]=null}var Nt=null,kt=null,Te=!1,nn=null;function g_(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,kt=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Cn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,kt=null,!0):!1;default:return!1}}function Nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bh(t){if(Te){var e=kt;if(e){var n=e;if(!og(t,e)){if(Nh(t))throw Error(j(418));e=cr(n.nextSibling);var r=Nt;e&&og(t,e)?g_(r,n):(t.flags=t.flags&-4097|2,Te=!1,Nt=t)}}else{if(Nh(t))throw Error(j(418));t.flags=t.flags&-4097|2,Te=!1,Nt=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Va(t){if(t!==Nt)return!1;if(!Te)return ag(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ch(t.type,t.memoizedProps)),e&&(e=kt)){if(Nh(t))throw y_(),Error(j(418));for(;e;)g_(t,e),e=cr(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Nt?cr(t.stateNode.nextSibling):null;return!0}function y_(){for(var t=kt;t;)t=cr(t.nextSibling)}function Gs(){kt=Nt=null,Te=!1}function Wd(t){nn===null?nn=[t]:nn.push(t)}var zS=qn.ReactCurrentBatchConfig;function Vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function v_(t){function e(I,T){if(t){var x=I.deletions;x===null?(I.deletions=[T],I.flags|=16):x.push(T)}}function n(I,T){if(!t)return null;for(;T!==null;)e(I,T),T=T.sibling;return null}function r(I,T){for(I=new Map;T!==null;)T.key!==null?I.set(T.key,T):I.set(T.index,T),T=T.sibling;return I}function s(I,T){return I=pr(I,T),I.index=0,I.sibling=null,I}function i(I,T,x){return I.index=x,t?(x=I.alternate,x!==null?(x=x.index,x<T?(I.flags|=2,T):x):(I.flags|=2,T)):(I.flags|=1048576,T)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,T,x,V){return T===null||T.tag!==6?(T=jc(x,I.mode,V),T.return=I,T):(T=s(T,x),T.return=I,T)}function u(I,T,x,V){var F=x.type;return F===Ss?f(I,T,x.props.children,V,x.key):T!==null&&(T.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Yn&&lg(F)===T.type)?(V=s(T,x.props),V.ref=Vi(I,T,x),V.return=I,V):(V=nl(x.type,x.key,x.props,null,I.mode,V),V.ref=Vi(I,T,x),V.return=I,V)}function h(I,T,x,V){return T===null||T.tag!==4||T.stateNode.containerInfo!==x.containerInfo||T.stateNode.implementation!==x.implementation?(T=Fc(x,I.mode,V),T.return=I,T):(T=s(T,x.children||[]),T.return=I,T)}function f(I,T,x,V,F){return T===null||T.tag!==7?(T=Qr(x,I.mode,V,F),T.return=I,T):(T=s(T,x),T.return=I,T)}function m(I,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return T=jc(""+T,I.mode,x),T.return=I,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Sa:return x=nl(T.type,T.key,T.props,null,I.mode,x),x.ref=Vi(I,null,T),x.return=I,x;case Is:return T=Fc(T,I.mode,x),T.return=I,T;case Yn:var V=T._init;return m(I,V(T._payload),x)}if(Ui(T)||ki(T))return T=Qr(T,I.mode,x,null),T.return=I,T;Oa(I,T)}return null}function w(I,T,x,V){var F=T!==null?T.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:l(I,T,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return x.key===F?u(I,T,x,V):null;case Is:return x.key===F?h(I,T,x,V):null;case Yn:return F=x._init,w(I,T,F(x._payload),V)}if(Ui(x)||ki(x))return F!==null?null:f(I,T,x,V,null);Oa(I,x)}return null}function A(I,T,x,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(x)||null,l(T,I,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Sa:return I=I.get(V.key===null?x:V.key)||null,u(T,I,V,F);case Is:return I=I.get(V.key===null?x:V.key)||null,h(T,I,V,F);case Yn:var L=V._init;return A(I,T,x,L(V._payload),F)}if(Ui(V)||ki(V))return I=I.get(x)||null,f(T,I,V,F,null);Oa(T,V)}return null}function P(I,T,x,V){for(var F=null,L=null,y=T,g=T=0,v=null;y!==null&&g<x.length;g++){y.index>g?(v=y,y=null):v=y.sibling;var E=w(I,y,x[g],V);if(E===null){y===null&&(y=v);break}t&&y&&E.alternate===null&&e(I,y),T=i(E,T,g),L===null?F=E:L.sibling=E,L=E,y=v}if(g===x.length)return n(I,y),Te&&Fr(I,g),F;if(y===null){for(;g<x.length;g++)y=m(I,x[g],V),y!==null&&(T=i(y,T,g),L===null?F=y:L.sibling=y,L=y);return Te&&Fr(I,g),F}for(y=r(I,y);g<x.length;g++)v=A(y,I,g,x[g],V),v!==null&&(t&&v.alternate!==null&&y.delete(v.key===null?g:v.key),T=i(v,T,g),L===null?F=v:L.sibling=v,L=v);return t&&y.forEach(function(C){return e(I,C)}),Te&&Fr(I,g),F}function b(I,T,x,V){var F=ki(x);if(typeof F!="function")throw Error(j(150));if(x=F.call(x),x==null)throw Error(j(151));for(var L=F=null,y=T,g=T=0,v=null,E=x.next();y!==null&&!E.done;g++,E=x.next()){y.index>g?(v=y,y=null):v=y.sibling;var C=w(I,y,E.value,V);if(C===null){y===null&&(y=v);break}t&&y&&C.alternate===null&&e(I,y),T=i(C,T,g),L===null?F=C:L.sibling=C,L=C,y=v}if(E.done)return n(I,y),Te&&Fr(I,g),F;if(y===null){for(;!E.done;g++,E=x.next())E=m(I,E.value,V),E!==null&&(T=i(E,T,g),L===null?F=E:L.sibling=E,L=E);return Te&&Fr(I,g),F}for(y=r(I,y);!E.done;g++,E=x.next())E=A(y,I,g,E.value,V),E!==null&&(t&&E.alternate!==null&&y.delete(E.key===null?g:E.key),T=i(E,T,g),L===null?F=E:L.sibling=E,L=E);return t&&y.forEach(function(k){return e(I,k)}),Te&&Fr(I,g),F}function R(I,T,x,V){if(typeof x=="object"&&x!==null&&x.type===Ss&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:e:{for(var F=x.key,L=T;L!==null;){if(L.key===F){if(F=x.type,F===Ss){if(L.tag===7){n(I,L.sibling),T=s(L,x.props.children),T.return=I,I=T;break e}}else if(L.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Yn&&lg(F)===L.type){n(I,L.sibling),T=s(L,x.props),T.ref=Vi(I,L,x),T.return=I,I=T;break e}n(I,L);break}else e(I,L);L=L.sibling}x.type===Ss?(T=Qr(x.props.children,I.mode,V,x.key),T.return=I,I=T):(V=nl(x.type,x.key,x.props,null,I.mode,V),V.ref=Vi(I,T,x),V.return=I,I=V)}return o(I);case Is:e:{for(L=x.key;T!==null;){if(T.key===L)if(T.tag===4&&T.stateNode.containerInfo===x.containerInfo&&T.stateNode.implementation===x.implementation){n(I,T.sibling),T=s(T,x.children||[]),T.return=I,I=T;break e}else{n(I,T);break}else e(I,T);T=T.sibling}T=Fc(x,I.mode,V),T.return=I,I=T}return o(I);case Yn:return L=x._init,R(I,T,L(x._payload),V)}if(Ui(x))return P(I,T,x,V);if(ki(x))return b(I,T,x,V);Oa(I,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,T!==null&&T.tag===6?(n(I,T.sibling),T=s(T,x),T.return=I,I=T):(n(I,T),T=jc(x,I.mode,V),T.return=I,I=T),o(I)):n(I,T)}return R}var Qs=v_(!0),__=v_(!1),xl=kr(null),Cl=null,bs=null,Hd=null;function Kd(){Hd=bs=Cl=null}function Gd(t){var e=xl.current;we(xl),t._currentValue=e}function Dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Cl=t,Hd=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Cl===null)throw Error(j(308));bs=t,Cl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var qr=null;function Qd(t){qr===null?qr=[t]:qr.push(t)}function w_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Qd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Mn(t,n)}return s=r.interleaved,s===null?(e.next=e,Qd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Mn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}function ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,r){var s=t.updateQueue;Xn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,l=i;do{var w=l.lane,A=l.eventTime;if((r&w)===w){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,b=l;switch(w=e,A=n,b.tag){case 1:if(P=b.payload,typeof P=="function"){m=P.call(A,m,w);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=b.payload,w=typeof P=="function"?P.call(A,m,w):P,w==null)break e;m=Ce({},m,w);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,w=s.effects,w===null?s.effects=[l]:w.push(l))}else A={eventTime:A,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=w;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;w=l,l=w.next,w.next=null,s.lastBaseUpdate=w,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=m}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Ho={},mn=kr(Ho),To=kr(Ho),Io=kr(Ho);function Wr(t){if(t===Ho)throw Error(j(174));return t}function Xd(t,e){switch(ge(Io,e),ge(To,t),ge(mn,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fh(e,t)}we(mn),ge(mn,e)}function Ys(){we(mn),we(To),we(Io)}function T_(t){Wr(Io.current);var e=Wr(mn.current),n=fh(e,t.type);e!==n&&(ge(To,t),ge(mn,n))}function Jd(t){To.current===t&&(we(mn),we(To))}var Ae=kr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function Zd(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Xa=qn.ReactCurrentDispatcher,Dc=qn.ReactCurrentBatchConfig,Zr=0,xe=null,je=null,We=null,Pl=!1,Ji=!1,So=0,$S=0;function st(){throw Error(j(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,s,i){if(Zr=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?HS:KS,t=n(r,s),Ji){i=0;do{if(Ji=!1,So=0,25<=i)throw Error(j(301));i+=1,We=je=null,e.updateQueue=null,Xa.current=GS,t=n(r,s)}while(Ji)}if(Xa.current=Nl,e=je!==null&&je.next!==null,Zr=0,We=je=xe=null,Pl=!1,e)throw Error(j(300));return t}function nf(){var t=So!==0;return So=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?xe.memoizedState=We=t:We=We.next=t,We}function Kt(){if(je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=We===null?xe.memoizedState:We.next;if(e!==null)We=e,je=t;else{if(t===null)throw Error(j(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},We===null?xe.memoizedState=We=t:We=We.next=t}return We}function Ao(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Zr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=f,es|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,on(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,es|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);on(i,e.memoizedState)||(Et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function I_(){}function S_(t,e){var n=xe,r=Kt(),s=e(),i=!on(r.memoizedState,s);if(i&&(r.memoizedState=s,Et=!0),r=r.queue,rf(C_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,xo(9,x_.bind(null,n,r,s,e),void 0,null),He===null)throw Error(j(349));Zr&30||A_(n,e,s)}return s}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,r){e.value=n,e.getSnapshot=r,R_(e)&&k_(t)}function C_(t,e,n){return n(function(){R_(e)&&k_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function k_(t){var e=Mn(t,1);e!==null&&sn(e,t,1,-1)}function hg(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=WS.bind(null,xe,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P_(){return Kt().memoizedState}function Ja(t,e,n,r){var s=hn();xe.flags|=t,s.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function uu(t,e,n,r){var s=Kt();r=r===void 0?null:r;var i=void 0;if(je!==null){var o=je.memoizedState;if(i=o.destroy,r!==null&&ef(r,o.deps)){s.memoizedState=xo(e,n,i,r);return}}xe.flags|=t,s.memoizedState=xo(1|e,n,i,r)}function dg(t,e){return Ja(8390656,8,t,e)}function rf(t,e){return uu(2048,8,t,e)}function N_(t,e){return uu(4,2,t,e)}function b_(t,e){return uu(4,4,t,e)}function D_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V_(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,D_.bind(null,e,t),n)}function sf(){}function O_(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M_(t,e,n){return Zr&21?(on(n,e)||(n=$v(),xe.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function BS(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{de=n,Dc.transition=r}}function j_(){return Kt().memoizedState}function qS(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F_(t))U_(e,n);else if(n=w_(t,e,n,r),n!==null){var s=mt();sn(n,t,r,s),z_(n,e,r)}}function WS(t,e,n){var r=fr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F_(t))U_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,on(l,o)){var u=e.interleaved;u===null?(s.next=s,Qd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=w_(t,e,s,r),n!==null&&(s=mt(),sn(n,t,r,s),z_(n,e,r))}}function F_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function U_(t,e){Ji=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}var Nl={readContext:Ht,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},HS={readContext:Ht,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,D_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qS.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:hg,useDebugValue:sf,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=hg(!1),e=t[0];return t=BS.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=hn();if(Te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),He===null)throw Error(j(349));Zr&30||A_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,dg(C_.bind(null,r,i,t),[t]),r.flags|=2048,xo(9,x_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=hn(),e=He.identifierPrefix;if(Te){var n=Rn,r=Cn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KS={readContext:Ht,useCallback:O_,useContext:Ht,useEffect:rf,useImperativeHandle:V_,useInsertionEffect:N_,useLayoutEffect:b_,useMemo:L_,useReducer:Vc,useRef:P_,useState:function(){return Vc(Ao)},useDebugValue:sf,useDeferredValue:function(t){var e=Kt();return M_(e,je.memoizedState,t)},useTransition:function(){var t=Vc(Ao)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:S_,useId:j_,unstable_isNewReconciler:!1},GS={readContext:Ht,useCallback:O_,useContext:Ht,useEffect:rf,useImperativeHandle:V_,useInsertionEffect:N_,useLayoutEffect:b_,useMemo:L_,useReducer:Oc,useRef:P_,useState:function(){return Oc(Ao)},useDebugValue:sf,useDeferredValue:function(t){var e=Kt();return je===null?e.memoizedState=t:M_(e,je.memoizedState,t)},useTransition:function(){var t=Oc(Ao)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:S_,useId:j_,unstable_isNewReconciler:!1};function en(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),s=fr(t),i=Dn(r,s);i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(sn(e,t,s,r),Ya(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),s=fr(t),i=Dn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(sn(e,t,s,r),Ya(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=fr(t),s=Dn(n,r);s.tag=2,e!=null&&(s.callback=e),e=hr(t,s,r),e!==null&&(sn(e,t,r,n),Ya(e,t,r))}};function fg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(s,i):!0}function $_(t,e,n){var r=!1,s=wr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(s=St(e)?Xr:ct.current,r=e.contextTypes,i=(r=r!=null)?Ks(t,s):wr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Oh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Yd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ht(i):(i=St(e)?Xr:ct.current,s.context=Ks(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Vh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&cu.enqueueReplaceState(s,s.state,null),Rl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=TI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function B_(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dl||(Dl=!0,Hh=r),Lh(t,e)},n}function q_(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Lh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=uA.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var YS=qn.ReactCurrentOwner,Et=!1;function pt(t,e,n,r){e.child=t===null?__(e,null,n,r):Qs(e,t.child,n,r)}function vg(t,e,n,r,s){n=n.render;var i=e.ref;return Us(e,s),r=tf(t,e,n,r,i,s),n=nf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,jn(t,e,s)):(Te&&n&&Bd(e),e.flags|=1,pt(t,e,r,s),e.child)}function _g(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!ff(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,W_(t,e,i,r,s)):(t=nl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return jn(t,e,s)}return e.flags|=1,t=pr(i,r),t.ref=e.ref,t.return=e,e.child=t}function W_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(vo(i,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,jn(t,e,s)}return Mh(t,e,n,r,s)}function H_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Vs,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Vs,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Vs,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(Vs,Rt),Rt|=r;return pt(t,e,s,n),e.child}function K_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,s){var i=St(n)?Xr:ct.current;return i=Ks(e,i),Us(e,s),n=tf(t,e,n,r,i,s),r=nf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,jn(t,e,s)):(Te&&r&&Bd(e),e.flags|=1,pt(t,e,n,s),e.child)}function wg(t,e,n,r,s){if(St(n)){var i=!0;Il(e)}else i=!1;if(Us(e,s),e.stateNode===null)Za(t,e),$_(e,n,r),Oh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ht(h):(h=St(n)?Xr:ct.current,h=Ks(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&pg(e,o,r,h),Xn=!1;var w=e.memoizedState;o.state=w,Rl(e,r,o,s),u=e.memoizedState,l!==r||w!==u||It.current||Xn?(typeof f=="function"&&(Vh(e,n,f,r),u=e.memoizedState),(l=Xn||fg(e,n,l,r,w,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,E_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:en(e.type,l),o.props=h,m=e.pendingProps,w=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=St(n)?Xr:ct.current,u=Ks(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||w!==u)&&pg(e,o,r,u),Xn=!1,w=e.memoizedState,o.state=w,Rl(e,r,o,s);var P=e.memoizedState;l!==m||w!==P||It.current||Xn?(typeof A=="function"&&(Vh(e,n,A,r),P=e.memoizedState),(h=Xn||fg(e,n,h,r,w,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return jh(t,e,n,r,i,s)}function jh(t,e,n,r,s,i){K_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ig(e,n,!1),jn(t,e,i);r=e.stateNode,YS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,l,i)):pt(t,e,l,i),e.memoizedState=r.state,s&&ig(e,n,!0),e.child}function G_(t){var e=t.stateNode;e.pendingContext?sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(t,e.context,!1),Xd(t,e.containerInfo)}function Eg(t,e,n,r,s){return Gs(),Wd(s),e.flags|=256,pt(t,e,n,r),e.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q_(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(Ae,s&1),t===null)return bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fu(o,r,0,null),t=Qr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Uh(n),e.memoizedState=Fh,t):of(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return XS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=pr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=pr(l,i):(i=Qr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Fh,r}return i=t.child,t=i.sibling,r=pr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&Wd(r),Qs(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(j(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=fu({mode:"visible",children:r.children},s,0,null),i=Qr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Fh,i);if(!(e.mode&1))return La(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Lc(i,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=He,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Mn(t,s),sn(r,t,s,-1))}return df(),r=Lc(Error(j(421))),La(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=cA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,kt=cr(s.nextSibling),Nt=e,Te=!0,nn=null,t!==null&&(Ut[zt++]=Cn,Ut[zt++]=Rn,Ut[zt++]=Jr,Cn=t.id,Rn=t.overflow,Jr=e),e=of(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dh(t.return,e,n)}function Mc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Y_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(pt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Mc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&kl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Mc(e,!0,n,null,i);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JS(t,e,n){switch(e.tag){case 3:G_(e),Gs();break;case 5:T_(e);break;case 1:St(e.type)&&Il(e);break;case 4:Xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(xl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?Q_(t,e,n):(ge(Ae,Ae.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ge(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return jn(t,e,n)}var X_,zh,J_,Z_;X_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};J_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Wr(mn.current);var i=null;switch(n){case"input":s=uh(t,s),r=uh(t,r),i=[];break;case"select":s=Ce({},s,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":s=dh(t,s),r=dh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}ph(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(co.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(co.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Z_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Oi(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZS(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return St(e.type)&&Tl(),it(e),null;case 3:return r=e.stateNode,Ys(),we(It),we(ct),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nn!==null&&(Qh(nn),nn=null))),zh(t,e),it(e),null;case 5:Jd(e);var s=Wr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)J_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return it(e),null}if(t=Wr(mn.current),Va(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[dn]=e,r[Eo]=i,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(s=0;s<$i.length;s++)ve($i[s],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Nm(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":Dm(r,i),ve("invalid",r)}ph(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",""+l]):co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Aa(r),bm(r,i,!0);break;case"textarea":Aa(r),Vm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=El)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Eo]=r,X_(t,e,!1,!1),e.stateNode=t;e:{switch(o=mh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),s=r;break;case"iframe":case"object":case"embed":ve("load",t),s=r;break;case"video":case"audio":for(s=0;s<$i.length;s++)ve($i[s],t);s=r;break;case"source":ve("error",t),s=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),s=r;break;case"details":ve("toggle",t),s=r;break;case"input":Nm(t,r),s=uh(t,r),ve("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ce({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Dm(t,r),s=dh(t,r),ve("invalid",t);break;default:s=r}ph(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Pv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ho(t,u):typeof u=="number"&&ho(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(co.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ve("scroll",t):u!=null&&kd(t,i,u,o))}switch(n){case"input":Aa(t),bm(t,r,!1);break;case"textarea":Aa(t),Vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ls(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)Z_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Wr(Io.current),Wr(mn.current),Va(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(i=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return it(e),null;case 13:if(we(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&kt!==null&&e.mode&1&&!(e.flags&128))y_(),Gs(),e.flags|=98560,i=!1;else if(i=Va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[dn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),i=!1}else nn!==null&&(Qh(nn),nn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Fe===0&&(Fe=3):df())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Ys(),zh(t,e),t===null&&_o(e.stateNode.containerInfo),it(e),null;case 10:return Gd(e.type._context),it(e),null;case 17:return St(e.type)&&Tl(),it(e),null;case 19:if(we(Ae),i=e.memoizedState,i===null)return it(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Oi(i,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,Oi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&be()>Js&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Te)return it(e),null}else 2*be()-i.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=be(),e.sibling=null,n=Ae.current,ge(Ae,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function eA(t,e){switch(qd(e),e.tag){case 1:return St(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),we(It),we(ct),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(we(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ae),null;case 4:return Ys(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Ma=!1,lt=!1,tA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function $h(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Ig=!1;function nA(t,e){if(Ah=vl,t=s_(),$d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,w=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)w=m,m=A;for(;;){if(m===t)break t;if(w===n&&++h===s&&(l=o),w===i&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=w,w=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},vl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var b=P.memoizedProps,R=P.memoizedState,I=e.stateNode,T=I.getSnapshotBeforeUpdate(e.elementType===e.type?b:en(e.type,b),R);I.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(V){Pe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return P=Ig,Ig=!1,P}function Zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&$h(e,n,i)}s=s.next}while(s!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function e0(t){var e=t.alternate;e!==null&&(t.alternate=null,e0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Eo],delete e[kh],delete e[jS],delete e[FS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function t0(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}var Ge=null,tn=!1;function Gn(t,e,n){for(n=n.child;n!==null;)n0(t,e,n),n=n.sibling}function n0(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:lt||Ds(n,e);case 6:var r=Ge,s=tn;Ge=null,Gn(t,e,n),Ge=r,tn=s,Ge!==null&&(tn?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(tn?(t=Ge,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),go(t)):Pc(Ge,n.stateNode));break;case 4:r=Ge,s=tn,Ge=n.stateNode.containerInfo,tn=!0,Gn(t,e,n),Ge=r,tn=s;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&$h(n,e,o),s=s.next}while(s!==r)}Gn(t,e,n);break;case 1:if(!lt&&(Ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Gn(t,e,n),lt=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tA),e.forEach(function(r){var s=hA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,tn=!1;break e;case 3:Ge=l.stateNode.containerInfo,tn=!0;break e;case 4:Ge=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(Ge===null)throw Error(j(160));n0(i,o,s),Ge=null,tn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Pe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),cn(t),r&4){try{Zi(3,t,t.return),hu(3,t)}catch(b){Pe(t,t.return,b)}try{Zi(5,t,t.return)}catch(b){Pe(t,t.return,b)}}break;case 1:Zt(e,t),cn(t),r&512&&n!==null&&Ds(n,n.return);break;case 5:if(Zt(e,t),cn(t),r&512&&n!==null&&Ds(n,n.return),t.flags&32){var s=t.stateNode;try{ho(s,"")}catch(b){Pe(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Av(s,i),mh(l,o);var h=mh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Pv(s,m):f==="dangerouslySetInnerHTML"?Rv(s,m):f==="children"?ho(s,m):kd(s,f,m,h)}switch(l){case"input":ch(s,i);break;case"textarea":xv(s,i);break;case"select":var w=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Ls(s,!!i.multiple,A,!1):w!==!!i.multiple&&(i.defaultValue!=null?Ls(s,!!i.multiple,i.defaultValue,!0):Ls(s,!!i.multiple,i.multiple?[]:"",!1))}s[Eo]=i}catch(b){Pe(t,t.return,b)}}break;case 6:if(Zt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){Pe(t,t.return,b)}}break;case 3:if(Zt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(b){Pe(t,t.return,b)}break;case 4:Zt(e,t),cn(t);break;case 13:Zt(e,t),cn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(uf=be())),r&4&&Ag(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(h=lt)||f,Zt(e,t),lt=h):Zt(e,t),cn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(w=q,A=w.child,w.tag){case 0:case 11:case 14:case 15:Zi(4,w,w.return);break;case 1:Ds(w,w.return);var P=w.stateNode;if(typeof P.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(b){Pe(r,n,b)}}break;case 5:Ds(w,w.return);break;case 22:if(w.memoizedState!==null){Cg(m);continue}}A!==null?(A.return=w,q=A):Cg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=kv("display",o))}catch(b){Pe(t,t.return,b)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(b){Pe(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Zt(e,t),cn(t),r&4&&Ag(t);break;case 21:break;default:Zt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(t0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ho(s,""),r.flags&=-33);var i=Sg(t);Wh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sg(t);qh(t,l,o);break;default:throw Error(j(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rA(t,e,n){q=t,s0(t)}function s0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ma;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||lt;l=Ma;var h=lt;if(Ma=o,(lt=u)&&!h)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Rg(s):u!==null?(u.return=o,q=u):Rg(s);for(;i!==null;)q=i,s0(i),i=i.sibling;q=s,Ma=l,lt=h}xg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):xg(t)}}function xg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&cg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&go(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}lt||e.flags&512&&Bh(e)}catch(w){Pe(e,e.return,w)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Cg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Rg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Pe(e,s,u)}}var i=e.return;try{Bh(e)}catch(u){Pe(e,i,u)}break;case 5:var o=e.return;try{Bh(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var sA=Math.ceil,bl=qn.ReactCurrentDispatcher,af=qn.ReactCurrentOwner,Bt=qn.ReactCurrentBatchConfig,oe=0,He=null,Ve=null,Xe=0,Rt=0,Vs=kr(0),Fe=0,Co=null,es=0,du=0,lf=0,eo=null,_t=null,uf=0,Js=1/0,An=null,Dl=!1,Hh=null,dr=null,ja=!1,ir=null,Vl=0,to=0,Kh=null,el=-1,tl=0;function mt(){return oe&6?be():el!==-1?el:el=be()}function fr(t){return t.mode&1?oe&2&&Xe!==0?Xe&-Xe:zS.transition!==null?(tl===0&&(tl=$v()),tl):(t=de,t!==0||(t=window.event,t=t===void 0?16:Qv(t.type)),t):1}function sn(t,e,n,r){if(50<to)throw to=0,Kh=null,Error(j(185));Bo(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(du|=n),Fe===4&&Zn(t,Xe)),At(t,r),n===1&&oe===0&&!(e.mode&1)&&(Js=be()+500,lu&&Pr()))}function At(t,e){var n=t.callbackNode;zI(t,e);var r=yl(t,t===He?Xe:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?US(kg.bind(null,t)):p_(kg.bind(null,t)),LS(function(){!(oe&6)&&Pr()}),n=null;else{switch(Bv(r)){case 1:n=Vd;break;case 4:n=Uv;break;case 16:n=gl;break;case 536870912:n=zv;break;default:n=gl}n=d0(n,i0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i0(t,e){if(el=-1,tl=0,oe&6)throw Error(j(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=yl(t,t===He?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ol(t,r);else{e=r;var s=oe;oe|=2;var i=a0();(He!==t||Xe!==e)&&(An=null,Js=be()+500,Gr(t,e));do try{aA();break}catch(l){o0(t,l)}while(!0);Kd(),bl.current=i,oe=s,Ve!==null?e=0:(He=null,Xe=0,e=Fe)}if(e!==0){if(e===2&&(s=wh(t),s!==0&&(r=s,e=Gh(t,s))),e===1)throw n=Co,Gr(t,0),Zn(t,r),At(t,be()),n;if(e===6)Zn(t,r);else{if(s=t.current.alternate,!(r&30)&&!iA(s)&&(e=Ol(t,r),e===2&&(i=wh(t),i!==0&&(r=i,e=Gh(t,i))),e===1))throw n=Co,Gr(t,0),Zn(t,r),At(t,be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Ur(t,_t,An);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=uf+500-be(),10<e)){if(yl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Rh(Ur.bind(null,t,_t,An),e);break}Ur(t,_t,An);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-rn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sA(r/1960))-r,10<r){t.timeoutHandle=Rh(Ur.bind(null,t,_t,An),r);break}Ur(t,_t,An);break;case 5:Ur(t,_t,An);break;default:throw Error(j(329))}}}return At(t,be()),t.callbackNode===n?i0.bind(null,t):null}function Gh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=_t,_t=n,e!==null&&Qh(e)),t}function Qh(t){_t===null?_t=t:_t.push.apply(_t,t)}function iA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!on(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~lf,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function kg(t){if(oe&6)throw Error(j(327));zs();var e=yl(t,0);if(!(e&1))return At(t,be()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var r=wh(t);r!==0&&(e=r,n=Gh(t,r))}if(n===1)throw n=Co,Gr(t,0),Zn(t,e),At(t,be()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,_t,An),At(t,be()),null}function cf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Js=be()+500,lu&&Pr())}}function ts(t){ir!==null&&ir.tag===0&&!(oe&6)&&zs();var e=oe;oe|=1;var n=Bt.transition,r=de;try{if(Bt.transition=null,de=1,t)return t()}finally{de=r,Bt.transition=n,oe=e,!(oe&6)&&Pr()}}function hf(){Rt=Vs.current,we(Vs)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OS(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Ys(),we(It),we(ct),Zd();break;case 5:Jd(r);break;case 4:Ys();break;case 13:we(Ae);break;case 19:we(Ae);break;case 10:Gd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(He=t,Ve=t=pr(t.current,null),Xe=Rt=e,Fe=0,Co=null,lf=du=es=0,_t=eo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}qr=null}return t}function o0(t,e){do{var n=Ve;try{if(Kd(),Xa.current=Nl,Pl){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pl=!1}if(Zr=0,We=je=xe=null,Ji=!1,So=0,af.current=null,n===null||n.return===null){Fe=1,Co=e,Ve=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var w=f.alternate;w?(f.updateQueue=w.updateQueue,f.memoizedState=w.memoizedState,f.lanes=w.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=gg(o);if(A!==null){A.flags&=-257,yg(A,o,l,i,e),A.mode&1&&mg(i,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var b=new Set;b.add(u),e.updateQueue=b}else P.add(u);break e}else{if(!(e&1)){mg(i,h,e),df();break e}u=Error(j(426))}}else if(Te&&l.mode&1){var R=gg(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),yg(R,o,l,i,e),Wd(Xs(u,l));break e}}i=u=Xs(u,l),Fe!==4&&(Fe=2),eo===null?eo=[i]:eo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=B_(i,u,e);ug(i,I);break e;case 1:l=u;var T=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(dr===null||!dr.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=q_(i,l,e);ug(i,V);break e}}i=i.return}while(i!==null)}u0(n)}catch(F){e=F,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function a0(){var t=bl.current;return bl.current=Nl,t===null?Nl:t}function df(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),He===null||!(es&268435455)&&!(du&268435455)||Zn(He,Xe)}function Ol(t,e){var n=oe;oe|=2;var r=a0();(He!==t||Xe!==e)&&(An=null,Gr(t,e));do try{oA();break}catch(s){o0(t,s)}while(!0);if(Kd(),oe=n,bl.current=r,Ve!==null)throw Error(j(261));return He=null,Xe=0,Fe}function oA(){for(;Ve!==null;)l0(Ve)}function aA(){for(;Ve!==null&&!bI();)l0(Ve)}function l0(t){var e=h0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?u0(t):Ve=e,af.current=null}function u0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eA(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Ve=null;return}}else if(n=ZS(n,e,Rt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Fe===0&&(Fe=5)}function Ur(t,e,n){var r=de,s=Bt.transition;try{Bt.transition=null,de=1,lA(t,e,n,r)}finally{Bt.transition=s,de=r}return null}function lA(t,e,n,r){do zs();while(ir!==null);if(oe&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if($I(t,i),t===He&&(Ve=He=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,d0(gl,function(){return zs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var o=de;de=1;var l=oe;oe|=4,af.current=null,nA(t,n),r0(n,t),RS(xh),vl=!!Ah,xh=Ah=null,t.current=n,rA(n),DI(),oe=l,de=o,Bt.transition=i}else t.current=n;if(ja&&(ja=!1,ir=t,Vl=s),i=t.pendingLanes,i===0&&(dr=null),LI(n.stateNode),At(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Dl)throw Dl=!1,t=Hh,Hh=null,t;return Vl&1&&t.tag!==0&&zs(),i=t.pendingLanes,i&1?t===Kh?to++:(to=0,Kh=t):to=0,Pr(),null}function zs(){if(ir!==null){var t=Bv(Vl),e=Bt.transition,n=de;try{if(Bt.transition=null,de=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,Vl=0,oe&6)throw Error(j(331));var s=oe;for(oe|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Zi(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var w=f.sibling,A=f.return;if(e0(f),f===h){q=null;break}if(w!==null){w.return=A,q=w;break}q=A}}}var P=i.alternate;if(P!==null){var b=P.child;if(b!==null){P.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zi(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,q=I;break e}q=i.return}}var T=t.current;for(q=T;q!==null;){o=q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,q=x;else e:for(o=T;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch(F){Pe(l,l.return,F)}if(l===o){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(oe=s,Pr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(ru,t)}catch{}r=!0}return r}finally{de=n,Bt.transition=e}}return!1}function Pg(t,e,n){e=Xs(n,e),e=B_(t,e,1),t=hr(t,e,1),e=mt(),t!==null&&(Bo(t,1,e),At(t,e))}function Pe(t,e,n){if(t.tag===3)Pg(t,t,n);else for(;e!==null;){if(e.tag===3){Pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=Xs(n,t),t=q_(e,t,1),e=hr(e,t,1),t=mt(),e!==null&&(Bo(e,1,t),At(e,t));break}}e=e.return}}function uA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Xe&n)===n&&(Fe===4||Fe===3&&(Xe&130023424)===Xe&&500>be()-uf?Gr(t,0):lf|=n),At(t,e)}function c0(t,e){e===0&&(t.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var n=mt();t=Mn(t,e),t!==null&&(Bo(t,e,n),At(t,n))}function cA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c0(t,n)}function hA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),c0(t,n)}var h0;h0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,JS(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Te&&e.flags&1048576&&m_(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var s=Ks(e,ct.current);Us(e,n),s=tf(null,e,r,t,s,n);var i=nf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,Il(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yd(e),s.updater=cu,e.stateNode=s,s._reactInternals=e,Oh(e,r,t,n),e=jh(null,e,r,!0,i,n)):(e.tag=0,Te&&i&&Bd(e),pt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=fA(r),t=en(r,t),s){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=wg(null,e,r,t,n);break e;case 11:e=vg(null,e,r,t,n);break e;case 14:e=_g(null,e,r,en(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),Mh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),wg(t,e,r,s,n);case 3:e:{if(G_(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,E_(t,e),Rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xs(Error(j(423)),e),e=Eg(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(j(424)),e),e=Eg(t,e,r,n,s);break e}else for(kt=cr(e.stateNode.containerInfo.firstChild),Nt=e,Te=!0,nn=null,n=__(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===s){e=jn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return T_(e),t===null&&bh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ch(r,s)?o=null:i!==null&&Ch(r,i)&&(e.flags|=32),K_(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&bh(e),null;case 13:return Q_(t,e,n);case 4:return Xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),vg(t,e,r,s,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(xl,r._currentValue),r._currentValue=o,i!==null)if(on(i.value,o)){if(i.children===s.children&&!It.current){e=jn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Dn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Dh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}pt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Us(e,n),s=Ht(s),r=r(s),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,s=en(r,e.pendingProps),s=en(r.type,s),_g(t,e,r,s,n);case 15:return W_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),Za(t,e),e.tag=1,St(r)?(t=!0,Il(e)):t=!1,Us(e,n),$_(e,r,s),Oh(e,r,s,n),jh(null,e,r,!0,t,n);case 19:return Y_(t,e,n);case 22:return H_(t,e,n)}throw Error(j(156,e.tag))};function d0(t,e){return Fv(t,e)}function dA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new dA(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fA(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===bd)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Qr(n.children,s,i,e);case Pd:o=8,s|=8;break;case ih:return t=$t(12,n,e,s|2),t.elementType=ih,t.lanes=i,t;case oh:return t=$t(13,n,e,s),t.elementType=oh,t.lanes=i,t;case ah:return t=$t(19,n,e,s),t.elementType=ah,t.lanes=i,t;case Tv:return fu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wv:o=10;break e;case Ev:o=9;break e;case Nd:o=11;break e;case bd:o=14;break e;case Yn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=$t(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Qr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function fu(t,e,n,r){return t=$t(22,t,r,e),t.elementType=Tv,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,s,i,o,l,u){return t=new pA(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=$t(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(i),t}function mA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function f0(t){if(!t)return wr;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(St(n))return f_(t,n,e)}return e}function p0(t,e,n,r,s,i,o,l,u){return t=pf(n,r,!0,t,s,i,o,l,u),t.context=f0(null),n=t.current,r=mt(),s=fr(n),i=Dn(r,s),i.callback=e??null,hr(n,i,s),t.current.lanes=s,Bo(t,s,r),At(t,r),t}function pu(t,e,n,r){var s=e.current,i=mt(),o=fr(s);return n=f0(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(s,e,o),t!==null&&(sn(t,s,o,i),Ya(t,s,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){Ng(t,e),(t=t.alternate)&&Ng(t,e)}function gA(){return null}var m0=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}mu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));pu(t,e,null,null)};mu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){pu(null,t,null,null)}),e[Ln]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&Gv(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bg(){}function yA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Ll(o);i.call(h)}}var o=p0(e,r,t,0,null,!1,!1,"",bg);return t._reactRootContainer=o,t[Ln]=o.current,_o(t.nodeType===8?t.parentNode:t),ts(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Ll(u);l.call(h)}}var u=pf(t,0,!1,null,null,!1,!1,"",bg);return t._reactRootContainer=u,t[Ln]=u.current,_o(t.nodeType===8?t.parentNode:t),ts(function(){pu(e,u,n,r)}),u}function yu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ll(o);l.call(u)}}pu(e,o,t,s)}else o=yA(n,e,t,s,r);return Ll(o)}qv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(Od(e,n|1),At(e,be()),!(oe&6)&&(Js=be()+500,Pr()))}break;case 13:ts(function(){var r=Mn(t,1);if(r!==null){var s=mt();sn(r,t,1,s)}}),mf(t,1)}};Ld=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=mt();sn(e,t,134217728,n)}mf(t,134217728)}};Wv=function(t){if(t.tag===13){var e=fr(t),n=Mn(t,e);if(n!==null){var r=mt();sn(n,t,e,r)}mf(t,e)}};Hv=function(){return de};Kv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};yh=function(t,e,n){switch(e){case"input":if(ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=au(r);if(!s)throw Error(j(90));Sv(r),ch(r,s)}}}break;case"textarea":xv(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};Dv=cf;Vv=ts;var vA={usingClientEntryPoint:!1,Events:[Wo,Rs,au,Nv,bv,cf]},Li={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_A={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mv(t),t===null?null:t.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||gA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{ru=Fa.inject(_A),pn=Fa}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(j(200));return mA(t,e,null,n)};Lt.createRoot=function(t,e){if(!yf(t))throw Error(j(299));var n=!1,r="",s=m0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,s),t[Ln]=e.current,_o(t.nodeType===8?t.parentNode:t),new gf(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Mv(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return ts(t)};Lt.hydrate=function(t,e,n){if(!gu(e))throw Error(j(200));return yu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=m0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=p0(e,null,t,1,n??null,s,!1,i,o),t[Ln]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new mu(e)};Lt.render=function(t,e,n){if(!gu(e))throw Error(j(200));return yu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!gu(t))throw Error(j(40));return t._reactRootContainer?(ts(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Lt.unstable_batchedUpdates=cf;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return yu(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function g0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g0)}catch(t){console.error(t)}}g0(),gv.exports=Lt;var wA=gv.exports,Dg=wA;rh.createRoot=Dg.createRoot,rh.hydrateRoot=Dg.hydrateRoot;var Vg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},EA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},v0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(w=64)),r.push(n[f],n[m],n[w],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new TA;const w=i<<2|l>>4;if(r.push(w),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IA=function(t){const e=y0(t);return v0.encodeByteArray(e,!0)},Ml=function(t){return IA(t).replace(/\./g,"")},_0=function(t){try{return v0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=()=>SA().__FIREBASE_DEFAULTS__,xA=()=>{if(typeof process>"u"||typeof Vg>"u")return;const t=Vg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_0(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return AA()||xA()||CA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w0=t=>{var e,n;return(n=(e=vu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RA=t=>{const e=w0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E0=()=>{var t;return(t=vu())===null||t===void 0?void 0:t.config},T0=t=>{var e;return(e=vu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ml(JSON.stringify(n)),Ml(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function bA(){var t;const e=(t=vu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OA(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LA(){return!bA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S0(){try{return typeof indexedDB=="object"}catch{return!1}}function A0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function MA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jA,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?FA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new un(s,l,r)}}function FA(t,e){return t.replace(UA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UA=/\{\$([^}]+)}/g;function zA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Og(i)&&Og(o)){if(!Ro(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Og(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $A(t,e){const n=new BA(t,e);return n.subscribe.bind(n)}class BA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Uc),s.error===void 0&&(s.error=Uc),s.complete===void 0&&(s.complete=Uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1e3,HA=2,KA=4*60*60*1e3,GA=.5;function Lg(t,e=WA,n=HA){const r=e*Math.pow(n,t),s=Math.round(GA*r*(Math.random()-.5)*2);return Math.min(KA,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XA(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YA(t){return t===zr?void 0:t}function XA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const ZA={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ex=re.INFO,tx={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},nx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=nx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const rx=(t,e)=>e.some(n=>t instanceof n);let Mg,jg;function sx(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ix(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x0=new WeakMap,Yh=new WeakMap,C0=new WeakMap,zc=new WeakMap,vf=new WeakMap;function ox(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&x0.set(n,t)}).catch(()=>{}),vf.set(e,t),e}function ax(t){if(Yh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yh.set(t,e)}let Xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lx(t){Xh=t(Xh)}function ux(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return C0.set(r,e.sort?e.sort():[e]),mr(r)}:ix().includes(t)?function(...e){return t.apply($c(this),e),mr(x0.get(this))}:function(...e){return mr(t.apply($c(this),e))}}function cx(t){return typeof t=="function"?ux(t):(t instanceof IDBTransaction&&ax(t),rx(t,sx())?new Proxy(t,Xh):t)}function mr(t){if(t instanceof IDBRequest)return ox(t);if(zc.has(t))return zc.get(t);const e=cx(t);return e!==t&&(zc.set(t,e),vf.set(e,t)),e}const $c=t=>vf.get(t);function R0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hx=["get","getKey","getAll","getAllKeys","count"],dx=["put","add","delete","clear"],Bc=new Map;function Fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Bc.set(e,i),i}lx(t=>({...t,get:(e,n,r)=>Fg(e,n)||t.get(e,n,r),has:(e,n)=>!!Fg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(px(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function px(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",Ug="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new _u("@firebase/app"),mx="@firebase/app-compat",gx="@firebase/analytics-compat",yx="@firebase/analytics",vx="@firebase/app-check-compat",_x="@firebase/app-check",wx="@firebase/auth",Ex="@firebase/auth-compat",Tx="@firebase/database",Ix="@firebase/data-connect",Sx="@firebase/database-compat",Ax="@firebase/functions",xx="@firebase/functions-compat",Cx="@firebase/installations",Rx="@firebase/installations-compat",kx="@firebase/messaging",Px="@firebase/messaging-compat",Nx="@firebase/performance",bx="@firebase/performance-compat",Dx="@firebase/remote-config",Vx="@firebase/remote-config-compat",Ox="@firebase/storage",Lx="@firebase/storage-compat",Mx="@firebase/firestore",jx="@firebase/vertexai-preview",Fx="@firebase/firestore-compat",Ux="firebase",zx="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="[DEFAULT]",$x={[Jh]:"fire-core",[mx]:"fire-core-compat",[yx]:"fire-analytics",[gx]:"fire-analytics-compat",[_x]:"fire-app-check",[vx]:"fire-app-check-compat",[wx]:"fire-auth",[Ex]:"fire-auth-compat",[Tx]:"fire-rtdb",[Ix]:"fire-data-connect",[Sx]:"fire-rtdb-compat",[Ax]:"fire-fn",[xx]:"fire-fn-compat",[Cx]:"fire-iid",[Rx]:"fire-iid-compat",[kx]:"fire-fcm",[Px]:"fire-fcm-compat",[Nx]:"fire-perf",[bx]:"fire-perf-compat",[Dx]:"fire-rc",[Vx]:"fire-rc-compat",[Ox]:"fire-gcs",[Lx]:"fire-gcs-compat",[Mx]:"fire-fst",[Fx]:"fire-fst-compat",[jx]:"fire-vertex","fire-js":"fire-js",[Ux]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map,Bx=new Map,ed=new Map;function zg(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(ed.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,t);for(const n of jl.values())zg(n,t);for(const n of Bx.values())zg(n,t);return!0}function hs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new cs("app","Firebase",qx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=zx;function k0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gr.create("bad-app-name",{appName:String(s)});if(n||(n=E0()),!n)throw gr.create("no-options");const i=jl.get(s);if(i){if(Ro(n,i.options)&&Ro(r,i.config))return i;throw gr.create("duplicate-app",{appName:s})}const o=new JA(s);for(const u of ed.values())o.addComponent(u);const l=new Wx(n,r,o);return jl.set(s,l),l}function _f(t=Zh){const e=jl.get(t);if(!e&&t===Zh&&E0())return k0();if(!e)throw gr.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=$x[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(l.join(" "));return}wn(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="firebase-heartbeat-database",Kx=1,ko="firebase-heartbeat-store";let qc=null;function P0(){return qc||(qc=R0(Hx,Kx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),qc}async function Gx(t){try{const n=(await P0()).transaction(ko),r=await n.objectStore(ko).get(N0(t));return await n.done,r}catch(e){if(e instanceof un)Fn.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function $g(t,e){try{const r=(await P0()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,N0(t)),await r.done}catch(n){if(n instanceof un)Fn.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function N0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=1024,Yx=30*24*60*60*1e3;class Xx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Yx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bg(),{heartbeatsToSend:r,unsentEntries:s}=Jx(this._heartbeatsCache.heartbeats),i=Ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function Bg(){return new Date().toISOString().substring(0,10)}function Jx(t,e=Qx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S0()?A0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qg(t){return Ml(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){wn(new an("platform-logger",e=>new fx(e),"PRIVATE")),wn(new an("heartbeat",e=>new Xx(e),"PRIVATE")),qt(Jh,Ug,t),qt(Jh,Ug,"esm2017"),qt("fire-js","")}eC("");var tC="firebase",nC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(tC,nC,"app");const b0="@firebase/installations",wf="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=1e4,V0=`w:${wf}`,O0="FIS_v2",rC="https://firebaseinstallations.googleapis.com/v1",sC=60*60*1e3,iC="installations",oC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ns=new cs(iC,oC,aC);function L0(t){return t instanceof un&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0({projectId:t}){return`${rC}/projects/${t}/installations`}function j0(t){return{token:t.token,requestStatus:2,expiresIn:uC(t.expiresIn),creationTime:Date.now()}}async function F0(t,e){const r=(await e.json()).error;return ns.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function U0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lC(t,{refreshToken:e}){const n=U0(t);return n.append("Authorization",cC(e)),n}async function z0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uC(t){return Number(t.replace("s","000"))}function cC(t){return`${O0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=M0(t),s=U0(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:O0,appId:t.appId,sdkVersion:V0},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await z0(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:j0(h.authToken)}}else throw await F0("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=/^[cdef][\w-]{21}$/,td="";function pC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mC(t);return fC.test(n)?n:td}catch{return td}}function mC(t){return dC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Map;function q0(t,e){const n=wu(t);W0(n,e),gC(n,e)}function W0(t,e){const n=B0.get(t);if(n)for(const r of n)r(e)}function gC(t,e){const n=yC();n&&n.postMessage({key:t,fid:e}),vC()}let Hr=null;function yC(){return!Hr&&"BroadcastChannel"in self&&(Hr=new BroadcastChannel("[Firebase] FID Change"),Hr.onmessage=t=>{W0(t.data.key,t.data.fid)}),Hr}function vC(){B0.size===0&&Hr&&(Hr.close(),Hr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C="firebase-installations-database",wC=1,rs="firebase-installations-store";let Wc=null;function Ef(){return Wc||(Wc=R0(_C,wC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}})),Wc}async function Fl(t,e){const n=wu(t),s=(await Ef()).transaction(rs,"readwrite"),i=s.objectStore(rs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&q0(t,e.fid),e}async function H0(t){const e=wu(t),r=(await Ef()).transaction(rs,"readwrite");await r.objectStore(rs).delete(e),await r.done}async function Eu(t,e){const n=wu(t),s=(await Ef()).transaction(rs,"readwrite"),i=s.objectStore(rs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&q0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(t){let e;const n=await Eu(t.appConfig,r=>{const s=EC(r),i=TC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===td?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function EC(t){const e=t||{fid:pC(),registrationStatus:0};return K0(e)}function TC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ns.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=IC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SC(t)}:{installationEntry:e}}async function IC(t,e){try{const n=await hC(t,e);return Fl(t.appConfig,n)}catch(n){throw L0(n)&&n.customData.serverCode===409?await H0(t.appConfig):await Fl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function SC(t){let e=await Wg(t.appConfig);for(;e.registrationStatus===1;)await $0(100),e=await Wg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tf(t);return r||n}return e}function Wg(t){return Eu(t,e=>{if(!e)throw ns.create("installation-not-found");return K0(e)})}function K0(t){return AC(t)?{fid:t.fid,registrationStatus:0}:t}function AC(t){return t.registrationStatus===1&&t.registrationTime+D0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC({appConfig:t,heartbeatServiceProvider:e},n){const r=CC(t,n),s=lC(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:V0,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await z0(()=>fetch(r,l));if(u.ok){const h=await u.json();return j0(h)}else throw await F0("Generate Auth Token",u)}function CC(t,{fid:e}){return`${M0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(t,e=!1){let n;const r=await Eu(t.appConfig,i=>{if(!G0(i))throw ns.create("not-registered");const o=i.authToken;if(!e&&PC(o))return i;if(o.requestStatus===1)return n=RC(t,e),i;{if(!navigator.onLine)throw ns.create("app-offline");const l=bC(i);return n=kC(t,l),l}});return n?await n:r.authToken}async function RC(t,e){let n=await Hg(t.appConfig);for(;n.authToken.requestStatus===1;)await $0(100),n=await Hg(t.appConfig);const r=n.authToken;return r.requestStatus===0?If(t,e):r}function Hg(t){return Eu(t,e=>{if(!G0(e))throw ns.create("not-registered");const n=e.authToken;return DC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kC(t,e){try{const n=await xC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Fl(t.appConfig,r),n}catch(n){if(L0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await H0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fl(t.appConfig,r)}throw n}}function G0(t){return t!==void 0&&t.registrationStatus===2}function PC(t){return t.requestStatus===2&&!NC(t)}function NC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sC}function bC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function DC(t){return t.requestStatus===1&&t.requestTime+D0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t){const e=t,{installationEntry:n,registrationPromise:r}=await Tf(e);return r?r.catch(console.error):If(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e=!1){const n=t;return await LC(n),(await If(n,e)).token}async function LC(t){const{registrationPromise:e}=await Tf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){if(!t||!t.options)throw Hc("App Configuration");if(!t.name)throw Hc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hc(t){return ns.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="installations",jC="installations-internal",FC=t=>{const e=t.getProvider("app").getImmediate(),n=MC(e),r=hs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UC=t=>{const e=t.getProvider("app").getImmediate(),n=hs(e,Q0).getImmediate();return{getId:()=>VC(n),getToken:s=>OC(n,s)}};function zC(){wn(new an(Q0,FC,"PUBLIC")),wn(new an(jC,UC,"PRIVATE"))}zC();qt(b0,wf);qt(b0,wf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="analytics",$C="firebase_id",BC="origin",qC=60*1e3,WC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new _u("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new cs("analytics","Analytics",HC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){if(!t.startsWith(Sf)){const e=bt.create("invalid-gtag-resource",{gtagURL:t});return xt.warn(e.message),""}return t}function Y0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function GC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function QC(t,e){const n=GC("firebase-js-sdk-policy",{createScriptURL:KC}),r=document.createElement("script"),s=`${Sf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function YC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XC(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await Y0(n)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){xt.error(l)}t("config",s,i)}async function JC(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await Y0(n);for(const u of o){const h=l.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){xt.error(i)}}function ZC(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await JC(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await XC(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){xt.error(l)}}return s}function e1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ZC(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function t1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=30,r1=1e3;class s1{constructor(e={},n=r1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const X0=new s1;function i1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function o1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:i1(r)},i=WC.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function a1(t,e=X0,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw bt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new c1;return setTimeout(async()=>{l.abort()},qC),J0({appId:r,apiKey:s,measurementId:i},o,l,e)}async function J0(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=X0){var i;const{appId:o,measurementId:l}=t;try{await l1(r,e)}catch(u){if(l)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await o1(t);return s.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!u1(h)){if(s.deleteThrottleMetadata(o),l)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Lg(n,s.intervalMillis,n1):Lg(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,m),xt.debug(`Calling attemptFetch again in ${f} millis`),J0(t,m,r,s)}}function l1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function u1(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class c1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function h1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(){if(S0())try{await A0()}catch(t){return xt.warn(bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return xt.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function f1(t,e,n,r,s,i,o){var l;const u=a1(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>xt.error(A)),e.push(u);const h=d1().then(A=>{if(A)return r.getId()}),[f,m]=await Promise.all([u,h]);t1(i)||QC(i,f.measurementId),s("js",new Date);const w=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return w[BC]="firebase",w.update=!0,m!=null&&(w[$C]=m),s("config",f.measurementId,w),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.app=e}_delete(){return delete no[this.app.options.appId],Promise.resolve()}}let no={},Kg=[];const Gg={};let Kc="dataLayer",m1="gtag",Qg,Z0,Yg=!1;function g1(){const t=[];if(I0()&&t.push("This is a browser extension environment."),MA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=bt.create("invalid-analytics-context",{errorInfo:e});xt.warn(n.message)}}function y1(t,e,n){g1();const r=t.options.appId;if(!r)throw bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(no[r]!=null)throw bt.create("already-exists",{id:r});if(!Yg){YC(Kc);const{wrappedGtag:i,gtagCore:o}=e1(no,Kg,Gg,Kc,m1);Z0=i,Qg=o,Yg=!0}return no[r]=f1(t,Kg,Gg,e,Qg,Kc,n),new p1(t)}function v1(t=_f()){t=$e(t);const e=hs(t,Ul);return e.isInitialized()?e.getImmediate():_1(t)}function _1(t,e={}){const n=hs(t,Ul);if(n.isInitialized()){const s=n.getImmediate();if(Ro(e,n.getOptions()))return s;throw bt.create("already-initialized")}return n.initialize({options:e})}function w1(t,e,n,r){t=$e(t),h1(Z0,no[t.app.options.appId],e,n,r).catch(s=>xt.error(s))}const Xg="@firebase/analytics",Jg="0.10.8";function E1(){wn(new an(Ul,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return y1(r,s,n)},"PUBLIC")),wn(new an("analytics-internal",t,"PRIVATE")),qt(Xg,Jg),qt(Xg,Jg,"esm2017");function t(e){try{const n=e.getProvider(Ul).getImmediate();return{logEvent:(r,s,i)=>w1(n,r,s,i)}}catch(n){throw bt.create("interop-component-reg-failed",{reason:n})}}}E1();var Zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,ew;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,g){function v(){}v.prototype=g.prototype,y.D=g.prototype,y.prototype=new v,y.prototype.constructor=y,y.C=function(E,C,k){for(var S=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)S[Me-2]=arguments[Me];return g.prototype[C].apply(E,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)E[C]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(C=0;16>C;++C)E[C]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=y.g[0],v=y.g[1],C=y.g[2];var k=y.g[3],S=g+(k^v&(C^k))+E[0]+3614090360&4294967295;g=v+(S<<7&4294967295|S>>>25),S=k+(C^g&(v^C))+E[1]+3905402710&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(v^k&(g^v))+E[2]+606105819&4294967295,C=k+(S<<17&4294967295|S>>>15),S=v+(g^C&(k^g))+E[3]+3250441966&4294967295,v=C+(S<<22&4294967295|S>>>10),S=g+(k^v&(C^k))+E[4]+4118548399&4294967295,g=v+(S<<7&4294967295|S>>>25),S=k+(C^g&(v^C))+E[5]+1200080426&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(v^k&(g^v))+E[6]+2821735955&4294967295,C=k+(S<<17&4294967295|S>>>15),S=v+(g^C&(k^g))+E[7]+4249261313&4294967295,v=C+(S<<22&4294967295|S>>>10),S=g+(k^v&(C^k))+E[8]+1770035416&4294967295,g=v+(S<<7&4294967295|S>>>25),S=k+(C^g&(v^C))+E[9]+2336552879&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(v^k&(g^v))+E[10]+4294925233&4294967295,C=k+(S<<17&4294967295|S>>>15),S=v+(g^C&(k^g))+E[11]+2304563134&4294967295,v=C+(S<<22&4294967295|S>>>10),S=g+(k^v&(C^k))+E[12]+1804603682&4294967295,g=v+(S<<7&4294967295|S>>>25),S=k+(C^g&(v^C))+E[13]+4254626195&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(v^k&(g^v))+E[14]+2792965006&4294967295,C=k+(S<<17&4294967295|S>>>15),S=v+(g^C&(k^g))+E[15]+1236535329&4294967295,v=C+(S<<22&4294967295|S>>>10),S=g+(C^k&(v^C))+E[1]+4129170786&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^C&(g^v))+E[6]+3225465664&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^v&(k^g))+E[11]+643717713&4294967295,C=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(C^k))+E[0]+3921069994&4294967295,v=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(v^C))+E[5]+3593408605&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^C&(g^v))+E[10]+38016083&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^v&(k^g))+E[15]+3634488961&4294967295,C=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(C^k))+E[4]+3889429448&4294967295,v=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(v^C))+E[9]+568446438&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^C&(g^v))+E[14]+3275163606&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^v&(k^g))+E[3]+4107603335&4294967295,C=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(C^k))+E[8]+1163531501&4294967295,v=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(v^C))+E[13]+2850285829&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^C&(g^v))+E[2]+4243563512&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^v&(k^g))+E[7]+1735328473&4294967295,C=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(C^k))+E[12]+2368359562&4294967295,v=C+(S<<20&4294967295|S>>>12),S=g+(v^C^k)+E[5]+4294588738&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^C)+E[8]+2272392833&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^v)+E[11]+1839030562&4294967295,C=k+(S<<16&4294967295|S>>>16),S=v+(C^k^g)+E[14]+4259657740&4294967295,v=C+(S<<23&4294967295|S>>>9),S=g+(v^C^k)+E[1]+2763975236&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^C)+E[4]+1272893353&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^v)+E[7]+4139469664&4294967295,C=k+(S<<16&4294967295|S>>>16),S=v+(C^k^g)+E[10]+3200236656&4294967295,v=C+(S<<23&4294967295|S>>>9),S=g+(v^C^k)+E[13]+681279174&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^C)+E[0]+3936430074&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^v)+E[3]+3572445317&4294967295,C=k+(S<<16&4294967295|S>>>16),S=v+(C^k^g)+E[6]+76029189&4294967295,v=C+(S<<23&4294967295|S>>>9),S=g+(v^C^k)+E[9]+3654602809&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^C)+E[12]+3873151461&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^v)+E[15]+530742520&4294967295,C=k+(S<<16&4294967295|S>>>16),S=v+(C^k^g)+E[2]+3299628645&4294967295,v=C+(S<<23&4294967295|S>>>9),S=g+(C^(v|~k))+E[0]+4096336452&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~C))+E[7]+1126891415&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~v))+E[14]+2878612391&4294967295,C=k+(S<<15&4294967295|S>>>17),S=v+(k^(C|~g))+E[5]+4237533241&4294967295,v=C+(S<<21&4294967295|S>>>11),S=g+(C^(v|~k))+E[12]+1700485571&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~C))+E[3]+2399980690&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~v))+E[10]+4293915773&4294967295,C=k+(S<<15&4294967295|S>>>17),S=v+(k^(C|~g))+E[1]+2240044497&4294967295,v=C+(S<<21&4294967295|S>>>11),S=g+(C^(v|~k))+E[8]+1873313359&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~C))+E[15]+4264355552&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~v))+E[6]+2734768916&4294967295,C=k+(S<<15&4294967295|S>>>17),S=v+(k^(C|~g))+E[13]+1309151649&4294967295,v=C+(S<<21&4294967295|S>>>11),S=g+(C^(v|~k))+E[4]+4149444226&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~C))+E[11]+3174756917&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~v))+E[2]+718787259&4294967295,C=k+(S<<15&4294967295|S>>>17),S=v+(k^(C|~g))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+g&4294967295,y.g[1]=y.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,y.g[2]=y.g[2]+C&4294967295,y.g[3]=y.g[3]+k&4294967295}r.prototype.u=function(y,g){g===void 0&&(g=y.length);for(var v=g-this.blockSize,E=this.B,C=this.h,k=0;k<g;){if(C==0)for(;k<=v;)s(this,y,k),k+=this.blockSize;if(typeof y=="string"){for(;k<g;)if(E[C++]=y.charCodeAt(k++),C==this.blockSize){s(this,E),C=0;break}}else for(;k<g;)if(E[C++]=y[k++],C==this.blockSize){s(this,E),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var g=1;g<y.length-8;++g)y[g]=0;var v=8*this.o;for(g=y.length-8;g<y.length;++g)y[g]=v&255,v/=256;for(this.u(y),y=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)y[v++]=this.g[g]>>>E&255;return y};function i(y,g){var v=l;return Object.prototype.hasOwnProperty.call(v,y)?v[y]:v[y]=g(y)}function o(y,g){this.h=g;for(var v=[],E=!0,C=y.length-1;0<=C;C--){var k=y[C]|0;E&&k==g||(v[C]=k,E=!1)}this.g=v}var l={};function u(y){return-128<=y&&128>y?i(y,function(g){return new o([g|0],0>g?-1:0)}):new o([y|0],0>y?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return m;if(0>y)return R(h(-y));for(var g=[],v=1,E=0;y>=v;E++)g[E]=y/v|0,v*=4294967296;return new o(g,0)}function f(y,g){if(y.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(y.charAt(0)=="-")return R(f(y.substring(1),g));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),E=m,C=0;C<y.length;C+=8){var k=Math.min(8,y.length-C),S=parseInt(y.substring(C,C+k),g);8>k?(k=h(Math.pow(g,k)),E=E.j(k).add(h(S))):(E=E.j(v),E=E.add(h(S)))}return E}var m=u(0),w=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-R(this).m();for(var y=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);y+=(0<=E?E:4294967296+E)*g,g*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(b(this))return"-"+R(this).toString(y);for(var g=h(Math.pow(y,6)),v=this,E="";;){var C=V(v,g).g;v=I(v,C.j(g));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(y);if(v=C,P(v))return k+E;for(;6>k.length;)k="0"+k;E=k+E}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var g=0;g<y.g.length;g++)if(y.g[g]!=0)return!1;return!0}function b(y){return y.h==-1}t.l=function(y){return y=I(this,y),b(y)?-1:P(y)?0:1};function R(y){for(var g=y.g.length,v=[],E=0;E<g;E++)v[E]=~y.g[E];return new o(v,~y.h).add(w)}t.abs=function(){return b(this)?R(this):this},t.add=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],E=0,C=0;C<=g;C++){var k=E+(this.i(C)&65535)+(y.i(C)&65535),S=(k>>>16)+(this.i(C)>>>16)+(y.i(C)>>>16);E=S>>>16,k&=65535,S&=65535,v[C]=S<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(y,g){return y.add(R(g))}t.j=function(y){if(P(this)||P(y))return m;if(b(this))return b(y)?R(this).j(R(y)):R(R(this).j(y));if(b(y))return R(this.j(R(y)));if(0>this.l(A)&&0>y.l(A))return h(this.m()*y.m());for(var g=this.g.length+y.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<y.g.length;C++){var k=this.i(E)>>>16,S=this.i(E)&65535,Me=y.i(C)>>>16,se=y.i(C)&65535;v[2*E+2*C]+=S*se,T(v,2*E+2*C),v[2*E+2*C+1]+=k*se,T(v,2*E+2*C+1),v[2*E+2*C+1]+=S*Me,T(v,2*E+2*C+1),v[2*E+2*C+2]+=k*Me,T(v,2*E+2*C+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new o(v,0)};function T(y,g){for(;(y[g]&65535)!=y[g];)y[g+1]+=y[g]>>>16,y[g]&=65535,g++}function x(y,g){this.g=y,this.h=g}function V(y,g){if(P(g))throw Error("division by zero");if(P(y))return new x(m,m);if(b(y))return g=V(R(y),g),new x(R(g.g),R(g.h));if(b(g))return g=V(y,R(g)),new x(R(g.g),g.h);if(30<y.g.length){if(b(y)||b(g))throw Error("slowDivide_ only works with positive integers.");for(var v=w,E=g;0>=E.l(y);)v=F(v),E=F(E);var C=L(v,1),k=L(E,1);for(E=L(E,2),v=L(v,2);!P(E);){var S=k.add(E);0>=S.l(y)&&(C=C.add(v),k=S),E=L(E,1),v=L(v,1)}return g=I(y,C.j(g)),new x(C,g)}for(C=m;0<=y.l(g);){for(v=Math.max(1,Math.floor(y.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),k=h(v),S=k.j(g);b(S)||0<S.l(y);)v-=E,k=h(v),S=k.j(g);P(k)&&(k=w),C=C.add(k),y=I(y,S)}return new x(C,y)}t.A=function(y){return V(this,y).h},t.and=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&y.i(E);return new o(v,this.h&y.h)},t.or=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|y.i(E);return new o(v,this.h|y.h)},t.xor=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^y.i(E);return new o(v,this.h^y.h)};function F(y){for(var g=y.g.length+1,v=[],E=0;E<g;E++)v[E]=y.i(E)<<1|y.i(E-1)>>>31;return new o(v,y.h)}function L(y,g){var v=g>>5;g%=32;for(var E=y.g.length-v,C=[],k=0;k<E;k++)C[k]=0<g?y.i(k+v)>>>g|y.i(k+v+1)<<32-g:y.i(k+v);return new o(C,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ew=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Yr=o}).apply(typeof Zg<"u"?Zg:typeof self<"u"?self:typeof window<"u"?window:{});var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tw,Bi,nw,rl,nd,rw,sw,iw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ua=="object"&&Ua];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in d))break e;d=d[N]}a=a[a.length-1],_=d[a],c=c(_),c!=_&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,_=!1,N={next:function(){if(!_&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function w(a,c,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,w.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,N,D){for(var z=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)z[pe-2]=arguments[pe];return c.prototype[N].apply(_,z)}}function b(a){const c=a.length;if(0<c){const d=Array(c);for(let _=0;_<c;_++)d[_]=a[_];return d}return[]}function R(a,c){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(u(_)){const N=a.length||0,D=_.length||0;a.length=N+D;for(let z=0;z<D;z++)a[N+z]=_[z]}else a.push(_)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function T(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function L(a,c,d){for(const _ in a)c.call(d,a[_],_,a)}function y(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(d in _)a[d]=_[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function S(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Me{constructor(){this.h=this.g=null}add(c,d){const _=se.get();_.set(c,d),this.h?this.h.next=_:this.g=_,this.h=_}}var se=new I(()=>new me,a=>a.reset());class me{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,$=!1,G=new Me,Q=()=>{const a=l.Promise.resolve(void 0);ae=()=>{a.then(he)}};var he=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){k(d)}var c=se;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var jt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Qt(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{V(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Yt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Qt.aa.h.call(this)}}P(Qt,Se);var Yt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),ee=0;function Ee(a,c,d,_,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!_,this.ha=N,this.key=++ee,this.da=this.fa=!1}function Xt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Tn(a){this.src=a,this.g={},this.h=0}Tn.prototype.add=function(a,c,d,_,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=Vr(a,c,_,N);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Ee(c,this.src,D,!!_,N),c.fa=d,a.push(c)),c};function ps(a,c){var d=c.type;if(d in a.g){var _=a.g[d],N=Array.prototype.indexOf.call(_,c,void 0),D;(D=0<=N)&&Array.prototype.splice.call(_,N,1),D&&(Xt(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Vr(a,c,d,_){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==_)return N}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),Gu={};function xp(a,c,d,_,N){if(Array.isArray(c)){for(var D=0;D<c.length;D++)xp(a,c[D],d,_,N);return null}return d=kp(d),a&&a[Ft]?a.K(c,d,h(_)?!!_.capture:!1,N):vT(a,c,d,!1,_,N)}function vT(a,c,d,_,N,D){if(!c)throw Error("Invalid event type");var z=h(N)?!!N.capture:!!N,pe=Yu(a);if(pe||(a[Ku]=pe=new Tn(a)),d=pe.add(c,d,_,z,D),d.proxy)return d;if(_=_T(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)jt||(N=z),N===void 0&&(N=!1),a.addEventListener(c.toString(),_,N);else if(a.attachEvent)a.attachEvent(Rp(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _T(){function a(d){return c.call(a.src,a.listener,d)}const c=wT;return a}function Cp(a,c,d,_,N){if(Array.isArray(c))for(var D=0;D<c.length;D++)Cp(a,c[D],d,_,N);else _=h(_)?!!_.capture:!!_,d=kp(d),a&&a[Ft]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Vr(D,d,_,N),-1<d&&(Xt(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Yu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Vr(c,d,_,N)),(d=-1<a?c[a]:null)&&Qu(d))}function Qu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ft])ps(c.i,a);else{var d=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(d,_,a.capture):c.detachEvent?c.detachEvent(Rp(d),_):c.addListener&&c.removeListener&&c.removeListener(_),(d=Yu(c))?(ps(d,a),d.h==0&&(d.src=null,c[Ku]=null)):Xt(a)}}}function Rp(a){return a in Gu?Gu[a]:Gu[a]="on"+a}function wT(a,c){if(a.da)a=!0;else{c=new Qt(c,this);var d=a.listener,_=a.ha||a.src;a.fa&&Qu(a),a=d.call(_,c)}return a}function Yu(a){return a=a[Ku],a instanceof Tn?a:null}var Xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function kp(a){return typeof a=="function"?a:(a[Xu]||(a[Xu]=function(c){return a.handleEvent(c)}),a[Xu])}function tt(){ce.call(this),this.i=new Tn(this),this.M=this,this.F=null}P(tt,ce),tt.prototype[Ft]=!0,tt.prototype.removeEventListener=function(a,c,d,_){Cp(this,a,c,d,_)};function dt(a,c){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var N=c;c=new Se(_,a),E(c,N)}if(N=!0,d)for(var D=d.length-1;0<=D;D--){var z=c.g=d[D];N=aa(z,_,!0,c)&&N}if(z=c.g=a,N=aa(z,_,!0,c)&&N,N=aa(z,_,!1,c)&&N,d)for(D=0;D<d.length;D++)z=c.g=d[D],N=aa(z,_,!1,c)&&N}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],_=0;_<d.length;_++)Xt(d[_]);delete a.g[c],a.h--}}this.F=null},tt.prototype.K=function(a,c,d,_){return this.i.add(String(a),c,!1,d,_)},tt.prototype.L=function(a,c,d,_){return this.i.add(String(a),c,!0,d,_)};function aa(a,c,d,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,D=0;D<c.length;++D){var z=c[D];if(z&&!z.da&&z.capture==d){var pe=z.listener,Ke=z.ha||z.src;z.fa&&ps(a.i,z),N=pe.call(Ke,_)!==!1&&N}}return N&&!_.defaultPrevented}function Pp(a,c,d){if(typeof a=="function")d&&(a=w(a,d));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Np(a){a.g=Pp(()=>{a.g=null,a.i&&(a.i=!1,Np(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ET extends ce{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Np(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(a){ce.call(this),this.h=a,this.g={}}P(gi,ce);var bp=[];function Dp(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&Qu(c)},a),a.g={}}gi.prototype.N=function(){gi.aa.N.call(this),Dp(this)},gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ju=l.JSON.stringify,TT=l.JSON.parse,IT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Zu(){}Zu.prototype.h=null;function Vp(a){return a.h||(a.h=a.i())}function Op(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ec(){Se.call(this,"d")}P(ec,Se);function tc(){Se.call(this,"c")}P(tc,Se);var Or={},Lp=null;function la(){return Lp=Lp||new tt}Or.La="serverreachability";function Mp(a){Se.call(this,Or.La,a)}P(Mp,Se);function vi(a){const c=la();dt(c,new Mp(c))}Or.STAT_EVENT="statevent";function jp(a,c){Se.call(this,Or.STAT_EVENT,a),this.stat=c}P(jp,Se);function ft(a){const c=la();dt(c,new jp(c,a))}Or.Ma="timingevent";function Fp(a,c){Se.call(this,Or.Ma,a),this.size=c}P(Fp,Se);function _i(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function ST(a,c,d,_,N,D){a.info(function(){if(a.g)if(D)for(var z="",pe=D.split("&"),Ke=0;Ke<pe.length;Ke++){var le=pe[Ke].split("=");if(1<le.length){var nt=le[0];le=le[1];var rt=nt.split("_");z=2<=rt.length&&rt[1]=="type"?z+(nt+"="+le+"&"):z+(nt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+c+`
`+d+`
`+z})}function AT(a,c,d,_,N,D,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+c+`
`+d+`
`+D+" "+z})}function ms(a,c,d,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+CT(a,d)+(_?" "+_:"")})}function xT(a,c){a.info(function(){return"TIMEOUT: "+c})}wi.prototype.info=function(){};function CT(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return Ju(d)}catch{return c}}var ua={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Up={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nc;function ca(){}P(ca,Zu),ca.prototype.g=function(){return new XMLHttpRequest},ca.prototype.i=function(){return{}},nc=new ca;function Wn(a,c,d,_){this.j=a,this.i=c,this.l=d,this.R=_||1,this.U=new gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zp}function zp(){this.i=null,this.g="",this.h=!1}var $p={},rc={};function sc(a,c,d){a.L=1,a.v=pa(In(c)),a.m=d,a.P=!0,Bp(a,null)}function Bp(a,c){a.F=Date.now(),ha(a),a.A=In(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),rm(d.i,"t",_),a.C=0,d=a.j.J,a.h=new zp,a.g=Em(a.j,d?c:null,!a.m),0<a.O&&(a.M=new ET(w(a.Y,a,a.g),a.O)),c=a.U,d=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(bp[0]=N.toString()),N=bp);for(var D=0;D<N.length;D++){var z=xp(d,N[D],_||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),vi(),ST(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Sn(a)==3?c.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=Sn(this.g);var c=this.g.Ba();const vs=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||cm(this.g)))){this.J||rt!=4||c==7||(c==8||0>=vs?vi(3):vi(2)),ic(this);var d=this.g.Z();this.X=d;t:if(qp(this)){var _=cm(this.g);a="";var N=_.length,D=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Ei(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(_[c],{stream:!(D&&c==N-1)});_.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,AT(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ke=this.g;if((pe=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(pe)){var le=pe;break t}}le=null}if(d=le)ms(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oc(this,d);else{this.o=!1,this.s=3,ft(12),Lr(this),Ei(this);break e}}if(this.P){d=!0;let Jt;for(;!this.J&&this.C<z.length;)if(Jt=RT(this,z),Jt==rc){rt==4&&(this.s=4,ft(14),d=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==$p){this.s=4,ft(15),ms(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else ms(this.i,this.l,Jt,null),oc(this,Jt);if(qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||z.length!=0||this.h.h||(this.s=1,ft(16),d=!1),this.o=this.o&&d,!d)ms(this.i,this.l,z,"[Invalid Chunked Response]"),Lr(this),Ei(this);else if(0<z.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),dc(nt),nt.M=!0,ft(11))}}else ms(this.i,this.l,z,null),oc(this,z);rt==4&&Lr(this),this.o&&!this.J&&(rt==4?ym(this.j,this):(this.o=!1,ha(this)))}else WT(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Lr(this),Ei(this)}}}catch{}finally{}};function qp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function RT(a,c){var d=a.C,_=c.indexOf(`
`,d);return _==-1?rc:(d=Number(c.substring(d,_)),isNaN(d)?$p:(_+=1,_+d>c.length?rc:(c=c.slice(_,_+d),a.C=_+d,c)))}Wn.prototype.cancel=function(){this.J=!0,Lr(this)};function ha(a){a.S=Date.now()+a.I,Wp(a,a.I)}function Wp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_i(w(a.ba,a),c)}function ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xT(this.i,this.A),this.L!=2&&(vi(),ft(17)),Lr(this),this.s=2,Ei(this)):Wp(this,this.S-a)};function Ei(a){a.j.G==0||a.J||ym(a.j,a)}function Lr(a){ic(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Dp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function oc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||ac(d.h,a))){if(!a.K&&ac(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)wa(d),va(d);else break e;hc(d),ft(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=_i(w(d.Za,d),6e3));if(1>=Gp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else jr(d,11)}else if((a.K||d.g==a)&&wa(d),!T(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let le=N[c];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const nt=le[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=le[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const vs=le[5];vs!=null&&typeof vs=="number"&&0<vs&&(_=1.5*vs,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Jt=a.g;if(Jt){const Ta=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var D=_.h;D.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(lc(D,D.h),D.h=null))}if(_.D){const fc=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;fc&&(_.ya=fc,ye(_.I,_.D,fc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var z=a;if(_.qa=wm(_,_.J?_.ia:null,_.W),z.K){Qp(_.h,z);var pe=z,Ke=_.L;Ke&&(pe.I=Ke),pe.B&&(ic(pe),ha(pe)),_.g=z}else mm(_);0<d.i.length&&_a(d)}else le[0]!="stop"&&le[0]!="close"||jr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?jr(d,7):cc(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}vi(4)}catch{}}var kT=class{constructor(a,c){this.g=a,this.map=c}};function Hp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gp(a){return a.h?1:a.g?a.g.size:0}function ac(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function lc(a,c){a.g?a.g.add(c):a.h=c}function Qp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Hp.prototype.cancel=function(){if(this.i=Yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return b(a.i)}function PT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,_=0;_<d;_++)c.push(a[_]);return c}c=[],d=0;for(_ in a)c[d++]=a[_];return c}function NT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const _ in a)c[d++]=_;return c}}}function Xp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=NT(a),_=PT(a),N=_.length,D=0;D<N;D++)c.call(void 0,_[D],d&&d[D],a)}var Jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bT(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),N=null;if(0<=_){var D=a[d].substring(0,_);N=a[d].substring(_+1)}else D=a[d];c(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,da(this,a.j),this.o=a.o,this.g=a.g,fa(this,a.s),this.l=a.l;var c=a.i,d=new Si;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Zp(this,d),this.m=a.m}else a&&(c=String(a).match(Jp))?(this.h=!1,da(this,c[1]||"",!0),this.o=Ti(c[2]||""),this.g=Ti(c[3]||"",!0),fa(this,c[4]),this.l=Ti(c[5]||"",!0),Zp(this,c[6]||"",!0),this.m=Ti(c[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Mr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ii(c,em,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ii(c,em,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ii(d,d.charAt(0)=="/"?OT:VT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ii(d,MT)),a.join("")};function In(a){return new Mr(a)}function da(a,c,d){a.j=d?Ti(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function fa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Zp(a,c,d){c instanceof Si?(a.i=c,jT(a.i,a.h)):(d||(c=Ii(c,LT)),a.i=new Si(c,a.h))}function ye(a,c,d){a.i.set(c,d)}function pa(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ti(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ii(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,DT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function DT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var em=/[#\/\?@]/g,VT=/[#\?:]/g,OT=/[#\?]/g,LT=/[#\?@]/g,MT=/#/g;function Si(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&bT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Si.prototype,t.add=function(a,c){Hn(this),this.i=null,a=gs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function tm(a,c){Hn(a),c=gs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function nm(a,c){return Hn(a),c=gs(a,c),a.g.has(c)}t.forEach=function(a,c){Hn(this),this.g.forEach(function(d,_){d.forEach(function(N){a.call(c,N,_,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let _=0;_<c.length;_++){const N=a[_];for(let D=0;D<N.length;D++)d.push(c[_])}return d},t.V=function(a){Hn(this);let c=[];if(typeof a=="string")nm(this,a)&&(c=c.concat(this.g.get(gs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Hn(this),this.i=null,a=gs(this,a),nm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function rm(a,c,d){tm(a,c),0<d.length&&(a.i=null,a.g.set(gs(a,c),b(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var _=c[d];const D=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var N=D;z[_]!==""&&(N+="="+encodeURIComponent(String(z[_]))),a.push(N)}}return this.i=a.join("&")};function gs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function jT(a,c){c&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(d,_){var N=_.toLowerCase();_!=N&&(tm(this,_),rm(this,N,d))},a)),a.j=c}function FT(a,c){const d=new wi;if(l.Image){const _=new Image;_.onload=A(Kn,d,"TestLoadImage: loaded",!0,c,_),_.onerror=A(Kn,d,"TestLoadImage: error",!1,c,_),_.onabort=A(Kn,d,"TestLoadImage: abort",!1,c,_),_.ontimeout=A(Kn,d,"TestLoadImage: timeout",!1,c,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function UT(a,c){const d=new wi,_=new AbortController,N=setTimeout(()=>{_.abort(),Kn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(N),D.ok?Kn(d,"TestPingServer: ok",!0,c):Kn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Kn(d,"TestPingServer: error",!1,c)})}function Kn(a,c,d,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(d)}catch{}}function zT(){this.g=new IT}function $T(a,c,d){const _=d||"";try{Xp(a,function(N,D){let z=N;h(N)&&(z=Ju(N)),c.push(_+D+"="+encodeURIComponent(z))})}catch(N){throw c.push(_+"type="+encodeURIComponent("_badmap")),N}}function ma(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ma,Zu),ma.prototype.g=function(){return new ga(this.l,this.j)},ma.prototype.i=function(a){return function(){return a}}({});function ga(a,c){tt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ga,tt),t=ga.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,xi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ai(this):xi(this),this.readyState==3&&sm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function im(a){let c="";return L(a,function(d,_){c+=_,c+=":",c+=d,c+=`\r
`}),c}function uc(a,c,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=im(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ye(a,c,d))}function ke(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ke,tt);var BT=/^https?$/i,qT=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nc.g(),this.v=this.o?Vp(this.o):Vp(nc),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){om(this,D);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)d.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())d.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qT,c,void 0))||_||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{um(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){om(this,D)}};function om(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,am(a),ya(a)}function am(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,dt(this,"complete"),dt(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lm(this):this.bb())},t.bb=function(){lm(this)};function lm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)Pp(a.Ea,0,a);else if(dt(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var _;if(_=z===0){var N=String(a.D).match(Jp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!BT.test(N?N.toLowerCase():"")}d=_}if(d)dt(a,"complete"),dt(a,"success");else{a.m=6;try{var D=2<Sn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",am(a)}}finally{ya(a)}}}}function ya(a,c){if(a.g){um(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||dt(a,"ready");try{d.onreadystatechange=_}catch{}}}function um(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),TT(c)}};function cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function WT(a){const c={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(T(a[_]))continue;var d=C(a[_]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[N]||[];c[N]=D,D.push(d)}y(c,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ci(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function hm(a){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ci("baseRetryDelayMs",5e3,a),this.cb=Ci("retryDelaySeedMs",1e4,a),this.Wa=Ci("forwardChannelMaxRetries",2,a),this.wa=Ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hp(a&&a.concurrentRequestLimit),this.Da=new zT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,_){ft(0),this.W=a,this.H=c||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=wm(this,null,this.W),_a(this)};function cc(a){if(dm(a),a.G==3){var c=a.U++,d=In(a.I);if(ye(d,"SID",a.K),ye(d,"RID",c),ye(d,"TYPE","terminate"),Ri(a,d),c=new Wn(a,a.j,c),c.L=2,c.v=pa(In(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Em(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ha(c)}_m(a)}function va(a){a.g&&(dc(a),a.g.cancel(),a.g=null)}function dm(a){va(a),a.u&&(l.clearTimeout(a.u),a.u=null),wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _a(a){if(!Kp(a.h)&&!a.s){a.s=!0;var c=a.Ga;ae||Q(),$||(ae(),$=!0),G.add(c,a),a.B=0}}function HT(a,c){return Gp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_i(w(a.Ga,a,c),vm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Wn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=pm(this,N,c),d=In(this.I),ye(d,"RID",a),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),Ri(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(im(D)))+"&"+c:this.m&&uc(d,this.m,D)),lc(this.h,N),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",c),ye(d,"SID","null"),N.T=!0,sc(N,d,null)):sc(N,d,c),this.G=2}}else this.G==3&&(a?fm(this,a):this.i.length==0||Kp(this.h)||fm(this))};function fm(a,c){var d;c?d=c.l:d=a.U++;const _=In(a.I);ye(_,"SID",a.K),ye(_,"RID",d),ye(_,"AID",a.T),Ri(a,_),a.m&&a.o&&uc(_,a.m,a.o),d=new Wn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=pm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),lc(a.h,d),sc(d,_,c)}function Ri(a,c){a.H&&L(a.H,function(d,_){ye(c,_,d)}),a.l&&Xp({},function(d,_){ye(c,_,d)})}function pm(a,c,d){d=Math.min(a.i.length,d);var _=a.l?w(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=N[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let pe=!0;for(let Ke=0;Ke<d;Ke++){let le=N[Ke].g;const nt=N[Ke].map;if(le-=D,0>le)D=Math.max(0,N[Ke].g-100),pe=!1;else try{$T(nt,z,"req"+le+"_")}catch{_&&_(nt)}}if(pe){_=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,_}function mm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ae||Q(),$||(ae(),$=!0),G.add(c,a),a.v=0}}function hc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_i(w(a.Fa,a),vm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_i(w(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),va(this),gm(this))};function dc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gm(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=In(a.qa);ye(c,"RID","rpc"),ye(c,"SID",a.K),ye(c,"AID",a.T),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(c,"TO",a.ja),ye(c,"TYPE","xmlhttp"),Ri(a,c),a.m&&a.o&&uc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=pa(In(c)),d.m=null,d.P=!0,Bp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,va(this),hc(this),ft(19))};function wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ym(a,c){var d=null;if(a.g==c){wa(a),dc(a),a.g=null;var _=2}else if(ac(a.h,c))d=c.D,Qp(a.h,c),_=1;else return;if(a.G!=0){if(c.o)if(_==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;_=la(),dt(_,new Fp(_,d)),_a(a)}else mm(a);else if(N=c.s,N==3||N==0&&0<c.X||!(_==1&&HT(a,c)||_==2&&hc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function vm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function jr(a,c){if(a.j.info("Error code "+c),c==2){var d=w(a.fb,a),_=a.Xa;const N=!_;_=new Mr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||da(_,"https"),pa(_),N?FT(_.toString(),d):UT(_.toString(),d)}else ft(2);a.G=0,a.l&&a.l.sa(c),_m(a),dm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function _m(a){if(a.G=0,a.ka=[],a.l){const c=Yp(a.h);(c.length!=0||a.i.length!=0)&&(R(a.ka,c),R(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function wm(a,c,d){var _=d instanceof Mr?In(d):new Mr(d);if(_.g!="")c&&(_.g=c+"."+_.g),fa(_,_.s);else{var N=l.location;_=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var D=new Mr(null);_&&da(D,_),c&&(D.g=c),N&&fa(D,N),d&&(D.l=d),_=D}return d=a.D,c=a.ya,d&&c&&ye(_,d,c),ye(_,"VER",a.la),Ri(a,_),_}function Em(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new ma({eb:d})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ea(){}Ea.prototype.g=function(a,c){return new Ct(a,c)};function Ct(a,c){tt.call(this),this.g=new hm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!T(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ys(this)}P(Ct,tt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){cc(this.g)},Ct.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ju(a),a=d);c.i.push(new kT(c.Ya++,a)),c.G==3&&_a(c)},Ct.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,Ct.aa.N.call(this)};function Im(a){ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Im,ec);function Sm(){tc.call(this),this.status=1}P(Sm,tc);function ys(a){this.g=a}P(ys,Tm),ys.prototype.ua=function(){dt(this.g,"a")},ys.prototype.ta=function(a){dt(this.g,new Im(a))},ys.prototype.sa=function(a){dt(this.g,new Sm)},ys.prototype.ra=function(){dt(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,iw=function(){return new Ea},sw=function(){return la()},rw=Or,nd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ua.NO_ERROR=0,ua.TIMEOUT=8,ua.HTTP_ERROR=6,rl=ua,Up.COMPLETE="complete",nw=Up,Op.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Bi=Op,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,tw=ke}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});const ey="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new _u("@firebase/firestore");function Mi(){return ss.logLevel}function W(t,...e){if(ss.logLevel<=re.DEBUG){const n=e.map(Af);ss.debug(`Firestore (${ci}): ${t}`,...n)}}function Un(t,...e){if(ss.logLevel<=re.ERROR){const n=e.map(Af);ss.error(`Firestore (${ci}): ${t}`,...n)}}function Zs(t,...e){if(ss.logLevel<=re.WARN){const n=e.map(Af);ss.warn(`Firestore (${ci}): ${t}`,...n)}}function Af(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function fe(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class I1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class S1{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new ow(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new at(e)}}class A1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class x1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new A1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new C1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=k1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Po{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const P1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Po{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return P1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(_e.fromString(e))}static fromName(e){return new K(_e.fromString(e).popFirst(5))}static empty(){return new K(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new _e(e.slice()))}}function N1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Er(s,K.empty(),e)}function b1(t){return new Er(t.readTime,t.key,-1)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(J.min(),K.empty(),-1)}static max(){return new Er(J.max(),K.empty(),-1)}}function D1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==V1)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function L1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xf.oe=-1;function Tu(t){return t==null}function zl(t){return t===0&&1/t==-1/0}function M1(t){return typeof t=="number"&&Number.isInteger(t)&&!zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ny(this.data.getIterator())}getIteratorFrom(e){return new ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Je(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uw("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const j1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=j1.exec(t);if(fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rf(t){const e=t.mapValue.fields.__previous_value__;return Cf(e)?Rf(e):e}function No(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={mapValue:{}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cf(t)?4:z1(t)?9007199254740991:U1(t)?10:11:X()}function En(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),l=Tr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return is(s.bytesValue).isEqual(is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),l=Ne(i.doubleValue);return o===l?zl(o)===zl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ty(o)!==ty(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!En(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Do(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ne(i.integerValue||i.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ry(t.timestampValue,e.timestampValue);case 4:return ry(No(t),No(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const l=is(i),u=is(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ue(l[h],u[h]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Ne(i.latitude),Ne(o.latitude));return l!==0?l:ue(Ne(i.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return sy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const m=i.fields||{},w=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=w.value)===null||u===void 0?void 0:u.arrayValue,b=ue(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return b!==0?b:sy(A,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===$a.mapValue&&o===$a.mapValue)return 0;if(i===$a.mapValue)return 1;if(o===$a.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const w=ue(u[m],f[m]);if(w!==0)return w;const A=ti(l[u[m]],h[f[m]]);if(A!==0)return A}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function ry(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Tr(t),r=Tr(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function sy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ti(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function ni(t){return rd(t)}function rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rd(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function iy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sd(t){return!!t&&"integerValue"in t}function kf(t){return!!t&&"arrayValue"in t}function oy(t){return!!t&&"nullValue"in t}function ay(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sl(t){return!!t&&"mapValue"in t}function U1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function z1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(ro(this.value))}}function cw(t){const e=[];return ds(t.fields,(n,r)=>{const s=new Ye([n]);if(sl(r)){const i=cw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,J.min(),J.min(),J.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,J.min(),J.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,J.min(),J.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.position=e,this.inclusive=n}}function ly(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n="asc"){this.field=e,this.dir=n}}function $1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{}class Oe extends hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new q1(e,n,r):n==="array-contains"?new K1(e,r):n==="in"?new G1(e,r):n==="not-in"?new Q1(e,r):n==="array-contains-any"?new Y1(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new W1(e,r):new H1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return dw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dw(t){return t.op==="and"}function fw(t){return B1(t)&&dw(t)}function B1(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function id(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(fw(t))return t.filters.map(e=>id(e)).join(",");{const e=t.filters.map(n=>id(n)).join(",");return`${t.op}(${e})`}}function pw(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&pw(o,s.filters[l]),!0):!1}(t,e):void X()}function mw(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(mw).join(" ,")+"}"}(t):"Filter"}class q1 extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class W1 extends Oe{constructor(e,n){super(e,"in",n),this.keys=gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H1 extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class K1 extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kf(n)&&Do(n.arrayValue,this.value)}}class G1 extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class Q1 extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Do(this.value.arrayValue,n)}}class Y1 extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function cy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X1(t,e,n,r,s,i,o)}function Pf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ue=n}return e.ue}function Nf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uy(t.startAt,e.startAt)&&uy(t.endAt,e.endAt)}function od(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function J1(t,e,n,r,s,i,o,l){return new hi(t,e,n,r,s,i,o,l)}function Iu(t){return new hi(t)}function hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yw(t){return t.collectionGroup!==null}function so(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Vo(i,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new Vo(Ye.keyField(),r))}return e.ce}function gn(t){const e=Z(t);return e.le||(e.le=Z1(e,so(t))),e.le}function Z1(t,e){if(t.limitType==="F")return cy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vo(s.field,i)});const n=t.endAt?new $l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $l(t.startAt.position,t.startAt.inclusive):null;return cy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ad(t,e){const n=t.filters.concat([e]);return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ld(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return Nf(gn(t),gn(e))&&t.limitType===e.limitType}function vw(t){return`${Pf(gn(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mw(s)).join(", ")}]`),Tu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Au(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of so(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=ly(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,so(r),s)||r.endAt&&!function(o,l,u){const h=ly(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,so(r),s))}(t,e)}function eR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _w(t){return(e,n)=>{let r=!1;for(const s of so(t)){const i=tR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tR(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ti(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return lw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new Re(K.comparator);function zn(){return nR}const ww=new Re(K.comparator);function qi(...t){let e=ww;for(const n of t)e=e.insert(n.key,n);return e}function Ew(t){let e=ww;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return io()}function Tw(){return io()}function io(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const rR=new Re(K.comparator),sR=new Je(K.comparator);function ne(...t){let e=sR;for(const n of t)e=e.add(n);return e}const iR=new Je(ue);function oR(){return iR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zl(e)?"-0":e}}function Iw(t){return{integerValue:""+t}}function Sw(t,e){return M1(e)?Iw(e):bf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this._=void 0}}function aR(t,e,n){return t instanceof Oo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cf(i)&&(i=Rf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Lo?xw(t,e):t instanceof Mo?Cw(t,e):function(s,i){const o=Aw(s,i),l=dy(o)+dy(s.Pe);return sd(o)&&sd(s.Pe)?Iw(l):bf(s.serializer,l)}(t,e)}function lR(t,e,n){return t instanceof Lo?xw(t,e):t instanceof Mo?Cw(t,e):n}function Aw(t,e){return t instanceof jo?function(r){return sd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Oo extends xu{}class Lo extends xu{constructor(e){super(),this.elements=e}}function xw(t,e){const n=Rw(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mo extends xu{constructor(e){super(),this.elements=e}}function Cw(t,e){let n=Rw(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class jo extends xu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dy(t){return Ne(t.integerValue||t.doubleValue)}function Rw(t){return kf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.field=e,this.transform=n}}function uR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Lo&&s instanceof Lo||r instanceof Mo&&s instanceof Mo?ei(r.elements,s.elements,En):r instanceof jo&&s instanceof jo?En(r.Pe,s.Pe):r instanceof Oo&&s instanceof Oo}(t.transform,e.transform)}class cR{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cu{}function Pw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ru(t.key,Dt.none()):new Yo(t.key,t.data,Dt.none());{const n=t.data,r=wt.empty();let s=new Je(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Nr(t.key,r,new Pt(s.toArray()),Dt.none())}}function hR(t,e,n){t instanceof Yo?function(s,i,o){const l=s.value.clone(),u=py(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(s,i,o){if(!il(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=py(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Nw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof Yo?function(i,o,l,u){if(!il(i.precondition,o))return l;const h=i.value.clone(),f=my(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,o,l,u){if(!il(i.precondition,o))return l;const h=my(i.fieldTransforms,u,o),f=o.data;return f.setAll(Nw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return il(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Aw(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ei(r,s,(i,o)=>uR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Cu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nr extends Cu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function py(t,e,n){const r=new Map;fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,lR(o,l,n[s]))}return r}function my(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,aR(i,o,e))}return r}class Ru extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fR extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Pw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>fy(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>fy(n,r))}}class Df{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length);let s=function(){return rR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Df(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function yR(t){switch(t){default:return X();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function bw(t){if(t===void 0)return Un("GRPC error has no .code"),O.UNKNOWN;switch(t){case De.OK:return O.OK;case De.CANCELLED:return O.CANCELLED;case De.UNKNOWN:return O.UNKNOWN;case De.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case De.INTERNAL:return O.INTERNAL;case De.UNAVAILABLE:return O.UNAVAILABLE;case De.UNAUTHENTICATED:return O.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case De.NOT_FOUND:return O.NOT_FOUND;case De.ALREADY_EXISTS:return O.ALREADY_EXISTS;case De.PERMISSION_DENIED:return O.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case De.ABORTED:return O.ABORTED;case De.OUT_OF_RANGE:return O.OUT_OF_RANGE;case De.UNIMPLEMENTED:return O.UNIMPLEMENTED;case De.DATA_LOSS:return O.DATA_LOSS;default:return X()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new Yr([4294967295,4294967295],0);function gy(t){const e=vR().encode(t),n=new ew;return n.update(e),new Uint8Array(n.digest())}function yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([s,i],0)]}class Vf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wi(`Invalid padding: ${n}`);if(r<0)throw new Wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Yr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Yr.fromNumber(r)));return s.compare(_R)===1&&(s=new Yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=gy(e),[r,s]=yy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=gy(e),[r,s]=yy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ku(J.min(),s,new Re(ue),zn(),ne())}}class Xo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Dw{constructor(e,n){this.targetId=e,this.me=n}}class Vw{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vy{constructor(){this.fe=0,this.ge=wy(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Xo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=wy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wR{constructor(e){this.Le=e,this.Be=new Map,this.ke=zn(),this.qe=_y(),this.Qe=new Re(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(od(i))if(r===0){const o=new K(i.path);this.Ue(n,o,ut.newNoDocument(o,J.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=is(r).toUint8Array()}catch(u){if(u instanceof uw)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vf(o,s,i)}catch(u){return Zs(u instanceof Wi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&od(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ku(e,n,this.Qe,this.ke,r);return this.ke=zn(),this.qe=_y(),this.Qe=new Re(ue),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new vy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _y(){return new Re(K.comparator)}function wy(){return new Re(K.comparator)}const ER={asc:"ASCENDING",desc:"DESCENDING"},TR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IR={and:"AND",or:"OR"};class SR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ud(t,e){return t.useProto3Json||Tu(e)?e:{value:e}}function Bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ow(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AR(t,e){return Bl(t,e.toTimestamp())}function yn(t){return fe(!!t),J.fromTimestamp(function(n){const r=Tr(n);return new Ue(r.seconds,r.nanos)}(t))}function Of(t,e){return cd(t,e).canonicalString()}function cd(t,e){const n=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lw(t){const e=_e.fromString(t);return fe(zw(e)),e}function hd(t,e){return Of(t.databaseId,e.path)}function Gc(t,e){const n=Lw(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(jw(n))}function Mw(t,e){return Of(t.databaseId,e)}function xR(t){const e=Lw(t);return e.length===4?_e.emptyPath():jw(e)}function dd(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jw(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ey(t,e,n){return{name:hd(t,e),fields:n.value.mapValue.fields}}function CR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:bw(h.code);return new B(f,h.message||"")}(o);n=new Vw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gc(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):J.min(),l=new wt({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ol(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gc(t,r.document),i=r.readTime?yn(r.readTime):J.min(),o=ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ol([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gc(t,r.document),i=r.removedTargetIds||[];n=new ol([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gR(s,i),l=r.targetId;n=new Dw(l,o)}}return n}function RR(t,e){let n;if(e instanceof Yo)n={update:Ey(t,e.key,e.value)};else if(e instanceof Ru)n={delete:hd(t,e.key)};else if(e instanceof Nr)n={update:Ey(t,e.key,e.data),updateMask:MR(e.fieldMask)};else{if(!(e instanceof fR))return X();n={verify:hd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function kR(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(J.min())&&(o=yn(i)),new cR(o,s.transformResults||[])}(n,e))):[]}function PR(t,e){return{documents:[Mw(t,e.path)]}}function NR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mw(t,s);const i=function(h){if(h.length!==0)return Uw(ln.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(w){return{field:Es(w.field),direction:VR(w.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ud(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function bR(t){let e=xR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const w=Fw(m);return w instanceof ln&&fw(w)?w.getFilters():[w]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(w=>function(P){return new Vo(Ts(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(m){let w;return w=typeof m=="object"?m.value:m,Tu(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(m){const w=!!m.before,A=m.values||[];return new $l(A,w)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const w=!m.before,A=m.values||[];return new $l(A,w)}(n.endAt)),J1(e,s,o,i,l,"F",u,h)}function DR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ts(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ts(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Ts(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>Fw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function VR(t){return ER[t]}function OR(t){return TR[t]}function LR(t){return IR[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Ts(t){return Ye.fromServerFormat(t.fieldPath)}function Uw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(ay(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(oy(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ay(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(oy(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:OR(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>Uw(s));return r.length===1?r[0]:{compositeFilter:{op:LR(n.op),filters:r}}}(t):X()}function MR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,s,i=J.min(),o=J.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.ct=e}}function FR(t){const e=bR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ld(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.un=new zR}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Er.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(_e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ri(0)}static kn(){return new ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&oo(r.mutation,s,Pt.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=zn();const o=io(),l=function(){return io()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Nr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),oo(f.mutation,h,f.mutation.getFieldMask(),Ue.now())):o.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new BR(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=io();let s=new Re((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Pt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Tw();f.forEach(w=>{if(!i.has(w)){const A=Pw(n.get(w),r.get(w));A!==null&&m.set(w,A),i=i.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Kr());let l=-1,u=i;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:Ew(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(m,w){return new hi(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,w)=>{o=o.insert(m,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=qi();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&oo(f.mutation,h,Pt.empty(),Ue.now()),Au(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:FR(s.bundledQuery),readTime:yn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.overlays=new Re(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Kr(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Kr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Kr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mR(n,r));let i=this.Ir.get(n);i===void 0&&(i=ne(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Tr=new Je(qe.Er),this.dr=new Je(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new _e([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new _e([])),r=new qe(n,e),s=new qe(n,e+1);let i=ne();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(qe.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ue);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new qe(new K(i),0);let l=new Je(ue);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.Mr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=zn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||D1(b1(f),r)<=0||(s.has(f.key)||Au(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YR(this)}getSize(e){return M.resolve(this.size)}}class YR extends $R{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.persistence=e,this.Nr=new di(n=>Pf(n),Nf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lf,this.targetCount=0,this.kr=ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new xf(0),this.Kr=!1,this.Kr=!0,this.$r=new KR,this.referenceDelegate=e(this),this.Ur=new XR(this),this.indexManager=new UR,this.remoteDocumentCache=function(s){return new QR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new jR(n),this.Gr=new WR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new GR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new ZR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ZR extends O1{constructor(e){super(),this.currentSequenceNumber=e}}class Mf{constructor(e){this.persistence=e,this.Jr=new Lf,this.Yr=null}static Zr(e){return new Mf(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=K.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LA()?8:L1(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ek;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Mi()<=re.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Mi()<=re.DEBUG&&W("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Mi()<=re.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):M.resolve())}Yi(e,n){if(hy(n))return M.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ld(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,ld(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return hy(n)||s.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(Mi()<=re.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ws(n)),this.rs(e,o,n,N1(s,-1)).next(l=>l))})}ts(e,n){let r=new Je(_w(e));return n.forEach((s,i)=>{Au(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Mi()<=re.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ws(n)),this.Ji.getDocumentsMatchingQuery(e,n,Er.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Re(ue),this._s=new di(i=>Pf(i),Nf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rk(t,e,n,r){return new nk(t,e,n,r)}async function $w(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function sk(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,w=m.keys();let A=M.resolve();return w.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(b=>{const R=h.docVersions.get(P);fe(R!==null),b.version.compareTo(R)<0&&(m.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),f.addEntry(b)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Bw(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ik(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const w=s.get(m);if(!w)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let A=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(b,R,I){return b.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(w,A,f)&&l.push(n.Ur.updateTargetData(i,A))});let u=zn(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ok(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function ok(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=zn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function ak(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lk(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function fd(t,e,n){const r=Z(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ty(t,e,n){const r=Z(t);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Z(u),w=m._s.get(f);return w!==void 0?M.resolve(m.os.get(w)):m.Ur.getTargetData(h,f)}(r,o,gn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ne())).next(l=>(uk(r,eR(e),l),{documents:l,Ts:i})))}function uk(t,e,n){let r=t.us.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Iy{constructor(){this.activeTargetIds=oR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ck{constructor(){this.so=new Iy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Iy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=null;function Qc(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class pk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Qc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Zs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=dk[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Qc();return new Promise((o,l)=>{const u=new tw;u.setWithCredentials(!0),u.listenOnce(nw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case rl.NO_ERROR:const f=u.getResponseJson();W(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case rl.TIMEOUT:W(ot,`RPC '${e}' ${i} timed out`),l(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case rl.HTTP_ERROR:const m=u.getStatus();if(W(ot,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const A=w==null?void 0:w.error;if(A&&A.status&&A.message){const P=function(R){const I=R.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(A.status);l(new B(P,A.message))}else l(new B(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(O.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(ot,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);W(ot,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Qc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iw(),l=sw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");W(ot,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let w=!1,A=!1;const P=new fk({Io:R=>{A?W(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(w||(W(ot,`Opening RPC '${e}' stream ${s} transport.`),m.open(),w=!0),W(ot,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},To:()=>m.close()}),b=(R,I,T)=>{R.listen(I,x=>{try{T(x)}catch(V){setTimeout(()=>{throw V},0)}})};return b(m,Bi.EventType.OPEN,()=>{A||(W(ot,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),b(m,Bi.EventType.CLOSE,()=>{A||(A=!0,W(ot,`RPC '${e}' stream ${s} transport closed`),P.So())}),b(m,Bi.EventType.ERROR,R=>{A||(A=!0,Zs(ot,`RPC '${e}' stream ${s} transport errored:`,R),P.So(new B(O.UNAVAILABLE,"The operation could not be completed")))}),b(m,Bi.EventType.MESSAGE,R=>{var I;if(!A){const T=R.data[0];fe(!!T);const x=T,V=x.error||((I=x[0])===null||I===void 0?void 0:I.error);if(V){W(ot,`RPC '${e}' stream ${s} received error:`,V);const F=V.status;let L=function(v){const E=De[v];if(E!==void 0)return bw(E)}(F),y=V.message;L===void 0&&(L=O.INTERNAL,y="Unknown error status: "+F+" with message "+V.message),A=!0,P.So(new B(L,y)),m.close()}else W(ot,`RPC '${e}' stream ${s} received:`,T),P.bo(T)}}),b(l,rw.STAT_EVENT,R=>{R.stat===nd.PROXY?W(ot,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===nd.NOPROXY&&W(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Yc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){return new SR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mk extends Ww{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=CR(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?yn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=dd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=od(u)?{documents:PR(i,u)}:{query:NR(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ow(i,o.resumeToken);const h=ud(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Bl(i,o.snapshotVersion.toTimestamp());const h=ud(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=DR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=dd(this.serializer),n.removeTarget=e,this.a_(n)}}class gk extends Ww{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kR(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=dd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,cd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(O.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,cd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Un(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{fs(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await Jo(h),h.q_.set("Unknown"),h.L_.delete(4),await Nu(h)}(this))})}),this.q_=new vk(r,s)}}async function Nu(t){if(fs(t))for(const e of t.B_)await e(!0)}async function Jo(t){for(const e of t.B_)await e(!1)}function Hw(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),$f(n)?zf(n):fi(n).r_()&&Uf(n,e))}function Ff(t,e){const n=Z(t),r=fi(n);n.N_.delete(e),r.r_()&&Kw(n,e),n.N_.size===0&&(r.r_()?r.o_():fs(n)&&n.q_.set("Unknown"))}function Uf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fi(t).A_(e)}function Kw(t,e){t.Q_.xe(e),fi(t).R_(e)}function zf(t){t.Q_=new wR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fi(t).start(),t.q_.v_()}function $f(t){return fs(t)&&!fi(t).n_()&&t.N_.size>0}function fs(t){return Z(t).L_.size===0}function Gw(t){t.Q_=void 0}async function wk(t){t.q_.set("Online")}async function Ek(t){t.N_.forEach((e,n)=>{Uf(t,e)})}async function Tk(t,e){Gw(t),$f(t)?(t.q_.M_(e),zf(t)):t.q_.set("Unknown")}async function Ik(t,e,n){if(t.q_.set("Online"),e instanceof Vw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ql(t,r)}else if(e instanceof ol?t.Q_.Ke(e):e instanceof Dw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await Bw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),Kw(i,u);const m=new or(f.target,u,h,f.sequenceNumber);Uf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await ql(t,r)}}async function ql(t,e,n){if(!Qo(e))throw e;t.L_.add(1),await Jo(t),t.q_.set("Offline"),n||(n=()=>Bw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nu(t)})}function Qw(t,e){return e().catch(n=>ql(t,n,e))}async function bu(t){const e=Z(t),n=Ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Sk(e);)try{const s=await ak(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Ak(e,s)}catch(s){await ql(e,s)}Yw(e)&&Xw(e)}function Sk(t){return fs(t)&&t.O_.length<10}function Ak(t,e){t.O_.push(e);const n=Ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Yw(t){return fs(t)&&!Ir(t).n_()&&t.O_.length>0}function Xw(t){Ir(t).start()}async function xk(t){Ir(t).p_()}async function Ck(t){const e=Ir(t);for(const n of t.O_)e.m_(n.mutations)}async function Rk(t,e,n){const r=t.O_.shift(),s=Df.from(r,e,n);await Qw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await bu(t)}async function kk(t,e){e&&Ir(t).V_&&await async function(r,s){if(function(o){return yR(o)&&o!==O.ABORTED}(s.code)){const i=r.O_.shift();Ir(r).s_(),await Qw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bu(r)}}(t,e),Yw(t)&&Xw(t)}async function Ay(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=fs(n);n.L_.add(3),await Jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nu(n)}async function Pk(t,e){const n=Z(t);e?(n.L_.delete(2),await Nu(n)):e||(n.L_.add(2),await Jo(n),n.q_.set("Unknown"))}function fi(t){return t.K_||(t.K_=function(n,r,s){const i=Z(n);return i.w_(),new mk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:wk.bind(null,t),Ro:Ek.bind(null,t),mo:Tk.bind(null,t),d_:Ik.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),$f(t)?zf(t):t.q_.set("Unknown")):(await t.K_.stop(),Gw(t))})),t.K_}function Ir(t){return t.U_||(t.U_=function(n,r,s){const i=Z(n);return i.w_(),new gk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xk.bind(null,t),mo:kk.bind(null,t),f_:Ck.bind(null,t),g_:Rk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Bf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qf(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Qo(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=qi(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.W_=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new si(e,n,$s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bk{constructor(){this.queries=Cy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=Cy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function Cy(){return new di(t=>vw(t),Su)}async function Wf(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Nk,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=qf(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Kf(n)}async function Hf(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Dk(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Kf(n)}function Vk(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Kf(t){t.Y_.forEach(e=>{e.next()})}var pd,Ry;(Ry=pd||(pd={})).ea="default",Ry.Cache="cache";class Gf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==pd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.key=e}}class Zw{constructor(e){this.key=e}}class Ok{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=_w(e),this.Ra=new $s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new xy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const w=s.get(f),A=Au(this.query,m)?m:null,P=!!w&&this.mutatedKeys.has(w.key),b=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;w&&A?w.data.isEqual(A.data)?P!==b&&(r.track({type:3,doc:A}),R=!0):this.ga(w,A)||(r.track({type:2,doc:A}),R=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!w&&A?(r.track({type:0,doc:A}),R=!0):w&&!A&&(r.track({type:1,doc:w}),R=!0,(u||h)&&(l=!0)),R&&(A?(o=o.add(A),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,P){const b=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return b(A)-b(P)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new si(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new xy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Zw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Jw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Lk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mk{constructor(e){this.key=e,this.va=!1}}class jk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new di(l=>vw(l),Su),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(K.comparator),this.Na=new Map,this.La=new Lf,this.Ba={},this.ka=new Map,this.qa=ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Fk(t,e,n=!0){const r=iE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await eE(r,e,n,!0),s}async function Uk(t,e){const n=iE(t);await eE(n,e,!0,!1)}async function eE(t,e,n,r){const s=await lk(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await zk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Hw(t.remoteStore,s),l}async function zk(t,e,n,r,s){t.Ka=(m,w,A)=>async function(b,R,I,T){let x=R.view.ma(I);x.ns&&(x=await Ty(b.localStore,R.query,!1).then(({documents:y})=>R.view.ma(y,x)));const V=T&&T.targetChanges.get(R.targetId),F=T&&T.targetMismatches.get(R.targetId)!=null,L=R.view.applyChanges(x,b.isPrimaryClient,V,F);return Py(b,R.targetId,L.wa),L.snapshot}(t,m,w,A);const i=await Ty(t.localStore,e,!0),o=new Ok(e,i.Ts),l=o.ma(i.documents),u=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Py(t,n,h.wa);const f=new Lk(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function $k(t,e,n){const r=Z(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Su(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ff(r.remoteStore,s.targetId),md(r,s.targetId)}).catch(Go)):(md(r,s.targetId),await fd(r.localStore,s.targetId,!0))}async function Bk(t,e){const n=Z(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ff(n.remoteStore,r.targetId))}async function qk(t,e,n){const r=Xk(t);try{const s=await function(o,l){const u=Z(o),h=Ue.now(),f=l.reduce((A,P)=>A.add(P.key),ne());let m,w;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=zn(),b=ne();return u.cs.getEntries(A,f).next(R=>{P=R,P.forEach((I,T)=>{T.isValidDocument()||(b=b.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(R=>{m=R;const I=[];for(const T of l){const x=dR(T,m.get(T.key).overlayedDocument);x!=null&&I.push(new Nr(T.key,x,cw(x.value.mapValue),Dt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(R=>{w=R;const I=R.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(A,R.batchId,I)})}).then(()=>({batchId:w.batchId,changes:Ew(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Re(ue)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Zo(r,s.changes),await bu(r.remoteStore)}catch(s){const i=qf(s,"Failed to persist write");n.reject(i)}}async function tE(t,e){const n=Z(t);try{const r=await ik(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?fe(o.va):s.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await Zo(n,r,e)}catch(r){await Go(r)}}function ky(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const w of m.j_)w.Z_(l)&&(h=!0)}),h&&Kf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wk(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Re(K.comparator);o=o.insert(i,ut.newNoDocument(i,J.min()));const l=ne().add(i),u=new ku(J.min(),new Map,new Re(ue),o,l);await tE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Qf(r)}else await fd(r.localStore,e,!1).then(()=>md(r,e,n)).catch(Go)}async function Hk(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await sk(n.localStore,e);rE(n,r,null),nE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,s)}catch(s){await Go(s)}}async function Kk(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(fe(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);rE(r,e,n),nE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,s)}catch(s){await Go(s)}}function nE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function rE(t,e,n){const r=Z(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||sE(t,r)})}function sE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ff(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Qf(t))}function Py(t,e,n){for(const r of n)r instanceof Jw?(t.La.addReference(r.key,e),Gk(t,r)):r instanceof Zw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||sE(t,r.key)):X()}function Gk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Qf(t))}function Qf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new Mk(n)),t.Oa=t.Oa.insert(n,r),Hw(t.remoteStore,new or(gn(Iu(n.path)),r,"TargetPurposeLimboResolution",xf.oe))}}async function Zo(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=jf.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,w=>M.forEach(w.$i,A=>f.persistence.referenceDelegate.addReference(m,w.targetId,A)).next(()=>M.forEach(w.Ui,A=>f.persistence.referenceDelegate.removeReference(m,w.targetId,A)))))}catch(m){if(!Qo(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const w=m.targetId;if(!m.fromCache){const A=f.os.get(w),P=A.snapshotVersion,b=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(w,b)}}}(r.localStore,i))}async function Qk(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await $w(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.hs)}}function Yk(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function iE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wk.bind(null,e),e.Ca.d_=Dk.bind(null,e.eventManager),e.Ca.$a=Vk.bind(null,e.eventManager),e}function Xk(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kk.bind(null,e),e}class Wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rk(this.persistence,new tk,e.initialUser,this.serializer)}Ga(e){return new JR(Mf.Zr,this.serializer)}Wa(e){return new ck}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wl.provider={build:()=>new Wl};class gd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await Pk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bk}()}createDatastore(e){const n=Pu(e.databaseInfo.databaseId),r=function(i){return new pk(i)}(e.databaseInfo);return function(i,o,l,u){return new yk(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new _k(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ky(this.syncEngine,n,0),function(){return Sy.D()?new Sy:new hk}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const m=new jk(s,i,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);W("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Jo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}gd.provider={build:()=>new gd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=aw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $w(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ny(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zk(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ay(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ay(e.remoteStore,s)),t._onlineComponents=e}async function Zk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new Wl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Xc(t,new Wl);return t._offlineComponents}async function oE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Ny(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Ny(t,new gd))),t._onlineComponents}function eP(t){return oE(t).then(e=>e.syncEngine)}async function Hl(t){const e=await oE(t),n=e.eventManager;return n.onListen=Fk.bind(null,e.syncEngine),n.onUnlisten=$k.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Uk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Bk.bind(null,e.syncEngine),n}function tP(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Yf({next:w=>{f.Za(),o.enqueueAndForget(()=>Hf(i,m));const A=w.docs.has(l);!A&&w.fromCache?h.reject(new B(O.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&w.fromCache&&u&&u.source==="server"?h.reject(new B(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(w)},error:w=>h.reject(w)}),m=new Gf(Iu(l.path),f,{includeMetadataChanges:!0,_a:!0});return Wf(i,m)}(await Hl(t),t.asyncQueue,e,n,r)),r.promise}function nP(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Yf({next:w=>{f.Za(),o.enqueueAndForget(()=>Hf(i,m)),w.fromCache&&u.source==="server"?h.reject(new B(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(w)},error:w=>h.reject(w)}),m=new Gf(l,f,{includeMetadataChanges:!0,_a:!0});return Wf(i,m)}(await Hl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rP(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dy(t){if(!K.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vy(t){if(K.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T1;switch(r.type){case"firstParty":return new x1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=by.get(n);r&&(W("ComponentProvider","Removing Datastore"),by.delete(n),r.terminate())}(this),Promise.resolve()}}function sP(t,e,n,r={}){var s;const i=(t=Wt(t,Vu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=at.MOCK_USER;else{l=PA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(h)}t._authCredentials=new I1(new ow(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class yr extends br{constructor(e,n,r){super(e,n,Iu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new K(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function Dr(t,e,...n){if(t=$e(t),lE("collection","path",e),t instanceof Vu){const r=_e.fromString(e,...n);return Vy(r),new yr(t,null,r)}{if(!(t instanceof gt||t instanceof yr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Vy(r),new yr(t.firestore,null,r)}}function Ie(t,e,...n){if(t=$e(t),arguments.length===1&&(e=aw.newId()),lE("doc","path",e),t instanceof Vu){const r=_e.fromString(e,...n);return Dy(r),new gt(t,null,new K(r))}{if(!(t instanceof gt||t instanceof yr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Dy(r),new gt(t.firestore,t instanceof yr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qw(this,"async_queue_retry"),this.Vu=()=>{const r=Yc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Bf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function My(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Sr extends Vu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ly,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ly(e),this._firestoreClient=void 0,await e}}}function iP(t,e){const n=typeof t=="object"?t:_f(),r=typeof t=="string"?t:"(default)",s=hs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=RA("firestore");i&&sP(s,...i)}return s}function ea(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oP(t),t._firestoreClient}function oP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new F1(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,aE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Jk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(et.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=/^__.*__$/;class lP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class uE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Zf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Kl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(cE(this.Cu)&&aP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pu(e)}Qu(e,n,r,s=!1){return new Zf({Cu:e,methodName:n,qu:r,path:Ye.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ep(t){const e=t._freezeSettings(),n=Pu(t._databaseId);return new uP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);rp("Data must be an object, but it was:",o,r);const l=dE(r,o);let u,h;if(i.merge)u=new Pt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const w=yd(e,m,n);if(!o.contains(w))throw new B(O.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);pE(f,w)||f.push(w)}u=new Pt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new lP(new wt(l),u,h)}class Lu extends ta{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lu}}class tp extends ta{_toFieldTransform(e){return new kw(e.path,new Oo)}isEqual(e){return e instanceof tp}}class np extends ta{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new jo(e.serializer,Sw(e.serializer,this.$u));return new kw(e.path,n)}isEqual(e){return e instanceof np&&this.$u===e.$u}}function cP(t,e,n,r){const s=t.Qu(1,e,n);rp("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();ds(r,(u,h)=>{const f=sp(e,u,n);h=$e(h);const m=s.Nu(f);if(h instanceof Lu)i.push(f);else{const w=na(h,m);w!=null&&(i.push(f),o.set(f,w))}});const l=new Pt(i);return new uE(o,l,s.fieldTransforms)}function hP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[yd(e,r,n)],u=[s];if(i.length%2!=0)throw new B(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(yd(e,i[w])),u.push(i[w+1]);const h=[],f=wt.empty();for(let w=l.length-1;w>=0;--w)if(!pE(h,l[w])){const A=l[w];let P=u[w];P=$e(P);const b=o.Nu(A);if(P instanceof Lu)h.push(A);else{const R=na(P,b);R!=null&&(h.push(A),f.set(A,R))}}const m=new Pt(h);return new uE(f,m,o.fieldTransforms)}function dP(t,e,n,r=!1){return na(n,t.Qu(r?4:3,e))}function na(t,e){if(fE(t=$e(t)))return rp("Unsupported field value:",e,t),dE(t,e);if(t instanceof ta)return function(r,s){if(!cE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=na(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Bl(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bl(s.serializer,i)}}if(r instanceof Xf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ii)return{bytesValue:Ow(s.serializer,r._byteString)};if(r instanceof gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Of(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return bf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Du(r)}`)}(t,e)}function dE(t,e){const n={};return lw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,s)=>{const i=na(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Xf||t instanceof ii||t instanceof gt||t instanceof ta||t instanceof Jf)}function rp(t,e,n){if(!fE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Du(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function yd(t,e,n){if((e=$e(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return sp(t,e);throw Kl("Field path arguments must be of type string or ",t,!1,void 0,n)}const fP=new RegExp("[~\\*/\\[\\]]");function sp(t,e,n){if(e.search(fP)>=0)throw Kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw Kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function pE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ip("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pP extends mE{data(){return super.data()}}function ip(t,e){return typeof e=="string"?sp(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class op{}class yE extends op{}function pi(t,e,...n){let r=[];e instanceof op&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof lp).length,l=i.filter(u=>u instanceof ap).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ap extends yE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ap(e,n,r)}_apply(e){const n=this._parse(e);return vE(e._query,n),new br(e.firestore,e.converter,ad(e._query,n))}_parse(e){const n=ep(e.firestore);return function(i,o,l,u,h,f,m){let w;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Fy(m,f);const A=[];for(const P of m)A.push(jy(u,i,P));w={arrayValue:{values:A}}}else w=jy(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Fy(m,f),w=dP(l,o,m,f==="in"||f==="not-in");return Oe.create(h,f,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class lp extends op{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)vE(o,u),o=ad(o,u)}(e._query,n),new br(e.firestore,e.converter,ad(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class up extends yE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new up(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vo(i,o)}(e._query,this._field,this._direction);return new br(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new hi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ra(t,e="asc"){const n=e,r=ip("orderBy",t);return up._create(r,n)}function jy(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yw(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!K.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iy(t,new K(r))}if(n instanceof gt)return iy(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function Fy(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mP{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ne(o.doubleValue));return new Jf(i)}convertGeoPoint(e){return new Xf(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);fe(zw(r));const s=new bo(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wE extends mE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ip("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class al extends wE{data(e={}){return super.data(e)}}class EE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new al(this._firestore,this._userDataWriter,r.key,r,new Hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new al(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new al(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:gP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){t=Wt(t,gt);const e=Wt(t.firestore,Sr);return tP(ea(e),t._key).then(n=>TE(e,t,n))}class cp extends mP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function ju(t){t=Wt(t,br);const e=Wt(t.firestore,Sr),n=ea(e),r=new cp(e);return gE(t._query),nP(n,t._query).then(s=>new EE(e,r,t,s))}function Ot(t,e,n){t=Wt(t,gt);const r=Wt(t.firestore,Sr),s=_E(t.converter,e,n);return dp(r,[hE(ep(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dt.none())])}function hp(t){return dp(Wt(t.firestore,Sr),[new Ru(t._key,Dt.none())])}function Fu(t,...e){var n,r,s;t=$e(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||My(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(My(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,f;if(t instanceof gt)h=Wt(t.firestore,Sr),f=Iu(t._key.path),u={next:m=>{e[o]&&e[o](TE(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Wt(t,br);h=Wt(m.firestore,Sr),f=m._query;const w=new cp(h);u={next:A=>{e[o]&&e[o](new EE(h,w,m,A))},error:e[o+1],complete:e[o+2]},gE(t._query)}return function(w,A,P,b){const R=new Yf(b),I=new Gf(A,R,P);return w.asyncQueue.enqueueAndForget(async()=>Wf(await Hl(w),I)),()=>{R.Za(),w.asyncQueue.enqueueAndForget(async()=>Hf(await Hl(w),I))}}(ea(h),f,l,u)}function dp(t,e){return function(r,s){const i=new Vn;return r.asyncQueue.enqueueAndForget(async()=>qk(await eP(r),s,i)),i.promise}(ea(t),e)}function TE(t,e,n){const r=n.docs.get(e._key),s=new cp(t);return new wE(t,s,e._key,r,new Hi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ep(e)}set(e,n,r){this._verifyNotCommitted();const s=Jc(e,this._firestore),i=_E(s.converter,n,r),o=hE(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Dt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Jc(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof Ou?hP(this._dataReader,"WriteBatch.update",i._key,n,r,s):cP(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Dt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Jc(e,this._firestore);return this._mutations=this._mutations.concat(new Ru(n._key,Dt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Jc(t,e){if((t=$e(t)).firestore!==e)throw new B(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Fo(){return new tp("serverTimestamp")}function vP(t){return new np("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){return ea(t=Wt(t,Sr)),new yP(t,e=>dp(t,e))}(function(e,n=!0){(function(s){ci=s})(ui),wn(new an("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Sr(new S1(r.getProvider("auth-internal")),new R1(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),qt(ey,"4.7.3",e),qt(ey,"4.7.3","esm2017")})();function pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function IE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _P=IE,SE=new cs("auth","Firebase",IE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new _u("@firebase/auth");function wP(t,...e){Gl.logLevel<=re.WARN&&Gl.warn(`Auth (${ui}): ${t}`,...e)}function ll(t,...e){Gl.logLevel<=re.ERROR&&Gl.error(`Auth (${ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,...e){throw mp(t,...e)}function vn(t,...e){return mp(t,...e)}function AE(t,e,n){const r=Object.assign(Object.assign({},_P()),{[e]:n});return new cs("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return AE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return SE.create(t,...e)}function Y(t,e,...n){if(!t)throw mp(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Bn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EP(){return Uy()==="http:"||Uy()==="https:"}function Uy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EP()||I0()||"connection"in navigator)?navigator.onLine:!0}function IP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=NA()||VA()}get(){return TP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=new sa(3e4,6e4);function Uu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mi(t,e,n,r,s={}){return CE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return DA()||(h.referrerPolicy="no-referrer"),xE.fetch()(kE(t,t.config.apiHost,n,l),h)})}async function CE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SP),e);try{const s=new xP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw qa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw AE(t,f,h);$n(t,f)}}catch(s){if(s instanceof un)throw s;$n(t,"network-request-failed",{message:String(s)})}}async function RE(t,e,n,r,s={}){const i=await mi(t,e,n,r,s);return"mfaPendingCredential"in i&&$n(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gp(t.config,s):`${t.config.apiScheme}://${s}`}class xP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),AP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=vn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){return mi(t,"POST","/v1/accounts:delete",e)}async function PE(t,e){return mi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RP(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=yp(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ao(Zc(s.auth_time)),issuedAtTime:ao(Zc(s.iat)),expirationTime:ao(Zc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function yp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const s=_0(n);return s?JSON.parse(s):(ll("Failed to decode base64 JWT payload"),null)}catch(s){return ll("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zy(t){const e=yp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&kP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Uo(t,PE(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?NE(i.providerUserInfo):[],l=bP(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _d(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function NP(t){const e=$e(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function NE(t){return t.map(e=>{var{providerId:n}=e,r=pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){const n=await CE(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=kE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VP(t,e){return mi(t,"POST","/v2/accounts:revokeToken",Uu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=zy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await DP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _d(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RP(this,e)}reload(){return NP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await Uo(this,CP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:V,isAnonymous:F,providerData:L,stsTokenManager:y}=n;Y(x&&y,e,"internal-error");const g=Bs.fromJSON(this.name,y);Y(typeof x=="string",e,"internal-error"),Qn(m,e.name),Qn(w,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof F=="boolean",e,"internal-error"),Qn(A,e.name),Qn(P,e.name),Qn(b,e.name),Qn(R,e.name),Qn(I,e.name),Qn(T,e.name);const v=new Nn({uid:x,auth:e,email:w,emailVerified:V,displayName:m,isAnonymous:F,photoURL:P,phoneNumber:A,tenantId:b,stsTokenManager:g,createdAt:I,lastLoginAt:T});return L&&Array.isArray(L)&&(v.providerData=L.map(E=>Object.assign({},E))),R&&(v._redirectEventId=R),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bs;s.updateFromServerResponse(n);const i=new Nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ql(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?NE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Bs;l.updateFromIdToken(r);const u=new Nn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _d(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Map;function bn(t){Bn(t instanceof Function,"Expected a class definition");let e=$y.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$y.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bE.type="NONE";const By=bE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ul(this.userKey,s.apiKey,i),this.fullPersistenceKey=ul("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(bn(By),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(By);const o=ul(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=Nn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new qs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new qs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jE(e))return"Blackberry";if(FE(e))return"Webos";if(VE(e))return"Safari";if((e.includes("chrome/")||OE(e))&&!e.includes("edge/"))return"Chrome";if(ME(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DE(t=ht()){return/firefox\//i.test(t)}function VE(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OE(t=ht()){return/crios\//i.test(t)}function LE(t=ht()){return/iemobile/i.test(t)}function ME(t=ht()){return/android/i.test(t)}function jE(t=ht()){return/blackberry/i.test(t)}function FE(t=ht()){return/webos/i.test(t)}function vp(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OP(t=ht()){var e;return vp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LP(){return OA()&&document.documentMode===10}function UE(t=ht()){return vp(t)||ME(t)||FE(t)||jE(t)||/windows phone/i.test(t)||LE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t,e=[]){let n;switch(t){case"Browser":n=qy(ht());break;case"Worker":n=`${qy(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e={}){return mi(t,"GET","/v2/passwordPolicy",Uu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=6;class UP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wy(this),this.idTokenSubscription=new Wy(this),this.beforeStateQueue=new MP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PE(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(vr(this));const n=e?$e(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jP(this),n=new UP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zu(t){return $e(t)}class Wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=$A(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $P(t){_p=t}function BP(t){return _p.loadJS(t)}function qP(){return _p.gapiScript}function WP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t,e){const n=hs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ro(i,e??{}))return s;$n(s,"already-initialized")}return n.initialize({options:e})}function KP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GP(t,e,n){const r=zu(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$E(e),{host:o,port:l}=QP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),YP()}function $E(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QP(t){const e=$E(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Hy(o)}}}function Hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return RE(t,"POST","/v1/accounts:signInWithIdp",Uu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="http://localhost";class as extends BE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=pp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new as(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:XP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends qE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends ia{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ia{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ia{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JP(t,e){return RE(t,"POST","/v1/accounts:signUp",Uu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nn._fromIdTokenResponse(e,r,s),o=Ky(r);return new Ar({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ky(r);return new Ar({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t){var e;if(kn(t.app))return Promise.reject(vr(t));const n=zu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ar({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await JP(n,{returnSecureToken:!0}),s=await Ar._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yl(e,n,r,s)}}function WE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(t,i,e,r):i})}async function eN(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e,n=!1){const{auth:r}=t;if(kn(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await Uo(t,WE(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=yp(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ar._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e,n=!1){if(kn(t.app))return Promise.reject(vr(t));const r="signIn",s=await WE(t,r,e),i=await Ar._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function rN(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function sN(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=1e3,oN=10;class KE extends HE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KE.type="LOCAL";const aN=KE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE extends HE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GE.type="SESSION";const QE=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await lN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=wp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function cN(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function hN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fN(){return YE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebaseLocalStorageDb",pN=1,Jl="firebaseLocalStorage",JE="fbase_key";class oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bu(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function mN(){const t=indexedDB.deleteDatabase(XE);return new oa(t).toPromise()}function wd(){const t=indexedDB.open(XE,pN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:JE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await mN(),e(await wd()))})})}async function Gy(t,e,n){const r=Bu(t,!0).put({[JE]:e,value:n});return new oa(r).toPromise()}async function gN(t,e){const n=Bu(t,!1).get(e),r=await new oa(n).toPromise();return r===void 0?null:r.value}function Qy(t,e){const n=Bu(t,!0).delete(e);return new oa(n).toPromise()}const yN=800,vN=3;class ZE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(fN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hN(),!this.activeServiceWorker)return;this.sender=new uN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await Gy(e,Xl,"1"),await Qy(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bu(s,!1).getAll();return new oa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZE.type="LOCAL";const _N=ZE;new sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t,e){return e?bn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends BE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EN(t){return nN(t.auth,new Ep(t),t.bypassAuthState)}function TN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),tN(n,new Ep(t),t.bypassAuthState)}async function IN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),eN(n,new Ep(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EN;case"linkViaPopup":case"linkViaRedirect":return IN;case"reauthViaPopup":case"reauthViaRedirect":return TN;default:$n(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=new sa(2e3,1e4);class Os extends eT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SN.get())};e()}}Os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="pendingRedirect",cl=new Map;class xN extends eT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await CN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CN(t,e){const n=PN(e),r=kN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RN(t,e){cl.set(t._key(),e)}function kN(t){return bn(t._redirectPersistence)}function PN(t){return ul(AN,t.config.apiKey,t.name)}async function NN(t,e,n=!1){if(kn(t.app))return Promise.reject(vr(t));const r=zu(t),s=wN(r,e),o=await new xN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=10*60*1e3;class DN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yy(e))}saveEventToCache(e){this.cachedEventUids.add(Yy(e)),this.lastProcessedEventTime=Date.now()}}function Yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e={}){return mi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MN=/^https?/;async function jN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ON(t);for(const n of e)try{if(FN(n))return}catch{}$n(t,"unauthorized-domain")}function FN(t){const e=vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MN.test(n))return!1;if(LN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new sa(3e4,6e4);function Xy(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zN(t){return new Promise((e,n)=>{var r,s,i;function o(){Xy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xy(),n(vn(t,"network-request-failed"))},timeout:UN.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const l=WP("iframefcb");return _n()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},BP(`${qP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw hl=null,e})}let hl=null;function $N(t){return hl=hl||zN(t),hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new sa(5e3,15e3),qN="__/auth/iframe",WN="emulator/auth/iframe",HN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GN(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gp(e,WN):`https://${t.config.authDomain}/${qN}`,r={apiKey:e.apiKey,appName:t.name,v:ui},s=KN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ko(r).slice(1)}`}async function QN(t){const e=await $N(t),n=_n().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:GN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=_n().setTimeout(()=>{i(o)},BN.get());function u(){_n().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XN=500,JN=600,ZN="_blank",eb="http://localhost";class Jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tb(t,e,n,r=XN,s=JN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},YN),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ht().toLowerCase();n&&(l=OE(h)?ZN:n),DE(h)&&(e=e||eb,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[A,P])=>`${w}${A}=${P},`,"");if(OP(h)&&l!=="_self")return nb(e||"",l),new Jy(null);const m=window.open(e||"",l,f);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new Jy(m)}function nb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="__/auth/handler",sb="emulator/auth/handler",ib=encodeURIComponent("fac");async function Zy(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:s};if(e instanceof qE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ia){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${ib}=${encodeURIComponent(u)}`:"";return`${ob(t)}?${Ko(l).slice(1)}${h}`}function ob({config:t}){return t.emulator?gp(t,sb):`https://${t.authDomain}/${rb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="webStorageSupport";class ab{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QE,this._completeRedirectFn=NN,this._overrideRedirectResult=RN}async _openPopup(e,n,r,s){var i;Bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zy(e,n,r,vd(),s);return tb(e,o,wp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zy(e,n,r,vd(),s);return cN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QN(e),r=new DN(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[eh];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return UE()||VE()||vp()}}const lb=ab;var ev="@firebase/auth",tv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hb(t){wn(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zE(t)},h=new zP(r,s,i,u);return KP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new an("auth-internal",e=>{const n=zu(e.getProvider("auth").getImmediate());return(r=>new ub(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(ev,tv,cb(t)),qt(ev,tv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=5*60,fb=T0("authIdTokenMaxAge")||db;let nv=null;const pb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fb)return;const s=n==null?void 0:n.token;nv!==s&&(nv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mb(t=_f()){const e=hs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HP(t,{popupRedirectResolver:lb,persistence:[_N,aN,QE]}),r=T0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pb(i.toString());sN(n,o,()=>o(n.currentUser)),rN(n,l=>o(l))}}const s=w0("auth");return s&&GP(n,`http://${s}`),n}function gb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$P({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hb("Browser");const ji={apiKey:"AIzaSyDY7s5xKop_oD1udFptnCVx7UwZfEsX0og",authDomain:"shararadocforge.firebaseapp.com",projectId:"shararadocforge",storageBucket:"shararadocforge.firebasestorage.app",messagingSenderId:"69588921017",appId:"1:69588921017:web:5c8446d1863d4964360968",measurementId:"G-B80JCHME86"};let H=null,lo=null,Be=!1;try{if(ji.apiKey&&ji.apiKey!=="YOUR_API_KEY"&&ji.projectId&&ji.projectId!=="YOUR_PROJECT_ID"){const e=k0(ji);H=iP(e);try{lo=mb(e)}catch{lo=null}Be=!0;try{v1(e)}catch{}}}catch{Be=!1}const xr="documents",nT="counters/documents",yb="backups",rT="sharara_local_archive";function qu(){try{const t=localStorage.getItem(rT);return t?JSON.parse(t):[]}catch{return[]}}function Wu(t){try{localStorage.setItem(rT,JSON.stringify(t))}catch{}}function ze(t,e=15e3,n="Firebase"){return Promise.race([t,new Promise((r,s)=>setTimeout(()=>s(new Error(`timeout waiting for ${n} (${e}ms)`)),e))])}function Gt(t,e){const n=t&&t.code;return n==="permission-denied"?`חסרת הרשאה ל-${e}. ודא שהחוקים (Security Rules) מאפשרים קריאה/כתיבה למשתמש מחובר.`:n==="unauthenticated"?"לא מחובר ל-Firebase. ודא שהזדהות אנונימית מופעלת.":n==="failed-precondition"?`שגיאת תצורה ב-Firebase (ייתכן חסר אינדקס או שהמסד לא הופעל): ${t.message}`:n==="unavailable"?"שירות Firebase אינו זמין כרגע (רשת/אזור). נסה שוב מאוחר יותר.":t&&t.message||`שגיאה ב-${e}`}async function Le(){if(!(!Be||!H)&&lo&&!lo.currentUser)try{await ze(ZP(lo),15e3,"Firebase Auth")}catch(t){throw new Error("הזדהות מול Firebase נכשלה: "+(t&&t.message?t.message:"ודא שאימות אנונימי מופעל בקונסולה"))}}function rv(t){if(t==null)return null;if(typeof t=="object"&&typeof t.seconds=="number")return new Date(t.seconds*1e3).toISOString();if(t instanceof Date)return t.toISOString();const e=new Date(t);return isNaN(e.getTime())?null:e.toISOString()}function Zl(t,e,n){if(!t||typeof t!="object")return{id:e,source:n||"unknown",items:[]};const r=Array.isArray(t.items)?t.items.map(s=>{const i=s&&typeof s=="object"?s:{},o=i.quantity!==void 0&&i.quantity!==null&&i.quantity!=="";return{id:i.id?String(i.id):crypto.randomUUID(),description:i.description!=null?String(i.description):"",unit:i.unit?String(i.unit):"יח'",quantity:o?Number(i.quantity)||0:1,unitPrice:Number(i.unitPrice)||0}}):[];return{id:e,docId:t.docId||e,source:n||"firebase",docType:t.docType||"quote",customDocType:t.customDocType||"",useCustomDocType:!!t.useCustomDocType,serialNumber:t.serialNumber!=null?String(t.serialNumber):"",clientName:t.clientName||"",projectName:t.projectName||"",contactPerson:t.contactPerson||"",contactPhone:t.contactPhone||"",contactFax:t.contactFax||"",date:t.date||"",vatRate:t.vatRate!=null?Number(t.vatRate):18,customVat:t.customVat||"",notes:t.notes||"",items:r,status:t.status||"active",companySnapshot:t.companySnapshot||null,createdAt:rv(t.createdAt),updatedAt:rv(t.updatedAt)}}async function vb(t){if(!Be||!H)return null;const e=t,n=Ie(H,nT);try{const r=await ze(Mu(n),1e4,"Firestore counter read");return r.exists()?(r.data()[e]||0)+1:1}catch(r){return console.warn("Firestore serial read failed:",r),null}}async function _b(t,e=null){if(Be&&H){await Le();const i=Ie(Dr(H,xr)).id,o=Ie(H,xr,i),l=await vb(t.docType||"quote"),u=l!==null?String(l):t.serialNumber||"";try{await ze(Ot(o,{...t,serialNumber:u,companySnapshot:e,status:"active",docId:i,createdAt:Fo(),updatedAt:Fo()}),15e3,"Firestore")}catch(h){throw new Error(Gt(h,"שמירת מסמך"))}return{id:i,serial:u,source:"firebase"}}const n=qu(),r="local_"+Date.now()+"_"+crypto.randomUUID().slice(0,8),s={...t,id:r,docId:r,status:"active",companySnapshot:e,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),source:"local"};return n.unshift(s),Wu(n),{id:r,serial:s.serialNumber,source:"local"}}async function zo(t=!1){if(Be&&H){await Le();const n=pi(Dr(H,xr),ra("createdAt","desc"));let r;try{r=await ze(ju(n),15e3,"Firestore")}catch(i){throw new Error(Gt(i,"טעינת הארכיון"))}const s=r.docs.map(i=>Zl(i.data(),i.id,"firebase"));return t?s:s.filter(i=>i.status!=="deleted")}const e=qu().map(n=>Zl(n,n.id,"local")).sort((n,r)=>{const s=n.createdAt?new Date(n.createdAt).getTime():0;return(r.createdAt?new Date(r.createdAt).getTime():0)-s});return t?e:e.filter(n=>n.status!=="deleted")}async function wb(t){if(Be&&H&&!String(t).startsWith("local_")){await Le();const r=Ie(H,xr,t);try{await ze(Ot(r,{status:"deleted",updatedAt:Fo()},{merge:!0}),15e3,"Firestore");return}catch(s){throw new Error(Gt(s,"מחיקת מסמך"))}}const e=qu(),n=e.findIndex(r=>r.id===t);n!==-1&&(e[n].status="deleted",e[n].updatedAt=new Date().toISOString(),Wu(e))}async function Eb(t){if(Be&&H&&!String(t).startsWith("local_")){await Le();const r=Ie(H,xr,t);try{await ze(Ot(r,{status:"active",updatedAt:Fo()},{merge:!0}),15e3,"Firestore");return}catch(s){throw new Error(Gt(s,"שחזור מסמך"))}}const e=qu(),n=e.findIndex(r=>r.id===t);n!==-1&&(e[n].status="active",e[n].updatedAt=new Date().toISOString(),Wu(e))}async function Tb(t,e){if(!Be||!H)throw new Error("גיבוי לענן זמין רק כשחיבור Firebase פעיל");await Le();const n=Ie(H,yb,t);await ze(Ot(n,{exportedAt:Fo(),backupDate:t,documents:e,totalDocuments:e.length}),3e4,"Firestore backup")}async function Ib(){if(!Be||!H){Wu([]);return}await Le();const t=pi(Dr(H,xr),ra("createdAt")),e=await ze(ju(t),6e4,"Firestore fetch for reset"),n=fp(H);e.docs.forEach(s=>{n.delete(Ie(H,xr,s.id))}),await n.commit();const r=Ie(H,nT);try{await Ot(r,{quote:0,work_order:0,agreement:0})}catch{}}const Tt="customers",Cr="projects";async function sT(t){if(!(!Be||!H)){await Le();try{await ze(Ot(Ie(H,Tt,t),{name:t}),15e3,"Firestore")}catch(e){throw new Error(Gt(e,"הוספת לקוח"))}}}async function iT(t,e){if(!(!Be||!H)){if(!e)throw new Error("יש לבחור לקוח לפני הוספת פרויקט");await Le();try{const n=Ie(H,Tt,e,Cr,t);await ze(Ot(n,{name:t}),15e3,"Firestore")}catch(n){throw new Error(Gt(n,"הוספת פרויקט"))}}}async function Sb(t){if(!(!Be||!H)){await Le();try{await ze(hp(Ie(H,Tt,t)),15e3,"Firestore")}catch(e){throw new Error(Gt(e,"מחיקת לקוח"))}}}async function Ab(t,e){if(!(!Be||!H)){if(!e)throw new Error("יש לבחור לקוח");await Le();try{const n=Ie(H,Tt,e,Cr,t);await ze(hp(n),15e3,"Firestore")}catch(n){throw new Error(Gt(n,"מחיקת פרויקט"))}}}async function xb(t,e){if(!(!Be||!H)&&!(!t||!e||t===e)){await Le();try{const n=Ie(H,Tt,t),r=Ie(H,Tt,e),s=await ze(Mu(n),15e3,"Firestore");s.exists()&&await ze(Ot(r,{name:e,phone:s.data().phone||"",fax:s.data().fax||""},{merge:!0}),15e3,"Firestore");const i=Dr(H,Tt,t,Cr),o=await ze(ju(i),15e3,"Firestore"),l=fp(H);o.docs.forEach(u=>{l.set(Ie(H,Tt,e,Cr,u.id),u.data()),l.delete(u.ref)}),l.delete(n),await l.commit()}catch(n){throw new Error(Gt(n,"שינוי שם לקוח"))}}}async function Cb(t,e,n){if(!(!Be||!H)&&!(!t||!e||t===e||!n)){await Le();try{const r=Ie(H,Tt,n,Cr,t),s=Ie(H,Tt,n,Cr,e);(await ze(Mu(r),15e3,"Firestore")).exists()&&(await ze(Ot(s,{name:e},{merge:!0}),15e3,"Firestore"),await ze(hp(r),15e3,"Firestore"))}catch(r){throw new Error(Gt(r,"שינוי שם פרויקט"))}}}async function Rb(){if(!Be||!H)return{customers:0,projects:0};await Le();const t=await ze(ju(pi(Dr(H,xr))),6e4,"Firestore migration scan"),e=new Map;if(t.docs.forEach(s=>{const i=s.data();if(i.status==="deleted")return;const o=i.clientName&&typeof i.clientName=="string"?i.clientName.trim():"",l=i.projectName&&typeof i.projectName=="string"?i.projectName.trim():"";o&&(e.has(o)||e.set(o,new Set),l&&e.get(o).add(l))}),e.size===0)return{customers:0,projects:0};const n=[];e.forEach((s,i)=>{n.push({type:"set",ref:Ie(H,Tt,i),data:{name:i}}),s.forEach(o=>{const l=Ie(H,Tt,i,Cr,o);n.push({type:"set",ref:l,data:{name:o}})})});for(let s=0;s<n.length;s+=500){const i=n.slice(s,s+500),o=fp(H);i.forEach(l=>o.set(l.ref,l.data,{merge:!0})),await o.commit()}let r=0;return e.forEach(s=>{r+=s.size}),{customers:e.size,projects:r}}function Hu(){return Be&&H?Promise.resolve():new Promise(t=>{const e=()=>{Be&&H?t():setTimeout(e,100)};e()})}let th=!1;function oT(t){let e=()=>{},n=!1;return(async()=>{if(await Hu(),n)return;try{await Le()}catch{t([]);return}if(n||!H){t([]);return}try{th||(await Rb(),th=!0)}catch(s){console.warn("Migration failed (will retry):",s&&s.message?s.message:s),th=!1}if(n)return;const r=pi(Dr(H,Tt),ra("name"));e=Fu(r,s=>t(s.docs.map(i=>i.data().name)),s=>{console.warn("subscribeCustomers error:",Gt(s,"לקוחות (real-time)")),t([])})})(),()=>{n=!0,e()}}function aT(t,e){let n=()=>{},r=!1;return t?((async()=>{if(await Hu(),r)return;try{await Le()}catch{e([]);return}if(r||!H){e([]);return}const s=Dr(H,Tt,t,Cr),i=pi(s,ra("name"));n=Fu(i,o=>e(o.docs.map(l=>l.data().name)),o=>{console.warn("subscribeProjects error:",Gt(o,"פרויקטים (real-time)")),e([])})})(),()=>{r=!0,n()}):(e([]),n)}const Ed="customers",kb="projects";let lT=[];function Pb(t){let e=()=>{},n=!1;return(async()=>{if(await Hu(),n)return;try{await Le()}catch{return}if(n||!H)return;const r=pi(Dr(H,Ed),ra("name"));e=Fu(r,s=>{lT=s.docs.map(i=>{const o=i.data();return{name:o.name||i.id,phone:o.phone||"",fax:o.fax||""}})},s=>{console.warn("subscribeToCustomers error:",s&&s.message?s.message:s)})})(),()=>{n=!0,e()}}function Nb(t){return!t||!t.trim()?null:lT.find(e=>e.name.trim().toLowerCase()===t.trim().toLowerCase())||null}async function bb(t,e,n,r){if(!t||!t.trim()||!H)return;const s=t.trim(),i=e?e.trim():"",o=n?n.trim():"",l=r?r.trim():"";try{await Le()}catch{return}const u=Ie(H,Ed,s);try{await Ot(u,{name:s,phone:o,fax:l},{merge:!0})}catch(h){console.warn("harvestCustomerProject write customer error:",h&&h.message?h.message:h);return}if(i){const h=Ie(H,Ed,s,kb,i);try{(await Mu(h)).exists()||await Ot(h,{name:i})}catch(f){console.warn("harvestCustomerProject write project error:",f&&f.message?f.message:f)}}}const Tp="counters/documents",Db={"הצעת מחיר":"quote","הזמנת עבודה":"work_order","הסכם עבודה":"agreement"};function Vb(t){return t?Db[t]||t:"quote"}let fn={};function uT(t){let e=()=>{},n=!1;return(async()=>{if(await Hu(),n)return;try{await Le()}catch{return}if(n||!H)return;try{const s=await zo(!0);hT(s)}catch{}if(t&&t(fn),n)return;const r=Ie(H,Tp);e=Fu(r,s=>{if(s.exists()){const i=s.data();Object.keys(i).forEach(o=>{fn[o]=Math.max(fn[o]||0,i[o]||0)})}t&&t({...fn})},s=>{console.warn("subscribeToCounters error:",s&&s.message?s.message:s)})})(),()=>{n=!0,e()}}function cT(t){return t?(fn[t]||0)+1:1}function Ob(t,e){if(!t)return;const n=parseInt(e,10);!isNaN(n)&&n>=(fn[t]||0)&&(fn[t]=n)}function Lb(){return{...fn}}function hT(t){Array.isArray(t)&&t.forEach(e=>{const n=e.type||e.docType,r=Vb(n),s=parseInt(e.serialNumber,10);!isNaN(s)&&s>=(fn[r]||0)&&(fn[r]=s)})}async function Mb(t){if(!t||!H)return;try{await Le()}catch{return}const e=Ie(H,Tp);try{await Ot(e,{[t]:vP(1)},{merge:!0})}catch(n){console.warn("incrementSerial error:",n&&n.message?n.message:n)}}async function jb(t,e){if(!t||!H)return;const n=parseInt(e,10);if(isNaN(n)||n<0)return;try{await Le()}catch{return}const r=Ie(H,Tp);try{await Ot(r,{[t]:n},{merge:!0})}catch(s){console.warn("setSerial error:",s&&s.message?s.message:s)}}function Td({value:t,onChange:e,options:n=[],placeholder:r="",className:s="",required:i=!1,disabled:o=!1,hideCreate:l=!1}){const[u,h]=U.useState(!1),[f,m]=U.useState(""),w=U.useRef(null),A=U.useRef(null),P=U.useMemo(()=>n.map(y=>typeof y=="string"?y:y.value),[n]),b=t||"",R=U.useMemo(()=>{if(!f.trim())return P;const y=f.trim().toLowerCase();return P.filter(g=>g.toLowerCase().includes(y))},[P,f]),I=U.useCallback(y=>{if(!f.trim())return y;const g=f.trim(),v=y.toLowerCase().indexOf(g.toLowerCase());return v===-1?y:p.jsxs(p.Fragment,{children:[y.slice(0,v),p.jsx("strong",{className:"sd-highlight",children:y.slice(v,v+g.length)}),y.slice(v+g.length)]})},[f]);U.useEffect(()=>{const y=g=>{w.current&&!w.current.contains(g.target)&&(h(!1),m(""))};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const T=()=>{h(!0),m(""),setTimeout(()=>{var y;return(y=A.current)==null?void 0:y.focus()},0)},x=y=>{m(y.target.value),u||h(!0)},V=y=>{e(y),h(!1),m("")},F=()=>{const y=f.trim();y&&(e(y),h(!1),m(""))},L=y=>{y.key==="Escape"?(h(!1),m("")):y.key==="Enter"&&(y.preventDefault(),u&&R.length>0?V(R[0]):u&&f.trim()&&F())};return o?p.jsx("div",{className:`sd-container ${s}`,style:{opacity:.6},children:p.jsxs("div",{className:"sd-trigger",children:[p.jsx("input",{type:"text",value:b,placeholder:r||"בחר לקוח תחילה...",className:"sd-input",disabled:!0}),p.jsx("span",{className:"sd-chevron",children:"▾"})]})}):p.jsxs("div",{ref:w,className:`sd-container ${s}`,children:[p.jsxs("div",{className:"sd-trigger",onClick:T,role:"combobox","aria-expanded":u,"aria-haspopup":"listbox",children:[p.jsx("input",{ref:A,type:"text",value:u?f:b,onChange:x,onFocus:()=>{u||h(!0),m("")},onKeyDown:L,placeholder:r,className:"sd-input",autoComplete:"off"}),p.jsx("span",{className:`sd-chevron ${u?"sd-chevron-open":""}`,children:"▾"})]}),u&&p.jsx("ul",{className:"sd-list",role:"listbox",children:R.length===0?f.trim()&&!l?p.jsxs("li",{className:"sd-option sd-option-create",onClick:F,role:"option",children:[p.jsx("span",{className:"sd-create-icon",children:"+"}),' צור "',f.trim(),'"']}):p.jsx("li",{className:"sd-empty",children:"אין תוצאות"}):R.map(y=>p.jsx("li",{className:`sd-option ${y.toLowerCase()===b.toLowerCase()?"sd-option-active":""}`,onClick:()=>V(y),role:"option","aria-selected":y===b,children:I(y)},y))})]})}const Fb="/ShararaDocForge/assets/logo-D_MzoQS5.png",Ub="/ShararaDocForge/assets/SHARARA%20SIGNATURE--lQ0GJXD.png",eu=[{value:"quote",label:"הצעת מחיר"},{value:"work_order",label:"הזמנת עבודה"},{value:"agreement",label:"הסכם עבודה"}],dT=["יח'",'מ"א',"גלובלי",'מ"ר',"ימים",'מ"ק',"שעות","סט"],fT={name:'עלי שרארה בע"מ',subtitle:"תעשיות פח ומערכות אוורור ומיזוג אוויר",tradeDesc:"תכנון וביצוע מערכות מיזוג אוויר ואוורור פינוי עשן יצור תעלות פח צינורות 'ספירקל' ואביזרים תעלות נירוסטה ומנדפים תעלות פח שחור חיתוך וכיפוף פחים מכירה והתקנת כל סוגי המזגנים",phone:"04-6082264",fax:"04-6082263",mobile1:"050-5215192",contactName1:"",mobile2:"",contactName2:"",email:"ali@sharara.co.il",email2:"",website:"www.sharara.co.il",address:"שכ' מזרחית, נצרת/ריינה"},tu=()=>({id:crypto.randomUUID(),description:"",unit:"יח'",quantity:1,unitPrice:0}),dl=(t="quote")=>({docType:t,customDocType:"",useCustomDocType:!1,serialNumber:"",clientName:"",projectName:"",contactPerson:"",contactPhone:"",contactFax:"",date:new Date().toISOString().split("T")[0],vatRate:18,customVat:"",items:[tu()]}),Ip=t=>Number(t.quantity)*Number(t.unitPrice),pT=t=>t.reduce((e,n)=>e+Ip(n),0),mT=(t,e)=>t*(Number(e)/100),gT=(t,e)=>t+mT(t,e),$r=t=>t.toLocaleString("he-IL",{minimumFractionDigits:2,maximumFractionDigits:2}),Sp=t=>{if(!t)return"";const[e,n,r]=t.split("-");return!e||!n||!r?t:`${r}/${n}/${e}`},zb=t=>{const e=t.split("/").filter(Boolean);if(e.length!==3)return"";const[n,r,s]=e;if(n.length!==2||r.length!==2||s.length!==4)return"";const i=parseInt(n,10),o=parseInt(r,10),l=parseInt(s,10);return i<1||i>31||o<1||o>12||l<1900?"":`${s}-${r}-${n}`};function Ap(t){const e=parseFloat(t.customVat);return!isNaN(e)&&e>=0&&e<=100?e:Number(t.vatRate)||0}function uo(t){var e;return t.useCustomDocType&&t.customDocType&&t.customDocType.trim()?t.customDocType.trim():((e=eu.find(n=>n.value===t.docType))==null?void 0:e.label)||"מסמך"}function $b(t){return{...t,items:t.items.map(e=>({...e}))}}function Bb(t){return{...t}}function nh(t){const e={};return t.clientName&&t.clientName.trim().length>0||(e.clientName=!0),t.items.some(s=>s.description&&s.description.trim().length>0)||(e.noDescription=!0),{valid:Object.keys(e).length===0,errors:e}}function qb({message:t,type:e}){return t?p.jsx("div",{className:"toast-container",children:p.jsx("div",{className:`toast ${e||""}`,children:t})}):null}function Wb({company:t,doc:e}){const n=e.companySnapshot||t,r=e.serialNumber&&String(e.serialNumber).trim()?String(e.serialNumber).padStart(6,"0"):String(cT(e.docType||"quote")).padStart(6,"0"),s=Ap(e),i=U.useMemo(()=>pT(e.items),[e.items]),o=U.useMemo(()=>mT(i,s),[i,s]),l=U.useMemo(()=>gT(i,s),[i,s]),u=uo(e),h=e.items.filter(m=>m.description||m.unitPrice>0),f=Math.max(0,8-h.length);return e.notes,p.jsxs("div",{className:"print-sheet",children:[p.jsxs("div",{className:"letterhead",children:[p.jsx("div",{className:"letterhead-main",children:p.jsxs("div",{className:"letterhead-titles",children:[p.jsx("h1",{children:n.name}),p.jsx("h2",{children:n.subtitle}),p.jsxs("div",{className:"letterhead-trade-wrap",children:[p.jsx("img",{src:Fb,alt:"לוגו",className:"letterhead-logo"}),p.jsx("div",{className:"letterhead-trade",children:n.tradeDesc})]})]})}),p.jsxs("div",{className:"letterhead-contact",children:[p.jsxs("div",{className:"flex flex-wrap justify-center gap-x-4 gap-y-1 w-full",children:[p.jsxs("span",{children:["Tel: ",p.jsx("span",{className:"dir-ltr",children:n.phone})]}),p.jsxs("span",{children:["Fax: ",p.jsx("span",{className:"dir-ltr",children:n.fax})]}),(n.mobile1||n.mobile)&&p.jsxs("span",{children:[n.contactName1?`${n.contactName1}: `:"Mobile: ",p.jsx("span",{className:"dir-ltr",children:n.mobile1||n.mobile})]}),n.mobile2&&p.jsxs("span",{children:[n.contactName2?`${n.contactName2}: `:"נייד 2: ",p.jsx("span",{className:"dir-ltr",children:n.mobile2})]})]}),p.jsxs("div",{className:"flex flex-wrap justify-center gap-x-4 gap-y-1 w-full",children:[p.jsx("span",{children:n.email}),n.email2&&p.jsx("span",{children:n.email2}),p.jsx("span",{children:n.website}),p.jsx("span",{children:n.address})]})]})]}),p.jsx("div",{className:"doc-title",children:u}),p.jsxs("div",{className:"doc-serial",children:["מס' סידורי: ",r||"———"]}),p.jsxs("div",{className:"meta-grid",children:[p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"שם המזמין:"})," ",e.clientName||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"תאריך:"})," ",Sp(e.date)]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"שם הפרויקט:"})," ",e.projectName||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"איש קשר:"})," ",e.contactPerson||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"מס' טלפון:"})," ",e.contactPhone||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"ח.פ.:"})," ",e.contactFax||p.jsx("span",{className:"meta-dash",children:"—"})]})]}),p.jsxs("table",{className:"items-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{className:"col-num",children:"מס'"}),p.jsx("th",{className:"col-desc",children:"תאור"}),p.jsx("th",{className:"col-unit",children:"יח' מידה"}),p.jsx("th",{className:"col-qty",children:"כמות"}),p.jsx("th",{className:"col-price",children:"מחיר ליחידה"}),p.jsx("th",{className:"col-total",children:'סה"כ לפני מע"מ'})]})}),p.jsxs("tbody",{children:[h.map((m,w)=>p.jsxs("tr",{children:[p.jsx("td",{className:"col-num",children:w+1}),p.jsx("td",{children:m.description}),p.jsx("td",{className:"col-unit",children:m.unit}),p.jsx("td",{className:"col-qty",children:m.quantity}),p.jsxs("td",{className:"col-price num-cell",children:[$r(m.unitPrice)," ₪"]}),p.jsxs("td",{className:"col-total num-cell",children:[$r(Ip(m))," ₪"]})]},m.id)),h.length===0&&p.jsx("tr",{className:"empty-row",children:p.jsx("td",{colSpan:6,children:"—"})}),Array.from({length:f}).map((m,w)=>p.jsxs("tr",{style:{height:26},children:[p.jsx("td",{children:" "}),p.jsx("td",{}),p.jsx("td",{}),p.jsx("td",{}),p.jsx("td",{}),p.jsx("td",{})]},`pad-${w}`))]})]}),p.jsx("div",{className:"totals-card",children:p.jsxs("div",{className:"totals-card-inner",children:[p.jsxs("div",{className:"totals-card-row",children:[p.jsx("span",{children:'סה"כ לפני מע"מ'}),p.jsxs("span",{className:"dir-ltr",children:[$r(i)," ₪"]})]}),p.jsxs("div",{className:"totals-card-row",children:[p.jsxs("span",{children:['מע"מ (',s,"%)"]}),p.jsxs("span",{className:"dir-ltr",children:[$r(o)," ₪"]})]}),p.jsxs("div",{className:"totals-card-row grand",children:[p.jsx("span",{children:'סה"כ לתשלום'}),p.jsxs("span",{className:"dir-ltr",children:[$r(l)," ₪"]})]})]})}),p.jsxs("div",{className:"legal-section",children:[p.jsx("p",{children:"נא לאשר את ההצעה תוך ___ ימים מיום קבלתה. תנאי תשלום: שוטף + 30 יום. לפי שמוסכם. שיק בזמן קבלת ההזמנה. ט.ל.ח"}),p.jsx("p",{children:'החתום על הצעת מחיר זו ערב באופן אישי לפירעון התשלום. הסחורה בבעלות עלי שרארה בע"מ עד לפרעון התשלום.'})]}),p.jsxs("div",{className:"signature-block",children:[p.jsx("div",{className:"sig-box",children:p.jsxs("div",{className:"sig-line",children:[p.jsx("span",{className:"sig-client-label",children:"לקוח"}),"תעודת זהות / עוסק מורשה"]})}),p.jsxs("div",{className:"sig-box",children:[p.jsx("div",{className:"sig-img-wrapper",children:p.jsx("img",{src:Ub,alt:"חתימה",style:{width:180,height:90,objectFit:"contain"}})}),p.jsx("div",{className:"sig-line",children:"חתימה & חותמת"})]})]})]})}function Hb({doc:t,onChange:e,showValidation:n,validationErrors:r}){const s=(R,I)=>e(T=>({...T,[R]:I})),[i,o]=U.useState([]),[l,u]=U.useState([]);U.useEffect(()=>{const R=oT(I=>{o(I)});return()=>R()},[]),U.useEffect(()=>{if(!t.clientName){u([]);return}const R=aT(t.clientName,u);return()=>R()},[t.clientName]);const h=R=>{if(s("clientName",R),s("projectName",""),R&&R.trim()){i.includes(R)||sT(R).catch(()=>{});const I=Nb(R);I&&(s("contactPhone",I.phone||""),s("contactFax",I.fax||""))}},f=R=>{s("projectName",R),R&&R.trim()&&t.clientName&&!l.includes(R)&&iT(R,t.clientName).catch(()=>{})},m=(R,I,T)=>e(x=>({...x,items:x.items.map(V=>V.id===R?{...V,[I]:T}:V)})),w=R=>e(I=>({...I,items:I.items.filter(T=>T.id!==R)})),A=()=>e(dl()),P=()=>{e(R=>({...R,useCustomDocType:!R.useCustomDocType,customDocType:R.useCustomDocType?"":R.customDocType}))},b=Ap(t);return p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"סוג מסמך"}),p.jsx("div",{className:"flex items-center gap-2",children:p.jsxs("select",{value:t.useCustomDocType?"__custom__":t.docType,onChange:R=>{if(R.target.value==="__custom__")s("useCustomDocType",!0);else{const I=R.target.value;s("docType",I),s("useCustomDocType",!1),s("customDocType","")}},className:"form-input flex-1",children:[eu.map(R=>p.jsx("option",{value:R.value,children:R.label},R.value)),p.jsx("option",{value:"__custom__",children:"סוג מסמך מותאם אישית..."})]})}),t.useCustomDocType&&p.jsx("input",{type:"text",value:t.customDocType,onChange:R=>s("customDocType",R.target.value),className:"form-input mt-2",placeholder:"הזן שם מסמך מותאם אישית...",autoFocus:!0}),t.useCustomDocType&&p.jsx("button",{onClick:P,className:"mt-1.5 text-[10px] text-gray-400 hover:text-gray-600 underline",children:"חזור לסוג מסמך קבוע"})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[p.jsxs("div",{children:[p.jsxs("label",{className:"form-label",children:["שם המזמין ",p.jsx("span",{className:"text-red-500",children:"*"})]}),p.jsx(Td,{value:t.clientName,onChange:h,options:i,placeholder:"הקלד או בחר שם לקוח...",className:`${n&&(r!=null&&r.clientName)?"form-input-error":""}`}),n&&(r==null?void 0:r.clientName)&&p.jsx("p",{className:"validation-hint",children:"שדה חובה - הזן שם המזמין"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"שם הפרויקט"}),p.jsx(Td,{value:t.projectName,onChange:f,options:l,placeholder:"הקלד או בחר פרויקט...",disabled:!t.clientName})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"איש קשר"}),p.jsx("input",{value:t.contactPerson,onChange:R=>s("contactPerson",R.target.value),className:"form-input"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"תאריך"}),p.jsx("input",{type:"text",value:Sp(t.date),onChange:R=>{let I=R.target.value.replace(/[^\d/]/g,"");I.length===2&&!I.includes("/")&&t.date&&(I=I+"/"),I.length===5&&I.charAt(2)==="/"&&I.charAt(5)!=="/"&&(I=I+"/"),s("date",zb(I))},placeholder:"DD/MM/YYYY",className:"form-input",maxLength:10,dir:"ltr",style:{textAlign:"center"}})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"טלפון"}),p.jsx("input",{value:t.contactPhone,onChange:R=>s("contactPhone",R.target.value),className:"form-input"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"ח.פ."}),p.jsx("input",{value:t.contactFax,onChange:R=>s("contactFax",R.target.value),className:"form-input"})]})]}),p.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[p.jsx("label",{className:"form-label mb-0",children:'מע"מ:'}),[17,18].map(R=>p.jsxs("button",{onClick:()=>{s("vatRate",R),s("customVat","")},className:`px-3 py-1 rounded text-xs font-semibold transition-colors ${t.vatRate===R&&!t.customVat?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[R,"%"]},R)),p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("input",{type:"number",min:"0",max:"100",step:"0.1",placeholder:"custom",value:t.customVat,onChange:R=>s("customVat",R.target.value),className:"vat-custom-input"}),p.jsx("span",{className:"text-xs text-gray-500",children:"%"})]}),p.jsxs("span",{className:"text-[10px] text-gray-400",children:["(",b,"% פעיל)"]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("h3",{className:"text-xs font-bold text-gray-500 uppercase tracking-wide",children:"סעיפים"}),t.items.length>0&&p.jsx("button",{onClick:()=>e(R=>({...R,items:[]})),className:"text-[10px] text-gray-400 hover:text-gray-600 underline",children:"נקה הכל"})]}),p.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded p-2 mb-3",children:p.jsx(Kb,{onAdd:R=>{e(I=>({...I,items:[...I.items,R]}))},showValidation:n})}),t.items.length>0&&p.jsx("div",{className:"space-y-2",children:t.items.map((R,I)=>p.jsxs("div",{className:"bg-white border border-gray-200 rounded p-2",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-5 text-center text-gray-400 font-semibold shrink-0",children:I+1}),p.jsx("select",{value:R.unit,onChange:T=>m(R.id,"unit",T.target.value),className:"w-14 shrink-0 border border-gray-200 hover:border-gray-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-blue-500",children:dT.map(T=>p.jsx("option",{value:T,children:T},T))}),p.jsx("input",{type:"number",min:"0",value:R.quantity,onChange:T=>m(R.id,"quantity",Number(T.target.value)),className:"w-12 shrink-0 border border-gray-200 hover:border-gray-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsx("input",{type:"number",min:"0",value:R.unitPrice,onChange:T=>m(R.id,"unitPrice",Number(T.target.value)),className:"w-16 shrink-0 border border-gray-200 hover:border-gray-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsxs("span",{className:"w-16 shrink-0 text-center text-gray-500 font-medium tabular-nums text-[11px]",children:[$r(Ip(R))," ₪"]}),p.jsx("button",{onClick:()=>w(R.id),className:"text-red-300 hover:text-red-600 transition-colors text-sm leading-none px-1 shrink-0",title:"מחק סעיף",children:"×"})]}),p.jsx("div",{className:"flex items-center gap-1.5 mr-7 mt-1",children:p.jsx("input",{placeholder:"תיאור פריט...",value:R.description,onChange:T=>m(R.id,"description",T.target.value),className:`flex-1 border border-gray-200 hover:border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${n&&(r!=null&&r.noDescription)&&(!R.description||!R.description.trim())?"border-red-400":""}`})})]},R.id))}),t.items.length===0&&p.jsx("p",{className:"text-center text-gray-400 text-xs py-4",children:"אין סעיפים — הוסף סעיף חדש למעלה"}),n&&(r==null?void 0:r.noDescription)&&p.jsx("p",{className:"validation-hint mt-1",children:"חובה להזין תיאור לפחות בסעיף אחד"})]}),p.jsx("button",{onClick:A,className:"w-full bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold py-2 rounded transition-colors",children:"אפס טופס"})]})}function Kb({onAdd:t}){const[e,n]=U.useState("יח'"),[r,s]=U.useState(1),[i,o]=U.useState(0),[l,u]=U.useState(""),h=()=>{const m=l.trim();m&&(t({id:crypto.randomUUID(),description:m,unit:e,quantity:Number(r)||1,unitPrice:Number(i)||0}),n("יח'"),s(1),o(0),u(""))},f=m=>{m.key==="Enter"&&h()};return p.jsxs("div",{className:"space-y-1",children:[p.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-emerald-700 font-medium",children:[p.jsx("span",{className:"w-5 shrink-0"}),p.jsx("span",{className:"w-14 shrink-0 text-center",children:"יח'"}),p.jsx("span",{className:"w-12 shrink-0 text-center",children:"כמות"}),p.jsx("span",{className:"w-16 shrink-0 text-center",children:'מחיר ש"ח'}),p.jsx("span",{className:"flex-1"}),p.jsx("span",{className:"w-12 shrink-0"})]}),p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-5 text-center text-emerald-600 font-semibold shrink-0",children:"+"}),p.jsx("select",{value:e,onChange:m=>n(m.target.value),className:"w-14 shrink-0 border border-emerald-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500",children:dT.map(m=>p.jsx("option",{value:m,children:m},m))}),p.jsx("input",{type:"number",min:"0",value:r,onChange:m=>s(m.target.value),onKeyDown:f,className:"w-12 shrink-0 border border-emerald-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500",placeholder:"כמות"}),p.jsx("input",{type:"number",min:"0",value:i,onChange:m=>o(m.target.value),onKeyDown:f,className:"w-16 shrink-0 border border-emerald-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500",placeholder:"0.00"}),p.jsx("button",{onClick:h,disabled:!l.trim(),className:"bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors shrink-0",children:"הוסף"})]}),p.jsx("div",{className:"flex items-center gap-1.5 mr-7",children:p.jsx("input",{placeholder:"תיאור פריט...",value:l,onChange:m=>u(m.target.value),onKeyDown:f,className:"flex-1 border border-emerald-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"})})]})}function Gb({onLoadToForm:t,onPreview:e,refreshKey:n}){const[r,s]=U.useState([]),[i,o]=U.useState(!0),[l,u]=U.useState(null),[h,f]=U.useState("all"),[m,w]=U.useState("active"),A=U.useCallback(async()=>{o(!0),u(null);try{const y=await zo(!0);s(y)}catch(y){u(y.message||"Failed to load archive")}finally{o(!1)}},[]);U.useEffect(()=>{A()},[A,n]);const P=U.useMemo(()=>{const y=new Set;return r.forEach(g=>{const v=uo(g);v&&y.add(v)}),Array.from(y).sort()},[r]),b=U.useMemo(()=>r.filter(y=>y.status!=="deleted"),[r]),R=U.useMemo(()=>r.filter(y=>y.status==="deleted"),[r]),I=m==="active"?b:R,T=U.useMemo(()=>h==="all"?I:I.filter(y=>uo(y)===h),[I,h]),x=async(y,g)=>{if(window.confirm(`למחוק מסמך של "${g}"?`))try{await wb(y),A()}catch(v){alert("שגיאה במחיקה: "+v.message)}},V=async(y,g)=>{if(window.confirm(`לשחזר מסמך של "${g}"?`))try{await Eb(y),A()}catch(v){alert("שגיאה בשחזור: "+v.message)}},F=y=>{const g={...y};delete g.id,delete g.docId,delete g.createdAt,delete g.updatedAt,delete g.source,delete g.status,(!g.items||g.items.length===0)&&(g.items=[tu()]),g.items=g.items.map(v=>({...v,id:crypto.randomUUID(),description:v.description||"",unit:v.unit||"יח'",quantity:Number(v.quantity)||1,unitPrice:Number(v.unitPrice)||0})),g.notes=g.notes||"",g.customVat=g.customVat||"",g.customDocType=g.customDocType||"",g.useCustomDocType=g.useCustomDocType||!1,g.date=new Date().toISOString().split("T")[0],t(g,!0)},L=y=>{if(!y.createdAt)return"";const g=new Date(y.createdAt);if(isNaN(g.getTime()))return"";const v=String(g.getDate()).padStart(2,"0"),E=String(g.getMonth()+1).padStart(2,"0"),C=g.getFullYear();return`${v}/${E}/${C}`};return i?p.jsx("div",{className:"flex items-center justify-center h-48 text-gray-400 text-sm",children:"טוען ארכיון..."}):l?p.jsxs("div",{className:"p-4 text-center",children:[p.jsx("p",{className:"text-red-500 text-sm mb-2",children:l}),p.jsx("button",{onClick:A,className:"text-blue-600 text-xs underline",children:"נסה שוב"})]}):p.jsxs("div",{className:"p-4",children:[p.jsxs("div",{className:"flex items-center justify-between mb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("button",{onClick:()=>w("active"),className:`text-xs font-semibold px-3 py-1 rounded transition-colors ${m==="active"?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:["מסמכים פעילים (",b.length,")"]}),p.jsxs("button",{onClick:()=>w("deleted"),className:`text-xs font-semibold px-3 py-1 rounded transition-colors ${m==="deleted"?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:["נמחקו (",R.length,")"]})]}),p.jsx("button",{onClick:A,className:"text-xs text-blue-600 hover:underline",children:"רענון"})]}),r.length>0&&p.jsxs("div",{className:"mb-3",children:[p.jsx("label",{className:"form-label",children:"סנן לפי סוג מסמך"}),p.jsxs("select",{value:h,onChange:y=>f(y.target.value),className:"form-input",children:[p.jsx("option",{value:"all",children:"הכל"}),P.map(y=>p.jsx("option",{value:y,children:y},y))]})]}),r.length===0?p.jsx("div",{className:"text-center text-gray-400 text-sm py-12",children:"אין מסמכים שמורים"}):T.length===0?p.jsx("div",{className:"text-center text-gray-400 text-sm py-12",children:"אין מסמכים התואמים את הסינון"}):p.jsx("div",{className:"space-y-1.5",children:T.map(y=>{const g=uo(y),v=y.items?pT(y.items):0,E=Ap(y),C=y.items?gT(v,E):0,k=y.source==="local",S=L(y);return p.jsxs("div",{className:`flex items-center gap-2 border rounded p-2 text-xs ${y.status==="deleted"?"bg-red-50 border-red-200":"bg-gray-50 border-gray-200"}`,children:[p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-0.5 flex-wrap",children:[p.jsx("span",{className:"bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-semibold",children:g}),y.serialNumber&&p.jsxs("span",{className:"text-gray-400 font-mono text-[10px]",children:["#",String(y.serialNumber).padStart(4,"0")]}),S&&p.jsx("span",{className:"text-gray-400 text-[10px]",children:S}),typeof y.date=="string"&&y.date&&p.jsxs("span",{className:"text-gray-500 text-[10px]",children:["ת: ",Sp(y.date)]}),k&&p.jsx("span",{className:"bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded text-[10px] font-semibold",children:"מקומי"})]}),p.jsx("div",{className:"font-semibold text-gray-800 truncate",children:y.clientName||"ללא שם"}),p.jsx("div",{className:"text-gray-500 truncate",children:y.projectName})]}),p.jsx("div",{className:"text-left shrink-0",dir:"ltr",children:p.jsx("div",{className:"font-bold text-gray-800",children:$r(C)})}),p.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[p.jsx("button",{onClick:()=>e(y),className:"bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded transition-colors",title:"תצוגה",children:"👁"}),p.jsx("button",{onClick:()=>F(y),className:"bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1 rounded transition-colors",title:"שכפל",children:"📋"}),y.status==="deleted"?p.jsx("button",{onClick:()=>V(y.id,y.clientName),className:"bg-teal-50 hover:bg-teal-100 text-teal-700 px-2 py-1 rounded transition-colors",title:"שחזר",children:"↩️"}):p.jsx("button",{onClick:()=>x(y.id,y.clientName),className:"bg-red-50 hover:bg-red-100 text-red-600 px-2 py-1 rounded transition-colors",title:"מחק",children:"🗑"})]})]},y.id)})})]})}function Qb({company:t,onChange:e}){const n=(r,s)=>e(i=>({...i,[r]:s}));return p.jsxs("div",{className:"p-4",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-4",children:"הגדרות חברה"}),p.jsxs("div",{className:"settings-grid",children:[p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"שם החברה"}),p.jsx("input",{value:t.name,onChange:r=>n("name",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"תת-כותרת"}),p.jsx("input",{value:t.subtitle,onChange:r=>n("subtitle",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field full-width",children:[p.jsx("label",{className:"form-label",children:"תיאור שירותים"}),p.jsx("textarea",{rows:3,value:t.tradeDesc,onChange:r=>n("tradeDesc",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"טלפון (Tel)"}),p.jsx("input",{value:t.phone,onChange:r=>n("phone",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"פקס (Fax)"}),p.jsx("input",{value:t.fax,onChange:r=>n("fax",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"נייד 1"}),p.jsx("input",{value:t.mobile1,onChange:r=>n("mobile1",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"שם איש קשר 1"}),p.jsx("input",{value:t.contactName1,onChange:r=>n("contactName1",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"נייד 2"}),p.jsx("input",{value:t.mobile2,onChange:r=>n("mobile2",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"שם איש קשר 2"}),p.jsx("input",{value:t.contactName2,onChange:r=>n("contactName2",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"אימייל"}),p.jsx("input",{value:t.email,onChange:r=>n("email",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"אימייל נוסף"}),p.jsx("input",{value:t.email2,onChange:r=>n("email2",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"אתר"}),p.jsx("input",{value:t.website,onChange:r=>n("website",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"כתובת"}),p.jsx("input",{value:t.address,onChange:r=>n("address",r.target.value),className:"form-input"})]})]}),p.jsx("button",{onClick:()=>e(fT),className:"mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold py-2 rounded transition-colors",children:"אפס להגדרות ברירת מחדל"})]})}function Yb({company:t,onCompanyChange:e,showToast:n,onRefreshArchive:r}){const[s,i]=U.useState(()=>{try{return localStorage.getItem(sv)||"0000"}catch{return"0000"}}),[o,l]=U.useState(!1),[u,h]=U.useState(""),[f,m]=U.useState(!1),[w,A]=U.useState(!1),[P,b]=U.useState(!1),[R,I]=U.useState(!1),[T,x]=U.useState(!1),[V,F]=U.useState(!1),[L,y]=U.useState(""),[g,v]=U.useState(""),[E,C]=U.useState(null),[k,S]=U.useState({}),[Me,se]=U.useState(eu[0].value),[me,ae]=U.useState([]);U.useEffect(()=>{const ee=uT(Ee=>{S(Ee||{})});return()=>ee()},[]),U.useEffect(()=>{zo(!0).then(ae).catch(()=>{})},[]);const $=U.useMemo(()=>{const ee={};return me.forEach(Ee=>{const Xt=Ee.docType||"quote",Tn=parseInt(Ee.serialNumber,10);isNaN(Tn)||(ee[Xt]=Math.max(ee[Xt]||0,Tn))}),ee},[me]),G=U.useMemo(()=>{const ee={};return eu.forEach(Ee=>{ee[Ee.value]=Ee.label}),Object.keys(k).forEach(Ee=>{!ee[Ee]&&Ee!=="lastSerialNumber"&&(ee[Ee]=Ee)}),Object.entries(ee).map(([Ee,Xt])=>({value:Ee,label:Xt}))},[k]),Q=k[Me]||0,he=$[Me]||0,ce=Math.max(Q,he),Se=ce+1,jt=()=>{u===s?(l(!0),m(!1)):m(!0)},Qt=async()=>{b(!0);try{const ee=await zo(!0),Ee=Jb(),Xt={exportedAt:new Date().toISOString(),exportedAtFormatted:Ee,version:1,totalDocuments:ee.length,documents:ee},Tn=new Blob([JSON.stringify(Xt,null,2)],{type:"application/json"}),ps=URL.createObjectURL(Tn),Vr=document.createElement("a");Vr.href=ps,Vr.download=`sharara_backup_${Ee}.json`,Vr.click(),URL.revokeObjectURL(ps);try{await Tb(Ee,ee),n("גיבוי נשמר בהצלחה לענן והורד כמסמך מקומי","success")}catch{n("גיבוי הורד למחשב (אך שמירה לענן נכשלה, ייתכן שאין חיבור Firebase)","local")}A(!0)}catch(ee){n("שגיאה בייצוא גיבוי: "+ee.message,"error")}finally{b(!1)}},Yt=async()=>{if(!w){n("יש לבצע גיבוי לפני איפוס המערכת","error");return}if(window.confirm(`האם אתה בטוח שברצונך לאפס את המערכת?
כל הנתונים יימחקו לצמיתות!`)&&window.confirm(`אישור סופי – איפוס ימחק את כל המסמכים.
האם להמשיך?`)){I(!0);try{await Ib(),n("המערכת אופסה בהצלחה","success"),A(!1),r()}catch(ee){n("שגיאה באיפוס: "+ee.message,"error")}finally{I(!1)}}},Ft=()=>{if(!L||L.length<4){C({type:"error",text:"הסיסמה חייבת להכיל לפחות 4 תווים"});return}if(L!==g){C({type:"error",text:"הסיסמאות אינן תואמות"});return}try{localStorage.setItem(sv,L),i(L),y(""),v(""),C({type:"success",text:"הסיסמה שונתה בהצלחה"}),setTimeout(()=>C(null),3e3)}catch{C({type:"error",text:"שגיאה בשמירת הסיסמה"})}};return o?p.jsxs("div",{className:"p-4",children:[p.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700",children:"פאנל ניהול"}),p.jsx("button",{onClick:()=>l(!1),className:"text-xs text-red-500 hover:underline",children:"נעול"})]}),p.jsxs("div",{className:"flex flex-col gap-3 mb-6",children:[p.jsx("button",{onClick:()=>x(!0),className:"w-full bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-700 font-semibold text-sm py-3 rounded-xl transition-colors shadow-sm",children:"✏️ עריכת נתוני החברה"}),p.jsx("button",{onClick:()=>F(!0),className:"w-full bg-white border-2 border-emerald-200 hover:border-emerald-400 text-emerald-700 font-semibold text-sm py-3 rounded-xl transition-colors shadow-sm",children:"🔢 מספרים סידוריים"})]}),p.jsx("hr",{className:"my-6 border-gray-200"}),p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-3",children:"גיבוי ואיפוס"}),p.jsx("button",{onClick:Qt,disabled:P,className:"w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white text-xs font-semibold py-2 rounded transition-colors mb-2",children:P?"מייצא...":"שמור גיבוי לפני איפוס"}),p.jsx("button",{onClick:Yt,disabled:!w||R,className:`w-full text-xs font-semibold py-2 rounded transition-colors ${w&&!R?"bg-red-600 hover:bg-red-700 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:R?"מאפס...":"איפוס מערכת"}),!w&&p.jsx("p",{className:"text-[10px] text-red-500 mt-1",children:"יש לבצע גיבוי תחילה"}),T&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",onClick:()=>x(!1),children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-[520px] max-h-[85vh] overflow-y-auto relative",onClick:ee=>ee.stopPropagation(),children:[p.jsxs("div",{className:"sticky top-0 bg-white flex items-center justify-between p-4 border-b border-gray-200 z-10",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700",children:"עריכת נתוני החברה"}),p.jsx("button",{onClick:()=>x(!1),className:"w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors text-sm",children:"✕"})]}),p.jsx("div",{className:"p-4",children:p.jsx(Qb,{company:t,onChange:e})})]})}),V&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",onClick:()=>F(!1),children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-[440px] p-6 relative",onClick:ee=>ee.stopPropagation(),children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700",children:"מספרים סידוריים"}),p.jsx("button",{onClick:()=>F(!1),className:"w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors text-sm",children:"✕"})]}),p.jsx("p",{className:"text-[10px] text-gray-400 mb-3",children:"בחר סוג מסמך והגדר את המספר הבא שיוקצה"}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("select",{value:Me,onChange:ee=>se(ee.target.value),className:"form-input flex-1",children:G.map(ee=>p.jsx("option",{value:ee.value,children:ee.label},ee.value))}),p.jsx("input",{type:"number",min:"0",value:ce,onChange:ee=>{const Ee=parseInt(ee.target.value,10);isNaN(Ee)||Ee<0||jb(Me,Ee)},className:"form-input w-24 serial-number-input",dir:"ltr"}),p.jsxs("span",{className:"text-[10px] text-gray-400 whitespace-nowrap",children:["הבא: #",String(Se).padStart(4,"0")]})]})]})}),p.jsx("hr",{className:"my-6 border-gray-200"}),p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-3",children:"שינוי סיסמת כניסה"}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("input",{type:"password",placeholder:"סיסמה חדשה (לפחות 4 תווים)",value:L,onChange:ee=>y(ee.target.value),className:"form-input"}),p.jsx("input",{type:"password",placeholder:"אשר סיסמה חדשה",value:g,onChange:ee=>v(ee.target.value),onKeyDown:ee=>{ee.key==="Enter"&&Ft()},className:"form-input"}),p.jsx("button",{onClick:Ft,className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 rounded transition-colors",children:"שמור סיסמה חדשה"}),E&&p.jsx("p",{className:`text-xs text-center mt-1 ${E.type==="success"?"text-green-600":"text-red-500"}`,children:E.text})]})]}):p.jsx("div",{className:"p-4 max-w-sm mx-auto mt-8",children:p.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 shadow-sm",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-4 text-center",children:"גישה לפאנל הניהול"}),p.jsx("p",{className:"text-xs text-gray-500 mb-4 text-center",children:"הזן סיסמה כדי לגשת להגדרות הניהול"}),p.jsx("input",{type:"password",placeholder:"סיסמה",value:u,onChange:ee=>h(ee.target.value),onKeyDown:ee=>ee.key==="Enter"&&jt(),className:"form-input text-center mb-2",autoFocus:!0}),f&&p.jsx("p",{className:"text-red-500 text-xs text-center mb-2",children:"סיסמה שגויה"}),p.jsx("button",{onClick:jt,className:"w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded transition-colors",children:"כניסה"})]})})}function Xb(){const[t,e]=U.useState([]),[n,r]=U.useState(""),[s,i]=U.useState([]),[o,l]=U.useState(""),[u,h]=U.useState(""),[f,m]=U.useState(null),[w,A]=U.useState(""),[P,b]=U.useState(null),[R,I]=U.useState(""),T=U.useMemo(()=>[...t].sort((v,E)=>v.localeCompare(E,"he")),[t]);U.useEffect(()=>{const v=oT(E=>{e(E)});return()=>v()},[]),U.useEffect(()=>{n&&t.length>0&&!t.includes(n)&&r("")},[t,n]),U.useEffect(()=>{if(!n){i([]);return}const v=aT(n,E=>{i(E)});return()=>v()},[n]);const x=async()=>{const v=o.trim();if(v)try{await sT(v),l(""),r(v)}catch(E){alert(E.message)}},V=async v=>{if(window.confirm(`האם אתה בטוח שברצונך למחוק את הלקוח "${v}"?
כל הפרויקטים המשויכים אליו יימחקו גם כן.`)&&window.confirm(`אזהרה סופית: מחיקת "${v}" היא פעולה בלתי הפיכה. האם להמשיך?`))try{await Sb(v),n===v&&r("")}catch(E){alert(E.message)}},F=async v=>{const E=w.trim();if(!E||E===v){m(null);return}try{await xb(v,E),n===v&&r(E)}catch(C){alert(C.message)}m(null)},L=async()=>{const v=u.trim();if(!(!v||!n))try{await iT(v,n),h("")}catch(E){alert(E.message)}},y=async v=>{if(window.confirm(`האם אתה בטוח שברצונך למחוק את הפרויקט "${v}"?`)&&window.confirm(`אזהרה סופית: מחיקת הפרויקט "${v}" מבוצעת לצמיתות. האם להמשיך?`))try{await Ab(v,n)}catch(E){alert(E.message)}},g=async v=>{const E=R.trim();if(!E||E===v){b(null);return}try{await Cb(v,E,n)}catch(C){alert(C.message)}b(null)};return p.jsx("div",{dir:"rtl",className:"w-full mx-auto",children:p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-5",children:[p.jsxs("h4",{className:"text-sm font-bold text-gray-700 mb-4",children:["לקוחות ופרויקטים (",t.length,")"]}),p.jsxs("div",{className:"grid grid-cols-[1fr_auto] gap-2 w-full mb-4",children:[p.jsx("input",{type:"text",placeholder:"שם לקוח חדש...",value:o,onChange:v=>l(v.target.value),onKeyDown:v=>{v.key==="Enter"&&x()},className:"min-w-0 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"}),p.jsx("button",{onClick:x,className:"bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shrink-0 whitespace-nowrap",children:"+ הוסף לקוח"})]}),p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx("div",{className:"flex-1 min-w-0",children:p.jsx(Td,{value:n,onChange:r,options:T,placeholder:"חפש לקוח...",className:"w-full"})}),n&&p.jsx("div",{className:"flex items-center gap-1 shrink-0",children:f===n?p.jsxs("div",{className:"flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1",children:[p.jsx("input",{autoFocus:!0,value:w,onChange:v=>A(v.target.value),onKeyDown:v=>{v.key==="Enter"&&F(n),v.key==="Escape"&&m(null)},className:"border border-blue-300 rounded px-2 py-1 text-xs w-28 focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsx("button",{onClick:()=>F(n),className:"text-green-600 hover:text-green-800 text-xs font-semibold px-1 py-1",children:"✓"}),p.jsx("button",{onClick:()=>m(null),className:"text-gray-400 hover:text-gray-600 text-xs px-1 py-1",children:"✕"})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>{m(n),A(n)},className:"text-gray-400 hover:text-blue-600 p-1.5 rounded-lg hover:bg-blue-50 transition-colors",title:"ערוך לקוח",children:"✏️"}),p.jsx("button",{onClick:()=>V(n),className:"text-gray-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors",title:"מחק לקוח",children:"✕"})]})})]}),p.jsx("div",{className:"border border-gray-200 rounded-lg overflow-hidden bg-gray-50/30 w-full",children:n?p.jsxs("div",{className:"divide-y divide-gray-100",children:[s.length===0?p.jsx("p",{className:"text-gray-400 text-xs text-center py-6",children:"אין פרויקטים ללקוח זה"}):s.map(v=>p.jsx("div",{className:"px-4 py-2.5",children:P===v?p.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2",children:[p.jsx("input",{autoFocus:!0,value:R,onChange:E=>I(E.target.value),onKeyDown:E=>{E.key==="Enter"&&g(v),E.key==="Escape"&&b(null)},className:"flex-1 border border-blue-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsx("button",{onClick:()=>g(v),className:"text-green-600 hover:text-green-800 text-xs font-semibold px-2 py-1 shrink-0",children:"✓"}),p.jsx("button",{onClick:()=>b(null),className:"text-gray-400 hover:text-gray-600 text-xs px-2 py-1 shrink-0",children:"✕"})]}):p.jsxs("div",{className:"flex items-center justify-between group/proj",children:[p.jsx("span",{className:"text-sm text-gray-700",children:v}),p.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[p.jsx("button",{onClick:()=>{b(v),I(v)},className:"text-gray-400 hover:text-blue-600 p-1 transition-colors",title:"ערוך",children:"✏️"}),p.jsx("button",{onClick:()=>y(v),className:"text-gray-400 hover:text-red-600 p-1 transition-colors",title:"מחק",children:"✕"})]})]})},v)),p.jsx("div",{className:"px-4 py-3 bg-gray-50/80",children:p.jsxs("div",{className:"grid grid-cols-[1fr_auto] gap-2 w-full",children:[p.jsx("input",{type:"text",placeholder:"הוסף פרויקט ללקוח זה...",value:u,onChange:v=>h(v.target.value),onKeyDown:v=>{v.key==="Enter"&&L()},className:"min-w-0 w-full border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"}),p.jsx("button",{onClick:L,className:"bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shrink-0 whitespace-nowrap",children:"+ הוסף"})]})})]}):p.jsx("p",{className:"text-gray-400 text-xs text-center py-8",children:"בחר לקוח מהרשימה כדי לנהל את הפרויקטים שלו"})})]})})}const yT="sharara_company_settings",sv="sharara_admin_password";function Jb(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear(),s=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${e}-${n}-${r}_${s}-${i}`}function Zb(){try{const t=localStorage.getItem(yT);if(t){const e=JSON.parse(t);if(e&&typeof e=="object"&&e.name)return e}}catch{}return fT}function eD(){const[t,e]=U.useState(dl),[n,r]=U.useState(Zb),[s,i]=U.useState("new"),[o,l]=U.useState(null),[u,h]=U.useState(!1),[f,m]=U.useState(!0),[w,A]=U.useState(null),[P,b]=U.useState(0),[R,I]=U.useState(!1),[T,x]=U.useState({}),[V,F]=U.useState({}),L=U.useRef(null);U.useEffect(()=>{const se=uT(me=>F(me));return()=>se()},[]),U.useEffect(()=>{let se=!1;return(async()=>{try{const me=await zo(!0);if(se)return;hT(me),F({...Lb()})}catch{}})(),()=>{se=!0}},[]);const y=o||t,g=U.useMemo(()=>!nh(t).valid,[t]),v=U.useCallback((se,me)=>{L.current&&clearTimeout(L.current),A({message:se,type:me}),L.current=setTimeout(()=>A(null),3e3)},[]);U.useEffect(()=>()=>{L.current&&clearTimeout(L.current)},[]),U.useEffect(()=>{const se=Pb();return()=>se()},[]),U.useEffect(()=>{try{localStorage.setItem(yT,JSON.stringify(n))}catch{}},[n]);const E=U.useCallback(async()=>{if(u)return;const{valid:se,errors:me}=nh(t);if(!se){I(!0),x(me),v("נא למלא את כל שדות החובה המסומנים באדום","error");return}h(!0),I(!1),x({});try{const ae=$b(t),$=Bb(n),G=await _b(ae,$);bb(ae.clientName,ae.projectName,ae.contactPhone,ae.contactFax).catch(()=>{});const Q=ae.useCustomDocType?ae.customDocType:ae.docType;if(Q){const he=cT(Q);await Mb(Q),Ob(Q,he)}G.source==="local"?v("המסמך נשמר בהצלחה באופן מקומי בדפדפן","local"):v("המסמך נשמר בהצלחה בענן (מס' "+(G.serial||"")+")","success"),b(he=>he+1),e(dl()),m(!0),window.print()}catch(ae){v("שגיאה בשמירה: "+ae.message)}finally{h(!1)}},[t,u,v,n]),C=U.useCallback(se=>{const me=Zl(se,se.id,se.source||"firebase");(!me.items||me.items.length===0)&&(me.items=[tu()]),e(me),m(!1),l(me),I(!1),x({}),i("new")},[]),k=U.useCallback((se,me=!1)=>{const ae=Zl(se,se.id,se.source||"firebase");delete ae.id,delete ae.docId,delete ae.createdAt,delete ae.updatedAt,delete ae.source,(!ae.items||ae.items.length===0)&&(ae.items=[tu()]),e(ae),m(me),l(null),i("new")},[]),S=U.useCallback(()=>{l(null),e(dl()),m(!1)},[]);U.useEffect(()=>{if(R){const{valid:se,errors:me}=nh(t);se?(I(!1),x({})):x(me)}},[t,R]);const Me=uo(y);return p.jsxs("div",{className:"h-screen flex flex-col",children:[p.jsx(qb,{message:w==null?void 0:w.message,type:w==null?void 0:w.type}),p.jsxs("header",{className:"no-print app-header bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between shrink-0 shadow-sm",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("h1",{className:"text-base font-bold text-gray-800",children:"ShararaDocForge"}),p.jsx("span",{className:"text-gray-300",children:"|"}),p.jsx("span",{className:"text-xs text-gray-500",children:Me}),o&&p.jsxs("span",{className:"bg-amber-100 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded",children:["תצוגה מארכיון",p.jsx("button",{onClick:S,className:"mr-1 text-amber-500 hover:text-amber-700 font-bold",children:"×"})]})]}),p.jsx("div",{className:"flex items-center gap-2",children:f?p.jsx("button",{onClick:E,disabled:u||g,className:`text-white text-xs font-semibold px-4 py-1.5 rounded transition-colors ${u||g?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,title:g?"נא למלא שם המזמין ולפחות תיאור סעיף אחד":"",children:u?"שומר...":"שמור והדפס"}):p.jsx("button",{onClick:window.print,className:"text-gray-600 hover:text-gray-800 text-xs font-semibold px-4 py-1.5 rounded border border-gray-300 hover:border-gray-400 transition-colors",children:"הדפס מסמך"})})]}),p.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[p.jsxs("aside",{className:"no-print editor-panel bg-white border-l border-gray-200 w-[380px] min-w-[340px] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:"no-print app-tabs flex border-b border-gray-200 shrink-0",children:[p.jsx("button",{onClick:()=>i("new"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="new"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"מסמך חדש"}),p.jsx("button",{onClick:()=>i("archive"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="archive"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"ארכיון ומעקב"}),p.jsx("button",{onClick:()=>i("database"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="database"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"ניהול מאגרים"}),p.jsx("button",{onClick:()=>i("management"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="management"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"ניהול"})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto",children:[s==="new"&&p.jsx("div",{className:"p-4",children:p.jsx(Hb,{doc:t,onChange:se=>{e(se),m(!0)},showValidation:R,validationErrors:T})}),s==="archive"&&p.jsx(Gb,{onLoadToForm:k,onPreview:C,refreshKey:P}),s==="database"&&p.jsx("div",{className:"p-6",children:p.jsx(Xb,{})}),s==="management"&&p.jsx(Yb,{company:n,onCompanyChange:r,showToast:v,onRefreshArchive:()=>b(se=>se+1)})]})]}),p.jsx("main",{className:"preview-panel flex-1 overflow-y-auto bg-gray-100 p-6",children:p.jsx(Wb,{company:n,doc:y})})]})]})}rh.createRoot(document.getElementById("root")).render(p.jsx(uI.StrictMode,{children:p.jsx(eD,{})}));
