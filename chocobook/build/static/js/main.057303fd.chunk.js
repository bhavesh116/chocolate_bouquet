(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(421)},190:function(e,t,a){},196:function(e,t,a){},198:function(e,t,a){e.exports=a.p+"static/media/img3.c0f450f7.jpg"},421:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(33),r=a.n(o),c=(a(190),a(53)),i=a(26),s=a(29),m=a(27),u=a(17),h=a(30),d=a(422);a(196),a(198);function p(e){return console.log(e),{type:"item",payload:e}}var E=a(18),v=a.n(E),b=a(51),f=a.n(b),g=a(84),y=a.n(g),k=a(37),O=a(62),N=a.n(O),w=a(83),j=a.n(w),x=a(63),S=a.n(x),C=a(34),B=a.n(C),z=a(424),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={item:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;B.a.database().ref("product").on("value",function(t){var a=Object.values(t.val()),n=a.sort(function(e,t){return e.price-t.price});console.log(a),e.setState({item:n})})}},{key:"item",value:function(){var e=this;if(this.state.item){console.log(this.state.item);var t=this.state.item.map(function(t){return l.a.createElement("div",null,l.a.createElement(N.a,{className:"cc"},l.a.createElement(S.a,null,l.a.createElement(v.a,{variant:"display2",color:"textSecondary",gutterBottom:!0},t.name),l.a.createElement("img",{alt:"",className:"img",src:t.img}),l.a.createElement(v.a,{variant:"h3",color:"textSecondary"},l.a.createElement("div",{className:"price"},"\u20b9",t.price)),l.a.createElement(v.a,{variant:"headline",color:"textSecondary",gutterBottom:!0},t.desc)),l.a.createElement(j.a,{className:"bab"},l.a.createElement("div",null,l.a.createElement(d.a,{className:"h1",to:"/checkout"}," ",l.a.createElement(f.a,{onClick:function(){e.props.getitem(t)},className:"button",variant:"outlined",color:"secondary"},l.a.createElement("h4",null,"BUY this product")))))))});return l.a.createElement("div",{className:"div"},t)}return l.a.createElement("div",{className:"progress"},l.a.createElement(y.a,{color:"secondary"}))}}]),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement(z.a,null,l.a.createElement(z.a.Item,null,l.a.createElement("img",{width:1500,height:500,alt:"900x500",src:"https://firebasestorage.googleapis.com/v0/b/hello-49a1e.appspot.com/o/photo%2Fbouquet.jpg?alt=media&token=c4afc937-17ee-4006-97f8-4fc405b86397"}),l.a.createElement(z.a.Caption,null,l.a.createElement("h3",null,"WElCOME TO THE CHOCOLATE BOUQUET STORE "),l.a.createElement("p",null,"chocolate bouquets for loved ones."))),l.a.createElement(z.a.Item,null,l.a.createElement("img",{width:1500,height:500,alt:"900x500",src:"https://firebasestorage.googleapis.com/v0/b/hello-49a1e.appspot.com/o/photo%2Fdairy.jpg?alt=media&token=848f401d-2847-42e9-984d-f5bebc22f08a"}),l.a.createElement(z.a.Caption,null,l.a.createElement("h3",null," SEND BOUQUET on this 14 Feb to your love ones and suprise them "),l.a.createElement("p",null," Suprise your love on this 14 feb and 7 feb ,send them a lovevely Choco BOUQUET at resonable price starting at ",l.a.createElement("b",null," rs 250")," only "))),l.a.createElement(z.a.Item,null,l.a.createElement("img",{width:1500,height:500,alt:"900x500",src:"https://firebasestorage.googleapis.com/v0/b/hello-49a1e.appspot.com/o/photo%2Fferro_2.jpg?alt=media&token=e38230c2-b49a-45a1-996f-42160ccf655f"}),l.a.createElement(z.a.Caption,null,l.a.createElement("h3",null," SEND BOUQUET on Bithdays"),l.a.createElement("p",null,"gift the package of love to your family and friends on their birthdays")))),this.item())}}]),t}(n.Component);var W=Object(c.b)(null,function(e){return Object(k.b)({getitem:p},e)})(U),T=a(426),A=a(425),_=a(423);B.a.initializeApp({apiKey:"AIzaSyD8C0mtSFmV7T_yJN9D_gattjH6Jy-yyJY",authDomain:"hello-49a1e.firebaseapp.com",databaseURL:"https://hello-49a1e.firebaseio.com",projectId:"hello-49a1e",storageBucket:"hello-49a1e.appspot.com",messagingSenderId:"470296018488"});var I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"google",value:function(){var e=new B.a.auth.GoogleAuthProvider;e.addScope("https://www.googleapis.com/auth/contacts.readonly"),B.a.auth().signInWithPopup(e).then(function(e){return alert("Welcome user you are login please go back to home page")}).catch(function(e){})}},{key:"fb",value:function(){var e=new B.a.auth.FacebookAuthProvider;e.addScope("user_birthday"),B.a.auth().signInWithPopup(e).then(function(e){e.credential.accessToken,e.user;return alert("Welcome user you are login please go back to home page")}).catch(function(e){e.code,e.message,e.email,e.credential})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"koko"},l.a.createElement("div",null,l.a.createElement("h2",{className:"ff"},l.a.createElement("i",null,"Login with us"))),l.a.createElement("div",{className:"space"},l.a.createElement(_.a,{bsStyle:"danger",onClick:this.google.bind(this)},"G+ login with Google")),l.a.createElement("div",{className:"space"},"  ",l.a.createElement(_.a,{bsStyle:"primary",onClick:this.fb.bind(this)},"f Login with facebook"))))}}]),t}(n.Component),P=a(118),q=a.n(P),D=a(119),F=a.n(D),M=a(120),J=a.n(M),L=a(121),Q=a.n(L),Y=a(180),H=a.n(Y),G=a(86),R=a.n(G),V=a(181),K=a.n(V),Z=a(87),$=a.n(Z),X=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(H.a,{anchor:"left",open:this.props.open,onClose:function(){e.props.close(!1)}},l.a.createElement(K.a,{component:"nav"},l.a.createElement(d.a,{to:"/",className:"h1"},l.a.createElement(R.a,{button:!0,onClick:function(){e.props.close(!1)}},l.a.createElement($.a,null,l.a.createElement("h3",null,"Home")))),l.a.createElement(d.a,{to:"/Login",className:"h1"},"  ",l.a.createElement(R.a,{button:!0,onClick:function(){e.props.close(!1)}},l.a.createElement($.a,{className:"h1"},l.a.createElement("h3",null,"Create Account")))),l.a.createElement(d.a,{to:"/Aboutus",className:"h1"},"  ",l.a.createElement(R.a,{button:!0,onClick:function(){e.props.close(!1)}},l.a.createElement($.a,{className:"h1"},l.a.createElement("h3",null,"AboutUs")))))))}}]),t}(n.Component),ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={tap:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"tog",value:function(e){this.setState({tap:e})}}]),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(q.a,{color:"secondary"},l.a.createElement(F.a,null,l.a.createElement(J.a,{color:"inherit","aria-label":"Menu",onClick:function(){e.setState({tap:!0})}},l.a.createElement(Q.a,null)),l.a.createElement(v.a,{variant:"h4",color:"inherit"},"Chocolate Bouquet"))),l.a.createElement(X,{open:this.state.tap,close:function(t){e.tog(t)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(182),ae=a.n(te),ne=Object(k.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"item":return[t.payload];default:return e}}}),le=a(183),oe=a.n(le),re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={name:null,mobile:null,note:null,address:null,tittle:null,price:null,raz:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.check&&this.props.check.map(function(t){return e.setState({tittle:t.name,price:t.price})})}},{key:"pro",value:function(){var e=this;if(console.log(this.state),this.state.price&&this.state.name&&this.state.mobile){var t={key:"rzp_live_A8zWtNPWSpYxnU",key_id:"rzp_live_A8zWtNPWSpYxnU",key_secret:"xNC9WybvZxrw7xEiayVoS0QN",amount:100*(this.state.price+50),name:this.state.tittle,description:"",image:"",handler:function(t){alert("hey your order has been placed "),e.setState({raz:t.razorpay_payment_id});var a=Math.floor(10*Math.random+5),n=new Date,l=n.getDate().toString()+(n.getMonth()+1).toString()+n.getFullYear().toString();B.a.database().ref("order/"+l+"/"+a+e.state.raz).set({name:e.state.name,mobileno:e.state.mobile,address:e.state.address,billingname:e.state.tittle});var o=(e.state.price+50).toString(),r=new oe.a;r.line(0,50,300,50),r.text("Tax Invoice",100,40),r.line(0,70,300,70),r.line(100,50,100,500),r.text("product",30,60),r.text(e.state.tittle,30,80),r.line(150,50,150,500),r.text("Quantity",110,60),r.text("Price",180,60),r.text("1",110,80),r.text(o,180,80),r.line(0,280,300,280),r.text("total",80,290),r.text(o,180,290),r.text("name:"+e.state.name,10,20),r.text("billing address:",10,25),r.text("paymentid"+e.state.raz,140,20),r.text("date:"+l,160,25),r.text(e.state.address,10,30),r.save("invoicechocolate.pdf")},prefill:{name:"",email:""},notes:{address:""},theme:{color:"orange"}};new window.Razorpay(t).open()}else alert("please fill address, phone no and name to proceed")}}]),Object(u.a)(t,[{key:"check",value:function(){var e=this;if(this.props.check){var t=this.props.check.map(function(t){return l.a.createElement("div",{className:"div"},l.a.createElement(N.a,{className:"cc"},l.a.createElement(S.a,null,l.a.createElement(v.a,{variant:"h1",color:"textSecondary",gutterBottom:!0},t.name),l.a.createElement("img",{alt:"",className:"img",src:t.img}),l.a.createElement(v.a,{variant:"h3",color:"textSecondary"},l.a.createElement("div",{className:"price"},"\u20b9",t.price)),l.a.createElement(v.a,{variant:"h4",component:"p"},l.a.createElement("div",{className:"size"},t.desc)))),l.a.createElement("div",null,l.a.createElement(N.a,{className:"ccs"},l.a.createElement(S.a,null,l.a.createElement(v.a,{variant:"h3",color:"textSecondary",gutterBottom:!0},"Buyer name:"),l.a.createElement("div",null,l.a.createElement("input",{className:"inputs",onChange:function(t){e.setState({name:t.target.value})},type:"text"})),l.a.createElement(v.a,{variant:"h3",color:"textSecondary",gutterBottom:!0},"Mobile Number:"),l.a.createElement("div",null,l.a.createElement("input",{className:"inputs",onChange:function(t){e.setState({mobile:t.target.value})},type:"tel"})),l.a.createElement(v.a,{variant:"h3",color:"textSecondary",gutterBottom:!0},"write a note for any customization."),l.a.createElement("div",null,l.a.createElement("textarea",{className:"inputs",onChange:function(t){e.setState({note:t.target.value})}})),l.a.createElement(v.a,{variant:"h3",color:"textSecondary",gutterBottom:!0},"Full Address"),l.a.createElement("div",null,l.a.createElement("textarea",{className:"inputs",onChange:function(t){e.setState({address:t.target.value})}})),l.a.createElement("h4",null," delivery charges  50 rs extra / "),l.a.createElement("h4",null," Note: product will be delivered within 7 days ")),l.a.createElement(j.a,{className:"bab"},l.a.createElement(f.a,{className:"buttonss",onClick:e.pro.bind(e),variant:"contained",color:"secondary"},l.a.createElement("h4",null,"  Proceed to Pay  \u20b9",e.state.price+50," "))))))});return l.a.createElement("div",{className:"div"},t)}return l.a.createElement("div",{className:"progress"},l.a.createElement(y.a,{color:"secondary"}))}},{key:"render",value:function(){return this.state.raz?l.a.createElement("div",{className:"card"}," Thank you for shopping with us You can contact us for order on mobile no - 9770003301,9993900116"):l.a.createElement("div",{className:"card"},this.check())}}]),t}(n.Component);var ce=Object(c.b)(function(e){return console.log(e),{check:e.item}})(re),ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"cardsss"},l.a.createElement("div",{className:"cent"},l.a.createElement("h2",{className:"ff"},l.a.createElement("i",null,"ABOUT US")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("i",null,"Welcome to chocolate bouquet, one source for exclusive decorated bouquets filled with bunch of chocolate. We are dedicated to giving you the very best bouquets with a focus of three characteristics [dependability, customer service, uniqueness.",l.a.createElement("div",null,l.a.createElement("h2",{className:"ff"},"Brands identity and purpose ")),"Our website offers you the decorated bouquet filled with desirable buches of chocolate [i.e. kitkat,dairy milk,perk,5 star, twix, hershey bar, milky bar, snickers, crunchie, health bar, nestle crunch etc...] which you all can present to ur buddies -as a birthday, valentine (love birds) marriage, and any other special occasions."))),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("h2",{className:"ff"},"Our mission:-")),"Our mission is to establish a strong bond between the - love birds, relatives, friends , superiors to the inferiors, family so if you are not able to attend any occasions, parties, and also unable to present face to face then also by going through our sites you can present it to them at time that will bring a sweet smile with sweets among them."),l.a.createElement("div",null,l.a.createElement("h2",{className:"ff"},"Specifications:-"),"Suitable inferior (less) ,affordable prices as compare to other sites with wonderful services. We hope you enjoy our product as much as we enjoy offering them to you. If you have any questions or comments, please don\u2019t hesitate to contact us. \u201cOur aim is to make visitors to customers\u201d . Sincerely chocolate bouquet Team",l.a.createElement("div",null,l.a.createElement("b",null,"Email"),"- sanat.choubey@gmail.com",l.a.createElement("div",null,l.a.createElement("b",null,"Email"),"- bhaveshshrivastav2425369@gmail.com"),l.a.createElement("div",null,l.a.createElement("b",null,"Phone:")," 9770003301,9993900116"),l.a.createElement("div",null,"City- Jabalpur(Pin Code-482001)"))))))}}]),t}(n.Component),se=Object(k.a)(ae.a)(k.d);r.a.render(l.a.createElement(c.a,{store:se(ne)},l.a.createElement(T.a,null,l.a.createElement("div",null,l.a.createElement(ee,null),l.a.createElement(A.a,{exact:!0,path:"/Login",component:I}),l.a.createElement(A.a,{exact:!0,path:"/",component:W}),l.a.createElement(A.a,{exact:!0,path:"/checkout",component:ce}),l.a.createElement(A.a,{exact:!0,path:"/Aboutus",component:ie})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,2,1]]]);
//# sourceMappingURL=main.057303fd.chunk.js.map