(this["webpackJsonpreact-accordion-menu"]=this["webpackJsonpreact-accordion-menu"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(3),r=s.n(n),u=s(0),c=function(){return Object(u.jsx)("h1",{className:"heading",children:"FAQ help section"})},o=s(4),l=[{question:"Lorem ipsum dolor sit amet?",answer:"Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."},{question:"Dignissimos sequi architecto?",answer:"Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."},{question:"Voluptas praesentium facere?",answer:"Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."}],m=function(e){var t=e.faq,s=e.active,a=e.onToggle,n=t.question,r=t.answer,c=Object(i.useRef)();return Object(u.jsxs)("li",{className:"accordion_item ".concat(s?"active":""),children:[Object(u.jsxs)("button",{className:"button",onClick:a,children:[n,Object(u.jsxs)("span",{className:"control",children:[s?"\u2014":"+"," "]})]}),Object(u.jsx)("div",{ref:c,className:"answer_wrapper",style:s?{height:c.current.scrollHeight}:{height:"0px"},children:Object(u.jsx)("div",{className:"answer",children:r})})]})},d=function(){var e=Object(i.useState)("0"),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(u.jsx)("ul",{className:"accordion",children:l.map((function(e,t){return Object(u.jsx)(m,{onToggle:function(){return function(e){if(s===e)return a("0");a(e)}(t)},active:s===t,faq:e},t)}))})},j=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(c,{}),Object(u.jsx)(d,{})]})};s(10);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.991b9b42.chunk.js.map