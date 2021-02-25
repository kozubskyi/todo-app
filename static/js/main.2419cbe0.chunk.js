(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,o){},19:function(t,e,o){},21:function(t,e,o){},22:function(t,e,o){},23:function(t,e,o){},24:function(t,e,o){},25:function(t,e,o){"use strict";o.r(e);var n=o(1),d=o.n(n),s=o(7),i=o.n(s),c=o(4),a=o(11),r=o(8),l=o(9),u=o(12),b=o(10),j=(o(17),o(18),o(19),o(0)),m=function(t){var e=t.todos;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"stats",children:[Object(j.jsx)("button",{className:"stats__btn stats__all-todos",children:e.length}),Object(j.jsx)("button",{className:"stats__btn stats__undone-todos",children:e.filter((function(t){return!t.completed})).length}),Object(j.jsx)("button",{className:"stats__btn stats__important-todos",children:e.filter((function(t){return"important"===t.type&&!t.completed})).length}),Object(j.jsx)("button",{className:"stats__btn stats__done-todos",children:e.filter((function(t){return t.completed})).length})]}),Object(j.jsx)("div",{className:"line"})]})},p=function(t){var e=t.children;return Object(j.jsx)("ul",{className:"todo__list",children:e})},h=(o(21),function(t){var e,o=t.todos,n=t.upTodo,d=t.downTodo,s=t.handleTodoEdit,i=t.handleTodoDelete,c=t.onTodoClick;return Object(j.jsx)(j.Fragment,{children:(e=o,e.map((function(t){return Object(j.jsxs)("li",{className:"todo__item ".concat(t.type),children:[Object(j.jsx)("input",{type:"checkbox",id:t.id,onChange:function(){return c(t.id)},checked:t.completed}),Object(j.jsx)("label",{htmlFor:t.id,children:t.text}),Object(j.jsxs)("div",{className:"move-todo-block",children:[Object(j.jsx)("button",{type:"button",className:"move-todo up-todo",onClick:function(){return n(e.indexOf(t))}}),Object(j.jsx)("button",{type:"button",className:"move-todo down-todo",onClick:function(){return d(e.indexOf(t))}})]}),Object(j.jsx)("button",{type:"button",className:"edit-todo",onClick:function(){return s(t.text,t.id)}}),Object(j.jsx)("button",{type:"button",className:"delete-todo",onClick:function(){return i(t.id)}})]},t.id)})))})}),f=o(2),x=o(27),T=(o(22),function(t){t.todos;var e,o,d=t.handleFormSubmit,s=Object(n.useState)(""),i=Object(f.a)(s,2),c=i[0],a=i[1],r=Object(n.useState)("standart"),l=Object(f.a)(r,2),u=l[0],b=(l[1],Object(n.useState)(["\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0430 \u0444\u0443\u0442\u0431\u043e\u043b","\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","\u041d\u0430\u0432\u0435\u0441\u0442\u0438\u0442\u044c \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u0432","\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u043e\u0434\u0430\u0440\u043e\u043a","\u041f\u043e\u043c\u044b\u0442\u044c \u043f\u043e\u0441\u0443\u0434\u0443","\u041f\u0440\u0438\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u0434\u043e\u043c\u0435","\u041f\u043e\u0447\u0438\u043d\u0438\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0432 \u0434\u043e\u043c\u0435","\u0421\u044c\u0435\u0437\u0434\u0438\u0442\u044c \u0432 \u043e\u0442\u043f\u0443\u0441\u043a","\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435","\u0412\u044b\u043d\u0435\u0441\u0442\u0438 \u043c\u0443\u0441\u043e\u0440","\u041a\u0443\u043f\u0438\u0442\u044c \u0432\u043a\u0443\u0441\u043d\u044f\u0448\u0435\u043a"])),m=Object(f.a)(b,2),p=m[0],h=(m[1],function(){return a("")});return Object(j.jsxs)("form",{className:"todo-creator__form",onSubmit:function(t){t.preventDefault();var e={id:Object(x.a)(),text:c,type:u,completed:!1};""!==e.text&&d(e),h()},children:[Object(j.jsx)("input",{type:"text",value:c,onChange:function(t){return a(t.target.value)},autoComplete:"off",placeholder:p[(e=0,o=p.length-1,Math.floor(Math.random()*(o-e+1))+e)]}),Object(j.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}),O=(o(23),function(t){var e=t.closeEditingForm,o=document.querySelector("body");return Object(j.jsx)("div",{className:"backdrop",style:{height:o.scrollHeight},onClick:e})}),g=(o(24),function(t){var e=t.todoText,o=t.handleTodoTextEdit,d=t.closeEditingForm,s=Object(n.useState)(e),i=Object(f.a)(s,2),c=i[0],a=i[1];return Object(j.jsxs)("form",{className:"todo-editor__form",onSubmit:function(t){t.preventDefault(),o(c),d()},children:[Object(j.jsx)("input",{type:"text",value:c,onChange:function(t){return a(t.target.value)},autoComplete:"off",autoFocus:!0}),Object(j.jsx)("button",{type:"submit",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})}),y=function(t){Object(u.a)(o,t);var e=Object(b.a)(o);function o(){var t;Object(r.a)(this,o);for(var n=arguments.length,d=new Array(n),s=0;s<n;s++)d[s]=arguments[s];return(t=e.call.apply(e,[this].concat(d))).state={todos:[{id:"id-1",text:"\u042d\u0442\u043e \u0432\u0430\u0436\u043d\u0430\u044f Todo",type:"important",completed:!1},{id:"id-2",text:"\u0412\u0430\u0436\u043d\u044b\u0435 Todo \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u044b \u043a\u0440\u0430\u0441\u043d\u044b\u043c \u0446\u0432\u0435\u0442\u043e\u043c",type:"important",completed:!1},{id:"id-3",text:"\u0410 \u044d\u0442\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f Todo",type:"standart",completed:!1},{id:"id-4",text:"\u0427\u0442\u043e-\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u044e Todo \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 \u0433\u0440\u0430\u0444\u0435 \u043d\u0438\u0436\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442 \u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043d\u043e\u0432\u0430\u044f Todo \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u043e\u0439 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435",type:"standart",completed:!1},{id:"id-5",text:"Todo \u043c\u043e\u0436\u043d\u043e \u0434\u0432\u0438\u0433\u0430\u0442\u044c \u0432\u044b\u0448\u0435 \u0438 \u043d\u0438\u0436\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u0442\u0440\u0435\u043b\u043e\u0447\u0435\u043a, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0445\u0440\u0430\u043d\u0438\u0442\u044c Todo \u043a\u0430\u043a \u0435\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0432\u0430\u0436\u043d\u044b\u0435 \u043f\u043e\u0434\u043d\u044f\u0442\u044c \u043f\u043e\u0432\u044b\u0448\u0435, \u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u043d\u0438\u0437)",type:"standart",completed:!1},{id:"id-6",text:"\u041a\u0430\u0440\u0430\u043d\u0434\u0430\u0448\u0438\u043a \u043f\u043e\u0437\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c Todo",type:"standart",completed:!1},{id:"id-7",text:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0443\u0434\u0430\u043b\u044f\u0435\u0442 Todo \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",type:"standart",completed:!1},{id:"id-8",text:"\u0410 \u0432\u043e\u0442 \u0442\u0430\u043a \u0432\u043e\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f Todo",type:"standart",completed:!0},{id:"id-9",text:"\u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 Todo \u0442\u0435\u043c \u043b\u0443\u0447\u0448\u0435 \u2705",type:"standart",completed:!0},{id:"id-10",text:"\u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0438 Todo \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \ud83d\ude0a",type:"standart",completed:!0}],todoToUpdateText:"",todoToUpdateId:"",isTodoEditing:!1},t.handleFormSubmit=function(e){return t.setState({todos:[e].concat(Object(a.a)(t.state.todos))})},t.upTodo=function(e){if(0!==e){var o=t.state.todos,n=o[e];o.splice(e,1),o.splice(e-1,0,n),console.log(o),t.setState({todos:o}),localStorage.setItem("todos",JSON.stringify(o))}},t.downTodo=function(e){if(e!==t.state.todos.length-1){var o=t.state.todos,n=o[e];o.splice(e,1),o.splice(e+1,0,n),console.log(o),t.setState({todos:o}),localStorage.setItem("todos",JSON.stringify(o))}},t.handleTodoEdit=function(e,o){return t.setState({todoToUpdateText:e,todoToUpdateId:o,isTodoEditing:!0})},t.handleTodoTextEdit=function(e){t.setState((function(o){return{todos:o.todos.map((function(o){return o.id===t.state.todoToUpdateId?Object(c.a)(Object(c.a)({},o),{},{text:e}):o}))}}))},t.closeEditingForm=function(){return t.setState({isTodoEditing:!1})},t.handleTodoDelete=function(e){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})},t.onTodoClick=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{completed:!t.completed}):t}))}}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todos"));null!==t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(t,e){e.todos!==this.state.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{todos:this.state.todos}),Object(j.jsx)(p,{children:Object(j.jsx)(h,{todos:this.state.todos,upTodo:this.upTodo,downTodo:this.downTodo,handleTodoEdit:this.handleTodoEdit,handleTodoDelete:this.handleTodoDelete,isTodoDeleting:this.state.isTodoDeleting,onTodoClick:this.onTodoClick})}),!this.state.isTodoEditing&&Object(j.jsx)(T,{todos:this.state.todos,handleFormSubmit:this.handleFormSubmit}),this.state.isTodoEditing&&Object(j.jsx)(O,{closeEditingForm:this.closeEditingForm}),this.state.isTodoEditing&&Object(j.jsx)(g,{todoText:this.state.todoToUpdateText,handleTodoTextEdit:this.handleTodoTextEdit,closeEditingForm:this.closeEditingForm})]})}}]),o}(n.Component);i.a.render(Object(j.jsx)(d.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.2419cbe0.chunk.js.map