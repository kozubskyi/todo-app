(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){},18:function(t,e,o){},19:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var n=o(1),s=o.n(n),a=o(8),c=o.n(a),r=o(7),i=o(9),d=o(2),l=o(3),u=o(5),h=o(4),p=(o(14),o(15),o(16),o(0)),m=function(t){var e=t.todos;return Object(p.jsxs)("div",{className:"stats",children:[Object(p.jsxs)("p",{className:"stats__all-todos",children:["\u0412\u0441\u0435\u0433\u043e: ",e.length]}),Object(p.jsxs)("p",{className:"stats__important-todos",children:["\u0412\u0430\u0436\u043d\u044b\u0445: ",e.filter((function(t){return"important"===t.type&&!t.completed})).length]}),Object(p.jsxs)("p",{className:"stats__done-todos",children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",e.filter((function(t){return t.completed})).length]})]})},b=(o(18),function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"line"}),Object(p.jsx)("ul",{className:"todo__list",children:this.props.todos.map((function(e){return Object(p.jsxs)("li",{className:"todo__item",style:{backgroundColor:"important"===e.type&&"rgb(255, 175, 175)"},children:[Object(p.jsx)("input",{type:"checkbox",id:e.id,checked:e.completed}),Object(p.jsx)("label",{htmlFor:e.id,onClick:function(){return t.props.handleCompletedStatus(e.id)},children:e.text}),Object(p.jsx)("button",{type:"button",className:"edit-todo"}),Object(p.jsx)("button",{type:"button",className:"delete-todo",onClick:function(){return t.props.handleTodoDelete(e.id)}})]},e.id)}))})]})}}]),o}(n.Component)),j=o(22),f=(o(19),function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={text:""},t.onFormSubmit=function(e){e.preventDefault();var o={id:Object(j.a)(),text:t.state.text,type:"standart",completed:!1};""!==o.text&&t.props.handleFormSubmit(o),t.formReset()},t.formReset=function(){return t.setState({text:""})},t.changeInputValue=function(e){return t.setState({text:e.target.value})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:"todo-creator__form",onSubmit:this.onFormSubmit,children:[Object(p.jsx)("input",{type:"text",value:this.state.text,onChange:this.changeInputValue,autoComplete:"off"}),Object(p.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),o}(n.Component)),O=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={todos:[{id:"sdfg",text:"testovaya versia",type:"standart",completed:!1}]},t.handleFormSubmit=function(e){return t.setState({todos:[e].concat(Object(i.a)(t.state.todos))})},t.handleTodoDelete=function(e){return t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})},t.handleCompletedStatus=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todos"));null!==t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(t,e){e.todos!==this.state.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{todos:this.state.todos}),Object(p.jsx)(b,{todos:this.state.todos,handleTodoDelete:this.handleTodoDelete,handleTodoCompleting:this.handleTodoCompleting,handleCompletedStatus:this.handleCompletedStatus}),Object(p.jsx)(f,{todos:this.state.todos,handleFormSubmit:this.handleFormSubmit})]})}}]),o}(n.Component);c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.527c9dc4.chunk.js.map