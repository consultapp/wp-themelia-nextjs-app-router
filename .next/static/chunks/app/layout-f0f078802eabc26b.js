(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4398:function(e,t,n){Promise.resolve().then(n.t.bind(n,7204,23)),Promise.resolve().then(n.t.bind(n,2363,23)),Promise.resolve().then(n.bind(n,3470)),Promise.resolve().then(n.t.bind(n,8920,23)),Promise.resolve().then(n.bind(n,6087))},6087:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(9268),s=n(6008),a=n(6006),i=n(5846),l=n.n(i),c=n(9569),o=n.n(c);function u(e){let{isOpen:t,toggleButton:n}=e;return(0,r.jsxs)("nav",{className:"menu menu-primary font-secondary",role:"navigation",id:"menu-primary",itemScope:"itemScope",itemType:"http://schema.org/SiteNavigationElement",children:[(0,r.jsxs)("button",{id:"menu-toggle",className:"menu-toggle hamburger hamburger--spin main-menu-btn is-not-active font-secondary ".concat(o().buttonHamburger),type:"button",onClick:()=>{n(t)},children:[(0,r.jsx)("span",{className:"hamburger-box",children:(0,r.jsx)("span",{className:"hamburger-inner"})}),(0,r.jsx)("span",{className:"screen-reader-text",children:"Menu"})]}),t&&(0,r.jsxs)("ul",{id:"menu-primary-items",className:"menu-items sm sm-simple",children:[(0,r.jsx)("li",{className:"menu-item menu-item-type-post_type menu-item-object-page",children:(0,r.jsx)(l(),{href:"/page/projects-react-next/",children:"React/Next"})}),(0,r.jsx)("li",{className:"menu-item menu-item-type-taxonomy menu-item-object-category",children:(0,r.jsx)(l(),{href:"/post/simple-bot-for-telegram-php/",children:"Telegram Bots"})}),(0,r.jsx)("li",{className:"menu-item menu-item-type-post_type menu-item-object-post",children:(0,r.jsx)(l(),{href:"/post/%d1%85%d0%be%d1%81%d1%82%d0%b8%d0%bd%d0%b3/",children:"Хостинг"})}),(0,r.jsx)("li",{className:"menu-item menu-item-type-custom menu-item-object-custom",children:(0,r.jsx)("a",{href:"mailto:info@consultapp.ru",children:"info@consultapp.ru"})})]})]})}let m=["mobile","iphone","android"];function d(){{let e=!!window&&window.navigator.userAgent.toLowerCase();return m.reduce((t,n)=>!!e.includes(n)||t,!1)}}function f(){let e=(0,s.usePathname)(),t=(0,a.useMemo)(d,[]),[n,i]=(0,a.useState)(!t),l=(0,a.useCallback)(e=>{i(!e)},[]);return(0,a.useLayoutEffect)(()=>{t&&n&&i(!1)},[e]),(0,r.jsx)(u,{isOpen:n,toggleButton:l})}},3470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(9268),s=n(6006),a=n(5846),i=n.n(a);let l={pending:"pending",fulfilled:"fulfilled",rejected:"rejected",idle:"idle"};var c=n(5017),o=n.n(c);function u(){return(0,r.jsx)("div",{className:o().loader})}var m=n(2248),d=n.n(m);function f(e){let{result:t,search:n,handleSearchChange:s}=e,{loadingStatus:a,data:c}=t;return(0,r.jsx)("section",{id:"search-2",className:"widget widget_search",children:(0,r.jsxs)("form",{role:"search",className:"search-form",action:"/",children:[(0,r.jsxs)("label",{className:"font-secondary label-search",children:[(0,r.jsx)("span",{className:"screen-reader-text",children:"Поиск:"}),(0,r.jsx)("input",{type:"search",className:"search-field font-primary",placeholder:"Поиск…",value:n,onChange:s})]}),c.length>0&&a===l.fulfilled&&(0,r.jsx)("ul",{className:d().search,children:c.map(e=>(0,r.jsx)("li",{className:d().searchLi,children:(0,r.jsx)(i(),{href:e.url,children:e.title})},e.url))}),0===c.length&&a===l.fulfilled&&(0,r.jsx)("div",{className:d().search,children:"No results"}),a===l.pending&&(0,r.jsx)("div",{className:d().search,children:(0,r.jsx)(u,{})}),a===l.rejected&&(0,r.jsx)("div",{className:d().search,children:"Loading error."})]})})}var h=n(6008);async function p(e){let t=await fetch("/api/search?s=".concat(e.replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"")));return await t.json()}let j={loadingStatus:l.idle,data:[]};function x(){let[e,t]=(0,s.useState)(""),[n,a]=(0,s.useState)(j),i=(0,h.usePathname)(),c=(0,s.useRef)(),o=(0,s.useCallback)(e=>{e.preventDefault(),t(e.target.value)},[]);return(0,s.useEffect)(()=>{if(e.length<1){c&&clearTimeout(c.current),a(j);return}c&&clearTimeout(c.current),a({...j,loadingStatus:l.pending}),c.current=setTimeout(()=>{p(e).then(e=>{a({data:e,loadingStatus:l.fulfilled})}).catch(()=>{a({...j,loadingStatus:l.rejected})})},300)},[e]),(0,s.useEffect)(()=>{a(j),t("")},[i]),(0,r.jsx)(f,{handleSearchChange:o,search:e,result:n})}},7204:function(){},2363:function(){},5017:function(e){e.exports={loader:"styles_loader__bu5BF",spin:"styles_spin__GfjcW"}},2248:function(e){e.exports={search:"style_search__HIje6",searchLi:"style_searchLi__GH0k_"}},9569:function(e){e.exports={buttonHamburger:"style_buttonHamburger___AMU6"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),s=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,c={},o=null,u=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:u,props:c,_owner:i.current}}t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},5846:function(e,t,n){e.exports=n(8920)},6008:function(e,t,n){e.exports=n(3027)}},function(e){e.O(0,[920,667,488,744],function(){return e(e.s=4398)}),_N_E=e.O()}]);