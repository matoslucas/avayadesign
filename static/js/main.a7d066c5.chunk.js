(this["webpackJsonpavaya-test"]=this["webpackJsonpavaya-test"]||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(17),s=a.n(c),o=(a(23),a(3)),i=a(6),r=a(2),b=(a(10),a(24),a(0)),j=function(e){var t,a=e.shape,n=e.size,l=e.pulse,c=e.type,s=e.disabled,o=e.icon,i=e.status,r=e.onClick,j=e.children,u=e.spinner,d=["neo-btn"],h="";switch(c){case"primary":d.push("neo-btn-primary"),d.push("neo-btn-primary--".concat(i));break;case"secondary":d.push("neo-btn-secondary"),d.push("neo-btn-secondary--".concat(i));break;case"tertiary":d.push("neo-btn-tertiary"),d.push("neo-btn-tertiary--".concat(i))}switch(("string"===typeof j||j instanceof String)&&(h=j),a){case"circle":d=d.map((function(e){return e.replace("neo-btn","neo-btn-circle")}));break;case"square":d=d.map((function(e){return e.replace("neo-btn","neo-btn-square")}))}switch(n){case"compact":d.push("neo-btn--compact");break;case"wide":d.push("neo-btn--wide")}switch(l&&d.push("neo-pulse"),o&&d.push(o),a){case"circle":case"square":t=Object(b.jsx)("button",{className:d.join(" "),"aria-label":h,onClick:r,disabled:s});break;default:t=Object(b.jsxs)("button",{className:d.join(" "),onClick:r,disabled:s,children:[u?Object(b.jsx)("span",{className:"neo-spinner"}):null,j]})}return t},u=a(32),d=function(e){var t=e.label,a=e.onChange,l=Object(n.useState)(!1),c=Object(o.a)(l,2),s=c[0],i=c[1],r=Object(u.a)(),j=function(){i(!s),a(!s)};return Object(b.jsx)("div",{className:"neo-form-control",children:Object(b.jsxs)("label",{className:"neo-switch",htmlFor:r,children:[Object(b.jsx)("input",{id:r,type:"checkbox",defaultChecked:s,onChange:function(){return j()}}),Object(b.jsx)("i",{className:"neo-switch__icon"}),t]})})},h=function(e){var t=e.children;return Object(b.jsx)("nav",{className:"neo-navbar",children:t||null})},O=function(e){var t=e.open,a=void 0===t||t,n=e.onClick;return Object(b.jsx)("div",{className:a?"left-menu active":"left-menu",children:Object(b.jsx)("div",{className:a?"neo-leftnav--collapsible neo-slide neo-slide--in-left":"neo-leftnav--collapsible neo-slide neo-slide--out-left",children:Object(b.jsx)("div",{className:"neo-leftnav--wrapper",children:Object(b.jsx)("nav",{className:"neo-leftnav",children:Object(b.jsxs)("ul",{className:"neo-leftnav__nav",role:"menu",children:[Object(b.jsx)("li",{className:"neo-leftnav__main",children:Object(b.jsx)(i.b,{role:"menuitem",tabIndex:"1",to:"/",onClick:n,children:"Home"})}),Object(b.jsx)("li",{className:"neo-leftnav__main",children:Object(b.jsx)(i.b,{role:"menuitem",tabIndex:"0",to:"/buttons",onClick:n,children:"Buttons"})}),Object(b.jsx)("li",{className:"neo-leftnav__main",children:Object(b.jsx)(i.b,{role:"menuitem",tabIndex:"0",to:"/tooltips",onClick:n,children:"Tooltips"})})]})})})})})},v=function(e){var t=e.children;return Object(b.jsx)("div",{className:"neo-nav--left",style:{display:"flex",justifyContent:"space-between"},children:t||null})},m=function(e){var t=e.options,a=e.label,n=e.onChange,l=e.name,c=void 0===l?Object(u.a)():l;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h5",{children:a}),Object(b.jsx)("div",{className:"neo-input-group",children:t?t.map((function(e,t){var a=Object(u.a)();return Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)("input",{className:"neo-radio",type:"radio",name:c,value:e.value,id:a,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("label",{htmlFor:a,children:e.name})]},t)})):null})]})},x=function(e){var t=e.label,a=e.options,l=e.hint,c=e.onChange,s=Object(n.useState)(a?a[0].value:0),i=Object(o.a)(s,2),r=i[0],j=i[1];return Object(b.jsx)("div",{className:"neo-form-control",children:Object(b.jsxs)("div",{className:"neo-input-group",children:[t?Object(b.jsx)("label",{htmlFor:"color1",children:t}):null,Object(b.jsx)("div",{className:"neo-select",children:Object(b.jsx)("select",{className:"neo-icon-chevron-down","aria-describedby":t,value:r,onChange:function(e){j(e.target.value),c(e.target.value)},children:a?a.map((function(e){var t=Object(u.a)();return Object(b.jsx)("option",{value:e.value,children:e.label},t)})):null})}),l?Object(b.jsx)("div",{className:"neo-input-hint",children:l}):null]})})},p=function(e){var t=e.position,a=void 0===t?"right":t,n=e.children,l=e.text,c=["neo-tooltip__content"];return e.multiline&&c.push("neo-tooltip__content--multiline"),Object(b.jsxs)("div",{className:"neo-tooltip neo-tooltip--".concat(a," neo-tooltip--onhover"),children:[n,Object(b.jsxs)("div",{className:c.join(" "),children:[Object(b.jsx)("div",{className:"neo-arrow"}),l]})]})},f=(a(16),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],r=s[1],u=Object(n.useState)(!1),h=Object(o.a)(u,2),O=h[0],v=h[1],p=Object(n.useState)(),f=Object(o.a)(p,2),g=f[0],y=f[1],N=Object(n.useState)("default"),C=Object(o.a)(N,2),w=C[0],S=C[1],k=Object(n.useState)("Text"),_=Object(o.a)(k,2),D=_[0],I=_[1],T=Object(n.useState)("default"),q=Object(o.a)(T,2),F=q[0],H=q[1],L=Object(n.useState)("primary"),R=Object(o.a)(L,2),z=R[0],B=R[1],P=Object(n.useState)("default"),U=Object(o.a)(P,2),J=U[0],M=U[1];return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"sandbox",children:[Object(b.jsx)("h4",{children:"Buttons Sandbox"}),Object(b.jsx)("div",{className:"buttons-container",children:Object(b.jsx)("div",{className:"button-box",children:Object(b.jsx)(j,{status:F,text:"default",onClick:function(){console.log("clickHandler")},type:z,disabled:a,pulse:i,size:J,shape:w,icon:g,spinner:O,children:D})})})]}),Object(b.jsxs)("div",{className:"settings-panel",children:[Object(b.jsx)(d,{label:"Disable",onChange:l}),Object(b.jsx)(d,{label:"Pulse",onChange:r}),Object(b.jsx)(d,{label:"Spinner",onChange:v}),Object(b.jsx)("textarea",{onChange:function(e){return I(e.target.value)},rows:"4",defaultValue:D}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:M,label:"Size",options:[{name:"Default",value:"default"},{name:"Compact",value:"compact"},{name:"Wide",value:"wide"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:B,label:"Type",options:[{name:"Primary",value:"primary"},{name:"Secondary",value:"secondary"},{name:"Tertiary",value:"tertiary"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:H,label:"Status",options:[{name:"Default",value:"default"},{name:"Success",value:"success"},{name:"Alert",value:"alert"},{name:"Warning",value:"warning"},{name:"Info",value:"info"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:S,label:"Shape",options:[{name:"Default",value:"default"},{name:"Circle",value:"circle"},{name:"Square",value:"square"}]}),Object(b.jsx)("br",{}),Object(b.jsx)(x,{onChange:y,label:"Icon",hint:"Select icon name",options:[{label:"select value",value:"none"},{label:"settings",value:"neo-icon-settings"},{label:"error",value:"neo-icon-error"},{label:"chat",value:"neo-icon-chat"},{label:"add",value:"neo-icon-add"},{label:"add-circle",value:"neo-icon-add-circle"},{label:"address",value:"neo-icon-address"},{label:"address-book",value:"neo-icon-address-book"},{label:"agents",value:"neo-icon-agents"},{label:"analytics",value:"neo-icon-analytics"},{label:"available",value:"neo-icon-available"},{label:"available-filled",value:"neo-icon-available-filled"},{label:"away",value:"neo-icon-away"},{label:"away-filled",value:"neo-icon-away-filled"},{label:"bot",value:"neo-icon-bot"}]})]})]})}),g=function(){var e=Object(n.useState)("right"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est."),s=Object(o.a)(c,2),i=s[0],r=s[1],u=Object(n.useState)(!1),h=Object(o.a)(u,2),O=h[0],v=h[1];return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"sandbox",children:[Object(b.jsx)("h4",{children:"Tooltip Sandbox"}),Object(b.jsx)("div",{className:"buttons-container",children:Object(b.jsx)("form",{className:"neo-form",style:{width:"100%",height:"15rem"},children:Object(b.jsx)("div",{className:"tooltip-box",children:Object(b.jsx)(p,{position:a,text:i,multiline:O,children:Object(b.jsx)(j,{status:"default",text:"default",onClick:function(){console.log("clickHandler")},type:"primary",children:"Tooltip"})})})})})]}),Object(b.jsxs)("div",{className:"settings-panel",children:[Object(b.jsx)(d,{label:"Is Multiline",onChange:v}),Object(b.jsx)("textarea",{onChange:function(e){return r(e.target.value)},rows:"6",defaultValue:i}),Object(b.jsx)("br",{}),Object(b.jsx)(m,{onChange:l,label:"Position",options:[{name:"Right",value:"right"},{name:"Left",value:"left"},{name:"Up",value:"up"},{name:"Up Right",value:"up-right"},{name:"Up Left",value:"up-left"},{name:"Down",value:"down"},{name:"Down Right",value:"down-right"},{name:"Down Left",value:"down-left"}]})]})]})},y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Home"})})},N=a.p+"static/media/avaya-logo-header.a9a54b62.svg",C=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),j=s[0],u=s[1];return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{style:{width:"100vw",height:"100vh"},className:j?"neo-dark neo-global-colors":"neo-dynamic neo-global-colors",children:[Object(b.jsx)(h,{children:Object(b.jsxs)(v,{children:[Object(b.jsx)("div",{className:"neo-badge__navbutton",children:Object(b.jsx)("button",{className:"neo-badge__navbutton--content neo-btn neo-icon-menu",onClick:function(){return l(!a)}})}),Object(b.jsx)("a",{href:"/",className:"neo-navbar__brand",title:"Neo Framework",children:Object(b.jsx)("img",{src:N,alt:"avaya logo"})}),Object(b.jsx)(d,{label:"Dark theme",onChange:u})]})}),Object(b.jsxs)("div",{className:"layout-box",children:[Object(b.jsx)(O,{open:a,onClick:function(){return l(!a)}}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(y,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/tooltips",children:Object(b.jsx)(g,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/buttons",children:Object(b.jsx)(f,{})})]})]})]})})};s.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a7d066c5.chunk.js.map