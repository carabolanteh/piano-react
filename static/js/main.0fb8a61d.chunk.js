(this["webpackJsonppiano-react"]=this["webpackJsonppiano-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/do.a2508143.wav"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/re.419c7811.wav"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mi.51e5702c.wav"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fa.fdf4ed24.wav"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/sol.e5e79dda.wav"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/la.5351f634.wav"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/si.42883966.wav"},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),o=n(4),s=n.n(o),a=(n(9),n(3)),r=(n(10),n(0));var d=function(){var e=[{nombre:"Do",link:n(12),sostenido:!0},{nombre:"Re",link:n(13),sostenido:!0},{nombre:"Mi",link:n(14)},{nombre:"Fa",link:n(15),sostenido:!0},{nombre:"Sol",link:n(16),sostenido:!0},{nombre:"La",link:n(17),sostenido:!0},{nombre:"Si",link:n(18)}],t=Object(i.useState)(0),c=Object(a.a)(t,2),o=c[0],s=c[1],d=Object(i.useState)(""),l=Object(a.a)(d,2),u=l[0],m=l[1];return console.log(o),setTimeout((function(){m("")}),300),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"titulo",children:[Object(r.jsx)("h1",{children:"Piano con React"}),Object(r.jsx)("h2",{children:"Hecho por Male"}),Object(r.jsx)("h3",{className:"msj",children:u}),Object(r.jsxs)("button",{onClick:function(){s(o+1)},children:["Has dado ",o," click"]})]}),Object(r.jsx)("div",{className:"container",children:e.map((function(e){return Object(r.jsx)("div",{className:"nota ".concat(u===e.nombre&&"sonando"),onClick:function(){return function(e){console.log(e),console.log(e.nombre),m(e.nombre),new Audio(e.link.default).play()}(e)},children:e.sostenido&&Object(r.jsx)("div",{className:"negra"})},100*Math.random())}))})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.0fb8a61d.chunk.js.map