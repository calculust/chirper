(this.webpackJsonpchirper=this.webpackJsonpchirper||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var a,c=t(0),r=t(9),s=t.n(r),o=(t(32),t(27)),i=t(10),b=t(47),d=t(48),l=t(44),j=t(45),u=t(20),h=t.n(u),p=t(46),x=t(21),O=t(22),m=t.p+"static/media/background.b0c8cb94.png",f=Object(O.a)(a||(a=Object(x.a)(['\n  body {\n    position:relative;\n    min-height:100vh;\n  }\n\n  // solution to add opacity to bg image\n  body::before {    \n      content: "";\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      opacity: 0.1;\n      background: url(',");\n      background-position: 5% 95%;\n      background-size: 300px;\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n}\n\n  textarea:hover, \n  input:hover, \n  textarea:active, \n  input:active, \n  textarea:focus, \n  input:focus,\n  button:focus,\n  button:active,\n  button:hover,\n  label:focus,\n  .btn:active,\n  .btn.active\n  {\n    outline:0px !important;\n    -webkit-appearance:none;\n    box-shadow: none !important;\n  }\n\n  textarea {\n    resize:none;\n  }\n"])),m),v=t(2),g=[{key:Object(p.a)(),username:"Leonardo",content:"I'm going to order a pizza \ud83c\udf55",date:1620274875e3},{key:Object(p.a)(),username:"Michaelangelo",content:"Cowabunga \ud83d\udc22",date:1620278475e3},{key:Object(p.a)(),username:"Raphael",content:"Duuuuuude! \ud83e\udd18",date:1620279615e3}],k=function(){var e=Object(c.useState)(g),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),u=s[0],x=s[1],O=Object(c.useState)(""),m=Object(i.a)(O,2),k=m[0],y=m[1],N=Object(c.useState)(""),w=Object(i.a)(N,2),C=w[0],S=w[1],z=Object(c.useState)(!1),T=Object(i.a)(z,2),B=T[0],D=T[1],E=function(){return D(!1)},F=Object(c.useRef)(null),H=t.map((function(e){return Object(v.jsx)(b.a,{className:"rounded-3 mb-3",children:Object(v.jsxs)(b.a.Body,{children:[Object(v.jsxs)(b.a.Title,{children:["@",e.username.toLowerCase()]}),Object(v.jsx)(b.a.Text,{children:e.content}),Object(v.jsx)(b.a.Text,{children:Object(v.jsx)("small",{className:"text-muted",children:h()(e.date).calendar()})})]})},e.key)})).reverse();return Object(c.useEffect)((function(){B&&F.current&&F.current.focus()}),[B]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(f,{}),Object(v.jsx)("nav",{className:"navbar navbar-dark bg-info p-3 mb-5",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)("a",{href:"#",className:"navbar-brand",children:"\ud83d\udc26 Chirper"}),Object(v.jsx)("div",{className:"d-flex",children:Object(v.jsx)(d.a,{variant:"warning",onClick:function(){return D(!0)},children:"Chirp"})})]})}),Object(v.jsx)(l.a,{children:Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("div",{className:"col-sm-4",children:H})})}),Object(v.jsxs)(j.a,{show:B,onHide:E,children:[Object(v.jsx)(j.a.Header,{children:Object(v.jsx)(j.a.Title,{children:"What's happening?"})}),Object(v.jsx)(j.a.Body,{children:Object(v.jsx)("textarea",{className:"form-control border-0",id:"chirpContent",rows:"3",ref:F,onChange:function(e){y(e.target.value)},placeholder:C,children:k})}),Object(v.jsxs)(j.a.Footer,{className:"justify-content-between",children:[Object(v.jsxs)("div",{className:"input-group w-50",children:[Object(v.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"}),Object(v.jsx)("input",{id:"username",value:u,type:"text",className:"form-control",placeholder:"Username","aria-label":"Username",onChange:function(e){x(e.target.value)}})]}),Object(v.jsxs)("div",{className:"d-flex",children:[Object(v.jsx)(d.a,{variant:"secondary",className:"me-2",onClick:E,children:"Cancel"}),Object(v.jsx)(d.a,{variant:"primary",onClick:function(){u&&""!==k?(D(!1),a((function(e){return[].concat(Object(o.a)(e),[{key:Object(p.a)(),username:u,content:k,date:Date.now()}])})),y("")):S("Please make sure you have set your username and provided Chrip content.")},children:"Chirp"})]})]})]})]})};s.a.render(Object(v.jsx)(k,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1843a713.chunk.js.map