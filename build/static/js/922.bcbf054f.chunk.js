"use strict";(self.webpackChunkrelasto_buy_rent_sell_property=self.webpackChunkrelasto_buy_rent_sell_property||[]).push([[922],{76337:(e,t,a)=>{a.d(t,{A:()=>s});a(65043);var r=a(74315),l=a(70579);const o=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("header",{className:e.className,children:(0,l.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-center justify-between w-full",children:[(0,l.jsxs)("div",{className:"header-row my-px",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-[11px] items-center justify-start",children:[(0,l.jsx)(r.E9,{className:"h-10 w-10",src:"images/img_home.svg",alt:"home"}),(0,l.jsx)(r.EY,{className:"text-orange-A700 text-xl w-auto",size:"txtMarkoOneRegular20",children:"Relasto"})]}),(0,l.jsxs)("div",{className:"mobile-menu",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]})]}),(0,l.jsxs)("div",{className:"flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full",children:[(0,l.jsxs)(r.B8,{className:"sm:flex-col flex-row gap-[39px] grid grid-cols-3",orientation:"horizontal",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-[77px]",children:[(0,l.jsx)(r.EY,{className:"text-base text-gray-900 w-auto",size:"txtManropeSemiBold16",children:"Home"}),(0,l.jsx)(r.E9,{className:"h-4 w-4",src:"images/img_arrowdown_gray_600.svg",alt:"arrowdown"})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-[77px]",children:[(0,l.jsx)(r.EY,{className:"text-base text-gray-900 w-auto",size:"txtManropeSemiBold16",children:"Listing"}),(0,l.jsx)(r.E9,{className:"h-4 w-4",src:"images/img_arrowdown_gray_600.svg",alt:"arrowdown"})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-[77px]",children:[(0,l.jsx)(r.EY,{className:"text-base text-gray-900 w-auto",size:"txtManropeSemiBold16",children:"House"}),(0,l.jsx)(r.E9,{className:"h-4 w-4",src:"images/img_arrowdown_gray_600.svg",alt:"arrowdown"})]})]}),(0,l.jsxs)(r.EY,{className:"text-base text-center text-gray-900 w-auto",size:"txtManropeSemiBold16",children:["Property"," "]}),(0,l.jsx)(r.EY,{className:"text-base text-gray-900 w-auto",size:"txtManropeSemiBold16",children:"Blog"})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]",children:[(0,l.jsx)(r.$n,{className:"bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]",leftIcon:(0,l.jsx)(r.E9,{className:"h-6 mb-px mr-2",src:"images/img_search.svg",alt:"search"}),children:(0,l.jsx)("div",{className:"font-bold font-manrope text-gray-900 text-left text-lg",children:"Search"})}),(0,l.jsx)(r.$n,{className:"bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full",children:"Log in"})]})]})})});o.defaultProps={};const s=o},74315:(e,t,a)=>{a.d(t,{$n:()=>o,oV:()=>n,u6:()=>c,E9:()=>m,pd:()=>x,N1:()=>p,B8:()=>f,Oe:()=>N,aL:()=>h,Ap:()=>v,EY:()=>M});var r=a(65043),l=a(70579);const o=e=>{let{children:t,className:a="",leftIcon:r,rightIcon:o,shape:s="",size:n="",variant:i="",color:d="",...c}=e;return(0,l.jsxs)("button",{className:"".concat(a),...c,children:[!!r&&r,t,!!o&&o]})},s=e=>{let{errors:t=[],className:a=""}=e;return(null===t||void 0===t?void 0:t.length)>0&&(0,l.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(a),children:t.join(", ")})},n=r.forwardRef(((e,t)=>{let{inputClassName:a="",className:r="",name:o="",children:n,label:i="",errors:d=[],shape:c="",size:m="",variant:x="",color:p="",id:f="checkbox_id",onChange:u,...h}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("input",{className:"".concat(a),ref:t,type:"checkbox",name:o,onChange:e=>{var t;u&&u(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.checked)},...h,id:f}),(0,l.jsx)("label",{htmlFor:f,children:i})]}),(0,l.jsx)(s,{errors:d}),n]})}));var i=a(25563);const d=e=>{let{center:t,zoom:a,markers:o,...s}=e;const n=r.useRef(null),[i,d]=r.useState();return r.useEffect((()=>{n.current&&!i&&d(new window.google.maps.Map(n.current,{center:t,zoom:a}))}),[n,i,t,a]),r.useEffect((()=>{o.forEach((e=>{(new window.google.maps.Marker).setOptions({position:e,map:i,title:"Hello World!"})}))}),[i,o]),(0,l.jsx)("div",{ref:n,id:"map",...s})},c=e=>{var t;let{children:a,showMarker:o=!1,className:s,...n}=e;const[c,m]=r.useState({lat:0,lng:0});return r.useEffect((()=>{var e;null===(e=navigator)||void 0===e||e.geolocation.getCurrentPosition((e=>{let{coords:{latitude:t,longitude:a}}=e;m({lat:t,lng:a})}))}),[]),(0,l.jsx)(i.Wrapper,{apiKey:null===(t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_CLIENT_ID:"Please define client ID here"})||void 0===t?void 0:t.REACT_APP_GOOGLE_MAP_ID,children:(0,l.jsx)(d,{center:c,zoom:3,className:s,markers:o?[c]:[],...n})})},m=e=>{let{className:t,src:a="defaultNoData.png",alt:r="testImg",...o}=e;return(0,l.jsx)("img",{className:t,src:a,alt:r,...o,loading:"lazy"})},x=r.forwardRef(((e,t)=>{let{wrapClassName:a="",className:r="",name:o="",placeholder:n="",type:i="text",children:d,errors:c=[],label:m="",prefix:x,suffix:p,onChange:f,shape:u="",size:h="",variant:g="",color:j="",...v}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"".concat(a," \n               \n               \n              "),children:[!!m&&m,!!x&&x,(0,l.jsx)("input",{ref:t,className:"".concat(r," bg-transparent border-0"),type:i,name:o,onChange:e=>{var t;f&&f(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:n,...v}),!!p&&p]}),!!c&&(0,l.jsx)(s,{errors:c})]})})),p=e=>{let{className:t,...a}=e;return(0,l.jsx)("div",{className:t,...a})},f=e=>{let{children:t,className:a,...r}=e;return(0,l.jsx)("div",{className:a,...r,children:t})};var u=a(89751);const h=r.forwardRef(((e,t)=>{let{children:a,placeholder:o="Select",className:n="",options:i=[],isSearchable:d=!1,placeholderClassName:c="",isMulti:m=!1,onChange:x,value:p="",errors:f=[],indicator:h,shape:g="",size:j="",variant:v="",color:w="",...b}=e;const[N,y]=r.useState(p);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Ay,{ref:t,options:i,className:"".concat(n),placeholder:(0,l.jsx)("div",{className:c,children:o}),isSearchable:d,isMulti:m,components:{IndicatorSeparator:()=>null,...h&&{DropdownIndicator:()=>h}},value:N,onChange:e=>{y(e),m?null===x||void 0===x||x((null===e||void 0===e?void 0:e.map((e=>e.value)))||[]):null===x||void 0===x||x(null===e||void 0===e?void 0:e.value)},styles:{container:e=>({...e,zIndex:0}),control:e=>({...e,backgroundColor:"transparent",border:"0 !important",boxShadow:"0 !important",minHeight:"auto","&:hover":{border:"0 !important"}}),option:(e,t)=>({...e,color:t.isSelected&&"#fafafa",backgroundColor:t.isSelected&&"#191919","&:hover":{backgroundColor:"#191919",color:"#ffffff"}}),singleValue:e=>({...e,color:"inherit"}),input:e=>({...e,color:"inherit",margin:"0",padding:"0"}),valueContainer:e=>({...e,padding:"0"}),dropdownIndicator:e=>({...e,paddingTop:"0px",paddingBottom:"0px"}),clearIndicator:e=>({...e,padding:"0"}),multiValueLabel:e=>({...e,padding:"0"}),menuPortal:e=>({...e,zIndex:999999}),placeholder:e=>({...e,margin:0})},menuPortalTarget:document.body,closeMenuOnScroll:e=>"scrollContainer"===e.target.id,...b}),(0,l.jsx)(s,{errors:f}),a]})}));h.defaultProps={placeholder:"Select",className:"",isSearchable:!1,placeholderClassName:"",isMulti:!1,value:"",options:[],onChange:()=>{}};var g=a(95044),j=a.n(g);a(79330);const v=r.forwardRef(((e,t)=>{let{className:a,items:o,centerMode:s,magnifiedIndex:n=0,activeSlideCSS:i="scale-75",...d}=e;const c=s?o.map(((e,t)=>{var a;return(e=>(null===d||void 0===d?void 0:d.activeIndex)+n>=(null===o||void 0===o?void 0:o.length)?e!==(null===d||void 0===d?void 0:d.activeIndex)+n-(null===o||void 0===o?void 0:o.length):e!==d.activeIndex+n)(t)?r.cloneElement(e,{...e.props,className:[null===(a=e.props)||void 0===a?void 0:a.className,i].filter(Boolean).join(" ")}):r.cloneElement(e)})):o;return(0,l.jsx)("div",{className:a,children:(0,l.jsx)(j(),{items:c,disableDotsControls:!0,touchTracking:!0,...d,disableButtonsControls:!0,infinite:!0,mouseTracking:!0,ref:t})})}));var w=a(47111),b=a(58931);const N=e=>{let{columns:t,data:a=[],rowClass:r="",headerClass:o="",enableSorting:s=!1,headerProps:n={},bodyProps:i={},rowDataProps:d={}}=e;const c={columns:t,data:a,getCoreRowModel:(0,w.HT)()};s&&(c.getSortedRowModel=(0,w.h5)());const m=(0,b.N4)(c);return(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{...n,children:m.getHeaderGroups().map((e=>(0,l.jsx)("tr",{className:o,children:e.headers.map((e=>(0,l.jsx)("th",{children:e.isPlaceholder?null:(0,b.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,l.jsx)("tbody",{...i,children:m.getRowModel().rows.map((e=>(0,l.jsx)("tr",{className:r,children:e.getVisibleCells().map((e=>(0,l.jsx)("td",{children:(0,b.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]})},y={txtManropeExtraBold46:"font-extrabold font-manrope",txtManropeBold18Gray900:"font-bold font-manrope",txtManropeBold18Gray600:"font-bold font-manrope",txtManropeExtraBold28:"font-extrabold font-manrope",txtManropeRegular20:"font-manrope font-normal",txtManropeExtraBold20:"font-extrabold font-manrope",txtManropeSemiBold16:"font-manrope font-semibold",txtManropeSemiBold18:"font-manrope font-semibold",txtManropeExtraBold36WhiteA700:"font-extrabold font-manrope",txtManropeRegular14:"font-manrope font-normal",txtManropeSemiBold12:"font-manrope font-semibold",txtManropeRegular18:"font-manrope font-normal",txtManropeSemiBold20Gray900:"font-manrope font-semibold",txtManropeSemiBold20Gray600:"font-manrope font-semibold",txtManropeSemiBold12Gray900:"font-manrope font-semibold",txtManropeSemiBold18Gray700:"font-manrope font-semibold",txtManropeBold18Deeporange400:"font-bold font-manrope",txtManropeBold24Gray900:"font-bold font-manrope",txtManropeSemiBold18Gray600:"font-manrope font-semibold",txtManropeBold18:"font-bold font-manrope",txtManropeBold1925:"font-bold font-manrope",txtManropeSemiBold16Gray600:"font-manrope font-semibold",txtManropeExtraBold54:"font-extrabold font-manrope",txtManropeSemiBold24Gray600:"font-manrope font-semibold",txtManropeSemiBold16Gray700:"font-manrope font-semibold",txtManropeRegular18Gray600:"font-manrope font-normal",txtManropeRegular18Gray700:"font-manrope font-normal",txtManropeExtraBold36:"font-extrabold font-manrope",txtManropeSemiBold20:"font-manrope font-semibold",txtManropeBold18OrangeA700:"font-bold font-manrope",txtManropeSemiBold1283:"font-manrope font-semibold",txtManropeBold24:"font-bold font-manrope",txtManropeSemiBold24:"font-manrope font-semibold",txtManropeBold22:"font-bold font-manrope",txtManropeMedium16:"font-manrope font-medium",txtMarkoOneRegular20:"font-markoone font-normal",txtManropeSemiBold1283Gray700:"font-manrope font-semibold"},M=e=>{let{children:t,className:a="",size:r,as:o,...s}=e;const n=o||"p";return(0,l.jsx)(n,{className:"text-left ".concat(a," ").concat(r&&y[r]),...s,children:t})}},4784:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(65043),l=a(74315),o=a(76337),s=a(70579);const n=e=>{let{fillColor:t="#000000",className:a="",...r}=e;return(0,s.jsx)("svg",{fill:t,xmlns:"http://www.w3.org/2000/svg",className:a,...r,children:(0,s.jsx)("path",{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"})})},i=()=>{const[e,t]=r.useState("");return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto w-auto sm:w-full md:w-full",children:[(0,s.jsx)(o.A,{className:"bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full"}),(0,s.jsx)("div",{className:"flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full",children:(0,s.jsxs)("div",{className:"flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full",children:[(0,s.jsx)(l.EY,{className:"sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-900 tracking-[-0.92px] w-full",size:"txtManropeExtraBold46",children:"Search Property / Anything"}),(0,s.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-full",children:[(0,s.jsx)(l.pd,{name:"search_One",placeholder:"Search Property / Anything",value:e,onChange:e=>t(e),className:"font-semibold p-0 placeholder:text-gray-600 sm:px-5 text-gray-600 text-left text-lg w-full",wrapClassName:"bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-[18px] px-[26px] rounded-[10px] w-full",prefix:(0,s.jsx)(l.E9,{className:"mt-auto mb-[3px] cursor-pointer h-6 mr-3.5",src:"images/img_search_gray_600.svg",alt:"search"}),suffix:(0,s.jsx)(n,{className:"cursor-pointer h-6 my-auto",onClick:()=>t(""),fillColor:"#6e6e6e",style:{visibility:(null===e||void 0===e?void 0:e.length)<=0?"hidden":"visible"},height:24,width:24,viewBox:"0 0 24 24"})}),(0,s.jsx)("div",{className:"bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] py-7 rounded-[10px] w-full",children:(0,s.jsxs)("div",{className:"flex flex-col gap-5 items-start justify-start w-full",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start max-w-[732px] w-full",children:[(0,s.jsx)(l.EY,{className:"text-gray-900 text-xl tracking-[-0.40px] w-full",size:"txtManropeSemiBold20Gray900",children:(0,s.jsx)(s.Fragment,{children:"You're viewing sample results."})}),(0,s.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,s.jsx)(l.EY,{className:"common-pointer text-base text-gray-600 w-full",size:"txtManropeSemiBold16Gray600",onClick:function(){window.location.href="https://relasto.com"},children:"https://relasto.com"}),(0,s.jsx)(l.EY,{className:"leading-[150.00%] max-w-[732px] md:max-w-full text-gray-600 text-sm",size:"txtManropeRegular14",children:"Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa perspiciatis. Exercitationem dolorum dolore perferendis praesen\u2026"})]})]}),(0,s.jsxs)(l.B8,{className:"flex flex-col gap-5 items-center w-full",orientation:"vertical",children:[(0,s.jsxs)("div",{className:"flex flex-1 flex-col gap-4 items-start justify-start w-full",children:[(0,s.jsx)(l.EY,{className:"text-gray-900 text-xl tracking-[-0.40px] w-full",size:"txtManropeSemiBold20Gray900",children:"Add CMS or Business Hosting and index your site to see real search results!"}),(0,s.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,s.jsx)(l.EY,{className:"text-base text-gray-600 w-full",size:"txtManropeSemiBold16Gray600",children:"https://relasto.com"}),(0,s.jsx)(l.EY,{className:"text-gray-600 text-sm w-full",size:"txtManropeRegular14",children:"Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa perspiciatis. Exercitationem dolorum dolore perferendis praesen\u2026"})]})]}),(0,s.jsx)(l.N1,{className:"self-center h-px bg-bluegray-100 w-full"}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col gap-4 items-start justify-start w-full",children:[(0,s.jsx)(l.EY,{className:"text-gray-900 text-xl tracking-[-0.40px] w-full",size:"txtManropeSemiBold20Gray900",children:(0,s.jsx)(s.Fragment,{children:"You're viewing sample results."})}),(0,s.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,s.jsx)(l.EY,{className:"text-base text-gray-600 w-full",size:"txtManropeSemiBold16Gray600",children:"https://relasto.com"}),(0,s.jsx)(l.EY,{className:"text-gray-600 text-sm w-full",size:"txtManropeRegular14",children:"Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa perspiciatis. Exercitationem dolorum dolore perferendis praesen\u2026"})]})]})]})]})})]})]})})]})})}}}]);
//# sourceMappingURL=922.bcbf054f.chunk.js.map