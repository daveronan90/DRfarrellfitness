(this["webpackJsonpdr-farrell-fitness"]=this["webpackJsonpdr-farrell-fitness"]||[]).push([[0],{35:function(e,s,t){},41:function(e,s,t){},43:function(e,s,t){},46:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){},69:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){},74:function(e,s,t){},75:function(e,s,t){},76:function(e,s,t){},77:function(e,s,t){},78:function(e,s,t){},79:function(e,s,t){},80:function(e,s,t){},81:function(e,s,t){"use strict";t.r(s);var n=t(1),i=t(12),c=t.n(i),a=(t(35),t(10)),r=t(3),o=t(15),l=t(27),j=t(14),d=t(82),b=t(18),h=t(7),u=(t(41),t(0)),m=function(e){var s=e.modalShow,t=e.setModalShow,i=Object(n.useState)({name:"",email:"",phone:"",message:""}),c=Object(o.a)(i,2),a=c[0],r=c[1],l=function(e){var s=e.target,t=s.name,n=s.value;r(Object(h.a)(Object(h.a)({},a),{},Object(b.a)({},t,n)))},j=a.name,m=a.phone,O=a.email,p=a.message;return Object(u.jsx)(d.a,{timeout:500,unmountOnExit:!0,in:s,classNames:"modal",children:Object(u.jsx)("div",{className:"modal",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(!1),r({name:"",email:"",phone:"",message:""}),console.log(a)},children:[Object(u.jsxs)("h3",{children:["Sign Up",Object(u.jsx)("span",{onClick:function(){return t(!1)},children:"X"})]}),Object(u.jsx)("input",{type:"text",placeholder:"Name",className:"form__item",value:j,onChange:l,name:"name"}),Object(u.jsx)("input",{type:"email",placeholder:"Email",className:"form__item",value:O,onChange:l,name:"email"}),Object(u.jsx)("input",{type:"phone",placeholder:"Phone No.",className:"form__item",value:m,onChange:l,name:"phone"}),Object(u.jsx)("textarea",{cols:"30",rows:"3",placeholder:"Message",className:"form__item",value:p,onChange:l,name:"message"}),Object(u.jsx)("button",{type:"submit",className:"form__item",children:"Sign Up"})]})})})},O=[{id:1,imageUrl:"FF.png",title:"OPEN GYM",routeUrl:"/gym"},{id:2,imageUrl:"classesAndMembership.jpg",title:"CLASSES & MEMBERSHIP",routeUrl:"/classes"},{id:3,imageUrl:"personalTraining.jpg",title:"PERSONAL TRAINING",routeUrl:"/personaltraining"},{id:4,imageUrl:"physicalTherapy.jpg",title:"PHYSICAL THERAPY",routeUrl:"/physicaltherapy"},{id:5,imageUrl:"teamTraining.jpeg",title:"TEAM TRAINING",routeUrl:"/teams"},{id:6,imageUrl:"nutrition.png",title:"NUTRITION",routeUrl:"/nutrition"},{id:7,imageUrl:"tenWeekBodyTransformations.jpeg",title:"10 WEEK BODY TRANSFORMATIONS",routeUrl:"/transformations"},{id:8,imageUrl:"threeDBodyScans.png",title:"3D BODY SCANS",routeUrl:"/styku"},{id:9,imageUrl:"merchandise.png",title:"MERCHANDISE",routeUrl:"/shop"},{id:10,imageUrl:"golfSpecificTraining.jpg",title:"GOLF SPECIFIC TRAINING",routeUrl:"/golf"}],p=(t(43),function(){var e=Object(n.useState)(!1),s=Object(o.a)(e,2),t=s[0],i=s[1],c=Object(n.useState)(!1),r=Object(o.a)(c,2),b=r[0],h=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)(a.b,{to:"/",children:Object(u.jsx)("img",{src:"".concat("/DRfarrellfitness","/title-img2.png"),alt:"title"})}),Object(u.jsx)("div",{className:"burger",onClick:function(){return i(!t)},children:Object(u.jsx)(j.a,{icon:l.a,className:"burger__icon"})})]}),Object(u.jsx)("nav",{children:O.map((function(e,s){var n=e.title,c=e.routeUrl;return Object(u.jsx)(d.a,{in:t,unmountOnExit:!0,timeout:500,classNames:"menu",children:Object(u.jsx)(a.b,{to:c,className:"nav__link",onClick:function(){return i(!t)},children:n},s)})}))}),Object(u.jsx)(m,{modalShow:b,setModalShow:h})]})}),f=(t(46),[{offerType:"SPECIAL OFFER",title:"OPEN GYM",costEuro:"449",costCent:"00",duration:"YEAR",info:["Onetime access to all clubs","Group trainer","Fitness orientation"],buttonCaption:"GET STARTED"},{offerType:"ANNUAL",title:"OPEN GYM",costEuro:"500",costCent:"50",duration:"YEAR",info:["Onetime access to all clubs","Group trainer","Fitness orientation"],buttonCaption:"GET STARTED"}]),x=t(28),g=t.n(x),v=(t(62),t(63),t(64),t(65),function(e){var s=e.routeUrl,t=e.title,n=e.imageUrl;return Object(u.jsx)("div",{className:"service__card",children:Object(u.jsxs)(a.b,{to:s,children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("img",{src:"".concat("/DRfarrellfitness","/").concat(n),alt:t,width:"100%"})]})})}),N=(t(66),function(e){var s=e.offerType,t=e.title,n=e.costCent,i=e.costEuro,c=e.duration,a=e.info,r=e.buttonCaption;return Object(u.jsxs)("div",{className:"price__card",children:[Object(u.jsx)("div",{className:"price__card__1",children:Object(u.jsxs)("p",{children:[s," ",Object(u.jsx)("span",{children:t})]})}),Object(u.jsxs)("div",{className:"price__card__2",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("h1",{children:["\u20ac",i,","]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("h3",{children:c})]})]}),a.map((function(e){return Object(u.jsx)("div",{className:"price__card__info",children:Object(u.jsx)("p",{children:e})})})),Object(u.jsx)("div",{className:"price__card__button",children:Object(u.jsx)("button",{children:r})})]})}),I=function(e){var s=e.carouselItems,t=e.carouselType;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"carousel__container",children:Object(u.jsx)(g.a,Object(h.a)(Object(h.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}),{},{children:s.map((function(e,s){switch(t){case"services":return Object(n.createElement)(v,Object(h.a)(Object(h.a)({},e),{},{key:s,className:"services__carousel"}));case"price__cards":return Object(n.createElement)(N,Object(h.a)(Object(h.a)({},e),{},{key:s,className:"priceCards__carousel"}));default:return null}}))}))})})},T=(t(67),function(){return Object(u.jsx)("video",{autoPlay:!0,muted:!0,disablePictureInPicture:!0,loop:!0,children:Object(u.jsx)("source",{src:"".concat("/DRfarrellfitness","/mainVideo.mp4"),type:"video/mp4"})})}),y=function(){return Object(u.jsxs)("div",{className:"hp-container",children:[Object(u.jsx)(T,{}),Object(u.jsx)(I,{carouselItems:O,carouselType:"services"}),Object(u.jsx)(I,{carouselItems:f,carouselType:"price__cards"})]})},w=(t(68),t(69),function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{class:"table",children:[Object(u.jsx)("div",{class:"header"}),Object(u.jsx)("div",{class:"header",children:"MONDAY"}),Object(u.jsx)("div",{class:"header",children:"TUESDAY"}),Object(u.jsx)("div",{class:"header",children:"WEDNESDAY"}),Object(u.jsx)("div",{class:"header",children:"THURSDAY"}),Object(u.jsx)("div",{class:"header",children:"FRIDAY"}),Object(u.jsx)("div",{class:"header",children:"SATURDAY"}),Object(u.jsx)("div",{class:"header",children:"SUNDAY"}),Object(u.jsx)("div",{class:"time",children:"7:00AM"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"time",children:"9:30AM"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"time",children:"10:45AM"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo",children:"STRENGTH"}),Object(u.jsx)("div",{class:"classInfo",children:"STRENGTH"}),Object(u.jsx)("div",{class:"time",children:"4:15PM"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"time",children:"5:30PM"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo",children:"STRENGTH"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo",children:"STRENGTH"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"time",children:"6:45PM"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"time",children:"8:00PM"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsxs)("div",{class:"classInfo",children:["STRENGTH ",Object(u.jsx)("br",{})," CONDITIONING"]}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"}),Object(u.jsx)("div",{class:"classInfo"})]})})}),S=(t(70),function(){return Object(u.jsxs)("div",{className:"classes__container",children:[Object(u.jsx)(w,{}),Object(u.jsx)("h1",{children:"Strength and Conditioning"}),Object(u.jsx)("p",{children:"These classes involve a wide range of exercises developed to build a variety of skills with a focus on mind, mobility, stability, strength, endurance, power, speed, agility and performance. Here at Farrell Fitness you will learn how to perform an exercise correctly and most importantly learn why you perform exercises the way you do. You will not only increase your strength and confidence but you will also improve your body composition. You will look leaner and become stronger."}),Object(u.jsx)("p",{children:"Our classes are suitable for all levels and are tailored to suit your individual needs."}),Object(u.jsx)("p",{children:"What can you expect from our Strength & Conditioning classes?"}),Object(u.jsx)("p",{children:"You can expect to:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Become stronger, leaner and fitter"}),Object(u.jsx)("li",{children:"Get personal attention and advice"}),Object(u.jsx)("li",{children:"Learn correct technique"}),Object(u.jsx)("li",{children:"Build lean muscle"}),Object(u.jsx)("li",{children:"Gain confidence"})]}),Object(u.jsx)("h1",{children:"Strength"}),Object(u.jsx)("p",{children:"The focus in these classes is build technique and physical strength. Here at Farrell Fitness you will learn how to perform an exercise correctly and most importantly learn why you perform exercises the way you do. Our classes are suitable for all levels and are tailored to suit your individual needs."}),Object(u.jsx)("p",{children:"What to expect from our Strength classes?"}),Object(u.jsx)("p",{children:"You can expect to:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Learn correct techniques"}),Object(u.jsx)("li",{children:"Improve your mobility"}),Object(u.jsx)("li",{children:"Learn compound lifts"}),Object(u.jsx)("li",{children:"Learn Olympic lifts"}),Object(u.jsx)("li",{children:"Build muscle"}),Object(u.jsx)("li",{children:"Get strong"}),Object(u.jsx)("li",{children:"Meet new people"}),Object(u.jsx)("li",{children:"Have fun in a safe environment"})]})]})}),E=(t(71),function(e){var s=e.title,t=e.name,n=e.imageUrl;e.caption;return Object(u.jsxs)("div",{className:"personel",children:[Object(u.jsx)("div",{className:"img",children:Object(u.jsx)("img",{src:"".concat("/DRfarrellfitness").concat(n),alt:t})}),Object(u.jsx)("h5",{children:s}),Object(u.jsx)("h5",{children:t}),Object(u.jsxs)("p",{children:["Hi, and a warm welcome to Farrell Fitness. Personally I love meeting people and connecting with them on a personal level. I try to gain as much experience and knowledge from everyone I meet."," ",Object(u.jsx)("span",{children:" Read More..."})]})]})}),G=[{title:"Owner",name:"Robbie",caption:"Hi, and a warm welcome to Farrell Fitness. Personally I love meeting people and connecting with them on a personal level. I try to gain asmuch experience and knowledge from everyone I meet.",imageUrl:"/robbie.jpg"},{title:"Trainer",name:"Eoin",caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut assumenda eius non molestiae autem ut ad iure perspiciatis consequatur corporis dolor, nemo, .",imageUrl:"/eoin.jpg"},{title:"Trainer",name:"Shannon",caption:"Shannon has a huge passion and interest in the health and fitness industry. She\u2019s very outgoing and chatty.",imageUrl:"/shannon.jpg"}],R=(t(72),function(){return Object(u.jsxs)("div",{className:"PT__container",children:[Object(u.jsx)("h1",{children:"Personal Training"}),Object(u.jsx)("p",{children:"Sometimes we need a little help. A gentle push to get us started and to motivate us to achieve our dreams. Personal Training here at Farrell Fitness can provide you with everything you need to start and then continue your fitness journey. We cater for 1 to 1 or semi group personal training. So, whether your goal is to run a marathon, grow muscle and gain definition, lose weight or maybe just to gain confidence to attend classes we are here to help, encourage and motivate you."}),Object(u.jsx)("h2",{children:"How it works"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Come in and meet your instructor"}),Object(u.jsx)("li",{children:"Discuss a plan and set short and long term goals"}),Object(u.jsx)("li",{children:"Get your 3D Body Composition Scan"}),Object(u.jsx)("li",{children:"We will provide and educate you with a personalised nutrition plan"}),Object(u.jsx)("li",{children:"We will then head out to the Gym and teach you all the techniques you need to know"}),Object(u.jsx)("li",{children:"Once we are confident we will progress to our fitness and mobility testing"})]}),Object(u.jsx)("h2",{children:"Our Team"}),G.map((function(e){return Object(u.jsx)(E,Object(h.a)({},e))})),Object(u.jsx)("h3",{children:"ALL YOU NEED TO DO IS TAKE THE FIRST STEP AND CALL US"})]})}),C=[{title:"CUPPING",description:"Cupping is a type of alternative therapy that originated in China. It involves placing cups on the skin to create suction which increases blood circulation to the area where the cups are placed. This can relieve muscle tension and improve overall blood flow and promote cell repair. It can also help form new connective tissues and create new blood vessels in the tissue.",membersPrice:"40",nonMembersPrice:"50",imageUrl:"/cupping.jpg"},{title:"DRY NEEDLING",description:"The aim of Trigger Point Dry Needling is to reduce muscle pain and dysfunction by releasing oversensitive areas in the muscle known as myofascial trigger points. Trigger points can be a source of pain and can commonly refer pain to different areas. Trigger points can develop as a result of overloading a muscle, overuse, or when the body is in a stressed and tense state. When the needle is inserted into the trigger point, the muscle will undergo a localised contraction known as a \u2018twitch\u2019. You may also feel a deep aching in the muscle, both of which are normal reactions and will result in therapeutic benefit from the technique.",membersPrice:"40",nonMembersPrice:"50",imageUrl:"/dry-needle.jpg"},{title:"SPORTS MASSAGE",description:"Therapeutic sports massage is a type of massage technique that focuses on treating soft tissue aches, pain and injuries that are associated with recreational activities. Massage can reduce muscle stiffness and improve relaxation by reducing heart rate and blood pressure.      Benefits of sports massage include: Increased joint range of motion (ROM), increased flexibility, increased sense of well-being, decreased muscle tension, decreased neurological excitability (nerves more relaxed, decreased muscle spasms and better sleep).",membersPrice:"40",nonMembersPrice:"50",imageUrl:"/sports-massage.jpg"}],D=(t(73),function(){return Object(u.jsx)("div",{className:"therapy-page",children:C.map((function(e){var s=e.title,t=e.description,n=e.membersPrice,i=e.nonMembersPrice,c=e.imageUrl;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:"".concat("/DRfarrellfitness"+c),alt:s}),Object(u.jsx)("h2",{children:s}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("h3",{children:["Non-Members \u20ac",i]}),Object(u.jsxs)("h3",{children:["Members \u20ac",n]})]})}))})}),_=t(23),A=(t(74),function(){return Object(u.jsxs)("footer",{children:[Object(u.jsxs)("div",{className:"footer__media",children:[Object(u.jsx)("a",{href:"https://www.facebook.com/farrellfitness17/",children:Object(u.jsx)(j.a,{icon:_.a,className:"facebook"})}),Object(u.jsx)("a",{href:"https://www.instagram.com/farrellfitness17/",children:Object(u.jsx)(j.a,{icon:_.b,className:"instgram"})})]}),Object(u.jsx)("h5",{children:"Find Us Here"}),Object(u.jsxs)("div",{className:"footer__address",children:[Object(u.jsx)("h4",{children:"27 Woodbine Business Park, New Ross, Co. Wexford"}),Object(u.jsx)("h5",{children:"Website designed by David Ronan"})]})]})}),k=[{imageUrl:"/swim-team.jpg",description:"Sport Specific Team Training ideal for Swimming Teams looking to build strength and fitness outside of the pool. Farrell Fitness has been working with New Ross Swimming Club for the past three years, producing some of the best young swimmers in the country."},{imageUrl:"/gaa-team.jpg",description:"Pre-Season Strength and Conditioning Team Training available for GAA, Soccer and Rugby Clubs. Farrell Fitness worked with Cushinstown GAA over a two year period helping them win the County and Leinster Championship. Not only that, they reached the All Ireland Final for the first time in the clubs history."}],P=(t(75),function(){return Object(u.jsx)("div",{className:"teams-page",children:k.map((function(e){var s=e.description,t=e.imageUrl;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:"".concat("/DRfarrellfitness"+t),alt:t}),Object(u.jsx)("h3",{children:s})]})}))})}),U=(t(76),function(){return Object(u.jsx)("div",{children:"Nutrition"})}),H=["/transformation1.jpeg","/transformation2.jpeg","/transformation3.jpeg","/transformation4.jpeg","/transformation5.jpeg","/transformation6.jpeg","/transformation7.jpeg","/transformation8.jpeg","/transformation9.jpeg","/transformation10.jpeg","/transformation11.jpeg","/transformation12.jpeg","/transformation13.jpeg","/transformation14.jpeg","/transformation15.jpeg","/transformation16.jpeg","/transformation17.jpeg","/transformation18.jpeg","/transformation19.jpeg","/transformation20.jpeg","/transformation21.jpeg","/transformation22.jpeg","/transformation23.jpeg","/transformation24.jpeg","/transformation25.jpeg","/transformation26.jpeg","/transformation27.jpeg","/transformation28.jpeg","/transformation29.jpeg","/transformation30.jpeg","/transformation31.jpeg","/transformation32.jpeg","/transformation33.jpeg","/transformation34.jpeg","/transformation35.jpeg","/transformation36.jpeg","/transformation37.jpeg"],M=(t(77),function(){return Object(u.jsxs)("div",{className:"transfromations-page",children:[Object(u.jsx)("h3",{children:"10 Week Transformation Package"}),Object(u.jsxs)("h4",{children:["Our body transformation is an intense program run over 10 weeks (four gym sessions per week). These sessions are a combination of strength and conditioning and focus on helping build strength, gain muscle and in turn loosing body fat.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Each client is assessed at the beginning and at the end of the 10 weeks. Our sessions combined with our nutritional plan will get you the results you seek provided you stick to our plan. The results we have seen in clients over the 10 weeks speak for themselves"," "]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Nutritional Plan"}),Object(u.jsx)("li",{children:"2 fitness tests (Before and After Package)"}),Object(u.jsx)("li",{children:"2 Styku Body Scans (Before and After Package)"}),Object(u.jsx)("li",{children:"Pictures (Before and After Package)"}),Object(u.jsx)("li",{children:"Make new friends"}),Object(u.jsx)("li",{children:"Have great craic in a fun and safe environment"})]}),Object(u.jsx)("h3",{className:"tranformations__price",children:"\u20ac350"}),H.map((function(e){return Object(u.jsx)("img",{src:"/DRfarrellfitness"+e,alt:e})}))]})}),F=(t(78),function(){return Object(u.jsxs)("div",{className:"styku-page",children:[Object(u.jsx)("h2",{children:"3D Body Scanning at Farrell Fitness"}),Object(u.jsx)("h4",{children:"Available to Members and Non-Members"}),Object(u.jsx)("img",{src:"".concat("/DRfarrellfitness","/styku.png"),alt:"styku"}),Object(u.jsxs)("p",{children:["A revolutionary new way to measure body-fat and overall fitness, helping you to set goals and track results",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Ideal for weight management, athletes, body builders, groups and sports clubs.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Skyku appointments will take approximately 15-25 minutes and include the scan and data evaluation.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"A detailed Styku report will be emailed to you and your data will remain in the system for comparison with future scans."]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Measures Body Fat and Overall Fitness"}),Object(u.jsx)("li",{children:"3D Visualisations and Reports"}),Object(u.jsx)("li",{children:"Fast and Accurate Body Measurements"}),Object(u.jsx)("li",{children:"Precisely Track Progress"})]}),Object(u.jsxs)("h3",{children:["Members",Object(u.jsx)("br",{}),"\u20ac40"]}),Object(u.jsxs)("h3",{children:["Non-Members",Object(u.jsx)("br",{}),"\u20ac50"]})]})}),Y=(t(79),function(){return Object(u.jsx)("div",{children:"Shop"})}),B=(t(80),function(){return Object(u.jsx)("div",{children:"Golf"})});var L=function(){return Object(u.jsxs)(a.a,{children:[Object(u.jsx)(p,{}),Object(u.jsx)("main",{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:y}),Object(u.jsx)(r.a,{exact:!0,path:"/classes",component:S}),Object(u.jsx)(r.a,{exact:!0,path:"/personalTraining",component:R}),Object(u.jsx)(r.a,{exact:!0,path:"/physicaltherapy",component:D}),Object(u.jsx)(r.a,{exact:!0,path:"/teams",component:P}),Object(u.jsx)(r.a,{exact:!0,path:"/nutrition",component:U}),Object(u.jsx)(r.a,{exact:!0,path:"/transformations",component:M}),Object(u.jsx)(r.a,{exact:!0,path:"/styku",component:F}),Object(u.jsx)(r.a,{exact:!0,path:"/shop",component:Y}),Object(u.jsx)(r.a,{exact:!0,path:"/golf",component:B})]})}),Object(u.jsx)(A,{})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(s){var t=s.getCLS,n=s.getFID,i=s.getFCP,c=s.getLCP,a=s.getTTFB;t(e),n(e),i(e),c(e),a(e)}))};c.a.render(Object(u.jsx)(L,{}),document.getElementById("root")),W()}},[[81,1,2]]]);
//# sourceMappingURL=main.916d8116.chunk.js.map