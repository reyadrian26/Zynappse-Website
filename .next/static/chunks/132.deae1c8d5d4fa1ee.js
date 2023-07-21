"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{6010:function(e,t,n){function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},2132:function(e,t,n){n.r(t),n.d(t,{Bounce:function(){return B},Flip:function(){return A},Icons:function(){return P},Slide:function(){return x},ToastContainer:function(){return D},Zoom:function(){return M},collapseToast:function(){return h},cssTransition:function(){return T},toast:function(){return W},useToast:function(){return I},useToastContainer:function(){return C}});var o=n(7294),r=n(6010),a=n(3935);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function c(e){return"number"===typeof e&&!isNaN(e)}function u(e){return"boolean"===typeof e}function l(e){return"string"===typeof e}function d(e){return"function"===typeof e}function f(e){return l(e)||d(e)?e:null}function m(e){return 0===e||e}var p=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return(0,o.isValidElement)(e)||l(e)||d(e)||c(e)}var v={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},y={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function h(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}function T(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,m=a?t+"--"+s:t,p=a?n+"--"+s:n,g=(0,o.useRef)(),v=(0,o.useRef)(0);function y(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===v.current&&(t.className=g.current)}}function T(){var e=d.current;e.removeEventListener("animationend",T),i?h(e,l,u):l()}return(0,o.useLayoutEffect)((function(){!function(){var e=d.current;g.current=e.className,e.className+=" "+m,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}()}),[]),(0,o.useEffect)((function(){f||(c?T():function(){v.current=1;var e=d.current;e.className+=" "+p,e.addEventListener("animationend",T)}())}),[f]),o.createElement(o.Fragment,null,r)}}var E={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(e)&&this.list.get(e).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}},b=["delay","staleId"];function C(e){var t=(0,o.useReducer)((function(e){return e+1}),0)[1],n=(0,o.useState)([]),r=n[0],a=n[1],s=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,v=function(e){return-1!==r.indexOf(e)},y=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:v,getToast:function(e){return p.get(e)}}).current;function h(e){var t=e.containerId;!y.props.limit||t&&y.containerId!==t||(y.count-=y.queue.length,y.queue=[])}function T(e){a((function(t){return m(e)?t.filter((function(t){return t!==e})):[]}))}function C(){var e=y.queue.shift();_(e.toastContent,e.toastProps,e.staleId)}function O(e,n){var r=n.delay,a=n.staleId,v=i(n,b);if(g(e)&&!function(e){return!s.current||y.props.enableMultiContainer&&e.containerId!==y.props.containerId||p.has(e.toastId)&&null==e.updateId}(v)){var h=v.toastId,E=v.updateId,O=v.data,I=y.props,L=function(){return T(h)},N=null==E;N&&y.count++;var R,w,P={toastId:h,updateId:E,isLoading:v.isLoading,theme:v.theme||I.theme,icon:null!=v.icon?v.icon:I.icon,isIn:!1,key:v.key||y.toastKey++,type:v.type,closeToast:L,closeButton:v.closeButton,rtl:I.rtl,position:v.position||I.position,transition:v.transition||I.transition,className:f(v.className||I.toastClassName),bodyClassName:f(v.bodyClassName||I.bodyClassName),style:v.style||I.toastStyle,bodyStyle:v.bodyStyle||I.bodyStyle,onClick:v.onClick||I.onClick,pauseOnHover:u(v.pauseOnHover)?v.pauseOnHover:I.pauseOnHover,pauseOnFocusLoss:u(v.pauseOnFocusLoss)?v.pauseOnFocusLoss:I.pauseOnFocusLoss,draggable:u(v.draggable)?v.draggable:I.draggable,draggablePercent:v.draggablePercent||I.draggablePercent,draggableDirection:v.draggableDirection||I.draggableDirection,closeOnClick:u(v.closeOnClick)?v.closeOnClick:I.closeOnClick,progressClassName:f(v.progressClassName||I.progressClassName),progressStyle:v.progressStyle||I.progressStyle,autoClose:!v.isLoading&&(R=v.autoClose,w=I.autoClose,!1===R||c(R)&&R>0?R:w),hideProgressBar:u(v.hideProgressBar)?v.hideProgressBar:I.hideProgressBar,progress:v.progress,role:v.role||I.role,deleteToast:function(){p.delete(h);var e=y.queue.length;if(y.count=m(h)?y.count-1:y.count-y.displayedToast,y.count<0&&(y.count=0),e>0){var n=m(h)?1:y.props.limit;if(1===e||1===n)y.displayedToast++,C();else{var o=n>e?e:n;y.displayedToast=o;for(var r=0;r<o;r++)C()}}else t()}};d(v.onOpen)&&(P.onOpen=v.onOpen),d(v.onClose)&&(P.onClose=v.onClose),P.closeButton=I.closeButton,!1===v.closeButton||g(v.closeButton)?P.closeButton=v.closeButton:!0===v.closeButton&&(P.closeButton=!g(I.closeButton)||I.closeButton);var k=e;(0,o.isValidElement)(e)&&!l(e.type)?k=(0,o.cloneElement)(e,{closeToast:L,toastProps:P,data:O}):d(e)&&(k=e({closeToast:L,toastProps:P,data:O})),I.limit&&I.limit>0&&y.count>I.limit&&N?y.queue.push({toastContent:k,toastProps:P,staleId:a}):c(r)&&r>0?setTimeout((function(){_(k,P,a)}),r):_(k,P,a)}}function _(e,t,n){var o=t.toastId;n&&p.delete(n),p.set(o,{content:e,props:t}),a((function(e){return[].concat(e,[o]).filter((function(e){return e!==n}))}))}return(0,o.useEffect)((function(){return y.containerId=e.containerId,E.cancelEmit(3).on(0,O).on(1,(function(e){return s.current&&T(e)})).on(5,h).emit(2,y),function(){return E.emit(3,y)}}),[]),(0,o.useEffect)((function(){y.isToastActive=v,y.displayedToast=r.length,E.emit(4,r.length,e.containerId)}),[r]),(0,o.useEffect)((function(){y.props=e})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:v}}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function I(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],a=(0,o.useState)(!1),s=a[0],i=a[1],c=(0,o.useRef)(null),u=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,o.useRef)(e),f=e.autoClose,m=e.pauseOnHover,p=e.closeToast,g=e.onClick,v=e.closeOnClick;function y(t){if(e.draggable){u.didMove=!1,document.addEventListener("mousemove",b),document.addEventListener("mouseup",C),document.addEventListener("touchmove",b),document.addEventListener("touchend",C);var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=O(t.nativeEvent),u.y=_(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(){if(u.boundingRect){var t=u.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&u.x>=r&&u.x<=a&&u.y>=n&&u.y<=o?E():T()}}function T(){r(!0)}function E(){r(!1)}function b(t){var o=c.current;u.canDrag&&o&&(u.didMove=!0,n&&E(),u.x=O(t),u.y=_(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function C(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",C);var t=c.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,o.useEffect)((function(){l.current=e})),(0,o.useEffect)((function(){return c.current&&c.current.addEventListener("d",T,{once:!0}),d(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=l.current;d(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||E();window.addEventListener("focus",T),window.addEventListener("blur",E)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",E))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:y,onTouchStart:y,onMouseUp:h,onTouchEnd:h};return f&&m&&(I.onMouseEnter=E,I.onMouseLeave=T),v&&(I.onClick=function(e){g&&g(e),u.canCloseOnClick&&p()}),{playToast:T,pauseToast:E,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:I}}function L(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return(0,o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},(0,o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(e){var t,n,a=e.delay,i=e.isRunning,c=e.closeToast,u=e.type,l=e.hide,f=e.className,m=e.style,p=e.controlledProgress,g=e.progress,v=e.rtl,y=e.isIn,h=e.theme,T=s({},m,{animationDuration:a+"ms",animationPlayState:i?"running":"paused",opacity:l?0:1});p&&(T.transform="scaleX("+g+")");var E=(0,r.Z)("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+h,"Toastify__progress-bar--"+u,((t={})["Toastify__progress-bar--rtl"]=v,t)),b=d(f)?f({rtl:v,type:u,defaultClassName:E}):(0,r.Z)(E,f),C=((n={})[p&&g>=1?"onTransitionEnd":"onAnimationEnd"]=p&&g<1?null:function(){y&&c()},n);return(0,o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:b,style:T},C))}N.defaultProps={type:y.DEFAULT,hide:!1};var R=["theme","type"],w=function(e){var t=e.theme,n=e.type,r=i(e,R);return(0,o.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var P={info:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,o.createElement)("div",{className:"Toastify__spinner"})}},k=function(e){var t,n,a=I(e),s=a.isRunning,i=a.preventExitTransition,c=a.toastRef,u=a.eventHandlers,f=e.closeButton,m=e.children,p=e.autoClose,g=e.onClick,v=e.type,y=e.hideProgressBar,h=e.closeToast,T=e.transition,E=e.position,b=e.className,C=e.style,O=e.bodyClassName,_=e.bodyStyle,L=e.progressClassName,R=e.progressStyle,w=e.updateId,k=e.role,B=e.progress,x=e.rtl,M=e.toastId,A=e.deleteToast,D=e.isIn,S=e.isLoading,F=e.icon,z=e.theme,j=(0,r.Z)("Toastify__toast","Toastify__toast-theme--"+z,"Toastify__toast--"+v,((t={})["Toastify__toast--rtl"]=x,t)),H=d(b)?b({rtl:x,position:E,type:v,defaultClassName:j}):(0,r.Z)(j,b),Z=!!B,q=P[v],U={theme:z,type:v},Q=q&&q(U);return!1===F?Q=void 0:d(F)?Q=F(U):(0,o.isValidElement)(F)?Q=(0,o.cloneElement)(F,U):l(F)?Q=F:S&&(Q=P.spinner()),(0,o.createElement)(T,{isIn:D,done:A,position:E,preventExitTransition:i,nodeRef:c},(0,o.createElement)("div",Object.assign({id:M,onClick:g,className:H},u,{style:C,ref:c}),(0,o.createElement)("div",Object.assign({},D&&{role:k},{className:d(O)?O({type:v}):(0,r.Z)("Toastify__toast-body",O),style:_}),Q&&(0,o.createElement)("div",{className:(0,r.Z)("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!S,n))},Q),(0,o.createElement)("div",null,m)),function(e){if(e){var t={closeToast:h,type:v,theme:z};return d(e)?e(t):(0,o.isValidElement)(e)?(0,o.cloneElement)(e,t):void 0}}(f),(p||Z)&&(0,o.createElement)(N,Object.assign({},w&&!Z?{key:"pb-"+w}:{},{rtl:x,theme:z,delay:p,isRunning:s,isIn:D,closeToast:h,hide:y,type:v,style:R,className:L,controlledProgress:Z,progress:B}))))},B=T({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),x=T({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),M=T({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),A=T({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),D=function(e){var t=C(e),n=t.getToastToRender,a=t.containerRef,i=t.isToastActive,c=e.className,u=e.style,l=e.rtl,m=e.containerId;function p(e){var t,n=(0,r.Z)("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return d(c)?c({position:e,rtl:l,defaultClassName:n}):(0,r.Z)(n,f(c))}return(0,o.createElement)("div",{ref:a,className:"Toastify",id:m},n((function(e,t){var n=t.length?s({},u):s({},u,{pointerEvents:"none"});return(0,o.createElement)("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,o.createElement)(k,Object.assign({},n,{isIn:i(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?L:n.closeButton}),t)})))})))};D.defaultProps={position:v.TOP_RIGHT,transition:B,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,F,z,j=new Map,H=[],Z=!1;function q(){return Math.random().toString(36).substring(2,9)}function U(e){return e&&(l(e.toastId)||c(e.toastId))?e.toastId:q()}function Q(e,t){return j.size>0?E.emit(0,e,t):(H.push({content:e,options:t}),Z&&p&&(Z=!1,F=document.createElement("div"),document.body.appendChild(F),(0,a.render)((0,o.createElement)(D,Object.assign({},z)),F))),t.toastId}function V(e,t){return s({},t,{type:t&&t.type||e,toastId:U(t)})}function G(e){return function(t,n){return Q(t,V(e,n))}}function W(e,t){return Q(e,V(y.DEFAULT,t))}W.loading=function(e,t){return Q(e,V(y.DEFAULT,s({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=l(r)?W.loading(r,n):W.loading(r.render,s({},n,r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=s({type:e},c,n,{data:r}),i=l(t)?{render:t}:t;return o?W.update(o,s({},a,i)):W(i.render,s({},a,i)),r}W.dismiss(o)},f=d(e)?e():e;return f.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),f},W.success=G(y.SUCCESS),W.info=G(y.INFO),W.error=G(y.ERROR),W.warning=G(y.WARNING),W.warn=W.warning,W.dark=function(e,t){return Q(e,V(y.DEFAULT,s({theme:"dark"},t)))},W.dismiss=function(e){return E.emit(1,e)},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},W.isActive=function(e){var t=!1;return j.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=j.get(n||S);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=s({},o,t,{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,Q(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return d(e)&&E.on(4,e),function(){d(e)&&E.off(4,e)}},W.configure=function(e){void 0===e&&(e={}),Z=!0,z=e},W.POSITION=v,W.TYPE=y,E.on(2,(function(e){S=e.containerId||e,j.set(S,e),H.forEach((function(e){E.emit(0,e.content,e.options)})),H=[]})).on(3,(function(e){j.delete(e.containerId||e),0===j.size&&E.off(0).off(1).off(5),p&&F&&document.body.removeChild(F)}))}}]);