(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(7),a=n.n(i),r=(n(12),n(2)),o=n(3),l=n(5),d=n(4),u=n.p+"static/media/logo.6ce24c58.svg",h=n(0),j=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var t=this.props.data,e=[],n=0;n<t.length;n++)e.push(Object(h.jsx)("li",{class:"memo-li",children:Object(h.jsxs)("a",{href:"#","data-id":t[n].id,onClick:function(t){t.preventDefault(),this.props.onChange(t.target.dataset.id)}.bind(this),children:[t[n].title," "]})},t[n].id));return Object(h.jsx)("ul",{className:"memo-ul",children:e})}}]),n}(s.a.Component),b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{class:"greeting",children:[Object(h.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"#",onClick:function(t){t.preventDefault(),this.props.onChange()}.bind(this),children:this.props.title})}),Object(h.jsx)("p",{children:this.props.subTitle})]})}}]),n}(s.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{children:this.props.title}),Object(h.jsx)("span",{children:this.props.desc})]})}}]),n}(s.a.Component),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("p",{class:"title",children:"\uacf5\ubd80\ud55c \ub0b4\uc6a9 \uc791\uc131\ud558\uae30"}),Object(h.jsxs)("form",{action:"/create_process",method:"post",onSubmit:function(t){t.preventDefault(),this.props.onSubmit(t.target.title.value,t.target.desc.value)}.bind(this),children:[Object(h.jsxs)("div",{class:"input-div",children:[Object(h.jsx)("input",{type:"text",name:"title",placeholder:"\uc81c\ubaa9 \uc791\uc131",required:!0}),Object(h.jsx)("input",{type:"submit",class:"submit-btn",value:"\u2705"})]}),Object(h.jsx)("p",{children:Object(h.jsx)("textarea",{name:"desc",placeholder:"\uacf5\ubd80\ud55c \ub0b4\uc6a9 \uc791\uc131",required:!0})})]})]})}}]),n}(s.a.Component),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{class:"write-li",children:[Object(h.jsx)("a",{href:"/create",class:"write-btn",onClick:function(t){t.preventDefault(),this.props.onChangeMode("create")}.bind(this),children:"\uae00\uc4f0\uae30\ubaa8\ub4dc"}),Object(h.jsx)("span",{class:"info-span",children:"\ud83d\udc47 \uc544\ub798 \uae00\uc744 \ud074\ub9ad\ud558\uba74 \uc0c1\uc138\uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})})}}]),n}(s.a.Component),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={seconds:0},c}return Object(o.a)(n,[{key:"tick",value:function(){this.setState((function(t){return{seconds:t.seconds+1}}))}},{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(h.jsxs)("div",{class:"study-time",children:["\uacf5\ubd80\ud55c\uc9c0 \ubc8c\uc368 ",Object(h.jsx)("strong",{children:this.state.seconds}),"\ucd08\ub098 \ub410\ub2e4\uad6c?!"]})}}]),n}(s.a.Component),v=(n(14),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).max_content_id=3,c.state={contents:[{id:1,title:"React\ub780?",desc:"React\ub294 \ud398\uc774\uc2a4\ubd81 \uc7ac\ub2e8\uc5d0\uc11c \ub9cc\ub4e0 SPA(Single Page Application)\uc73c\ub85c \uac01\uc885 \uc571(\ud398\uc774\uc2a4\ubd81, \uc778\uc2a4\ud0c0\uadf8\ub7a8 \ub4f1)\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."},{id:2,title:"component\ub780?",desc:"\ucef4\ud3ec\ub10c\ud2b8\ub294 \uc27d\uac8c\ub9d0\ud574 html\uc744 \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc9c1\uad00\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ub9ac\uc561\ud2b8\uc758 \uae30\ubcf8\uac1c\ub150\uc73c\ub85c\uc11c, \uac01 \ucf54\ub4dc\ub4e4\uc744 \ucef4\ud3ec\ub10c\ud2b8\ud654 \uc2dc\ucf1c \ub530\ub85c\ub530\ub85c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"},{id:3,title:"props\ub780?",desc:"props\ub780 \uc6f9\uc744 \uc774\uc6a9\ud558\ub294 \uc0ac\ub78c\uc774 \uc870\uc815 \ud560 \uc218 \uc788\ub294 \uac12\uc73c\ub85c, \uc774\ud574\ub97c \ub3d5\uae30 \uc27d\uac8c \uc608\ub97c \ub4e4\uba74 \ud734\ub300\ud3f0\uc758 \ubcfc\ub968\ubc84\ud2bc\uac19\uc740 \uc874\uc7ac\uc785\ub2c8\ub2e4."},{id:4,title:"state\ub780?",desc:"state\ub294 \ub0b4\ubd80\uc758 \uac1c\ubc1c\uc790\uac00 \uc124\uc815\ud574 \ub193\uc740 \uac12\uc73c\ub85c, \uc774\ud574\ub97c \ub3d5\uae30 \uc27d\uac8c \uc608\ub97c \ub4e4\uba74 \ud734\ub300\ud3f0 \ub0b4\ubd80\uc758 \uc2dc\uc2a4\ud15c \uac19\uc740 \uc874\uc7ac\uc785\ub2c8\ub2e4."}],mode:"create",subject:{title:"component",desc:"\ucef4\ud3ec\ub10c\ud2b8\ub294 \uc27d\uac8c\ub9d0\ud574 html\uc744 \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc9c1\uad00\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ub9ac\uc561\ud2b8\uc758 \uae30\ubcf8\uac1c\ub150\uc785\ub2c8\ub2e4."},welcome:{title:"Welcome",desc:"Hello,React~"}},c}return Object(o.a)(n,[{key:"render",value:function(){var t,e,n=null;if("welcome"==this.state.mode)t=this.state.welcome.title,e=this.state.welcome.desc,n=Object(h.jsx)(p,{title:t,desc:e});else if("read"==this.state.mode){for(var c=0;c<this.state.contents.length;c++){var s=this.state.contents[c];if(s.id===this.state.selected_content_id){t=s.title,e=s.desc;break}}n=Object(h.jsx)(p,{title:t,desc:e})}else"create"==this.state.mode&&(n=Object(h.jsx)(O,{onSubmit:function(t,e){this.max_content_id=this.max_content_id+1;var n=this.state.contents.concat({id:this.max_content_id,title:t,desc:e});this.setState({contents:n})}.bind(this)}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{class:"video-wrap",children:Object(h.jsx)("iframe",{src:"https://www.youtube.com/embed/XMb0w3KMw00?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(b,{title:"\uc548\ub155\ud558\uc138\uc694",subTitle:"\ub9ac\uc561\ud2b8 \uacf5\ubd80\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4 \ud83d\udcbb",onChange:function(){this.setState({mode:"welcome"})}.bind(this)}),n,Object(h.jsx)(m,{onChangeMode:function(t){this.setState({mode:t})}.bind(this)}),Object(h.jsx)(j,{data:this.state.contents,onChange:function(t){this.setState({mode:"read",selected_content_id:Number(t)})}.bind(this)}),Object(h.jsx)(f,{})]})]})}}]),n}(s.a.Component)),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.f06c7417.chunk.js.map