(this["webpackJsonpfrontend-todo-list"]=this["webpackJsonpfrontend-todo-list"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(15),o=n.n(c),r=(n(68),n(69),n(70),n(7)),i=n(14),u=n.n(i),l=n(20),j=n(101),d=n(38),m=Object(s.createContext)([]),x=n(32),b=n.n(x);function f(e){var t={token:e};return b.a.post("https://desafio-todo-list-backend.herokuapp.com/login",t).then((function(e){return e.data}))}function p(e,t){var n={token:e,task:t};return b.a.post("https://desafio-todo-list-backend.herokuapp.com/task",n).then((function(e){return e.data}))}function O(e,t){var n={data:{token:e,task:t}};return b.a.delete("https://desafio-todo-list-backend.herokuapp.com/task",n).then((function(e){return e.data}))}function h(e,t){var n={token:e,tasks:t};return b.a.put("https://desafio-todo-list-backend.herokuapp.com/task",n).then((function(e){return e.data}))}var g=n(1);function v(){var e=Object(s.useContext)(m),t=e.isUserLogged,n=e.setIsUserLogged,a=e.setToken,c=e.setTasks,o=e.setUser,i=function(){var e=Object(l.a)(u.a.mark((function e(t){var s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("succeed"),s=t.tokenId,e.next=4,f(s);case 4:(r=e.sent).error&&alert("Usu\xe1rio ou senha incorretos"),o(r),c(r.tasks),a(s),n(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(g.jsx)(r.a,{to:"/taskList"}):Object(g.jsx)(j.a,{className:"login-container pt-5",children:Object(g.jsxs)("div",{className:"mx-auto text-center login-box",children:[Object(g.jsx)("h2",{className:"",children:"Login"}),Object(g.jsx)(d.GoogleLogin,{className:"mt-4 mb-1 mx-auto google-btn",clientId:"303743723492-ffaosfeiakmcbgsict3uom3fgk97i0ap.apps.googleusercontent.com",buttonText:"Fa\xe7a login",onSuccess:i,onFailure:function(e){console.log("failed",e),n(!1)},cookiePolicy:"single_host_origin",isSignedIn:!0})]})})}var k=n(6),N=n(103),y=n(22),C=n(28),S=n(29);function L(){var e=Object(s.useContext)(m),t=e.tasks,n=e.setTasks,a=e.token,c=Object(s.useState)(""),o=Object(k.a)(c,2),r=o[0],i=o[1],j=function(){var e=Object(l.a)(u.a.mark((function e(){var s,c,o,l,j,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return",alert("Insira uma tarefa"));case 2:return s=new Date,c=s.getDate().toString().padStart(2,"0"),o=(s.getMonth()+1).toString().padStart(2,"0"),l=s.getFullYear(),j="".concat(c,"/").concat(o,"/").concat(l),d={name:r,date:j,status:"pendente"},e.next=10,p(a,d);case 10:n([].concat(Object(y.a)(t),[d])),i("");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{className:"task-input form-control",id:"input",type:"text",value:r,name:"task-input",onChange:function(e){var t=e.target.value;i(t)}}),Object(g.jsx)("label",{htmlFor:"input",className:"form-label"}),Object(g.jsx)(C.a,{icon:S.a,size:"4x",className:"mx-3 p-2 icons",onClick:j})]})}var w=n(102),T=n(104);function F(e){var t=e.task,n=Object(s.useContext)(m),a=n.tasks,c=n.setTasks,o=n.token,r=Object(s.useState)(!1),i=Object(k.a)(r,2),j=i[0],d=i[1],x=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.filter((function(e){return e!==t})),c(n),console.log(o),e.next=5,O(o,t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(u.a.mark((function e(n,s){var r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:n,date:t.date,status:s===t.status?"pendente":s},i=a.indexOf(t),console.log(a),a.splice(i,1,r),d(!j),c(Object(y.a)(a)),e.next=8,h(o,a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=t.name,n=t.status;return Object(g.jsxs)(w.a,{show:j,onHide:function(){return d(!j)},children:[Object(g.jsxs)(w.a.Body,{className:"d-flex flex-column",children:[Object(g.jsxs)("div",{className:"d-flex pt-3 mx-auto text-muted",children:[Object(g.jsx)("p",{className:"mx-2",children:t.name}),Object(g.jsx)("p",{className:"mx-2",children:t.status}),Object(g.jsx)("p",{className:"mx-2",children:t.date})]}),Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsx)("label",{htmlFor:"inputEdit"}),Object(g.jsx)("input",{className:"my-2 form-control",id:"inputEdit",placeHolder:t.name,type:"text",onChange:function(t){var n=t.target.value;return e=n}}),Object(g.jsxs)("select",{name:"taskStatus",className:"my-2 form-select",onChange:function(e){var t=e.target.value;return n=t},children:[Object(g.jsx)("option",{value:"pendente",children:"pendente"}),Object(g.jsx)("option",{value:"em andamento",children:"em andamento"}),Object(g.jsx)("option",{value:"pronto",children:"pronto"})]})]})]}),Object(g.jsxs)(w.a.Footer,{children:[Object(g.jsx)(T.a,{variant:"secondary",onClick:function(){return d(!j)},children:"Close"}),Object(g.jsx)(T.a,{className:"mx-2",onClick:function(){return b(e,n)},children:"Salvar"})]})]})};return j?Object(g.jsx)(f,{}):Object(g.jsxs)("div",{className:"d-flex my-2 align-items-center justify-content-between task",children:[Object(g.jsx)("span",{className:"px-2",children:t.name}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-around",children:[Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsx)("span",{className:"px-2 ms-auto",children:Object(g.jsx)("strong",{children:t.status})}),Object(g.jsx)("span",{className:"px-2 ms-auto",children:t.date})]}),Object(g.jsxs)("div",{className:"mx-auto ms-2 d-flex flex-column align-items-center",children:[Object(g.jsx)(C.a,{icon:S.b,className:"icons my-1",onClick:function(){return d(!j)}}),Object(g.jsx)(C.a,{icon:S.c,className:"mx-2 icons my-1",onClick:x})]})]})]})}function I(){var e=Object(s.useContext)(m),t=e.isUserLogged,n=e.setIsUserLogged,a=e.tasks,c=e.user,o=Object(s.useState)(!1),i=Object(k.a)(o,2),u=i[0],l=i[1];Object(s.useEffect)((function(){var e=setTimeout((function(){l(!0)}),2e3);return function(){clearTimeout(e)}}),[]);return t?Object(g.jsxs)(j.a,{className:"py-5 d-flex flex-column",children:[Object(g.jsx)("div",{className:"ms-auto",children:Object(g.jsx)(d.GoogleLogout,{clientId:"303743723492-ffaosfeiakmcbgsict3uom3fgk97i0ap.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){console.log("Loged out successfuly"),n(!1)}})}),Object(g.jsx)("div",{className:"mx-auto",children:Object(g.jsx)("h1",{children:"Todo list"})}),Object(g.jsx)("div",{className:"mx-auto mt-3 d-flex align-items-center",children:Object(g.jsx)(L,{})}),Object(g.jsx)("div",{className:"mx-auto"}),Object(g.jsx)("div",{className:"mx-auto mt-3",children:a.map((function(e,t){return Object(g.jsx)(F,{task:e},t)}))}),Object(g.jsx)("div",{className:"position-absolute bottom-0 end-0 m-5 me-5",children:Object(g.jsxs)(N.a,{className:"toast",show:u,onClose:function(){return l(!u)},children:[Object(g.jsxs)(N.a.Header,{children:[Object(g.jsx)("img",{src:c.picture,className:"rounded me-2",alt:"Toast"}),Object(g.jsxs)("strong",{className:"me-auto",children:["Ol\xe1, ",c.name]})]}),Object(g.jsx)(N.a.Body,{children:Object(g.jsx)("strong",{children:"Como est\xe1 o seu dia? #vqv"})})]})})]}):Object(g.jsx)(r.a,{to:"/"})}function U(){return Object(g.jsxs)(r.d,{children:[Object(g.jsx)(r.b,{exact:!0,path:"/",component:v}),Object(g.jsx)(r.b,{path:"/taskList",component:I})]})}function B(e){var t=e.children,n=Object(s.useState)(!1),a=Object(k.a)(n,2),c=a[0],o=a[1],r=Object(s.useState)([]),i=Object(k.a)(r,2),u=i[0],l=i[1],j=Object(s.useState)(""),d=Object(k.a)(j,2),x=d[0],b=d[1],f=Object(s.useState)({}),p=Object(k.a)(f,2),O={isUserLogged:c,tasks:u,token:x,user:p[0],setIsUserLogged:o,setTasks:l,setToken:b,setUser:p[1]};return Object(g.jsx)(m.Provider,{value:O,children:t})}var E=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(B,{children:Object(g.jsx)(U,{})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))},D=n(25);o.a.render(Object(g.jsx)(D.a,{basename:"/frontend-todo-list",children:Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(E,{})})}),document.getElementById("root")),P()}},[[99,1,2]]]);
//# sourceMappingURL=main.555d7f65.chunk.js.map