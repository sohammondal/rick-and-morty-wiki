(this["webpackJsonprick-and-morty-wiki"]=this["webpackJsonprick-and-morty-wiki"]||[]).push([[4],{244:function(n,e,t){"use strict";t.r(e),t.d(e,"Character",(function(){return L}));var a=t(222),i=t.n(a),c=t(250),r=t(243),o=t(242),s=t(209),d=t(0),l=t(6),h=t(34),j=t(93),p=t(216),b=t(249),x=t(247),m=t(245),v=t(248),g=t(16);const O={width:"100%",height:"100%",bgcolor:"background.paper"},u={width:"100%",height:"100%",bgcolor:"background.paper",overflow:"hidden scroll",padding:"10px",[g.f.tabletPortrait]:{padding:"20px 0 5vh 0"}};var f=t(2);const y=n=>{let{episodes:e}=n;return e.length?Object(f.jsxs)(p.a,{sx:O,children:[Object(f.jsx)(s.a,{variant:"h4",children:"Episodes"}),Object(f.jsx)(x.a,{sx:u,children:null===e||void 0===e?void 0:e.map(((n,t)=>{const a=e.length-1===t;return Object(f.jsxs)(d.Fragment,{children:[Object(f.jsx)(m.a,{children:Object(f.jsx)(v.a,{primary:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(s.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.secondary",children:[n.id," "]}),n.name]}),secondary:Object(f.jsxs)(d.Fragment,{children:[" code ",Object(f.jsx)(s.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:n.episode})," \u2022 aired ",Object(f.jsx)(s.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:n.air_date})]})})}),!a&&Object(f.jsx)(b.a,{variant:"middle",component:"li"})]},n.id)}))})]}):null};var w,k,I=t(246),C=t(10),F=t(18);const N={display:"flex",justifyContent:"center",alignItems:"center"},S={position:"absolute",right:8,top:8,color:n=>n.palette.grey[500],zIndex:1},P=F.a.div(w||(w=Object(C.a)(["\n  width: 100vw;\n  height: 75vh;\n  padding: 50px 20px;\n  background-color: #fff;\n  border-radius: 4px;\n  ","\n  overflow: auto;\n  position: relative;\n  align-self: end;\n\n  .character-information {\n    ","\n    flex-basis: 60%;\n\n    img {\n      ","\n      border-radius: 4px;\n    }\n  }\n  .character-episodes {\n    flex-basis: 40%;\n    overflow: unset;\n  }\n\n  "," {\n    width: 85vw;\n    height: 60vh;\n    padding: 25px;\n    ","\n    overflow: unset;\n    align-self: center;\n\n    .character-information {\n      ","\n      img {\n        ","\n      }\n    }\n\n    .character-episodes {\n      overflow: hidden;\n    }\n  }\n\n  "," {\n    width: 70vw;\n    height: 65vh;\n\n    .character-information {\n      img {\n        ","\n      }\n    }\n  }\n\n  "," {\n    width: 65vw;\n    height: 75vh;\n    padding: 25px;\n    ","\n\n    .character-information {\n      img {\n        ","\n      }\n    }\n\n    .character-episodes {\n      overflow: hidden;\n    }\n  }\n"])),g.a,g.a,g.e.full,g.f.tabletPortrait,g.c,g.b,g.e.custom(50,"%",75),g.f.tabletLandscape,g.e.half,g.f.desktop,g.c,g.e.half),A=F.a.div(k||(k=Object(C.a)(["\n  ","\n  margin: 5px 0;\n  p:nth-of-type(1) {\n    width: 70px;\n  }\n\n  "," {\n    margin: 10px 0;\n  }\n"])),g.c,g.f.tabletPortrait),E={width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},J=n=>{let{charInfo:e}=n;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"character-information",children:[Object(f.jsx)(I.a,{variant:"rounded",component:"img"}),Object(f.jsx)("div",{style:{width:"40%"},children:Object.keys(e).map((n=>Object(f.jsx)(A,{children:Object(f.jsx)(I.a,{variant:"text",component:"div",width:"100%"})},n)))})]}),Object(f.jsx)("div",{className:"character-episodes",children:Array(10).fill(null).map(((n,e)=>Object(f.jsx)(I.a,{variant:"text",component:"div",width:"100%",height:50},"episode-skeletion-".concat(e))))})]})},L=()=>{const n=Object(l.n)(),{characterId:e}=Object(l.p)(),t=Object(l.k)(),a=Object(h.a)(),{character:p,episodes:b,origin:x,location:m,isLoading:v,error:g}=Object(h.b)((n=>n.character));Object(d.useEffect)((()=>{if(!e)return n("/");a(Object(j.c)({character:Number(e),...(null===t||void 0===t?void 0:t.state)||{}}))}),[t,e]);const O={name:p.name,status:String(p.status),species:p.species,gender:String(p.gender),type:p.type,origin:"".concat((null===x||void 0===x?void 0:x.name)||"unknown"," ").concat(null!==x&&void 0!==x&&x.type?" \u2022 ".concat(x.type):""),location:"".concat((null===m||void 0===m?void 0:m.name)||"unknown"," ").concat(null!==m&&void 0!==m&&m.type?" \u2022 ".concat(m.type):""),episodes:String(b.length)},u=()=>{a(j.a.resetState()),n("/")};return Object(f.jsx)(r.a,{open:!0,sx:N,onClose:u,"data-testid":"character-modal",children:Object(f.jsx)(o.a,{in:!0,direction:"up",children:Object(f.jsxs)(P,{children:[!v&&Object(f.jsx)(c.a,{"aria-label":"close",onClick:u,sx:S,children:Object(f.jsx)(i.a,{})}),v&&Object(f.jsx)(J,{charInfo:O}),g&&Object(f.jsx)(s.a,{variant:"h3",component:"div",sx:E,children:g}),!v&&!g&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"character-information",children:[Object(f.jsx)("img",{src:null===p||void 0===p?void 0:p.image,alt:p.name}),Object(f.jsx)("div",{children:Object.keys(O).map((n=>{const e=O[n]||"unknown";return Object(f.jsxs)(A,{children:[Object(f.jsx)(s.a,{variant:"body2",color:"text.secondary",children:n}),Object(f.jsx)(s.a,{variant:"body1",color:"text.primary",children:e})]},n)}))})]}),Object(f.jsx)("div",{className:"character-episodes",children:Object(f.jsx)(y,{episodes:b})})]})]})})})}}}]);
//# sourceMappingURL=4.ea27b66b.chunk.js.map