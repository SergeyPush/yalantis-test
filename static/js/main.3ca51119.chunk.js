(this.webpackJsonptask_yalantis=this.webpackJsonptask_yalantis||[]).push([[0],{2:function(e,a,t){e.exports={calendar:"Calendar_calendar__1CkyC",calendar_item:"Calendar_calendar_item__1xgj8",user_list:"Calendar_user_list__1TUBs",label:"Calendar_label__gxF4M",list_item:"Calendar_list_item__3_aUL",body:"Calendar_body__24bIr",red:"Calendar_red__2rLsW",gray:"Calendar_gray__2LdFG",blue:"Calendar_blue__UoJgo",green:"Calendar_green__2n6ni"}},22:function(e,a,t){e.exports=t(47)},27:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),s=(t(27),t(4)),i=t(19),u=t(7),o=t(6),_=t.n(o),d=t(20),m=t(8),b=t(21),f=t.n(b),p=(t(46),t(2)),y=t.n(p),g=function(e){var a=e.userList;return r.a.createElement("div",{className:y.a.calendar},["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e,t){var n,c=(n=a[t].length)<=2?"gray":n>=3&&n<=6?"blue":n>=7&&n<=10?"green":"red";return r.a.createElement("div",{className:y.a.calendar_item,key:t},r.a.createElement("div",{className:"".concat(y.a.label," ").concat(y.a[c])}," ",e),r.a.createElement("div",{className:y.a.body},a[t].length),r.a.createElement("ul",{className:y.a.user_list},a[t].map((function(e,a){return r.a.createElement("li",{className:y.a.list_item,key:a},e)}))))})))};var v=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),b=o[0],p=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(_.a.mark((function e(){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,f.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 3:a=e.sent,c(a.data),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c,p]),r.a.createElement("div",{className:"container"},b?"Loading...":null,t.length>0&&r.a.createElement(g,{userList:t.reduce((function(e,a){var t=a.firstName,n=a.lastName,r=a.dob,c=new Date(r).getMonth(),l="".concat(t," ").concat(n),o=void 0===e[c]?[]:Object(u.a)(e[c]);return Object(i.a)({},e,Object(s.a)({},c,[].concat(Object(u.a)(o),[l])))}),{})}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3ca51119.chunk.js.map