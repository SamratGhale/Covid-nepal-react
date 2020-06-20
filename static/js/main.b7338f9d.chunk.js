(this["webpackJsonpCovid-nepal-react"]=this["webpackJsonpCovid-nepal-react"]||[]).push([[0],{151:function(t,a,e){"use strict";e.r(a);var r=e(0),n=e.n(r),s=e(46),i=e.n(s),c=e(29),o=e.n(c),l=e(47),d=e(5),h=e(6),u=e(8),p=e(7),m=(e(55),e(9)),v=function(t){var a=t.chartData;return window.matchMedia("(max-width:767px)").matches?n.a.createElement("div",{className:"chart"},n.a.createElement(m.b,{data:a,height:350,options:{title:{display:"Apple",text:"Nepal's timeline",fontSize:25}}})):n.a.createElement("div",{className:"chart"},n.a.createElement(m.b,{data:a,options:{title:{display:"Apple",text:"Nepal's timeline",fontSize:25}}}))},b=function(t){Object(u.a)(e,t);var a=Object(p.a)(e);function e(t){var r;return Object(d.a)(this,e),(r=a.call(this,t)).state={chartData:t.chartData},r}return Object(h.a)(e,[{key:"render",value:function(){return n.a.createElement(v,{chartData:this.props.chartData})}}]),e}(r.Component);b.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"City"};var f=function(t){var a=t.chartData,e=t.displayTitle;return window.matchMedia("(max-width:767px)").matches?n.a.createElement("div",{className:"chart"},n.a.createElement(m.a,{data:a,width:100,height:100,options:{labels:!1,maintainAspectRatio:!0,title:{display:!0,text:e,fontSize:25}}})):n.a.createElement("div",{className:"chart"},n.a.createElement(m.a,{data:a,options:{maintainAspectRatio:!0,title:{display:!0,text:e,fontSize:25}}}))},g=function(t){Object(u.a)(e,t);var a=Object(p.a)(e);function e(t){var r;return Object(d.a)(this,e),(r=a.call(this,t)).state={chartData:t.chartData,displayTitle:t.displayTitle},r}return Object(h.a)(e,[{key:"render",value:function(){return n.a.createElement(f,{chartData:this.props.chartData,displayTitle:this.props.displayTitle})}}]),e}(r.Component);g.defaultProps={};var w=function(t){Object(u.a)(e,t);var a=Object(p.a)(e);function e(){var t;Object(d.a)(this,e);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=a.call.apply(a,[this].concat(n))).state={loading:!0,data:null},t}return Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var a,e,r,n,s,i,c,l,d,h,u,p,m,v,b,f,g,w,D=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://data.nepalcorona.info/api/v1/covid/timeline?format=json","https://api.covid19api.com/world",t.next=4,fetch("https://api.covid19api.com/world");case 4:return e=t.sent,t.next=7,fetch(a);case 7:return r=t.sent,t.next=10,r.json();case 10:return n=t.sent,t.next=13,e.json();case 13:s=t.sent,this.setState({data:n,dataWorld:s,loading:!1}),i=[],c=[],l=[],d=[],h=[],u=this.state.dataWorld.slice(-1),this.state.data.map((function(t){return t.index=D.state.data.indexOf(t)})),this.state.data.map((function(t){return i.push(t.date)})),this.state.data.map((function(t){return h.push(t.index)})),this.state.data.map((function(t){return c.push(t.newCases)})),this.state.data.map((function(t){return l.push(t.newDeaths)})),this.state.data.map((function(t){return d.push(t.newRecoveries)})),p=c.slice(85,-2),m=i.slice(85,-2),v=l.slice(85,-2),b=d.slice(85,-2),f=[],this.state.data.map((function(t){return f.push(t.totalRecoveries)})),g=[],this.state.data.map((function(t){return g.push(t.totalDeaths)})),w=[],this.state.data.map((function(t){return w.push(t.totalCases)})),console.log(w.slice(-1)),this.setState({chartData3:{labels:["active cases","new recovered","new deaaths"],datasets:[{data:[u[0].TotalConfirmed-u[0].TotalRecovered-u[0].TotalDeaths,u[0].TotalRecovered,u[0].TotalDeaths],backgroundColor:["rgba(207,47,95)","rgba(193,232,0)","rgba( 26, 13, 0)"],hoverBackgroundColor:"rgba(220,232,144)",hoverBorderColor:"rgba(0,220,220,1)",borderWidth:2}]}}),this.setState({chartData2:{labels:["active cases","new recovered","new deaaths"],datasets:[{data:[w.slice(-1)-f.slice(-1)-g.slice(-1),f.slice(-1),g.slice(-1)],backgroundColor:["rgba(207,47,95)","rgba(193,232,0)","rgba( 26, 13, 0)"],hoverBackgroundColor:"rgba(220,232,144)",hoverBorderColor:"rgba(0,220,220,1)",borderWidth:2}]}}),this.setState({chartData:{labels:m,datasets:[{label:"new cases",data:p,backgroundColor:["rgba(207,47,95,0.6)"]},{label:"new recovered",data:b,backgroundColor:["rgba(193,232,0)"]},{label:"new deaths",data:v,backgroundColor:["rgba(0, 0, 0, 1)"]}]}});case 41:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,this.state.loading||!this.state.data?n.a.createElement("div",null," loading..."):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"rowC"},n.a.createElement("div",{className:"row1"},n.a.createElement(g,{chartData:this.state.chartData2,displayTitle:"Nepal's data"})),n.a.createElement("div",{className:"row2"},n.a.createElement(g,{chartData:this.state.chartData3,displayTitle:"World's data"}))),n.a.createElement(b,{chartData:this.state.chartData})))}}]),e}(n.a.Component);i.a.render(n.a.createElement(w,null),document.getElementById("root"))},49:function(t,a,e){t.exports=e(151)},55:function(t,a,e){}},[[49,1,2]]]);
//# sourceMappingURL=main.b7338f9d.chunk.js.map