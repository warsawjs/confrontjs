import{a as o,b as n,c as r,d as t,i as e,s,e as a,S as l,f as u,g as c,h as i,j as p,k as g,u as f,m as h,o as v,n as m,t as d,r as w,F as $,B as b,q as _,D as k,E as j,w as S,y,p as E,v as x,z,L as C,M as V,N as B,K as D}from"./index.0e401ccc.js";import{W as G}from"./WaveType4.b41a661c.js";import{B as P}from"./Banner.87f88219.js";function I(o){var n,r,t,e,s,a;return{c:function(){n=u("a"),r=u("img"),this.h()},l:function(o){n=c(o,"A",{class:!0,href:!0,title:!0,rel:!0},!1);var t=i(n);r=c(t,"IMG",{src:!0,class:!0,alt:!0},!1),i(r).forEach(p),t.forEach(p),this.h()},h:function(){g(r,"src",t=o.sponsor.logo_url),g(r,"class","sponsor-avatar svelte-1bx7n30"),g(r,"alt",e="Avatar of "+o.sponsor.name),g(n,"class",f(o.getClass())+" svelte-1bx7n30"),g(n,"href",s=o.sponsor.url),g(n,"title",a=o.sponsor.name),g(n,"rel","noopener")},m:function(o,t){h(o,n,t),v(n,r)},p:function(o,l){o.sponsor&&t!==(t=l.sponsor.logo_url)&&g(r,"src",t),o.sponsor&&e!==(e="Avatar of "+l.sponsor.name)&&g(r,"alt",e),o.sponsor&&s!==(s=l.sponsor.url)&&g(n,"href",s),o.sponsor&&a!==(a=l.sponsor.name)&&g(n,"title",a)},i:m,o:m,d:function(o){o&&p(n)}}}function W(o,n,r){var t=n.sponsor,e=void 0===t?{}:t;return o.$set=function(o){"sponsor"in o&&r("sponsor",e=o.sponsor)},{sponsor:e,getClass:function(){return"".concat(e.type.toLowerCase(),"-sponsor")}}}var F=function(u){function c(o){var l;return n(this,c),l=r(this,t(c).call(this)),e(a(l),o,W,I,s,["sponsor"]),l}return o(c,l),c}();function T(o){var n,r,t;return{c:function(){n=u("img"),this.h()},l:function(o){n=c(o,"IMG",{src:!0,class:!0,alt:!0},!1),i(n).forEach(p),this.h()},h:function(){g(n,"src",r=o.partner.logo_url),g(n,"class","partner-avatar svelte-1d1mz5z"),g(n,"alt",t="Avatar of "+o.partner.name)},m:function(o,r){h(o,n,r)},p:function(o,e){o.partner&&r!==(r=e.partner.logo_url)&&g(n,"src",r),o.partner&&t!==(t="Avatar of "+e.partner.name)&&g(n,"alt",t)},d:function(o){o&&p(n)}}}function J(o){var n,r=o.partner.name+"";return{c:function(){n=d(r)},l:function(o){n=w(o,r)},m:function(o,r){h(o,n,r)},p:function(o,t){o.partner&&r!==(r=t.partner.name+"")&&$(n,r)},d:function(o){o&&p(n)}}}function R(o){var n,r,t;function e(o){return""===o.partner.logo_url?J:T}var s=e(o),a=s(o);return{c:function(){n=u("a"),a.c(),this.h()},l:function(o){n=c(o,"A",{href:!0,title:!0,rel:!0,class:!0},!1);var r=i(n);a.l(r),r.forEach(p),this.h()},h:function(){g(n,"href",r=o.partner.url),g(n,"title",t=o.partner.name),g(n,"rel","noopener"),g(n,"class","svelte-1d1mz5z")},m:function(o,r){h(o,n,r),a.m(n,null)},p:function(o,l){s===(s=e(l))&&a?a.p(o,l):(a.d(1),(a=s(l))&&(a.c(),a.m(n,null))),o.partner&&r!==(r=l.partner.url)&&g(n,"href",r),o.partner&&t!==(t=l.partner.name)&&g(n,"title",t)},i:m,o:m,d:function(o){o&&p(n),a.d()}}}function A(o,n,r){var t=n.partner,e=void 0===t?{}:t;return o.$set=function(o){"partner"in o&&r("partner",e=o.partner)},{partner:e}}var L=function(u){function c(o){var l;return n(this,c),l=r(this,t(c).call(this)),e(a(l),o,A,R,s,["partner"]),l}return o(c,l),c}(),H=function(){return{}},M=function(){return{}},O=function(){return{}},N=function(){return{}};function K(o){var n,r,t,e,s=o.$$slots.header,a=b(s,o,N),l=o.$$slots.body,f=b(l,o,M);return{c:function(){n=u("div"),r=u("div"),a&&a.c(),t=_(),f&&f.c(),this.h()},l:function(o){n=c(o,"DIV",{class:!0},!1);var e=i(n);r=c(e,"DIV",{class:!0},!1);var s=i(r);a&&a.l(s),t=w(s,"\n        "),f&&f.l(s),s.forEach(p),e.forEach(p),this.h()},h:function(){g(r,"class","content"),g(n,"class","message svelte-10wq0ww")},m:function(o,s){h(o,n,s),v(n,r),a&&a.m(r,null),v(r,t),f&&f.m(r,null),e=!0},p:function(o,n){a&&a.p&&o.$$scope&&a.p(k(s,n,o,O),j(s,n,N)),f&&f.p&&o.$$scope&&f.p(k(l,n,o,H),j(l,n,M))},i:function(o){e||(S(a,o),S(f,o),e=!0)},o:function(o){y(a,o),y(f,o),e=!1},d:function(o){o&&p(n),a&&a.d(o),f&&f.d(o)}}}function U(o,n,r){var t=n.$$slots,e=void 0===t?{}:t,s=n.$$scope;return o.$set=function(o){"$$scope"in o&&r("$$scope",s=o.$$scope)},{$$slots:e,$$scope:s}}var Y=function(u){function c(o){var l;return n(this,c),l=r(this,t(c).call(this)),e(a(l),o,U,K,s,[]),l}return o(c,l),c}();function q(o){var n,r,t,e,s,a,l,f,d;return{c:function(){n=u("div"),r=E("svg"),t=E("path"),e=_(),s=E("svg"),a=E("path"),l=_(),f=E("svg"),d=E("path"),this.h()},l:function(o){n=c(o,"DIV",{class:!0},!1);var u=i(n);r=c(u,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0},!0);var g=i(r);t=c(g,"path",{d:!0,fill:!0},!0),i(t).forEach(p),g.forEach(p),e=w(u,"\n\n    "),s=c(u,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0},!0);var h=i(s);a=c(h,"path",{d:!0,stroke:!0,"stroke-width":!0},!0),i(a).forEach(p),h.forEach(p),l=w(u,"\n\n    "),f=c(u,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0},!0);var v=i(f);d=c(v,"path",{d:!0,stroke:!0,"stroke-width":!0},!0),i(d).forEach(p),v.forEach(p),u.forEach(p),this.h()},h:function(){g(t,"d","M1441.6 86.6188C1253.84 -33.7318 999.49 -3.43057 833.26 28.7296C667.029 60.8898 502.801 88.9047 305.027 28.7296C107.253 -31.4456 0.103885 28.7296 0.103885 28.7296V338H1441.6V86.6188Z"),g(t,"fill","#3B4252"),g(r,"class","wave wave-1 svelte-1w5v542"),g(r,"viewBox","0 0 1440 338"),g(r,"fill","none"),g(r,"xmlns","http://www.w3.org/2000/svg"),g(a,"d","M1435.05 1C1345.36 81.2761 1181.43 173.868 915.347 140.687C661.917 109.084 339.333 15.4497 0.999734 86.6346"),g(a,"stroke","#2E3440"),g(a,"stroke-width","1.5"),g(s,"class","wave wave-2 svelte-1w5v542"),g(s,"viewBox","0 0 1434 149"),g(s,"fill","none"),g(s,"xmlns","http://www.w3.org/2000/svg"),g(d,"d","M1441 35.2839C1418.41 81.3131 1339.4 108.994 1204.32 91.5163C1066.8 73.7215 943.713 -27.7835 672.17 8.94756C456.419 38.1317 326.37 154.746 0.999995 61.5017"),g(d,"stroke","#ECEFF4"),g(d,"stroke-width","1.5"),g(f,"class","wave wave-3 svelte-1w5v542"),g(f,"viewBox","0 0 1440 98"),g(f,"fill","none"),g(f,"xmlns","http://www.w3.org/2000/svg"),g(n,"class","waves-type-6 svelte-1w5v542")},m:function(o,u){h(o,n,u),v(n,r),v(r,t),v(n,e),v(n,s),v(s,a),v(n,l),v(n,f),v(f,d)},p:m,i:m,o:m,d:function(o){o&&p(n)}}}var Z=function(u){function c(o){var l;return n(this,c),l=r(this,t(c).call(this)),e(a(l),o,null,q,s,[]),l}return o(c,l),c}(),Q=[{name:"Grupa Pracuj",url:"https://grupapracuj.pl",type:"Gold",logo_url:"/sponsors/logo-grupa-pracuj.svg"},{name:"OLX",url:"https://www.olx.pl/",type:"Silver",logo_url:"/sponsors/logo-olx.svg"},{name:"JetBrains",url:"https://www.jetbrains.com/",type:"Silver",logo_url:"/sponsors/logo-jetbrains.svg",description:"\n        At JetBrains, we create tools to help developers be more productive.\n        WebStorm is our IDE for JavaScript developers. Support for React, Angular\n        and Vue, smart code completion and refactorings, a debugger, and lots\n        of integrated tools are just some of the reasons to try WebStorm.\n    "},{name:"DocPlanner",url:"https://www.docplanner.com/",type:"Silver",logo_url:"/sponsors/logo-docplanner.svg"},{name:"Batmaid",url:"https://batmaid.ch/",type:"Silver",logo_url:"/sponsors/logo-batmaid.png"},{name:"CKEditor5",url:"https://ckeditor.com",type:"Bronze",logo_url:"/sponsors/logo-cke5.svg"},{name:"Vermag",url:"https://www.vermeg.com/",type:"Bronze",logo_url:"/sponsors/logo-vermag.svg"},{name:"Visuality",url:"https://www.visuality.pl/",type:"Bronze",logo_url:"/sponsors/logo-visuality.svg"},{name:"Łukasiewicz Research Network",url:"https://ilot.edu.pl/",type:"Venue",logo_url:"/sponsors/logo-lukasiewicz-institute.svg"},{name:"Engineering Design Center",url:"https://edc.pl/",type:"Venue",logo_url:"/sponsors/logo-edc-dark.svg"}],X=[{name:"WarsawJS",url:"https://warsawjs.com/",logo_url:"/partners/logo-warsawjs.svg"},{name:"Deno Warsaw",url:"https://denowarsaw.com/",logo_url:"/partners/logo-deno-warsaw.png"},{name:"Bulldogjob",url:"https://bulldogjob.pl",logo_url:"/partners/logo-bulldogjob.svg"},{name:"Crossweb",url:"https://crossweb.pl",logo_url:"/partners/logo-crossweb.svg"},{name:"Meet.js",url:"http://meetjs.pl",logo_url:"/partners/logo-meetjs.svg"},{name:"Jobs For Geek",url:"https://jobsforgeek.com/",logo_url:"/partners/logo-jobs-for-geek.svg"},{name:"Coder's Lab",url:"https://coderslab.pl/",logo_url:"/partners/logo-coders-lab.svg"},{name:"Gamedev.js",url:"https://gamedevjs.pl/",logo_url:"/partners/logo-gamedevjs.svg"},{name:"ReactiveConf",url:"https://reactiveconf.com/",logo_url:"/partners/logo-reactive-conf.svg"},{name:"Frontem",url:"https://facebook.com/frontempl/",logo_url:"/partners/logo-frontem.svg"},{name:"Comandeer",url:"https://blog.comandeer.pl",logo_url:"/partners/logo-comandeer.jpg"},{name:"Hodash",url:"https://hodash.dev/",logo_url:"/partners/logo-hodash.svg"},{name:"Overment",url:"https://overment.com/",logo_url:"/partners/logo-overment.svg"},{name:"Type of Web",url:"https://typeofweb.com/",logo_url:"/partners/logo-typeofweb.svg"},{name:"Jakub Jurkian Blog",url:"https://jakubjurkian.pl/",logo_url:"/partners/logo-jakub-jurkian.svg"},{name:"Full Stack Geek",url:"https://fsgeek.pl/",logo_url:"/partners/logo-full-stack-geek.svg"},{name:"Piotr Nalepa Blog",url:"https://blog.piotrnalepa.pl/",logo_url:"/partners/logo-piotr-nalepa.svg"},{name:"Przeprogramowani",url:"https://przeprogramowani.pl/",logo_url:"/partners/logo-przeprogramowani.svg"},{name:"Sticker Mule",url:"http://stickermule.com/supports/confrontjs19-sponsorship",logo_url:"/partners/logo-sticker-mule.svg"},{name:"Bedę Programistką",url:"https://bedeprogramistka.pl/",logo_url:"/partners/logo-bede-programistka.svg"},{name:"Algo Smart",url:"http://algosmart.pl/",logo_url:"/partners/logo-algo-smart.svg"},{name:"Porozmawiajmy o IT",url:"https://porozmawiajmyoit.pl/",logo_url:"/partners/logo-poit.svg"},{name:"Full Stak",url:"https://fullstak.pl/",logo_url:"/partners/logo-full-stack.svg"},{name:"sarvendev",url:"https://sarvendev.com/",logo_url:"/partners/logo-sarvendev.svg"},{name:"DevSzczepaniak",url:"https://devszczepaniak.pl/",logo_url:"/partners/logo-devszczepaniak.svg"},{name:"Women in Tech Chat",url:"https://twitter.com/WomeninTechChat",logo_url:"/partners/logo-women-in-tech-chat.svg"},{name:"Warsaw TypeScript",url:"https://www.facebook.com/WarsawTypeScript/",logo_url:"/partners/logo-warsaw-typescript.svg"},{name:"Kamil Rogala",url:"https://kamilrogala.it/",logo_url:"/partners/logo-kamil-rogala.svg"},{name:"highlab",url:"http://highlab.pl/",logo_url:"/partners/logo-highlab.svg"},{name:"Paweł Ochota",url:"https://pawelochota.pl/",logo_url:"/partners/logo-pawel-ochota.svg"},{name:"mzalewski.pl",url:"https://facebook.com/mzalewski",logo_url:"/partners/logo-mzalewski.svg"},{name:"Ninja Speakers",url:"https://www.facebook.com/ninjaspeakers/",logo_url:"/partners/logo-ninja-speakers.svg"},{name:"Na Frontendzie",url:"https://nafrontendzie.pl/",logo_url:"/partners/logo-nafrontendzie.svg"},{name:"The Awwwesomes",url:"https://www.facebook.com/theawwwesomes",logo_url:"/partners/logo-the-awwwesomes.svg"},{name:"PyWaw",url:"http://pywaw.org/",logo_url:"/partners/logo-pywaw.svg"},{name:"Giganci Programowania",url:"https://www.giganciprogramowania.edu.pl/",logo_url:"/partners/logo-giganci-programowania.svg"},{name:"Girls.js",url:"https://girlsjs.pl/",logo_url:"/partners/logo-girlsjs.svg"},{name:"4programmers",url:"https://4programmers.net/",logo_url:"/partners/logo-4programmers.svg"},{name:"devsession",url:"https://devsession.pl/",logo_url:"/partners/logo-devsession.svg"},{name:"hello roman",url:"https://www.helloroman.com/",logo_url:"/partners/logo-hello-roman.svg"},{name:"DevMeetings",url:"http://devmeetings.org/",logo_url:"/partners/logo-devmeetings.svg"},{name:"DevPebe",url:"https://devpebe.com/",logo_url:"/partners/logo-devpebe.svg"},{name:"IT Craftship",url:"https://www.facebook.com/ionicpoland/",logo_url:"/partners/logo-it-craftship.svg"},{name:"Eduweb",url:"https://eduweb.pl",logo_url:"/partners/logo-eduweb.svg"},{name:"Inspire Labs",url:"https://inspirelabs.pl",logo_url:"/partners/logo-inspire-labs.svg"},{name:"webroad",url:"http://webroad.pl/",logo_url:"/partners/logo-webroad.svg"},{name:"Twórca stron",url:"https://tworcastron.pl/",logo_url:"/partners/logo-tworca-stron.svg"},{name:"Nowoczesny Frontend",url:"https://nowoczesny-frontend.pl/",logo_url:""},{name:"Just Join IT",url:"https://justjoin.it/",logo_url:"/partners/logo-justjoin-it.svg"},{name:"NetteCode",url:"https://www.nettecode.com/",logo_url:"/partners/logo-nettecode.svg"},{name:"DevKozak",url:"https://rwbit.pl/",logo_url:""},{name:"KernelGonnaPanic",url:"https://kernelgonnapanic.pl/",logo_url:"/partners/logo-kernelgonnapanic.png"},{name:"Przemuh",url:"https://przemuh.pl/",logo_url:""},{name:"Sowa Programuje",url:"http://sowaprogramuje.pl/",logo_url:""},{name:"Okruch kodu",url:"https://okruchkodu.pl/",logo_url:"/partners/logo-okruchkodu.svg"},{name:"DevEnv",url:"https://devenv.pl/",logo_url:"/partners/logo-devenv.svg"},{name:"techevents.online",url:"http://techevents.online",logo_url:"/partners/logo-techevents-online.svg"},{name:"HubHub",url:"https://www.hubhub.com/",logo_url:"/partners/logo-hubhub.svg"},{name:"Vue.js Poland",url:"https://www.facebook.com/groups/vuejspolska/",logo_url:"/partners/logo-vuejs-poland.svg"},{name:"Rails Girls Warsaw",url:"http://railsgirls.com/warsaw.html",logo_url:"/partners/logo-rails-girls-warsaw.svg"},{name:"Programmer Girl",url:"https://programmer-girl.com/",logo_url:"/partners/logo-programmer-girl.svg"},{name:"Geek Girls Carrots",url:"https://gocarrots.org/",logo_url:"/partners/logo-geek-girls-carrots.svg"}];function oo(o,n,r){var t=Object.create(o);return t.partner=n[r],t.i=r,t}function no(o,n,r){var t=Object.create(o);return t.sponsor=n[r],t.i=r,t}function ro(o,n,r){var t=Object.create(o);return t.sponsor=n[r],t.i=r,t}function to(o,n,r){var t=Object.create(o);return t.sponsor=n[r],t.i=r,t}function eo(o){var n,r;return{c:function(){n=u("p"),r=d("07 December 2019 in Warsaw, Poland"),this.h()},l:function(o){n=c(o,"P",{slot:!0},!1);var t=i(n);r=w(t,"07 December 2019 in Warsaw, Poland"),t.forEach(p),this.h()},h:function(){g(n,"slot","description")},m:function(o,t){h(o,n,t),v(n,r)},d:function(o){o&&p(n)}}}function so(o){var n,r;return{c:function(){n=u("h1"),r=d("ConFrontJS 2019 Sponsors"),this.h()},l:function(o){n=c(o,"H1",{slot:!0},!1);var t=i(n);r=w(t,"ConFrontJS 2019 Sponsors"),t.forEach(p),this.h()},h:function(){g(n,"slot","header")},m:function(o,t){h(o,n,t),v(n,r)},d:function(o){o&&p(n)}}}function ao(o){var n;return{c:function(){n=_()},l:function(o){n=w(o,"\n        ")},m:function(o,r){h(o,n,r)},p:m,d:function(o){o&&p(n)}}}function lo(o){var n,r;return{c:function(){n=u("h2"),r=d("Thanks to Our Sponsors"),this.h()},l:function(o){n=c(o,"H2",{slot:!0},!1);var t=i(n);r=w(t,"Thanks to Our Sponsors"),t.forEach(p),this.h()},h:function(){g(n,"slot","header")},m:function(o,t){h(o,n,t),v(n,r)},d:function(o){o&&p(n)}}}function uo(o){var n,r,t,e,s,a;return{c:function(){n=u("p"),r=d("These organizations have been instrumental in shaping ConFrontJS so far!"),t=u("br"),e=d("\n            Would you like to add your name to the list?"),s=u("br"),a=d("\n            Check out our sponsorship opportunities."),this.h()},l:function(o){n=c(o,"P",{slot:!0},!1);var l=i(n);r=w(l,"These organizations have been instrumental in shaping ConFrontJS so far!"),t=c(l,"BR",{},!1),i(t).forEach(p),e=w(l,"\n            Would you like to add your name to the list?"),s=c(l,"BR",{},!1),i(s).forEach(p),a=w(l,"\n            Check out our sponsorship opportunities."),l.forEach(p),this.h()},h:function(){g(n,"slot","body")},m:function(o,l){h(o,n,l),v(n,r),v(n,t),v(n,e),v(n,s),v(n,a)},d:function(o){o&&p(n)}}}function co(o){var n;return{c:function(){n=_()},l:function(o){n=w(o,"\n\n        ")},m:function(o,r){h(o,n,r)},p:m,d:function(o){o&&p(n)}}}function io(o){for(var n,r,t,e=o.GoldSponsors,s=[],a=0;a<e.length;a+=1)s[a]=po(to(o,e,a));var l=function(o){return y(s[o],1,1,function(){s[o]=null})};return{c:function(){n=u("div"),r=u("ul");for(var o=0;o<s.length;o+=1)s[o].c();this.h()},l:function(o){n=c(o,"DIV",{class:!0},!1);var t=i(n);r=c(t,"UL",{class:!0},!1);for(var e=i(r),a=0;a<s.length;a+=1)s[a].l(e);e.forEach(p),t.forEach(p),this.h()},h:function(){g(r,"class","list-unstyled svelte-nwtjxr"),g(n,"class","gold-sponsors sponsors-section svelte-nwtjxr")},m:function(o,e){h(o,n,e),v(n,r);for(var a=0;a<s.length;a+=1)s[a].m(r,null);t=!0},p:function(o,n){if(o.GoldSponsors){e=n.GoldSponsors;for(var t=0;t<e.length;t+=1){var a=to(n,e,t);s[t]?(s[t].p(o,a),S(s[t],1)):(s[t]=po(a),s[t].c(),S(s[t],1),s[t].m(r,null))}for(D(),t=e.length;t<s.length;t+=1)l(t);C()}},i:function(o){if(!t){for(var n=0;n<e.length;n+=1)S(s[n]);t=!0}},o:function(o){s=s.filter(Boolean);for(var n=0;n<s.length;n+=1)y(s[n]);t=!1},d:function(o){o&&p(n),V(s,o)}}}function po(o){var n,r,t,e,s,a,l=new F({props:{sponsor:o.sponsor}});return{c:function(){n=u("li"),l.$$.fragment.c(),r=_(),t=u("h2"),e=d("Gold Sponsor"),s=_(),this.h()},l:function(o){n=c(o,"LI",{class:!0},!1);var a=i(n);l.$$.fragment.l(a),r=w(a,"\n                                "),t=c(a,"H2",{class:!0},!1);var u=i(t);e=w(u,"Gold Sponsor"),u.forEach(p),s=w(a,"\n                            "),a.forEach(p),this.h()},h:function(){g(t,"class","sponsor-type svelte-nwtjxr"),g(n,"class","sponsor-card svelte-nwtjxr")},m:function(o,u){h(o,n,u),x(l,n,null),v(n,r),v(n,t),v(t,e),v(n,s),a=!0},p:function(o,n){var r={};o.GoldSponsors&&(r.sponsor=n.sponsor),l.$set(r)},i:function(o){a||(S(l.$$.fragment,o),a=!0)},o:function(o){y(l.$$.fragment,o),a=!1},d:function(o){o&&p(n),z(l)}}}function go(o){for(var n,r,t,e=o.RestSponsors,s=[],a=0;a<e.length;a+=1)s[a]=fo(ro(o,e,a));var l=function(o){return y(s[o],1,1,function(){s[o]=null})};return{c:function(){n=u("div"),r=u("ul");for(var o=0;o<s.length;o+=1)s[o].c();this.h()},l:function(o){n=c(o,"DIV",{class:!0},!1);var t=i(n);r=c(t,"UL",{class:!0},!1);for(var e=i(r),a=0;a<s.length;a+=1)s[a].l(e);e.forEach(p),t.forEach(p),this.h()},h:function(){g(r,"class","list-unstyled svelte-nwtjxr"),g(n,"class","rest-sponsors sponsors-section svelte-nwtjxr")},m:function(o,e){h(o,n,e),v(n,r);for(var a=0;a<s.length;a+=1)s[a].m(r,null);t=!0},p:function(o,n){if(o.RestSponsors){e=n.RestSponsors;for(var t=0;t<e.length;t+=1){var a=ro(n,e,t);s[t]?(s[t].p(o,a),S(s[t],1)):(s[t]=fo(a),s[t].c(),S(s[t],1),s[t].m(r,null))}for(D(),t=e.length;t<s.length;t+=1)l(t);C()}},i:function(o){if(!t){for(var n=0;n<e.length;n+=1)S(s[n]);t=!0}},o:function(o){s=s.filter(Boolean);for(var n=0;n<s.length;n+=1)y(s[n]);t=!1},d:function(o){o&&p(n),V(s,o)}}}function fo(o){var n,r,t,e,s,a,l,f=o.sponsor.type+"",m=new F({props:{sponsor:o.sponsor}});return{c:function(){n=u("li"),m.$$.fragment.c(),r=_(),t=u("h3"),e=d(f),s=d(" Sponsor"),a=_(),this.h()},l:function(o){n=c(o,"LI",{class:!0},!1);var l=i(n);m.$$.fragment.l(l),r=w(l,"\n                                "),t=c(l,"H3",{class:!0},!1);var u=i(t);e=w(u,f),s=w(u," Sponsor"),u.forEach(p),a=w(l,"\n                            "),l.forEach(p),this.h()},h:function(){g(t,"class","sponsor-type svelte-nwtjxr"),g(n,"class","sponsor-card svelte-nwtjxr")},m:function(o,u){h(o,n,u),x(m,n,null),v(n,r),v(n,t),v(t,e),v(t,s),v(n,a),l=!0},p:function(o,n){var r={};o.RestSponsors&&(r.sponsor=n.sponsor),m.$set(r)},i:function(o){l||(S(m.$$.fragment,o),l=!0)},o:function(o){y(m.$$.fragment,o),l=!1},d:function(o){o&&p(n),z(m)}}}function ho(o){for(var n,r,t,e,s,a,l=o.VenueSponsors,f=[],m=0;m<l.length;m+=1)f[m]=vo(no(o,l,m));var $=function(o){return y(f[o],1,1,function(){f[o]=null})};return{c:function(){n=u("div"),r=u("ul");for(var o=0;o<f.length;o+=1)f[o].c();t=_(),e=u("h2"),s=d("Venue Sponsor"),this.h()},l:function(o){n=c(o,"DIV",{class:!0},!1);var a=i(n);r=c(a,"UL",{class:!0},!1);for(var l=i(r),u=0;u<f.length;u+=1)f[u].l(l);l.forEach(p),t=w(a,"\n                    "),e=c(a,"H2",{class:!0},!1);var g=i(e);s=w(g,"Venue Sponsor"),g.forEach(p),a.forEach(p),this.h()},h:function(){g(r,"class","list-unstyled svelte-nwtjxr"),g(e,"class","sponsor-type svelte-nwtjxr"),g(n,"class","gold-sponsors sponsors-section svelte-nwtjxr")},m:function(o,l){h(o,n,l),v(n,r);for(var u=0;u<f.length;u+=1)f[u].m(r,null);v(n,t),v(n,e),v(e,s),a=!0},p:function(o,n){if(o.VenueSponsors){l=n.VenueSponsors;for(var t=0;t<l.length;t+=1){var e=no(n,l,t);f[t]?(f[t].p(o,e),S(f[t],1)):(f[t]=vo(e),f[t].c(),S(f[t],1),f[t].m(r,null))}for(D(),t=l.length;t<f.length;t+=1)$(t);C()}},i:function(o){if(!a){for(var n=0;n<l.length;n+=1)S(f[n]);a=!0}},o:function(o){f=f.filter(Boolean);for(var n=0;n<f.length;n+=1)y(f[n]);a=!1},d:function(o){o&&p(n),V(f,o)}}}function vo(o){var n,r,t,e=new F({props:{sponsor:o.sponsor}});return{c:function(){n=u("li"),e.$$.fragment.c(),r=_(),this.h()},l:function(o){n=c(o,"LI",{class:!0},!1);var t=i(n);e.$$.fragment.l(t),r=w(t,"\n                            "),t.forEach(p),this.h()},h:function(){g(n,"class","sponsor-card svelte-nwtjxr")},m:function(o,s){h(o,n,s),x(e,n,null),v(n,r),t=!0},p:function(o,n){var r={};o.VenueSponsors&&(r.sponsor=n.sponsor),e.$set(r)},i:function(o){t||(S(e.$$.fragment,o),t=!0)},o:function(o){y(e.$$.fragment,o),t=!1},d:function(o){o&&p(n),z(e)}}}function mo(o){for(var n,r,t,e,s,a,l=X,f=[],m=0;m<l.length;m+=1)f[m]=wo(oo(o,l,m));var $=function(o){return y(f[o],1,1,function(){f[o]=null})};return{c:function(){n=u("div"),r=u("h2"),t=d("Partners and Supporters"),e=_(),s=u("ul");for(var o=0;o<f.length;o+=1)f[o].c();this.h()},l:function(o){n=c(o,"DIV",{class:!0},!1);var a=i(n);r=c(a,"H2",{class:!0},!1);var l=i(r);t=w(l,"Partners and Supporters"),l.forEach(p),e=w(a,"\n\n                    "),s=c(a,"UL",{class:!0},!1);for(var u=i(s),g=0;g<f.length;g+=1)f[g].l(u);u.forEach(p),a.forEach(p),this.h()},h:function(){g(r,"class","mb-5"),g(s,"class","list-unstyled"),g(n,"class","partners-section svelte-nwtjxr")},m:function(o,l){h(o,n,l),v(n,r),v(r,t),v(n,e),v(n,s);for(var u=0;u<f.length;u+=1)f[u].m(s,null);a=!0},p:function(o,n){if(o.Partners){l=X;for(var r=0;r<l.length;r+=1){var t=oo(n,l,r);f[r]?(f[r].p(o,t),S(f[r],1)):(f[r]=wo(t),f[r].c(),S(f[r],1),f[r].m(s,null))}for(D(),r=l.length;r<f.length;r+=1)$(r);C()}},i:function(o){if(!a){for(var n=0;n<l.length;n+=1)S(f[n]);a=!0}},o:function(o){f=f.filter(Boolean);for(var n=0;n<f.length;n+=1)y(f[n]);a=!1},d:function(o){o&&p(n),V(f,o)}}}function wo(o){var n,r,t,e=new L({props:{partner:o.partner}});return{c:function(){n=u("li"),e.$$.fragment.c(),r=_(),this.h()},l:function(o){n=c(o,"LI",{class:!0},!1);var t=i(n);e.$$.fragment.l(t),r=w(t,"\n                            "),t.forEach(p),this.h()},h:function(){g(n,"class","partner-card svelte-nwtjxr")},m:function(o,s){h(o,n,s),x(e,n,null),v(n,r),t=!0},p:function(o,n){var r={};o.Partners&&(r.partner=n.partner),e.$set(r)},i:function(o){t||(S(e.$$.fragment,o),t=!0)},o:function(o){y(e.$$.fragment,o),t=!1},d:function(o){o&&p(n),z(e)}}}function $o(o){var n,r,t,e,s,a,l,f,m,$,b,k,j,E,V,B,I,W,F,T,J,R,A=new P({props:{image:"/promo/IMG_2978.png",$$slots:{default:[ao],header:[so],description:[eo]},$$scope:{ctx:o}}}),L=new Z({}),H=new Y({props:{$$slots:{default:[co],body:[uo],header:[lo]},$$scope:{ctx:o}}}),M=new G({}),O=o.GoldSponsors.length>0&&io(o),N=o.RestSponsors.length>0&&go(o),K=o.VenueSponsors.length>0&&ho(o),U=X.length>0&&mo(o);return{c:function(){n=_(),r=u("div"),A.$$.fragment.c(),t=_(),L.$$.fragment.c(),e=_(),H.$$.fragment.c(),s=_(),M.$$.fragment.c(),a=_(),l=u("div"),f=u("div"),O&&O.c(),m=_(),N&&N.c(),$=_(),K&&K.c(),b=_(),k=u("div"),j=u("h2"),E=d("What About You?"),V=_(),B=u("p"),I=d("Sponsoring ConFrontJS is a great way to contribute to the healthy growth\n                    of TypeScript’s open source community. Please join us in creating\n                    an amazing experience for each and every attendee."),W=_(),F=u("a"),T=d("Download offer"),J=_(),U&&U.c(),this.h()},l:function(o){n=w(o,"\n\n"),r=c(o,"DIV",{class:!0},!1);var u=i(r);A.$$.fragment.l(u),t=w(u,"\n\n    "),L.$$.fragment.l(u),e=w(u,"\n\n    "),H.$$.fragment.l(u),s=w(u,"\n\n    "),M.$$.fragment.l(u),a=w(u,"\n\n    "),l=c(u,"DIV",{class:!0},!1);var g=i(l);f=c(g,"DIV",{class:!0},!1);var h=i(f);O&&O.l(h),m=w(h,"\n\n            "),N&&N.l(h),$=w(h,"\n\n            "),K&&K.l(h),b=w(h,"\n\n            "),k=c(h,"DIV",{class:!0},!1);var v=i(k);j=c(v,"H2",{},!1);var d=i(j);E=w(d,"What About You?"),d.forEach(p),V=w(v,"\n\n                "),B=c(v,"P",{},!1);var _=i(B);I=w(_,"Sponsoring ConFrontJS is a great way to contribute to the healthy growth\n                    of TypeScript’s open source community. Please join us in creating\n                    an amazing experience for each and every attendee."),_.forEach(p),W=w(v,"\n\n                "),F=c(v,"A",{class:!0,"data-content":!0,href:!0},!1);var S=i(F);T=w(S,"Download offer"),S.forEach(p),v.forEach(p),J=w(h,"\n\n            "),U&&U.l(h),h.forEach(p),g.forEach(p),u.forEach(p),this.h()},h:function(){document.title="Sponsors • ConFrontJS 2019 • Front-end C onference",g(F,"class","button-mix svelte-nwtjxr"),g(F,"data-content","Download offer"),g(F,"href","https://drive.google.com/open?id=1ZB27yhtGoWkUBQopM6eSkbuvYIi5RaKW"),g(k,"class","offer svelte-nwtjxr"),g(f,"class","sponsors-container svelte-nwtjxr"),g(l,"class","content"),g(r,"class","sponsors-page")},m:function(o,u){h(o,n,u),h(o,r,u),x(A,r,null),v(r,t),x(L,r,null),v(r,e),x(H,r,null),v(r,s),x(M,r,null),v(r,a),v(r,l),v(l,f),O&&O.m(f,null),v(f,m),N&&N.m(f,null),v(f,$),K&&K.m(f,null),v(f,b),v(f,k),v(k,j),v(j,E),v(k,V),v(k,B),v(B,I),v(k,W),v(k,F),v(F,T),v(f,J),U&&U.m(f,null),R=!0},p:function(o,n){var r={};o.$$scope&&(r.$$scope={changed:o,ctx:n}),A.$set(r);var t={};o.$$scope&&(t.$$scope={changed:o,ctx:n}),H.$set(t),n.GoldSponsors.length>0?O?(O.p(o,n),S(O,1)):((O=io(n)).c(),S(O,1),O.m(f,m)):O&&(D(),y(O,1,1,function(){O=null}),C()),n.RestSponsors.length>0?N?(N.p(o,n),S(N,1)):((N=go(n)).c(),S(N,1),N.m(f,$)):N&&(D(),y(N,1,1,function(){N=null}),C()),n.VenueSponsors.length>0?K?(K.p(o,n),S(K,1)):((K=ho(n)).c(),S(K,1),K.m(f,b)):K&&(D(),y(K,1,1,function(){K=null}),C()),X.length>0?U?(U.p(o,n),S(U,1)):((U=mo(n)).c(),S(U,1),U.m(f,null)):U&&(D(),y(U,1,1,function(){U=null}),C())},i:function(o){R||(S(A.$$.fragment,o),S(L.$$.fragment,o),S(H.$$.fragment,o),S(M.$$.fragment,o),S(O),S(N),S(K),S(U),R=!0)},o:function(o){y(A.$$.fragment,o),y(L.$$.fragment,o),y(H.$$.fragment,o),y(M.$$.fragment,o),y(O),y(N),y(K),y(U),R=!1},d:function(o){o&&(p(n),p(r)),z(A),z(L),z(H),z(M),O&&O.d(),N&&N.d(),K&&K.d(),U&&U.d()}}}function bo(o){return Q.filter(function(n){return n.type===o})}function _o(o,n,r){var t=bo("Gold"),e=bo("Venue"),s=Q.filter(function(o){return![].concat(B(t),B(e)).includes(o)}),a=n.segment,l=void 0===a?"":a;return o.$set=function(o){"segment"in o&&r("segment",l=o.segment)},{GoldSponsors:t,VenueSponsors:e,RestSponsors:s,segment:l}}var ko=function(u){function c(o){var l;return n(this,c),l=r(this,t(c).call(this)),e(a(l),o,_o,$o,s,["segment"]),l}return o(c,l),c}();export default ko;
