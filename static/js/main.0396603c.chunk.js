(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),o=a(2),l=a.n(o),m=a(1),u=a(5);a(12);var i=function(e){var t=e.user,a=t.name,n=t.email;return c.a.createElement("div",null,c.a.createElement("h3",{className:"user-name"},a),c.a.createElement("p",null,n))},p=function(e){var t=e.comment,a=t.name,n=t.body,r=t.email;return c.a.createElement("div",{className:"comment"},c.a.createElement("h3",{className:"comment-name"},a),c.a.createElement("p",{className:"comment-body"},n),c.a.createElement("p",{className:"comment-email"},c.a.createElement("span",null,"By "),r))},d=function(e){var t=e.comments;return c.a.createElement("div",null,t.map(function(e){return c.a.createElement(p,{comment:e,key:e.id})}))},f=function(e){var t=e.post,a=t.title,n=t.body,r=t.user,s=t.commentList;return c.a.createElement("div",{className:"flip-container",onTouchStart:"this.classList.toggle('hover');"},c.a.createElement("div",{className:"flipper"},c.a.createElement("div",{className:"front"},c.a.createElement("h2",{className:"front-heading"},a),c.a.createElement("p",{className:"front-body"},'"'.concat(n,'"')),c.a.createElement(i,{user:r})),c.a.createElement("div",{className:"back"},c.a.createElement("p",{className:"back-heading"},"Comments:"),c.a.createElement(d,{comments:s}))))},E=function(e){var t,a=e.posts,r=Object(n.useState)(""),s=Object(m.a)(r,2),o=s[0],l=s[1],u=o?(t=o,a.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.body.toLowerCase().includes(t.toLowerCase())})):a;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{onChange:function(e){var t=e.target.value;l(t)},className:"search",type:"text",placeholder:"Search"}),u.length<1?c.a.createElement("div",{className:"result"},"No results..."):u.map(function(e){return c.a.createElement(f,{post:e,key:e.id})}))},h=[],b=function(e,t,a){return e.map(function(e){var n=t.find(function(t){return t.id===e.userId}),c=a.filter(function(t){return t.postId===e.id});return Object(u.a)({},e,{user:n,commentList:c})})},v=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),u=o[0],i=o[1],p=Object(n.useState)(!1),d=Object(m.a)(p,2),f=d[0],v=d[1],N=function(){var e,t,a,n,c;return l.a.async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,v(!1),i(!0),s.next=5,l.a.awrap(Promise.all([fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}),fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.json()})]));case 5:e=s.sent,t=Object(m.a)(e,3),a=t[0],n=t[1],c=t[2],h=b(a,n,c),r(!0),s.next=17;break;case 14:s.prev=14,s.t0=s.catch(0),v(!0);case 17:i(!1);case 18:case"end":return s.stop()}},null,null,[[0,14]])};return c.a.createElement(c.a.Fragment,null,!a&&!u&&!f&&c.a.createElement("button",{type:"button",className:"btnLoad",onClick:N},"Load"),c.a.createElement("div",{className:"App"},u&&!f&&c.a.createElement("div",{className:"hoja"},"Loading..."),f&&c.a.createElement("button",{className:"btnError",type:"button",onClick:N},"Error...Try again"),a&&!u&&c.a.createElement(E,{posts:h})))};s.a.render(c.a.createElement(v,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.0396603c.chunk.js.map