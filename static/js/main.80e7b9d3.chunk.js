(this["webpackJsonpavaya-test"]=this["webpackJsonpavaya-test"]||[]).push([[0],{16:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(17),s=t.n(c),o=(t(23),t(3)),i=t(6),r=t(2),b=(t(10),t(24),t(0)),j=function(e){var a,t=e.shape,n=e.size,l=e.pulse,c=e.type,s=e.disabled,o=e.icon,i=e.status,r=e.onClick,j=e.children,u=e.spinner,d=["neo-btn"],h="";switch(c){case"primary":d.push("neo-btn-primary"),d.push("neo-btn-primary--".concat(i));break;case"secondary":d.push("neo-btn-secondary"),d.push("neo-btn-secondary--".concat(i));break;case"tertiary":d.push("neo-btn-tertiary"),d.push("neo-btn-tertiary--".concat(i))}switch(("string"===typeof j||j instanceof String)&&(h=j),t){case"circle":d=d.map((function(e){return e.replace("neo-btn","neo-btn-circle")}));break;case"square":d=d.map((function(e){return e.replace("neo-btn","neo-btn-square")}))}switch(n){case"compact":d.push("neo-btn--compact");break;case"wide":d.push("neo-btn--wide")}switch(l&&d.push("neo-pulse"),o&&d.push(o),t){case"circle":case"square":o&&"false"!==o||console.warn("Icon is required"),a=Object(b.jsx)("button",{className:d.join(" "),"aria-label":h,onClick:r,disabled:s});break;default:a=Object(b.jsxs)("button",{className:d.join(" "),onClick:r,disabled:s,children:[u?Object(b.jsx)("span",{className:"neo-spinner"}):null,j]})}return a},u=t(32),d=function(e){var a=e.label,t=e.onChange,l=Object(n.useState)(!1),c=Object(o.a)(l,2),s=c[0],i=c[1],r=Object(u.a)(),j=function(){i(!s),t(!s)};return Object(b.jsx)("div",{className:"neo-form-control",children:Object(b.jsxs)("label",{className:"neo-switch",htmlFor:r,children:[Object(b.jsx)("input",{id:r,type:"checkbox",defaultChecked:s,onChange:function(){return j()}}),Object(b.jsx)("i",{className:"neo-switch__icon"}),a]})})},h=function(e){var a=e.children;return Object(b.jsx)("nav",{className:"neo-navbar",children:a||null})},O=function(e){var a=e.open,t=void 0===a||a,n=e.onClick;return Object(b.jsx)("div",{className:t?"left-menu active":"left-menu",children:Object(b.jsx)("div",{className:t?"neo-leftnav--collapsible neo-slide neo-slide--in-left":"neo-leftnav--collapsible neo-slide neo-slide--out-left",children:Object(b.jsx)("div",{className:"neo-leftnav--wrapper",children:Object(b.jsx)("nav",{className:"neo-leftnav",children:Object(b.jsxs)("ul",{className:"neo-leftnav__nav",role:"menu",children:[Object(b.jsx)("li",{className:"neo-leftnav__main",children:Object(b.jsx)(i.b,{role:"menuitem",tabIndex:"1",to:"/",onClick:n,children:"Home"})}),Object(b.jsx)("li",{className:"neo-leftnav__main",children:Object(b.jsx)(i.b,{role:"menuitem",tabIndex:"0",to:"/buttons",onClick:n,children:"Buttons"})}),Object(b.jsx)("li",{className:"neo-leftnav__main",children:Object(b.jsx)(i.b,{role:"menuitem",tabIndex:"0",to:"/tooltips",onClick:n,children:"Tooltips"})})]})})})})})},v=function(e){var a=e.children;return Object(b.jsx)("div",{className:"neo-nav--left",style:{display:"flex",justifyContent:"space-between"},children:a||null})},m=function(e){var a=e.options,t=e.label,n=e.onChange,l=e.name,c=void 0===l?Object(u.a)():l;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h5",{children:t}),Object(b.jsx)("div",{className:"neo-input-group",children:a?a.map((function(e,a){var t=Object(u.a)();return Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)("input",{className:"neo-radio",type:"radio",name:c,value:e.value,id:t,onChange:function(e){return n(e.target.value)},defaultChecked:0===a}),Object(b.jsx)("label",{htmlFor:t,children:e.name})]},a)})):null})]})},x=function(e){var a=e.label,t=e.options,l=e.hint,c=e.onChange,s=Object(n.useState)(t?t[0].value:0),i=Object(o.a)(s,2),r=i[0],j=i[1];return Object(b.jsx)("div",{className:"neo-form-control",children:Object(b.jsxs)("div",{className:"neo-input-group",children:[a?Object(b.jsx)("label",{htmlFor:"color1",children:a}):null,Object(b.jsx)("div",{className:"neo-select",children:Object(b.jsx)("select",{className:"neo-icon-chevron-down","aria-describedby":a,value:r,onChange:function(e){j(e.target.value),c(e.target.value)},children:t?t.map((function(e){var a=Object(u.a)();return Object(b.jsx)("option",{value:e.value,children:e.label},a)})):null})}),l?Object(b.jsx)("div",{className:"neo-input-hint",children:l}):null]})})},p=function(e){var a=e.position,t=void 0===a?"right":a,n=e.children,l=e.text,c=["neo-tooltip__content"];return e.multiline&&c.push("neo-tooltip__content--multiline"),Object(b.jsxs)("div",{className:"neo-tooltip neo-tooltip--".concat(t," neo-tooltip--onhover"),children:[n,Object(b.jsxs)("div",{className:c.join(" "),children:[Object(b.jsx)("div",{className:"neo-arrow"}),l]})]})},f=(t(16),function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],r=s[1],u=Object(n.useState)(!1),h=Object(o.a)(u,2),O=h[0],v=h[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),g=f[0],y=f[1],N=Object(n.useState)("default"),C=Object(o.a)(N,2),w=C[0],k=C[1],S=Object(n.useState)("Text"),_=Object(o.a)(S,2),D=_[0],I=_[1],q=Object(n.useState)("default"),T=Object(o.a)(q,2),F=T[0],H=T[1],L=Object(n.useState)("default"),R=Object(o.a)(L,2),z=R[0],B=R[1],P=Object(n.useState)("default"),U=Object(o.a)(P,2),J=U[0],M=U[1];return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"sandbox",children:[Object(b.jsx)("h4",{children:"Buttons Sandbox"}),Object(b.jsx)("div",{className:"buttons-container",children:Object(b.jsx)("div",{className:"button-box",children:Object(b.jsx)(j,{status:F,text:"default",onClick:function(){console.log("clickHandler")},type:z,disabled:t,pulse:i,size:J,shape:w,icon:g,spinner:O,children:D})})})]}),Object(b.jsxs)("div",{className:"settings-panel",children:[Object(b.jsx)(d,{label:"Disable",onChange:l}),Object(b.jsx)(d,{label:"Pulse",onChange:r}),Object(b.jsx)(d,{label:"Spinner",onChange:v}),Object(b.jsx)("textarea",{onChange:function(e){return I(e.target.value)},rows:"4",defaultValue:D}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:M,label:"Size",options:[{name:"Default",value:"default"},{name:"Compact",value:"compact"},{name:"Wide",value:"wide"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:B,label:"Type",options:[{name:"Default",value:"default"},{name:"Primary",value:"primary"},{name:"Secondary",value:"secondary"},{name:"Tertiary",value:"tertiary"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:H,label:"Status",options:[{name:"Default",value:"default"},{name:"Success",value:"success"},{name:"Alert",value:"alert"},{name:"Warning",value:"warning"},{name:"Info",value:"info"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:k,label:"Shape",options:[{name:"Default",value:"default"},{name:"Circle",value:"circle"},{name:"Square",value:"square"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(x,{onChange:y,label:"Icon",hint:"Select icon name",options:[{label:"select value",value:!1},{label:"settings",value:"neo-icon-settings"},{label:"error",value:"neo-icon-error"},{label:"chat",value:"neo-icon-chat"},{label:"add",value:"neo-icon-add"},{label:"add-circle",value:"neo-icon-add-circle"},{label:"address",value:"neo-icon-address"},{label:"address-book",value:"neo-icon-address-book"},{label:"agents",value:"neo-icon-agents"},{label:"analytics",value:"neo-icon-analytics"},{label:"available",value:"neo-icon-available"},{label:"available-filled",value:"neo-icon-available-filled"},{label:"away",value:"neo-icon-away"},{label:"away-filled",value:"neo-icon-away-filled"},{label:"bot",value:"neo-icon-bot"}]})]})]})}),g=function(){var e=Object(n.useState)("right"),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est."),s=Object(o.a)(c,2),i=s[0],r=s[1],u=Object(n.useState)(!1),h=Object(o.a)(u,2),O=h[0],v=h[1];return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"sandbox",children:[Object(b.jsx)("h4",{children:"Tooltip Sandbox"}),Object(b.jsx)("div",{className:"buttons-container",children:Object(b.jsx)("form",{className:"neo-form",style:{width:"100%",height:"15rem"},children:Object(b.jsx)("div",{className:"tooltip-box",children:Object(b.jsx)(p,{position:t,text:i,multiline:O,children:Object(b.jsx)(j,{status:"default",text:"default",onClick:function(){console.log("clickHandler")},type:"primary",children:"Tooltip"})})})})})]}),Object(b.jsxs)("div",{className:"settings-panel",children:[Object(b.jsx)(d,{label:"Is Multiline",onChange:v}),Object(b.jsx)("textarea",{onChange:function(e){return r(e.target.value)},rows:"6",defaultValue:i}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:l,label:"Position",options:[{name:"Right",value:"right"},{name:"Left",value:"left"},{name:"Up",value:"up"},{name:"Up Right",value:"up-right"},{name:"Up Left",value:"up-left"},{name:"Down",value:"down"},{name:"Down Right",value:"down-right"},{name:"Down Left",value:"down-left"}]})]})]})},y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Home"})})},N=t.p+"static/media/avaya-logo-header.a9a54b62.svg",C=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),j=s[0],u=s[1];return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{style:{width:"100vw",height:"100vh"},className:j?"neo-dark neo-global-colors":"neo-dynamic neo-global-colors",children:[Object(b.jsx)(h,{children:Object(b.jsxs)(v,{children:[Object(b.jsx)("div",{className:"neo-badge__navbutton",children:Object(b.jsx)("button",{className:"neo-badge__navbutton--content neo-btn neo-icon-menu",onClick:function(){return l(!t)}})}),Object(b.jsx)("a",{href:"/",className:"neo-navbar__brand",title:"Neo Framework",children:Object(b.jsx)("img",{src:N,alt:"avaya logo"})}),Object(b.jsx)(d,{label:"Dark theme",onChange:u})]})}),Object(b.jsxs)("div",{className:"layout-box",children:[Object(b.jsx)(O,{open:t,onClick:function(){return l(!t)}}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(y,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/tooltips",children:Object(b.jsx)(g,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/buttons",children:Object(b.jsx)(f,{})})]})]})]})})};s.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.80e7b9d3.chunk.js.map