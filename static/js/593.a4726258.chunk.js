"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[593],{4377:function(n,t,e){e.d(t,{Eb:function(){return d},Hg:function(){return s},Hu:function(){return l},V0:function(){return p},mU:function(){return x}});var r=e(5861),a=e(7757),i=e.n(a),o=e(5294),u="https://api.themoviedb.org/3/",c="38184382f7c1e49ee2a98f8aa87aa3f4",s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"trending/all/day?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3174:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a,i,o,u,c=e(9439),s=e(2791),p=e(168),x=e(5867),d=e(1087),l=x.ZP.div(r||(r=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=x.ZP.ul(a||(a=(0,p.Z)(["\n  width: 200px;\n  height: auto;\n  list-style-type: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n"]))),g=(0,x.ZP)(d.rU)(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  text-decoration: none;\n  color: grey;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 15px; /* Adjust the margin as needed */\n\n  :hover {\n    color: tomato;\n  }\n"]))),m=x.ZP.img(o||(o=(0,p.Z)(["\nmax-width: 220px;\nheight: 305px;\nbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),h=(x.ZP.p(u||(u=(0,p.Z)(["\n  margin: 0;\n"]))),e(7689)),v=e(184),b=function(n){var t=n.movies,e=(0,h.TH)(),r=(0,s.useState)([]),a=(0,c.Z)(r,2),i=a[0],o=a[1],u=(0,s.useState)(null),p=(0,c.Z)(u,2),x=p[0],d=p[1];return(0,s.useEffect)((function(){try{var n=t.map((function(n){var t=n.id,e=n.title,r=n.name,a=n.poster_path;return{id:t,title:e||r,poster:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1200px-Question_mark.svg.png"}}));o(n)}catch(x){d(x)}}),[t]),x?(0,v.jsxs)("div",{children:["Error: ",x.message]}):(0,v.jsx)(l,{children:(0,v.jsx)(v.Fragment,{children:i.map((function(n){var t=n.id,r=n.title,a=n.poster;return(0,v.jsx)(f,{children:(0,v.jsxs)(g,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(m,{src:a,alt:"Poster of ".concat(r)}),(0,v.jsx)("p",{children:r})]})},t)}))})})}},8593:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,i,o=e(5861),u=e(9439),c=e(7757),s=e.n(c),p=e(2791),x=e(1087),d=e(6837),l=e(1578),f=e(168),g=e(5867),m=g.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  gap: 10px;\n  margin-bottom: 10px;\n"]))),h=g.ZP.input(a||(a=(0,f.Z)(["\n  display: inline-block;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border: none;\n  font: inherit;\n  padding: 6px 12px;\n"]))),v=g.ZP.button(i||(i=(0,f.Z)(["\n  padding: 4px 10px;\n  cursor: pointer;\n  outline: none;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border: none;\n"]))),b=e(184),Z=function(n){var t=n.onFormSubmit;return(0,b.jsxs)(m,{onSubmit:t,children:[(0,b.jsx)(h,{name:"searchKey",type:"text",required:!0,placeholder:"Enter movies"}),(0,b.jsx)(v,{type:"submit",children:(0,b.jsx)("span",{children:(0,b.jsx)(l.adB,{size:"20",color:"black"})})})]})},w=e(3174),y=e(4377),k=function(){var n=(0,p.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)(!1),i=(0,u.Z)(a,2),c=i[0],l=i[1],f=(0,p.useState)(null),g=(0,u.Z)(f,2),m=g[0],h=g[1],v=(0,x.lr)(),k=(0,u.Z)(v,2),j=k[0],_=k[1],S=j.get("query");return(0,p.useEffect)((function(){if(S){var n=function(){var n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,(0,y.V0)(S);case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),h(n.t0.message);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[S]),(0,b.jsxs)("div",{children:[m&&(0,b.jsx)("div",{children:"Try to reload the page"}),c&&(0,b.jsx)(d.Z,{}),(0,b.jsx)(Z,{onFormSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.searchKey.value;_({query:t}),n.target.reset()}}),null!==e&&(0,b.jsx)(w.Z,{movies:e})]})}}}]);
//# sourceMappingURL=593.a4726258.chunk.js.map