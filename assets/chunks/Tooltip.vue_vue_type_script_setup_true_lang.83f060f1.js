import{j as Dt,z as ut,d as Pt,h as me,aa as Ue,g as Ct,x as Ae,o as Ye,c as ze,k as lt,r as Ge,L as _e,$ as Je,l as Ke,H as $t,w as Bt,e as jt,T as Rt,a as St,t as Lt}from"./framework.ffbc72d9.js";import{a as Wt,b as Mt,i as Te,r as Nt}from"./isObject.df4d31a6.js";var Ht="[object Symbol]";function Vt(e){return typeof e=="symbol"||Wt(e)&&Mt(e)==Ht}var It=/\s/;function Ft(e){for(var t=e.length;t--&&It.test(e.charAt(t)););return t}var qt=/^\s+/;function Xt(e){return e&&e.slice(0,Ft(e)+1).replace(qt,"")}var Qe=0/0,Ut=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,zt=/^0o[0-7]+$/i,Gt=parseInt;function Ze(e){if(typeof e=="number")return e;if(Vt(e))return Qe;if(Te(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Te(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Xt(e);var r=Yt.test(e);return r||zt.test(e)?Gt(e.slice(2),r?2:8):Ut.test(e)?Qe:+e}var _t=function(){return Nt.Date.now()};const ke=_t;var Jt="Expected a function",Kt=Math.max,Qt=Math.min;function et(e,t,r){var n,a,o,c,i,s,u=0,f=!1,m=!1,b=!0;if(typeof e!="function")throw new TypeError(Jt);t=Ze(t)||0,Te(r)&&(f=!!r.leading,m="maxWait"in r,o=m?Kt(Ze(r.maxWait)||0,t):o,b="trailing"in r?!!r.trailing:b);function p(l){var d=n,A=a;return n=a=void 0,u=l,c=e.apply(A,d),c}function x(l){return u=l,i=setTimeout(w,t),f?p(l):c}function g(l){var d=l-s,A=l-u,k=t-d;return m?Qt(k,o-A):k}function h(l){var d=l-s,A=l-u;return s===void 0||d>=t||d<0||m&&A>=o}function w(){var l=ke();if(h(l))return O(l);i=setTimeout(w,g(l))}function O(l){return i=void 0,b&&n?p(l):(n=a=void 0,c)}function E(){i!==void 0&&clearTimeout(i),u=0,n=s=a=i=void 0}function v(){return i===void 0?c:O(ke())}function y(){var l=ke(),d=h(l);if(n=arguments,a=this,s=l,d){if(i===void 0)return x(s);if(m)return clearTimeout(i),i=setTimeout(w,t),p(s)}return i===void 0&&(i=setTimeout(w,t)),c}return y.cancel=E,y.flush=v,y}var C="top",S="bottom",L="right",$="left",Ce="auto",fe=[C,S,L,$],K="start",oe="end",Zt="clippingParents",pt="viewport",ne="popper",er="reference",tt=fe.reduce(function(e,t){return e.concat([t+"-"+K,t+"-"+oe])},[]),vt=[].concat(fe,[Ce]).reduce(function(e,t){return e.concat([t,t+"-"+K,t+"-"+oe])},[]),tr="beforeRead",rr="read",nr="afterRead",ar="beforeMain",ir="main",or="afterMain",sr="beforeWrite",fr="write",cr="afterWrite",ur=[tr,rr,nr,ar,ir,or,sr,fr,cr];function H(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function _(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function $e(e){if(typeof ShadowRoot>"u")return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function lr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!R(o)||!H(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){var i=a[c];i===!1?o.removeAttribute(c):o.setAttribute(c,i===!0?"":i)}))})}function pr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(s,u){return s[u]="",s},{});!R(a)||!H(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const vr={name:"applyStyles",enabled:!0,phase:"write",fn:lr,effect:pr,requires:["computeStyles"]};function N(e){return e.split("-")[0]}var G=Math.max,ye=Math.min,Q=Math.round;function De(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function dt(){return!/^((?!chrome|android).)*safari/i.test(De())}function Z(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&R(e)&&(a=e.offsetWidth>0&&Q(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Q(n.height)/e.offsetHeight||1);var c=_(e)?j(e):window,i=c.visualViewport,s=!dt()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,m=n.width/a,b=n.height/o;return{width:m,height:b,top:f,right:u+m,bottom:f+b,left:u,x:u,y:f}}function Be(e){var t=Z(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function mt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&$e(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return j(e).getComputedStyle(e)}function dr(e){return["table","td","th"].indexOf(H(e))>=0}function F(e){return((_(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return H(e)==="html"?e:e.assignedSlot||e.parentNode||($e(e)?e.host:null)||F(e)}function rt(e){return!R(e)||V(e).position==="fixed"?null:e.offsetParent}function mr(e){var t=/firefox/i.test(De()),r=/Trident/i.test(De());if(r&&R(e)){var n=V(e);if(n.position==="fixed")return null}var a=be(e);for($e(a)&&(a=a.host);R(a)&&["html","body"].indexOf(H(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(e){for(var t=j(e),r=rt(e);r&&dr(r)&&V(r).position==="static";)r=rt(r);return r&&(H(r)==="html"||H(r)==="body"&&V(r).position==="static")?t:r||mr(e)||t}function je(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ae(e,t,r){return G(e,ye(t,r))}function hr(e,t,r){var n=ae(e,t,r);return n>r?r:n}function ht(){return{top:0,right:0,bottom:0,left:0}}function gt(e){return Object.assign({},ht(),e)}function yt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var gr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,gt(typeof t!="number"?t:yt(t,fe))};function yr(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,i=N(r.placement),s=je(i),u=[$,L].indexOf(i)>=0,f=u?"height":"width";if(!(!o||!c)){var m=gr(a.padding,r),b=Be(o),p=s==="y"?C:$,x=s==="y"?S:L,g=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],h=c[s]-r.rects.reference[s],w=ce(o),O=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,E=g/2-h/2,v=m[p],y=O-b[f]-m[x],l=O/2-b[f]/2+E,d=ae(v,l,y),A=s;r.modifiersData[n]=(t={},t[A]=d,t.centerOffset=d-l,t)}}function br(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||mt(t.elements.popper,a)&&(t.elements.arrow=a))}const wr={name:"arrow",enabled:!0,phase:"main",fn:yr,effect:br,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var xr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Or(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:Q(r*a)/a||0,y:Q(n*a)/a||0}}function nt(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,m=e.isFixed,b=c.x,p=b===void 0?0:b,x=c.y,g=x===void 0?0:x,h=typeof f=="function"?f({x:p,y:g}):{x:p,y:g};p=h.x,g=h.y;var w=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),E=$,v=C,y=window;if(u){var l=ce(r),d="clientHeight",A="clientWidth";if(l===j(r)&&(l=F(r),V(l).position!=="static"&&i==="absolute"&&(d="scrollHeight",A="scrollWidth")),l=l,a===C||(a===$||a===L)&&o===oe){v=S;var k=m&&l===y&&y.visualViewport?y.visualViewport.height:l[d];g-=k-n.height,g*=s?1:-1}if(a===$||(a===C||a===S)&&o===oe){E=L;var T=m&&l===y&&y.visualViewport?y.visualViewport.width:l[A];p-=T-n.width,p*=s?1:-1}}var D=Object.assign({position:i},u&&xr),W=f===!0?Or({x:p,y:g},j(r)):{x:p,y:g};if(p=W.x,g=W.y,s){var P;return Object.assign({},D,(P={},P[v]=O?"0":"",P[E]=w?"0":"",P.transform=(y.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",P))}return Object.assign({},D,(t={},t[v]=O?g+"px":"",t[E]=w?p+"px":"",t.transform="",t))}function Er(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,c=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:N(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,nt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,nt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Er,data:{}};var he={passive:!0};function kr(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,c=n.resize,i=c===void 0?!0:c,s=j(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(f){f.addEventListener("scroll",r.update,he)}),i&&s.addEventListener("resize",r.update,he),function(){o&&u.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),i&&s.removeEventListener("resize",r.update,he)}}const Tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:kr,data:{}};var Dr={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,function(t){return Dr[t]})}var Pr={start:"end",end:"start"};function at(e){return e.replace(/start|end/g,function(t){return Pr[t]})}function Re(e){var t=j(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Se(e){return Z(F(e)).left+Re(e).scrollLeft}function Cr(e,t){var r=j(e),n=F(e),a=r.visualViewport,o=n.clientWidth,c=n.clientHeight,i=0,s=0;if(a){o=a.width,c=a.height;var u=dt();(u||!u&&t==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:c,x:i+Se(e),y:s}}function $r(e){var t,r=F(e),n=Re(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+Se(e),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=G(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:c,x:i,y:s}}function Le(e){var t=V(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function bt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:R(e)&&Le(e)?e:bt(be(e))}function ie(e,t){var r;t===void 0&&(t=[]);var n=bt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=j(n),c=a?[o].concat(o.visualViewport||[],Le(n)?n:[]):n,i=t.concat(c);return a?i:i.concat(ie(be(c)))}function Pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Br(e,t){var r=Z(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function it(e,t,r){return t===pt?Pe(Cr(e,r)):_(t)?Br(t,r):Pe($r(F(e)))}function jr(e){var t=ie(be(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,n=r&&R(e)?ce(e):e;return _(n)?t.filter(function(a){return _(a)&&mt(a,n)&&H(a)!=="body"}):[]}function Rr(e,t,r,n){var a=t==="clippingParents"?jr(e):[].concat(t),o=[].concat(a,[r]),c=o[0],i=o.reduce(function(s,u){var f=it(e,u,n);return s.top=G(f.top,s.top),s.right=ye(f.right,s.right),s.bottom=ye(f.bottom,s.bottom),s.left=G(f.left,s.left),s},it(e,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function wt(e){var t=e.reference,r=e.element,n=e.placement,a=n?N(n):null,o=n?ee(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(a){case C:s={x:c,y:t.y-r.height};break;case S:s={x:c,y:t.y+t.height};break;case L:s={x:t.x+t.width,y:i};break;case $:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var u=a?je(a):null;if(u!=null){var f=u==="y"?"height":"width";switch(o){case K:s[u]=s[u]-(t[f]/2-r[f]/2);break;case oe:s[u]=s[u]+(t[f]/2-r[f]/2);break}}return s}function se(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,c=o===void 0?e.strategy:o,i=r.boundary,s=i===void 0?Zt:i,u=r.rootBoundary,f=u===void 0?pt:u,m=r.elementContext,b=m===void 0?ne:m,p=r.altBoundary,x=p===void 0?!1:p,g=r.padding,h=g===void 0?0:g,w=gt(typeof h!="number"?h:yt(h,fe)),O=b===ne?er:ne,E=e.rects.popper,v=e.elements[x?O:b],y=Rr(_(v)?v:v.contextElement||F(e.elements.popper),s,f,c),l=Z(e.elements.reference),d=wt({reference:l,element:E,strategy:"absolute",placement:a}),A=Pe(Object.assign({},E,d)),k=b===ne?A:l,T={top:y.top-k.top+w.top,bottom:k.bottom-y.bottom+w.bottom,left:y.left-k.left+w.left,right:k.right-y.right+w.right},D=e.modifiersData.offset;if(b===ne&&D){var W=D[a];Object.keys(T).forEach(function(P){var q=[L,S].indexOf(P)>=0?1:-1,X=[C,S].indexOf(P)>=0?"y":"x";T[P]+=W[X]*q})}return T}function Sr(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?vt:s,f=ee(n),m=f?i?tt:tt.filter(function(x){return ee(x)===f}):fe,b=m.filter(function(x){return u.indexOf(x)>=0});b.length===0&&(b=m);var p=b.reduce(function(x,g){return x[g]=se(e,{placement:g,boundary:a,rootBoundary:o,padding:c})[N(g)],x},{});return Object.keys(p).sort(function(x,g){return p[x]-p[g]})}function Lr(e){if(N(e)===Ce)return[];var t=ge(e);return[at(e),t,at(t)]}function Wr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,f=r.boundary,m=r.rootBoundary,b=r.altBoundary,p=r.flipVariations,x=p===void 0?!0:p,g=r.allowedAutoPlacements,h=t.options.placement,w=N(h),O=w===h,E=s||(O||!x?[ge(h)]:Lr(h)),v=[h].concat(E).reduce(function(J,I){return J.concat(N(I)===Ce?Sr(t,{placement:I,boundary:f,rootBoundary:m,padding:u,flipVariations:x,allowedAutoPlacements:g}):I)},[]),y=t.rects.reference,l=t.rects.popper,d=new Map,A=!0,k=v[0],T=0;T<v.length;T++){var D=v[T],W=N(D),P=ee(D)===K,q=[C,S].indexOf(W)>=0,X=q?"width":"height",B=se(t,{placement:D,boundary:f,rootBoundary:m,altBoundary:b,padding:u}),M=q?P?L:$:P?S:C;y[X]>l[X]&&(M=ge(M));var ue=ge(M),U=[];if(o&&U.push(B[W]<=0),i&&U.push(B[M]<=0,B[ue]<=0),U.every(function(J){return J})){k=D,A=!1;break}d.set(D,U)}if(A)for(var le=x?3:1,we=function(I){var re=v.find(function(ve){var Y=d.get(ve);if(Y)return Y.slice(0,I).every(function(xe){return xe})});if(re)return k=re,"break"},te=le;te>0;te--){var pe=we(te);if(pe==="break")break}t.placement!==k&&(t.modifiersData[n]._skip=!0,t.placement=k,t.reset=!0)}}const Mr={name:"flip",enabled:!0,phase:"main",fn:Wr,requiresIfExists:["offset"],data:{_skip:!1}};function ot(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function st(e){return[C,L,S,$].some(function(t){return e[t]>=0})}function Nr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,c=se(t,{elementContext:"reference"}),i=se(t,{altBoundary:!0}),s=ot(c,n),u=ot(i,a,o),f=st(s),m=st(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":m})}const Hr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Nr};function Vr(e,t,r){var n=N(e),a=[$,C].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=o[0],i=o[1];return c=c||0,i=(i||0)*a,[$,L].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function Ir(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,c=vt.reduce(function(f,m){return f[m]=Vr(m,t.rects,o),f},{}),i=c[t.placement],s=i.x,u=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=c}const Fr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ir};function qr(e){var t=e.state,r=e.name;t.modifiersData[r]=wt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Xr={name:"popperOffsets",enabled:!0,phase:"read",fn:qr,data:{}};function Ur(e){return e==="x"?"y":"x"}function Yr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,f=r.altBoundary,m=r.padding,b=r.tether,p=b===void 0?!0:b,x=r.tetherOffset,g=x===void 0?0:x,h=se(t,{boundary:s,rootBoundary:u,padding:m,altBoundary:f}),w=N(t.placement),O=ee(t.placement),E=!O,v=je(w),y=Ur(v),l=t.modifiersData.popperOffsets,d=t.rects.reference,A=t.rects.popper,k=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,T=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(l){if(o){var P,q=v==="y"?C:$,X=v==="y"?S:L,B=v==="y"?"height":"width",M=l[v],ue=M+h[q],U=M-h[X],le=p?-A[B]/2:0,we=O===K?d[B]:A[B],te=O===K?-A[B]:-d[B],pe=t.elements.arrow,J=p&&pe?Be(pe):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ht(),re=I[q],ve=I[X],Y=ae(0,d[B],J[B]),xe=E?d[B]/2-le-Y-re-T.mainAxis:we-Y-re-T.mainAxis,xt=E?-d[B]/2+le+Y+ve+T.mainAxis:te+Y+ve+T.mainAxis,Oe=t.elements.arrow&&ce(t.elements.arrow),Ot=Oe?v==="y"?Oe.clientTop||0:Oe.clientLeft||0:0,We=(P=D==null?void 0:D[v])!=null?P:0,Et=M+xe-We-Ot,At=M+xt-We,Me=ae(p?ye(ue,Et):ue,M,p?G(U,At):U);l[v]=Me,W[v]=Me-M}if(i){var Ne,kt=v==="x"?C:$,Tt=v==="x"?S:L,z=l[y],de=y==="y"?"height":"width",He=z+h[kt],Ve=z-h[Tt],Ee=[C,$].indexOf(w)!==-1,Ie=(Ne=D==null?void 0:D[y])!=null?Ne:0,Fe=Ee?He:z-d[de]-A[de]-Ie+T.altAxis,qe=Ee?z+d[de]+A[de]-Ie-T.altAxis:Ve,Xe=p&&Ee?hr(Fe,z,qe):ae(p?Fe:He,z,p?qe:Ve);l[y]=Xe,W[y]=Xe-z}t.modifiersData[n]=W}}const zr={name:"preventOverflow",enabled:!0,phase:"main",fn:Yr,requiresIfExists:["offset"]};function Gr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function _r(e){return e===j(e)||!R(e)?Re(e):Gr(e)}function Jr(e){var t=e.getBoundingClientRect(),r=Q(t.width)/e.offsetWidth||1,n=Q(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Kr(e,t,r){r===void 0&&(r=!1);var n=R(t),a=R(t)&&Jr(t),o=F(t),c=Z(e,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((H(t)!=="body"||Le(o))&&(i=_r(t)),R(t)?(s=Z(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=Se(o))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function Qr(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&a(s)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function Zr(e){var t=Qr(e);return ur.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function en(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function tn(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ft={placement:"bottom",modifiers:[],strategy:"absolute"};function ct(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function rn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?ft:a;return function(i,s,u){u===void 0&&(u=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ft,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},m=[],b=!1,p={state:f,setOptions:function(w){var O=typeof w=="function"?w(f.options):w;g(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:_(i)?ie(i):i.contextElement?ie(i.contextElement):[],popper:ie(s)};var E=Zr(tn([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(v){return v.enabled}),x(),p.update()},forceUpdate:function(){if(!b){var w=f.elements,O=w.reference,E=w.popper;if(ct(O,E)){f.rects={reference:Kr(O,ce(E),f.options.strategy==="fixed"),popper:Be(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(T){return f.modifiersData[T.name]=Object.assign({},T.data)});for(var v=0;v<f.orderedModifiers.length;v++){if(f.reset===!0){f.reset=!1,v=-1;continue}var y=f.orderedModifiers[v],l=y.fn,d=y.options,A=d===void 0?{}:d,k=y.name;typeof l=="function"&&(f=l({state:f,options:A,name:k,instance:p})||f)}}}},update:en(function(){return new Promise(function(h){p.forceUpdate(),h(f)})}),destroy:function(){g(),b=!0}};if(!ct(i,s))return p;p.setOptions(u).then(function(h){!b&&u.onFirstUpdate&&u.onFirstUpdate(h)});function x(){f.orderedModifiers.forEach(function(h){var w=h.name,O=h.options,E=O===void 0?{}:O,v=h.effect;if(typeof v=="function"){var y=v({state:f,name:w,instance:p,options:E}),l=function(){};m.push(y||l)}})}function g(){m.forEach(function(h){return h()}),m=[]}return p}}var nn=[Tr,Xr,Ar,vr,Fr,Mr,zr,wr,Hr],an=rn({defaultModifiers:nn});const on=(e,t)=>{const r=n=>{e.value&&n.target&&(e.value.contains(n.target)||t(n))};Dt(()=>{document.addEventListener("click",r)}),ut(()=>{document.removeEventListener("click",r)})},sn=lt("div",{id:"arrow","data-popper-arrow":""},null,-1),un=Pt({name:"VkTooltip",__name:"Tooltip",props:{content:{},trigger:{default:"hover"},placement:{default:"bottom"},manual:{type:Boolean},popperOptions:{},transition:{default:"fade"},openDelay:{default:0},closeDelay:{default:0}},emits:["visible-change","click-outside"],setup(e,{expose:t,emit:r}){const n=e,a=r,o=me(!1),c=me(),i=me(),s=me();let u=null,f=Ue({}),m=Ue({}),b=0,p=0;const x=Ct(()=>({placement:n.placement,modifiers:[{name:"offset",options:{offset:[0,9]}}],...n.popperOptions})),g=()=>{b++,console.log("open times",b),o.value=!0,a("visible-change",!0)},h=()=>{p++,console.log("close times",p),o.value=!1,a("visible-change",!1)},w=et(g,n.openDelay),O=et(h,n.closeDelay),E=()=>{O.cancel(),w()},v=()=>{w.cancel(),O()},y=()=>{o.value?v():E()};on(s,()=>{n.trigger==="click"&&o.value&&!n.manual&&v(),o.value&&a("click-outside",!0)});const l=()=>{n.trigger==="hover"?(f.mouseenter=E,m.mouseleave=v):n.trigger==="click"&&(f.click=y)};return n.manual||l(),Ae(()=>n.manual,d=>{d?(f={},m={}):l()}),Ae(()=>n.trigger,(d,A)=>{d!==A&&(f={},m={},l())}),Ae(o,d=>{d&&(i.value&&c.value?u=an(i.value,c.value,x.value):u==null||u.destroy())},{flush:"post"}),ut(()=>{u==null||u.destroy()}),t({show:E,hide:v}),(d,A)=>(Ye(),ze("div",_e({class:"vk-tooltip",ref_key:"popperContainerNode",ref:s},Je(Ke(m),!0)),[lt("div",_e({class:"vk-tooltip__trigger",ref_key:"triggerNode",ref:i},Je(Ke(f),!0)),[Ge(d.$slots,"default")],16),$t(Rt,{name:d.transition},{default:Bt(()=>[o.value?(Ye(),ze("div",{key:0,class:"vk-tooltip__popper",ref_key:"popperNode",ref:c},[Ge(d.$slots,"content",{},()=>[St(Lt(d.content),1)]),sn],512)):jt("",!0)]),_:3},8,["name"])],16))}});export{un as _};