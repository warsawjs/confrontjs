!function(){"use strict";const s=["client/talks.e1cd538f.js","client/VenueName.5252c177.js","client/WaveType4.f7b97a70.js","client/code-of-conduct.bab20c08.js","client/index.558b5a8b.js","client/CodeOfConduct.dae8d404.js","client/Banner.9291821a.js","client/SocialMediaIcons.90416c90.js","client/color-codes.54a630f7.js","client/Why.0d1720f9.js","client/workshop.67529a55.js","client/index.8db51be5.js","client/contact.de38e9c0.js","client/agenda.30168e4d.js","client/speakers.8eff614b.js","client/privacy-policy.596d0394.js","client/sponsors.efecff7a.js","client/venue.d45e1987.js","client/client.a8ef2b15.js"].concat(["service-worker-index.html",".DS_Store","attractions/Muzeum_Narodowe_w_Warszawie.png","attractions/cialis-3509923_640.png","attractions/pkin.png","attractions/warsaw-poland-tech-center.png","favicon.png","global.css","hosts/katarzyna-grabowska.jpg","hosts/piotr-kowalski.jpg","hosts/piotr-zientara.jpg","hotels/Air-Hotel.png","hotels/BB-Hotel-Warszawa-Okecie.png","hotels/Golden-Tulip.png","hotels/Hotel-Gordon.png","hotels/Hotel-Witkowski.png","hotels/Renaissance-Warsaw-Airport-Hotel.png","logo-192.png","logo-512.png","manifest.json","opg.jpg","partners/logo-4programmers.svg","partners/logo-algo-smart.svg","partners/logo-bede-programistka.svg","partners/logo-bulldogjob.svg","partners/logo-coders-lab.svg","partners/logo-comandeer.jpg","partners/logo-crossweb.svg","partners/logo-deno-warsaw.png","partners/logo-devenv.svg","partners/logo-devmeetings.svg","partners/logo-devpebe.svg","partners/logo-devsession.svg","partners/logo-devszczepaniak.svg","partners/logo-eduweb.svg","partners/logo-frontem.svg","partners/logo-full-stack-geek.svg","partners/logo-full-stack.svg","partners/logo-gamedevjs.svg","partners/logo-geek-girls-carrots.svg","partners/logo-giganci-programowania.svg","partners/logo-girlsjs.svg","partners/logo-hello-roman.svg","partners/logo-highlab.svg","partners/logo-hodash.svg","partners/logo-hubhub.svg","partners/logo-inspire-labs.svg","partners/logo-it-craftship.svg","partners/logo-jakub-jurkian.svg","partners/logo-jobs-for-geek.svg","partners/logo-justjoin-it.svg","partners/logo-kamil-rogala.svg","partners/logo-kernelgonnapanic.png","partners/logo-meetjs.svg","partners/logo-mzalewski.svg","partners/logo-nafrontendzie.svg","partners/logo-nettecode.svg","partners/logo-ninja-speakers.svg","partners/logo-okruchkodu.svg","partners/logo-overment.svg","partners/logo-pawel-ochota.svg","partners/logo-piotr-nalepa.svg","partners/logo-poit.svg","partners/logo-programmer-girl.svg","partners/logo-przeprogramowani.svg","partners/logo-pywaw.svg","partners/logo-rails-girls-warsaw.svg","partners/logo-reactive-conf.svg","partners/logo-sarvendev.svg","partners/logo-sticker-mule.svg","partners/logo-techevents-online.svg","partners/logo-the-awwwesomes.svg","partners/logo-tworca-stron.svg","partners/logo-typeofweb.svg","partners/logo-vuejs-poland.svg","partners/logo-warsaw-typescript.svg","partners/logo-warsawjs.svg","partners/logo-webmastah.svg","partners/logo-webroad.svg","partners/logo-women-in-tech-chat.svg","photos/67621942_377105956323366_7508112822119694336_n.png","photos/70399448_400618417305453_8600304597262663680_o.png","photos/72275771_416666755700619_2198959204704714752_o.png","photos/73422572_416666112367350_7145624763522613248_o.png","photos/IMG_2585.png","photos/IMG_2853.png","photos/IMG_2984.png","promo/72275771_416666755700619_2198959204704714752_o.png","promo/IMG_2543.png","promo/IMG_2723.png","promo/IMG_2978.png","promo/IMG_2984.png","promo/confrontjsAviTejas.png","robots.txt","sitemap.xml","speakers/andrzej-mazur.jpg","speakers/avital-tzubeli.jpg","speakers/barry-solone.jpg","speakers/chris-heilmann.jpg","speakers/elad-shechter.jpeg","speakers/eleftheria-batsou.jpg","speakers/jan-salwowski.jpg","speakers/jerbi-saif.jpg","speakers/nadia-ginalska.jpg","speakers/piotr-tomiak.jpeg","speakers/przemyslaw-zych.jpg","speakers/roy-derks.jpg","speakers/sarath-damaraju.jpg","speakers/tejas-kumar.jpg","speakers/tetiana-platonova.jpg","speakers/tomasz-lakomy.jpg","speakers/tymon-terlikiewicz.jpg","speakers/wojciech-jureczka.jpg","speakers/yonatan-doron.jpg","speakers/yonatan-kra.jpg","sponsors/logo-batmaid.png","sponsors/logo-cke5.svg","sponsors/logo-docplanner.svg","sponsors/logo-edc-dark.svg","sponsors/logo-grupa-pracuj.svg","sponsors/logo-jetbrains.svg","sponsors/logo-lukasiewicz-institute.svg","sponsors/logo-olx.svg","sponsors/logo-vermag.svg","sponsors/logo-visuality.svg","symbols/air-plane.svg","symbols/haze.svg","symbols/suitcase.svg","trainers/yonatan-kra.jpg","tweets/dominik-lubanski.png","tweets/ran-yitzhaki-2.png","tweets/ran-yitzhaki.png","tweets/tejas-kumar-2.png","tweets/tejas-kumar-3.png","tweets/tejas-kumar.png","vendors/bootstrap-grid.css","venue/edc-map.svg","venue/venue-map.png"]),e=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1627506472888").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1627506472888"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const o=new URL(s.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&e.has(o.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1627506472888").then(async e=>{try{const o=await fetch(s.request);return e.put(s.request,o.clone()),o}catch(o){const a=await e.match(s.request);if(a)return a;throw o}}))))})}();
