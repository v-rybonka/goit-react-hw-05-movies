"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{902:function(n,t,e){e.d(t,{Ai:function(){return o},Hx:function(){return h},SU:function(){return s},Y5:function(){return p},uV:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="3e23bc4805601b1fb14b53b3b99dcd05",s=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a,u=e(885),c=e(902),i=e(791),s=e(168),o=e(444),p=o.ZP.h3(r||(r=(0,s.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  margin-left: 10px;\n"]))),f=o.ZP.p(a||(a=(0,s.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  text-align: justify;\n"]))),h=e(689),v=e(184),d=function(){var n=(0,h.UO)().movieId,t=(0,i.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,i.useEffect)((function(){(0,c.Hx)(n).then(a)}),[n]),(0,v.jsx)(v.Fragment,{children:r.length>0?(0,v.jsx)("ul",{children:r.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,v.jsx)("li",{children:(0,v.jsxs)("div",{children:[(0,v.jsxs)(p,{children:["Author: ",t]}),(0,v.jsx)(f,{children:e})]})},r)}))}):(0,v.jsx)("p",{children:"There is no reviews yet!"})})}}}]);
//# sourceMappingURL=387.eda826d5.chunk.js.map