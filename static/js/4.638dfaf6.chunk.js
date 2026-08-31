(this["webpackJsonprick-and-morty-wiki"]=this["webpackJsonprick-and-morty-wiki"]||[]).push([[4],{210:function(e,t,i){"use strict";i.r(t),i.d(t,"Character",(function(){return P}));var n=i(188),a=i.n(n),r=i(216),c=i(209),s=i(208),o=i(174),d=i(0),l=i(6),h=i(24),j=i(75),p=i(182),b=i(215),x=i(213),m=i(211),v=i(214),g=i(16);const O={width:"100%",height:"100%",bgcolor:"background.paper"},u={width:"100%",height:"100%",bgcolor:"background.paper",overflow:"hidden scroll",padding:"10px",[g.f.tabletPortrait]:{padding:"20px 0 5vh 0"}};var f=i(2);const y=e=>{let{episodes:t}=e;return t.length?Object(f.jsxs)(p.a,{sx:O,children:[Object(f.jsx)(o.a,{variant:"h4",children:"Episodes"}),Object(f.jsx)(x.a,{sx:u,children:null===t||void 0===t?void 0:t.map(((e,i)=>{const n=t.length-1===i;return Object(f.jsxs)(d.Fragment,{children:[Object(f.jsx)(m.a,{children:Object(f.jsx)(v.a,{primary:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(o.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.secondary",children:[e.id," "]}),e.name]}),secondary:Object(f.jsxs)(d.Fragment,{children:[" code ",Object(f.jsx)(o.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:e.episode})," \u2022 aired ",Object(f.jsx)(o.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:e.air_date})]})})}),!n&&Object(f.jsx)(b.a,{variant:"middle",component:"li"})]},e.id)}))})]}):null};var w=i(212),$=i(15);const k={display:"flex",justifyContent:"center",alignItems:"center"},I={position:"absolute",right:8,top:8,color:e=>e.palette.grey[500],zIndex:1},C=$.a.div`
  width: 100vw;
  height: 75vh;
  padding: 50px 20px;
  background-color: #fff;
  border-radius: 4px;
  ${g.a}
  overflow: auto;
  position: relative;
  align-self: end;

  .character-information {
    ${g.a}
    flex-basis: 60%;

    img {
      ${g.e.full}
      border-radius: 4px;
    }
  }
  .character-episodes {
    flex-basis: 40%;
    overflow: unset;
  }

  ${g.f.tabletPortrait} {
    width: 85vw;
    height: 60vh;
    padding: 25px;
    ${g.c}
    overflow: unset;
    align-self: center;

    .character-information {
      ${g.b}
      img {
        ${g.e.custom(50,"%",75)}
      }
    }

    .character-episodes {
      overflow: hidden;
    }
  }

  ${g.f.tabletLandscape} {
    width: 70vw;
    height: 65vh;

    .character-information {
      img {
        ${g.e.half}
      }
    }
  }

  ${g.f.desktop} {
    width: 65vw;
    height: 75vh;
    padding: 25px;
    ${g.c}

    .character-information {
      img {
        ${g.e.half}
      }
    }

    .character-episodes {
      overflow: hidden;
    }
  }
`,F=$.a.div`
  ${g.c}
  margin: 5px 0;
  p:nth-of-type(1) {
    width: 70px;
  }

  ${g.f.tabletPortrait} {
    margin: 10px 0;
  }
`,N={width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},S=e=>{let{charInfo:t}=e;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"character-information",children:[Object(f.jsx)(w.a,{variant:"rounded",component:"img"}),Object(f.jsx)("div",{style:{width:"40%"},children:Object.keys(t).map((e=>Object(f.jsx)(F,{children:Object(f.jsx)(w.a,{variant:"text",component:"div",width:"100%"})},e)))})]}),Object(f.jsx)("div",{className:"character-episodes",children:Array(10).fill(null).map(((e,t)=>Object(f.jsx)(w.a,{variant:"text",component:"div",width:"100%",height:50},`episode-skeletion-${t}`)))})]})},P=()=>{const e=Object(l.n)(),{characterId:t}=Object(l.p)(),i=Object(l.k)(),n=Object(h.a)(),{character:p,episodes:b,origin:x,location:m,isLoading:v,error:g}=Object(h.b)((e=>e.character));Object(d.useEffect)((()=>{if(!t)return e("/");n(Object(j.c)({character:Number(t),...(null===i||void 0===i?void 0:i.state)||{}}))}),[i,t]);const O={name:p.name,status:String(p.status),species:p.species,gender:String(p.gender),type:p.type,origin:`${(null===x||void 0===x?void 0:x.name)||"unknown"} ${null!==x&&void 0!==x&&x.type?` \u2022 ${x.type}`:""}`,location:`${(null===m||void 0===m?void 0:m.name)||"unknown"} ${null!==m&&void 0!==m&&m.type?` \u2022 ${m.type}`:""}`,episodes:String(b.length)},u=()=>{n(j.a.resetState()),e("/")};return Object(f.jsx)(c.a,{open:!0,sx:k,onClose:u,"data-testid":"character-modal",children:Object(f.jsx)(s.a,{in:!0,direction:"up",children:Object(f.jsxs)(C,{children:[!v&&Object(f.jsx)(r.a,{"aria-label":"close",onClick:u,sx:I,children:Object(f.jsx)(a.a,{})}),v&&Object(f.jsx)(S,{charInfo:O}),g&&Object(f.jsx)(o.a,{variant:"h3",component:"div",sx:N,children:g}),!v&&!g&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"character-information",children:[Object(f.jsx)("img",{src:null===p||void 0===p?void 0:p.image,alt:p.name}),Object(f.jsx)("div",{children:Object.keys(O).map((e=>{const t=O[e]||"unknown";return Object(f.jsxs)(F,{children:[Object(f.jsx)(o.a,{variant:"body2",color:"text.secondary",children:e}),Object(f.jsx)(o.a,{variant:"body1",color:"text.primary",children:t})]},e)}))})]}),Object(f.jsx)("div",{className:"character-episodes",children:Object(f.jsx)(y,{episodes:b})})]})]})})})}}}]);
//# sourceMappingURL=4.638dfaf6.chunk.js.map