(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),a=n.n(s),r=(n(12),n(2)),o=n(3),l=n(5),d=n(4),h=(n.p,n(0)),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var e=this.props.data,t=[],n=0;n<e.length;n++)t.push(Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#","data-id":e[n].id,onClick:function(e){e.preventDefault(),this.props.onChange(e.target.dataset.id)}.bind(this),children:[e[n].title," "]})},e[n].id));return Object(h.jsx)("ul",{className:"nav-ul",children:t})}}]),n}(i.a.Component),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:Object(h.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),this.props.onChange()}.bind(this),children:this.props.title})}),Object(h.jsx)("p",{children:this.props.subTitle})]})}}]),n}(i.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{children:this.props.title}),Object(h.jsx)("span",{children:this.props.desc})]})}}]),n}(i.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{children:"Create"}),Object(h.jsxs)("form",{action:"/create_process",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(e.target.title.value,e.target.desc.value)}.bind(this),children:[Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"text",name:"title",placeholder:"title"})}),Object(h.jsx)("p",{children:Object(h.jsx)("textarea",{name:"desc",placeholder:"description"})}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit"})})]})]})}}]),n}(i.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/create",onClick:function(e){e.preventDefault(),this.props.onChangeMode("create")}.bind(this),children:"create"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/update",onClick:function(e){e.preventDefault(),this.props.onChangeMode("update")}.bind(this),children:"update"})}),Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:"delete",onClick:function(e){e.preventDefault(),this.props.onChangeMode("delete")}.bind(this)})})]})}}]),n}(i.a.Component),f=(n(14),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).max_content_id=3,c.state={contents:[{id:1,title:"component\uc758 \uac1c\ub150 \uc774\ud574\ud558\uae30!",desc:"\ucef4\ud3ec\ub10c\ud2b8\ub294 \uc27d\uac8c\ub9d0\ud574 html\uc744 \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc9c1\uad00\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ub9ac\uc561\ud2b8\uc758 \uae30\ubcf8\uac1c\ub150\uc785\ub2c8\ub2e4."},{id:2,title:"props\ub780?",desc:"props\ub780 readonly\uc774\uace0"},{id:3,title:"state\ub780?",desc:"state\ub294 \ub0b4\ubd80\uc758 \uac12\uc774\ub77c\uace0 \uc0dd\uac01\ud558\uc2dc\uba74\ub429\ub2c8\ub2e4."}],mode:"welcome",subject:{title:"component",desc:"\ucef4\ud3ec\ub10c\ud2b8\ub294 \uc27d\uac8c\ub9d0\ud574 html\uc744 \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc9c1\uad00\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ub9ac\uc561\ud2b8\uc758 \uae30\ubcf8\uac1c\ub150\uc785\ub2c8\ub2e4."},welcome:{title:"Welcome",desc:"Hello,React~"}},c}return Object(o.a)(n,[{key:"render",value:function(){var e,t,n=null;if("welcome"==this.state.mode)e=this.state.welcome.title,t=this.state.welcome.desc,n=Object(h.jsx)(p,{title:e,desc:t});else if("read"==this.state.mode){for(var c=0;c<this.state.contents.length;c++){var i=this.state.contents[c];if(i.id===this.state.selected_content_id){e=i.title,t=i.desc;break}}n=Object(h.jsx)(p,{title:e,desc:t})}else"create"==this.state.mode&&(n=Object(h.jsx)(b,{onSubmit:function(e,t){this.max_content_id=this.max_content_id+1;var n=this.state.contents.concat({id:this.max_content_id,title:e,desc:t});this.setState({contents:n})}.bind(this)}));return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(u,{title:"\uc548\ub155\ud558\uc138\uc694!",subTitle:"\ub9ac\uc561\ud2b8 \uacf5\ubd80\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.",onChange:function(){this.setState({mode:"welcome"})}.bind(this)}),Object(h.jsx)(j,{data:this.state.contents,onChange:function(e){this.setState({mode:"read",selected_content_id:Number(e)})}.bind(this)}),n,Object(h.jsx)(O,{onChangeMode:function(e){this.setState({mode:e})}.bind(this)}),Object(h.jsx)("div",{children:Object(h.jsx)("iframe",{width:"907",height:"510",src:"https://www.youtube.com/embed/XMb0w3KMw00?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})})}}]),n}(i.a.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(f,{}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.90d81835.chunk.js.map