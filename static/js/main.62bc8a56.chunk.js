(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t.p+"static/media/logo.1b992ec8.svg"},,,,function(e,n,t){e.exports=t.p+"static/media/br.b6554cf9.svg"},function(e,n,t){e.exports=t.p+"static/media/en.6191c011.svg"},,,,function(e,n,t){e.exports=t.p+"static/media/avatar.e372db35.svg"},function(e,n,t){e.exports=t.p+"static/media/drawing.185fc511.svg"},function(e,n,t){e.exports=t.p+"static/media/shape-top-mobile.3d7d70c3.svg"},function(e,n,t){e.exports=t.p+"static/media/shape-top-desktop.9995bb28.svg"},function(e,n,t){e.exports=t.p+"static/media/logo.23f55d38.svg"},function(e,n,t){e.exports=t.p+"static/media/bg.835e6cc9.jpg"},function(e,n,t){e.exports=t.p+"static/media/logo.254ec91a.png"},function(e,n,t){e.exports=t.p+"static/media/bg.c49f0ef9.jpg"},function(e,n,t){e.exports=t.p+"static/media/logo.64c26160.svg"},function(e,n,t){e.exports=t.p+"static/media/bg.4d775f16.jpg"},function(e,n,t){e.exports=t.p+"static/media/logo.b8d763d8.svg"},function(e,n,t){e.exports=t.p+"static/media/bg.796e8725.jpg"},function(e,n,t){e.exports=t.p+"static/media/logo.2dab184e.svg"},function(e,n,t){e.exports=t.p+"static/media/bg.cfd47d4c.jpg"},function(e,n,t){e.exports=t.p+"static/media/logo.96d3f19b.svg"},function(e,n,t){e.exports=t.p+"static/media/bg.c3428115.jpg"},function(e,n,t){e.exports=t.p+"static/media/shape-bottom-mobile.d9648d63.svg"},function(e,n,t){e.exports=t.p+"static/media/shape-bottom-desktop.8ac10883.svg"},,,,,,,,function(e,n,t){e.exports=t(51)},,,,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(36),o=t.n(i),l=t(5),s=t(9),c=t(7),m=t(8);s.b.add(c.d,c.c,m.e,c.e,c.a,c.b,m.a,m.b,m.c,m.d);var d=t(6),g=t.n(d),u=t(10),p=t.n(u),b=t(11),h=t.n(b),v=t(4),f=t(2),E=t(3);function w(){var e=Object(f.a)(["\n  border: 1px solid var(--c-lGreen);\n  border-radius: 100rem;\n  padding: 0.5rem 1rem;\n\n  color: var(--c-lGreen);\n  transition: 0.1s ease-in-out;\n\n  span {\n    margin-left: 0.5rem;\n    font-size: var(--fz-sm);\n  }\n\n  &:hover {\n    background-color: var(--c-lGreen);\n    color: var(--c-dGreen);\n  }\n"]);return w=function(){return e},e}var x=E.b.button(w());var y=function(e){var n=e.className,t=e.icon,a=e.text;return r.a.createElement(x,{className:n},r.a.createElement(v.a,{icon:t}),r.a.createElement("span",null,a))};function N(){var e=Object(f.a)(["\n  height: 2.5rem;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--m-md);\n\n  .btns-wrapper {\n    display: flex;\n  }\n\n  .btn-download {\n    margin-right: 1rem;\n  }\n\n  .btns-flag,\n  img {\n    height: 100%;\n  }\n\n  .btns-flag-bg {\n    height: 7rem;\n    width: 40px;\n\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n\n    background-color: grey;\n  }\n\n  .btns-flag {\n    position: relative;\n    width: 40px;\n\n    .hidden {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transition: 0.2s ease-in-out;\n    }\n\n    .hidden {\n      z-index: -1;\n      opacity: 0;\n    }\n\n    &.show {\n      .hidden {\n        top: 3.5rem;\n        opacity: 1;\n        z-index: 0;\n      }\n    }\n  }\n\n  @media only screen and (min-width: 800px) {\n    margin-bottom: var(--m-bg);\n\n    height: 3rem;\n    .logo {\n    }\n  }\n"]);return N=function(){return e},e}var k=E.b.header(N());var j=function(e){var n=e.lang,t=e.setLang,a=e.cv;function i(){var e=document.querySelector(".btns-flag");e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show"),e.classList.contains("show")&&document.addEventListener("click",(function n(){e.classList.remove("show"),document.removeEventListener("click",n)})),document.querySelector(".btns-flag .hidden").addEventListener("click",(function(){"en"===n?(t("br"),localStorage.setItem("lang","br")):(t("en"),localStorage.setItem("lang","en")),window.location.reload()}))}var o=r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"logo",href:"https://vinibortoletto.github.io/portfolio",target:"_blank"},r.a.createElement("img",{src:g.a,alt:"vinicius bortoletto's logo"})),r.a.createElement("div",{className:"btns-wrapper"},r.a.createElement("a",{href:a.en,target:"_blank"},r.a.createElement(y,{className:"btn-download",icon:"file-download",text:"Download CV"})),r.a.createElement("div",{onClick:i,className:"btns-flag"},r.a.createElement("button",{className:"visible"},"en"===n?r.a.createElement("img",{src:h.a,alt:"united kingdom's flag"}):r.a.createElement("img",{src:p.a,alt:"brazil's flag"})),r.a.createElement("button",{className:"hidden"},"en"===n?r.a.createElement("img",{src:p.a,alt:"brazil's flag"}):r.a.createElement("img",{src:h.a,alt:"united kingdom's flag"}))))),l=r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"logo",href:"https://vinibortoletto.github.io/portfolio",target:"_blank"},r.a.createElement("img",{src:g.a,alt:"logo de vinicius bortoletto"})),r.a.createElement("div",{className:"btns-wrapper"},r.a.createElement("a",{href:a.br,target:"_blank"},r.a.createElement(y,{className:"btn-download",icon:"file-download",text:"Baixar curr\xedculo"})),r.a.createElement("div",{onClick:i,className:"btns-flag"},r.a.createElement("button",{className:"visible"},"en"===n?r.a.createElement("img",{src:h.a,alt:"bandeira do reino unido"}):r.a.createElement("img",{src:p.a,alt:"bandeira do brasil"})),r.a.createElement("button",{className:"hidden"},"en"===n?r.a.createElement("img",{src:p.a,alt:"bandeira do brasil"}):r.a.createElement("img",{src:h.a,alt:"bandeira do reino unido"})))));return r.a.createElement(k,null,"en"===n?o:l)},S=t(15),z=t.n(S),O=t(16),F=t.n(O),G=t(17),L=t.n(G),M=t(18),_=t.n(M);function C(){var e=Object(f.a)(["\n  margin-bottom: var(--m-bg);\n\n  .avatar {\n    width: 7rem;\n    margin: auto;\n    display: block;\n  }\n\n  .title {\n    text-align: center;\n    margin-bottom: var(--m-md);\n\n    h1 {\n      font-family: var(--ff-special);\n      color: var(--c-lGreen);\n    }\n\n    h2 {\n      margin: 0;\n      font-weight: normal;\n      font-size: 1rem;\n      color: var(--c-grey);\n      text-transform: capitalize;\n    }\n  }\n\n  .info-items {\n    margin-bottom: var(--m-bg);\n\n    ul {\n      text-align: center;\n    }\n\n    li {\n      margin-bottom: var(--m-sm);\n    }\n\n    svg {\n      color: var(--c-lGreen);\n      margin-right: 0.7rem;\n    }\n  }\n\n  .drawing {\n    width: 100%;\n  }\n\n  .shape {\n    margin: -6px -5vw;\n    width: calc(100% + 10vw);\n  }\n\n  @media only screen and (min-width: 800px) {\n    margin-bottom: 43vw;\n\n    .hero-wrapper {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      padding: 0 5vw;\n    }\n\n    .avatar {\n      order: 2;\n      width: 10rem;\n      margin: 0;\n    }\n\n    .title {\n      text-align: left;\n\n      h1 {\n        font-size: 3rem;\n        margin: 0;\n      }\n\n      h2 {\n        font-size: 1.3rem;\n      }\n    }\n\n    .info-items {\n      margin-bottom: 0;\n\n      ul {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr;\n        gap: 4rem 2rem;\n\n        text-align: left;\n      }\n\n      li {\n        margin-bottom: 0;\n      }\n    }\n\n    .illustrations {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: -19vw;\n\n      z-index: -1;\n      overflow: hidden;\n\n      .drawing {\n        opacity: 0.2;\n      }\n    }\n\n    .drawing {\n      padding: 0 10vw 0 10vw;\n    }\n  }\n\n  @media only screen and (min-width: 1000px) {\n    .avatar {\n      width: 13rem;\n    }\n  }\n\n  @media only screen and (min-width: 1200px) {\n    .title h1 {\n      font-size: 3.5rem;\n    }\n\n    .info-items {\n      font-size: 1.2rem;\n    }\n  }\n"]);return C=function(){return e},e}var P=E.b.section(C());var V=function(e){var n=e.lang,t=Object(a.useState)(L.a),i=Object(l.a)(t,2),o=i[0],s=i[1],c=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero-wrapper"},r.a.createElement("img",{className:"avatar",src:z.a,alt:"avatar de vinicius bortoletto"}),r.a.createElement("div",null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"vini.bortoletto"),r.a.createElement("h2",null,"desenvolvedor front-end")),r.a.createElement("div",{className:"info-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.a,{icon:["fab","whatsapp"]}),r.a.createElement("span",null,"+55 19 98872-4386")),r.a.createElement("li",null,r.a.createElement(v.a,{icon:"envelope"}),r.a.createElement("span",null,"ovinibortoletto@gmail.com")),r.a.createElement("li",null,r.a.createElement(v.a,{icon:"globe-americas"}),r.a.createElement("span",null,"Piracicaba | S\xe3o Paulo | Brasil")),r.a.createElement("li",null,r.a.createElement(v.a,{icon:"calendar-day"}),r.a.createElement("span",null,"19/08/1993")))))),r.a.createElement("div",{className:"illustrations"},r.a.createElement("img",{className:"drawing",src:F.a,alt:"ilustra\xe7\xe3o sobre desenvolvimento web"}),r.a.createElement("img",{className:"shape",src:o,alt:"forma abstrata"}))),m=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero-wrapper"},r.a.createElement("img",{className:"avatar",src:z.a,alt:"vinicius bortoletto's avatar"}),r.a.createElement("div",null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"vini.bortoletto"),r.a.createElement("h2",null,"front-end developer")),r.a.createElement("div",{className:"info-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.a,{icon:["fab","whatsapp"]}),r.a.createElement("span",null,"+55 19 98872-4386")),r.a.createElement("li",null,r.a.createElement(v.a,{icon:"envelope"}),r.a.createElement("span",null,"ovinibortoletto@gmail.com")),r.a.createElement("li",null,r.a.createElement(v.a,{icon:"globe-americas"}),r.a.createElement("span",null,"Piracicaba | S\xe3o Paulo | Brasil")),r.a.createElement("li",null,r.a.createElement(v.a,{icon:"calendar-day"}),r.a.createElement("span",null,"19/08/1993")))))),r.a.createElement("div",{className:"illustrations"},r.a.createElement("img",{className:"drawing",src:F.a,alt:"web development line drawing"}),r.a.createElement("img",{className:"shape",src:o,alt:"abstract shape"})));return Object(a.useEffect)((function(){window.innerWidth>=800&&s(_.a),window.onresize=function(){window.innerWidth>=800?s(_.a):s(L.a)}}),[]),r.a.createElement(P,null,"en"===n?m:c)};function B(){var e=Object(f.a)(["\n  font-size: 1.5rem;\n  font-family: var(--ff-special);\n  text-align: center;\n  color: var(--c-lGreen);\n  text-transform: capitalize;\n  margin-bottom: var(--m-sm);\n\n  @media only screen and (min-width: 1000px) {\n    font-size: 1.8rem;\n  }\n"]);return B=function(){return e},e}var I=E.b.h1(B());var T=function(e){var n=e.text;return r.a.createElement(I,null,n)};function A(){var e=Object(f.a)(["\n  padding: 0 1rem;\n  margin-bottom: var(--m-bg);\n\n  h2 {\n    color: var(--c-grey);\n    font-size: var(--fz-sm);\n    font-weight: normal;\n    text-transform: capitalize;\n  }\n\n  div {\n    margin-bottom: var(--m-sm);\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  .html:hover {\n    color: #ff9532;\n  }\n  .css:hover {\n    color: #5bbef7;\n  }\n  .js:hover {\n    color: #ffbf00;\n  }\n\n  .html,\n  .js,\n  .css {\n    transition: 0.2s ease-in-out;\n  }\n"]);return A=function(){return e},e}var q=E.b.section(A());var J=function(e){var n=e.lang,t=r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{text:"skills"}),r.a.createElement("div",null,r.a.createElement("h2",null,"languages"),r.a.createElement("p",null,r.a.createElement("span",{className:"html"},"HTML5"),","," ",r.a.createElement("span",{className:"css"},"CSS3 (SASS, LESS, TailwindCSS, Bulma, BEM)"),"and ",r.a.createElement("span",{className:"js"},"JavaScript (ES6, React.js)"),".")),r.a.createElement("div",null,r.a.createElement("h2",null,"tools"),r.a.createElement("p",null,"Visual Studio Code, GIT, Gulp, Figma, Adobe Photoshop, Procreate and Linux.")),r.a.createElement("div",null,r.a.createElement("h2",null,"speaking languages"),r.a.createElement("p",null,"Portuguese (native), English (fluent) and French (intermediate)."))),a=r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{text:"habilidades"}),r.a.createElement("div",null,r.a.createElement("h2",null,"linguagens"),r.a.createElement("p",null,r.a.createElement("span",{className:"html"},"HTML5"),","," ",r.a.createElement("span",{className:"css"},"CSS3 (SASS, LESS, TailwindCSS, Bulma, BEM)"),"e ",r.a.createElement("span",{className:"js"},"JavaScript (ES6, React.js)"),".")),r.a.createElement("div",null,r.a.createElement("h2",null,"ferramentas"),r.a.createElement("p",null,"Visual Studio Code, GIT, Gulp, Figma, Adobe Photoshop, Procreate e Linux.")),r.a.createElement("div",null,r.a.createElement("h2",null,"idiomas"),r.a.createElement("p",null,"Portugu\xeas (nativo), Ingl\xeas (fluente) e Franc\xeas (intermedi\xe1rio).")));return r.a.createElement(q,null,"en"===n?t:a)};function H(){var e=Object(f.a)(["\n  padding: 0 1rem;\n  margin-bottom: 0;\n  margin-bottom: 15rem;\n"]);return H=function(){return e},e}var K=E.b.section(H());var R=function(e){var n=e.lang,t=r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{text:"about me"}),r.a.createElement("p",null,"In the past 8 years I worked as freelance illustrator, helping clients from all over the world. However, along the way I started to develop an interest for programming, and in the last 2 years I've been working as a front-end developer.")),a=r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{text:"sobre mim"}),r.a.createElement("p",null,"Atuei por cerca de 8 anos como ilustrador freelancer, trabalhando com clientes ao redor do mundo. No entando, no meio do caminho passei a me interessar por programa\xe7\xe3o e nos \xfaltimos 2 anos venho trabalhando com desenvolvimento front-end."));return r.a.createElement(K,null,"en"===n?t:a)};function W(){var e=Object(f.a)(["\n  margin-bottom: 10rem;\n"]);return W=function(){return e},e}var Z=E.b.div(W());var D=function(e){var n=e.lang;return r.a.createElement(Z,null,r.a.createElement(J,{lang:n}),r.a.createElement(R,{lang:n}))},U=t(19),Y=t.n(U),X=t(20),Q=t.n(X),$=t(21),ee=t.n($),ne=t(22),te=t.n(ne),ae=t(23),re=t.n(ae),ie=t(24),oe=t.n(ie),le=t(25),se=t.n(le),ce=t(26),me=t.n(ce),de=t(27),ge=t.n(de),ue=t(28),pe=t.n(ue),be=t(29),he=t.n(be),ve=t(30),fe=t.n(ve);function Ee(){var e=Object(f.a)(["\n  position: relative;\n  width: 100%;\n  height: 8rem;\n  margin-bottom: var(--m-sm);\n\n  display: grid;\n  align-items: center;\n\n  border-left: 3px solid var(--c-mGreen);\n\n  &:hover {\n    height: 10rem;\n\n    .logo {\n      transform: translate(-50%, -100%);\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    .bg .shadow {\n      opacity: 0.95;\n      height: 10rem;\n    }\n\n    .content {\n      opacity: 1;\n      pointer-events: all;\n    }\n  }\n\n  .logo {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    height: 3rem;\n\n    transform: translate(-50%, -50%);\n    pointer-events: all;\n  }\n\n  .text {\n    font-size: var(--fz-sm);\n  }\n\n  .line {\n    height: 5rem;\n    width: 1px;\n    margin: var(--m-sm) 0;\n    background-color: var(--c-lGreen);\n    opacity: 0.3;\n  }\n\n  .btns {\n    button {\n      display: block;\n      width: 10rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  .bg,\n  .bg .shadow,\n  .bg img {\n    width: inherit;\n    height: inherit;\n  }\n  .bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n\n    .shadow {\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      background-color: var(--c-drGreen);\n      opacity: 0.5;\n    }\n\n    img {\n      object-fit: cover;\n    }\n  }\n\n  .content {\n    max-width: 30rem;\n    padding: 1rem 2rem;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n\n    justify-items: center;\n    justify-self: center;\n    align-items: center;\n\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  /* Add transition to animated elements */\n  transition: 0.2s ease-in-out;\n\n  .content,\n  .bg .shadow,\n  .logo {\n    transition: 0.2s ease-in-out;\n  }\n"]);return Ee=function(){return e},e}var we=E.b.div(Ee());var xe=function(e){var n=e.lang,t=e.logo,a=e.bg,i=e.text,o=e.website,l=e.github,s=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:t,alt:"vinicius bortoletto's logo",className:"logo"}),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"text"},i),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"btns"},r.a.createElement("a",{href:o,target:"_blank"},r.a.createElement(y,{icon:"desktop",text:"Visit website"})),r.a.createElement("a",{href:l,target:"_blank"},r.a.createElement(y,{icon:["fab","github"],text:"Visit github"})))),r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"shadow"}),r.a.createElement("img",{src:a,alt:"abstract shape"}))),c=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:t,alt:"logo de vinicius bortoletto",className:"logo"}),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"text"},i),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"btns"},r.a.createElement("a",{href:o,target:"_blank"},r.a.createElement(y,{icon:"desktop",text:"Visitar website"})),r.a.createElement("a",{href:l,target:"_blank"},r.a.createElement(y,{icon:["fab","github"],text:"Visitar github"})))),r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"shadow"}),r.a.createElement("img",{src:a,alt:"abstract shape"})));return r.a.createElement(we,null,"en"===n?s:c)};function ye(){var e=Object(f.a)(["\n  margin-bottom: var(--m-bg);\n"]);return ye=function(){return e},e}var Ne=E.b.div(ye());var ke=function(e){var n=e.lang,t=[{logo:Y.a,bg:Q.a,text:"Best quality pet food, acessories and health care",website:"https://marinho-agropecuaria.netlify.app/",github:"https://github.com/vinibortoletto/marinho-agropecuaria"},{logo:ee.a,bg:te.a,text:"Logistics and solutions for public and road transportation ",website:"https://viacao-trevisan.netlify.app/",github:"https://github.com/vinibortoletto/ui-clone-viacao-trevisan"},{logo:re.a,bg:oe.a,text:"Sustainable and minimalist clothing",website:"https://simplesmente.netlify.app/",github:"https://github.com/vinibortoletto/simples-mente"},{logo:se.a,bg:me.a,text:"Personal assistant service and expert help",website:"https://vital-ajuda.netlify.app/",github:"https://github.com/vinibortoletto/vital-ajuda"},{logo:ge.a,bg:pe.a,text:"Front-end web developer portfolio",website:"https://neo-dev.netlify.app/",github:"https://github.com/vinibortoletto/neo"},{logo:he.a,bg:fe.a,text:"Digital fantasy artist bringing ideas to life",website:"https://ilustrador-digital.netlify.app/",github:"https://github.com/vinibortoletto/ilustrador-digital"}],a=[{logo:Y.a,bg:Q.a,text:"Melhor qualidade em ra\xe7\xf5es, acess\xf3rios e cuidados para animais",website:"https://marinho-agropecuaria.netlify.app/",github:"https://github.com/vinibortoletto/marinho-agropecuaria"},{logo:ee.a,bg:te.a,text:"Log\xedstica e solu\xe7\xf5es para transportes p\xfablicos e rodovi\xe1rios ",website:"https://viacao-trevisan.netlify.app/",github:"https://github.com/vinibortoletto/viacao-trevisan"},{logo:re.a,bg:oe.a,text:"Roupas minimalistas e sustent\xe1veis",website:"https://simplesmente.netlify.app/produtos.html",github:"https://github.com/vinibortoletto/simples-mente"},{logo:se.a,bg:me.a,text:"Servi\xe7oes de assist\xeante pessoal e ajuda exclusiva",website:"https://vital-ajuda.netlify.app/",github:"https://github.com/vinibortoletto/vital-ajuda"},{logo:ge.a,bg:pe.a,text:"Criador e desenvedor front-end",website:"https://neo-dev.netlify.app/",github:"https://github.com/vinibortoletto/neo"},{logo:he.a,bg:fe.a,text:"Ilustrador digital dando vida a ideias",website:"https://ilustrador-digital.netlify.app/",github:"https://github.com/vinibortoletto/ilustrador-digital"}];return r.a.createElement(Ne,null,r.a.createElement(T,{text:"en"===n?"recent projects":"projetos recentes"}),"en"===n?t.map((function(e,t){return r.a.createElement(xe,{key:t,logo:e.logo,bg:e.bg,text:e.text,website:e.website,github:e.github,lang:n})})):a.map((function(e,t){return r.a.createElement(xe,{key:t,logo:e.logo,bg:e.bg,text:e.text,website:e.website,github:e.github,lang:n})})))};function je(){var e=Object(f.a)(["\n  margin-bottom: 7rem;\n\n  @media only screen and (min-width: 800px) {\n    h1 {\n      text-align: left;\n    }\n\n    .info-projects-wrapper {\n      display: grid;\n      grid-template-columns: 2fr 3fr;\n      gap: 0 3rem;\n\n      & div:first-child {\n        order: 2;\n      }\n    }\n  }\n"]);return je=function(){return e},e}var Se=E.b.main(je());var ze=function(e){var n=e.lang;return r.a.createElement(Se,null,r.a.createElement(V,{lang:n}),r.a.createElement("section",{className:"info-projects-wrapper"},r.a.createElement(ke,{lang:n}),r.a.createElement(D,{lang:n})))},Oe=t(31),Fe=t.n(Oe),Ge=t(32),Le=t.n(Ge);function Me(){var e=Object(f.a)(["\n  display: grid;\n  justify-items: center;\n\n  .logo {\n    width: 10rem;\n    margin-bottom: 2.5rem;\n  }\n\n  .social-icons {\n    margin-bottom: 1.5rem;\n    display: flex;\n\n    li {\n      margin-right: 1.5rem;\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n\n    svg {\n      color: var(--c-lGreen);\n      font-size: 1.75rem;\n    }\n  }\n\n  .download {\n    margin-bottom: 2rem;\n  }\n\n  .copyright {\n    color: var(--c-lGreen);\n    font-size: var(--fz-sm);\n    text-align: center;\n    margin-bottom: 15rem;\n  }\n\n  .shape {\n    margin: -6px -5vw;\n    width: calc(100% + 10vw);\n  }\n\n  @media only screen and (min-width: 800px) {\n    .shape {\n      margin: -6px -10vw;\n      width: calc(100% + 20vw);\n    }\n  }\n"]);return Me=function(){return e},e}var _e=E.b.footer(Me());var Ce=function(e){var n=e.lang,t=e.cv,i=Object(a.useState)(Fe.a),o=Object(l.a)(i,2),s=o[0],c=o[1],m=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"logo",src:g.a,alt:"vinicius bortoletto's logo"}),r.a.createElement("ul",{className:"social-icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/vinibortoletto/",target:"_blank"},r.a.createElement(v.a,{icon:["fab","github"]}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/vinicius-bortoletto/",target:"_blank"},r.a.createElement(v.a,{icon:["fab","linkedin-in"]}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:ovinibortoletto@gmail.com?subject=website contact",target:"_blank"},r.a.createElement(v.a,{icon:"envelope"})))),r.a.createElement("a",{href:t.en,target:"_blank"},r.a.createElement(y,{className:"download",icon:"file-download",text:"Download CV"})),r.a.createElement("p",{className:"copyright"},"Created and designed by ",r.a.createElement("b",null,"Vini Bortoletto")),r.a.createElement("img",{src:s,alt:"abstract shape",className:"shape"})),d=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"logo",src:g.a,alt:"logo de vinicius bortoletto"}),r.a.createElement("ul",{className:"social-icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/vinibortoletto/",target:"_blank"},r.a.createElement(v.a,{icon:["fab","github"]}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/vinicius-bortoletto/",target:"_blank"},r.a.createElement(v.a,{icon:["fab","linkedin-in"]}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:ovinibortoletto@gmail.com?subject=website contact",target:"_blank"},r.a.createElement(v.a,{icon:"envelope"})))),r.a.createElement("a",{href:t.br,target:"_blank"},r.a.createElement(y,{className:"download",icon:"file-download",text:"Baixar curr\xedculo"})),r.a.createElement("p",{className:"copyright"},"Criado e desenvolvido por Vinicius Bortoletto"),r.a.createElement("img",{src:s,alt:"forma abstrata",className:"shape"}));return Object(a.useEffect)((function(){window.innerWidth>=800&&c(Le.a),window.onresize=function(){window.innerWidth>=800?c(Le.a):c(Fe.a)}}),[]),r.a.createElement(_e,null,"en"===n?m:d)};function Pe(){var e=Object(f.a)(["\n  position: absolute;\n  z-index: -1;\n\n  .stars-1 {\n    width: 1px;\n    height: 1px;\n    border-radius: 100px;\n    background: transparent;\n    animation: animStar 150s linear infinite;\n    box-shadow: ",';\n  }\n\n  .stars-1:after {\n    content: "";\n    position: absolute;\n    top: 2000px;\n    width: 1px;\n    height: 1px;\n    border-radius: 100px;\n    background: transparent;\n    box-shadow: ',";\n  }\n\n  .stars-2 {\n    width: 2px;\n    height: 2px;\n    border-radius: 100px;\n    background: transparent;\n    animation: animStar 200s linear infinite;\n    box-shadow: ",';\n  }\n\n  .stars-2:after {\n    content: "";\n    position: absolute;\n    top: 2000px;\n    width: 2px;\n    height: 2px;\n    border-radius: 100px;\n    background: transparent;\n    box-shadow: ',";\n  }\n\n  .stars-3 {\n    width: 3px;\n    height: 3px;\n    border-radius: 100px;\n    background: transparent;\n    animation: animStar 250s linear infinite;\n    box-shadow: ",';\n  }\n\n  .stars-3:after {\n    content: "";\n    position: absolute;\n    top: 2000px;\n    width: 3px;\n    height: 3px;\n    border-radius: 100px;\n    background: transparent;\n    box-shadow: ',";\n  }\n\n  @keyframes animStar {\n    from {\n      transform: translateY(0px);\n    }\n    to {\n      transform: translateY(-2000px);\n    }\n  }\n"]);return Pe=function(){return e},e}function Ve(e){for(var n="".concat(Math.floor(2e3*Math.random()),"px ").concat(Math.floor(2e3*Math.random()),"px var(--c-mGreen)"),t=2;t<=e;t++)n="".concat(n,", ").concat(Math.floor(2e3*Math.random()),"px ").concat(Math.floor(2e3*Math.random()),"px var(--c-mGreen)");return n}var Be=E.b.div(Pe(),Ve(700),Ve(700),Ve(400),Ve(400),Ve(200),Ve(200));var Ie=function(){return r.a.createElement(Be,null,r.a.createElement("div",{className:"stars-1"}),r.a.createElement("div",{className:"stars-2"}),r.a.createElement("div",{className:"stars-3"}))};function Te(){var e=Object(f.a)(["\n  html {\n    font-size: 100%;\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 2rem 5vw 0 5vw;\n\n    font-family: var(--ff-regular);\n    line-height: 1.3;\n\n    color: var(--c-gold);\n    background-color: var(--c-dGreen);\n  }\n\n  button {\n    border: none;\n    background-color: transparent;\n    border-radius: 0;\n    color: inherit;\n    cursor: pointer;\n\n    padding: 0;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  @media only screen and (min-width: 800px) {\n    body {\n      padding-right: 10vw;\n      padding-left: 10vw;\n    }\n  }\n"]);return Te=function(){return e},e}var Ae=E.a(Te());t(50);var qe=function(){var e=Object(a.useState)("en"),n=Object(l.a)(e,2),t=n[0],i=n[1],o={br:"https://drive.google.com/file/d/10FlPbt4wcZJVsy9r8qxemCuEKT33MUVE/view?usp=sharing",en:"https://drive.google.com/file/d/1zvTKXPydZnZAwMFVkRKlbZpgUdeHyoKi/view?usp=sharing"};return Object(a.useEffect)((function(){var e=localStorage.getItem("lang");null!==e&&i(e)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null),r.a.createElement(Ie,null),r.a.createElement(j,{lang:t,setLang:i,cv:o}),r.a.createElement(ze,{lang:t}),r.a.createElement(Ce,{lang:t,cv:o}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.62bc8a56.chunk.js.map