(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{239:function(e,a,t){e.exports=t(444)},244:function(e,a,t){},245:function(e,a,t){},444:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(13),c=t.n(l),o=(t(244),t(245),t(117)),i=t.n(o),m=t(186),s=t(90),u=t(87),p=t(187),E=t.n(p),d=t(4),h=t(203),g=t(503),f=t(515),b=t(504),v=t(505),w=t(509),y=t(513),O=t(67),j=t(508),S=t(506),N=t(512),x=t(507),M=t(510),B=t(511),C=t(445),P=t(204),k=t.n(P),T=t(206),A=t.n(T),D=t(205),I=t.n(D),R=t(491),V=t(494),H=t(495),J=t(496),W=t(189),F=t.n(W),G=t(190),L=t.n(G),z=t(191),X=t.n(z),q=t(192),K=t.n(q),U=t(193),Y=t.n(U),$=t(88),Q=t.n($),Z=r.a.createElement("div",null,r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(F.a,null)),r.a.createElement(H.a,{primary:"Dashboard"})),r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(L.a,null)),r.a.createElement(H.a,{primary:"Orders"})),r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(X.a,null)),r.a.createElement(H.a,{primary:"Customers"})),r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(K.a,null)),r.a.createElement(H.a,{primary:"Reports"})),r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(Y.a,null)),r.a.createElement(H.a,{primary:"Integrations"}))),_=r.a.createElement("div",null,r.a.createElement(J.a,{inset:!0},"Saved reports"),r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(Q.a,null)),r.a.createElement(H.a,{primary:"Current month"})),r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(Q.a,null)),r.a.createElement(H.a,{primary:"Last quarter"})),r.a.createElement(R.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(Q.a,null)),r.a.createElement(H.a,{primary:"Year-end sale"})));t(43);function ee(e){return r.a.createElement(O.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function ae(e,a){return{time:e,amount:a}}ae("00:00",0),ae("03:00",300),ae("06:00",600),ae("09:00",800),ae("12:00",1500),ae("15:00",2e3),ae("18:00",2400),ae("21:00",2400),ae("24:00",void 0);var te=t(497),ne=Object(h.a)({depositContext:{flex:1}});function re(){var e=ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,"Recent Deposits"),r.a.createElement(O.a,{component:"p",variant:"h4"},"Response here"),r.a.createElement(O.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(te.a,{color:"primary",href:"javascript:;"},"View balance")))}var le=t(498),ce=t(502),oe=t(501),ie=t(499),me=t(500);function se(e,a,t,n,r,l){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:l}}var ue=[se(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),se(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),se(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),se(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),se(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)],pe=Object(h.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function Ee(){var e=pe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,"Recent Orders"),r.a.createElement(le.a,{size:"small"},r.a.createElement(ie.a,null,r.a.createElement(me.a,null,r.a.createElement(oe.a,null,"Date"),r.a.createElement(oe.a,null,"Name"),r.a.createElement(oe.a,null,"Ship To"),r.a.createElement(oe.a,null,"Payment Method"),r.a.createElement(oe.a,{align:"right"},"Sale Amount"))),r.a.createElement(ce.a,null,ue.map((function(e){return r.a.createElement(me.a,{key:e.id},r.a.createElement(oe.a,null,e.date),r.a.createElement(oe.a,null,e.name),r.a.createElement(oe.a,null,e.shipTo),r.a.createElement(oe.a,null,e.paymentMethod),r.a.createElement(oe.a,{align:"right"},e.amount))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(te.a,{color:"primary",href:"javascript:;"},"See more orders")))}function de(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var he=Object(h.a)((function(e){return{root:{display:"flex"},menuButton:{marginRight:36},button:{margin:e.spacing(1)},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(u.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ge(){var e=he(),a=Object(n.useState)(!0),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(),p=Object(s.a)(o,2),h=p[0],P=p[1],T=Object(n.useState)({tweet:""}),D=Object(s.a)(T,2),R=D[0],V=D[1],H="http://127.0.0.1:5000/",J={header:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},W={tweet:R.tweet};function F(){return(F=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(H,W,J).then((function(e){P(e.data),console.log(h)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G,L=Object(d.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,null),r.a.createElement(b.a,{position:"absolute",className:Object(d.a)(e.appBar,l&&e.appBarShift)},r.a.createElement(v.a,{className:e.toolbar},r.a.createElement(S.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(d.a)(e.menuButton,l&&e.menuButtonHidden)},r.a.createElement(k.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Bench Twitter"),r.a.createElement(S.a,{color:"inherit"},r.a.createElement(x.a,{badgeContent:4,color:"secondary"},r.a.createElement(I.a,null))))),r.a.createElement(f.a,{variant:"permanent",classes:{paper:Object(d.a)(e.drawerPaper,!l&&e.drawerPaperClose)},open:l},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(S.a,{onClick:function(){c(!1)}},r.a.createElement(A.a,null))),r.a.createElement(j.a,null),r.a.createElement(w.a,null,Z),r.a.createElement(j.a,null),r.a.createElement(w.a,null,_)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(M.a,{maxWidth:"lg",className:e.container},r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(C.a,{className:L},r.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off"},r.a.createElement(y.a,{id:"standard-tweet",label:"# Tweet",className:e.textField,value:R.tweet,onChange:(G="tweet",function(e){V(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?de(t,!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},R,Object(u.a)({},G,e.target.value)))}),margin:"normal"})),r.a.createElement(N.a,{variant:"contained",color:"primary",className:e.button,type:"submit",onClick:function(){return F.apply(this,arguments)}},"Search"))),r.a.createElement(B.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(C.a,{className:L},r.a.createElement(re,null))),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(C.a,{className:e.paper},r.a.createElement(Ee,null)))))))}var fe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[239,1,2]]]);
//# sourceMappingURL=main.bd612314.chunk.js.map