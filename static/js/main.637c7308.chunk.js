(this.webpackJsonpbutton_box=this.webpackJsonpbutton_box||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(1),a=t.n(i),c=t(9),o=t.n(c),s=t(2),l=t(7),p=(t(19),t(20),t(21),t(3)),u=t(10),d=t.n(u),x=[{name:"Clicker 3D",type:"Click",skill:"CSS",text:!0,title:!0},{name:"SkewBG",type:"Hover",skill:"CSS",text:!0,title:!0},{name:"Wavey",type:"Click",skill:"CSS",text:!0,title:!0},{name:"Gooey",type:"Hover",skill:"SVG Filter",text:!1,posCenter:!0,title:!1},{name:"Move Behind",type:"Hover",skill:"CSS",text:!1,posCenter:!0,title:!1},{name:"CircleArrow",type:"Hover",skill:"CSS",text:!1,posCenter:!1,title:!1},,{name:"Layered",type:"Hover",skill:"CSS",text:!1,posCenter:!1,title:!1},{name:"Bubble",type:"Hover",skill:"CSS",text:!1,posCenter:!0,title:!1},{name:"Wave Brick",type:"Hover",skill:"CSS",text:!1,posCenter:!1,title:!1},{name:"Ripple",type:"Hover",skill:"SVG Filter",text:!1,posCenter:!1,title:!1},{name:"Vertical Brick",type:"Hover",skill:"CSS",text:!1,posCenter:!1,title:!1},{name:"Neon",type:"Hover",skill:"CSS",text:!0,posCenter:!1,title:!0},{name:"Moving Bot",type:"Hover",skill:"CSS",text:!0,posCenter:!1,title:!0}];function b(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("svg",{style:{display:"none"},children:Object(r.jsx)("defs",{children:Object(r.jsxs)("filter",{id:"goo",children:[Object(r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"abb"}),Object(r.jsx)("feColorMatrix",{in:"abb",type:"matrix",values:" 1 0 0 0 0\r 0 1 0 0 0\r 0 0 1 0 0\r 0 0 0 36 -10",result:"abb"}),Object(r.jsx)("feBlend",{in:"SourceGraphic",in2:"abb"})]})})}),Object(r.jsx)("svg",{style:{display:"none"},children:Object(r.jsx)("defs",{children:Object(r.jsxs)("filter",{id:"Ripple",children:[Object(r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"Ripple"}),Object(r.jsx)("feColorMatrix",{in:"Ripple",type:"matrix",values:" 1 0 0 0 0\r 0 1 0 0 0\r 0 0 1 0 0\r 0 0 0 100 -15",result:"Ripple"}),Object(r.jsx)("feBlend",{in:"SourceGraphic",in2:"Ripple"})]})})})]})}t(22);function m(){var e=Object(s.a)(["\n  font-weight: bold;\n  font-size: 22px;\n\n  @media screen and (max-width: 900px) {\n    font-size: 1.2em;\n  }\n"]);return m=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: inline-block;\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: rgba(0, 0, 0, 0.5);\n\n  @media screen and (max-width: 900px) {\n    font-size: 0.6em;\n    margin-bottom: 8px;\n  }\n"]);return j=function(){return e},e}function f(){var e=Object(s.a)(["\n  height: 60px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n\n  @media screen and (max-width: 900px) {\n    height: 56px;\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(s.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  font-weight: bold;\n  text-align: center;\n"]);return h=function(){return e},e}function v(){var e=Object(s.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  font-weight: bold;\n"]);return v=function(){return e},e}function O(){var e=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  height: 200px;\n"]);return O=function(){return e},e}function g(){var e=Object(s.a)(["\n  border: 1px dotted #111;\n  margin: 10px;\n  padding: 10px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: 900px) {\n    padding-bottom: 4px;\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-rows: repeat(",", 300px);\n  grid-template-columns: repeat(4, 1fr);\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  padding: 0 10px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return y=function(){return e},e}function S(e){var n=e.text;return Object(i.useEffect)((function(){!function(e){document.querySelector(".Gooey").innerHTML='<div class="blurred">\n    <span></span>\n    <span></span>\n  </div>',document.querySelector(".MoveBehind").innerHTML='<div class="wave"></div>',document.querySelector(".CircleArrow").innerHTML="<span>".concat(e,'</span><span class="add"><div class="icon">-></div></span>'),document.querySelector(".Layered").innerHTML="\n  <span></span>\n  <span></span>\n  <span>".concat(e,"</span>\n  <span></span>"),document.querySelector(".Bubble").innerHTML="\n  <div></div>\n  <span></span>\n  <span></span>\n  <span></span>";for(var n=0;n<8;n++)(t=document.createElement("div")).style.left="".concat(22.5*n,"px"),document.querySelector(".WaveBrick").appendChild(t);for(document.querySelector(".WaveBrick span").innerHTML=e,n=0;n<8;n++){var t;(t=document.createElement("div")).style.left="".concat(22.5*n,"px"),document.querySelector(".Ripple").appendChild(t)}for(document.querySelector(".Ripple span").innerHTML=e,document.querySelector(".Ripple").parentElement.style.filter="url(#Ripple)",n=0;n<2;n++){var r=document.createElement("ul");r.classList.add("side".concat(n));for(var i=0;i<10;i++)(t=document.createElement("li")).style.transitionDelay="".concat(.05*i,"s"),r.appendChild(t);document.querySelector(".VerticalBrick").appendChild(r)}document.querySelector(".VerticalBrick span").innerHTML=e}(n)}),[]),Object(r.jsxs)(C,{children:[x.map((function(e){return Object(r.jsxs)(k,{children:[Object(r.jsx)(w,{children:e.text?Object(r.jsx)(H,{className:e.name.replace(/ /gi,""),children:n}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(H,{className:e.name.replace(/ /gi,""),children:!e.posCenter&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("span",{})})}),e.posCenter&&Object(r.jsx)(B,{children:n})]})}),Object(r.jsxs)(L,{children:[Object(r.jsxs)(M,{children:[e.type," | ",e.skill]}),Object(r.jsx)(q,{children:e.name})]})]},e.name.replace(/ /gi,""))})),Object(r.jsx)(b,{})]})}var C=p.a.section(y(),Math.floor(x.length/3)),k=p.a.div(g()),w=p.a.div(O()),H=p.a.button(v()),B=p.a.span(h()),L=p.a.div(f()),M=p.a.span(j()),q=p.a.h2(m());function G(){var e=Object(s.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.2);\n  z-index: 1;\n"]);return G=function(){return e},e}function R(){var e=Object(s.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.5);\n  outline: none;\n"]);return R=function(){return e},e}function E(){var e=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  margin-top: 100px;\n  padding-top: 260px;\n  height: 120px;\n  transition: height 1s;\n\n  &.notLoaded {\n    height: 100vh;\n    padding-top: 0px;\n    margin-top: 0px;\n  }\n"]);return E=function(){return e},e}var z=function(){window.scrollY>100?document.querySelector("#root").classList.add("fixed"):document.querySelector("#root").classList.remove("fixed")},F=p.a.header(E()),T=p.a.button(R()),N=p.a.span(G()),V=function(){var e=Object(i.useState)("Write Here!"),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(!1),o=Object(l.a)(c,2),s=o[0],p=o[1],u=Object(i.useRef)(null),b=x.filter((function(e){return!1!==e.title})),m=b[Math.floor(Math.random()*b.length)];return Object(i.useEffect)((function(){s&&window.addEventListener("scroll",z)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F,{onClick:function(){p(!0)},className:d()(s?"":"notLoaded"),children:m.text?Object(r.jsx)(T,{className:m.name.replace(/ /gi,""),children:s?"ButtonButton":"Click Here!"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{className:m.name.replace(/ /gi,"")}),Object(r.jsx)(N,{children:s?"ButtonButton":"Click Here!"})]})}),s&&Object(r.jsx)("input",{className:"textInput",type:"text",value:t,onChange:function(e){a(e.target.value)},maxLength:"7",ref:u,onFocus:function(){a("")}}),s&&Object(r.jsx)(S,{text:t})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(V,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.637c7308.chunk.js.map