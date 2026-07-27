(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function KT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var av={exports:{}},cu={},lv={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),GT=Symbol.for("react.portal"),QT=Symbol.for("react.fragment"),YT=Symbol.for("react.strict_mode"),XT=Symbol.for("react.profiler"),JT=Symbol.for("react.provider"),ZT=Symbol.for("react.context"),eI=Symbol.for("react.forward_ref"),tI=Symbol.for("react.suspense"),nI=Symbol.for("react.memo"),rI=Symbol.for("react.lazy"),Cm=Symbol.iterator;function sI(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cv=Object.assign,hv={};function pi(t,e,n){this.props=t,this.context=e,this.refs=hv,this.updater=n||uv}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dv(){}dv.prototype=pi.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=hv,this.updater=n||uv}var Rd=Cd.prototype=new dv;Rd.constructor=Cd;cv(Rd,pi.prototype);Rd.isPureReactComponent=!0;var Rm=Array.isArray,fv=Object.prototype.hasOwnProperty,kd={current:null},pv={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)fv.call(e,r)&&!pv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Qo,type:t,key:i,ref:o,props:s,_owner:kd.current}}function iI(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function oI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oI(""+t.key):e.toString(36)}function Za(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qo:case GT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+vc(o,0):r,Rm(s)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),Za(s,e,n,"",function(h){return h})):s!=null&&(Pd(s)&&(s=iI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(km,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Rm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+vc(i,l);o+=Za(i,e,n,u,s)}else if(u=sI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+vc(i,l++),o+=Za(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Na(t,e,n){if(t==null)return t;var r=[],s=0;return Za(t,r,"","",function(i){return e.call(n,i,s++)}),r}function aI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},el={transition:null},lI={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:el,ReactCurrentOwner:kd};function gv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=pi;te.Fragment=QT;te.Profiler=XT;te.PureComponent=Cd;te.StrictMode=YT;te.Suspense=tI;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;te.act=gv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=kd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)fv.call(e,u)&&!pv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Qo,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:ZT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JT,_context:t},t.Consumer=t};te.createElement=mv;te.createFactory=function(t){var e=mv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:eI,render:t}};te.isValidElement=Pd;te.lazy=function(t){return{$$typeof:rI,_payload:{_status:-1,_result:t},_init:aI}};te.memo=function(t,e){return{$$typeof:nI,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};te.unstable_act=gv;te.useCallback=function(t,e){return _t.current.useCallback(t,e)};te.useContext=function(t){return _t.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};te.useEffect=function(t,e){return _t.current.useEffect(t,e)};te.useId=function(){return _t.current.useId()};te.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return _t.current.useMemo(t,e)};te.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};te.useRef=function(t){return _t.current.useRef(t)};te.useState=function(t){return _t.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return _t.current.useTransition()};te.version="18.3.1";lv.exports=te;var U=lv.exports;const uI=KT(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cI=U,hI=Symbol.for("react.element"),dI=Symbol.for("react.fragment"),fI=Object.prototype.hasOwnProperty,pI=cI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mI={key:!0,ref:!0,__self:!0,__source:!0};function yv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fI.call(e,r)&&!mI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:hI,type:t,key:i,ref:o,props:s,_owner:pI.current}}cu.Fragment=dI;cu.jsx=yv;cu.jsxs=yv;av.exports=cu;var p=av.exports,ah={},vv={exports:{}},jt={},_v={exports:{}},wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var Q=z.length;z.push(Y);e:for(;0<Q;){var le=Q-1>>>1,he=z[le];if(0<s(he,Y))z[le]=Y,z[Q]=he,Q=le;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],Q=z.pop();if(Q!==Y){z[0]=Q;e:for(var le=0,he=z.length,Se=he>>>1;le<Se;){var Yt=2*(le+1)-1,Xt=z[Yt],Jt=Yt+1,Ut=z[Jt];if(0>s(Xt,Q))Jt<he&&0>s(Ut,Xt)?(z[le]=Ut,z[Jt]=Q,le=Jt):(z[le]=Xt,z[Yt]=Q,le=Yt);else if(Jt<he&&0>s(Ut,Q))z[le]=Ut,z[Jt]=Q,le=Jt;else break e}}return Y}function s(z,Y){var Q=z.sortIndex-Y.sortIndex;return Q!==0?Q:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,A=!1,P=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=z)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function O(z){if(b=!1,x(z),!P)if(n(u)!==null)P=!0,ge(F);else{var Y=n(h);Y!==null&&re(O,Y.startTime-z)}}function F(z,Y){P=!1,b&&(b=!1,I(g),g=-1),A=!0;var Q=y;try{for(x(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||z&&!C());){var le=m.callback;if(typeof le=="function"){m.callback=null,y=m.priorityLevel;var he=le(m.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?m.callback=he:m===n(u)&&r(u),x(Y)}else r(u);m=n(u)}if(m!==null)var Se=!0;else{var Yt=n(h);Yt!==null&&re(O,Yt.startTime-Y),Se=!1}return Se}finally{m=null,y=Q,A=!1}}var L=!1,v=null,g=-1,_=5,T=-1;function C(){return!(t.unstable_now()-T<_)}function k(){if(v!==null){var z=t.unstable_now();T=z;var Y=!0;try{Y=v(!0,z)}finally{Y?S():(L=!1,v=null)}}else L=!1}var S;if(typeof E=="function")S=function(){E(k)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,ne=He.port2;He.port1.onmessage=k,S=function(){ne.postMessage(null)}}else S=function(){R(k,0)};function ge(z){v=z,L||(L=!0,S())}function re(z,Y){g=R(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,ge(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var Q=y;y=Y;try{return z()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=y;y=z;try{return Y()}finally{y=Q}},t.unstable_scheduleCallback=function(z,Y,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,z){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Q+he,z={id:f++,callback:Y,priorityLevel:z,startTime:Q,expirationTime:he,sortIndex:-1},Q>le?(z.sortIndex=Q,e(h,z),n(u)===null&&z===n(h)&&(b?(I(g),g=-1):b=!0,re(O,Q-le))):(z.sortIndex=he,e(u,z),P||A||(P=!0,ge(F))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Y=y;return function(){var Q=y;y=Y;try{return z.apply(this,arguments)}finally{y=Q}}}})(wv);_v.exports=wv;var gI=_v.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI=U,Lt=gI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ev=new Set,_o={};function us(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(_o[t]=e,t=0;t<e.length;t++)Ev.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,vI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pm={},Nm={};function _I(t){return lh.call(Nm,t)?!0:lh.call(Pm,t)?!1:vI.test(t)?Nm[t]=!0:(Pm[t]=!0,!1)}function wI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EI(t,e,n,r){if(e===null||typeof e>"u"||wI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nd=/[\-:]([a-z])/g;function bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nd,bd);Ze[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nd,bd);Ze[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nd,bd);Ze[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dd(t,e,n,r){var s=Ze.hasOwnProperty(e)?Ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EI(e,n,s,r)&&(n=null),r||s===null?_I(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),ch=Symbol.for("react.suspense"),hh=Symbol.for("react.suspense_list"),Ld=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Sv=Symbol.for("react.offscreen"),bm=Symbol.iterator;function Mi(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,_c;function Ki(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var wc=!1;function Ec(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ki(t):""}function TI(t){switch(t.tag){case 5:return Ki(t.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ps:return"Portal";case uh:return"Profiler";case Od:return"StrictMode";case ch:return"Suspense";case hh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Iv:return(t.displayName||"Context")+".Consumer";case Tv:return(t._context.displayName||"Context")+".Provider";case Vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ld:return e=t.displayName||null,e!==null?e:dh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return dh(t(e))}catch{}}return null}function II(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dh(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SI(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=SI(t))}function xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fh(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cv(t,e){e=e.checked,e!=null&&Dd(t,"checked",e,!1)}function ph(t,e){Cv(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gi=Array.isArray;function Bs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Gi(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function Rv(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,Pv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AI=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){AI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function Nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var xI=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vh(t,e){if(e){if(xI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function _h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function Md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eh=null,qs=null,Ws=null;function Mm(t){if(t=Jo(t)){if(typeof Eh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=mu(e),Eh(t.stateNode,t.type,e))}}function Dv(t){qs?Ws?Ws.push(t):Ws=[t]:qs=t}function Ov(){if(qs){var t=qs,e=Ws;if(Ws=qs=null,Mm(t),e)for(t=0;t<e.length;t++)Mm(e[t])}}function Vv(t,e){return t(e)}function Lv(){}var Tc=!1;function Mv(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return Vv(t,e,n)}finally{Tc=!1,(qs!==null||Ws!==null)&&(Lv(),Ov())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Th=!1;if(Mn)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Th=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Th=!1}function CI(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var no=!1,Tl=null,Il=!1,Ih=null,RI={onError:function(t){no=!0,Tl=t}};function kI(t,e,n,r,s,i,o,l,u){no=!1,Tl=null,CI.apply(RI,arguments)}function PI(t,e,n,r,s,i,o,l,u){if(kI.apply(this,arguments),no){if(no){var h=Tl;no=!1,Tl=null}else throw Error(j(198));Il||(Il=!0,Ih=h)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jm(t){if(cs(t)!==t)throw Error(j(188))}function NI(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return jm(s),t;if(i===r)return jm(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Fv(t){return t=NI(t),t!==null?Uv(t):null}function Uv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Uv(t);if(e!==null)return e;t=t.sibling}return null}var $v=Lt.unstable_scheduleCallback,Fm=Lt.unstable_cancelCallback,bI=Lt.unstable_shouldYield,DI=Lt.unstable_requestPaint,Ve=Lt.unstable_now,OI=Lt.unstable_getCurrentPriorityLevel,jd=Lt.unstable_ImmediatePriority,zv=Lt.unstable_UserBlockingPriority,Sl=Lt.unstable_NormalPriority,VI=Lt.unstable_LowPriority,Bv=Lt.unstable_IdlePriority,hu=null,mn=null;function LI(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:FI,MI=Math.log,jI=Math.LN2;function FI(t){return t>>>=0,t===0?32:31-(MI(t)/jI|0)|0}var Va=64,La=4194304;function Qi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Qi(l):(i&=o,i!==0&&(r=Qi(i)))}else o=n&~s,o!==0?r=Qi(o):i!==0&&(r=Qi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),s=1<<n,r|=t[n],e&=~s;return r}function UI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $I(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-sn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=UI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qv(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function zI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-sn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function Wv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hv,Ud,Kv,Gv,Qv,Ah=!1,Ma=[],ur=null,cr=null,hr=null,To=new Map,Io=new Map,er=[],BI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function Fi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Jo(e),e!==null&&Ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function qI(t,e,n,r,s){switch(e){case"focusin":return ur=Fi(ur,t,e,n,r,s),!0;case"dragenter":return cr=Fi(cr,t,e,n,r,s),!0;case"mouseover":return hr=Fi(hr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return To.set(i,Fi(To.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Io.set(i,Fi(Io.get(i)||null,t,e,n,r,s)),!0}return!1}function Yv(t){var e=qr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=jv(n),e!==null){t.blockedOn=e,Qv(t.priority,function(){Kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wh=r,n.target.dispatchEvent(r),wh=null}else return e=Jo(n),e!==null&&Ud(e),t.blockedOn=n,!1;e.shift()}return!0}function $m(t,e,n){tl(t)&&n.delete(e)}function WI(){Ah=!1,ur!==null&&tl(ur)&&(ur=null),cr!==null&&tl(cr)&&(cr=null),hr!==null&&tl(hr)&&(hr=null),To.forEach($m),Io.forEach($m)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,Ah||(Ah=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,WI)))}function So(t){function e(s){return Ui(s,t)}if(0<Ma.length){Ui(Ma[0],t);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Ui(ur,t),cr!==null&&Ui(cr,t),hr!==null&&Ui(hr,t),To.forEach(e),Io.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)Yv(n),n.blockedOn===null&&er.shift()}var Hs=Hn.ReactCurrentBatchConfig,xl=!0;function HI(t,e,n,r){var s=de,i=Hs.transition;Hs.transition=null;try{de=1,$d(t,e,n,r)}finally{de=s,Hs.transition=i}}function KI(t,e,n,r){var s=de,i=Hs.transition;Hs.transition=null;try{de=4,$d(t,e,n,r)}finally{de=s,Hs.transition=i}}function $d(t,e,n,r){if(xl){var s=xh(t,e,n,r);if(s===null)Dc(t,e,r,Cl,n),Um(t,r);else if(qI(s,t,e,n,r))r.stopPropagation();else if(Um(t,r),e&4&&-1<BI.indexOf(t)){for(;s!==null;){var i=Jo(s);if(i!==null&&Hv(i),i=xh(t,e,n,r),i===null&&Dc(t,e,r,Cl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Dc(t,e,r,null,n)}}var Cl=null;function xh(t,e,n,r){if(Cl=null,t=Md(r),t=qr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function Xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OI()){case jd:return 1;case zv:return 4;case Sl:case VI:return 16;case Bv:return 536870912;default:return 16}default:return 16}}var or=null,zd=null,nl=null;function Jv(){if(nl)return nl;var t,e=zd,n=e.length,r,s="value"in or?or.value:or.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return nl=s.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function zm(){return!1}function Ft(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ja:zm,this.isPropagationStopped=zm,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bd=Ft(mi),Xo=Ce({},mi,{view:0,detail:0}),GI=Ft(Xo),Sc,Ac,$i,du=Ce({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(Sc=t.screenX-$i.screenX,Ac=t.screenY-$i.screenY):Ac=Sc=0,$i=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Bm=Ft(du),QI=Ce({},du,{dataTransfer:0}),YI=Ft(QI),XI=Ce({},Xo,{relatedTarget:0}),xc=Ft(XI),JI=Ce({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),ZI=Ft(JI),eS=Ce({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tS=Ft(eS),nS=Ce({},mi,{data:0}),qm=Ft(nS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iS[t])?!!e[t]:!1}function qd(){return oS}var aS=Ce({},Xo,{key:function(t){if(t.key){var e=rS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lS=Ft(aS),uS=Ce({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Ft(uS),cS=Ce({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),hS=Ft(cS),dS=Ce({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Ft(dS),pS=Ce({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mS=Ft(pS),gS=[9,13,27,32],Wd=Mn&&"CompositionEvent"in window,ro=null;Mn&&"documentMode"in document&&(ro=document.documentMode);var yS=Mn&&"TextEvent"in window&&!ro,Zv=Mn&&(!Wd||ro&&8<ro&&11>=ro),Hm=" ",Km=!1;function e_(t,e){switch(t){case"keyup":return gS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function vS(t,e){switch(t){case"compositionend":return t_(e);case"keypress":return e.which!==32?null:(Km=!0,Hm);case"textInput":return t=e.data,t===Hm&&Km?null:t;default:return null}}function _S(t,e){if(bs)return t==="compositionend"||!Wd&&e_(t,e)?(t=Jv(),nl=zd=or=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zv&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wS[t.type]:e==="textarea"}function n_(t,e,n,r){Dv(r),e=Rl(e,"onChange"),0<e.length&&(n=new Bd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,Ao=null;function ES(t){f_(t,0)}function fu(t){var e=Vs(t);if(xv(e))return t}function TS(t,e){if(t==="change")return e}var r_=!1;if(Mn){var Cc;if(Mn){var Rc="oninput"in document;if(!Rc){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Rc=typeof Qm.oninput=="function"}Cc=Rc}else Cc=!1;r_=Cc&&(!document.documentMode||9<document.documentMode)}function Ym(){so&&(so.detachEvent("onpropertychange",s_),Ao=so=null)}function s_(t){if(t.propertyName==="value"&&fu(Ao)){var e=[];n_(e,Ao,t,Md(t)),Mv(ES,e)}}function IS(t,e,n){t==="focusin"?(Ym(),so=e,Ao=n,so.attachEvent("onpropertychange",s_)):t==="focusout"&&Ym()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(Ao)}function AS(t,e){if(t==="click")return fu(e)}function xS(t,e){if(t==="input"||t==="change")return fu(e)}function CS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:CS;function xo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!lh.call(e,s)||!an(t[s],e[s]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Xm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function i_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function o_(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function Hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RS(t){var e=o_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i_(n.ownerDocument.documentElement,n)){if(r!==null&&Hd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Jm(n,i);var o=Jm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kS=Mn&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ch=null,io=null,Rh=!1;function Zm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||Ds==null||Ds!==El(r)||(r=Ds,"selectionStart"in r&&Hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&xo(io,r)||(io=r,r=Rl(Ch,"onSelect"),0<r.length&&(e=new Bd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},kc={},a_={};Mn&&(a_=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function pu(t){if(kc[t])return kc[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in a_)return kc[t]=e[n];return t}var l_=pu("animationend"),u_=pu("animationiteration"),c_=pu("animationstart"),h_=pu("transitionend"),d_=new Map,eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){d_.set(t,e),us(e,[t])}for(var Pc=0;Pc<eg.length;Pc++){var Nc=eg[Pc],PS=Nc.toLowerCase(),NS=Nc[0].toUpperCase()+Nc.slice(1);kr(PS,"on"+NS)}kr(l_,"onAnimationEnd");kr(u_,"onAnimationIteration");kr(c_,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(h_,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PI(r,e,void 0,t),t.currentTarget=null}function f_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;tg(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;tg(s,l,h),i=u}}}if(Il)throw t=Ih,Il=!1,Ih=null,t}function we(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var r=t+"__bubble";n.has(r)||(p_(e,t,2,!1),n.add(r))}function bc(t,e,n){var r=0;e&&(r|=4),p_(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Ua]){t[Ua]=!0,Ev.forEach(function(n){n!=="selectionchange"&&(bS.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,bc("selectionchange",!1,e))}}function p_(t,e,n,r){switch(Xv(e)){case 1:var s=HI;break;case 4:s=KI;break;default:s=$d}n=s.bind(null,e,n,t),s=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Dc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Mv(function(){var h=i,f=Md(n),m=[];e:{var y=d_.get(t);if(y!==void 0){var A=Bd,P=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":A=lS;break;case"focusin":P="focus",A=xc;break;case"focusout":P="blur",A=xc;break;case"beforeblur":case"afterblur":A=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=YI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=hS;break;case l_:case u_:case c_:A=ZI;break;case h_:A=fS;break;case"scroll":A=GI;break;case"wheel":A=mS;break;case"copy":case"cut":case"paste":A=tS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Wm}var b=(e&4)!==0,R=!b&&t==="scroll",I=b?y!==null?y+"Capture":null:y;b=[];for(var E=h,x;E!==null;){x=E;var O=x.stateNode;if(x.tag===5&&O!==null&&(x=O,I!==null&&(O=Eo(E,I),O!=null&&b.push(Ro(E,O,x)))),R)break;E=E.return}0<b.length&&(y=new A(y,P,null,n,f),m.push({event:y,listeners:b}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==wh&&(P=n.relatedTarget||n.fromElement)&&(qr(P)||P[jn]))break e;if((A||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?qr(P):null,P!==null&&(R=cs(P),P!==R||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(b=Bm,O="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(b=Wm,O="onPointerLeave",I="onPointerEnter",E="pointer"),R=A==null?y:Vs(A),x=P==null?y:Vs(P),y=new b(O,E+"leave",A,n,f),y.target=R,y.relatedTarget=x,O=null,qr(f)===h&&(b=new b(I,E+"enter",P,n,f),b.target=x,b.relatedTarget=R,O=b),R=O,A&&P)t:{for(b=A,I=P,E=0,x=b;x;x=xs(x))E++;for(x=0,O=I;O;O=xs(O))x++;for(;0<E-x;)b=xs(b),E--;for(;0<x-E;)I=xs(I),x--;for(;E--;){if(b===I||I!==null&&b===I.alternate)break t;b=xs(b),I=xs(I)}b=null}else b=null;A!==null&&ng(m,y,A,b,!1),P!==null&&R!==null&&ng(m,R,P,b,!0)}}e:{if(y=h?Vs(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var F=TS;else if(Gm(y))if(r_)F=xS;else{F=SS;var L=IS}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=AS);if(F&&(F=F(t,h))){n_(m,F,n,f);break e}L&&L(t,y,h),t==="focusout"&&(L=y._wrapperState)&&L.controlled&&y.type==="number"&&mh(y,"number",y.value)}switch(L=h?Vs(h):window,t){case"focusin":(Gm(L)||L.contentEditable==="true")&&(Ds=L,Ch=h,io=null);break;case"focusout":io=Ch=Ds=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,Zm(m,n,f);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":Zm(m,n,f)}var v;if(Wd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else bs?e_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Zv&&n.locale!=="ko"&&(bs||g!=="onCompositionStart"?g==="onCompositionEnd"&&bs&&(v=Jv()):(or=f,zd="value"in or?or.value:or.textContent,bs=!0)),L=Rl(h,g),0<L.length&&(g=new qm(g,t,null,n,f),m.push({event:g,listeners:L}),v?g.data=v:(v=t_(n),v!==null&&(g.data=v)))),(v=yS?vS(t,n):_S(t,n))&&(h=Rl(h,"onBeforeInput"),0<h.length&&(f=new qm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}f_(m,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Eo(t,n),i!=null&&r.unshift(Ro(t,i,s)),i=Eo(t,e),i!=null&&r.push(Ro(t,i,s))),t=t.return}return r}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ng(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Eo(n,i),u!=null&&o.unshift(Ro(n,u,l))):s||(u=Eo(n,i),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DS=/\r\n?/g,OS=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(DS,`
`).replace(OS,"")}function $a(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(j(425))}function kl(){}var kh=null,Ph=null;function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(MS)}:bh;function MS(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);So(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ig(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gi=Math.random().toString(36).slice(2),fn="__reactFiber$"+gi,ko="__reactProps$"+gi,jn="__reactContainer$"+gi,Dh="__reactEvents$"+gi,jS="__reactListeners$"+gi,FS="__reactHandles$"+gi;function qr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ig(t);t!==null;){if(n=t[fn])return n;t=ig(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[fn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function mu(t){return t[ko]||null}var Oh=[],Ls=-1;function Pr(t){return{current:t}}function Te(t){0>Ls||(t.current=Oh[Ls],Oh[Ls]=null,Ls--)}function ve(t,e){Ls++,Oh[Ls]=t.current,t.current=e}var Tr={},ct=Pr(Tr),At=Pr(!1),Jr=Tr;function ei(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function xt(t){return t=t.childContextTypes,t!=null}function Pl(){Te(At),Te(ct)}function og(t,e,n){if(ct.current!==Tr)throw Error(j(168));ve(ct,e),ve(At,n)}function m_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,II(t)||"Unknown",s));return Ce({},n,r)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Jr=ct.current,ve(ct,t),ve(At,At.current),!0}function ag(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=m_(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,Te(At),Te(ct),ve(ct,t)):Te(At),ve(At,n)}var Rn=null,gu=!1,Vc=!1;function g_(t){Rn===null?Rn=[t]:Rn.push(t)}function US(t){gu=!0,g_(t)}function Nr(){if(!Vc&&Rn!==null){Vc=!0;var t=0,e=de;try{var n=Rn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,gu=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(t+1)),$v(jd,Nr),s}finally{de=e,Vc=!1}}return null}var Ms=[],js=0,bl=null,Dl=0,$t=[],zt=0,Zr=null,kn=1,Pn="";function Ur(t,e){Ms[js++]=Dl,Ms[js++]=bl,bl=t,Dl=e}function y_(t,e,n){$t[zt++]=kn,$t[zt++]=Pn,$t[zt++]=Zr,Zr=t;var r=kn;t=Pn;var s=32-sn(r)-1;r&=~(1<<s),n+=1;var i=32-sn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,kn=1<<32-sn(e)+s|n<<s|r,Pn=i+t}else kn=1<<i|n<<s|r,Pn=t}function Kd(t){t.return!==null&&(Ur(t,1),y_(t,1,0))}function Gd(t){for(;t===bl;)bl=Ms[--js],Ms[js]=null,Dl=Ms[--js],Ms[js]=null;for(;t===Zr;)Zr=$t[--zt],$t[zt]=null,Pn=$t[--zt],$t[zt]=null,kn=$t[--zt],$t[zt]=null}var Dt=null,Nt=null,Ie=!1,rn=null;function v_(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Nt=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:kn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Nt=null,!0):!1;default:return!1}}function Vh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lh(t){if(Ie){var e=Nt;if(e){var n=e;if(!lg(t,e)){if(Vh(t))throw Error(j(418));e=dr(n.nextSibling);var r=Dt;e&&lg(t,e)?v_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Dt=t)}}else{if(Vh(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ie=!1,Dt=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function za(t){if(t!==Dt)return!1;if(!Ie)return ug(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nh(t.type,t.memoizedProps)),e&&(e=Nt)){if(Vh(t))throw __(),Error(j(418));for(;e;)v_(t,e),e=dr(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Dt?dr(t.stateNode.nextSibling):null;return!0}function __(){for(var t=Nt;t;)t=dr(t.nextSibling)}function ti(){Nt=Dt=null,Ie=!1}function Qd(t){rn===null?rn=[t]:rn.push(t)}var $S=Hn.ReactCurrentBatchConfig;function zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function w_(t){function e(I,E){if(t){var x=I.deletions;x===null?(I.deletions=[E],I.flags|=16):x.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=gr(I,E),I.index=0,I.sibling=null,I}function i(I,E,x){return I.index=x,t?(x=I.alternate,x!==null?(x=x.index,x<E?(I.flags|=2,E):x):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,x,O){return E===null||E.tag!==6?(E=zc(x,I.mode,O),E.return=I,E):(E=s(E,x),E.return=I,E)}function u(I,E,x,O){var F=x.type;return F===Ns?f(I,E,x.props.children,O,x.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jn&&cg(F)===E.type)?(O=s(E,x.props),O.ref=zi(I,E,x),O.return=I,O):(O=cl(x.type,x.key,x.props,null,I.mode,O),O.ref=zi(I,E,x),O.return=I,O)}function h(I,E,x,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Bc(x,I.mode,O),E.return=I,E):(E=s(E,x.children||[]),E.return=I,E)}function f(I,E,x,O,F){return E===null||E.tag!==7?(E=Yr(x,I.mode,O,F),E.return=I,E):(E=s(E,x),E.return=I,E)}function m(I,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=zc(""+E,I.mode,x),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ba:return x=cl(E.type,E.key,E.props,null,I.mode,x),x.ref=zi(I,null,E),x.return=I,x;case Ps:return E=Bc(E,I.mode,x),E.return=I,E;case Jn:var O=E._init;return m(I,O(E._payload),x)}if(Gi(E)||Mi(E))return E=Yr(E,I.mode,x,null),E.return=I,E;Ba(I,E)}return null}function y(I,E,x,O){var F=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:l(I,E,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ba:return x.key===F?u(I,E,x,O):null;case Ps:return x.key===F?h(I,E,x,O):null;case Jn:return F=x._init,y(I,E,F(x._payload),O)}if(Gi(x)||Mi(x))return F!==null?null:f(I,E,x,O,null);Ba(I,x)}return null}function A(I,E,x,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(x)||null,l(E,I,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ba:return I=I.get(O.key===null?x:O.key)||null,u(E,I,O,F);case Ps:return I=I.get(O.key===null?x:O.key)||null,h(E,I,O,F);case Jn:var L=O._init;return A(I,E,x,L(O._payload),F)}if(Gi(O)||Mi(O))return I=I.get(x)||null,f(E,I,O,F,null);Ba(E,O)}return null}function P(I,E,x,O){for(var F=null,L=null,v=E,g=E=0,_=null;v!==null&&g<x.length;g++){v.index>g?(_=v,v=null):_=v.sibling;var T=y(I,v,x[g],O);if(T===null){v===null&&(v=_);break}t&&v&&T.alternate===null&&e(I,v),E=i(T,E,g),L===null?F=T:L.sibling=T,L=T,v=_}if(g===x.length)return n(I,v),Ie&&Ur(I,g),F;if(v===null){for(;g<x.length;g++)v=m(I,x[g],O),v!==null&&(E=i(v,E,g),L===null?F=v:L.sibling=v,L=v);return Ie&&Ur(I,g),F}for(v=r(I,v);g<x.length;g++)_=A(v,I,g,x[g],O),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?g:_.key),E=i(_,E,g),L===null?F=_:L.sibling=_,L=_);return t&&v.forEach(function(C){return e(I,C)}),Ie&&Ur(I,g),F}function b(I,E,x,O){var F=Mi(x);if(typeof F!="function")throw Error(j(150));if(x=F.call(x),x==null)throw Error(j(151));for(var L=F=null,v=E,g=E=0,_=null,T=x.next();v!==null&&!T.done;g++,T=x.next()){v.index>g?(_=v,v=null):_=v.sibling;var C=y(I,v,T.value,O);if(C===null){v===null&&(v=_);break}t&&v&&C.alternate===null&&e(I,v),E=i(C,E,g),L===null?F=C:L.sibling=C,L=C,v=_}if(T.done)return n(I,v),Ie&&Ur(I,g),F;if(v===null){for(;!T.done;g++,T=x.next())T=m(I,T.value,O),T!==null&&(E=i(T,E,g),L===null?F=T:L.sibling=T,L=T);return Ie&&Ur(I,g),F}for(v=r(I,v);!T.done;g++,T=x.next())T=A(v,I,g,T.value,O),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?g:T.key),E=i(T,E,g),L===null?F=T:L.sibling=T,L=T);return t&&v.forEach(function(k){return e(I,k)}),Ie&&Ur(I,g),F}function R(I,E,x,O){if(typeof x=="object"&&x!==null&&x.type===Ns&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ba:e:{for(var F=x.key,L=E;L!==null;){if(L.key===F){if(F=x.type,F===Ns){if(L.tag===7){n(I,L.sibling),E=s(L,x.props.children),E.return=I,I=E;break e}}else if(L.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jn&&cg(F)===L.type){n(I,L.sibling),E=s(L,x.props),E.ref=zi(I,L,x),E.return=I,I=E;break e}n(I,L);break}else e(I,L);L=L.sibling}x.type===Ns?(E=Yr(x.props.children,I.mode,O,x.key),E.return=I,I=E):(O=cl(x.type,x.key,x.props,null,I.mode,O),O.ref=zi(I,E,x),O.return=I,I=O)}return o(I);case Ps:e:{for(L=x.key;E!==null;){if(E.key===L)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(I,E.sibling),E=s(E,x.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=Bc(x,I.mode,O),E.return=I,I=E}return o(I);case Jn:return L=x._init,R(I,E,L(x._payload),O)}if(Gi(x))return P(I,E,x,O);if(Mi(x))return b(I,E,x,O);Ba(I,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,x),E.return=I,I=E):(n(I,E),E=zc(x,I.mode,O),E.return=I,I=E),o(I)):n(I,E)}return R}var ni=w_(!0),E_=w_(!1),Ol=Pr(null),Vl=null,Fs=null,Yd=null;function Xd(){Yd=Fs=Vl=null}function Jd(t){var e=Ol.current;Te(Ol),t._currentValue=e}function Mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){Vl=t,Yd=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Vl===null)throw Error(j(308));Fs=t,Vl.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Wr=null;function Zd(t){Wr===null?Wr=[t]:Wr.push(t)}function T_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Zd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Fn(t,n)}return s=r.interleaved,s===null?(e.next=e,Zd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Fn(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var s=t.updateQueue;Zn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,l=i;do{var y=l.lane,A=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,b=l;switch(y=e,A=n,b.tag){case 1:if(P=b.payload,typeof P=="function"){m=P.call(A,m,y);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=b.payload,y=typeof P=="function"?P.call(A,m,y):P,y==null)break e;m=Ce({},m,y);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=m}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Zo={},gn=Pr(Zo),Po=Pr(Zo),No=Pr(Zo);function Hr(t){if(t===Zo)throw Error(j(174));return t}function tf(t,e){switch(ve(No,e),ve(Po,t),ve(gn,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yh(e,t)}Te(gn),ve(gn,e)}function ri(){Te(gn),Te(Po),Te(No)}function S_(t){Hr(No.current);var e=Hr(gn.current),n=yh(e,t.type);e!==n&&(ve(Po,t),ve(gn,n))}function nf(t){Po.current===t&&(Te(gn),Te(Po))}var Ae=Pr(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function rf(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var il=Hn.ReactCurrentDispatcher,Mc=Hn.ReactCurrentBatchConfig,es=0,xe=null,Fe=null,qe=null,jl=!1,oo=!1,bo=0,zS=0;function st(){throw Error(j(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function of(t,e,n,r,s,i){if(es=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=t===null||t.memoizedState===null?HS:KS,t=n(r,s),oo){i=0;do{if(oo=!1,bo=0,25<=i)throw Error(j(301));i+=1,qe=Fe=null,e.updateQueue=null,il.current=GS,t=n(r,s)}while(oo)}if(il.current=Fl,e=Fe!==null&&Fe.next!==null,es=0,qe=Fe=xe=null,jl=!1,e)throw Error(j(300));return t}function af(){var t=bo!==0;return bo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?xe.memoizedState=qe=t:qe=qe.next=t,qe}function Gt(){if(Fe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?xe.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(j(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?xe.memoizedState=qe=t:qe=qe.next=t}return qe}function Do(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Gt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Fe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((es&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=f,ts|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,an(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,ts|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Gt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);an(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function A_(){}function x_(t,e){var n=xe,r=Gt(),s=e(),i=!an(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,lf(k_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Oo(9,R_.bind(null,n,r,s,e),void 0,null),We===null)throw Error(j(349));es&30||C_(n,e,s)}return s}function C_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R_(t,e,n,r){e.value=n,e.getSnapshot=r,P_(e)&&N_(t)}function k_(t,e,n){return n(function(){P_(e)&&N_(t)})}function P_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function N_(t){var e=Fn(t,1);e!==null&&on(e,t,1,-1)}function fg(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=WS.bind(null,xe,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function b_(){return Gt().memoizedState}function ol(t,e,n,r){var s=dn();xe.flags|=t,s.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var s=Gt();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var o=Fe.memoizedState;if(i=o.destroy,r!==null&&sf(r,o.deps)){s.memoizedState=Oo(e,n,i,r);return}}xe.flags|=t,s.memoizedState=Oo(1|e,n,i,r)}function pg(t,e){return ol(8390656,8,t,e)}function lf(t,e){return yu(2048,8,t,e)}function D_(t,e){return yu(4,2,t,e)}function O_(t,e){return yu(4,4,t,e)}function V_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L_(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,V_.bind(null,e,t),n)}function uf(){}function M_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function j_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function F_(t,e,n){return es&21?(an(n,e)||(n=qv(),xe.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function BS(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Mc.transition;Mc.transition={};try{t(!1),e()}finally{de=n,Mc.transition=r}}function U_(){return Gt().memoizedState}function qS(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$_(t))z_(e,n);else if(n=T_(t,e,n,r),n!==null){var s=gt();on(n,t,r,s),B_(n,e,r)}}function WS(t,e,n){var r=mr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($_(t))z_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,an(l,o)){var u=e.interleaved;u===null?(s.next=s,Zd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=T_(t,e,s,r),n!==null&&(s=gt(),on(n,t,r,s),B_(n,e,r))}}function $_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function z_(t,e){oo=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}var Fl={readContext:Kt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},HS={readContext:Kt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,V_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qS.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:uf,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=BS.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=dn();if(Ie){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),We===null)throw Error(j(349));es&30||C_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,pg(k_.bind(null,r,i,t),[t]),r.flags|=2048,Oo(9,R_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=dn(),e=We.identifierPrefix;if(Ie){var n=Pn,r=kn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KS={readContext:Kt,useCallback:M_,useContext:Kt,useEffect:lf,useImperativeHandle:L_,useInsertionEffect:D_,useLayoutEffect:O_,useMemo:j_,useReducer:jc,useRef:b_,useState:function(){return jc(Do)},useDebugValue:uf,useDeferredValue:function(t){var e=Gt();return F_(e,Fe.memoizedState,t)},useTransition:function(){var t=jc(Do)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:x_,useId:U_,unstable_isNewReconciler:!1},GS={readContext:Kt,useCallback:M_,useContext:Kt,useEffect:lf,useImperativeHandle:L_,useInsertionEffect:D_,useLayoutEffect:O_,useMemo:j_,useReducer:Fc,useRef:b_,useState:function(){return Fc(Do)},useDebugValue:uf,useDeferredValue:function(t){var e=Gt();return Fe===null?e.memoizedState=t:F_(e,Fe.memoizedState,t)},useTransition:function(){var t=Fc(Do)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:x_,useId:U_,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),s=mr(t),i=Vn(r,s);i.payload=e,n!=null&&(i.callback=n),e=fr(t,i,s),e!==null&&(on(e,t,s,r),sl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),s=mr(t),i=Vn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=fr(t,i,s),e!==null&&(on(e,t,s,r),sl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=mr(t),s=Vn(n,r);s.tag=2,e!=null&&(s.callback=e),e=fr(t,s,r),e!==null&&(on(e,t,r,n),sl(e,t,r))}};function mg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(s,i):!0}function q_(t,e,n){var r=!1,s=Tr,i=e.contextType;return typeof i=="object"&&i!==null?i=Kt(i):(s=xt(e)?Jr:ct.current,r=e.contextTypes,i=(r=r!=null)?ei(t,s):Tr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ef(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Kt(i):(i=xt(e)?Jr:ct.current,s.context=ei(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(jh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&vu.enqueueReplaceState(s,s.state,null),Ll(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function si(t,e){try{var n="",r=e;do n+=TI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function W_(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$l||($l=!0,Yh=r),Uh(t,e)},n}function H_(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Uh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Uh(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=uA.bind(null,t,e,n),e.then(t,t))}function vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _g(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var YS=Hn.ReactCurrentOwner,It=!1;function mt(t,e,n,r){e.child=t===null?E_(e,null,n,r):ni(e,t.child,n,r)}function wg(t,e,n,r,s){n=n.render;var i=e.ref;return Ks(e,s),r=of(t,e,n,r,i,s),n=af(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(Ie&&n&&Kd(e),e.flags|=1,mt(t,e,r,s),e.child)}function Eg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!yf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,K_(t,e,i,r,s)):(t=cl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return Un(t,e,s)}return e.flags|=1,t=gr(i,r),t.ref=e.ref,t.return=e,e.child=t}function K_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(xo(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Un(t,e,s)}return $h(t,e,n,r,s)}function G_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve($s,Pt),Pt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve($s,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ve($s,Pt),Pt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ve($s,Pt),Pt|=r;return mt(t,e,s,n),e.child}function Q_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $h(t,e,n,r,s){var i=xt(n)?Jr:ct.current;return i=ei(e,i),Ks(e,s),n=of(t,e,n,r,i,s),r=af(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(Ie&&r&&Kd(e),e.flags|=1,mt(t,e,n,s),e.child)}function Tg(t,e,n,r,s){if(xt(n)){var i=!0;Nl(e)}else i=!1;if(Ks(e,s),e.stateNode===null)al(t,e),q_(e,n,r),Fh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Kt(h):(h=xt(n)?Jr:ct.current,h=ei(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&gg(e,o,r,h),Zn=!1;var y=e.memoizedState;o.state=y,Ll(e,r,o,s),u=e.memoizedState,l!==r||y!==u||At.current||Zn?(typeof f=="function"&&(jh(e,n,f,r),u=e.memoizedState),(l=Zn||mg(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,I_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:tn(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Kt(u):(u=xt(n)?Jr:ct.current,u=ei(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&gg(e,o,r,u),Zn=!1,y=e.memoizedState,o.state=y,Ll(e,r,o,s);var P=e.memoizedState;l!==m||y!==P||At.current||Zn?(typeof A=="function"&&(jh(e,n,A,r),P=e.memoizedState),(h=Zn||mg(e,n,h,r,y,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,i,s)}function zh(t,e,n,r,s,i){Q_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ag(e,n,!1),Un(t,e,i);r=e.stateNode,YS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ni(e,t.child,null,i),e.child=ni(e,null,l,i)):mt(t,e,l,i),e.memoizedState=r.state,s&&ag(e,n,!0),e.child}function Y_(t){var e=t.stateNode;e.pendingContext?og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&og(t,e.context,!1),tf(t,e.containerInfo)}function Ig(t,e,n,r,s){return ti(),Qd(s),e.flags|=256,mt(t,e,n,r),e.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function X_(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ve(Ae,s&1),t===null)return Lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Eu(o,r,0,null),t=Yr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=qh(n),e.memoizedState=Bh,t):cf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return XS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=gr(l,i):(i=Yr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Bh,r}return i=t.child,t=i.sibling,r=gr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cf(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,r){return r!==null&&Qd(r),ni(e,t.child,null,n),t=cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Uc(Error(j(422))),qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Eu({mode:"visible",children:r.children},s,0,null),i=Yr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ni(e,t.child,null,o),e.child.memoizedState=qh(o),e.memoizedState=Bh,i);if(!(e.mode&1))return qa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Uc(i,r,void 0),qa(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=We,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Fn(t,s),on(r,t,s,-1))}return gf(),r=Uc(Error(j(421))),qa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=cA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Nt=dr(s.nextSibling),Dt=e,Ie=!0,rn=null,t!==null&&($t[zt++]=kn,$t[zt++]=Pn,$t[zt++]=Zr,kn=t.id,Pn=t.overflow,Zr=e),e=cf(e,r.children),e.flags|=4096,e)}function Sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mh(t.return,e,n)}function $c(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function J_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(mt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,n,e);else if(t.tag===19)Sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),$c(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ml(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}$c(e,!0,n,null,i);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JS(t,e,n){switch(e.tag){case 3:Y_(e),ti();break;case 5:S_(e);break;case 1:xt(e.type)&&Nl(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ve(Ol,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?X_(t,e,n):(ve(Ae,Ae.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return J_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,G_(t,e,n)}return Un(t,e,n)}var Z_,Wh,e0,t0;Z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wh=function(){};e0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Hr(gn.current);var i=null;switch(n){case"input":s=fh(t,s),r=fh(t,r),i=[];break;case"select":s=Ce({},s,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":s=gh(t,s),r=gh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}vh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(_o.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(_o.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&we("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};t0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bi(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZS(t,e,n){var r=e.pendingProps;switch(Gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return xt(e.type)&&Pl(),it(e),null;case 3:return r=e.stateNode,ri(),Te(At),Te(ct),rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Zh(rn),rn=null))),Wh(t,e),it(e),null;case 5:nf(e);var s=Hr(No.current);if(n=e.type,t!==null&&e.stateNode!=null)e0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return it(e),null}if(t=Hr(gn.current),za(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[fn]=e,r[ko]=i,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(s=0;s<Yi.length;s++)we(Yi[s],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Dm(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":Vm(r,i),we("invalid",r)}vh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&$a(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&$a(r.textContent,l,t),s=["children",""+l]):_o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Da(r),Om(r,i,!0);break;case"textarea":Da(r),Lm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=kl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[ko]=r,Z_(t,e,!1,!1),e.stateNode=t;e:{switch(o=_h(n,r),n){case"dialog":we("cancel",t),we("close",t),s=r;break;case"iframe":case"object":case"embed":we("load",t),s=r;break;case"video":case"audio":for(s=0;s<Yi.length;s++)we(Yi[s],t);s=r;break;case"source":we("error",t),s=r;break;case"img":case"image":case"link":we("error",t),we("load",t),s=r;break;case"details":we("toggle",t),s=r;break;case"input":Dm(t,r),s=fh(t,r),we("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ce({},r,{value:void 0}),we("invalid",t);break;case"textarea":Vm(t,r),s=gh(t,r),we("invalid",t);break;default:s=r}vh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?bv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Pv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wo(t,u):typeof u=="number"&&wo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_o.hasOwnProperty(i)?u!=null&&i==="onScroll"&&we("scroll",t):u!=null&&Dd(t,i,u,o))}switch(n){case"input":Da(t),Om(t,r,!1);break;case"textarea":Da(t),Lm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Bs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)t0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Hr(No.current),Hr(gn.current),za(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(i=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:$a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return it(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Nt!==null&&e.mode&1&&!(e.flags&128))__(),ti(),e.flags|=98560,i=!1;else if(i=za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[fn]=e}else ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),i=!1}else rn!==null&&(Zh(rn),rn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ue===0&&(Ue=3):gf())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return ri(),Wh(t,e),t===null&&Co(e.stateNode.containerInfo),it(e),null;case 10:return Jd(e.type._context),it(e),null;case 17:return xt(e.type)&&Pl(),it(e),null;case 19:if(Te(Ae),i=e.memoizedState,i===null)return it(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Bi(i,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ml(t),o!==null){for(e.flags|=128,Bi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>ii&&(e.flags|=128,r=!0,Bi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return it(e),null}else 2*Ve()-i.renderingStartTime>ii&&n!==1073741824&&(e.flags|=128,r=!0,Bi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return mf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function eA(t,e){switch(Gd(e),e.tag){case 1:return xt(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ri(),Te(At),Te(ct),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return ri(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var Wa=!1,lt=!1,tA=typeof WeakSet=="function"?WeakSet:Set,W=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Hh(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Ag=!1;function nA(t,e){if(kh=xl,t=o_(),Hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)y=m,m=A;for(;;){if(m===t)break t;if(y===n&&++h===s&&(l=o),y===i&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},xl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var b=P.memoizedProps,R=P.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?b:tn(e.type,b),R);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(O){Ne(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=Ag,Ag=!1,P}function ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Hh(e,n,i)}s=s.next}while(s!==r)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n0(t){var e=t.alternate;e!==null&&(t.alternate=null,n0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[ko],delete e[Dh],delete e[jS],delete e[FS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r0(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}var Ge=null,nn=!1;function Yn(t,e,n){for(n=n.child;n!==null;)s0(t,e,n),n=n.sibling}function s0(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:lt||Us(n,e);case 6:var r=Ge,s=nn;Ge=null,Yn(t,e,n),Ge=r,nn=s,Ge!==null&&(nn?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(nn?(t=Ge,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),So(t)):Oc(Ge,n.stateNode));break;case 4:r=Ge,s=nn,Ge=n.stateNode.containerInfo,nn=!0,Yn(t,e,n),Ge=r,nn=s;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hh(n,e,o),s=s.next}while(s!==r)}Yn(t,e,n);break;case 1:if(!lt&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Yn(t,e,n),lt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tA),e.forEach(function(r){var s=hA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,nn=!1;break e;case 3:Ge=l.stateNode.containerInfo,nn=!0;break e;case 4:Ge=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Ge===null)throw Error(j(160));s0(i,o,s),Ge=null,nn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Ne(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i0(e,t),e=e.sibling}function i0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),hn(t),r&4){try{ao(3,t,t.return),_u(3,t)}catch(b){Ne(t,t.return,b)}try{ao(5,t,t.return)}catch(b){Ne(t,t.return,b)}}break;case 1:en(e,t),hn(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(en(e,t),hn(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var s=t.stateNode;try{wo(s,"")}catch(b){Ne(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Cv(s,i),_h(l,o);var h=_h(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?bv(s,m):f==="dangerouslySetInnerHTML"?Pv(s,m):f==="children"?wo(s,m):Dd(s,f,m,h)}switch(l){case"input":ph(s,i);break;case"textarea":Rv(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Bs(s,!!i.multiple,A,!1):y!==!!i.multiple&&(i.defaultValue!=null?Bs(s,!!i.multiple,i.defaultValue,!0):Bs(s,!!i.multiple,i.multiple?[]:"",!1))}s[ko]=i}catch(b){Ne(t,t.return,b)}}break;case 6:if(en(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){Ne(t,t.return,b)}}break;case 3:if(en(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(b){Ne(t,t.return,b)}break;case 4:en(e,t),hn(t);break;case 13:en(e,t),hn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ff=Ve())),r&4&&Cg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(h=lt)||f,en(e,t),lt=h):en(e,t),hn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(y=W,A=y.child,y.tag){case 0:case 11:case 14:case 15:ao(4,y,y.return);break;case 1:Us(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(b){Ne(r,n,b)}}break;case 5:Us(y,y.return);break;case 22:if(y.memoizedState!==null){kg(m);continue}}A!==null?(A.return=y,W=A):kg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Nv("display",o))}catch(b){Ne(t,t.return,b)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(b){Ne(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:en(e,t),hn(t),r&4&&Cg(t);break;case 21:break;default:en(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(wo(s,""),r.flags&=-33);var i=xg(t);Qh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xg(t);Gh(t,l,o);break;default:throw Error(j(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rA(t,e,n){W=t,o0(t)}function o0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Wa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||lt;l=Wa;var h=lt;if(Wa=o,(lt=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Pg(s):u!==null?(u.return=o,W=u):Pg(s);for(;i!==null;)W=i,o0(i),i=i.sibling;W=s,Wa=l,lt=h}Rg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Rg(t)}}function Rg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||_u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&dg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&So(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}lt||e.flags&512&&Kh(e)}catch(y){Ne(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function kg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Pg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ne(e,s,u)}}var i=e.return;try{Kh(e)}catch(u){Ne(e,i,u)}break;case 5:var o=e.return;try{Kh(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var sA=Math.ceil,Ul=Hn.ReactCurrentDispatcher,hf=Hn.ReactCurrentOwner,qt=Hn.ReactCurrentBatchConfig,ae=0,We=null,Me=null,Xe=0,Pt=0,$s=Pr(0),Ue=0,Vo=null,ts=0,wu=0,df=0,lo=null,Et=null,ff=0,ii=1/0,Cn=null,$l=!1,Yh=null,pr=null,Ha=!1,ar=null,zl=0,uo=0,Xh=null,ll=-1,ul=0;function gt(){return ae&6?Ve():ll!==-1?ll:ll=Ve()}function mr(t){return t.mode&1?ae&2&&Xe!==0?Xe&-Xe:$S.transition!==null?(ul===0&&(ul=qv()),ul):(t=de,t!==0||(t=window.event,t=t===void 0?16:Xv(t.type)),t):1}function on(t,e,n,r){if(50<uo)throw uo=0,Xh=null,Error(j(185));Yo(t,n,r),(!(ae&2)||t!==We)&&(t===We&&(!(ae&2)&&(wu|=n),Ue===4&&tr(t,Xe)),Ct(t,r),n===1&&ae===0&&!(e.mode&1)&&(ii=Ve()+500,gu&&Nr()))}function Ct(t,e){var n=t.callbackNode;$I(t,e);var r=Al(t,t===We?Xe:0);if(r===0)n!==null&&Fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fm(n),e===1)t.tag===0?US(Ng.bind(null,t)):g_(Ng.bind(null,t)),LS(function(){!(ae&6)&&Nr()}),n=null;else{switch(Wv(r)){case 1:n=jd;break;case 4:n=zv;break;case 16:n=Sl;break;case 536870912:n=Bv;break;default:n=Sl}n=p0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(ll=-1,ul=0,ae&6)throw Error(j(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var r=Al(t,t===We?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bl(t,r);else{e=r;var s=ae;ae|=2;var i=u0();(We!==t||Xe!==e)&&(Cn=null,ii=Ve()+500,Qr(t,e));do try{aA();break}catch(l){l0(t,l)}while(!0);Xd(),Ul.current=i,ae=s,Me!==null?e=0:(We=null,Xe=0,e=Ue)}if(e!==0){if(e===2&&(s=Sh(t),s!==0&&(r=s,e=Jh(t,s))),e===1)throw n=Vo,Qr(t,0),tr(t,r),Ct(t,Ve()),n;if(e===6)tr(t,r);else{if(s=t.current.alternate,!(r&30)&&!iA(s)&&(e=Bl(t,r),e===2&&(i=Sh(t),i!==0&&(r=i,e=Jh(t,i))),e===1))throw n=Vo,Qr(t,0),tr(t,r),Ct(t,Ve()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:$r(t,Et,Cn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=ff+500-Ve(),10<e)){if(Al(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=bh($r.bind(null,t,Et,Cn),e);break}$r(t,Et,Cn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-sn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sA(r/1960))-r,10<r){t.timeoutHandle=bh($r.bind(null,t,Et,Cn),r);break}$r(t,Et,Cn);break;case 5:$r(t,Et,Cn);break;default:throw Error(j(329))}}}return Ct(t,Ve()),t.callbackNode===n?a0.bind(null,t):null}function Jh(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=Et,Et=n,e!==null&&Zh(e)),t}function Zh(t){Et===null?Et=t:Et.push.apply(Et,t)}function iA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!an(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~df,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function Ng(t){if(ae&6)throw Error(j(327));Gs();var e=Al(t,0);if(!(e&1))return Ct(t,Ve()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=Jh(t,r))}if(n===1)throw n=Vo,Qr(t,0),tr(t,e),Ct(t,Ve()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,Et,Cn),Ct(t,Ve()),null}function pf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ii=Ve()+500,gu&&Nr())}}function ns(t){ar!==null&&ar.tag===0&&!(ae&6)&&Gs();var e=ae;ae|=1;var n=qt.transition,r=de;try{if(qt.transition=null,de=1,t)return t()}finally{de=r,qt.transition=n,ae=e,!(ae&6)&&Nr()}}function mf(){Pt=$s.current,Te($s)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VS(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:ri(),Te(At),Te(ct),rf();break;case 5:nf(r);break;case 4:ri();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Jd(r.type._context);break;case 22:case 23:mf()}n=n.return}if(We=t,Me=t=gr(t.current,null),Xe=Pt=e,Ue=0,Vo=null,df=wu=ts=0,Et=lo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Wr=null}return t}function l0(t,e){do{var n=Me;try{if(Xd(),il.current=Fl,jl){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}jl=!1}if(es=0,qe=Fe=xe=null,oo=!1,bo=0,hf.current=null,n===null||n.return===null){Ue=1,Vo=e,Me=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=vg(o);if(A!==null){A.flags&=-257,_g(A,o,l,i,e),A.mode&1&&yg(i,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var b=new Set;b.add(u),e.updateQueue=b}else P.add(u);break e}else{if(!(e&1)){yg(i,h,e),gf();break e}u=Error(j(426))}}else if(Ie&&l.mode&1){var R=vg(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),_g(R,o,l,i,e),Qd(si(u,l));break e}}i=u=si(u,l),Ue!==4&&(Ue=2),lo===null?lo=[i]:lo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=W_(i,u,e);hg(i,I);break e;case 1:l=u;var E=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(pr===null||!pr.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=H_(i,l,e);hg(i,O);break e}}i=i.return}while(i!==null)}h0(n)}catch(F){e=F,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function u0(){var t=Ul.current;return Ul.current=Fl,t===null?Fl:t}function gf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(ts&268435455)&&!(wu&268435455)||tr(We,Xe)}function Bl(t,e){var n=ae;ae|=2;var r=u0();(We!==t||Xe!==e)&&(Cn=null,Qr(t,e));do try{oA();break}catch(s){l0(t,s)}while(!0);if(Xd(),ae=n,Ul.current=r,Me!==null)throw Error(j(261));return We=null,Xe=0,Ue}function oA(){for(;Me!==null;)c0(Me)}function aA(){for(;Me!==null&&!bI();)c0(Me)}function c0(t){var e=f0(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?h0(t):Me=e,hf.current=null}function h0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eA(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=ZS(n,e,Pt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function $r(t,e,n){var r=de,s=qt.transition;try{qt.transition=null,de=1,lA(t,e,n,r)}finally{qt.transition=s,de=r}return null}function lA(t,e,n,r){do Gs();while(ar!==null);if(ae&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(zI(t,i),t===We&&(Me=We=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,p0(Sl,function(){return Gs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qt.transition,qt.transition=null;var o=de;de=1;var l=ae;ae|=4,hf.current=null,nA(t,n),i0(n,t),RS(Ph),xl=!!kh,Ph=kh=null,t.current=n,rA(n),DI(),ae=l,de=o,qt.transition=i}else t.current=n;if(Ha&&(Ha=!1,ar=t,zl=s),i=t.pendingLanes,i===0&&(pr=null),LI(n.stateNode),Ct(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if($l)throw $l=!1,t=Yh,Yh=null,t;return zl&1&&t.tag!==0&&Gs(),i=t.pendingLanes,i&1?t===Xh?uo++:(uo=0,Xh=t):uo=0,Nr(),null}function Gs(){if(ar!==null){var t=Wv(zl),e=qt.transition,n=de;try{if(qt.transition=null,de=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,zl=0,ae&6)throw Error(j(331));var s=ae;for(ae|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:ao(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var y=f.sibling,A=f.return;if(n0(f),f===h){W=null;break}if(y!==null){y.return=A,W=y;break}W=A}}}var P=i.alternate;if(P!==null){var b=P.child;if(b!==null){P.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ao(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,W=I;break e}W=i.return}}var E=t.current;for(W=E;W!==null;){o=W;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,W=x;else e:for(o=E;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_u(9,l)}}catch(F){Ne(l,l.return,F)}if(l===o){W=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,W=O;break e}W=l.return}}if(ae=s,Nr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(hu,t)}catch{}r=!0}return r}finally{de=n,qt.transition=e}}return!1}function bg(t,e,n){e=si(n,e),e=W_(t,e,1),t=fr(t,e,1),e=gt(),t!==null&&(Yo(t,1,e),Ct(t,e))}function Ne(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=si(n,t),t=H_(e,t,1),e=fr(e,t,1),t=gt(),e!==null&&(Yo(e,1,t),Ct(e,t));break}}e=e.return}}function uA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Xe&n)===n&&(Ue===4||Ue===3&&(Xe&130023424)===Xe&&500>Ve()-ff?Qr(t,0):df|=n),Ct(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=gt();t=Fn(t,e),t!==null&&(Yo(t,e,n),Ct(t,n))}function cA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function hA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),d0(t,n)}var f0;f0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,JS(t,e,n);It=!!(t.flags&131072)}else It=!1,Ie&&e.flags&1048576&&y_(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;al(t,e),t=e.pendingProps;var s=ei(e,ct.current);Ks(e,n),s=of(null,e,r,t,s,n);var i=af();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(i=!0,Nl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ef(e),s.updater=vu,e.stateNode=s,s._reactInternals=e,Fh(e,r,t,n),e=zh(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&Kd(e),mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(al(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=fA(r),t=tn(r,t),s){case 0:e=$h(null,e,r,t,n);break e;case 1:e=Tg(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=Eg(null,e,r,tn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),$h(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),Tg(t,e,r,s,n);case 3:e:{if(Y_(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,I_(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=si(Error(j(423)),e),e=Ig(t,e,r,n,s);break e}else if(r!==s){s=si(Error(j(424)),e),e=Ig(t,e,r,n,s);break e}else for(Nt=dr(e.stateNode.containerInfo.firstChild),Dt=e,Ie=!0,rn=null,n=E_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ti(),r===s){e=Un(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return S_(e),t===null&&Lh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Nh(r,s)?o=null:i!==null&&Nh(r,i)&&(e.flags|=32),Q_(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Lh(e),null;case 13:return X_(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ni(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),wg(t,e,r,s,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ve(Ol,r._currentValue),r._currentValue=o,i!==null)if(an(i.value,o)){if(i.children===s.children&&!At.current){e=Un(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Vn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Mh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ks(e,n),s=Kt(s),r=r(s),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,s=tn(r,e.pendingProps),s=tn(r.type,s),Eg(t,e,r,s,n);case 15:return K_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),al(t,e),e.tag=1,xt(r)?(t=!0,Nl(e)):t=!1,Ks(e,n),q_(e,r,s),Fh(e,r,s,n),zh(null,e,r,!0,t,n);case 19:return J_(t,e,n);case 22:return G_(t,e,n)}throw Error(j(156,e.tag))};function p0(t,e){return $v(t,e)}function dA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new dA(t,e,n,r)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fA(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vd)return 11;if(t===Ld)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Yr(n.children,s,i,e);case Od:o=8,s|=8;break;case uh:return t=Bt(12,n,e,s|2),t.elementType=uh,t.lanes=i,t;case ch:return t=Bt(13,n,e,s),t.elementType=ch,t.lanes=i,t;case hh:return t=Bt(19,n,e,s),t.elementType=hh,t.lanes=i,t;case Sv:return Eu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tv:o=10;break e;case Iv:o=9;break e;case Vd:o=11;break e;case Ld:o=14;break e;case Jn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Yr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function Eu(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=Sv,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function vf(t,e,n,r,s,i,o,l,u){return t=new pA(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(i),t}function mA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function m0(t){if(!t)return Tr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(xt(n))return m_(t,n,e)}return e}function g0(t,e,n,r,s,i,o,l,u){return t=vf(n,r,!0,t,s,i,o,l,u),t.context=m0(null),n=t.current,r=gt(),s=mr(n),i=Vn(r,s),i.callback=e??null,fr(n,i,s),t.current.lanes=s,Yo(t,s,r),Ct(t,r),t}function Tu(t,e,n,r){var s=e.current,i=gt(),o=mr(s);return n=m0(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(s,e,o),t!==null&&(on(t,s,o,i),sl(t,s,o)),o}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){Dg(t,e),(t=t.alternate)&&Dg(t,e)}function gA(){return null}var y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}Iu.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Tu(t,e,null,null)};Iu.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Tu(null,t,null,null)}),e[jn]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&Yv(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Og(){}function yA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=ql(o);i.call(h)}}var o=g0(e,r,t,0,null,!1,!1,"",Og);return t._reactRootContainer=o,t[jn]=o.current,Co(t.nodeType===8?t.parentNode:t),ns(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=ql(u);l.call(h)}}var u=vf(t,0,!1,null,null,!1,!1,"",Og);return t._reactRootContainer=u,t[jn]=u.current,Co(t.nodeType===8?t.parentNode:t),ns(function(){Tu(e,u,n,r)}),u}function Au(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=ql(o);l.call(u)}}Tu(e,o,t,s)}else o=yA(n,e,t,s,r);return ql(o)}Hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qi(e.pendingLanes);n!==0&&(Fd(e,n|1),Ct(e,Ve()),!(ae&6)&&(ii=Ve()+500,Nr()))}break;case 13:ns(function(){var r=Fn(t,1);if(r!==null){var s=gt();on(r,t,1,s)}}),_f(t,1)}};Ud=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=gt();on(e,t,134217728,n)}_f(t,134217728)}};Kv=function(t){if(t.tag===13){var e=mr(t),n=Fn(t,e);if(n!==null){var r=gt();on(n,t,e,r)}_f(t,e)}};Gv=function(){return de};Qv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Eh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=mu(r);if(!s)throw Error(j(90));xv(r),ph(r,s)}}}break;case"textarea":Rv(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};Vv=pf;Lv=ns;var vA={usingClientEntryPoint:!1,Events:[Jo,Vs,mu,Dv,Ov,pf]},qi={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_A={bundleType:qi.bundleType,version:qi.version,rendererPackageName:qi.rendererPackageName,rendererConfig:qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fv(t),t===null?null:t.stateNode},findFiberByHostInstance:qi.findFiberByHostInstance||gA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{hu=Ka.inject(_A),mn=Ka}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(j(200));return mA(t,e,null,n)};jt.createRoot=function(t,e){if(!Ef(t))throw Error(j(299));var n=!1,r="",s=y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=vf(t,1,!1,null,null,n,!1,r,s),t[jn]=e.current,Co(t.nodeType===8?t.parentNode:t),new wf(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Fv(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return ns(t)};jt.hydrate=function(t,e,n){if(!Su(e))throw Error(j(200));return Au(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=y0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g0(e,null,t,1,n??null,s,!1,i,o),t[jn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Iu(e)};jt.render=function(t,e,n){if(!Su(e))throw Error(j(200));return Au(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!Su(t))throw Error(j(40));return t._reactRootContainer?(ns(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};jt.unstable_batchedUpdates=pf;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Su(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Au(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(t){console.error(t)}}v0(),vv.exports=jt;var wA=vv.exports,Vg=wA;ah.createRoot=Vg.createRoot,ah.hydrateRoot=Vg.hydrateRoot;var Lg={};/**
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
 */const _0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},EA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},w0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(y=64)),r.push(n[f],n[m],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new TA;const y=i<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IA=function(t){const e=_0(t);return w0.encodeByteArray(e,!0)},Wl=function(t){return IA(t).replace(/\./g,"")},E0=function(t){try{return w0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const AA=()=>SA().__FIREBASE_DEFAULTS__,xA=()=>{if(typeof process>"u"||typeof Lg>"u")return;const t=Lg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&E0(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return AA()||xA()||CA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T0=t=>{var e,n;return(n=(e=xu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RA=t=>{const e=T0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I0=()=>{var t;return(t=xu())===null||t===void 0?void 0:t.config},S0=t=>{var e;return(e=xu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function PA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wl(JSON.stringify(n)),Wl(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function bA(){var t;const e=(t=xu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function A0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VA(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LA(){return!bA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function C0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function MA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const jA="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jA,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?FA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cn(s,l,r)}}function FA(t,e){return t.replace(UA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UA=/\{\$([^}]+)}/g;function $A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mg(i)&&Mg(o)){if(!Lo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mg(t){return t!==null&&typeof t=="object"}/**
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
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zA(t,e){const n=new BA(t,e);return n.subscribe.bind(n)}class BA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qc),s.error===void 0&&(s.error=qc),s.complete===void 0&&(s.complete=qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */const WA=1e3,HA=2,KA=4*60*60*1e3,GA=.5;function jg(t,e=WA,n=HA){const r=e*Math.pow(n,t),s=Math.round(GA*r*(Math.random()-.5)*2);return Math.min(KA,r+s)}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const ZA={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ex=ie.INFO,tx={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},nx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=nx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const rx=(t,e)=>e.some(n=>t instanceof n);let Fg,Ug;function sx(){return Fg||(Fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ix(){return Ug||(Ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,ed=new WeakMap,k0=new WeakMap,Wc=new WeakMap,Tf=new WeakMap;function ox(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R0.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function ax(t){if(ed.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ed.set(t,e)}let td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lx(t){td=t(td)}function ux(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hc(this),e,...n);return k0.set(r,e.sort?e.sort():[e]),yr(r)}:ix().includes(t)?function(...e){return t.apply(Hc(this),e),yr(R0.get(this))}:function(...e){return yr(t.apply(Hc(this),e))}}function cx(t){return typeof t=="function"?ux(t):(t instanceof IDBTransaction&&ax(t),rx(t,sx())?new Proxy(t,td):t)}function yr(t){if(t instanceof IDBRequest)return ox(t);if(Wc.has(t))return Wc.get(t);const e=cx(t);return e!==t&&(Wc.set(t,e),Tf.set(e,t)),e}const Hc=t=>Tf.get(t);function P0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hx=["get","getKey","getAll","getAllKeys","count"],dx=["put","add","delete","clear"],Kc=new Map;function $g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Kc.set(e,i),i}lx(t=>({...t,get:(e,n,r)=>$g(e,n)||t.get(e,n,r),has:(e,n)=>!!$g(e,n)||t.has(e,n)}));/**
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
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(px(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function px(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nd="@firebase/app",zg="0.10.13";/**
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
 */const $n=new Cu("@firebase/app"),mx="@firebase/app-compat",gx="@firebase/analytics-compat",yx="@firebase/analytics",vx="@firebase/app-check-compat",_x="@firebase/app-check",wx="@firebase/auth",Ex="@firebase/auth-compat",Tx="@firebase/database",Ix="@firebase/data-connect",Sx="@firebase/database-compat",Ax="@firebase/functions",xx="@firebase/functions-compat",Cx="@firebase/installations",Rx="@firebase/installations-compat",kx="@firebase/messaging",Px="@firebase/messaging-compat",Nx="@firebase/performance",bx="@firebase/performance-compat",Dx="@firebase/remote-config",Ox="@firebase/remote-config-compat",Vx="@firebase/storage",Lx="@firebase/storage-compat",Mx="@firebase/firestore",jx="@firebase/vertexai-preview",Fx="@firebase/firestore-compat",Ux="firebase",$x="10.14.1";/**
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
 */const rd="[DEFAULT]",zx={[nd]:"fire-core",[mx]:"fire-core-compat",[yx]:"fire-analytics",[gx]:"fire-analytics-compat",[_x]:"fire-app-check",[vx]:"fire-app-check-compat",[wx]:"fire-auth",[Ex]:"fire-auth-compat",[Tx]:"fire-rtdb",[Ix]:"fire-data-connect",[Sx]:"fire-rtdb-compat",[Ax]:"fire-fn",[xx]:"fire-fn-compat",[Cx]:"fire-iid",[Rx]:"fire-iid-compat",[kx]:"fire-fcm",[Px]:"fire-fcm-compat",[Nx]:"fire-perf",[bx]:"fire-perf-compat",[Dx]:"fire-rc",[Ox]:"fire-rc-compat",[Vx]:"fire-gcs",[Lx]:"fire-gcs-compat",[Mx]:"fire-fst",[Fx]:"fire-fst-compat",[jx]:"fire-vertex","fire-js":"fire-js",[Ux]:"fire-js-all"};/**
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
 */const Hl=new Map,Bx=new Map,sd=new Map;function Bg(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(sd.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;sd.set(e,t);for(const n of Hl.values())Bg(n,t);for(const n of Bx.values())Bg(n,t);return!0}function ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nn(t){return t.settings!==void 0}/**
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
 */const qx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new hs("app","Firebase",qx);/**
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
 */class Wx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=$x;function N0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=I0()),!n)throw vr.create("no-options");const i=Hl.get(s);if(i){if(Lo(n,i.options)&&Lo(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new JA(s);for(const u of sd.values())o.addComponent(u);const l=new Wx(n,r,o);return Hl.set(s,l),l}function If(t=rd){const e=Hl.get(t);if(!e&&t===rd&&I0())return N0();if(!e)throw vr.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=zx[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}En(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Hx="firebase-heartbeat-database",Kx=1,Mo="firebase-heartbeat-store";let Gc=null;function b0(){return Gc||(Gc=P0(Hx,Kx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Gc}async function Gx(t){try{const n=(await b0()).transaction(Mo),r=await n.objectStore(Mo).get(D0(t));return await n.done,r}catch(e){if(e instanceof cn)$n.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function qg(t,e){try{const r=(await b0()).transaction(Mo,"readwrite");await r.objectStore(Mo).put(e,D0(t)),await r.done}catch(n){if(n instanceof cn)$n.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function D0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qx=1024,Yx=30*24*60*60*1e3;class Xx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Yx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wg(),{heartbeatsToSend:r,unsentEntries:s}=Jx(this._heartbeatsCache.heartbeats),i=Wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function Wg(){return new Date().toISOString().substring(0,10)}function Jx(t,e=Qx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?C0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hg(t){return Wl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function eC(t){En(new ln("platform-logger",e=>new fx(e),"PRIVATE")),En(new ln("heartbeat",e=>new Xx(e),"PRIVATE")),Wt(nd,zg,t),Wt(nd,zg,"esm2017"),Wt("fire-js","")}eC("");var tC="firebase",nC="10.14.1";/**
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
 */Wt(tC,nC,"app");const O0="@firebase/installations",Sf="0.6.9";/**
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
 */const V0=1e4,L0=`w:${Sf}`,M0="FIS_v2",rC="https://firebaseinstallations.googleapis.com/v1",sC=60*60*1e3,iC="installations",oC="Installations";/**
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
 */const aC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rs=new hs(iC,oC,aC);function j0(t){return t instanceof cn&&t.code.includes("request-failed")}/**
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
 */function F0({projectId:t}){return`${rC}/projects/${t}/installations`}function U0(t){return{token:t.token,requestStatus:2,expiresIn:uC(t.expiresIn),creationTime:Date.now()}}async function $0(t,e){const r=(await e.json()).error;return rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function z0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lC(t,{refreshToken:e}){const n=z0(t);return n.append("Authorization",cC(e)),n}async function B0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uC(t){return Number(t.replace("s","000"))}function cC(t){return`${M0} ${t}`}/**
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
 */async function hC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=F0(t),s=z0(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:M0,appId:t.appId,sdkVersion:L0},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await B0(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:U0(h.authToken)}}else throw await $0("Create Installation",u)}/**
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
 */function q0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const fC=/^[cdef][\w-]{21}$/,id="";function pC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mC(t);return fC.test(n)?n:id}catch{return id}}function mC(t){return dC(t).substr(0,22)}/**
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
 */function Ru(t){return`${t.appName}!${t.appId}`}/**
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
 */const W0=new Map;function H0(t,e){const n=Ru(t);K0(n,e),gC(n,e)}function K0(t,e){const n=W0.get(t);if(n)for(const r of n)r(e)}function gC(t,e){const n=yC();n&&n.postMessage({key:t,fid:e}),vC()}let Kr=null;function yC(){return!Kr&&"BroadcastChannel"in self&&(Kr=new BroadcastChannel("[Firebase] FID Change"),Kr.onmessage=t=>{K0(t.data.key,t.data.fid)}),Kr}function vC(){W0.size===0&&Kr&&(Kr.close(),Kr=null)}/**
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
 */const _C="firebase-installations-database",wC=1,ss="firebase-installations-store";let Qc=null;function Af(){return Qc||(Qc=P0(_C,wC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}})),Qc}async function Kl(t,e){const n=Ru(t),s=(await Af()).transaction(ss,"readwrite"),i=s.objectStore(ss),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&H0(t,e.fid),e}async function G0(t){const e=Ru(t),r=(await Af()).transaction(ss,"readwrite");await r.objectStore(ss).delete(e),await r.done}async function ku(t,e){const n=Ru(t),s=(await Af()).transaction(ss,"readwrite"),i=s.objectStore(ss),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&H0(t,l.fid),l}/**
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
 */async function xf(t){let e;const n=await ku(t.appConfig,r=>{const s=EC(r),i=TC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===id?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function EC(t){const e=t||{fid:pC(),registrationStatus:0};return Q0(e)}function TC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=IC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SC(t)}:{installationEntry:e}}async function IC(t,e){try{const n=await hC(t,e);return Kl(t.appConfig,n)}catch(n){throw j0(n)&&n.customData.serverCode===409?await G0(t.appConfig):await Kl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function SC(t){let e=await Kg(t.appConfig);for(;e.registrationStatus===1;)await q0(100),e=await Kg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xf(t);return r||n}return e}function Kg(t){return ku(t,e=>{if(!e)throw rs.create("installation-not-found");return Q0(e)})}function Q0(t){return AC(t)?{fid:t.fid,registrationStatus:0}:t}function AC(t){return t.registrationStatus===1&&t.registrationTime+V0<Date.now()}/**
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
 */async function xC({appConfig:t,heartbeatServiceProvider:e},n){const r=CC(t,n),s=lC(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:L0,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await B0(()=>fetch(r,l));if(u.ok){const h=await u.json();return U0(h)}else throw await $0("Generate Auth Token",u)}function CC(t,{fid:e}){return`${F0(t)}/${e}/authTokens:generate`}/**
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
 */async function Cf(t,e=!1){let n;const r=await ku(t.appConfig,i=>{if(!Y0(i))throw rs.create("not-registered");const o=i.authToken;if(!e&&PC(o))return i;if(o.requestStatus===1)return n=RC(t,e),i;{if(!navigator.onLine)throw rs.create("app-offline");const l=bC(i);return n=kC(t,l),l}});return n?await n:r.authToken}async function RC(t,e){let n=await Gg(t.appConfig);for(;n.authToken.requestStatus===1;)await q0(100),n=await Gg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Cf(t,e):r}function Gg(t){return ku(t,e=>{if(!Y0(e))throw rs.create("not-registered");const n=e.authToken;return DC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kC(t,e){try{const n=await xC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Kl(t.appConfig,r),n}catch(n){if(j0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await G0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kl(t.appConfig,r)}throw n}}function Y0(t){return t!==void 0&&t.registrationStatus===2}function PC(t){return t.requestStatus===2&&!NC(t)}function NC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sC}function bC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function DC(t){return t.requestStatus===1&&t.requestTime+V0<Date.now()}/**
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
 */async function OC(t){const e=t,{installationEntry:n,registrationPromise:r}=await xf(e);return r?r.catch(console.error):Cf(e).catch(console.error),n.fid}/**
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
 */async function VC(t,e=!1){const n=t;return await LC(n),(await Cf(n,e)).token}async function LC(t){const{registrationPromise:e}=await xf(t);e&&await e}/**
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
 */function MC(t){if(!t||!t.options)throw Yc("App Configuration");if(!t.name)throw Yc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Yc(t){return rs.create("missing-app-config-values",{valueName:t})}/**
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
 */const X0="installations",jC="installations-internal",FC=t=>{const e=t.getProvider("app").getImmediate(),n=MC(e),r=ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UC=t=>{const e=t.getProvider("app").getImmediate(),n=ds(e,X0).getImmediate();return{getId:()=>OC(n),getToken:s=>VC(n,s)}};function $C(){En(new ln(X0,FC,"PUBLIC")),En(new ln(jC,UC,"PRIVATE"))}$C();Wt(O0,Sf);Wt(O0,Sf,"esm2017");/**
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
 */const Gl="analytics",zC="firebase_id",BC="origin",qC=60*1e3,WC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Rt=new Cu("@firebase/analytics");/**
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
 */const HC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new hs("analytics","Analytics",HC);/**
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
 */function KC(t){if(!t.startsWith(Rf)){const e=Ot.create("invalid-gtag-resource",{gtagURL:t});return Rt.warn(e.message),""}return t}function J0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function GC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function QC(t,e){const n=GC("firebase-js-sdk-policy",{createScriptURL:KC}),r=document.createElement("script"),s=`${Rf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function YC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XC(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await J0(n)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){Rt.error(l)}t("config",s,i)}async function JC(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await J0(n);for(const u of o){const h=l.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Rt.error(i)}}function ZC(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await JC(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await XC(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Rt.error(l)}}return s}function e1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ZC(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function t1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rf)&&n.src.includes(t))return n;return null}/**
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
 */const n1=30,r1=1e3;class s1{constructor(e={},n=r1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Z0=new s1;function i1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function o1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:i1(r)},i=WC.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function a1(t,e=Z0,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ot.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ot.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new c1;return setTimeout(async()=>{l.abort()},qC),ew({appId:r,apiKey:s,measurementId:i},o,l,e)}async function ew(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Z0){var i;const{appId:o,measurementId:l}=t;try{await l1(r,e)}catch(u){if(l)return Rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await o1(t);return s.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!u1(h)){if(s.deleteThrottleMetadata(o),l)return Rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?jg(n,s.intervalMillis,n1):jg(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,m),Rt.debug(`Calling attemptFetch again in ${f} millis`),ew(t,m,r,s)}}function l1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function u1(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class c1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function h1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function d1(){if(x0())try{await C0()}catch(t){return Rt.warn(Ot.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Rt.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function f1(t,e,n,r,s,i,o){var l;const u=a1(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&Rt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Rt.error(A)),e.push(u);const h=d1().then(A=>{if(A)return r.getId()}),[f,m]=await Promise.all([u,h]);t1(i)||QC(i,f.measurementId),s("js",new Date);const y=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return y[BC]="firebase",y.update=!0,m!=null&&(y[zC]=m),s("config",f.measurementId,y),f.measurementId}/**
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
 */class p1{constructor(e){this.app=e}_delete(){return delete co[this.app.options.appId],Promise.resolve()}}let co={},Qg=[];const Yg={};let Xc="dataLayer",m1="gtag",Xg,tw,Jg=!1;function g1(){const t=[];if(A0()&&t.push("This is a browser extension environment."),MA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ot.create("invalid-analytics-context",{errorInfo:e});Rt.warn(n.message)}}function y1(t,e,n){g1();const r=t.options.appId;if(!r)throw Ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(co[r]!=null)throw Ot.create("already-exists",{id:r});if(!Jg){YC(Xc);const{wrappedGtag:i,gtagCore:o}=e1(co,Qg,Yg,Xc,m1);tw=i,Xg=o,Jg=!0}return co[r]=f1(t,Qg,Yg,e,Xg,Xc,n),new p1(t)}function v1(t=If()){t=ze(t);const e=ds(t,Gl);return e.isInitialized()?e.getImmediate():_1(t)}function _1(t,e={}){const n=ds(t,Gl);if(n.isInitialized()){const s=n.getImmediate();if(Lo(e,n.getOptions()))return s;throw Ot.create("already-initialized")}return n.initialize({options:e})}function w1(t,e,n,r){t=ze(t),h1(tw,co[t.app.options.appId],e,n,r).catch(s=>Rt.error(s))}const Zg="@firebase/analytics",ey="0.10.8";function E1(){En(new ln(Gl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return y1(r,s,n)},"PUBLIC")),En(new ln("analytics-internal",t,"PRIVATE")),Wt(Zg,ey),Wt(Zg,ey,"esm2017");function t(e){try{const n=e.getProvider(Gl).getImmediate();return{logEvent:(r,s,i)=>w1(n,r,s,i)}}catch(n){throw Ot.create("interop-component-reg-failed",{reason:n})}}}E1();var ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,nw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(T,C,k){for(var S=Array(arguments.length-2),He=2;He<arguments.length;He++)S[He-2]=arguments[He];return g.prototype[C].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);var T=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)T[C]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(C=0;16>C;++C)T[C]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],C=v.g[2];var k=v.g[3],S=g+(k^_&(C^k))+T[0]+3614090360&4294967295;g=_+(S<<7&4294967295|S>>>25),S=k+(C^g&(_^C))+T[1]+3905402710&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(_^k&(g^_))+T[2]+606105819&4294967295,C=k+(S<<17&4294967295|S>>>15),S=_+(g^C&(k^g))+T[3]+3250441966&4294967295,_=C+(S<<22&4294967295|S>>>10),S=g+(k^_&(C^k))+T[4]+4118548399&4294967295,g=_+(S<<7&4294967295|S>>>25),S=k+(C^g&(_^C))+T[5]+1200080426&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(_^k&(g^_))+T[6]+2821735955&4294967295,C=k+(S<<17&4294967295|S>>>15),S=_+(g^C&(k^g))+T[7]+4249261313&4294967295,_=C+(S<<22&4294967295|S>>>10),S=g+(k^_&(C^k))+T[8]+1770035416&4294967295,g=_+(S<<7&4294967295|S>>>25),S=k+(C^g&(_^C))+T[9]+2336552879&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(_^k&(g^_))+T[10]+4294925233&4294967295,C=k+(S<<17&4294967295|S>>>15),S=_+(g^C&(k^g))+T[11]+2304563134&4294967295,_=C+(S<<22&4294967295|S>>>10),S=g+(k^_&(C^k))+T[12]+1804603682&4294967295,g=_+(S<<7&4294967295|S>>>25),S=k+(C^g&(_^C))+T[13]+4254626195&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(_^k&(g^_))+T[14]+2792965006&4294967295,C=k+(S<<17&4294967295|S>>>15),S=_+(g^C&(k^g))+T[15]+1236535329&4294967295,_=C+(S<<22&4294967295|S>>>10),S=g+(C^k&(_^C))+T[1]+4129170786&4294967295,g=_+(S<<5&4294967295|S>>>27),S=k+(_^C&(g^_))+T[6]+3225465664&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^_&(k^g))+T[11]+643717713&4294967295,C=k+(S<<14&4294967295|S>>>18),S=_+(k^g&(C^k))+T[0]+3921069994&4294967295,_=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(_^C))+T[5]+3593408605&4294967295,g=_+(S<<5&4294967295|S>>>27),S=k+(_^C&(g^_))+T[10]+38016083&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^_&(k^g))+T[15]+3634488961&4294967295,C=k+(S<<14&4294967295|S>>>18),S=_+(k^g&(C^k))+T[4]+3889429448&4294967295,_=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(_^C))+T[9]+568446438&4294967295,g=_+(S<<5&4294967295|S>>>27),S=k+(_^C&(g^_))+T[14]+3275163606&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^_&(k^g))+T[3]+4107603335&4294967295,C=k+(S<<14&4294967295|S>>>18),S=_+(k^g&(C^k))+T[8]+1163531501&4294967295,_=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(_^C))+T[13]+2850285829&4294967295,g=_+(S<<5&4294967295|S>>>27),S=k+(_^C&(g^_))+T[2]+4243563512&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^_&(k^g))+T[7]+1735328473&4294967295,C=k+(S<<14&4294967295|S>>>18),S=_+(k^g&(C^k))+T[12]+2368359562&4294967295,_=C+(S<<20&4294967295|S>>>12),S=g+(_^C^k)+T[5]+4294588738&4294967295,g=_+(S<<4&4294967295|S>>>28),S=k+(g^_^C)+T[8]+2272392833&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^_)+T[11]+1839030562&4294967295,C=k+(S<<16&4294967295|S>>>16),S=_+(C^k^g)+T[14]+4259657740&4294967295,_=C+(S<<23&4294967295|S>>>9),S=g+(_^C^k)+T[1]+2763975236&4294967295,g=_+(S<<4&4294967295|S>>>28),S=k+(g^_^C)+T[4]+1272893353&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^_)+T[7]+4139469664&4294967295,C=k+(S<<16&4294967295|S>>>16),S=_+(C^k^g)+T[10]+3200236656&4294967295,_=C+(S<<23&4294967295|S>>>9),S=g+(_^C^k)+T[13]+681279174&4294967295,g=_+(S<<4&4294967295|S>>>28),S=k+(g^_^C)+T[0]+3936430074&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^_)+T[3]+3572445317&4294967295,C=k+(S<<16&4294967295|S>>>16),S=_+(C^k^g)+T[6]+76029189&4294967295,_=C+(S<<23&4294967295|S>>>9),S=g+(_^C^k)+T[9]+3654602809&4294967295,g=_+(S<<4&4294967295|S>>>28),S=k+(g^_^C)+T[12]+3873151461&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^_)+T[15]+530742520&4294967295,C=k+(S<<16&4294967295|S>>>16),S=_+(C^k^g)+T[2]+3299628645&4294967295,_=C+(S<<23&4294967295|S>>>9),S=g+(C^(_|~k))+T[0]+4096336452&4294967295,g=_+(S<<6&4294967295|S>>>26),S=k+(_^(g|~C))+T[7]+1126891415&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~_))+T[14]+2878612391&4294967295,C=k+(S<<15&4294967295|S>>>17),S=_+(k^(C|~g))+T[5]+4237533241&4294967295,_=C+(S<<21&4294967295|S>>>11),S=g+(C^(_|~k))+T[12]+1700485571&4294967295,g=_+(S<<6&4294967295|S>>>26),S=k+(_^(g|~C))+T[3]+2399980690&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~_))+T[10]+4293915773&4294967295,C=k+(S<<15&4294967295|S>>>17),S=_+(k^(C|~g))+T[1]+2240044497&4294967295,_=C+(S<<21&4294967295|S>>>11),S=g+(C^(_|~k))+T[8]+1873313359&4294967295,g=_+(S<<6&4294967295|S>>>26),S=k+(_^(g|~C))+T[15]+4264355552&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~_))+T[6]+2734768916&4294967295,C=k+(S<<15&4294967295|S>>>17),S=_+(k^(C|~g))+T[13]+1309151649&4294967295,_=C+(S<<21&4294967295|S>>>11),S=g+(C^(_|~k))+T[4]+4149444226&4294967295,g=_+(S<<6&4294967295|S>>>26),S=k+(_^(g|~C))+T[11]+3174756917&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~_))+T[2]+718787259&4294967295,C=k+(S<<15&4294967295|S>>>17),S=_+(k^(C|~g))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,T=this.B,C=this.h,k=0;k<g;){if(C==0)for(;k<=_;)s(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<g;)if(T[C++]=v.charCodeAt(k++),C==this.blockSize){s(this,T),C=0;break}}else for(;k<g;)if(T[C++]=v[k++],C==this.blockSize){s(this,T),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var T=0;32>T;T+=8)v[_++]=this.g[g]>>>T&255;return v};function i(v,g){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function o(v,g){this.h=g;for(var _=[],T=!0,C=v.length-1;0<=C;C--){var k=v[C]|0;T&&k==g||(_[C]=k,T=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?i(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return R(h(-v));for(var g=[],_=1,T=0;v>=_;T++)g[T]=v/_|0,_*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return R(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),T=m,C=0;C<v.length;C+=8){var k=Math.min(8,v.length-C),S=parseInt(v.substring(C,C+k),g);8>k?(k=h(Math.pow(g,k)),T=T.j(k).add(h(S))):(T=T.j(_),T=T.add(h(S)))}return T}var m=u(0),y=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-R(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var T=this.i(_);v+=(0<=T?T:4294967296+T)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(b(this))return"-"+R(this).toString(v);for(var g=h(Math.pow(v,6)),_=this,T="";;){var C=O(_,g).g;_=I(_,C.j(g));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=C,P(_))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function b(v){return v.h==-1}t.l=function(v){return v=I(this,v),b(v)?-1:P(v)?0:1};function R(v){for(var g=v.g.length,_=[],T=0;T<g;T++)_[T]=~v.g[T];return new o(_,~v.h).add(y)}t.abs=function(){return b(this)?R(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],T=0,C=0;C<=g;C++){var k=T+(this.i(C)&65535)+(v.i(C)&65535),S=(k>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);T=S>>>16,k&=65535,S&=65535,_[C]=S<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(v,g){return v.add(R(g))}t.j=function(v){if(P(this)||P(v))return m;if(b(this))return b(v)?R(this).j(R(v)):R(R(this).j(v));if(b(v))return R(this.j(R(v)));if(0>this.l(A)&&0>v.l(A))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<v.g.length;C++){var k=this.i(T)>>>16,S=this.i(T)&65535,He=v.i(C)>>>16,ne=v.i(C)&65535;_[2*T+2*C]+=S*ne,E(_,2*T+2*C),_[2*T+2*C+1]+=k*ne,E(_,2*T+2*C+1),_[2*T+2*C+1]+=S*He,E(_,2*T+2*C+1),_[2*T+2*C+2]+=k*He,E(_,2*T+2*C+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new o(_,0)};function E(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function x(v,g){this.g=v,this.h=g}function O(v,g){if(P(g))throw Error("division by zero");if(P(v))return new x(m,m);if(b(v))return g=O(R(v),g),new x(R(g.g),R(g.h));if(b(g))return g=O(v,R(g)),new x(R(g.g),g.h);if(30<v.g.length){if(b(v)||b(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=g;0>=T.l(v);)_=F(_),T=F(T);var C=L(_,1),k=L(T,1);for(T=L(T,2),_=L(_,2);!P(T);){var S=k.add(T);0>=S.l(v)&&(C=C.add(_),k=S),T=L(T,1),_=L(_,1)}return g=I(v,C.j(g)),new x(C,g)}for(C=m;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=h(_),S=k.j(g);b(S)||0<S.l(v);)_-=T,k=h(_),S=k.j(g);P(k)&&(k=y),C=C.add(k),v=I(v,S)}return new x(C,v)}t.A=function(v){return O(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)&v.i(T);return new o(_,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)|v.i(T);return new o(_,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)^v.i(T);return new o(_,this.h^v.h)};function F(v){for(var g=v.g.length+1,_=[],T=0;T<g;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(_,v.h)}function L(v,g){var _=g>>5;g%=32;for(var T=v.g.length-_,C=[],k=0;k<T;k++)C[k]=0<g?v.i(k+_)>>>g|v.i(k+_+1)<<32-g:v.i(k+_);return new o(C,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Xr=o}).apply(typeof ty<"u"?ty:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rw,Xi,sw,hl,od,iw,ow,aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var N=a[w];if(!(N in d))break e;d=d[N]}a=a[a.length-1],w=d[a],c=c(w),c!=w&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,w=!1,N={next:function(){if(!w&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return w=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,w),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var w=d.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(w,N,D){for(var $=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)$[ye-2]=arguments[ye];return c.prototype[N].apply(w,$)}}function b(a){const c=a.length;if(0<c){const d=Array(c);for(let w=0;w<c;w++)d[w]=a[w];return d}return[]}function R(a,c){for(let d=1;d<arguments.length;d++){const w=arguments[d];if(u(w)){const N=a.length||0,D=w.length||0;a.length=N+D;for(let $=0;$<D;$++)a[N+$]=w[$]}else a.push(w)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function L(a,c,d){for(const w in a)c.call(d,a[w],w,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,w;for(let N=1;N<arguments.length;N++){w=arguments[N];for(d in w)a[d]=w[d];for(let D=0;D<_.length;D++)d=_[D],Object.prototype.hasOwnProperty.call(w,d)&&(a[d]=w[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Y;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class He{constructor(){this.h=this.g=null}add(c,d){const w=ne.get();w.set(c,d),this.h?this.h.next=w:this.g=w,this.h=w}}var ne=new I(()=>new ge,a=>a.reset());class ge{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let re,z=!1,Y=new He,Q=()=>{const a=l.Promise.resolve(void 0);re=()=>{a.then(le)}};var le=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){k(d)}var c=ne;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Yt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Xt(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{O(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Xt.aa.h.call(this)}}P(Xt,Se);var Jt={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),Ju=0;function pa(a,c,d,w,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!w,this.ha=N,this.key=++Ju,this.da=this.fa=!1}function vs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _s(a){this.src=a,this.g={},this.h=0}_s.prototype.add=function(a,c,d,w,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=G(a,c,w,N);return-1<$?(c=a[$],d||(c.fa=!1)):(c=new pa(c,this.src,D,!!w,N),c.fa=d,a.push(c)),c};function ws(a,c){var d=c.type;if(d in a.g){var w=a.g[d],N=Array.prototype.indexOf.call(w,c,void 0),D;(D=0<=N)&&Array.prototype.splice.call(w,N,1),D&&(vs(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function G(a,c,d,w){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==w)return N}return-1}var pe="closure_lm_"+(1e6*Math.random()|0),dt={};function Sn(a,c,d,w,N){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Sn(a,c[D],d,w,N);return null}return d=Np(d),a&&a[Ut]?a.K(c,d,h(w)?!!w.capture:!1,N):Es(a,c,d,!1,w,N)}function Es(a,c,d,w,N,D){if(!c)throw Error("Invalid event type");var $=h(N)?!!N.capture:!!N,ye=ec(a);if(ye||(a[pe]=ye=new _s(a)),d=ye.add(c,d,w,$,D),d.proxy)return d;if(w=Vr(),d.proxy=w,w.src=a,w.listener=d,a.addEventListener)Yt||(N=$),N===void 0&&(N=!1),a.addEventListener(c.toString(),w,N);else if(a.attachEvent)a.attachEvent(Pp(c.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Vr(){function a(d){return c.call(a.src,a.listener,d)}const c=wT;return a}function kp(a,c,d,w,N){if(Array.isArray(c))for(var D=0;D<c.length;D++)kp(a,c[D],d,w,N);else w=h(w)?!!w.capture:!!w,d=Np(d),a&&a[Ut]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=G(D,d,w,N),-1<d&&(vs(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=ec(a))&&(c=a.g[c.toString()],a=-1,c&&(a=G(c,d,w,N)),(d=-1<a?c[a]:null)&&Zu(d))}function Zu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ut])ws(c.i,a);else{var d=a.type,w=a.proxy;c.removeEventListener?c.removeEventListener(d,w,a.capture):c.detachEvent?c.detachEvent(Pp(d),w):c.addListener&&c.removeListener&&c.removeListener(w),(d=ec(c))?(ws(d,a),d.h==0&&(d.src=null,c[pe]=null)):vs(a)}}}function Pp(a){return a in dt?dt[a]:dt[a]="on"+a}function wT(a,c){if(a.da)a=!0;else{c=new Xt(c,this);var d=a.listener,w=a.ha||a.src;a.fa&&Zu(a),a=d.call(w,c)}return a}function ec(a){return a=a[pe],a instanceof _s?a:null}var tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Np(a){return typeof a=="function"?a:(a[tc]||(a[tc]=function(c){return a.handleEvent(c)}),a[tc])}function tt(){he.call(this),this.i=new _s(this),this.M=this,this.F=null}P(tt,he),tt.prototype[Ut]=!0,tt.prototype.removeEventListener=function(a,c,d,w){kp(this,a,c,d,w)};function ft(a,c){var d,w=a.F;if(w)for(d=[];w;w=w.F)d.push(w);if(a=a.M,w=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var N=c;c=new Se(w,a),T(c,N)}if(N=!0,d)for(var D=d.length-1;0<=D;D--){var $=c.g=d[D];N=ma($,w,!0,c)&&N}if($=c.g=a,N=ma($,w,!0,c)&&N,N=ma($,w,!1,c)&&N,d)for(D=0;D<d.length;D++)$=c.g=d[D],N=ma($,w,!1,c)&&N}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],w=0;w<d.length;w++)vs(d[w]);delete a.g[c],a.h--}}this.F=null},tt.prototype.K=function(a,c,d,w){return this.i.add(String(a),c,!1,d,w)},tt.prototype.L=function(a,c,d,w){return this.i.add(String(a),c,!0,d,w)};function ma(a,c,d,w){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,D=0;D<c.length;++D){var $=c[D];if($&&!$.da&&$.capture==d){var ye=$.listener,Ke=$.ha||$.src;$.fa&&ws(a.i,$),N=ye.call(Ke,w)!==!1&&N}}return N&&!w.defaultPrevented}function bp(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Dp(a){a.g=bp(()=>{a.g=null,a.i&&(a.i=!1,Dp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ET extends he{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Dp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(a){he.call(this),this.h=a,this.g={}}P(Si,he);var Op=[];function Vp(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&Zu(c)},a),a.g={}}Si.prototype.N=function(){Si.aa.N.call(this),Vp(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nc=l.JSON.stringify,TT=l.JSON.parse,IT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function rc(){}rc.prototype.h=null;function Lp(a){return a.h||(a.h=a.i())}function Mp(){}var Ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sc(){Se.call(this,"d")}P(sc,Se);function ic(){Se.call(this,"c")}P(ic,Se);var Lr={},jp=null;function ga(){return jp=jp||new tt}Lr.La="serverreachability";function Fp(a){Se.call(this,Lr.La,a)}P(Fp,Se);function xi(a){const c=ga();ft(c,new Fp(c))}Lr.STAT_EVENT="statevent";function Up(a,c){Se.call(this,Lr.STAT_EVENT,a),this.stat=c}P(Up,Se);function pt(a){const c=ga();ft(c,new Up(c,a))}Lr.Ma="timingevent";function $p(a,c){Se.call(this,Lr.Ma,a),this.size=c}P($p,Se);function Ci(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ri(){this.g=!0}Ri.prototype.xa=function(){this.g=!1};function ST(a,c,d,w,N,D){a.info(function(){if(a.g)if(D)for(var $="",ye=D.split("&"),Ke=0;Ke<ye.length;Ke++){var ue=ye[Ke].split("=");if(1<ue.length){var nt=ue[0];ue=ue[1];var rt=nt.split("_");$=2<=rt.length&&rt[1]=="type"?$+(nt+"="+ue+"&"):$+(nt+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+w+") [attempt "+N+"]: "+c+`
`+d+`
`+$})}function AT(a,c,d,w,N,D,$){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+N+"]: "+c+`
`+d+`
`+D+" "+$})}function Ts(a,c,d,w){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+CT(a,d)+(w?" "+w:"")})}function xT(a,c){a.info(function(){return"TIMEOUT: "+c})}Ri.prototype.info=function(){};function CT(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var w=d[a];if(!(2>w.length)){var N=w[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<N.length;$++)N[$]=""}}}}return nc(d)}catch{return c}}var ya={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oc;function va(){}P(va,rc),va.prototype.g=function(){return new XMLHttpRequest},va.prototype.i=function(){return{}},oc=new va;function Kn(a,c,d,w){this.j=a,this.i=c,this.l=d,this.R=w||1,this.U=new Si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var qp={},ac={};function lc(a,c,d){a.L=1,a.v=Ta(An(c)),a.m=d,a.P=!0,Wp(a,null)}function Wp(a,c){a.F=Date.now(),_a(a),a.A=An(a.v);var d=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),im(d.i,"t",w),a.C=0,d=a.j.J,a.h=new Bp,a.g=Im(a.j,d?c:null,!a.m),0<a.O&&(a.M=new ET(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,w=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Op[0]=N.toString()),N=Op);for(var D=0;D<N.length;D++){var $=Sn(d,N[D],w||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),xi(),ST(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const c=this.M;c&&xn(a)==3?c.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=xn(this.g);var c=this.g.Ba();const As=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||dm(this.g)))){this.J||rt!=4||c==7||(c==8||0>=As?xi(3):xi(2)),uc(this);var d=this.g.Z();this.X=d;t:if(Hp(this)){var w=dm(this.g);a="";var N=w.length,D=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),ki(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(w[c],{stream:!(D&&c==N-1)});w.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,AT(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Ke=this.g;if((ye=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ye)){var ue=ye;break t}}ue=null}if(d=ue)Ts(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cc(this,d);else{this.o=!1,this.s=3,pt(12),Mr(this),ki(this);break e}}if(this.P){d=!0;let Zt;for(;!this.J&&this.C<$.length;)if(Zt=RT(this,$),Zt==ac){rt==4&&(this.s=4,pt(14),d=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==qp){this.s=4,pt(15),Ts(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else Ts(this.i,this.l,Zt,null),cc(this,Zt);if(Hp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||$.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Ts(this.i,this.l,$,"[Invalid Chunked Response]"),Mr(this),ki(this);else if(0<$.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),gc(nt),nt.M=!0,pt(11))}}else Ts(this.i,this.l,$,null),cc(this,$);rt==4&&Mr(this),this.o&&!this.J&&(rt==4?_m(this.j,this):(this.o=!1,_a(this)))}else WT(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Mr(this),ki(this)}}}catch{}finally{}};function Hp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function RT(a,c){var d=a.C,w=c.indexOf(`
`,d);return w==-1?ac:(d=Number(c.substring(d,w)),isNaN(d)?qp:(w+=1,w+d>c.length?ac:(c=c.slice(w,w+d),a.C=w+d,c)))}Kn.prototype.cancel=function(){this.J=!0,Mr(this)};function _a(a){a.S=Date.now()+a.I,Kp(a,a.I)}function Kp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ci(y(a.ba,a),c)}function uc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xT(this.i,this.A),this.L!=2&&(xi(),pt(17)),Mr(this),this.s=2,ki(this)):Kp(this,this.S-a)};function ki(a){a.j.G==0||a.J||_m(a.j,a)}function Mr(a){uc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Vp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function cc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||hc(d.h,a))){if(!a.K&&hc(d.h,a)&&d.G==3){try{var w=d.Da.g.parse(c)}catch{w=null}if(Array.isArray(w)&&w.length==3){var N=w;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ra(d),xa(d);else break e;mc(d),pt(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ci(y(d.Za,d),6e3));if(1>=Yp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Fr(d,11)}else if((a.K||d.g==a)&&Ra(d),!E(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let ue=N[c];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const nt=ue[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=ue[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const As=ue[5];As!=null&&typeof As=="number"&&0<As&&(w=1.5*As,d.L=w,d.j.info("backChannelRequestTimeoutMs_="+w)),w=d;const Zt=a.g;if(Zt){const Pa=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pa){var D=w.h;D.g||Pa.indexOf("spdy")==-1&&Pa.indexOf("quic")==-1&&Pa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(dc(D,D.h),D.h=null))}if(w.D){const yc=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(w.ya=yc,_e(w.I,w.D,yc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),w=d;var $=a;if(w.qa=Tm(w,w.J?w.ia:null,w.W),$.K){Xp(w.h,$);var ye=$,Ke=w.L;Ke&&(ye.I=Ke),ye.B&&(uc(ye),_a(ye)),w.g=$}else ym(w);0<d.i.length&&Ca(d)}else ue[0]!="stop"&&ue[0]!="close"||Fr(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Fr(d,7):pc(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}xi(4)}catch{}}var kT=class{constructor(a,c){this.g=a,this.map=c}};function Gp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yp(a){return a.h?1:a.g?a.g.size:0}function hc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function dc(a,c){a.g?a.g.add(c):a.h=c}function Xp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Gp.prototype.cancel=function(){if(this.i=Jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return b(a.i)}function PT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,w=0;w<d;w++)c.push(a[w]);return c}c=[],d=0;for(w in a)c[d++]=a[w];return c}function NT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const w in a)c[d++]=w;return c}}}function Zp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=NT(a),w=PT(a),N=w.length,D=0;D<N;D++)c.call(void 0,w[D],d&&d[D],a)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bT(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var w=a[d].indexOf("="),N=null;if(0<=w){var D=a[d].substring(0,w);N=a[d].substring(w+1)}else D=a[d];c(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jr){this.h=a.h,wa(this,a.j),this.o=a.o,this.g=a.g,Ea(this,a.s),this.l=a.l;var c=a.i,d=new bi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),tm(this,d),this.m=a.m}else a&&(c=String(a).match(em))?(this.h=!1,wa(this,c[1]||"",!0),this.o=Pi(c[2]||""),this.g=Pi(c[3]||"",!0),Ea(this,c[4]),this.l=Pi(c[5]||"",!0),tm(this,c[6]||"",!0),this.m=Pi(c[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}jr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ni(c,nm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ni(c,nm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ni(d,d.charAt(0)=="/"?VT:OT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ni(d,MT)),a.join("")};function An(a){return new jr(a)}function wa(a,c,d){a.j=d?Pi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ea(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function tm(a,c,d){c instanceof bi?(a.i=c,jT(a.i,a.h)):(d||(c=Ni(c,LT)),a.i=new bi(c,a.h))}function _e(a,c,d){a.i.set(c,d)}function Ta(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Pi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ni(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,DT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function DT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nm=/[#\/\?@]/g,OT=/[#\?:]/g,VT=/[#\?]/g,LT=/[#\?@]/g,MT=/#/g;function bi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&bT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=bi.prototype,t.add=function(a,c){Gn(this),this.i=null,a=Is(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function rm(a,c){Gn(a),c=Is(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function sm(a,c){return Gn(a),c=Is(a,c),a.g.has(c)}t.forEach=function(a,c){Gn(this),this.g.forEach(function(d,w){d.forEach(function(N){a.call(c,N,w,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let w=0;w<c.length;w++){const N=a[w];for(let D=0;D<N.length;D++)d.push(c[w])}return d},t.V=function(a){Gn(this);let c=[];if(typeof a=="string")sm(this,a)&&(c=c.concat(this.g.get(Is(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Gn(this),this.i=null,a=Is(this,a),sm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function im(a,c,d){rm(a,c),0<d.length&&(a.i=null,a.g.set(Is(a,c),b(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var w=c[d];const D=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var N=D;$[w]!==""&&(N+="="+encodeURIComponent(String($[w]))),a.push(N)}}return this.i=a.join("&")};function Is(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function jT(a,c){c&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,w){var N=w.toLowerCase();w!=N&&(rm(this,w),im(this,N,d))},a)),a.j=c}function FT(a,c){const d=new Ri;if(l.Image){const w=new Image;w.onload=A(Qn,d,"TestLoadImage: loaded",!0,c,w),w.onerror=A(Qn,d,"TestLoadImage: error",!1,c,w),w.onabort=A(Qn,d,"TestLoadImage: abort",!1,c,w),w.ontimeout=A(Qn,d,"TestLoadImage: timeout",!1,c,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else c(!1)}function UT(a,c){const d=new Ri,w=new AbortController,N=setTimeout(()=>{w.abort(),Qn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:w.signal}).then(D=>{clearTimeout(N),D.ok?Qn(d,"TestPingServer: ok",!0,c):Qn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Qn(d,"TestPingServer: error",!1,c)})}function Qn(a,c,d,w,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),w(d)}catch{}}function $T(){this.g=new IT}function zT(a,c,d){const w=d||"";try{Zp(a,function(N,D){let $=N;h(N)&&($=nc(N)),c.push(w+D+"="+encodeURIComponent($))})}catch(N){throw c.push(w+"type="+encodeURIComponent("_badmap")),N}}function Ia(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ia,rc),Ia.prototype.g=function(){return new Sa(this.l,this.j)},Ia.prototype.i=function(a){return function(){return a}}({});function Sa(a,c){tt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Sa,tt),t=Sa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Oi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;om(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function om(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Di(this):Oi(this),this.readyState==3&&om(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Di(this))},t.Qa=function(a){this.g&&(this.response=a,Di(this))},t.ga=function(){this.g&&Di(this)};function Di(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Oi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Oi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function am(a){let c="";return L(a,function(d,w){c+=w,c+=":",c+=d,c+=`\r
`}),c}function fc(a,c,d){e:{for(w in d){var w=!1;break e}w=!0}w||(d=am(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,c,d))}function Pe(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Pe,tt);var BT=/^https?$/i,qT=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oc.g(),this.v=this.o?Lp(this.o):Lp(oc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){lm(this,D);return}if(a=d||"",d=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var N in w)d.set(N,w[N]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const D of w.keys())d.set(D,w.get(D));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qT,c,void 0))||w||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of d)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){lm(this,D)}};function lm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,um(a),Aa(a)}function um(a){a.A||(a.A=!0,ft(a,"complete"),ft(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ft(this,"complete"),ft(this,"abort"),Aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Aa(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cm(this):this.bb())},t.bb=function(){cm(this)};function cm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)bp(a.Ea,0,a);else if(ft(a,"readystatechange"),xn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var w;if(w=$===0){var N=String(a.D).match(em)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),w=!BT.test(N?N.toLowerCase():"")}d=w}if(d)ft(a,"complete"),ft(a,"success");else{a.m=6;try{var D=2<xn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",um(a)}}finally{Aa(a)}}}}function Aa(a,c){if(a.g){hm(a);const d=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ft(a,"ready");try{d.onreadystatechange=w}catch{}}}function hm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),TT(c)}};function dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function WT(a){const c={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(E(a[w]))continue;var d=C(a[w]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[N]||[];c[N]=D,D.push(d)}v(c,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function fm(a){this.Aa=0,this.i=[],this.j=new Ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vi("baseRetryDelayMs",5e3,a),this.cb=Vi("retryDelaySeedMs",1e4,a),this.Wa=Vi("forwardChannelMaxRetries",2,a),this.wa=Vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gp(a&&a.concurrentRequestLimit),this.Da=new $T,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,w){pt(0),this.W=a,this.H=c||{},d&&w!==void 0&&(this.H.OSID=d,this.H.OAID=w),this.F=this.X,this.I=Tm(this,null,this.W),Ca(this)};function pc(a){if(pm(a),a.G==3){var c=a.U++,d=An(a.I);if(_e(d,"SID",a.K),_e(d,"RID",c),_e(d,"TYPE","terminate"),Li(a,d),c=new Kn(a,a.j,c),c.L=2,c.v=Ta(An(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Im(c.j,null),c.g.ea(c.v)),c.F=Date.now(),_a(c)}Em(a)}function xa(a){a.g&&(gc(a),a.g.cancel(),a.g=null)}function pm(a){xa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ra(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ca(a){if(!Qp(a.h)&&!a.s){a.s=!0;var c=a.Ga;re||Q(),z||(re(),z=!0),Y.add(c,a),a.B=0}}function HT(a,c){return Yp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ci(y(a.Ga,a,c),wm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Kn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var w=this.i[d];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(c+=w,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=gm(this,N,c),d=An(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),Li(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(am(D)))+"&"+c:this.m&&fc(d,this.m,D)),dc(this.h,N),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",c),_e(d,"SID","null"),N.T=!0,lc(N,d,null)):lc(N,d,c),this.G=2}}else this.G==3&&(a?mm(this,a):this.i.length==0||Qp(this.h)||mm(this))};function mm(a,c){var d;c?d=c.l:d=a.U++;const w=An(a.I);_e(w,"SID",a.K),_e(w,"RID",d),_e(w,"AID",a.T),Li(a,w),a.m&&a.o&&fc(w,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=gm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),dc(a.h,d),lc(d,w,c)}function Li(a,c){a.H&&L(a.H,function(d,w){_e(c,w,d)}),a.l&&Zp({},function(d,w){_e(c,w,d)})}function gm(a,c,d){d=Math.min(a.i.length,d);var w=a.l?y(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const $=["count="+d];D==-1?0<d?(D=N[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let ye=!0;for(let Ke=0;Ke<d;Ke++){let ue=N[Ke].g;const nt=N[Ke].map;if(ue-=D,0>ue)D=Math.max(0,N[Ke].g-100),ye=!1;else try{zT(nt,$,"req"+ue+"_")}catch{w&&w(nt)}}if(ye){w=$.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,w}function ym(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;re||Q(),z||(re(),z=!0),Y.add(c,a),a.v=0}}function mc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ci(y(a.Fa,a),wm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,vm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ci(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),xa(this),vm(this))};function gc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function vm(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=An(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),Li(a,c),a.m&&a.o&&fc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ta(An(c)),d.m=null,d.P=!0,Wp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,xa(this),mc(this),pt(19))};function Ra(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _m(a,c){var d=null;if(a.g==c){Ra(a),gc(a),a.g=null;var w=2}else if(hc(a.h,c))d=c.D,Xp(a.h,c),w=1;else return;if(a.G!=0){if(c.o)if(w==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;w=ga(),ft(w,new $p(w,d)),Ca(a)}else ym(a);else if(N=c.s,N==3||N==0&&0<c.X||!(w==1&&HT(a,c)||w==2&&mc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Fr(a,5);break;case 4:Fr(a,10);break;case 3:Fr(a,6);break;default:Fr(a,2)}}}function wm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Fr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),w=a.Xa;const N=!w;w=new jr(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wa(w,"https"),Ta(w),N?FT(w.toString(),d):UT(w.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(c),Em(a),pm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Em(a){if(a.G=0,a.ka=[],a.l){const c=Jp(a.h);(c.length!=0||a.i.length!=0)&&(R(a.ka,c),R(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Tm(a,c,d){var w=d instanceof jr?An(d):new jr(d);if(w.g!="")c&&(w.g=c+"."+w.g),Ea(w,w.s);else{var N=l.location;w=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var D=new jr(null);w&&wa(D,w),c&&(D.g=c),N&&Ea(D,N),d&&(D.l=d),w=D}return d=a.D,c=a.ya,d&&c&&_e(w,d,c),_e(w,"VER",a.la),Li(a,w),w}function Im(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Pe(new Ia({eb:d})):new Pe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sm(){}t=Sm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ka(){}ka.prototype.g=function(a,c){return new kt(a,c)};function kt(a,c){tt.call(this),this.g=new fm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ss(this)}P(kt,tt),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){pc(this.g)},kt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=nc(a),a=d);c.i.push(new kT(c.Ya++,a)),c.G==3&&Ca(c)},kt.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,kt.aa.N.call(this)};function Am(a){sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Am,sc);function xm(){ic.call(this),this.status=1}P(xm,ic);function Ss(a){this.g=a}P(Ss,Sm),Ss.prototype.ua=function(){ft(this.g,"a")},Ss.prototype.ta=function(a){ft(this.g,new Am(a))},Ss.prototype.sa=function(a){ft(this.g,new xm)},Ss.prototype.ra=function(){ft(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,aw=function(){return new ka},ow=function(){return ga()},iw=Lr,od={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ya.NO_ERROR=0,ya.TIMEOUT=8,ya.HTTP_ERROR=6,hl=ya,zp.COMPLETE="complete",sw=zp,Mp.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Xi=Mp,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,rw=Pe}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});const ny="@firebase/firestore";/**
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
 */let vi="10.14.0";/**
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
 */const is=new Cu("@firebase/firestore");function Wi(){return is.logLevel}function H(t,...e){if(is.logLevel<=ie.DEBUG){const n=e.map(kf);is.debug(`Firestore (${vi}): ${t}`,...n)}}function zn(t,...e){if(is.logLevel<=ie.ERROR){const n=e.map(kf);is.error(`Firestore (${vi}): ${t}`,...n)}}function oi(t,...e){if(is.logLevel<=ie.WARN){const n=e.map(kf);is.warn(`Firestore (${vi}): ${t}`,...n)}}function kf(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function fe(t,e){t||J()}function ee(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class lw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class I1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class S1{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ln,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new lw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new at(e)}}class A1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class x1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new A1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new C1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class uw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=k1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new $e(0,0))}static max(){return new Z(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class jo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends jo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const P1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends jo{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return P1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ee.fromString(e))}static fromName(e){return new K(Ee.fromString(e).popFirst(5))}static empty(){return new K(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ee(e.slice()))}}function N1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Ir(s,K.empty(),e)}function b1(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(Z.min(),K.empty(),-1)}static max(){return new Ir(Z.max(),K.empty(),-1)}}function D1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const O1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ta(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==O1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function L1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function na(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pf.oe=-1;function Pu(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function M1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ry(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Je(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class hw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hw("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const j1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=j1.exec(t);if(fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function Nf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bf(t){const e=t.mapValue.fields.__previous_value__;return Nf(e)?bf(e):e}function Fo(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class F1{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Uo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ya={mapValue:{}};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nf(t)?4:$1(t)?9007199254740991:U1(t)?10:11:J()}function Tn(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),l=Sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return os(s.bytesValue).isEqual(os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Oe(s.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Oe(s.integerValue)===Oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Oe(s.doubleValue),l=Oe(i.doubleValue);return o===l?Ql(o)===Ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ry(o)!==ry(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Tn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function $o(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Oe(i.integerValue||i.doubleValue),u=Oe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return iy(t.timestampValue,e.timestampValue);case 4:return iy(Fo(t),Fo(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=os(i),u=os(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(Oe(i.latitude),Oe(o.latitude));return l!==0?l:ce(Oe(i.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return oy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const m=i.fields||{},y=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=y.value)===null||u===void 0?void 0:u.arrayValue,b=ce(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return b!==0?b:oy(A,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ya.mapValue&&o===Ya.mapValue)return 0;if(i===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=ce(u[m],f[m]);if(y!==0)return y;const A=li(l[u[m]],h[f[m]]);if(A!==0)return A}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Sr(t),r=Sr(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function oy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=li(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function ui(t){return ad(t)}function ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ad(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ad(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function ay(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ld(t){return!!t&&"integerValue"in t}function Df(t){return!!t&&"arrayValue"in t}function ly(t){return!!t&&"nullValue"in t}function uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function U1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ho(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ho(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];dl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(ho(this.value))}}function dw(t){const e=[];return fs(t.fields,(n,r)=>{const s=new Ye([n]);if(dl(r)){const i=dw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new bt(e)}/**
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
 */class ut{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,Z.min(),Z.min(),Z.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,Z.min(),Z.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Z.min(),Z.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yl{constructor(e,n){this.position=e,this.inclusive=n}}function cy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function z1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fw{}class je extends fw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new q1(e,n,r):n==="array-contains"?new K1(e,r):n==="in"?new G1(e,r):n==="not-in"?new Q1(e,r):n==="array-contains-any"?new Y1(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new W1(e,r):new H1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends fw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return pw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pw(t){return t.op==="and"}function mw(t){return B1(t)&&pw(t)}function B1(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function ud(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+ui(t.value);if(mw(t))return t.filters.map(e=>ud(e)).join(",");{const e=t.filters.map(n=>ud(n)).join(",");return`${t.op}(${e})`}}function gw(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&gw(o,s.filters[l]),!0):!1}(t,e):void J()}function yw(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${ui(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(yw).join(" ,")+"}"}(t):"Filter"}class q1 extends je{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class W1 extends je{constructor(e,n){super(e,"in",n),this.keys=vw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H1 extends je{constructor(e,n){super(e,"not-in",n),this.keys=vw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class K1 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Df(n)&&$o(n.arrayValue,this.value)}}class G1 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class Q1 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$o(this.value.arrayValue,n)}}class Y1 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class X1{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function dy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X1(t,e,n,r,s,i,o)}function Of(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ud(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ui(r)).join(",")),e.ue=n}return e.ue}function Vf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!z1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hy(t.startAt,e.startAt)&&hy(t.endAt,e.endAt)}function cd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _i{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function J1(t,e,n,r,s,i,o,l){return new _i(t,e,n,r,s,i,o,l)}function Nu(t){return new _i(t)}function fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _w(t){return t.collectionGroup!==null}function fo(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new zo(i,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new zo(Ye.keyField(),r))}return e.ce}function yn(t){const e=ee(t);return e.le||(e.le=Z1(e,fo(t))),e.le}function Z1(t,e){if(t.limitType==="F")return dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zo(s.field,i)});const n=t.endAt?new Yl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yl(t.startAt.position,t.startAt.inclusive):null;return dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hd(t,e){const n=t.filters.concat([e]);return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dd(t,e,n){return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bu(t,e){return Vf(yn(t),yn(e))&&t.limitType===e.limitType}function ww(t){return`${Of(yn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>yw(s)).join(", ")}]`),Pu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ui(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ui(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of fo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=cy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,fo(r),s)||r.endAt&&!function(o,l,u){const h=cy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,fo(r),s))}(t,e)}function eR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ew(t){return(e,n)=>{let r=!1;for(const s of fo(t)){const i=tR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tR(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?li(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cw(this.inner)}size(){return this.innerSize}}/**
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
 */const nR=new Re(K.comparator);function Bn(){return nR}const Tw=new Re(K.comparator);function Ji(...t){let e=Tw;for(const n of t)e=e.insert(n.key,n);return e}function Iw(t){let e=Tw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return po()}function Sw(){return po()}function po(){return new wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const rR=new Re(K.comparator),sR=new Je(K.comparator);function se(...t){let e=sR;for(const n of t)e=e.add(n);return e}const iR=new Je(ce);function oR(){return iR}/**
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
 */function Lf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function Aw(t){return{integerValue:""+t}}function xw(t,e){return M1(e)?Aw(e):Lf(t,e)}/**
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
 */class Ou{constructor(){this._=void 0}}function aR(t,e,n){return t instanceof Bo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nf(i)&&(i=bf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof qo?Rw(t,e):t instanceof Wo?kw(t,e):function(s,i){const o=Cw(s,i),l=py(o)+py(s.Pe);return ld(o)&&ld(s.Pe)?Aw(l):Lf(s.serializer,l)}(t,e)}function lR(t,e,n){return t instanceof qo?Rw(t,e):t instanceof Wo?kw(t,e):n}function Cw(t,e){return t instanceof Ho?function(r){return ld(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bo extends Ou{}class qo extends Ou{constructor(e){super(),this.elements=e}}function Rw(t,e){const n=Pw(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Ou{constructor(e){super(),this.elements=e}}function kw(t,e){let n=Pw(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class Ho extends Ou{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function py(t){return Oe(t.integerValue||t.doubleValue)}function Pw(t){return Df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Nw{constructor(e,n){this.field=e,this.transform=n}}function uR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof qo&&s instanceof qo||r instanceof Wo&&s instanceof Wo?ai(r.elements,s.elements,Tn):r instanceof Ho&&s instanceof Ho?Tn(r.Pe,s.Pe):r instanceof Bo&&s instanceof Bo}(t.transform,e.transform)}class cR{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vu{}function bw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lu(t.key,Vt.none()):new ra(t.key,t.data,Vt.none());{const n=t.data,r=Tt.empty();let s=new Je(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new br(t.key,r,new bt(s.toArray()),Vt.none())}}function hR(t,e,n){t instanceof ra?function(s,i,o){const l=s.value.clone(),u=gy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof br?function(s,i,o){if(!fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=gy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Dw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function mo(t,e,n,r){return t instanceof ra?function(i,o,l,u){if(!fl(i.precondition,o))return l;const h=i.value.clone(),f=yy(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(i,o,l,u){if(!fl(i.precondition,o))return l;const h=yy(i.fieldTransforms,u,o),f=o.data;return f.setAll(Dw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Cw(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function my(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,(i,o)=>uR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Vu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class br extends Vu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gy(t,e,n){const r=new Map;fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,lR(o,l,n[s]))}return r}function yy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,aR(i,o,e))}return r}class Lu extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fR extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=bw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,(n,r)=>my(n,r))&&ai(this.baseMutations,e.baseMutations,(n,r)=>my(n,r))}}class Mf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length);let s=function(){return rR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Mf(e,n,r,s)}}/**
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
 */var Le,oe;function yR(t){switch(t){default:return J();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Ow(t){if(t===void 0)return zn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Le.OK:return V.OK;case Le.CANCELLED:return V.CANCELLED;case Le.UNKNOWN:return V.UNKNOWN;case Le.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Le.INTERNAL:return V.INTERNAL;case Le.UNAVAILABLE:return V.UNAVAILABLE;case Le.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Le.NOT_FOUND:return V.NOT_FOUND;case Le.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Le.ABORTED:return V.ABORTED;case Le.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Le.DATA_LOSS:return V.DATA_LOSS;default:return J()}}(oe=Le||(Le={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const _R=new Xr([4294967295,4294967295],0);function vy(t){const e=vR().encode(t),n=new nw;return n.update(e),new Uint8Array(n.digest())}function _y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([s,i],0)]}class jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zi(`Invalid padding: ${n}`);if(r<0)throw new Zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Xr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Xr.fromNumber(r)));return s.compare(_R)===1&&(s=new Xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vy(e),[r,s]=_y(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=vy(e),[r,s]=_y(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mu(Z.min(),s,new Re(ce),Bn(),se())}}class sa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sa(r,n,se(),se(),se())}}/**
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
 */class pl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vw{constructor(e,n){this.targetId=e,this.me=n}}class Lw{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wy{constructor(){this.fe=0,this.ge=Ty(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new sa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ty()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=Ey(),this.Qe=new Re(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(cd(i))if(r===0){const o=new K(i.path);this.Ue(n,o,ut.newNoDocument(o,Z.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=os(r).toUint8Array()}catch(u){if(u instanceof hw)return oi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new jf(o,s,i)}catch(u){return oi(u instanceof Zi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&cd(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=se();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Mu(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=Ey(),this.Qe=new Re(ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new wy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ey(){return new Re(K.comparator)}function Ty(){return new Re(K.comparator)}const ER={asc:"ASCENDING",desc:"DESCENDING"},TR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IR={and:"AND",or:"OR"};class SR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fd(t,e){return t.useProto3Json||Pu(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AR(t,e){return Xl(t,e.toTimestamp())}function vn(t){return fe(!!t),Z.fromTimestamp(function(n){const r=Sr(n);return new $e(r.seconds,r.nanos)}(t))}function Ff(t,e){return pd(t,e).canonicalString()}function pd(t,e){const n=function(s){return new Ee(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function jw(t){const e=Ee.fromString(t);return fe(Bw(e)),e}function md(t,e){return Ff(t.databaseId,e.path)}function Jc(t,e){const n=jw(e);if(n.get(1)!==t.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Uw(n))}function Fw(t,e){return Ff(t.databaseId,e)}function xR(t){const e=jw(t);return e.length===4?Ee.emptyPath():Uw(e)}function gd(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uw(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Iy(t,e,n){return{name:md(t,e),fields:n.value.mapValue.fields}}function CR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:Ow(h.code);return new B(f,h.message||"")}(o);n=new Lw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jc(t,r.document.name),i=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):Z.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new pl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jc(t,r.document),i=r.readTime?vn(r.readTime):Z.min(),o=ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jc(t,r.document),i=r.removedTargetIds||[];n=new pl([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gR(s,i),l=r.targetId;n=new Vw(l,o)}}return n}function RR(t,e){let n;if(e instanceof ra)n={update:Iy(t,e.key,e.value)};else if(e instanceof Lu)n={delete:md(t,e.key)};else if(e instanceof br)n={update:Iy(t,e.key,e.data),updateMask:MR(e.fieldMask)};else{if(!(e instanceof fR))return J();n={verify:md(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function kR(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?vn(s.updateTime):vn(i);return o.isEqual(Z.min())&&(o=vn(i)),new cR(o,s.transformResults||[])}(n,e))):[]}function PR(t,e){return{documents:[Fw(t,e.path)]}}function NR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fw(t,s);const i=function(h){if(h.length!==0)return zw(un.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Rs(y.field),direction:OR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=fd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function bR(t){let e=xR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const y=$w(m);return y instanceof un&&mw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(P){return new zo(ks(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Pu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,A=m.values||[];return new Yl(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,A=m.values||[];return new Yl(A,y)}(n.endAt)),J1(e,s,o,i,l,"F",u,h)}function DR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $w(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ks(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return je.create(ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>$w(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function OR(t){return ER[t]}function VR(t){return TR[t]}function LR(t){return IR[t]}function Rs(t){return{fieldPath:t.canonicalString()}}function ks(t){return Ye.fromServerFormat(t.fieldPath)}function zw(t){return t instanceof je?function(n){if(n.op==="=="){if(uy(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NAN"}};if(ly(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uy(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NAN"}};if(ly(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rs(n.field),op:VR(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>zw(s));return r.length===1?r[0]:{compositeFilter:{op:LR(n.op),filters:r}}}(t):J()}function MR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=Z.min(),o=Z.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jR{constructor(e){this.ct=e}}function FR(t){const e=bR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dd(e,e.limit,"L"):e}/**
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
 */class UR{constructor(){this.un=new $R}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ir.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class $R{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Ee.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Ee.comparator)).toArray()}}/**
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
 */class ci{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ci(0)}static kn(){return new ci(-1)}}/**
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
 */class zR{constructor(){this.changes=new wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&mo(r.mutation,s,bt.empty(),$e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=Gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ji();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=po(),l=function(){return po()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof br)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),mo(f.mutation,h,f.mutation.getFieldMask(),$e.now())):o.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new BR(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=po();let s=new Re((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Sw();f.forEach(y=>{if(!i.has(y)){const A=bw(n.get(y),r.get(y));A!==null&&m.set(y,A),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_w(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Gr());let l=-1,u=i;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,se())).next(f=>({batchId:l,changes:Iw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Ji();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ji();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(m,y){return new _i(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=Ji();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&mo(f.mutation,h,bt.empty(),$e.now()),Du(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class WR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:vn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:FR(s.bundledQuery),readTime:vn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class HR{constructor(){this.overlays=new Re(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Gr(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Gr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Gr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mR(n,r));let i=this.Ir.get(n);i===void 0&&(i=se(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Uf{constructor(){this.Tr=new Je(Be.Er),this.dr=new Je(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Be(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ee([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ee([])),r=new Be(n,e),s=new Be(n,e+1);let i=se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class GR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(Be.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ce);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Be(new K(i),0);let l=new Je(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Be(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QR{constructor(e){this.Mr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||D1(b1(f),r)<=0||(s.has(f.key)||Du(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YR(this)}getSize(e){return M.resolve(this.size)}}class YR extends zR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class XR{constructor(e){this.persistence=e,this.Nr=new wi(n=>Of(n),Vf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Uf,this.targetCount=0,this.kr=ci.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ci(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class JR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pf(0),this.Kr=!1,this.Kr=!0,this.$r=new KR,this.referenceDelegate=e(this),this.Ur=new XR(this),this.indexManager=new UR,this.remoteDocumentCache=function(s){return new QR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new jR(n),this.Gr=new WR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new GR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new ZR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ZR extends V1{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Jr=new Uf,this.Yr=null}static Zr(e){return new $f(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=K.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class zf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zf(e,n.fromCache,r,s)}}/**
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
 */class tk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LA()?8:L1(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ek;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Wi()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Wi()<=ie.DEBUG&&H("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Wi()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):M.resolve())}Yi(e,n){if(fy(n))return M.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=dd(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,dd(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return fy(n)||s.isEqual(Z.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(Wi()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.rs(e,o,n,N1(s,-1)).next(l=>l))})}ts(e,n){let r=new Je(Ew(e));return n.forEach((s,i)=>{Du(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Wi()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ir.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class nk{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Re(ce),this._s=new wi(i=>Of(i),Vf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rk(t,e,n,r){return new nk(t,e,n,r)}async function qw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function sk(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let A=M.resolve();return y.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(b=>{const R=h.docVersions.get(P);fe(R!==null),b.version.compareTo(R)<0&&(m.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),f.addEntry(b)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ww(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ik(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=s.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let A=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(et.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(b,R,I){return b.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,A,f)&&l.push(n.Ur.updateTargetData(i,A))});let u=Bn(),h=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ok(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function ok(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function ak(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lk(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function yd(t,e,n){const r=ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!na(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Sy(t,e,n){const r=ee(t);let s=Z.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=ee(u),y=m._s.get(f);return y!==void 0?M.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,o,yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:se())).next(l=>(uk(r,eR(e),l),{documents:l,Ts:i})))}function uk(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Ay{constructor(){this.activeTargetIds=oR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ck{constructor(){this.so=new Ay,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ay,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xa=null;function Zc(){return Xa===null?Xa=function(){return 268435456+Math.round(2147483648*Math.random())}():Xa++,"0x"+Xa.toString(16)}/**
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
 */const ot="WebChannelConnection";class pk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Zc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw oi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=dk[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Zc();return new Promise((o,l)=>{const u=new rw;u.setWithCredentials(!0),u.listenOnce(sw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hl.NO_ERROR:const f=u.getResponseJson();H(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case hl.TIMEOUT:H(ot,`RPC '${e}' ${i} timed out`),l(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const m=u.getStatus();if(H(ot,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const P=function(R){const I=R.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(A.status);l(new B(P,A.message))}else l(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(V.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(ot,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);H(ot,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Zc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aw(),l=ow(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(ot,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,A=!1;const P=new fk({Io:R=>{A?H(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(y||(H(ot,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),H(ot,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},To:()=>m.close()}),b=(R,I,E)=>{R.listen(I,x=>{try{E(x)}catch(O){setTimeout(()=>{throw O},0)}})};return b(m,Xi.EventType.OPEN,()=>{A||(H(ot,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),b(m,Xi.EventType.CLOSE,()=>{A||(A=!0,H(ot,`RPC '${e}' stream ${s} transport closed`),P.So())}),b(m,Xi.EventType.ERROR,R=>{A||(A=!0,oi(ot,`RPC '${e}' stream ${s} transport errored:`,R),P.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),b(m,Xi.EventType.MESSAGE,R=>{var I;if(!A){const E=R.data[0];fe(!!E);const x=E,O=x.error||((I=x[0])===null||I===void 0?void 0:I.error);if(O){H(ot,`RPC '${e}' stream ${s} received error:`,O);const F=O.status;let L=function(_){const T=Le[_];if(T!==void 0)return Ow(T)}(F),v=O.message;L===void 0&&(L=V.INTERNAL,v="Unknown error status: "+F+" with message "+O.message),A=!0,P.So(new B(L,v)),m.close()}else H(ot,`RPC '${e}' stream ${s} received:`,E),P.bo(E)}}),b(l,iw.STAT_EVENT,R=>{R.stat===od.PROXY?H(ot,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===od.NOPROXY&&H(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function eh(){return typeof document<"u"?document:null}/**
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
 */function ju(t){return new SR(t,!0)}/**
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
 */class Hw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Kw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mk extends Kw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=CR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?vn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=gd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=cd(u)?{documents:PR(i,u)}:{query:NR(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Mw(i,o.resumeToken);const h=fd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=Xl(i,o.snapshotVersion.toTimestamp());const h=fd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=DR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=gd(this.serializer),n.removeTarget=e,this.a_(n)}}class gk extends Kw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kR(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=gd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.a_(n)}}/**
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
 */class yk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,pd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,pd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(zn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _k{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ps(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.L_.add(4),await ia(h),h.q_.set("Unknown"),h.L_.delete(4),await Fu(h)}(this))})}),this.q_=new vk(r,s)}}async function Fu(t){if(ps(t))for(const e of t.B_)await e(!0)}async function ia(t){for(const e of t.B_)await e(!1)}function Gw(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Hf(n)?Wf(n):Ei(n).r_()&&qf(n,e))}function Bf(t,e){const n=ee(t),r=Ei(n);n.N_.delete(e),r.r_()&&Qw(n,e),n.N_.size===0&&(r.r_()?r.o_():ps(n)&&n.q_.set("Unknown"))}function qf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ei(t).A_(e)}function Qw(t,e){t.Q_.xe(e),Ei(t).R_(e)}function Wf(t){t.Q_=new wR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ei(t).start(),t.q_.v_()}function Hf(t){return ps(t)&&!Ei(t).n_()&&t.N_.size>0}function ps(t){return ee(t).L_.size===0}function Yw(t){t.Q_=void 0}async function wk(t){t.q_.set("Online")}async function Ek(t){t.N_.forEach((e,n)=>{qf(t,e)})}async function Tk(t,e){Yw(t),Hf(t)?(t.q_.M_(e),Wf(t)):t.q_.set("Unknown")}async function Ik(t,e,n){if(t.q_.set("Online"),e instanceof Lw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof pl?t.Q_.Ke(e):e instanceof Vw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await Ww(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),Qw(i,u);const m=new lr(f.target,u,h,f.sequenceNumber);qf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!na(e))throw e;t.L_.add(1),await ia(t),t.q_.set("Offline"),n||(n=()=>Ww(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fu(t)})}function Xw(t,e){return e().catch(n=>Jl(t,n,e))}async function Uu(t){const e=ee(t),n=Ar(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Sk(e);)try{const s=await ak(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Ak(e,s)}catch(s){await Jl(e,s)}Jw(e)&&Zw(e)}function Sk(t){return ps(t)&&t.O_.length<10}function Ak(t,e){t.O_.push(e);const n=Ar(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Jw(t){return ps(t)&&!Ar(t).n_()&&t.O_.length>0}function Zw(t){Ar(t).start()}async function xk(t){Ar(t).p_()}async function Ck(t){const e=Ar(t);for(const n of t.O_)e.m_(n.mutations)}async function Rk(t,e,n){const r=t.O_.shift(),s=Mf.from(r,e,n);await Xw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Uu(t)}async function kk(t,e){e&&Ar(t).V_&&await async function(r,s){if(function(o){return yR(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();Ar(r).s_(),await Xw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Uu(r)}}(t,e),Jw(t)&&Zw(t)}async function Cy(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ps(n);n.L_.add(3),await ia(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fu(n)}async function Pk(t,e){const n=ee(t);e?(n.L_.delete(2),await Fu(n)):e||(n.L_.add(2),await ia(n),n.q_.set("Unknown"))}function Ei(t){return t.K_||(t.K_=function(n,r,s){const i=ee(n);return i.w_(),new mk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:wk.bind(null,t),Ro:Ek.bind(null,t),mo:Tk.bind(null,t),d_:Ik.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Hf(t)?Wf(t):t.q_.set("Unknown")):(await t.K_.stop(),Yw(t))})),t.K_}function Ar(t){return t.U_||(t.U_=function(n,r,s){const i=ee(n);return i.w_(),new gk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xk.bind(null,t),mo:kk.bind(null,t),f_:Ck.bind(null,t),g_:Rk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Uu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Kf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Kf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gf(t,e){if(zn("AsyncQueue",`${e}: ${t}`),na(t))return new B(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ji(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ry{constructor(){this.W_=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hi{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hi(e,n,Qs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Nk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bk{constructor(){this.queries=ky(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=ky(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function ky(){return new wi(t=>ww(t),bu)}async function Qf(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Nk,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Gf(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xf(n)}async function Yf(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Dk(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Xf(n)}function Ok(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xf(t){t.Y_.forEach(e=>{e.next()})}var vd,Py;(Py=vd||(vd={})).ea="default",Py.Cache="cache";class Jf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==vd.Cache}}/**
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
 */class eE{constructor(e){this.key=e}}class tE{constructor(e){this.key=e}}class Vk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=Ew(e),this.Ra=new Qs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ry,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const y=s.get(f),A=Du(this.query,m)?m:null,P=!!y&&this.mutatedKeys.has(y.key),b=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;y&&A?y.data.isEqual(A.data)?P!==b&&(r.track({type:3,doc:A}),R=!0):this.ga(y,A)||(r.track({type:2,doc:A}),R=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),R=!0):y&&!A&&(r.track({type:1,doc:y}),R=!0,(u||h)&&(l=!0)),R&&(A?(o=o.add(A),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,P){const b=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return b(A)-b(P)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new hi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ry,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new tE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new eE(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return hi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Lk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mk{constructor(e){this.key=e,this.va=!1}}class jk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new wi(l=>ww(l),bu),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(K.comparator),this.Na=new Map,this.La=new Uf,this.Ba={},this.ka=new Map,this.qa=ci.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Fk(t,e,n=!0){const r=aE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await nE(r,e,n,!0),s}async function Uk(t,e){const n=aE(t);await nE(n,e,!0,!1)}async function nE(t,e,n,r){const s=await lk(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $k(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Gw(t.remoteStore,s),l}async function $k(t,e,n,r,s){t.Ka=(m,y,A)=>async function(b,R,I,E){let x=R.view.ma(I);x.ns&&(x=await Sy(b.localStore,R.query,!1).then(({documents:v})=>R.view.ma(v,x)));const O=E&&E.targetChanges.get(R.targetId),F=E&&E.targetMismatches.get(R.targetId)!=null,L=R.view.applyChanges(x,b.isPrimaryClient,O,F);return by(b,R.targetId,L.wa),L.snapshot}(t,m,y,A);const i=await Sy(t.localStore,e,!0),o=new Vk(e,i.Ts),l=o.ma(i.documents),u=sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);by(t,n,h.wa);const f=new Lk(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function zk(t,e,n){const r=ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!bu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await yd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bf(r.remoteStore,s.targetId),_d(r,s.targetId)}).catch(ta)):(_d(r,s.targetId),await yd(r.localStore,s.targetId,!0))}async function Bk(t,e){const n=ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bf(n.remoteStore,r.targetId))}async function qk(t,e,n){const r=Xk(t);try{const s=await function(o,l){const u=ee(o),h=$e.now(),f=l.reduce((A,P)=>A.add(P.key),se());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Bn(),b=se();return u.cs.getEntries(A,f).next(R=>{P=R,P.forEach((I,E)=>{E.isValidDocument()||(b=b.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(R=>{m=R;const I=[];for(const E of l){const x=dR(E,m.get(E.key).overlayedDocument);x!=null&&I.push(new br(E.key,x,dw(x.value.mapValue),Vt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(R=>{y=R;const I=R.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(A,R.batchId,I)})}).then(()=>({batchId:y.batchId,changes:Iw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Re(ce)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await oa(r,s.changes),await Uu(r.remoteStore)}catch(s){const i=Gf(s,"Failed to persist write");n.reject(i)}}async function rE(t,e){const n=ee(t);try{const r=await ik(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?fe(o.va):s.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await oa(n,r,e)}catch(r){await ta(r)}}function Ny(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&Xf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wk(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Re(K.comparator);o=o.insert(i,ut.newNoDocument(i,Z.min()));const l=se().add(i),u=new Mu(Z.min(),new Map,new Re(ce),o,l);await rE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Zf(r)}else await yd(r.localStore,e,!1).then(()=>_d(r,e,n)).catch(ta)}async function Hk(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await sk(n.localStore,e);iE(n,r,null),sE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,s)}catch(s){await ta(s)}}async function Kk(t,e,n){const r=ee(t);try{const s=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(fe(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);iE(r,e,n),sE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,s)}catch(s){await ta(s)}}function sE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function iE(t,e,n){const r=ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function _d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||oE(t,r)})}function oE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Bf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Zf(t))}function by(t,e,n){for(const r of n)r instanceof eE?(t.La.addReference(r.key,e),Gk(t,r)):r instanceof tE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||oE(t,r.key)):J()}function Gk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Zf(t))}function Zf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new Mk(n)),t.Oa=t.Oa.insert(n,r),Gw(t.remoteStore,new lr(yn(Nu(n.path)),r,"TargetPurposeLimboResolution",Pf.oe))}}async function oa(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=zf.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,y=>M.forEach(y.$i,A=>f.persistence.referenceDelegate.addReference(m,y.targetId,A)).next(()=>M.forEach(y.Ui,A=>f.persistence.referenceDelegate.removeReference(m,y.targetId,A)))))}catch(m){if(!na(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const A=f.os.get(y),P=A.snapshotVersion,b=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,b)}}}(r.localStore,i))}async function Qk(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await qw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(V.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.hs)}}function Yk(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let s=se();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function aE(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wk.bind(null,e),e.Ca.d_=Dk.bind(null,e.eventManager),e.Ca.$a=Ok.bind(null,e.eventManager),e}function Xk(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kk.bind(null,e),e}class Zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ju(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rk(this.persistence,new tk,e.initialUser,this.serializer)}Ga(e){return new JR($f.Zr,this.serializer)}Wa(e){return new ck}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zl.provider={build:()=>new Zl};class wd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await Pk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bk}()}createDatastore(e){const n=ju(e.databaseInfo.databaseId),r=function(i){return new pk(i)}(e.databaseInfo);return function(i,o,l,u){return new yk(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new _k(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ny(this.syncEngine,n,0),function(){return xy.D()?new xy:new hk}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const m=new jk(s,i,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ee(s);H("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ia(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}wd.provider={build:()=>new wd};/**
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
 */class ep{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Jk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=uw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function th(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zk(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Cy(e.remoteStore,s)),t._onlineComponents=e}async function Zk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await th(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;oi("Error using user provided cache. Falling back to memory cache: "+n),await th(t,new Zl)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await th(t,new Zl);return t._offlineComponents}async function lE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Dy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Dy(t,new wd))),t._onlineComponents}function eP(t){return lE(t).then(e=>e.syncEngine)}async function eu(t){const e=await lE(t),n=e.eventManager;return n.onListen=Fk.bind(null,e.syncEngine),n.onUnlisten=zk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Uk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Bk.bind(null,e.syncEngine),n}function tP(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new ep({next:y=>{f.Za(),o.enqueueAndForget(()=>Yf(i,m));const A=y.docs.has(l);!A&&y.fromCache?h.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&u&&u.source==="server"?h.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Jf(Nu(l.path),f,{includeMetadataChanges:!0,_a:!0});return Qf(i,m)}(await eu(t),t.asyncQueue,e,n,r)),r.promise}function nP(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new ep({next:y=>{f.Za(),o.enqueueAndForget(()=>Yf(i,m)),y.fromCache&&u.source==="server"?h.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Jf(l,f,{includeMetadataChanges:!0,_a:!0});return Qf(i,m)}(await eu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function uE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Oy=new Map;/**
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
 */function cE(t,e,n){if(!n)throw new B(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rP(t,e,n,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vy(t){if(!K.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ly(t){if(K.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$u(t);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class My{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new My({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new My(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T1;switch(r.type){case"firstParty":return new x1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Oy.delete(n),r.terminate())}(this),Promise.resolve()}}function sP(t,e,n,r={}){var s;const i=(t=Ht(t,zu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=at.MOCK_USER;else{l=PA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(h)}t._authCredentials=new I1(new lw(l,u))}}/**
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
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class _r extends Dr{constructor(e,n,r){super(e,n,Nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new K(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function In(t,e,...n){if(t=ze(t),cE("collection","path",e),t instanceof zu){const r=Ee.fromString(e,...n);return Ly(r),new _r(t,null,r)}{if(!(t instanceof yt||t instanceof _r))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Ly(r),new _r(t.firestore,null,r)}}function me(t,e,...n){if(t=ze(t),arguments.length===1&&(e=uw.newId()),cE("doc","path",e),t instanceof zu){const r=Ee.fromString(e,...n);return Vy(r),new yt(t,null,new K(r))}{if(!(t instanceof yt||t instanceof _r))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Vy(r),new yt(t.firestore,t instanceof _r?t.converter:null,new K(r))}}/**
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
 */class jy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hw(this,"async_queue_retry"),this.Vu=()=>{const r=eh();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=eh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ln;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!na(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Kf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Fy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xr extends zu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jy(e),this._firestoreClient=void 0,await e}}}function iP(t,e){const n=typeof t=="object"?t:If(),r=typeof t=="string"?t:"(default)",s=ds(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=RA("firestore");i&&sP(s,...i)}return s}function aa(t){if(t._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oP(t),t._firestoreClient}function oP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new F1(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,uE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Jk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new di(et.fromBase64String(e))}catch(n){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new di(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class la{constructor(e){this._methodName=e}}/**
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
 */class tp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class np{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const aP=/^__.*__$/;class lP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class hE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class rp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return tu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(dE(this.Cu)&&aP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ju(e)}Qu(e,n,r,s=!1){return new rp({Cu:e,methodName:n,qu:r,path:Ye.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sp(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new uP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);ap("Data must be an object, but it was:",o,r);const l=pE(r,o);let u,h;if(i.merge)u=new bt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const y=Ed(e,m,n);if(!o.contains(y))throw new B(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);gE(f,y)||f.push(y)}u=new bt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new lP(new Tt(l),u,h)}class qu extends la{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qu}}class ip extends la{_toFieldTransform(e){return new Nw(e.path,new Bo)}isEqual(e){return e instanceof ip}}class op extends la{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Ho(e.serializer,xw(e.serializer,this.$u));return new Nw(e.path,n)}isEqual(e){return e instanceof op&&this.$u===e.$u}}function cP(t,e,n,r){const s=t.Qu(1,e,n);ap("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();fs(r,(u,h)=>{const f=lp(e,u,n);h=ze(h);const m=s.Nu(f);if(h instanceof qu)i.push(f);else{const y=ua(h,m);y!=null&&(i.push(f),o.set(f,y))}});const l=new bt(i);return new hE(o,l,s.fieldTransforms)}function hP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Ed(e,r,n)],u=[s];if(i.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(Ed(e,i[y])),u.push(i[y+1]);const h=[],f=Tt.empty();for(let y=l.length-1;y>=0;--y)if(!gE(h,l[y])){const A=l[y];let P=u[y];P=ze(P);const b=o.Nu(A);if(P instanceof qu)h.push(A);else{const R=ua(P,b);R!=null&&(h.push(A),f.set(A,R))}}const m=new bt(h);return new hE(f,m,o.fieldTransforms)}function dP(t,e,n,r=!1){return ua(n,t.Qu(r?4:3,e))}function ua(t,e){if(mE(t=ze(t)))return ap("Unsupported field value:",e,t),pE(t,e);if(t instanceof la)return function(r,s){if(!dE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=ua(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:Xl(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(s.serializer,i)}}if(r instanceof tp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof di)return{bytesValue:Mw(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ff(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof np)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Lf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${$u(r)}`)}(t,e)}function pE(t,e){const n={};return cw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,s)=>{const i=ua(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function mE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof tp||t instanceof di||t instanceof yt||t instanceof la||t instanceof np)}function ap(t,e,n){if(!mE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=$u(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ed(t,e,n){if((e=ze(e))instanceof Bu)return e._internalPath;if(typeof e=="string")return lp(t,e);throw tu("Field path arguments must be of type string or ",t,!1,void 0,n)}const fP=new RegExp("[~\\*/\\[\\]]");function lp(t,e,n){if(e.search(fP)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bu(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new B(V.INVALID_ARGUMENT,l+t+u)}function gE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(up("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pP extends yE{data(){return super.data()}}function up(t,e){return typeof e=="string"?lp(t,e):e instanceof Bu?e._internalPath:e._delegate._internalPath}/**
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
 */function vE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cp{}class _E extends cp{}function Or(t,e,...n){let r=[];e instanceof cp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof dp).length,l=i.filter(u=>u instanceof hp).length;if(o>1||o>0&&l>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class hp extends _E{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hp(e,n,r)}_apply(e){const n=this._parse(e);return wE(e._query,n),new Dr(e.firestore,e.converter,hd(e._query,n))}_parse(e){const n=sp(e.firestore);return function(i,o,l,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$y(m,f);const A=[];for(const P of m)A.push(Uy(u,i,P));y={arrayValue:{values:A}}}else y=Uy(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$y(m,f),y=dP(l,o,m,f==="in"||f==="not-in");return je.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class dp extends cp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)wE(o,u),o=hd(o,u)}(e._query,n),new Dr(e.firestore,e.converter,hd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fp extends _E{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zo(i,o)}(e._query,this._field,this._direction);return new Dr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new _i(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ms(t,e="asc"){const n=e,r=up("orderBy",t);return fp._create(r,n)}function Uy(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_w(e)&&n.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!K.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ay(t,new K(r))}if(n instanceof yt)return ay(t,n._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$u(n)}.`)}function $y(t,e){if(!Array.isArray(t)||t.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mP{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Oe(o.doubleValue));return new np(i)}convertGeoPoint(e){return new tp(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);fe(Bw(r));const s=new Uo(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function EE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TE extends yE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(up("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends TE{data(e={}){return super.data(e)}}class IE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new eo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new ml(s._firestore,s._userDataWriter,l.doc.key,l.doc,new eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ml(s._firestore,s._userDataWriter,l.doc.key,l.doc,new eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:gP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function Wu(t){t=Ht(t,yt);const e=Ht(t.firestore,xr);return tP(aa(e),t._key).then(n=>SE(e,t,n))}class pp extends mP{constructor(e){super(),this.firestore=e}convertBytes(e){return new di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function Ti(t){t=Ht(t,Dr);const e=Ht(t.firestore,xr),n=aa(e),r=new pp(e);return vE(t._query),nP(n,t._query).then(s=>new IE(e,r,t,s))}function vt(t,e,n){t=Ht(t,yt);const r=Ht(t.firestore,xr),s=EE(t.converter,e,n);return gp(r,[fE(sp(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Vt.none())])}function mp(t){return gp(Ht(t.firestore,xr),[new Lu(t._key,Vt.none())])}function Hu(t,...e){var n,r,s;t=ze(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Fy(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,f;if(t instanceof yt)h=Ht(t.firestore,xr),f=Nu(t._key.path),u={next:m=>{e[o]&&e[o](SE(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ht(t,Dr);h=Ht(m.firestore,xr),f=m._query;const y=new pp(h);u={next:A=>{e[o]&&e[o](new IE(h,y,m,A))},error:e[o+1],complete:e[o+2]},vE(t._query)}return function(y,A,P,b){const R=new ep(b),I=new Jf(A,R,P);return y.asyncQueue.enqueueAndForget(async()=>Qf(await eu(y),I)),()=>{R.Za(),y.asyncQueue.enqueueAndForget(async()=>Yf(await eu(y),I))}}(aa(h),f,l,u)}function gp(t,e){return function(r,s){const i=new Ln;return r.asyncQueue.enqueueAndForget(async()=>qk(await eP(r),s,i)),i.promise}(aa(t),e)}function SE(t,e,n){const r=n.docs.get(e._key),s=new pp(t);return new TE(t,s,e._key,r,new eo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class yP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=sp(e)}set(e,n,r){this._verifyNotCommitted();const s=nh(e,this._firestore),i=EE(s.converter,n,r),o=fE(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Vt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=nh(e,this._firestore);let o;return o=typeof(n=ze(n))=="string"||n instanceof Bu?hP(this._dataReader,"WriteBatch.update",i._key,n,r,s):cP(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=nh(e,this._firestore);return this._mutations=this._mutations.concat(new Lu(n._key,Vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function nh(t,e){if((t=ze(t)).firestore!==e)throw new B(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function fi(){return new ip("serverTimestamp")}function vP(t){return new op("increment",t)}/**
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
 */function ca(t){return aa(t=Ht(t,xr)),new yP(t,e=>gp(t,e))}(function(e,n=!0){(function(s){vi=s})(yi),En(new ln("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xr(new S1(r.getProvider("auth-internal")),new R1(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Wt(ny,"4.7.3",e),Wt(ny,"4.7.3","esm2017")})();function yp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function AE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _P=AE,xE=new hs("auth","Firebase",AE());/**
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
 */const nu=new Cu("@firebase/auth");function wP(t,...e){nu.logLevel<=ie.WARN&&nu.warn(`Auth (${yi}): ${t}`,...e)}function gl(t,...e){nu.logLevel<=ie.ERROR&&nu.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function qn(t,...e){throw vp(t,...e)}function _n(t,...e){return vp(t,...e)}function CE(t,e,n){const r=Object.assign(Object.assign({},_P()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return CE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xE.create(t,...e)}function X(t,e,...n){if(!t)throw vp(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gl(e),new Error(e)}function Wn(t,e){t||bn(e)}/**
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
 */function Td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EP(){return zy()==="http:"||zy()==="https:"}function zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EP()||A0()||"connection"in navigator)?navigator.onLine:!0}function IP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=NA()||OA()}get(){return TP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _p(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AP=new ha(3e4,6e4);function Ku(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ii(t,e,n,r,s={}){return kE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return DA()||(h.referrerPolicy="no-referrer"),RE.fetch()(NE(t,t.config.apiHost,n,l),h)})}async function kE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SP),e);try{const s=new xP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ja(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw CE(t,f,h);qn(t,f)}}catch(s){if(s instanceof cn)throw s;qn(t,"network-request-failed",{message:String(s)})}}async function PE(t,e,n,r,s={}){const i=await Ii(t,e,n,r,s);return"mfaPendingCredential"in i&&qn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function NE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_p(t.config,s):`${t.config.apiScheme}://${s}`}class xP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),AP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function CP(t,e){return Ii(t,"POST","/v1/accounts:delete",e)}async function bE(t,e){return Ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RP(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=wp(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:go(rh(s.auth_time)),issuedAtTime:go(rh(s.iat)),expirationTime:go(rh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gl("JWT malformed, contained fewer than 3 sections"),null;try{const s=E0(n);return s?JSON.parse(s):(gl("Failed to decode base64 JWT payload"),null)}catch(s){return gl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function By(t){const e=wp(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&kP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Id{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ru(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ko(t,bE(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DE(i.providerUserInfo):[],l=bP(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Id(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function NP(t){const e=ze(t);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=yp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function DP(t,e){const n=await kE(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=NE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OP(t,e){return Ii(t,"POST","/v2/accounts:revokeToken",Ku(t,e))}/**
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
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):By(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=By(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await DP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ys;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Xn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Id(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RP(this,e)}reload(){return NP(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await Ko(this,CP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:O,isAnonymous:F,providerData:L,stsTokenManager:v}=n;X(x&&v,e,"internal-error");const g=Ys.fromJSON(this.name,v);X(typeof x=="string",e,"internal-error"),Xn(m,e.name),Xn(y,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof F=="boolean",e,"internal-error"),Xn(A,e.name),Xn(P,e.name),Xn(b,e.name),Xn(R,e.name),Xn(I,e.name),Xn(E,e.name);const _=new Dn({uid:x,auth:e,email:y,emailVerified:O,displayName:m,isAnonymous:F,photoURL:P,phoneNumber:A,tenantId:b,stsTokenManager:g,createdAt:I,lastLoginAt:E});return L&&Array.isArray(L)&&(_.providerData=L.map(T=>Object.assign({},T))),R&&(_._redirectEventId=R),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ys;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ru(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?DE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ys;l.updateFromIdToken(r);const u=new Dn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Id(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const qy=new Map;function On(t){Wn(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
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
 */class OE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OE.type="NONE";const Wy=OE;/**
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
 */function yl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yl(this.userKey,s.apiKey,i),this.fullPersistenceKey=yl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(On(Wy),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||On(Wy);const o=yl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=Dn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Xs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Xs(i,e,r))}}/**
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
 */function Hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UE(e))return"Blackberry";if($E(e))return"Webos";if(LE(e))return"Safari";if((e.includes("chrome/")||ME(e))&&!e.includes("edge/"))return"Chrome";if(FE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VE(t=ht()){return/firefox\//i.test(t)}function LE(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ME(t=ht()){return/crios\//i.test(t)}function jE(t=ht()){return/iemobile/i.test(t)}function FE(t=ht()){return/android/i.test(t)}function UE(t=ht()){return/blackberry/i.test(t)}function $E(t=ht()){return/webos/i.test(t)}function Ep(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VP(t=ht()){var e;return Ep(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LP(){return VA()&&document.documentMode===10}function zE(t=ht()){return Ep(t)||FE(t)||$E(t)||UE(t)||/windows phone/i.test(t)||jE(t)}/**
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
 */function BE(t,e=[]){let n;switch(t){case"Browser":n=Hy(ht());break;case"Worker":n=`${Hy(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */async function jP(t,e={}){return Ii(t,"GET","/v2/passwordPolicy",Ku(t,e))}/**
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
 */class $P{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ky(this),this.idTokenSubscription=new Ky(this),this.beforeStateQueue=new MP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bE(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(wr(this));const n=e?ze(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jP(this),n=new UP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gu(t){return ze(t)}class Ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=zA(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zP(t){Tp=t}function BP(t){return Tp.loadJS(t)}function qP(){return Tp.gapiScript}function WP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function HP(t,e){const n=ds(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Lo(i,e??{}))return s;qn(s,"already-initialized")}return n.initialize({options:e})}function KP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GP(t,e,n){const r=Gu(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qE(e),{host:o,port:l}=QP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),YP()}function qE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QP(t){const e=qE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gy(o)}}}function Gy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class WE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
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
 */async function Js(t,e){return PE(t,"POST","/v1/accounts:signInWithIdp",Ku(t,e))}/**
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
 */const XP="http://localhost";class ls extends WE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ls(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:XP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
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
 */class HE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class da extends HE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends da{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class sr extends da{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class ir extends da{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */async function JP(t,e){return PE(t,"POST","/v1/accounts:signUp",Ku(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=Qy(r);return new Cr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qy(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function ZP(t){var e;if(Nn(t.app))return Promise.reject(wr(t));const n=Gu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Cr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await JP(n,{returnSecureToken:!0}),s=await Cr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class su extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,su.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new su(e,n,r,s)}}function KE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?su._fromErrorAndOperation(t,i,e,r):i})}async function eN(t,e,n=!1){const r=await Ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function tN(t,e,n=!1){const{auth:r}=t;if(Nn(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await Ko(t,KE(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=wp(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),i}}/**
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
 */async function nN(t,e,n=!1){if(Nn(t.app))return Promise.reject(wr(t));const r="signIn",s=await KE(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function rN(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function sN(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}const iu="__sak";/**
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
 */class GE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iN=1e3,oN=10;class QE extends GE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QE.type="LOCAL";const aN=QE;/**
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
 */class YE extends GE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YE.type="SESSION";const XE=YE;/**
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
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await lN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
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
 */function Ip(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Ip("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function cN(t){wn().location.href=t}/**
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
 */function JE(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function hN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fN(){return JE()?self:null}/**
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
 */const ZE="firebaseLocalStorageDb",pN=1,ou="firebaseLocalStorage",eT="fbase_key";class fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yu(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function mN(){const t=indexedDB.deleteDatabase(ZE);return new fa(t).toPromise()}function Sd(){const t=indexedDB.open(ZE,pN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:eT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await mN(),e(await Sd()))})})}async function Yy(t,e,n){const r=Yu(t,!0).put({[eT]:e,value:n});return new fa(r).toPromise()}async function gN(t,e){const n=Yu(t,!1).get(e),r=await new fa(n).toPromise();return r===void 0?null:r.value}function Xy(t,e){const n=Yu(t,!0).delete(e);return new fa(n).toPromise()}const yN=800,vN=3;class tT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(fN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hN(),!this.activeServiceWorker)return;this.sender=new uN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sd();return await Yy(e,iu,"1"),await Xy(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yu(s,!1).getAll();return new fa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tT.type="LOCAL";const _N=tT;new ha(3e4,6e4);/**
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
 */function wN(t,e){return e?On(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sp extends WE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EN(t){return nN(t.auth,new Sp(t),t.bypassAuthState)}function TN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),tN(n,new Sp(t),t.bypassAuthState)}async function IN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),eN(n,new Sp(t),t.bypassAuthState)}/**
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
 */class nT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EN;case"linkViaPopup":case"linkViaRedirect":return IN;case"reauthViaPopup":case"reauthViaRedirect":return TN;default:qn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SN=new ha(2e3,1e4);class zs extends nT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SN.get())};e()}}zs.currentPopupAction=null;/**
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
 */const AN="pendingRedirect",vl=new Map;class xN extends nT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vl.get(this.auth._key());if(!e){try{const r=await CN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vl.set(this.auth._key(),e)}return this.bypassAuthState||vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CN(t,e){const n=PN(e),r=kN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RN(t,e){vl.set(t._key(),e)}function kN(t){return On(t._redirectPersistence)}function PN(t){return yl(AN,t.config.apiKey,t.name)}async function NN(t,e,n=!1){if(Nn(t.app))return Promise.reject(wr(t));const r=Gu(t),s=wN(r,e),o=await new xN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const bN=10*60*1e3;class DN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ON(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jy(e))}saveEventToCache(e){this.cachedEventUids.add(Jy(e)),this.lastProcessedEventTime=Date.now()}}function Jy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ON(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rT(t);default:return!1}}/**
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
 */async function VN(t,e={}){return Ii(t,"GET","/v1/projects",e)}/**
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
 */const LN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MN=/^https?/;async function jN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VN(t);for(const n of e)try{if(FN(n))return}catch{}qn(t,"unauthorized-domain")}function FN(t){const e=Td(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MN.test(n))return!1;if(LN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const UN=new ha(3e4,6e4);function Zy(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $N(t){return new Promise((e,n)=>{var r,s,i;function o(){Zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zy(),n(_n(t,"network-request-failed"))},timeout:UN.get()})}if(!((s=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const l=WP("iframefcb");return wn()[l]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},BP(`${qP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw _l=null,e})}let _l=null;function zN(t){return _l=_l||$N(t),_l}/**
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
 */const BN=new ha(5e3,15e3),qN="__/auth/iframe",WN="emulator/auth/iframe",HN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_p(e,WN):`https://${t.config.authDomain}/${qN}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=KN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ea(r).slice(1)}`}async function QN(t){const e=await zN(t),n=wn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:GN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=wn().setTimeout(()=>{i(o)},BN.get());function u(){wn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const YN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XN=500,JN=600,ZN="_blank",eb="http://localhost";class ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tb(t,e,n,r=XN,s=JN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},YN),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ht().toLowerCase();n&&(l=ME(h)?ZN:n),VE(h)&&(e=e||eb,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[A,P])=>`${y}${A}=${P},`,"");if(VP(h)&&l!=="_self")return nb(e||"",l),new ev(null);const m=window.open(e||"",l,f);X(m,t,"popup-blocked");try{m.focus()}catch{}return new ev(m)}function nb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rb="__/auth/handler",sb="emulator/auth/handler",ib=encodeURIComponent("fac");async function tv(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof HE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$A(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof da){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${ib}=${encodeURIComponent(u)}`:"";return`${ob(t)}?${ea(l).slice(1)}${h}`}function ob({config:t}){return t.emulator?_p(t,sb):`https://${t.authDomain}/${rb}`}/**
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
 */const sh="webStorageSupport";class ab{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XE,this._completeRedirectFn=NN,this._overrideRedirectResult=RN}async _openPopup(e,n,r,s){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tv(e,n,r,Td(),s);return tb(e,o,Ip())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tv(e,n,r,Td(),s);return cN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QN(e),r=new DN(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sh,{type:sh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sh];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zE()||LE()||Ep()}}const lb=ab;var nv="@firebase/auth",rv="1.7.9";/**
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
 */class ub{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hb(t){En(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BE(t)},h=new $P(r,s,i,u);return KP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new ln("auth-internal",e=>{const n=Gu(e.getProvider("auth").getImmediate());return(r=>new ub(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(nv,rv,cb(t)),Wt(nv,rv,"esm2017")}/**
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
 */const db=5*60,fb=S0("authIdTokenMaxAge")||db;let sv=null;const pb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fb)return;const s=n==null?void 0:n.token;sv!==s&&(sv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mb(t=If()){const e=ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HP(t,{popupRedirectResolver:lb,persistence:[_N,aN,XE]}),r=S0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pb(i.toString());sN(n,o,()=>o(n.currentUser)),rN(n,l=>o(l))}}const s=T0("auth");return s&&GP(n,`http://${s}`),n}function gb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hb("Browser");const Hi={apiKey:"AIzaSyDY7s5xKop_oD1udFptnCVx7UwZfEsX0og",authDomain:"shararadocforge.firebaseapp.com",projectId:"shararadocforge",storageBucket:"shararadocforge.firebasestorage.app",messagingSenderId:"69588921017",appId:"1:69588921017:web:5c8446d1863d4964360968",measurementId:"G-B80JCHME86"};let q=null,yo=null,De=!1;try{if(Hi.apiKey&&Hi.apiKey!=="YOUR_API_KEY"&&Hi.projectId&&Hi.projectId!=="YOUR_PROJECT_ID"){const e=N0(Hi);q=iP(e);try{yo=mb(e)}catch{yo=null}De=!0;try{v1(e)}catch{}}}catch{De=!1}const Mt="documents",Ap="counters/documents",yb="backups",sT="sharara_local_archive";function gs(){try{const t=localStorage.getItem(sT);return t?JSON.parse(t):[]}catch{return[]}}function ys(t){try{localStorage.setItem(sT,JSON.stringify(t))}catch{}}function be(t,e=15e3,n="Firebase"){return Promise.race([t,new Promise((r,s)=>setTimeout(()=>s(new Error(`timeout waiting for ${n} (${e}ms)`)),e))])}function Qt(t,e){const n=t&&t.code;return n==="permission-denied"?`חסרת הרשאה ל-${e}. ודא שהחוקים (Security Rules) מאפשרים קריאה/כתיבה למשתמש מחובר.`:n==="unauthenticated"?"לא מחובר ל-Firebase. ודא שהזדהות אנונימית מופעלת.":n==="failed-precondition"?`שגיאת תצורה ב-Firebase (ייתכן חסר אינדקס או שהמסד לא הופעל): ${t.message}`:n==="unavailable"?"שירות Firebase אינו זמין כרגע (רשת/אזור). נסה שוב מאוחר יותר.":t&&t.message||`שגיאה ב-${e}`}async function ke(){if(!(!De||!q)&&yo&&!yo.currentUser)try{await be(ZP(yo),15e3,"Firebase Auth")}catch(t){throw new Error("הזדהות מול Firebase נכשלה: "+(t&&t.message?t.message:"ודא שאימות אנונימי מופעל בקונסולה"))}}function iv(t){if(t==null)return null;if(typeof t=="object"&&typeof t.seconds=="number")return new Date(t.seconds*1e3).toISOString();if(t instanceof Date)return t.toISOString();const e=new Date(t);return isNaN(e.getTime())?null:e.toISOString()}function au(t,e,n){if(!t||typeof t!="object")return{id:e,source:n||"unknown",items:[]};const r=Array.isArray(t.items)?t.items.map(s=>{const i=s&&typeof s=="object"?s:{},o=i.quantity!==void 0&&i.quantity!==null&&i.quantity!=="";return{id:i.id?String(i.id):crypto.randomUUID(),description:i.description!=null?String(i.description):"",unit:i.unit?String(i.unit):"יח'",quantity:o?Number(i.quantity)||0:1,unitPrice:Number(i.unitPrice)||0}}):[];return{id:e,docId:t.docId||e,source:n||"firebase",docType:t.docType||"quote",customDocType:t.customDocType||"",useCustomDocType:!!t.useCustomDocType,serialNumber:t.serialNumber!=null?String(t.serialNumber):"",clientName:t.clientName||"",projectName:t.projectName||"",contactPerson:t.contactPerson||"",contactPhone:t.contactPhone||"",contactFax:t.contactFax||"",date:t.date||"",vatRate:t.vatRate!=null?Number(t.vatRate):18,customVat:t.customVat||"",notes:t.notes||"",simpleLayout:!!t.simpleLayout,items:r,status:t.status||"active",companySnapshot:t.companySnapshot||null,createdAt:iv(t.createdAt),updatedAt:iv(t.updatedAt)}}async function vb(t){if(!De||!q)return null;const e=t,n=me(q,Ap);try{const r=await be(Wu(n),1e4,"Firestore counter read");return r.exists()?(r.data()[e]||0)+1:1}catch(r){return console.warn("Firestore serial read failed:",r),null}}async function _b(t,e=null){if(De&&q){await ke();const i=me(In(q,Mt)).id,o=me(q,Mt,i),l=await vb(t.docType||"quote"),u=l!==null?String(l):t.serialNumber||"";try{await be(vt(o,{...t,serialNumber:u,companySnapshot:e,status:"active",docId:i,createdAt:fi(),updatedAt:fi()}),15e3,"Firestore")}catch(h){throw new Error(Qt(h,"שמירת מסמך"))}return{id:i,serial:u,source:"firebase"}}const n=gs(),r="local_"+Date.now()+"_"+crypto.randomUUID().slice(0,8),s={...t,id:r,docId:r,status:"active",companySnapshot:e,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),source:"local"};return n.unshift(s),ys(n),{id:r,serial:s.serialNumber,source:"local"}}async function wb(t,e){if(De&&q&&!String(t).startsWith("local_")){await ke();const s=me(q,Mt,t);return await be(vt(s,{...e,docId:t,updatedAt:fi()},{merge:!0})),t}const n=gs(),r=n.findIndex(s=>s.id===t);return r!==-1&&(n[r]={...n[r],...e,updatedAt:new Date().toISOString()},ys(n)),t}async function Go(t=!1){if(De&&q){await ke();const n=Or(In(q,Mt),ms("createdAt","desc"));let r;try{r=await be(Ti(n),15e3,"Firestore")}catch(i){throw new Error(Qt(i,"טעינת הארכיון"))}const s=r.docs.map(i=>au(i.data(),i.id,"firebase"));return t?s:s.filter(i=>i.status!=="deleted")}const e=gs().map(n=>au(n,n.id,"local")).sort((n,r)=>{const s=n.createdAt?new Date(n.createdAt).getTime():0;return(r.createdAt?new Date(r.createdAt).getTime():0)-s});return t?e:e.filter(n=>n.status!=="deleted")}async function Eb(t){if(De&&q&&!String(t).startsWith("local_")){await ke();const r=me(q,Mt,t);try{await be(vt(r,{status:"deleted",updatedAt:fi()},{merge:!0}),15e3,"Firestore");return}catch(s){throw new Error(Qt(s,"מחיקת מסמך"))}}const e=gs(),n=e.findIndex(r=>r.id===t);n!==-1&&(e[n].status="deleted",e[n].updatedAt=new Date().toISOString(),ys(e))}async function Tb(t){if(De&&q&&!String(t).startsWith("local_")){await ke();const r=me(q,Mt,t);try{await be(vt(r,{status:"active",updatedAt:fi()},{merge:!0}),15e3,"Firestore");return}catch(s){throw new Error(Qt(s,"שחזור מסמך"))}}const e=gs(),n=e.findIndex(r=>r.id===t);n!==-1&&(e[n].status="active",e[n].updatedAt=new Date().toISOString(),ys(e))}async function Ib(t,e){if(!De||!q)throw new Error("גיבוי לענן זמין רק כשחיבור Firebase פעיל");await ke();const n=me(q,yb,t);await be(vt(n,{exportedAt:fi(),backupDate:t,documents:e,totalDocuments:e.length}),3e4,"Firestore backup")}async function Sb(){if(!De||!q){ys([]);return}await ke();const t=Or(In(q,Mt),ms("createdAt")),e=await be(Ti(t),6e4,"Firestore fetch for reset"),n=ca(q);e.docs.forEach(s=>{n.delete(me(q,Mt,s.id))}),await n.commit();const r=me(q,Ap);try{await vt(r,{quote:0,work_order:0,agreement:0})}catch{}}async function Ab(){const t={firebase:0,local:0};if(De&&q){await ke();const r=Or(In(q,Mt),ms("createdAt")),s=await be(Ti(r),6e4,"Firestore fetch for purge"),i=ca(q);s.docs.forEach(o=>{o.data().status==="deleted"&&(i.delete(me(q,Mt,o.id)),t.firebase++)}),t.firebase>0&&await i.commit()}const e=gs(),n=e.filter(r=>r.status!=="deleted");return t.local=e.length-n.length,t.local>0&&ys(n),t}async function xb(){const t={};if(De&&q){await ke();const s=Or(In(q,Mt),ms("createdAt")),i=await be(Ti(s),6e4,"Firestore fetch for renumber"),o={};i.docs.forEach(h=>{const f=h.data();if(f.status==="deleted")return;const m=f.useCustomDocType?f.customDocType:f.docType||"quote";o[m]||(o[m]=[]),o[m].push({id:h.id,data:f})});for(const[h,f]of Object.entries(o)){f.sort((y,A)=>{var R,I,E,x;const P=y.data.createdAt?new Date(((I=(R=y.data.createdAt)==null?void 0:R.toMillis)==null?void 0:I.call(R))||y.data.createdAt).getTime():0,b=A.data.createdAt?new Date(((x=(E=A.data.createdAt)==null?void 0:E.toMillis)==null?void 0:x.call(E))||A.data.createdAt).getTime():0;return P-b});const m=ca(q);f.forEach((y,A)=>{const P=String(A+1);m.update(me(q,Mt,y.id),{serialNumber:P})}),await m.commit(),t[h]=f.length}const l=me(q,Ap),u={};for(const h of Object.keys(t))u[h]=t[h];await vt(l,u,{merge:!0})}const e=gs(),n=e.filter(s=>s.status!=="deleted"),r={};n.forEach(s=>{const i=s.useCustomDocType?s.customDocType:s.docType||"quote";r[i]||(r[i]=[]),r[i].push(s)});for(const[s,i]of Object.entries(r))i.sort((o,l)=>{const u=o.createdAt?new Date(o.createdAt).getTime():0,h=l.createdAt?new Date(l.createdAt).getTime():0;return u-h}),i.forEach((o,l)=>{o.serialNumber=String(l+1)}),t[s]=(t[s]||0)+i.length;return ys(e),t}const St="customers",Rr="projects";async function iT(t){if(!(!De||!q)){await ke();try{await be(vt(me(q,St,t),{name:t}),15e3,"Firestore")}catch(e){throw new Error(Qt(e,"הוספת לקוח"))}}}async function oT(t,e){if(!(!De||!q)){if(!e)throw new Error("יש לבחור לקוח לפני הוספת פרויקט");await ke();try{const n=me(q,St,e,Rr,t);await be(vt(n,{name:t}),15e3,"Firestore")}catch(n){throw new Error(Qt(n,"הוספת פרויקט"))}}}async function Cb(t){if(!(!De||!q)){await ke();try{await be(mp(me(q,St,t)),15e3,"Firestore")}catch(e){throw new Error(Qt(e,"מחיקת לקוח"))}}}async function Rb(t,e){if(!(!De||!q)){if(!e)throw new Error("יש לבחור לקוח");await ke();try{const n=me(q,St,e,Rr,t);await be(mp(n),15e3,"Firestore")}catch(n){throw new Error(Qt(n,"מחיקת פרויקט"))}}}async function kb(t,e){if(!(!De||!q)&&!(!t||!e||t===e)){await ke();try{const n=me(q,St,t),r=me(q,St,e),s=await be(Wu(n),15e3,"Firestore");s.exists()&&await be(vt(r,{name:e,phone:s.data().phone||"",fax:s.data().fax||""},{merge:!0}),15e3,"Firestore");const i=In(q,St,t,Rr),o=await be(Ti(i),15e3,"Firestore"),l=ca(q);o.docs.forEach(u=>{l.set(me(q,St,e,Rr,u.id),u.data()),l.delete(u.ref)}),l.delete(n),await l.commit()}catch(n){throw new Error(Qt(n,"שינוי שם לקוח"))}}}async function Pb(t,e,n){if(!(!De||!q)&&!(!t||!e||t===e||!n)){await ke();try{const r=me(q,St,n,Rr,t),s=me(q,St,n,Rr,e);(await be(Wu(r),15e3,"Firestore")).exists()&&(await be(vt(s,{name:e},{merge:!0}),15e3,"Firestore"),await be(mp(r),15e3,"Firestore"))}catch(r){throw new Error(Qt(r,"שינוי שם פרויקט"))}}}async function Nb(){if(!De||!q)return{customers:0,projects:0};await ke();const t=await be(Ti(Or(In(q,Mt))),6e4,"Firestore migration scan"),e=new Map;if(t.docs.forEach(s=>{const i=s.data();if(i.status==="deleted")return;const o=i.clientName&&typeof i.clientName=="string"?i.clientName.trim():"",l=i.projectName&&typeof i.projectName=="string"?i.projectName.trim():"";o&&(e.has(o)||e.set(o,new Set),l&&e.get(o).add(l))}),e.size===0)return{customers:0,projects:0};const n=[];e.forEach((s,i)=>{n.push({type:"set",ref:me(q,St,i),data:{name:i}}),s.forEach(o=>{const l=me(q,St,i,Rr,o);n.push({type:"set",ref:l,data:{name:o}})})});for(let s=0;s<n.length;s+=500){const i=n.slice(s,s+500),o=ca(q);i.forEach(l=>o.set(l.ref,l.data,{merge:!0})),await o.commit()}let r=0;return e.forEach(s=>{r+=s.size}),{customers:e.size,projects:r}}function Xu(){return De&&q?Promise.resolve():new Promise(t=>{const e=()=>{De&&q?t():setTimeout(e,100)};e()})}let ih=!1;function aT(t){let e=()=>{},n=!1;return(async()=>{if(await Xu(),n)return;try{await ke()}catch{t([]);return}if(n||!q){t([]);return}try{ih||(await Nb(),ih=!0)}catch(s){console.warn("Migration failed (will retry):",s&&s.message?s.message:s),ih=!1}if(n)return;const r=Or(In(q,St),ms("name"));e=Hu(r,s=>t(s.docs.map(i=>i.data().name)),s=>{console.warn("subscribeCustomers error:",Qt(s,"לקוחות (real-time)")),t([])})})(),()=>{n=!0,e()}}function lT(t,e){let n=()=>{},r=!1;return t?((async()=>{if(await Xu(),r)return;try{await ke()}catch{e([]);return}if(r||!q){e([]);return}const s=In(q,St,t,Rr),i=Or(s,ms("name"));n=Hu(i,o=>e(o.docs.map(l=>l.data().name)),o=>{console.warn("subscribeProjects error:",Qt(o,"פרויקטים (real-time)")),e([])})})(),()=>{r=!0,n()}):(e([]),n)}const Ad="customers",bb="projects";let uT=[];function Db(t){let e=()=>{},n=!1;return(async()=>{if(await Xu(),n)return;try{await ke()}catch{return}if(n||!q)return;const r=Or(In(q,Ad),ms("name"));e=Hu(r,s=>{uT=s.docs.map(i=>{const o=i.data();return{name:o.name||i.id,phone:o.phone||"",fax:o.fax||""}})},s=>{console.warn("subscribeToCustomers error:",s&&s.message?s.message:s)})})(),()=>{n=!0,e()}}function Ob(t){return!t||!t.trim()?null:uT.find(e=>e.name.trim().toLowerCase()===t.trim().toLowerCase())||null}async function Vb(t,e,n,r){if(!t||!t.trim()||!q)return;const s=t.trim(),i=e?e.trim():"",o=n?n.trim():"",l=r?r.trim():"";try{await ke()}catch{return}const u=me(q,Ad,s);try{await vt(u,{name:s,phone:o,fax:l},{merge:!0})}catch(h){console.warn("harvestCustomerProject write customer error:",h&&h.message?h.message:h);return}if(i){const h=me(q,Ad,s,bb,i);try{(await Wu(h)).exists()||await vt(h,{name:i})}catch(f){console.warn("harvestCustomerProject write project error:",f&&f.message?f.message:f)}}}const xp="counters/documents",Lb={"הצעת מחיר":"quote","הזמנת עבודה":"work_order","הסכם עבודה":"agreement"};function Mb(t){return t?Lb[t]||t:"quote"}let pn={};function cT(t){let e=()=>{},n=!1;return(async()=>{if(await Xu(),n)return;try{await ke()}catch{return}if(n||!q)return;try{const s=await Go(!0);dT(s)}catch{}if(t&&t(pn),n)return;const r=me(q,xp);e=Hu(r,s=>{if(s.exists()){const i=s.data();Object.keys(i).forEach(o=>{pn[o]=Math.max(pn[o]||0,i[o]||0)})}t&&t({...pn})},s=>{console.warn("subscribeToCounters error:",s&&s.message?s.message:s)})})(),()=>{n=!0,e()}}function hT(t){return t?(pn[t]||0)+1:1}function jb(t,e){if(!t)return;const n=parseInt(e,10);!isNaN(n)&&n>=(pn[t]||0)&&(pn[t]=n)}function Fb(){return{...pn}}function dT(t){Array.isArray(t)&&t.forEach(e=>{const n=e.type||e.docType,r=Mb(n),s=parseInt(e.serialNumber,10);!isNaN(s)&&s>=(pn[r]||0)&&(pn[r]=s)})}async function Ub(t){if(!t||!q)return;try{await ke()}catch{return}const e=me(q,xp);try{await vt(e,{[t]:vP(1)},{merge:!0})}catch(n){console.warn("incrementSerial error:",n&&n.message?n.message:n)}}async function $b(t,e){if(!t||!q)return;const n=parseInt(e,10);if(isNaN(n)||n<0)return;try{await ke()}catch{return}const r=me(q,xp);try{await vt(r,{[t]:n},{merge:!0})}catch(s){console.warn("setSerial error:",s&&s.message?s.message:s)}}function xd({value:t,onChange:e,options:n=[],placeholder:r="",className:s="",required:i=!1,disabled:o=!1,hideCreate:l=!1}){const[u,h]=U.useState(!1),[f,m]=U.useState(""),y=U.useRef(null),A=U.useRef(null),P=U.useMemo(()=>n.map(v=>typeof v=="string"?v:v.value),[n]),b=t||"",R=U.useMemo(()=>{if(!f.trim())return P;const v=f.trim().toLowerCase();return P.filter(g=>g.toLowerCase().includes(v))},[P,f]),I=U.useCallback(v=>{if(!f.trim())return v;const g=f.trim(),_=v.toLowerCase().indexOf(g.toLowerCase());return _===-1?v:p.jsxs(p.Fragment,{children:[v.slice(0,_),p.jsx("strong",{className:"sd-highlight",children:v.slice(_,_+g.length)}),v.slice(_+g.length)]})},[f]);U.useEffect(()=>{const v=g=>{y.current&&!y.current.contains(g.target)&&(h(!1),m(""))};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]);const E=()=>{h(!0),m(""),setTimeout(()=>{var v;return(v=A.current)==null?void 0:v.focus()},0)},x=v=>{m(v.target.value),u||h(!0)},O=v=>{e(v),h(!1),m("")},F=()=>{const v=f.trim();v&&(e(v),h(!1),m(""))},L=v=>{v.key==="Escape"?(h(!1),m("")):v.key==="Enter"&&(v.preventDefault(),u&&R.length>0?O(R[0]):u&&f.trim()&&F())};return o?p.jsx("div",{className:`sd-container ${s}`,style:{opacity:.6},children:p.jsxs("div",{className:"sd-trigger",children:[p.jsx("input",{type:"text",value:b,placeholder:r||"בחר לקוח תחילה...",className:"sd-input",disabled:!0}),p.jsx("span",{className:"sd-chevron",children:"▾"})]})}):p.jsxs("div",{ref:y,className:`sd-container ${s}`,children:[p.jsxs("div",{className:"sd-trigger",onClick:E,role:"combobox","aria-expanded":u,"aria-haspopup":"listbox",children:[p.jsx("input",{ref:A,type:"text",value:u?f:b,onChange:x,onFocus:()=>{u||h(!0),m("")},onKeyDown:L,placeholder:r,className:"sd-input",autoComplete:"off"}),p.jsx("span",{className:`sd-chevron ${u?"sd-chevron-open":""}`,children:"▾"})]}),u&&p.jsx("ul",{className:"sd-list",role:"listbox",children:R.length===0?f.trim()&&!l?p.jsxs("li",{className:"sd-option sd-option-create",onClick:F,role:"option",children:[p.jsx("span",{className:"sd-create-icon",children:"+"}),' צור "',f.trim(),'"']}):p.jsx("li",{className:"sd-empty",children:"אין תוצאות"}):R.map(v=>p.jsx("li",{className:`sd-option ${v.toLowerCase()===b.toLowerCase()?"sd-option-active":""}`,onClick:()=>O(v),role:"option","aria-selected":v===b,children:I(v)},v))})]})}const zb="/ShararaDocForge/assets/logo-D_MzoQS5.png",Bb="/ShararaDocForge/assets/SHARARA%20SIGNATURE--lQ0GJXD.png",lu=[{value:"quote",label:"הצעת מחיר"},{value:"work_order",label:"הזמנת עבודה"},{value:"agreement",label:"הסכם עבודה"}],fT=["יח'",'מ"א',"גלובלי",'מ"ר',"ימים",'מ"ק',"שעות","סט"],pT={name:'עלי שרארה בע"מ',subtitle:"תעשיות פח ומערכות אוורור ומיזוג אוויר",tradeDesc:"תכנון וביצוע מערכות מיזוג אוויר ואוורור פינוי עשן יצור תעלות פח צינורות 'ספירקל' ואביזרים תעלות נירוסטה ומנדפים תעלות פח שחור חיתוך וכיפוף פחים מכירה והתקנת כל סוגי המזגנים",phone:"04-6082264",fax:"04-6082263",mobile1:"050-5215192",contactName1:"",mobile2:"",contactName2:"",email:"ali@sharara.co.il",email2:"",website:"www.sharara.co.il",address:"שכ' מזרחית, נצרת/ריינה"},uu=()=>({id:crypto.randomUUID(),description:"",unit:"יח'",quantity:1,unitPrice:0}),wl=(t="quote")=>({docType:t,customDocType:"",useCustomDocType:!1,serialNumber:"",clientName:"",projectName:"",contactPerson:"",contactPhone:"",contactFax:"",date:new Date().toISOString().split("T")[0],vatRate:18,customVat:"",items:[uu()],simpleLayout:!1}),Cp=t=>Number(t.quantity)*Number(t.unitPrice),mT=t=>t.reduce((e,n)=>e+Cp(n),0),gT=(t,e)=>t*(Number(e)/100),yT=(t,e)=>t+gT(t,e),Br=t=>t.toLocaleString("he-IL",{minimumFractionDigits:2,maximumFractionDigits:2}),vT=t=>{if(!t)return"";const[e,n,r]=t.split("-");return!e||!n||!r?t:`${r}/${n}/${e}`};function Rp(t){const e=parseFloat(t.customVat);return!isNaN(e)&&e>=0&&e<=100?e:Number(t.vatRate)||0}function vo(t){var e;return t.useCustomDocType&&t.customDocType&&t.customDocType.trim()?t.customDocType.trim():((e=lu.find(n=>n.value===t.docType))==null?void 0:e.label)||"מסמך"}function qb(t){return{...t,items:t.items.map(e=>({...e}))}}function Wb(t){return{...t}}function oh(t){const e={};return t.clientName&&t.clientName.trim().length>0||(e.clientName=!0),t.items.some(s=>s.description&&s.description.trim().length>0)||(e.noDescription=!0),{valid:Object.keys(e).length===0,errors:e}}function Hb({message:t,type:e}){return t?p.jsx("div",{className:"toast-container",children:p.jsx("div",{className:`toast ${e||""}`,children:t})}):null}function Kb({company:t,doc:e}){const n=e.companySnapshot||t,r=e.serialNumber&&String(e.serialNumber).trim()?String(e.serialNumber).padStart(6,"0"):String(hT(e.docType||"quote")).padStart(6,"0"),s=Rp(e),i=U.useMemo(()=>mT(e.items),[e.items]),o=U.useMemo(()=>gT(i,s),[i,s]),l=U.useMemo(()=>yT(i,s),[i,s]),u=vo(e),h=e.items.filter(m=>m.description||m.unitPrice>0),f=Math.max(0,8-h.length);return e.notes,p.jsxs("div",{className:"print-sheet",children:[p.jsxs("div",{className:"letterhead",children:[p.jsx("div",{className:"letterhead-main",children:p.jsxs("div",{className:"letterhead-titles",children:[p.jsx("h1",{children:n.name}),p.jsx("h2",{children:n.subtitle}),p.jsxs("div",{className:"letterhead-trade-wrap",children:[p.jsx("img",{src:zb,alt:"לוגו",className:"letterhead-logo"}),p.jsx("div",{className:"letterhead-trade",children:n.tradeDesc})]})]})}),p.jsxs("div",{className:"letterhead-contact",children:[p.jsxs("div",{className:"flex flex-wrap justify-center gap-x-4 gap-y-1 w-full",children:[p.jsxs("span",{children:["Tel: ",p.jsx("span",{className:"dir-ltr",children:n.phone})]}),p.jsxs("span",{children:["Fax: ",p.jsx("span",{className:"dir-ltr",children:n.fax})]}),(n.mobile1||n.mobile)&&p.jsxs("span",{children:[n.contactName1?`${n.contactName1}: `:"Mobile: ",p.jsx("span",{className:"dir-ltr",children:n.mobile1||n.mobile})]}),n.mobile2&&p.jsxs("span",{children:[n.contactName2?`${n.contactName2}: `:"נייד 2: ",p.jsx("span",{className:"dir-ltr",children:n.mobile2})]})]}),p.jsxs("div",{className:"flex flex-wrap justify-center gap-x-4 gap-y-1 w-full",children:[p.jsx("span",{children:n.email}),n.email2&&p.jsx("span",{children:n.email2}),p.jsx("span",{children:n.website}),p.jsx("span",{children:n.address})]})]})]}),p.jsx("div",{className:"doc-title",children:u}),p.jsxs("div",{className:"doc-serial",children:["מס' סידורי: ",r||"———"]}),p.jsxs("div",{className:"meta-grid",children:[p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"שם המזמין:"})," ",e.clientName||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"תאריך:"})," ",vT(e.date)]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"שם הפרויקט:"})," ",e.projectName||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"איש קשר:"})," ",e.contactPerson||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"מס' טלפון:"})," ",e.contactPhone||p.jsx("span",{className:"meta-dash",children:"—"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"meta-label",children:"ח.פ.:"})," ",e.contactFax||p.jsx("span",{className:"meta-dash",children:"—"})]})]}),p.jsxs("table",{className:"items-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{className:"col-num",children:"מס'"}),p.jsx("th",{className:e.simpleLayout?"col-desc-simple":"col-desc",children:"תאור"}),!e.simpleLayout&&p.jsxs(p.Fragment,{children:[p.jsx("th",{className:"col-unit",children:"יח' מידה"}),p.jsx("th",{className:"col-qty",children:"כמות"}),p.jsx("th",{className:"col-price",children:"מחיר ליחידה"}),p.jsx("th",{className:"col-total",children:'סה"כ לפני מע"מ'})]})]})}),p.jsxs("tbody",{children:[h.map((m,y)=>p.jsxs("tr",{children:[p.jsx("td",{className:"col-num",children:y+1}),p.jsx("td",{className:e.simpleLayout?"col-desc-simple":"",children:m.description}),!e.simpleLayout&&p.jsxs(p.Fragment,{children:[p.jsx("td",{className:"col-unit",children:m.unit}),p.jsx("td",{className:"col-qty",children:m.quantity}),p.jsxs("td",{className:"col-price num-cell",children:[Br(m.unitPrice)," ₪"]}),p.jsxs("td",{className:"col-total num-cell",children:[Br(Cp(m))," ₪"]})]})]},m.id)),h.length===0&&p.jsx("tr",{className:"empty-row",children:p.jsx("td",{colSpan:e.simpleLayout?2:6,children:"—"})}),Array.from({length:f}).map((m,y)=>p.jsxs("tr",{style:{height:26},children:[p.jsx("td",{children:" "}),e.simpleLayout?p.jsx("td",{}):p.jsxs(p.Fragment,{children:[p.jsx("td",{}),p.jsx("td",{}),p.jsx("td",{}),p.jsx("td",{}),p.jsx("td",{})]})]},`pad-${y}`))]})]}),!e.simpleLayout&&p.jsx("div",{className:"totals-card",children:p.jsxs("div",{className:"totals-card-inner",children:[p.jsxs("div",{className:"totals-card-row",children:[p.jsx("span",{children:'סה"כ לפני מע"מ'}),p.jsxs("span",{className:"dir-ltr",children:[Br(i)," ₪"]})]}),p.jsxs("div",{className:"totals-card-row",children:[p.jsx("span",{children:'%מע"מ'}),p.jsxs("span",{className:"dir-ltr",children:[Br(o)," ₪"]})]}),p.jsxs("div",{className:"totals-card-row grand",children:[p.jsx("span",{children:'סה"כ לתשלום'}),p.jsxs("span",{className:"dir-ltr",children:[Br(l)," ₪"]})]})]})}),!e.simpleLayout&&p.jsxs("div",{className:"legal-section",children:[p.jsx("p",{children:"נא לאשר את ההצעה תוך ___ ימים מיום קבלתה. תנאי תשלום: שוטף + 30 יום. לפי שמוסכם. שיק בזמן קבלת ההזמנה. ט.ל.ח"}),p.jsx("p",{children:'החתום על הצעת מחיר זו ערב באופן אישי לפירעון התשלום. הסחורה בבעלות עלי שרארה בע"מ עד לפרעון התשלום.'})]}),p.jsxs("div",{className:"signature-block",children:[p.jsx("div",{className:"sig-box",children:p.jsxs("div",{className:"sig-line",children:[p.jsx("span",{className:"sig-client-label",children:"לקוח"}),"תעודת זהות / עוסק מורשה"]})}),p.jsxs("div",{className:"sig-box",children:[p.jsx("div",{className:"sig-img-wrapper",children:p.jsx("img",{src:Bb,alt:"חתימה",style:{width:180,height:90,objectFit:"contain"}})}),p.jsx("div",{className:"sig-line",children:"חתימה & חותמת"})]})]})]})}function Gb({doc:t,onChange:e,showValidation:n,validationErrors:r}){const s=(R,I)=>e(E=>({...E,[R]:I})),[i,o]=U.useState([]),[l,u]=U.useState([]);U.useEffect(()=>{const R=aT(I=>{o(I)});return()=>R()},[]),U.useEffect(()=>{if(!t.clientName){u([]);return}const R=lT(t.clientName,u);return()=>R()},[t.clientName]);const h=R=>{if(s("clientName",R),s("projectName",""),R&&R.trim()){i.includes(R)||iT(R).catch(()=>{});const I=Ob(R);I&&(s("contactPhone",I.phone||""),s("contactFax",I.fax||""))}},f=R=>{s("projectName",R),R&&R.trim()&&t.clientName&&!l.includes(R)&&oT(R,t.clientName).catch(()=>{})},m=(R,I,E)=>e(x=>({...x,items:x.items.map(O=>O.id===R?{...O,[I]:E}:O)})),y=R=>e(I=>({...I,items:I.items.filter(E=>E.id!==R)})),A=()=>e(wl()),P=()=>{e(R=>({...R,useCustomDocType:!R.useCustomDocType,customDocType:R.useCustomDocType?"":R.customDocType}))},b=Rp(t);return p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"סוג מסמך"}),p.jsx("div",{className:"flex items-center gap-2",children:p.jsxs("select",{value:t.useCustomDocType?"__custom__":t.docType,onChange:R=>{if(R.target.value==="__custom__")s("useCustomDocType",!0);else{const I=R.target.value;s("docType",I),s("useCustomDocType",!1),s("customDocType","")}},className:"form-input flex-1",children:[lu.map(R=>p.jsx("option",{value:R.value,children:R.label},R.value)),p.jsx("option",{value:"__custom__",children:"סוג מסמך מותאם אישית..."})]})}),t.useCustomDocType&&p.jsx("input",{type:"text",value:t.customDocType,onChange:R=>s("customDocType",R.target.value),className:"form-input mt-2",placeholder:"הזן שם מסמך מותאם אישית...",autoFocus:!0}),t.useCustomDocType&&p.jsx("button",{onClick:P,className:"mt-1.5 text-[10px] text-gray-400 hover:text-gray-600 underline",children:"חזור לסוג מסמך קבוע"})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("label",{className:"form-label mb-0",children:"תבנית:"}),p.jsx("button",{onClick:()=>s("simpleLayout",!1),className:`px-3 py-1 rounded text-xs font-semibold transition-colors ${t.simpleLayout?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-blue-600 text-white"}`,children:"מלא"}),p.jsx("button",{onClick:()=>s("simpleLayout",!0),className:`px-3 py-1 rounded text-xs font-semibold transition-colors ${t.simpleLayout?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"פשוט"})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[p.jsxs("div",{children:[p.jsxs("label",{className:"form-label",children:["שם המזמין ",p.jsx("span",{className:"text-red-500",children:"*"})]}),p.jsx(xd,{value:t.clientName,onChange:h,options:i,placeholder:"הקלד או בחר שם לקוח...",className:`${n&&(r!=null&&r.clientName)?"form-input-error":""}`}),n&&(r==null?void 0:r.clientName)&&p.jsx("p",{className:"validation-hint",children:"שדה חובה - הזן שם המזמין"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"שם הפרויקט"}),p.jsx(xd,{value:t.projectName,onChange:f,options:l,placeholder:"הקלד או בחר פרויקט...",disabled:!t.clientName})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"איש קשר"}),p.jsx("input",{value:t.contactPerson,onChange:R=>s("contactPerson",R.target.value),className:"form-input"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"תאריך"}),p.jsx("input",{type:"date",value:t.date||"",onChange:R=>s("date",R.target.value),className:"form-input",dir:"ltr",style:{textAlign:"center"}})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"טלפון"}),p.jsx("input",{value:t.contactPhone,onChange:R=>s("contactPhone",R.target.value),className:"form-input"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",children:"ח.פ."}),p.jsx("input",{value:t.contactFax,onChange:R=>s("contactFax",R.target.value),className:"form-input"})]})]}),p.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[p.jsx("label",{className:"form-label mb-0",children:'מע"מ:'}),p.jsx("button",{onClick:()=>{s("vatRate",18),s("customVat","")},className:`px-3 py-1 rounded text-xs font-semibold transition-colors ${t.vatRate===18&&!t.customVat?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"18%"}),p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("input",{type:"number",min:"0",max:"100",step:"0.1",placeholder:'מע"מ',value:t.customVat,onChange:R=>s("customVat",R.target.value),className:"vat-custom-input"}),p.jsx("span",{className:"text-xs text-gray-500",children:"%"})]}),p.jsxs("span",{className:"text-[10px] text-gray-400",children:["(",b,"% פעיל)"]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("h3",{className:"text-xs font-bold text-gray-500 uppercase tracking-wide",children:"סעיפים"}),t.items.length>0&&p.jsx("button",{onClick:()=>e(R=>({...R,items:[]})),className:"text-[10px] text-gray-400 hover:text-gray-600 underline",children:"נקה הכל"})]}),p.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded p-2 mb-3",children:p.jsx(Qb,{onAdd:R=>{e(I=>({...I,items:[...I.items,R]}))},showValidation:n,simpleLayout:t.simpleLayout})}),t.items.length>0&&p.jsx("div",{className:"space-y-2",children:t.items.map((R,I)=>p.jsxs("div",{className:"bg-white border border-gray-200 rounded p-2",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-5 text-center text-gray-400 font-semibold shrink-0",children:I+1}),!t.simpleLayout&&p.jsxs(p.Fragment,{children:[p.jsx("select",{value:R.unit,onChange:E=>m(R.id,"unit",E.target.value),className:"w-14 shrink-0 border border-gray-200 hover:border-gray-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-blue-500",children:fT.map(E=>p.jsx("option",{value:E,children:E},E))}),p.jsx("input",{type:"number",min:"0",value:R.quantity,onChange:E=>m(R.id,"quantity",Number(E.target.value)),className:"w-12 shrink-0 border border-gray-200 hover:border-gray-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsx("input",{type:"number",min:"0",value:R.unitPrice,onChange:E=>m(R.id,"unitPrice",Number(E.target.value)),className:"w-16 shrink-0 border border-gray-200 hover:border-gray-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsxs("span",{className:"w-16 shrink-0 text-center text-gray-500 font-medium tabular-nums text-[11px]",children:[Br(Cp(R))," ₪"]})]}),p.jsx("button",{onClick:()=>y(R.id),className:"text-red-300 hover:text-red-600 transition-colors text-sm leading-none px-1 shrink-0",title:"מחק סעיף",children:"×"})]}),p.jsx("div",{className:`flex items-center gap-1.5 mt-1 ${t.simpleLayout,"mr-7"}`,children:p.jsx("input",{placeholder:"תיאור פריט...",value:R.description,onChange:E=>m(R.id,"description",E.target.value),className:`flex-1 border border-gray-200 hover:border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${n&&(r!=null&&r.noDescription)&&(!R.description||!R.description.trim())?"border-red-400":""}`})})]},R.id))}),t.items.length===0&&p.jsx("p",{className:"text-center text-gray-400 text-xs py-4",children:"אין סעיפים — הוסף סעיף חדש למעלה"}),n&&(r==null?void 0:r.noDescription)&&p.jsx("p",{className:"validation-hint mt-1",children:"חובה להזין תיאור לפחות בסעיף אחד"})]}),p.jsx("button",{onClick:A,className:"w-full bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold py-2 rounded transition-colors",children:"אפס טופס"})]})}function Qb({onAdd:t,simpleLayout:e}){const[n,r]=U.useState("יח'"),[s,i]=U.useState(1),[o,l]=U.useState(0),[u,h]=U.useState(""),f=()=>{const y=u.trim();y&&(t({id:crypto.randomUUID(),description:y,unit:n,quantity:Number(s)||1,unitPrice:Number(o)||0}),r("יח'"),i(1),l(0),h(""))},m=y=>{y.key==="Enter"&&f()};return p.jsxs("div",{className:"space-y-1",children:[!e&&p.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-emerald-700 font-medium",children:[p.jsx("span",{className:"w-5 shrink-0"}),p.jsx("span",{className:"w-14 shrink-0 text-center",children:"יח'"}),p.jsx("span",{className:"w-12 shrink-0 text-center",children:"כמות"}),p.jsx("span",{className:"w-16 shrink-0 text-center",children:'מחיר ש"ח'}),p.jsx("span",{className:"flex-1"}),p.jsx("span",{className:"w-12 shrink-0"})]}),e?p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("input",{placeholder:"תיאור פריט...",value:u,onChange:y=>h(y.target.value),onKeyDown:m,className:"flex-1 border border-emerald-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500",autoFocus:!0}),p.jsx("button",{onClick:f,disabled:!u.trim(),className:"bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors shrink-0",children:"הוסף"})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-5 text-center text-emerald-600 font-semibold shrink-0",children:"+"}),p.jsx("select",{value:n,onChange:y=>r(y.target.value),className:"w-14 shrink-0 border border-emerald-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500",children:fT.map(y=>p.jsx("option",{value:y,children:y},y))}),p.jsx("input",{type:"number",min:"0",value:s,onChange:y=>i(y.target.value),onKeyDown:m,className:"w-12 shrink-0 border border-emerald-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500",placeholder:"כמות"}),p.jsx("input",{type:"number",min:"0",value:o,onChange:y=>l(y.target.value),onKeyDown:m,className:"w-16 shrink-0 border border-emerald-300 rounded px-1 py-1 text-center text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500",placeholder:"0.00"}),p.jsx("button",{onClick:f,disabled:!u.trim(),className:"bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors shrink-0",children:"הוסף"})]}),p.jsx("div",{className:"flex items-center gap-1.5 mr-7",children:p.jsx("input",{placeholder:"תיאור פריט...",value:u,onChange:y=>h(y.target.value),onKeyDown:m,className:"flex-1 border border-emerald-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"})})]})]})}function Yb({onLoadToForm:t,onPreview:e,refreshKey:n}){const[r,s]=U.useState([]),[i,o]=U.useState(!0),[l,u]=U.useState(null),[h,f]=U.useState("all"),[m,y]=U.useState("active"),A=U.useCallback(async()=>{o(!0),u(null);try{const v=await Go(!0);s(v)}catch(v){u(v.message||"Failed to load archive")}finally{o(!1)}},[]);U.useEffect(()=>{A()},[A,n]);const P=U.useMemo(()=>{const v=new Set;return r.forEach(g=>{const _=vo(g);_&&v.add(_)}),Array.from(v).sort()},[r]),b=U.useMemo(()=>r.filter(v=>v.status!=="deleted"),[r]),R=U.useMemo(()=>r.filter(v=>v.status==="deleted"),[r]),I=m==="active"?b:R,E=U.useMemo(()=>h==="all"?I:I.filter(v=>vo(v)===h),[I,h]),x=async(v,g)=>{if(window.confirm(`למחוק מסמך של "${g}"?`))try{await Eb(v),A()}catch(_){alert("שגיאה במחיקה: "+_.message)}},O=async(v,g)=>{if(window.confirm(`לשחזר מסמך של "${g}"?`))try{await Tb(v),A()}catch(_){alert("שגיאה בשחזור: "+_.message)}},F=v=>{const g={...v};delete g.id,delete g.docId,delete g.createdAt,delete g.updatedAt,delete g.source,delete g.status,(!g.items||g.items.length===0)&&(g.items=[uu()]),g.items=g.items.map(_=>({..._,id:crypto.randomUUID(),description:_.description||"",unit:_.unit||"יח'",quantity:Number(_.quantity)||1,unitPrice:Number(_.unitPrice)||0})),g.notes=g.notes||"",g.customVat=g.customVat||"",g.customDocType=g.customDocType||"",g.useCustomDocType=g.useCustomDocType||!1,g.date=new Date().toISOString().split("T")[0],t(g,!0)},L=v=>{if(!v.createdAt)return"";const g=new Date(v.createdAt);if(isNaN(g.getTime()))return"";const _=String(g.getDate()).padStart(2,"0"),T=String(g.getMonth()+1).padStart(2,"0"),C=g.getFullYear();return`${_}/${T}/${C}`};return i?p.jsx("div",{className:"flex items-center justify-center h-48 text-gray-400 text-sm",children:"טוען ארכיון..."}):l?p.jsxs("div",{className:"p-4 text-center",children:[p.jsx("p",{className:"text-red-500 text-sm mb-2",children:l}),p.jsx("button",{onClick:A,className:"text-blue-600 text-xs underline",children:"נסה שוב"})]}):p.jsxs("div",{className:"p-4",children:[p.jsxs("div",{className:"flex items-center justify-between mb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("button",{onClick:()=>y("active"),className:`text-xs font-semibold px-3 py-1 rounded transition-colors ${m==="active"?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:["מסמכים פעילים (",b.length,")"]}),p.jsxs("button",{onClick:()=>y("deleted"),className:`text-xs font-semibold px-3 py-1 rounded transition-colors ${m==="deleted"?"bg-red-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:["נמחקו (",R.length,")"]})]}),p.jsx("button",{onClick:A,className:"text-xs text-blue-600 hover:underline",children:"רענון"})]}),r.length>0&&p.jsxs("div",{className:"mb-3",children:[p.jsx("label",{className:"form-label",children:"סנן לפי סוג מסמך"}),p.jsxs("select",{value:h,onChange:v=>f(v.target.value),className:"form-input",children:[p.jsx("option",{value:"all",children:"הכל"}),P.map(v=>p.jsx("option",{value:v,children:v},v))]})]}),r.length===0?p.jsx("div",{className:"text-center text-gray-400 text-sm py-12",children:"אין מסמכים שמורים"}):E.length===0?p.jsx("div",{className:"text-center text-gray-400 text-sm py-12",children:"אין מסמכים התואמים את הסינון"}):p.jsx("div",{className:"space-y-1.5",children:E.map(v=>{const g=vo(v),_=v.items?mT(v.items):0,T=Rp(v),C=v.items?yT(_,T):0,k=v.source==="local",S=L(v);return p.jsxs("div",{className:`flex items-center gap-2 border rounded p-2 text-xs ${v.status==="deleted"?"bg-red-50 border-red-200":"bg-gray-50 border-gray-200"}`,children:[p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-0.5 flex-wrap",children:[p.jsx("span",{className:"bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-semibold",children:g}),v.serialNumber&&p.jsxs("span",{className:"text-gray-400 font-mono text-[10px]",children:["#",String(v.serialNumber).padStart(4,"0")]}),S&&p.jsx("span",{className:"text-gray-400 text-[10px]",children:S}),typeof v.date=="string"&&v.date&&p.jsxs("span",{className:"text-gray-500 text-[10px]",children:["ת: ",vT(v.date)]}),k&&p.jsx("span",{className:"bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded text-[10px] font-semibold",children:"מקומי"})]}),p.jsx("div",{className:"font-semibold text-gray-800 truncate",children:v.clientName||"ללא שם"}),p.jsx("div",{className:"text-gray-500 truncate",children:v.projectName})]}),p.jsx("div",{className:"text-left shrink-0",dir:"ltr",children:p.jsx("div",{className:"font-bold text-gray-800",children:Br(C)})}),p.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[p.jsx("button",{onClick:()=>t(v,!0),className:"bg-amber-50 hover:bg-amber-100 text-amber-700 px-2 py-1 rounded transition-colors",title:"ערוך מסמך",children:"✏️"}),p.jsx("button",{onClick:()=>F(v),className:"bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1 rounded transition-colors",title:"שכפל",children:"📋"}),v.status==="deleted"?p.jsx("button",{onClick:()=>O(v.id,v.clientName),className:"bg-teal-50 hover:bg-teal-100 text-teal-700 px-2 py-1 rounded transition-colors",title:"שחזר",children:"↩️"}):p.jsx("button",{onClick:()=>x(v.id,v.clientName),className:"bg-red-50 hover:bg-red-100 text-red-600 px-2 py-1 rounded transition-colors",title:"מחק",children:"🗑"})]})]},v.id)})})]})}function Xb({company:t,onChange:e}){const n=(r,s)=>e(i=>({...i,[r]:s}));return p.jsxs("div",{className:"p-4",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-4",children:"הגדרות חברה"}),p.jsxs("div",{className:"settings-grid",children:[p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"שם החברה"}),p.jsx("input",{value:t.name,onChange:r=>n("name",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"תת-כותרת"}),p.jsx("input",{value:t.subtitle,onChange:r=>n("subtitle",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field full-width",children:[p.jsx("label",{className:"form-label",children:"תיאור שירותים"}),p.jsx("textarea",{rows:3,value:t.tradeDesc,onChange:r=>n("tradeDesc",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"טלפון (Tel)"}),p.jsx("input",{value:t.phone,onChange:r=>n("phone",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"פקס (Fax)"}),p.jsx("input",{value:t.fax,onChange:r=>n("fax",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"נייד 1"}),p.jsx("input",{value:t.mobile1,onChange:r=>n("mobile1",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"שם איש קשר 1"}),p.jsx("input",{value:t.contactName1,onChange:r=>n("contactName1",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"נייד 2"}),p.jsx("input",{value:t.mobile2,onChange:r=>n("mobile2",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"שם איש קשר 2"}),p.jsx("input",{value:t.contactName2,onChange:r=>n("contactName2",r.target.value),className:"form-input"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"אימייל"}),p.jsx("input",{value:t.email,onChange:r=>n("email",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"אימייל נוסף"}),p.jsx("input",{value:t.email2,onChange:r=>n("email2",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"אתר"}),p.jsx("input",{value:t.website,onChange:r=>n("website",r.target.value),className:"form-input",dir:"ltr"})]}),p.jsxs("div",{className:"settings-field",children:[p.jsx("label",{className:"form-label",children:"כתובת"}),p.jsx("input",{value:t.address,onChange:r=>n("address",r.target.value),className:"form-input"})]})]}),p.jsx("button",{onClick:()=>e(pT),className:"mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold py-2 rounded transition-colors",children:"אפס להגדרות ברירת מחדל"})]})}function Jb({company:t,onCompanyChange:e,showToast:n,onRefreshArchive:r}){const[s,i]=U.useState(()=>{try{return localStorage.getItem(ov)||"0000"}catch{return"0000"}}),[o,l]=U.useState(!1),[u,h]=U.useState(""),[f,m]=U.useState(!1),[y,A]=U.useState(!1),[P,b]=U.useState(!1),[R,I]=U.useState(!1),[E,x]=U.useState(!1),[O,F]=U.useState(!1),[L,v]=U.useState(""),[g,_]=U.useState(""),[T,C]=U.useState(null),[k,S]=U.useState(!1),[He,ne]=U.useState(null),[ge,re]=U.useState({}),[z,Y]=U.useState(lu[0].value),[Q,le]=U.useState([]),he=U.useCallback(async()=>{if(window.confirm('פעולה זו תמחק לצמיתות את כל המסמכים שנמחקו ("'+Q.filter(G=>G.status==="deleted").length+` מסמכים) ותאפס את המספור הסידורי מחדש.

האם להמשיך?`)&&window.confirm(`אזהרה סופית: הפעולה בלתי הפיכה. אין דרך לשחזר את המסמכים שנמחקו או את המספור הישן.

האם אתה בטוח?`)){S(!0),ne(null);try{const G=await Ab(),pe=await xb(),dt=[];G.firebase>0||G.local>0?dt.push(`נמחקו לצמיתות: ${G.firebase} מהענן, ${G.local} מהמקומי`):dt.push("לא נמצאו מסמכים שנמחקו");const Sn=Object.entries(pe).map(([Es,Vr])=>`${Es}: ${Vr} מסמכים`).join(", ");dt.push(`מוספרו מחדש: ${Sn}`),ne(dt.join(`
`)),r&&r()}catch(G){ne("שגיאה: "+G.message)}finally{S(!1)}}},[Q,r]);U.useEffect(()=>{const G=cT(pe=>{re(pe||{})});return()=>G()},[]),U.useEffect(()=>{Go(!0).then(le).catch(()=>{})},[]);const Se=U.useMemo(()=>{const G={};return Q.forEach(pe=>{const dt=pe.docType||"quote",Sn=parseInt(pe.serialNumber,10);isNaN(Sn)||(G[dt]=Math.max(G[dt]||0,Sn))}),G},[Q]),Yt=U.useMemo(()=>{const G={};return lu.forEach(pe=>{G[pe.value]=pe.label}),Object.keys(ge).forEach(pe=>{!G[pe]&&pe!=="lastSerialNumber"&&(G[pe]=pe)}),Object.entries(G).map(([pe,dt])=>({value:pe,label:dt}))},[ge]),Xt=ge[z]||0,Jt=Se[z]||0,Ut=Math.max(Xt,Jt),Ju=Ut+1,pa=()=>{u===s?(l(!0),m(!1)):m(!0)},vs=async()=>{b(!0);try{const G=await Go(!0),pe=eD(),dt={exportedAt:new Date().toISOString(),exportedAtFormatted:pe,version:1,totalDocuments:G.length,documents:G},Sn=new Blob([JSON.stringify(dt,null,2)],{type:"application/json"}),Es=URL.createObjectURL(Sn),Vr=document.createElement("a");Vr.href=Es,Vr.download=`sharara_backup_${pe}.json`,Vr.click(),URL.revokeObjectURL(Es);try{await Ib(pe,G),n("גיבוי נשמר בהצלחה לענן והורד כמסמך מקומי","success")}catch{n("גיבוי הורד למחשב (אך שמירה לענן נכשלה, ייתכן שאין חיבור Firebase)","local")}A(!0)}catch(G){n("שגיאה בייצוא גיבוי: "+G.message,"error")}finally{b(!1)}},_s=async()=>{if(!y){n("יש לבצע גיבוי לפני איפוס המערכת","error");return}if(window.confirm(`האם אתה בטוח שברצונך לאפס את המערכת?
כל הנתונים יימחקו לצמיתות!`)&&window.confirm(`אישור סופי – איפוס ימחק את כל המסמכים.
האם להמשיך?`)){I(!0);try{await Sb(),n("המערכת אופסה בהצלחה","success"),A(!1),r()}catch(G){n("שגיאה באיפוס: "+G.message,"error")}finally{I(!1)}}},ws=()=>{if(!L||L.length<4){C({type:"error",text:"הסיסמה חייבת להכיל לפחות 4 תווים"});return}if(L!==g){C({type:"error",text:"הסיסמאות אינן תואמות"});return}try{localStorage.setItem(ov,L),i(L),v(""),_(""),C({type:"success",text:"הסיסמה שונתה בהצלחה"}),setTimeout(()=>C(null),3e3)}catch{C({type:"error",text:"שגיאה בשמירת הסיסמה"})}};return o?p.jsxs("div",{className:"p-4",children:[p.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700",children:"פאנל ניהול"}),p.jsx("button",{onClick:()=>l(!1),className:"text-xs text-red-500 hover:underline",children:"נעול"})]}),p.jsxs("div",{className:"flex flex-col gap-3 mb-6",children:[p.jsx("button",{onClick:()=>x(!0),className:"w-full bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-700 font-semibold text-sm py-3 rounded-xl transition-colors shadow-sm",children:"✏️ עריכת נתוני החברה"}),p.jsx("button",{onClick:()=>F(!0),className:"w-full bg-white border-2 border-emerald-200 hover:border-emerald-400 text-emerald-700 font-semibold text-sm py-3 rounded-xl transition-colors shadow-sm",children:"🔢 מספרים סידוריים"})]}),p.jsx("hr",{className:"my-6 border-gray-200"}),p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-3",children:"גיבוי ואיפוס"}),p.jsx("button",{onClick:vs,disabled:P,className:"w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white text-xs font-semibold py-2 rounded transition-colors mb-2",children:P?"מייצא...":"שמור גיבוי לפני איפוס"}),p.jsx("button",{onClick:_s,disabled:!y||R,className:`w-full text-xs font-semibold py-2 rounded transition-colors ${y&&!R?"bg-red-600 hover:bg-red-700 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:R?"מאפס...":"איפוס מערכת"}),!y&&p.jsx("p",{className:"text-[10px] text-red-500 mt-1",children:"יש לבצע גיבוי תחילה"}),E&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",onClick:()=>x(!1),children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-[520px] max-h-[85vh] overflow-y-auto relative",onClick:G=>G.stopPropagation(),children:[p.jsxs("div",{className:"sticky top-0 bg-white flex items-center justify-between p-4 border-b border-gray-200 z-10",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700",children:"עריכת נתוני החברה"}),p.jsx("button",{onClick:()=>x(!1),className:"w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors text-sm",children:"✕"})]}),p.jsx("div",{className:"p-4",children:p.jsx(Xb,{company:t,onChange:e})})]})}),O&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",onClick:()=>F(!1),children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-[440px] p-6 relative",onClick:G=>G.stopPropagation(),children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700",children:"מספרים סידוריים"}),p.jsx("button",{onClick:()=>F(!1),className:"w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors text-sm",children:"✕"})]}),p.jsx("p",{className:"text-[10px] text-gray-400 mb-3",children:"בחר סוג מסמך והגדר את המספר הבא שיוקצה"}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("select",{value:z,onChange:G=>Y(G.target.value),className:"form-input flex-1",children:Yt.map(G=>p.jsx("option",{value:G.value,children:G.label},G.value))}),p.jsx("input",{type:"number",min:"0",value:Ut,onChange:G=>{const pe=parseInt(G.target.value,10);isNaN(pe)||pe<0||$b(z,pe)},className:"form-input w-24 serial-number-input",dir:"ltr"}),p.jsxs("span",{className:"text-[10px] text-gray-400 whitespace-nowrap",children:["הבא: #",String(Ju).padStart(4,"0")]})]})]})}),p.jsx("hr",{className:"my-6 border-gray-200"}),p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-3",children:"שינוי סיסמת כניסה"}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("input",{type:"password",placeholder:"סיסמה חדשה (לפחות 4 תווים)",value:L,onChange:G=>v(G.target.value),className:"form-input"}),p.jsx("input",{type:"password",placeholder:"אשר סיסמה חדשה",value:g,onChange:G=>_(G.target.value),onKeyDown:G=>{G.key==="Enter"&&ws()},className:"form-input"}),p.jsx("button",{onClick:ws,className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 rounded transition-colors",children:"שמור סיסמה חדשה"}),T&&p.jsx("p",{className:`text-xs text-center mt-1 ${T.type==="success"?"text-green-600":"text-red-500"}`,children:T.text})]}),p.jsxs("div",{className:"mt-6 pt-4 border-t border-red-200",children:[p.jsx("h4",{className:"text-xs font-bold text-red-600 mb-2",children:"תחזוקת מאגר"}),p.jsx("p",{className:"text-[10px] text-gray-500 mb-2",children:"מחיקת מסמכים שנמחקו לצמיתות ואיפוס המספור הסידורי לפי הסדר הנוכחי."}),p.jsx("button",{onClick:he,disabled:k,className:"w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-xs font-semibold py-2 rounded transition-colors",children:k?"מבצע ניקוי...":"נקה ומספר מחדש"}),He&&p.jsx("div",{className:"mt-2 text-[10px] text-gray-600 bg-gray-50 rounded p-2 leading-relaxed",children:He})]})]}):p.jsx("div",{className:"p-4 max-w-sm mx-auto mt-8",children:p.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 shadow-sm",children:[p.jsx("h3",{className:"text-sm font-bold text-gray-700 mb-4 text-center",children:"גישה לפאנל הניהול"}),p.jsx("p",{className:"text-xs text-gray-500 mb-4 text-center",children:"הזן סיסמה כדי לגשת להגדרות הניהול"}),p.jsx("input",{type:"password",placeholder:"סיסמה",value:u,onChange:G=>h(G.target.value),onKeyDown:G=>G.key==="Enter"&&pa(),className:"form-input text-center mb-2",autoFocus:!0}),f&&p.jsx("p",{className:"text-red-500 text-xs text-center mb-2",children:"סיסמה שגויה"}),p.jsx("button",{onClick:pa,className:"w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded transition-colors",children:"כניסה"})]})})}function Zb(){const[t,e]=U.useState([]),[n,r]=U.useState(""),[s,i]=U.useState([]),[o,l]=U.useState(""),[u,h]=U.useState(""),[f,m]=U.useState(null),[y,A]=U.useState(""),[P,b]=U.useState(null),[R,I]=U.useState(""),E=U.useMemo(()=>[...t].sort((_,T)=>_.localeCompare(T,"he")),[t]);U.useEffect(()=>{const _=aT(T=>{e(T)});return()=>_()},[]),U.useEffect(()=>{n&&t.length>0&&!t.includes(n)&&r("")},[t,n]),U.useEffect(()=>{if(!n){i([]);return}const _=lT(n,T=>{i(T)});return()=>_()},[n]);const x=async()=>{const _=o.trim();if(_)try{await iT(_),l(""),r(_)}catch(T){alert(T.message)}},O=async _=>{if(window.confirm(`האם אתה בטוח שברצונך למחוק את הלקוח "${_}"?
כל הפרויקטים המשויכים אליו יימחקו גם כן.`)&&window.confirm(`אזהרה סופית: מחיקת "${_}" היא פעולה בלתי הפיכה. האם להמשיך?`))try{await Cb(_),n===_&&r("")}catch(T){alert(T.message)}},F=async _=>{const T=y.trim();if(!T||T===_){m(null);return}try{await kb(_,T),n===_&&r(T)}catch(C){alert(C.message)}m(null)},L=async()=>{const _=u.trim();if(!(!_||!n))try{await oT(_,n),h("")}catch(T){alert(T.message)}},v=async _=>{if(window.confirm(`האם אתה בטוח שברצונך למחוק את הפרויקט "${_}"?`)&&window.confirm(`אזהרה סופית: מחיקת הפרויקט "${_}" מבוצעת לצמיתות. האם להמשיך?`))try{await Rb(_,n)}catch(T){alert(T.message)}},g=async _=>{const T=R.trim();if(!T||T===_){b(null);return}try{await Pb(_,T,n)}catch(C){alert(C.message)}b(null)};return p.jsx("div",{dir:"rtl",className:"w-full mx-auto",children:p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-5",children:[p.jsxs("h4",{className:"text-sm font-bold text-gray-700 mb-4",children:["לקוחות ופרויקטים (",t.length,")"]}),p.jsxs("div",{className:"grid grid-cols-[1fr_auto] gap-2 w-full mb-4",children:[p.jsx("input",{type:"text",placeholder:"שם לקוח חדש...",value:o,onChange:_=>l(_.target.value),onKeyDown:_=>{_.key==="Enter"&&x()},className:"min-w-0 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"}),p.jsx("button",{onClick:x,className:"bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shrink-0 whitespace-nowrap",children:"+ הוסף לקוח"})]}),p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx("div",{className:"flex-1 min-w-0",children:p.jsx(xd,{value:n,onChange:r,options:E,placeholder:"חפש לקוח...",className:"w-full"})}),n&&p.jsx("div",{className:"flex items-center gap-1 shrink-0",children:f===n?p.jsxs("div",{className:"flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1",children:[p.jsx("input",{autoFocus:!0,value:y,onChange:_=>A(_.target.value),onKeyDown:_=>{_.key==="Enter"&&F(n),_.key==="Escape"&&m(null)},className:"border border-blue-300 rounded px-2 py-1 text-xs w-28 focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsx("button",{onClick:()=>F(n),className:"text-green-600 hover:text-green-800 text-xs font-semibold px-1 py-1",children:"✓"}),p.jsx("button",{onClick:()=>m(null),className:"text-gray-400 hover:text-gray-600 text-xs px-1 py-1",children:"✕"})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>{m(n),A(n)},className:"text-gray-400 hover:text-blue-600 p-1.5 rounded-lg hover:bg-blue-50 transition-colors",title:"ערוך לקוח",children:"✏️"}),p.jsx("button",{onClick:()=>O(n),className:"text-gray-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors",title:"מחק לקוח",children:"✕"})]})})]}),p.jsx("div",{className:"border border-gray-200 rounded-lg overflow-hidden bg-gray-50/30 w-full",children:n?p.jsxs("div",{className:"divide-y divide-gray-100",children:[s.length===0?p.jsx("p",{className:"text-gray-400 text-xs text-center py-6",children:"אין פרויקטים ללקוח זה"}):s.map(_=>p.jsx("div",{className:"px-4 py-2.5",children:P===_?p.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2",children:[p.jsx("input",{autoFocus:!0,value:R,onChange:T=>I(T.target.value),onKeyDown:T=>{T.key==="Enter"&&g(_),T.key==="Escape"&&b(null)},className:"flex-1 border border-blue-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"}),p.jsx("button",{onClick:()=>g(_),className:"text-green-600 hover:text-green-800 text-xs font-semibold px-2 py-1 shrink-0",children:"✓"}),p.jsx("button",{onClick:()=>b(null),className:"text-gray-400 hover:text-gray-600 text-xs px-2 py-1 shrink-0",children:"✕"})]}):p.jsxs("div",{className:"flex items-center justify-between group/proj",children:[p.jsx("span",{className:"text-sm text-gray-700",children:_}),p.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[p.jsx("button",{onClick:()=>{b(_),I(_)},className:"text-gray-400 hover:text-blue-600 p-1 transition-colors",title:"ערוך",children:"✏️"}),p.jsx("button",{onClick:()=>v(_),className:"text-gray-400 hover:text-red-600 p-1 transition-colors",title:"מחק",children:"✕"})]})]})},_)),p.jsx("div",{className:"px-4 py-3 bg-gray-50/80",children:p.jsxs("div",{className:"grid grid-cols-[1fr_auto] gap-2 w-full",children:[p.jsx("input",{type:"text",placeholder:"הוסף פרויקט ללקוח זה...",value:u,onChange:_=>h(_.target.value),onKeyDown:_=>{_.key==="Enter"&&L()},className:"min-w-0 w-full border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"}),p.jsx("button",{onClick:L,className:"bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shrink-0 whitespace-nowrap",children:"+ הוסף"})]})})]}):p.jsx("p",{className:"text-gray-400 text-xs text-center py-8",children:"בחר לקוח מהרשימה כדי לנהל את הפרויקטים שלו"})})]})})}const _T="sharara_company_settings",ov="sharara_admin_password";function eD(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear(),s=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${e}-${n}-${r}_${s}-${i}`}function tD(){try{const t=localStorage.getItem(_T);if(t){const e=JSON.parse(t);if(e&&typeof e=="object"&&e.name)return e}}catch{}return pT}function nD(){const[t,e]=U.useState(wl),[n,r]=U.useState(tD),[s,i]=U.useState("new"),[o,l]=U.useState(null),[u,h]=U.useState(!1),[f,m]=U.useState(!0),[y,A]=U.useState(null),[P,b]=U.useState(0),[R,I]=U.useState(!1),[E,x]=U.useState({}),[O,F]=U.useState({}),L=U.useRef(null);U.useEffect(()=>{const ne=cT(ge=>F(ge));return()=>ne()},[]),U.useEffect(()=>{let ne=!1;return(async()=>{try{const ge=await Go(!0);if(ne)return;dT(ge),F({...Fb()})}catch{}})(),()=>{ne=!0}},[]);const v=o||t,g=U.useMemo(()=>!oh(t).valid,[t]),_=U.useCallback((ne,ge)=>{L.current&&clearTimeout(L.current),A({message:ne,type:ge}),L.current=setTimeout(()=>A(null),3e3)},[]);U.useEffect(()=>()=>{L.current&&clearTimeout(L.current)},[]),U.useEffect(()=>{const ne=Db();return()=>ne()},[]),U.useEffect(()=>{try{localStorage.setItem(_T,JSON.stringify(n))}catch{}},[n]);const T=U.useCallback(async()=>{if(u)return;const{valid:ne,errors:ge}=oh(t);if(!ne){I(!0),x(ge),_("נא למלא את כל שדות החובה המסומנים באדום","error");return}h(!0),I(!1),x({});try{const re=qb(t),z=Wb(n),Y=!!re.docId;let Q;if(Y)await wb(re.docId,{...re,companySnapshot:z}),Q={id:re.docId,serial:re.serialNumber,source:re.source},_("המסמך עודכן בהצלחה","success");else{Q=await _b(re,z);const le=re.useCustomDocType?re.customDocType:re.docType;if(le){const he=hT(le);await Ub(le),jb(le,he)}Q.source==="local"?_("המסמך נשמר בהצלחה באופן מקומי בדפדפן","local"):_("המסמך נשמר בהצלחה בענן (מס' "+(Q.serial||"")+")","success")}Vb(re.clientName,re.projectName,re.contactPhone,re.contactFax).catch(()=>{}),b(le=>le+1),e(wl()),m(!0),window.print()}catch(re){_("שגיאה בשמירה: "+re.message)}finally{h(!1)}},[t,u,_,n]),C=U.useCallback(ne=>{const ge=au(ne,ne.id,ne.source||"firebase");(!ge.items||ge.items.length===0)&&(ge.items=[uu()]),e(ge),m(!1),l(ge),I(!1),x({}),i("new")},[]),k=U.useCallback((ne,ge=!1)=>{const re=au(ne,ne.id,ne.source||"firebase");delete re.id,delete re.createdAt,delete re.updatedAt,(!re.items||re.items.length===0)&&(re.items=[uu()]),e(re),m(ge),l(null),i("new")},[]),S=U.useCallback(()=>{l(null),e(wl()),m(!1)},[]);U.useEffect(()=>{if(R){const{valid:ne,errors:ge}=oh(t);ne?(I(!1),x({})):x(ge)}},[t,R]);const He=vo(v);return p.jsxs("div",{className:"h-screen flex flex-col",children:[p.jsx(Hb,{message:y==null?void 0:y.message,type:y==null?void 0:y.type}),p.jsxs("header",{className:"no-print app-header bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between shrink-0 shadow-sm",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("h1",{className:"text-base font-bold text-gray-800",children:"ShararaDocForge"}),p.jsx("span",{className:"text-gray-300",children:"|"}),p.jsx("span",{className:"text-xs text-gray-500",children:He}),o&&p.jsxs("span",{className:"bg-amber-100 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded",children:["תצוגה מארכיון",p.jsx("button",{onClick:S,className:"mr-1 text-amber-500 hover:text-amber-700 font-bold",children:"×"})]})]}),p.jsx("div",{className:"flex items-center gap-2",children:f?p.jsx("button",{onClick:T,disabled:u||g,className:`text-white text-xs font-semibold px-4 py-1.5 rounded transition-colors ${u||g?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,title:g?"נא למלא שם המזמין ולפחות תיאור סעיף אחד":"",children:u?"שומר...":"שמור והדפס"}):p.jsx("button",{onClick:window.print,className:"text-gray-600 hover:text-gray-800 text-xs font-semibold px-4 py-1.5 rounded border border-gray-300 hover:border-gray-400 transition-colors",children:"הדפס מסמך"})})]}),p.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[p.jsxs("aside",{className:"no-print editor-panel bg-white border-l border-gray-200 w-[380px] min-w-[340px] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:"no-print app-tabs flex border-b border-gray-200 shrink-0",children:[p.jsx("button",{onClick:()=>i("new"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="new"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"מסמך חדש"}),p.jsx("button",{onClick:()=>i("archive"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="archive"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"ארכיון ומעקב"}),p.jsx("button",{onClick:()=>i("database"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="database"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"ניהול מאגרים"}),p.jsx("button",{onClick:()=>i("management"),className:`flex-1 py-2 text-xs font-semibold transition-colors ${s==="management"?"text-blue-600 border-b-2 border-blue-600 bg-blue-50/50":"text-gray-500 hover:text-gray-700"}`,children:"ניהול"})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto",children:[s==="new"&&p.jsx("div",{className:"p-4",children:p.jsx(Gb,{doc:t,onChange:ne=>{e(ne),m(!0)},showValidation:R,validationErrors:E})}),s==="archive"&&p.jsx(Yb,{onLoadToForm:k,onPreview:C,refreshKey:P}),s==="database"&&p.jsx("div",{className:"p-6",children:p.jsx(Zb,{})}),s==="management"&&p.jsx(Jb,{company:n,onCompanyChange:r,showToast:_,onRefreshArchive:()=>b(ne=>ne+1)})]})]}),p.jsx("main",{className:"preview-panel flex-1 overflow-y-auto bg-gray-100 p-6",children:p.jsx(Kb,{company:n,doc:v})})]})]})}ah.createRoot(document.getElementById("root")).render(p.jsx(uI.StrictMode,{children:p.jsx(nD,{})}));
