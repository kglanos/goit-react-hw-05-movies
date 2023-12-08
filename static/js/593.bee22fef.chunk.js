"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[593],{377:function(n,e,t){t.d(e,{Eb:function(){return f},Hg:function(){return s},Hu:function(){return l},V0:function(){return p},mU:function(){return x}});var r=t(861),a=t(757),u=t.n(a),c=t(294),i="https://api.themoviedb.org/3/",o="38184382f7c1e49ee2a98f8aa87aa3f4",s=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"trending/all/day?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},174:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,u,c=t(168),i=t(867),o=t(87),s=i.ZP.div(r||(r=(0,c.Z)(["\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    line-height: 0.8;\n    "]))),p=i.ZP.ul(a||(a=(0,c.Z)([""]))),x=(0,i.ZP)(o.rU)(u||(u=(0,c.Z)(["\n    font-size: 18px;\n    font-weight: 600;\n    color: grey;\n\n    :hover {\n        color: tomato;\n    }\n    "]))),f=t(689),l=t(184),d=function(n){var e=n.movies,t=(0,f.TH)();return(0,l.jsx)(s,{children:(0,l.jsx)("ul",{children:e.map((function(n){var e=n.id,r=n.title;n.poster_path;return(0,l.jsx)(p,{children:(0,l.jsx)(x,{to:"/movies/".concat(e),state:{from:t},children:(0,l.jsx)("p",{children:r})})},e)}))})})}},593:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,u,c=t(861),i=t(439),o=t(757),s=t.n(o),p=t(791),x=t(87),f=t(837),l=t(168),d=t(867),v=d.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  gap: 10px;\n"]))),h=d.ZP.input(a||(a=(0,l.Z)(["\n  display: inline-block;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border: none;\n  font: inherit;\n  padding: 6px 12px;\n"]))),g=d.ZP.button(u||(u=(0,l.Z)(["\n  padding: 4px 10px;\n  cursor: pointer;\n  outline: none;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border: none;\n"]))),m=t(184),Z=function(n){var e=n.onformSubmit;return(0,m.jsxs)(v,{onSubmit:e,children:[(0,m.jsx)(h,{name:"searchKey",type:"text",required:!0,placeholder:"Enter movies"}),(0,m.jsx)(g,{type:"submit",children:(0,m.jsx)("span",{})})]})},b=t(174),y=t(377),w=function(){var n=(0,p.useState)(null),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(!1),u=(0,i.Z)(a,2),o=u[0],l=u[1],d=(0,p.useState)(null),v=(0,i.Z)(d,2),h=v[0],g=v[1],w=(0,x.lr)(),k=(0,i.Z)(w,2),j=k[0],_=k[1],S=j.get("query");return(0,p.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,(0,y.V0)(S);case 4:e=n.sent,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),g(n.t0.message);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();S&&n()}),[S]),(0,m.jsxs)("div",{children:[h&&(0,m.jsx)("div",{children:"Try to reload the page"}),o&&(0,m.jsx)(f.Z,{}),(0,m.jsx)(Z,{onformSubmit:function(n){n.preventDefault();var e=n.currentTarget.elements.searchKey.value;_({query:e}),n.target.reset()}}),null!==t&&(0,m.jsx)(b.Z,{movies:t})]})}}}]);
//# sourceMappingURL=593.bee22fef.chunk.js.map