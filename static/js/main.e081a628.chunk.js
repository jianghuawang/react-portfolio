(this["webpackJsonpcs185-react-portfolio"]=this["webpackJsonpcs185-react-portfolio"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/selfie.bfcf3280.jpg"},19:function(e,t,a){e.exports=a.p+"static/media/selftake1.488270c5.jpeg"},20:function(e,t,a){e.exports=a.p+"static/media/selftake2.6f314909.jpeg"},21:function(e,t,a){e.exports=a.p+"static/media/selftake3.65fb3d9e.jpeg"},22:function(e,t,a){e.exports=a.p+"static/media/selftake4.1488e23a.jpeg"},23:function(e,t,a){e.exports=a.p+"static/media/selftake5.4a93dc26.jpeg"},24:function(e,t,a){e.exports=a.p+"static/media/selftake6.35fd6353.jpeg"},25:function(e,t,a){e.exports=a.p+"static/media/selftake7.b60d9884.jpeg"},26:function(e,t,a){e.exports=a.p+"static/media/selftake8.3c4f1f75.jpeg"},27:function(e,t,a){e.exports=a.p+"static/media/selftake9.151c2083.jpeg"},28:function(e,t,a){e.exports=a.p+"static/media/selftake10.948e9c71.jpeg"},32:function(e,t,a){e.exports=a.p+"static/media/antvsbee-mainpage.b8913c0b.png"},33:function(e,t,a){e.exports=a.p+"static/media/map.19607075.png"},35:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAVklEQVR4Ae3MAQYAIBBE0RBCd+0oHaRDhI4VamOEAa0FquFbWM+9vYTMyEDJinQDtpEsValJRYURslaRxwWmQAhai1I7wTIhDG0Mf4oRhAVcM+Q+dMMm1u0lBWfCKz0AAAAASUVORK5CYII="},36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(17),c=a.n(r),s=(a(41),a(3)),l=a(4),o=a(6),m=a(5),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).addStyling=function(){return e.props.tab.id===e.props.activeTab?{color:"#2451f2"}:{color:"#000"}},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("h2",{className:"navbar-item",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},this.props.tab.title)}}]),a}(n.Component),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tabs.map((function(t){return i.a.createElement(u,{tab:t,key:t.id,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}));return i.a.createElement("div",{className:"navbar-start"},t)}}]),a}(n.Component),d=a(18),h=a.n(d),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"home-content"},i.a.createElement("img",{className:"selfie",src:h.a,alt:""}),i.a.createElement("p",{className:"intro"},"Hi, I am Jianghua, a Machine Learning enthusiast, self-motivated engineering undergraduate. I am currently pursuing my bacholar degree of Computer Science in the University Of California, Santa Barbara, and I am a Research Assistant under Professor Manjunath. My interests lie on Machine Learning, Cybersecurity and Computer Graphics."))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{className:"image-picture modal-custom ",src:this.props.image.src,alt:this.props.image.description,onClick:this.props.enlarge.bind(this,this.props.image.src)}))}}]),a}(n.Component),b=a(19),g=a.n(b),y=a(20),E=a.n(y),j=a(21),O=a.n(j),N=a(22),k=a.n(N),C=a(23),A=a.n(C),S=a(24),w=a.n(S),T=a(25),x=a.n(T),V=a(26),B=a.n(V),M=a(27),I=a.n(M),D=a(28),R=a.n(D),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).enlarge=function(e){var t=document.querySelector(".image-enlargeView");document.querySelector(".image-enlargeContent").src=e,t.style.display="flex"},e.returnOrigin=function(e){var t=document.querySelector(".image-enlargeView");e.target===t&&(t.style.display="none")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[{id:1,src:g.a,description:""},{id:2,src:E.a,description:""},{id:3,src:O.a,description:""},{id:4,src:k.a,description:""},{id:5,src:A.a,description:""},{id:6,src:w.a,description:""},{id:7,src:x.a,description:""},{id:8,src:B.a,description:""},{id:9,src:I.a,description:""},{id:10,src:R.a,description:""}].map((function(t){return i.a.createElement(v,{key:t.id,enlarge:e.enlarge,image:t})}));return i.a.createElement("div",{className:"images-content"},t,i.a.createElement("div",{className:"image-enlargeView",onClick:this.returnOrigin},i.a.createElement("img",{className:"image-enlargeContent",alt:""})))}}]),a}(n.Component),F=a(29),Y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"_onReady",value:function(e){e.target.pauseVideo()}},{key:"render",value:function(){return i.a.createElement("div",{className:"videos"},i.a.createElement("div",{className:"video"},i.a.createElement("div",{className:"video-cell"},i.a.createElement(F.a,{className:"youtube",videoId:"FCaWv7VLnS4",opts:{height:"390",width:"640",playerVars:{autoplay:1}}})),i.a.createElement("div",{className:"video-description"},i.a.createElement("p",null,i.a.createElement("strong",null,"Video of Playing Ants VS. Bees")))))}}]),a}(n.Component),q=a(32),L=a.n(q),G=a(33),W=a.n(G),z=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"projects"},i.a.createElement("div",{className:"project"},i.a.createElement("div",{className:"project-img"},i.a.createElement("a",{href:"https://github.com/jianghuawang/AntVS.Bees"},i.a.createElement("img",{className:"modal-custom",src:L.a,alt:""}))),i.a.createElement("div",{className:"project-description"},i.a.createElement("h4",null,"Ants VS. Bees"))),i.a.createElement("div",{className:"project"},i.a.createElement("div",{className:"project-img"},i.a.createElement("a",{href:"https://github.com/jianghuawang/Yelpmap"},i.a.createElement("img",{className:"modal-custom",src:W.a,alt:""}))),i.a.createElement("div",{className:"project-description"},i.a.createElement("h4",null,"Yelp Map"))))}}]),a}(n.Component),Q=a(34),H={apiKey:"AIzaSyBupURFLwVbel2G9VlwuOQk-BAdDGfSibU",authDomain:"react-portfolio-7cd40.firebaseapp.com",databaseURL:"https://react-portfolio-7cd40.firebaseio.com"},J=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).addStyle=function(){return"false"===e.props.message.visibility?{display:"none"}:{display:"block"}},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:this.addStyle()},i.a.createElement("p",{className:"message-time"},this.props.message.time),i.a.createElement("p",{className:"message-name"},this.props.message.name),i.a.createElement("p",{className:"message-description"},this.props.message.description),i.a.createElement("p",{className:"message-comment"},this.props.message.comment))}}]),a}(n.Component),P=a(16),K=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={shouldUpdate:!0,messages:[],name:"",description:"",comment:"",email:""},e.onChange=function(t){e.setState(Object(Q.a)({},t.target.name,t.target.value))},e.firebasePush=function(t){t.preventDefault(),P.app.length||P.initializeApp(H);Date().toString();P.database().ref("messages").push({name:e.state.name,description:e.state.description,comment:e.state.comment,visibility:document.querySelector("#visibility").value,email:e.state.email,time:Date().toLocaleString()}),e.setState({name:"",description:"",comment:"",email:""}),alert("thank you for your comment, enjoy your day!")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;P.apps.length||P.initializeApp(H),P.database().ref("messages").on("value",(function(t){var a=t.val(),n=[];for(var i in a)n.push({id:i,name:a[i].name,description:a[i].description,comment:a[i].comment,visibility:a[i].visibility,email:a[i].email,time:a[i].time});e.setState({messages:n})}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;this.state.shouldUpdate!==t.shouldUpdate&&P.database().ref("messages").on("value",(function(e){var t=e.val(),a=[];for(var i in t)a.push({id:i,name:t[i].name,description:t[i].description,comment:t[i].comment,visibility:t[i].visibility,email:t[i].email});n.setState({messages:a})}))}},{key:"render",value:function(){var e=this.state.messages.map((function(e){return i.a.createElement(J,{key:e.id,message:e})}));return i.a.createElement("div",{className:"guestbookContainer"},i.a.createElement("div",{className:"formgrid"},i.a.createElement("form",{autoComplete:"off",className:"form fromForGust",onSubmit:this.firebasePush},i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"name",className:"field-label"},"Name:"),i.a.createElement("input",{id:"name",type:"text",className:"input",name:"name",placeholder:"Enter your name",pattern:".{5,19}",title:"larger than 5 and less than 20 characters",value:this.state.name,onChange:this.onChange,required:!0})),i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"description",className:"field-label"},"Description of Yourself:"),i.a.createElement("textarea",{name:"description",id:"description",rows:"3",className:"textarea",placeholder:"optional",pattern:".{,99}",title:"less than 100 characters",value:this.state.description,onChange:this.onChange})),i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"comment",className:"field-label"},"Comment:"),i.a.createElement("textarea",{name:"comment",id:"comment",rows:"5",className:"textarea",placeholder:"Leave your comment",pattern:".{15,499}",title:"larger than 15 and less than 500 characters",value:this.state.comment,onChange:this.onChange,required:!0})),i.a.createElement("div",{className:"field select-custom"},i.a.createElement("label",{className:"field-label",htmlFor:"visibility"},"Visibility to others:"),i.a.createElement("select",{className:"label",name:"visibility",id:"visibility",onChange:this.onChange},i.a.createElement("option",{value:"true"},"Yes"),i.a.createElement("option",{value:"false"},"No"))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"email",className:"field-label"},"Email"),i.a.createElement("input",{id:"email",type:"email",name:"email",placeholder:"Enter your email",className:"input",value:this.state.email,onChange:this.onChange})),i.a.createElement("div",{className:"field"},i.a.createElement("button",{value:"Submit",className:"button"},"Submit")))),i.a.createElement("div",{className:"commentHistory"},i.a.createElement("div",{className:"label allComments "},i.a.createElement("h3",null,"Comment History"),e)))}}]),a}(n.Component),X=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).displayContent=function(){var t=e.props.activeTab;return 1===t?i.a.createElement(f,null):2===t?i.a.createElement(U,null):3===t?i.a.createElement(Y,null):4===t?i.a.createElement(z,null):i.a.createElement(K,null)},e}return Object(l.a)(a,[{key:"render",value:function(){return this.displayContent()}}]),a}(n.Component),$=a(35),_=a.n($),Z=(a(65),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"backtoTop",value:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("figure",{className:"avatar back",onClick:this.backtoTop},i.a.createElement("img",{src:_.a,alt:""})))}}]),a}(n.Component)),ee=(a(66),a(16)),te=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"handleOverScroll",value:function(){var e=document.querySelector(".back");document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.visibility="visible":e.style.visibility="hidden"}},{key:"componentDidMount",value:function(){ee.apps.length||ee.initializeApp(H),window.addEventListener("scroll",this.handleOverScroll)}},{key:"render",value:function(){return i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar"},i.a.createElement(p,{tabs:[{id:1,title:"Home"},{id:2,title:"Images"},{id:3,title:"Videos"},{id:4,title:"Projects"},{id:5,title:"Guest Book"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),i.a.createElement("div",{className:"main-body"},i.a.createElement(X,{activeTab:this.state.activeTab}),i.a.createElement(Z,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e081a628.chunk.js.map