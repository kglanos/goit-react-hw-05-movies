"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[981],{3025:function(n,t,r){r.d(t,{Eb:function(){return p},Hg:function(){return o},Hu:function(){return f},V0:function(){return s},mU:function(){return c}});var e=r(5861),a=r(7757),i=r.n(a),u=r(5294);u.Z.defaults.params={api_key:"38184382f7c1e49ee2a98f8aa87aa3f4",language:"en-US"},u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3174:function(n,t,r){r.d(t,{Z:function(){return Z}});var e,a,i,u,o,s=r(9439),c=r(2791),p=r(168),f=r(5867),d=r(1087),l=f.ZP.div(e||(e=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=f.ZP.ul(a||(a=(0,p.Z)(["\n  width: 200px;\n  height: auto;\n  list-style-type: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n"]))),x=(0,f.ZP)(d.rU)(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  text-decoration: none;\n  color: grey;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 15px; /* Adjust the margin as needed */\n\n  :hover {\n    color: tomato;\n  }\n"]))),g=f.ZP.img(u||(u=(0,p.Z)(["\nmax-width: 220px;\nheight: 305px;\nbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),h=(f.ZP.p(o||(o=(0,p.Z)(["\n  margin: 0;\n"]))),r(7689)),v=r(184),Z=function(n){var t=n.movies,r=(0,h.TH)(),e=(0,c.useState)([]),a=(0,s.Z)(e,2),i=a[0],u=a[1],o=(0,c.useState)(null),p=(0,s.Z)(o,2),f=p[0],d=p[1];return(0,c.useEffect)((function(){try{var n=t.map((function(n){var t=n.id,r=n.title,e=n.name,a=n.poster_path;return{id:t,title:r||e,poster:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1200px-Question_mark.svg.png"}}));u(n)}catch(f){d(f)}}),[t]),f?(0,v.jsxs)("div",{children:["Error: ",f.message]}):(0,v.jsx)(l,{children:(0,v.jsx)(v.Fragment,{children:i.map((function(n){var t=n.id,e=n.title,a=n.poster;return(0,v.jsx)(m,{children:(0,v.jsxs)(x,{to:"/movies/".concat(t),state:{from:r},children:[(0,v.jsx)(g,{src:a,alt:"Poster of ".concat(e)}),(0,v.jsx)("p",{children:e})]})},t)}))})})}},1981:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,a=r(3433),i=r(5861),u=r(9439),o=r(7757),s=r.n(o),c=r(3025),p=r(6837),f=r(168),d=r(5867).ZP.h1(e||(e=(0,f.Z)(["\n    color: white;\n    margin: 10px;\n"]))),l=r(184),m=function(n){var t=n.title;return(0,l.jsx)(d,{children:t})},x=r(3174),g=r(2791),h=g.useEffect,v=g.useState,Z=function(){var n=v(!1),t=(0,u.Z)(n,2),r=t[0],e=t[1],o=v([]),f=(0,u.Z)(o,2),d=f[0],g=f[1],Z=v(null),w=(0,u.Z)(Z,2),b=w[0],k=w[1];return h((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!0),n.prev=1,n.next=4,(0,c.Hg)();case 4:t=n.sent,g((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(t.results))})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),k(n.t0.massage);case 11:return n.prev=11,e(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)("div",{children:[null!==b&&(0,l.jsxs)("p",{children:[" Ooops...Error massage: ",b]}),r&&(0,l.jsx)(p.Z,{}),(0,l.jsx)(m,{title:"Trending today"}),(0,l.jsx)(x.Z,{movies:d})]})}}}]);
//# sourceMappingURL=981.c9bac101.chunk.js.map