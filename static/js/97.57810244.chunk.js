"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[97],{377:function(n,e,t){t.d(e,{Eb:function(){return d},Hg:function(){return u},Hu:function(){return x},V0:function(){return p},mU:function(){return l}});var r=t(861),a=t(757),c=t.n(a),i=t(294),o="https://api.themoviedb.org/3",s="38184382f7c1e49ee2a98f8aa87aa3f4",u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/all/day?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},97:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,c,i,o,s=t(861),u=t(439),p=t(757),l=t.n(p),d=t(791),x=t(689),f=t(168),h=t(867),v=t(87),g=(0,h.ZP)(v.rU)(r||(r=(0,f.Z)(["\n    text-decoration: none;\n    :hover {\n        color: tomato;\n    }\n    "]))),m=h.ZP.div(a||(a=(0,f.Z)(["\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    padding: 6px 8px;\n    margin-bottom: 15px;\n    color: black;\n    background-color: white;\n    font-weight: 600;\n    text-transform: uppercase;\n\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    border-radius: 2px;\n    border: none;\n    "]))),b=t(184),j=function(n){var e=n.to;n.children;return(0,b.jsx)(m,{children:(0,b.jsx)(g,{to:e})})},w=t(837),Z=t(377),k=h.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 40px;\n  list-style: none;\n  padding-bottom: 15px;\n  border-bottom: 1px solid black;\n  color: black;\n"]))),y=h.ZP.ul(i||(i=(0,f.Z)(["\n  display: flex;\n  gap: 15px;\n  justify-content: start;\n  padding: 0;\n  list-style: none;\n"]))),_=(0,h.ZP)(v.rU)(o||(o=(0,f.Z)(["\n  text-decoration: none;\n\n  padding: 5px 20px;\n  border: none;\n  background-color: #3f51b5;\n  color: white;\n  font-weight: 600;\n  border-radius: 4px;\n"]))),S=function(n){var e=n.movies;return(0,b.jsxs)(k,{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"".concat(e.original_title," poster"),width:"250"}),(0,b.jsx)("h3",{children:" See more..."}),(0,b.jsxs)(y,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(_,{to:"cast",children:"cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(_,{to:"reviews",children:"reviews"})})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:e.title}),(0,b.jsxs)("p",{children:["(",e.original_title,")"]}),(0,b.jsx)("h2",{children:"Overviev"}),(0,b.jsx)("p",{children:e.overview}),(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)("ul",{children:e.genres&&e.genres.map((function(n){return(0,b.jsx)("li",{children:n.name},n.id)}))})]})]})},U=function(){var n,e,t=(0,d.useState)({}),r=(0,u.Z)(t,2),a=r[0],c=r[1],i=(0,d.useState)(!1),o=(0,u.Z)(i,2),p=o[0],f=o[1],h=(0,d.useState)(null),v=(0,u.Z)(h,2),g=v[0],m=v[1],k=(0,x.UO)().movieId,y=(0,x.TH)(),_=null!==(n=(0,d.useRef)(null===(e=y.state)||void 0===e?void 0:e.from))&&void 0!==n?n:"/movies";return(0,d.useEffect)((function(){if(k){var n=function(){var n=(0,s.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.prev=1,n.next=4,(0,Z.mU)(k);case 4:e=n.sent,c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),m(n.t0.message);case 11:return n.prev=11,f(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[k]),(0,b.jsxs)("div",{children:[g&&(0,b.jsx)("div",{children:"Try to reload the page"}),p&&(0,b.jsx)(w.Z,{}),(0,b.jsx)(j,{to:_.current,children:" Go back "}),(0,b.jsx)(S,{movies:a}),(0,b.jsx)(d.Suspense,{fallback:(0,b.jsx)(w.Z,{}),children:(0,b.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=97.57810244.chunk.js.map