(this.webpackJsonpencheres_service=this.webpackJsonpencheres_service||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},68:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(36),i=n.n(c),o=(n(44),n(13)),a=n(2),l=(n(45),n(17)),d=n.n(l),j=n(16),u=n(21),h=(n(47),n.p+"static/media/1.52980d0f.png"),b=n(0);function p(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.suivi-encheres-services.fr/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.setToken,n=Object(s.useState)(),r=Object(j.a)(n,2),c=r[0],i=r[1],o=Object(s.useState)(),a=Object(j.a)(o,2),l=a[0],O=a[1],x=function(){var e=Object(u.a)(d.a.mark((function e(n){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p({username:c,password:l});case 3:s=e.sent,t(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"login-wrapper",children:[Object(b.jsx)("img",{style:v.Logo,src:h,alt:"website logo"}),Object(b.jsxs)("form",{onSubmit:x,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Username"}),Object(b.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)}})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Password"}),Object(b.jsx)("input",{type:"password",onChange:function(e){return O(e.target.value)}})]}),Object(b.jsx)("div",{className:"login-button",children:Object(b.jsx)("button",{type:"submit",children:"Submit"})})]})]})}var v={Logo:{margin:"50px",height:"250px",witdh:"250px"}};function m(){return Object(b.jsx)("h2",{children:"Dashboard"})}function g(){return Object(b.jsx)("h2",{children:"Preferences"})}var f=n(9),y=n(10),C=n(19),S=n(12),_=n(11),k=(n(49),n(50),function(e){Object(S.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).state={},e}return Object(y.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"NavBar",children:[Object(b.jsx)("div",{children:Object(b.jsx)(o.b,{to:{pathname:"/contact"},children:Object(b.jsx)("button",{children:"Contact"})})}),Object(b.jsx)("div",{children:Object(b.jsx)(o.b,{to:{pathname:"/dashboard"},children:Object(b.jsx)("button",{children:"dashboard"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"button 3"})})]})}}]),n}(s.Component)),A=n(8),N=n(38),F=n.n(N),w={border:"1px solid #ccc",background:"#fff",fontSize:"1em",padding:10,margin:5,width:70},P=function(e){var t=e.itemsperpage,n=e.nocolumns,s=e.items,r=e.pagesspan;return Object(b.jsx)(F.a,{itemsperpage:t,nocolumns:n,items:s,pagesspan:r,children:function(e){var t=e.getBackButtonProps,r=e.getFastBackButtonProps,c=e.getFwdButtonProps,i=e.getFastFwdButtonProps,a=e.getSelPageButtonProps,l=(e.nopages,e.inipagearray),d=e.pagesforarray,j=e.currentpage,u=e.noitems,h=e.initialitem,p=e.lastitem,O=e.goBackBdisabled,x=e.goFastBackBdisabled,v=e.goFwdBdisabled,m=e.goFastFwdBdisabled;return Object(b.jsxs)("tbody",{children:[s.slice(h,p).map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.First_Name}),Object(b.jsx)("td",{children:e.Last_Name}),Object(b.jsx)("td",{children:e.Email}),Object(b.jsx)("td",{children:e.Phone}),Object(b.jsx)("td",{children:Object(b.jsxs)("select",{children:[Object(b.jsx)("option",{value:"attente_paiement",children:"attente paiement"}),Object(b.jsx)("option",{value:"pay\xe9",children:"pay\xe9"})]})}),Object(b.jsx)("td",{children:Object(b.jsx)(o.b,{to:{pathname:"/view-contact-details/".concat(e.id),state:{users:e}},children:Object(b.jsx)("button",{children:"View"})})})]},t)})),u>0?[Object(b.jsx)("tr",{children:Object(b.jsxs)("td",{colSpan:n,style:{textAlign:"center"},children:[Object(b.jsx)("button",Object(A.a)(Object(A.a)({style:w},r()),{},{disabled:x,children:"<<"})),Object(b.jsx)("button",Object(A.a)(Object(A.a)({style:w},t()),{},{disabled:O,children:"<"})),Array.from({length:d},(function(e,t){return t+l})).map((function(e){return Object(b.jsx)("button",Object(A.a)(Object(A.a)({},a({page:e})),{},{disabled:j==e,children:e}),e)})),Object(b.jsx)("button",Object(A.a)(Object(A.a)({style:w},c()),{},{disabled:v,children:">"})),Object(b.jsx)("button",Object(A.a)(Object(A.a)({style:w},i()),{},{disabled:m,children:">>"}))]})},"pagingrow100")]:null]})}})},B=(n(68),function(e){Object(S.a)(n,e);var t=Object(_.a)(n);function n(e){var s;Object(f.a)(this,n),(s=t.call(this,e)).handlePageClick=function(e){var t=e.selected,n=Math.ceil(t*s.props.perPage);s.setState({offset:n},(function(){s.renderContact()}))},s.state={ContactArray:[],ContactArrayFiltered:[],input:"",filter:"FirstName",itemsperpage:20,nocolumns:50};var r=s.state.ContactArrayFiltered.length/10;return console.log(s.state.pageCount),s.setState({pageCount:r}),s.renderContact=s.renderContact.bind(Object(C.a)(s)),s}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.suivi-encheres-services.fr/contact").then((function(e){return e.json()})).catch((function(e){return console.error("Error: ",e)})).then((function(t){console.log("Success: ",t),console.log(t.rows),e.setState({ContactArray:t.rows,ContactArrayFiltered:t.rows,ItemCount:t.rows.length})}))}},{key:"renderContact",value:function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.First_Name}),Object(b.jsx)("td",{children:e.Last_Name}),Object(b.jsx)("td",{children:e.Email}),Object(b.jsx)("td",{children:Object(b.jsxs)("select",{children:[Object(b.jsx)("option",{value:"attente_paiement",children:"attente paiement"}),Object(b.jsx)("option",{value:"pay\xe9",children:"pay\xe9"})]})}),Object(b.jsx)("td",{children:e.Phone}),Object(b.jsx)("td",{children:e.Address_Street}),Object(b.jsx)("td",{children:e.Address_City}),Object(b.jsx)("td",{children:e.Address_State}),Object(b.jsx)("td",{children:e.Address_Zip}),Object(b.jsx)("td",{children:e.Address_Country}),Object(b.jsx)("td",{children:e.Company}),Object(b.jsx)("td",{children:e.Labels}),Object(b.jsx)("td",{children:e.Created_At}),Object(b.jsx)("td",{children:e.Subscription_Status}),Object(b.jsx)("td",{children:e.Last_Activity}),Object(b.jsx)("td",{children:e.Last_Activity_Date}),Object(b.jsx)("td",{children:e.Source}),Object(b.jsx)("td",{children:e.Pays}),Object(b.jsx)("td",{children:e.Code_Postal}),Object(b.jsx)("td",{children:e.Adresse_de_livraison}),Object(b.jsx)("td",{children:e.Date})]},t)}},{key:"setKeyword",value:function(e){if(console.log(e),console.log(this.state.filter),console.log(this.state.ContactArray),this.setState({input:e}),"FirstName"==this.state.filter){console.log("Firstname filter"),this.setState({input:e}),console.log(this.state.ContactArray);var t=this.state.ContactArray.filter((function(t){return t.First_Name.toUpperCase().includes(e.toUpperCase())}));this.setState({ContactArrayFiltered:t}),console.log(t)}if("LastName"==this.state.filter){this.setState({input:e});t=this.state.ContactArray.filter((function(t){return t.Last_Name.toUpperCase().includes(e.toUpperCase())}));this.setState({ContactArrayFiltered:t}),console.log(t)}}},{key:"ChangeBackground",value:function(e){console.log("CB : ",e)}},{key:"ChangeFilter",value:function(e){console.log("ChangeFilter :",e),"FirstName"==e&&this.setState({filter:"FirstName"}),"LastName"==e&&this.setState({filter:"LastName"})}},{key:"render",value:function(){var e=this;return console.log(this.state.input),0!==this.state.ContactArray.length?(console.log("lenght : ",this.state.ContactArray.length),console.log("page",this.state.pageCount),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Contact"}),Object(b.jsx)(k,{}),Object(b.jsxs)("select",{onChange:function(t){return e.ChangeFilter(t.target.value)},children:[Object(b.jsx)("option",{value:"FirstName",children:"Pr\xe9nom"}),Object(b.jsx)("option",{value:"LastName",children:"Nom"})]}),Object(b.jsx)("input",{style:L,value:this.state.input,placeholder:"search name",onChange:function(t){return e.setKeyword(t.target.value)}},"random1"),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"id"}),Object(b.jsx)("td",{children:"Pr\xe9nom"}),Object(b.jsx)("td",{children:"Nom"}),Object(b.jsx)("td",{children:"mail"}),Object(b.jsx)("td",{children:"tel"}),Object(b.jsx)("td",{children:"paiement"})]})}),Object(b.jsx)(P,{itemsperpage:this.state.itemsperpage,nocolumns:this.state.nocolumns,items:this.state.ContactArrayFiltered,pagesspan:4})]})]})):Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Loading ..."})})}}]),n}(s.Component)),L={width:"20rem",background:"#F2F1F9",border:"none",padding:"0.5rem"},E=B,D=n(39),M=n.n(D),X=(n(87),function(e){Object(S.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).state={code:""},e}return Object(y.a)(n,[{key:"setCode",value:function(e){this.setState({code:e})}},{key:"SearchCode",value:function(e){console.log("code :",this.state.code),fetch("https://api.laposte.fr/suivi/v2/idships/1A00915820380",{headers:{Accept:"application/json","X-Okapi-Key":"3JjphFmg4VUo72z5JrQI8m0AIp00nNHXmbKTusLQDuHiaDt4MxlbSKojOyywXlBM"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error: ",e)})).then((function(e){console.log("Success: ",e)}))}},{key:"test",value:function(){console.log("test fucntion"),M.a.get("https://api.laposte.fr/suivi/v2/idships/1A00915820380",{headers:{Accept:"application/json","X-Okapi-Key":"3JjphFmg4VUo72z5JrQI8m0AIp00nNHXmbKTusLQDuHiaDt4MxlbSKojOyywXlBM"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{placeholder:"code de suivi",onChange:function(t){return e.setCode(t.target.value)}})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(t){return e.SearchCode(e.state.code)},children:"Search"})})]})}}]),n}(s.Component)),I=(n(88),function(e){Object(S.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).state={mail:"",to:"aurelien@spatiality.fr",subject:"",text:""},e}return Object(y.a)(n,[{key:"Confirm",value:function(e,t){this.setState({subject:e}),this.setState({text:t}),document.querySelector(".ConfirmPopup").style.display="block"}},{key:"SendMail",value:function(){var e=this.props.mail;console.log("mail is :",e);var t=this.state.subject,n=this.state.text,s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({to:this.state.to,subject:t,text:n})};fetch("https://api.suivi-encheres-services.fr/v1/text-mail",s).then(console.log("body: ",s)).then((function(e){return e.json()})).then((function(e){return console.log(e)})),document.querySelector(".ConfirmPopup").style.display="none"}},{key:"Cancel",value:function(){document.querySelector(".ConfirmPopup").style.display="none"}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:this.props.mail}),Object(b.jsx)("button",{onClick:function(t){return e.Confirm(e.props.object,e.props.text)},children:"Mail"})]}),Object(b.jsxs)("div",{className:"ConfirmPopup",children:[Object(b.jsx)("p",{children:"etes vous s\xfbr de vouloir envoyer le mail ?"}),Object(b.jsxs)("p",{children:["\xe0 ",this.props.mail]}),Object(b.jsxs)("p",{children:["objet : ",this.state.subject]}),Object(b.jsxs)("p",{children:["texte : ",this.state.text]}),Object(b.jsx)("button",{onClick:function(t){return e.SendMail()},children:"SEND"}),Object(b.jsx)("button",{onClick:function(t){return e.Cancel()},children:"CANCEL"})]})]})}}]),n}(s.Component)),T=function(e){Object(S.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).state={user:[],object:"",text:""},e}return Object(y.a)(n,[{key:"ChangeStatus",value:function(e,t){console.log("status :",e);var n="";if("pay\xe9_MDV"==e){n="Bonjour Mr "+t+",\nNous vous remercions pour votre paiement et votre confiance.\nNous allons nous rapprocher de la Maison xxxx et organiser le retrait du bordereau XXXX en date du XXXX concern\xe9 par votre demande.\n(nous vous rappelons que nous ne pouvons proc\xe9der au retrait  qu'\xe0 la condition de la r\xe9ception de votre paiement par l'h\xf4tel des ventes),\nNous vous tiendrons inform\xe9 du suivi de votre demande.Bien cordialement,\nSignature ES";var s="status updated to pay\xe9 MDV"}if("r\xe9cup\xe9r\xe9"==e)n="Bonjour Mr "+t+",\nNous avons bien r\xe9cup\xe9r\xe9 votre lot correspondant au Bordereau n\xb0xxxx aupr\xe8s de la maison de vente xxxx,\nNous allons nous proc\xe9der \xe0 l'emballage de votre bien avec attention et  vous tiendrons inform\xe9 de son exp\xe9dition ou sa livraison.\nBien cordialement,\nSignature ES",s="status updated to r\xe9cup\xe9r\xe9";if("En_cour_de_traitement"==e)n="traitement txt",s="status updated to en cour de traitement";if("Exp\xe9di\xe9"==e)n="Bonjour Mr, "+t+",\nNous vous confirmons l'exp\xe9dition de votre / vos lots du bordereau xxxx sous le num\xe9ro de suivi transporteur Colissimo La Poste suivant :  N\xb0 de suivi =  8A00054163416\nVous pouvez suivre son acheminement sous le num\xe9ro de suivi suivant via le lien https://www.laposte.fr/outils/suivre-vos-envois?code=8A00054163416 (ent\xeate colonne NOSUIVI)\nNous vous en souhaitons bonne r\xe9ception,\nBien cordialement,Signature ES",s="status updated to exp\xe9di\xe9";this.setState({text:n}),this.setState({object:s}),console.log(s),console.log(n)}},{key:"render",value:function(){var e=this,t=this.props.location.state;return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Id:"})," ",t.users.id," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Pr\xe9nom:"})," ",t.users.First_Name," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Nom:"})," ",t.users.Last_Name," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Email:"})," ",t.users.Email," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"tel:"})," ",t.users.Phone," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Rue:"})," ",t.users.Address_Street," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Ville:"})," ",t.users.Address_City," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Etat:"})," ",t.users.Address_State," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Zip:"})," ",t.users.Address_Zip," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Pays:"})," ",t.users.Address_Country," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Soci\xe9t\xe9:"})," ",t.users.Company," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"label:"})," ",t.users.Labels," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Cr\xe9\xe9 le:"})," ",t.users.Created_At," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Etat abo.:"})," ",t.users.Subscription_Status," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Derniere activit\xe9e:"})," ",t.users.Last_Activity," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Date derniere activit\xe9e:"})," ",t.users.Last_Activity_Date," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Source:"})," ",t.users.Source," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Contact.Pays:"})," ",t.users.Pays," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Contact.CP:"})," ",t.users.Code_Postal," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Adresse de livraison:"})," ",t.users.Adresse_de_livraison," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:"Contact.date:"})," ",t.users.Date," "]}),Object(b.jsx)("div",{children:Object(b.jsxs)("select",{onChange:function(n){return e.ChangeStatus(n.target.value,t.users.Last_Name)},children:[Object(b.jsx)("option",{value:"dafault",children:"choississez un status"}),Object(b.jsx)("option",{value:"pay\xe9_MDV",children:"pay\xe9 MDV"}),Object(b.jsx)("option",{value:"r\xe9cup\xe9r\xe9",children:"r\xe9cup\xe9r\xe9"}),Object(b.jsx)("option",{value:"En_cour_de_traitement",children:"En cours de traitement"}),Object(b.jsx)("option",{value:"Exp\xe9di\xe9",children:"Exp\xe9di\xe9"})]})}),Object(b.jsx)(X,{}),Object(b.jsx)(I,{mail:t.users.Email,object:this.state.object,text:this.state.text})]})}}]),n}(s.Component);var J=function(){var e=function(){var e=Object(s.useState)(function(){var e=localStorage.getItem("token"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.token}()),t=Object(j.a)(e,2),n=t[0],r=t[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),r(e.token)},token:n}}(),t=e.token,n=e.setToken;return t?Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h1",{children:"Application"}),Object(b.jsx)(o.a,{children:Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{path:"/dashboard",children:Object(b.jsx)(m,{})}),Object(b.jsx)(a.a,{path:"/preferences",children:Object(b.jsx)(g,{})}),Object(b.jsx)(a.a,{path:"/contact",children:Object(b.jsx)(E,{})}),Object(b.jsx)(a.a,{path:"/mail",children:Object(b.jsx)(I,{})}),Object(b.jsx)(a.a,{exact:!0,path:"/view-contact-details/:id",component:T})]})})]}):Object(b.jsx)(x,{setToken:n})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root")),V()}},[[89,1,2]]]);
//# sourceMappingURL=main.8848bf2d.chunk.js.map