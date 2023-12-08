"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{4377:function(n,t,r){r.d(t,{Eb:function(){return x},Hg:function(){return s},Hu:function(){return d},V0:function(){return p},mU:function(){return f}});var e=r(5861),a=r(7757),c=r.n(a),u=r(5294),o="https://api.themoviedb.org/3/",i="38184382f7c1e49ee2a98f8aa87aa3f4",s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/all/day?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return B}});var e,a,c,u=r(5861),o=r(9439),i=r(7757),s=r.n(i),p=r(7689),f=r(2791),x=r(168),d=r(5867),g=d.ZP.ul(e||(e=(0,x.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=d.ZP.li(a||(a=(0,x.Z)(["\n  width: auto;\n  height: auto;\n  list-style-type: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n"]))),l=d.ZP.img(c||(c=(0,x.Z)(["\n  max-width: 220px;\n  height: 305px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),D=r(6837),m=r(6062),v=r(4377),w=r(184),b=r(2791).useEffect,B=function(){var n=(0,f.useState)(null),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,f.useState)(!1),c=(0,o.Z)(a,2),i=c[0],x=c[1],d=(0,f.useState)(null),B=(0,o.Z)(d,2),Z=B[0],y=B[1],k=(0,p.UO)().movieId;return b((function(){if(k){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,(0,v.Eb)(k);case 4:t=n.sent,e(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),y(n.t0.message);case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[k]),(0,w.jsxs)(w.Fragment,{children:[Z&&(0,w.jsx)("div",{children:"Try to reload the page"}),i&&(0,w.jsx)(D.Z,{}),(0,w.jsx)(g,{children:r&&r.cast.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,w.jsxs)(h,{children:[(0,w.jsx)(l,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://media.istockphoto.com/id/1322220448/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7.jpg?s=612x612&w=0&k=20&c=QIyjOS5NLKacsYooP28QtmfgmM-RWP1o9wqIMfPS9og=",alt:"".concat(e)}),(0,w.jsx)("h4",{children:e}),(0,w.jsxs)("p",{children:["Character: ",a]})]},t)}))}),(!r||r.cast.length<=0)&&(0,w.jsx)(m.Z,{})]})}},6062:function(n,t,r){r.d(t,{Z:function(){return o}});var e,a=r(168),c=r(5867).ZP.p(e||(e=(0,a.Z)(["\n  color: #3f51b5;\n  padding: 5px 15px;\n  border: none;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.8),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.5), 0px 2px 1px -1px rgba(0, 0, 0, 0.8);\n  border-radius: 2px;\n  font-weight: 500;\n"]))),u=r(184),o=function(){return(0,u.jsxs)(c,{children:[" ","Sorry, nothing found for your request \ud83d\udc80\ud83d\udc40\ud83d\udc7b"]})}}}]);
//# sourceMappingURL=387.68c07a8e.chunk.js.map