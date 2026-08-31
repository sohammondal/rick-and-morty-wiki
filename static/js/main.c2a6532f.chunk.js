(this["webpackJsonprick-and-morty-wiki"]=this["webpackJsonprick-and-morty-wiki"]||[]).push([[0],{112:function(t,e,a){"use strict";a.r(e);var i=a(170),n=a(164),r=a(119),o=a(0),c=a.n(o),s=a(76),l=a.n(s),d=a(46),h=a(43),u=a(17),g=a(75),b=a(30),j=a(32);const f=Object(u.b)("characters/getCharacters",(async(t,e)=>{try{var a;const i=await Object(b.b)(t);if(200!==i.status)return e.rejectWithValue(`${i.status}: ${i.statusMessage}`);const n=i.data,r={};null===n||void 0===n||null===(a=n.results)||void 0===a||a.forEach((t=>{t.location.url&&(r[t.location.url]=t.location.url),t.origin.url&&(r[t.origin.url]=t.origin.url)}));const o=Object.values(r);return o.length&&e.dispatch(Object(j.a)(o)),n}catch(i){if(i)return console.error(i.toString()),e.rejectWithValue(i.toString())}})),p={info:{},data:[],isLoading:!0,error:null},C=Object(u.c)({name:"characters",initialState:p,reducers:{resetState:()=>p},extraReducers:t=>{t.addCase(f.pending,(t=>{t.isLoading=!0,t.error=null})).addCase(f.fulfilled,((t,e)=>{var a,i;t.isLoading=!1,null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&a.info&&(t.info=e.payload.info),null!==e&&void 0!==e&&null!==(i=e.payload)&&void 0!==i&&i.results&&(t.data=[...t.data,...e.payload.results])})).addCase(f.rejected,((t,e)=>{t.isLoading=!1,t.error=e.payload||e.error.message||"Failed to load characters"}))}});var v=C.reducer;const x=C.actions;var m=a(56);const O={characters:v,locations:Object(u.c)({name:"locations",initialState:{data:{},isLoading:!1},reducers:{},extraReducers:t=>{t.addCase(j.a.pending,(t=>{t.isLoading=!0})).addCase(j.a.fulfilled,((t,e)=>{var a,i;Array.isArray(e.payload)?e.payload.forEach((e=>{t.data[e.url]=e})):null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&a.url&&(t.data[null===e||void 0===e||null===(i=e.payload)||void 0===i?void 0:i.url]=e.payload);t.isLoading=!1})).addCase(j.a.rejected,(t=>{t.isLoading=!1}))}}).reducer,episodes:m.a,character:g.b},y=Object(u.a)({reducer:O});var w=a(85);const L=Object(w.a)({});var k=a(6),$=a(15);const S=$.a.footer`
  position: fixed;
  width: max-content;
  background: #3c3e44;
  color: #fff;
  bottom: 0;
  right: 0;
  font-size: 12px;
  padding: 5px;
  a {
    color: #9e9e9e;
    transition: 0.5s ease;
    :hover {
      color: #fff;
    }
  }
`;var P=a(2);const M=()=>Object(P.jsxs)(S,{children:[Object(P.jsxs)("a",{href:"https://github.com/sohammondal/rick-and-morty-wiki",target:"_blank",rel:"noreferrer",children:["\u276e\u276f"," "]}),"by"," ",Object(P.jsx)("a",{href:"https://sohammondal.com/",target:"_blank",rel:"noreferrer",children:"Soham Mondal"})]});var N=a(171),A=a(173),I=a(174);const R={backgroundColor:"#fff",boxShadow:"none"},E={marginLeft:"12px",color:"rgb(32, 35, 41)",fontWeight:900},z=()=>Object(P.jsx)(N.a,{position:"static",sx:R,children:Object(P.jsxs)(A.a,{children:[Object(P.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 50 50",fill:"#000",children:Object(P.jsx)("path",{d:"M22.0852 0.160518C16.4024 0.906765 11.4609 3.26988 7.50769 7.14463C4.09614 10.4836 1.80593 14.5114 0.656075 19.1994C0.161922 21.2181 -0.00913038 22.768 0.000372558 25.0354C0.0098755 29.1493 0.817625 32.5362 2.6707 36.2674C4.52377 39.9795 7.45068 43.2993 11.0238 45.7103C15.7943 48.9249 21.8476 50.4748 27.3118 49.8721C33.5838 49.1736 38.5918 46.8105 42.8111 42.534C48.5129 36.7458 50.9076 29.2642 49.6912 20.9215C48.988 16.0231 46.1846 10.6271 42.545 7.13506C39.105 3.84392 34.9712 1.60518 30.4478 0.591045C27.8535 0.0170091 24.518 -0.164769 22.0852 0.160518ZM28.0816 3.31772C34.9332 4.32228 40.9865 8.75193 44.1225 15.0568C45.0728 16.9702 45.757 19.1324 46.0991 21.2563C46.3367 22.7297 46.3367 26.681 46.0991 28.0491C45.4624 31.6655 44.17 34.7271 42.0034 37.6642C41.6422 38.1617 40.7015 39.2141 39.9222 39.9986L38.5063 41.4146L38.5633 42.1513L38.6203 42.8784L38.3447 41.826C38.0216 40.5727 37.7365 39.8743 37.3184 39.3194C37.1474 39.0897 37.0048 38.8506 37.0048 38.7836C37.0143 38.7262 37.2519 38.4966 37.5465 38.2861C38.0786 37.9034 38.8104 37.1284 39.2095 36.5161C39.352 36.3152 39.5516 36.1526 39.7512 36.0952C40.2263 35.9612 40.768 35.3968 40.8915 34.9088C41.0246 34.44 40.977 34.22 40.6539 33.7321L40.4164 33.3876L40.6254 32.4405C40.8345 31.5029 40.8345 31.4838 40.6729 30.0104C40.5874 29.1972 40.5209 28.4127 40.5209 28.2787C40.5209 27.9439 39.7892 26.4705 39.2095 25.6573C38.2402 24.2796 37.8791 23.9543 36.4726 23.2655C34.8381 22.4523 34.2395 22.3183 32.5859 22.3853C31.1415 22.4427 29.9251 22.7201 28.8133 23.2559C27.6919 23.7917 26.4185 25.0641 25.1927 26.8915C24.7745 27.5038 24.746 27.5803 24.746 28.1735C24.746 28.6327 24.651 29.0824 24.4039 29.8573C23.9858 31.168 24.0048 31.4742 24.6035 32.4979C24.8411 32.8997 25.0311 33.2824 25.0311 33.3302C25.0311 33.3876 24.9076 33.5694 24.746 33.7416C24.2424 34.287 24.2519 35.1289 24.7745 35.6934C25.0691 36.0091 25.7913 36.3057 25.9719 36.1813C26.0194 36.1526 25.9814 35.9134 25.8769 35.6551C25.5918 34.8993 25.6678 34.8706 26.0194 35.6073C26.7131 37.0806 27.6539 38.0278 29.1649 38.774C30.3052 39.3289 31.284 39.5777 32.681 39.6446C33.3082 39.6733 33.7358 39.7307 33.6313 39.769C33.0611 39.9699 30.4383 39.5968 29.2314 39.1376L28.6042 38.8984L28.4427 39.1184C28.0911 39.5777 27.3973 41.0989 27.2263 41.7781C27.1313 42.1704 26.9982 42.9645 26.9317 43.5385C26.7416 45.3276 26.6656 45.4902 26.4661 44.4378C26.1335 42.6966 23.9003 34.4496 23.6247 33.9521C23.5867 33.8756 22.988 33.6747 22.2943 33.5025C21.6006 33.3207 20.8403 33.1102 20.6027 33.0145C20.3747 32.9284 20.1561 32.8806 20.1276 32.9093C20.0991 32.938 20.2606 33.2154 20.4887 33.5216C20.7168 33.8277 21.0399 34.2965 21.2109 34.5549C21.6576 35.2724 22.6934 37.5111 22.9975 38.4009C23.3301 39.3481 23.3016 39.415 22.3038 40.2665C21.9237 40.5918 21.6101 40.9267 21.6101 41.0128C21.6101 41.0893 22.0472 41.5677 22.5794 42.0652C23.5011 42.9358 23.5392 42.9932 23.4631 43.2611L23.3776 43.5481L23.3396 43.2515C23.3206 43.0219 23.0925 42.7636 22.3228 42.0269C21.7716 41.5198 21.325 41.0415 21.325 40.9649C21.325 40.898 21.6671 40.544 22.0757 40.1804C23.121 39.2811 23.1305 39.2237 22.7029 38.1234C21.9807 36.277 20.4317 33.4259 19.8615 32.8901C19.681 32.7179 19.6144 32.5553 19.6144 32.297C19.6144 31.9047 19.7 31.809 20.1846 31.6464C20.6788 31.4838 21.1634 31.1106 21.496 30.6418C21.7621 30.2687 21.8761 30.2017 22.6079 29.9721C23.0545 29.8286 23.4156 29.6755 23.4156 29.6373C23.4156 29.5894 23.2446 29.3407 23.0355 29.0919C22.6269 28.5944 22.5508 28.2405 22.8264 28.1544C22.912 28.1257 23.2446 28.0778 23.5582 28.0395C23.8718 28.0108 24.1568 27.963 24.1949 27.9343C24.2329 27.9152 24.1378 27.5516 23.9858 27.1307C23.8242 26.7097 23.7007 26.3079 23.7007 26.2505C23.7007 26.1835 23.9478 26.0591 24.2519 25.9539C24.9266 25.7338 26.0764 25.1598 26.0764 25.045C26.0764 24.9972 25.7248 24.7675 25.3067 24.5379C24.4799 24.0978 23.6437 23.4281 23.7672 23.3133C23.8052 23.275 24.1473 23.1411 24.5084 23.0263C25.4207 22.7201 26.39 22.2705 27.1503 21.7825C27.5019 21.5625 27.787 21.3616 27.768 21.352C27.7299 21.3233 25.1547 20.2135 24.9076 20.1274C24.7935 20.0796 24.765 20.0222 24.8125 19.9361C24.8506 19.8595 25.4778 19.2472 26.2 18.5775C26.9127 17.8982 27.5019 17.3146 27.5019 17.2764C27.5019 17.1998 26.9127 17.0946 25.1737 16.8458C24.5465 16.7502 23.9953 16.6545 23.9573 16.6162C23.9098 16.578 24.3469 15.736 24.9266 14.7506C25.8674 13.1337 26.0479 12.7893 25.9529 12.7893C25.9339 12.7893 25.1546 13.0668 24.2234 13.4112C22.8644 13.9087 22.4938 14.0044 22.3988 13.9087C22.1897 13.6982 21.9902 12.1196 21.9902 10.7036V9.33553L21.2204 9.74692C20.3177 10.2349 19.1108 11.182 18.5501 11.8422C18.341 12.1005 18.1225 12.311 18.0845 12.311C18.0369 12.311 17.6758 11.8709 17.2672 11.3255C16.564 10.3879 15.3761 9.05808 15.2431 9.05808C15.2051 9.05808 15.129 9.47904 15.072 9.9861C14.901 11.4212 14.3973 13.172 14.1502 13.172C14.0837 13.172 13.6276 12.9807 13.1429 12.751C12.3637 12.3875 11.1758 12.0239 10.7387 12.0239C10.6247 12.0239 10.6817 12.1961 10.9573 12.7606C11.3754 13.6121 11.7555 14.942 11.708 15.4012L11.6795 15.7073L10.8242 15.7743C8.33445 15.9657 7.16559 16.0805 7.16559 16.1283C7.16559 16.1666 7.58372 16.6162 8.09688 17.1424C9.05667 18.1183 9.75989 19.1611 9.71237 19.5247C9.69337 19.6586 9.20872 20.0604 8.21091 20.7589C7.40316 21.3233 6.72845 21.8304 6.70945 21.8782C6.69044 21.9261 6.79497 21.993 6.94702 22.0313C7.96383 22.2513 8.40097 22.3949 8.76208 22.6053C9.25623 22.9019 9.76939 23.342 10.026 23.7056L10.216 23.9735L9.1517 25.0354C8.25842 25.9347 8.10638 26.1165 8.22041 26.2218C8.29644 26.2887 8.86661 26.5088 9.49381 26.7001C10.121 26.8915 10.6722 27.0924 10.7197 27.1402C10.7672 27.1881 10.6912 27.676 10.5106 28.3457C10.3491 28.9676 10.2445 29.5129 10.273 29.5607C10.3206 29.6468 11.8885 29.5703 12.1451 29.4746C12.3827 29.3885 12.4777 29.6181 12.5443 30.374C12.5823 30.8141 12.6393 31.1872 12.6773 31.2063C12.7533 31.2541 13.8176 30.7949 13.8176 30.7184C13.8176 30.6897 13.6941 30.4888 13.5421 30.2687C12.9054 29.3311 12.4682 28.1544 12.1261 26.4227C11.8981 25.3224 11.7935 24.27 11.9076 24.27C11.9456 24.27 12.0121 24.5762 12.0501 24.9493C12.2402 27.0828 13.219 29.7904 14.1122 30.6897C14.3403 30.9193 14.8345 31.2446 15.3096 31.4646L16.1079 31.8377L16.0793 32.1917L16.0508 32.5457L13.9412 33.2537L11.8315 33.9617L11.6415 34.5453C11.5369 34.8706 11.0998 36.3535 10.6817 37.8556C9.90243 40.5822 9.66486 41.2711 9.7789 40.4579C9.82641 40.056 9.8074 40.0178 9.32275 39.482C6.29132 36.1909 4.41924 32.3352 3.68751 27.8578C3.41193 26.2218 3.44044 22.7201 3.73503 21.1128C4.56178 16.5971 6.38635 12.9137 9.37027 9.76606C14.2358 4.64757 21.0494 2.29402 28.0816 3.31772ZM15.2241 34.2391C14.5399 35.6647 13.3235 39.0802 13.428 39.262C13.4755 39.3481 13.8842 39.7403 14.3403 40.1421C14.8059 40.544 15.1956 40.9171 15.2146 40.9841C15.2431 41.051 15.1005 41.2615 14.901 41.4624C14.6919 41.6825 14.6159 41.7303 14.7109 41.5868C15.0815 41.0032 15.11 41.0797 14.1502 40.19C13.504 39.5872 13.2475 39.2907 13.2475 39.128C13.2475 38.6305 15.129 33.8373 15.3286 33.8373C15.3761 33.8373 15.3286 34.0191 15.2241 34.2391Z"})}),Object(P.jsx)(I.a,{variant:"h6",component:"h1",sx:E,children:"The Rick and Morty Wiki"})]})}),W=t=>{let{children:e}=t;return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)(z,{}),Object(P.jsx)("main",{children:e}),Object(P.jsx)(M,{}),Object(P.jsx)(k.a,{})]})};var T=a(182),V=a(179),F=a(16);const U=$.a.section`
  ${F.a}
  align-items: center;
  padding: 5vh 15px;

  min-height: 100vh;
  width: 100vw;

  background-color: #202329;
  color: #fff;

  ${F.f.tabletPortrait} {
    padding: 5vh;
  }
`,B=$.a.div`
  ${F.d}
  flex-wrap: wrap;
`;var D=a(87),q=a(24);var Z=a(176),J=a(165),_=a(178),H=a(177),G=a(175);const K=$.a.div`
  ${F.e.custom(10,"px")}
  border-radius: 50%;
  background-color: ${t=>t.color};
  margin-right: 8px;
`,Q=$.a.div`
  ${F.a}
  margin: 2.5px 0;
  p:nth-of-type(1) {
    width: 50px;
  }
  p:nth-of-type(2) {
    ${F.g}
  }
`,X=Object($.a)(G.a)`
  margin: 20px 0;
  width: 100%;
  border-radius: 4px;
  transition: 0.5s ease;

  .card-media {
    height: 300px;
  }

  .card-content {
    .character-name {
      display: flex;
      align-items: center;
      h5 {
        margin-block: 0;
        ${F.g}
      }
    }
  }

  ${F.f.tabletPortrait} {
    width: 550px;
    height: 220px;
    margin: 20px;

    .card-action-area {
      display: flex;
      height: 100%;
    }
    .card-media {
      height: 100%;
      width: 40%;
    }

    .card-content {
      height: 100%;
      width: 60%;
    }
  }
`,Y={Alive:"green",Dead:"red",unknown:"gray"},tt=t=>{let{character:e,location:a,origin:i}=t;const n=Object(k.n)(),r={species:(null===e||void 0===e?void 0:e.species)||"unknown",origin:`${(null===i||void 0===i?void 0:i.name)||"unknown"} ${null!==i&&void 0!==i&&i.type?` \u2022 ${i.type}`:""}`,location:`${(null===a||void 0===a?void 0:a.name)||"unknown"} ${null!==a&&void 0!==a&&a.type?` \u2022 ${a.type}`:""}`};return null!==e&&void 0!==e&&e.name?Object(P.jsx)(X,{"data-testid":"character-card",children:Object(P.jsxs)(Z.a,{className:"card-action-area",onClick:()=>{n(`/character/${e.id}`,{state:{character:e,location:a,origin:i}})},children:[Object(P.jsx)(H.a,{component:"img",image:e.image,alt:`picture of ${e.name}`,className:"card-media"}),Object(P.jsxs)(_.a,{className:"card-content",children:[Object(P.jsxs)("div",{className:"character-name",children:[Object(P.jsx)(J.a,{title:e.status,arrow:!0,children:Object(P.jsx)(K,{color:Y[e.status]})}),Object(P.jsx)(I.a,{gutterBottom:!0,variant:"h5",children:e.name})]}),Object.keys(r).map((t=>Object(P.jsxs)(Q,{children:[Object(P.jsx)(I.a,{variant:"body2",color:"text.secondary",children:t}),Object(P.jsx)(I.a,{variant:"body1",color:"text.primary",children:r[t]})]},t)))]})]})}):Object(P.jsx)(X,{"data-testid":"character-card",children:Object(P.jsx)(I.a,{variant:"h3",children:"Loading"})})},et=()=>{const{characters:t,locations:e,infiniteSrollRef:a,isLoading:i,hasNextPage:n}=(()=>{var t,e,a;const i=Object(q.a)(),n=Object(q.b)((t=>t.characters)),r=Object(q.b)((t=>t.locations)),c=n.isLoading||r.isLoading,s=null!==n&&void 0!==n&&null!==(t=n.info)&&void 0!==t&&t.next?new URL(null===n||void 0===n||null===(e=n.info)||void 0===e?void 0:e.next):"",l=s?null===s||void 0===s||null===(a=s.searchParams)||void 0===a?void 0:a.get("page"):2,d=!!l;Object(o.useEffect)((()=>{i(x.resetState()),i(f({page:1}))}),[]);const[h]=Object(D.a)({loading:c,hasNextPage:d,onLoadMore:()=>i(f({page:Number(l)})),rootMargin:"0px 0px 10px 0px",delayInMs:1e3});return{locations:r.data,characters:n.data,isLoading:c,hasNextPage:d,infiniteSrollRef:h}})();return Object(P.jsxs)(U,{children:[Object(P.jsx)(B,{children:t.map((t=>Object(P.jsx)(tt,{character:t,location:e[t.location.url],origin:e[t.origin.url]},t.id)))}),(n||i)&&Object(P.jsx)(V.a,{ref:a})]})};var at=a(180),it=a(166);const nt=$.a.section`
  ${F.a}
  align-items: center;
  padding: 5vh 15px;

  min-height: 100vh;
  width: 100vw;

  background-color: #202329;
  color: #fff;

  ${F.f.tabletPortrait} {
    padding: 5vh;
  }
`,rt=$.a.div`
  ${F.d}
  flex-wrap: wrap;
  min-height: 60vh;
`,ot=$.a.div`
  ${F.b}
  min-height: 60vh;
  gap: 1.25rem;
  text-align: center;
`,ct=$.a.div`
  ${F.d}
  margin-top: 2rem;

  .MuiPagination-ul {
    flex-wrap: nowrap;
  }

  .MuiPaginationItem-root {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.5);

    &.Mui-selected {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.2);
    }

    &.Mui-disabled {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`,st=()=>{const{characters:t,locations:e,isLoading:a,error:i,page:n,totalPages:r,setPage:c,retry:s}=(()=>{var t;const e=Object(q.a)(),[a,i]=Object(o.useState)(1),n=Object(q.b)((t=>t.characters)),r=Object(q.b)((t=>t.locations)),c=n.isLoading||r.isLoading,s=()=>{e(x.resetState()),e(f({page:a}))};return Object(o.useEffect)(s,[a]),{locations:r.data,characters:n.data,isLoading:c,error:n.error,page:a,totalPages:n.data.length?(null===(t=n.info)||void 0===t?void 0:t.pages)||1:a,setPage:i,retry:s}})(),l=i?(t=>null!==t&&void 0!==t&&t.includes("429")?{title:"The Rick and Morty API is a little overwhelmed",description:"It's rate-limiting requests right now. We already tried retrying a few times automatically - wait a moment and hit retry."}:null!==t&&void 0!==t&&t.toLowerCase().includes("failed to fetch")||null!==t&&void 0!==t&&t.toLowerCase().includes("network")?{title:"Couldn't reach the Rick and Morty API",description:"This can happen with a flaky connection or if the API is briefly down. Check your connection and try again."}:{title:"Something went wrong loading this page",description:t||"An unexpected error occurred. Please try again."})(i):null;return Object(P.jsxs)(nt,{children:[Object(P.jsxs)(rt,{children:[a&&Object(P.jsx)(V.a,{}),!a&&l&&Object(P.jsxs)(ot,{children:[Object(P.jsx)(I.a,{variant:"h6",children:l.title}),Object(P.jsx)(I.a,{variant:"body2",sx:{color:"rgba(255, 255, 255, 0.75)"},children:l.description}),Object(P.jsx)(at.a,{variant:"outlined",color:"inherit",onClick:s,children:"Retry"})]}),!a&&!i&&t.map((t=>Object(P.jsx)(tt,{character:t,location:e[t.location.url],origin:e[t.origin.url]},t.id)))]}),Object(P.jsx)(ct,{children:Object(P.jsx)(it.a,{count:r,page:n,onChange:(t,e)=>c(e),disabled:a,variant:"outlined",shape:"rounded",siblingCount:0})})]})};var lt=a(82),dt=a(86),ht=a(83),ut=a(162);const gt=$.a.section`
  display: block;

  padding: 5vh 15px;

  min-height: 100vh;
  width: 100vw;

  background-color: #202329;
  color: #fff;

  ${F.f.tabletPortrait} {
    padding: 5vh;
  }
`,bt=$.a.div`
  ${F.d}
  flex-wrap: wrap;
`;function jt(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!Array.isArray(t))return[];if(e<1)throw new Error("chunkOf cannot be < 1");if(isNaN(e))throw new Error("chunkOf has to be number");const a=[...t],i=[];for(;a.length;)i.push(a.splice(0,e));return i}const ft=t=>{let{index:e,style:a,data:i}=t;const{characters:n,locations:r}=i||{characters:[]},o=n[e];return o?Object(P.jsx)(bt,{style:a,children:o.map((t=>Object(P.jsx)(tt,{character:t,location:r[t.location.url],origin:r[t.origin.url]},t.id)))}):null},pt=()=>{const t={desktopLarge:Object(ut.a)("(min-width: 1920px)"),desktop:Object(ut.a)("(min-width: 1366px)"),tabletLandscape:Object(ut.a)("(min-width: 1024px)"),tabletPortrait:Object(ut.a)("(min-width: 768px)"),phone:Object(ut.a)("(min-width: 600px)")},e=(()=>{let e=1;return t?(t.desktopLarge?e=3:t.desktop?e=2:(t.tabletLandscape||t.tabletPortrait||t.phone)&&(e=1),e):e})(),a=(()=>{let e=550;return t?(t.desktop||t.tabletLandscape||t.tabletPortrait?e=250:t.phone&&(e=550),e):e})(),{characters:i,locations:n,loadMore:r,totalCharacters:c}=(t=>{var e,a,i,n;let{groupOf:r}=t;const c=Object(q.a)(),s=Object(q.b)((t=>t.characters)),l=Object(q.b)((t=>t.locations)),d=s.isLoading||l.isLoading,h=null!==s&&void 0!==s&&null!==(e=s.info)&&void 0!==e&&e.next?new URL(null===s||void 0===s||null===(a=s.info)||void 0===a?void 0:a.next):"",u=h?null===h||void 0===h||null===(i=h.searchParams)||void 0===i?void 0:i.get("page"):2,g=!!u;return Object(o.useEffect)((()=>{c(x.resetState()),c(f({page:1}))}),[]),{totalCharacters:(null===(n=s.info)||void 0===n?void 0:n.count)||s.data.length,locations:l.data,characters:jt(s.data,r),isLoading:d,hasNextPage:g,loadMore:()=>c(f({page:Number(u)}))}})({groupOf:e});return Object(P.jsx)(gt,{children:Object(P.jsx)(lt.a,{children:t=>{let{height:e,width:o}=t;return Object(P.jsx)(ht.a,{isItemLoaded:t=>t<i.length&&null!==i[t],itemCount:c,loadMoreItems:r,children:t=>{let{onItemsRendered:r,ref:s}=t;return Object(P.jsx)(dt.a,{height:e,width:o,itemCount:c,itemSize:a,itemData:{characters:i,locations:n},onItemsRendered:r,ref:s,children:ft})}})}})})};var Ct=a(163),vt=a(181);const xt=Object(o.createContext)({loadingStrategy:"infinite-scroll",setLoadingStrategy:t=>{}});xt.displayName="CharactersContext";const mt=()=>Object(o.useContext)(xt),Ot=t=>{let{children:e}=t;const[a,i]=Object(o.useState)("infinite-scroll");return Object(P.jsx)(xt.Provider,{value:{loadingStrategy:a,setLoadingStrategy:t=>{i(t)}},children:e})},yt=()=>{const{loadingStrategy:t,setLoadingStrategy:e}=mt();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(I.a,{variant:"body1",align:"center",sx:{paddingTop:"1.8rem",color:"rgb(32, 35, 41)"},children:"Pick a strategy below to see how this character list can be rendered - each one loads and displays the same data differently."}),Object(P.jsxs)(vt.a,{sx:{padding:"1.8rem"},size:"small",children:[Object(P.jsx)(at.a,{variant:"infinite-scroll"===t?"contained":"outlined",style:{color:"infinite-scroll"===t?"white":"inherit"},onClick:()=>{e("infinite-scroll")},endIcon:Object(P.jsx)(J.a,{title:'Infinite scroll is a web design technique that automatically loads new content as a user scrolls down a page, creating a seemingly endless supply of information. This method eliminates the need for pagination or clicking "Next" to access more content.',children:Object(P.jsx)(Ct.a,{})}),children:"infinite scroll"}),Object(P.jsx)(at.a,{style:{color:"virtualized-list"===t?"white":"inherit"},onClick:()=>{e("virtualized-list")},variant:"virtualized-list"===t?"contained":"outlined",endIcon:Object(P.jsx)(J.a,{title:"A virtualized list is a technique used in React to improve the performance of rendering large lists of data. It works by only rendering the items that are currently visible in the viewport, and keeping the rest of the items in a virtual state. This can significantly improve the performance of applications with large lists, as it reduces the amount of work that the browser has to do.",children:Object(P.jsx)(Ct.a,{})}),children:"virtualized list"}),Object(P.jsx)(at.a,{style:{color:"pagination"===t?"white":"inherit"},onClick:()=>{e("pagination")},variant:"pagination"===t?"contained":"outlined",endIcon:Object(P.jsx)(J.a,{title:"Pagination splits content across discrete, numbered pages and lets the user jump directly to any of them. Unlike infinite scroll, it only ever loads one page of data at a time and gives the user explicit control over navigation.",children:Object(P.jsx)(Ct.a,{})}),children:"pagination"})]})]})},wt=()=>{const{loadingStrategy:t}=mt();return Object(P.jsxs)(T.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[Object(P.jsx)(yt,{}),"infinite-scroll"===t&&Object(P.jsx)(et,{}),"virtualized-list"===t&&Object(P.jsx)(pt,{}),"pagination"===t&&Object(P.jsx)(st,{})]})},Lt=()=>Object(P.jsx)(Ot,{children:Object(P.jsx)(wt,{})}),kt=()=>Object(P.jsx)(W,{children:Object(P.jsx)(Lt,{})}),$t=$.a.main`
  width: 100vw;
  height: 100vh;
  ${F.d}
`,St=()=>Object(P.jsx)($t,{children:Object(P.jsx)("h1",{children:"404: Page Not Found"})}),Pt=c.a.lazy((()=>Promise.all([a.e(3),a.e(4)]).then(a.bind(null,210)).then((t=>({default:t.Character})))));var Mt=function(){return Object(P.jsxs)(k.d,{children:[Object(P.jsx)(k.b,{path:"/",element:Object(P.jsx)(kt,{}),children:Object(P.jsx)(k.b,{path:"character/:characterId",element:Object(P.jsx)(c.a.Suspense,{fallback:Object(P.jsx)("div",{children:"Loading..."}),children:Object(P.jsx)(Pt,{})})})}),Object(P.jsx)(k.b,{path:"*",element:Object(P.jsx)(St,{})})]})};l.a.createRoot(document.getElementById("root")).render(Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{store:y,children:Object(P.jsxs)(i.a,{theme:L,children:[Object(P.jsx)(n.a,{}),Object(P.jsx)(r.a,{styles:()=>({body:{padding:0,margin:0,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",scrollBehavior:"smooth"}})}),Object(P.jsx)(Mt,{})]})})}))},16:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"f",(function(){return l})),a.d(e,"g",(function(){return d})),a.d(e,"e",(function(){return h}));var i=a(19);const n=i.b`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,r=i.b`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,o=i.b`
  display: flex;
  flex-direction: row;
`,c=i.b`
  display: flex;
  flex-direction: column;
`,s=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"min",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"only screen",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return`\n    @media ${a} and (${e}-width: ${t}px) ${i?`and (orientation: ${i})`:""}\n  `},l={custom:s,desktop:s(1366),tabletLandscape:s(1024),tabletPortrait:s(768),phone:s(576)},d=(i.b`
  scrollbar-width: 0.25em;
  scrollbar-track-color: #6a6767;
  scrollbar-face-color: #ffffff;

  &::-webkit-scrollbar {
    width: 0.25em;
    background: #6a6767;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 8px;
  }
`,i.b`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`),h={full:i.b`
    height: 100%;
    width: 100%;
  `,half:i.b`
    height: 50%;
    width: 50%;
  `,custom:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return i.b`
    height: ${t}${e};
    width: ${a||t}${e};
  `}}},24:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));var i=a(46);const n=i.c,r=()=>Object(i.b)()},30:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return h}));const i="https://rickandmortyapi.com/api",n=t=>{const e=new URLSearchParams;return Object.entries(t).forEach((t=>{let[a,i]=t;void 0!==i&&null!==i&&e.append(a,String(i))})),e.toString()},r=500,o=t=>new Promise((e=>setTimeout(e,t))),c=async function(t){let e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;try{e=await fetch(`${i}${t}`)}catch(s){if(a>=3)throw s;return await o(r*2**a),c(t,a+1)}if(429===e.status&&a<3){const i=Number(e.headers.get("Retry-After")),n=i>0?1e3*i:r*2**a;return await o(n),c(t,a+1)}const n=e.ok?await e.json():{};return{data:n,status:e.status,statusMessage:e.statusText}},s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(`/character/?${n(t)}`)},l=t=>c(`/character/${Array.isArray(t)?t.join(","):t}`),d=t=>c(`/episode/${Array.isArray(t)?t.join(","):t}`),h=t=>c(`/location/${Array.isArray(t)?t.join(","):t}`)},32:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a(17),n=a(30),r=a(52);const o=Object(i.b)("locations/getLocation",(async(t,e)=>{try{const a=e.getState(),i={};null===t||void 0===t||t.forEach((t=>{if(t&&!a.locations.data[t]){const e=Object(r.a)(t);e&&(i[e]=e)}}));const o=Object.values(i);let c={};if(o.length&&(c=(await Object(n.d)(o)).data),1===o.length)return c;if(o.length>1)return c}catch(a){if(a)return console.error(a.toString()),e.rejectWithValue(a.toString())}}))},52:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!t||"string"!==typeof t)throw new Error("`str` must be of type string");const e=t.match(/\d/g);if(!e)throw new Error("no numbers found");const a=null===e||void 0===e?void 0:e.join("");return Number(a)}},56:function(t,e,a){"use strict";a.d(e,"b",(function(){return o}));var i=a(17),n=a(30),r=a(52);const o=Object(i.b)("episodes/getEpisode",(async(t,e)=>{try{const a=e.getState(),i=[];t.forEach((t=>{const e=Object(r.a)(t);e&&!a.episodes.data[t]&&i.push(e)}));let o={};if(i.length&&(o=(await Object(n.c)(i)).data),1===i.length)return o;if(i.length>1)return o}catch(a){if(a)return console.error(a.toString()),e.rejectWithValue(a.toString())}})),c=Object(i.c)({name:"episodes",initialState:{data:{},isLoading:!1},reducers:{},extraReducers:t=>{t.addCase(o.pending,(t=>{t.isLoading=!0})).addCase(o.fulfilled,((t,e)=>{var a,i;Array.isArray(e.payload)?e.payload.forEach((e=>{t.data[e.url]=e})):null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&a.url&&(t.data[null===e||void 0===e||null===(i=e.payload)||void 0===i?void 0:i.url]=e.payload);t.isLoading=!1})).addCase(o.rejected,(t=>{t.isLoading=!1}))}});e.a=c.reducer},75:function(t,e,a){"use strict";a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return d}));var i=a(17),n=a(30),r=a(56),o=a(32);const c=Object(i.b)("character/getCharacter",(async(t,e)=>{try{let{character:a,location:i,origin:c}=t,s=[];if("number"===typeof a){if(isNaN(a))return e.rejectWithValue("404: Character not found");const t=await Object(n.a)(a);if(200!==t.status)return e.rejectWithValue(`${t.status}: ${t.statusMessage}`);a=t.data;const r={};a.location.url&&(r[a.location.url]=a.location.url),a.origin.url&&(r[a.origin.url]=a.origin.url);const s=Object.values(r);if(s.length){const t=a;await e.dispatch(Object(o.a)(s));const n=e.getState();i=t.location.url?n.locations.data[t.location.url]:i,c=t.origin.url?n.locations.data[t.origin.url]:c}}await e.dispatch(Object(r.b)(a.episode));const l=e.getState();return s=a.episode.map((t=>l.episodes.data[t])),{character:a,location:i,origin:c,episodes:s}}catch(a){if(!a)return;return console.error(a),e.rejectWithValue(a)}})),s={character:{},location:{},origin:{},episodes:[],isLoading:!0,error:null},l=Object(i.c)({name:"character",initialState:s,reducers:{resetState:()=>s},extraReducers:t=>{t.addCase(c.pending,(t=>{t.isLoading=!0})).addCase(c.fulfilled,((t,e)=>{var a,i,n,r;t.character=(null===(a=e.payload)||void 0===a?void 0:a.character)||s.character,t.location=(null===(i=e.payload)||void 0===i?void 0:i.location)||s.location,t.origin=(null===(n=e.payload)||void 0===n?void 0:n.origin)||s.origin,t.episodes=(null===(r=e.payload)||void 0===r?void 0:r.episodes)||s.episodes,t.isLoading=!1})).addCase(c.rejected,((t,e)=>{t.isLoading=!1,t.error=e.payload}))}});e.b=l.reducer;const d=l.actions}},[[112,1,2]]]);
//# sourceMappingURL=main.c2a6532f.chunk.js.map