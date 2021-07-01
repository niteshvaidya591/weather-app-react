(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),d=i(4),l=i.n(d),r=(i(13),i(5)),s=i(6),j=i(2),h=i(8),a=i(7),b=(i(14),i(0));var o=function(e){return Object(b.jsxs)("article",{children:[null!=e.info?Object(b.jsx)("h3",{children:"Weather Calendar details"}):null,null!=e.info?Object(b.jsxs)("table",{id:"weatherClimate",children:[Object(b.jsxs)("thead",{children:[Object(b.jsx)("th",{children:"Date"}),Object(b.jsx)("th",{children:"Avg Temp C"}),Object(b.jsx)("th",{children:"Avg Temp F"}),Object(b.jsx)("th",{children:"Max Temp C"}),Object(b.jsx)("th",{children:"Max Temp F"}),Object(b.jsx)("th",{children:"Min Temp C"}),Object(b.jsx)("th",{children:"Min Temp F"}),Object(b.jsx)("th",{children:"Sun Hour"}),Object(b.jsx)("th",{children:"Total Snow cm"}),Object(b.jsx)("th",{children:"UV index"})]}),Object(b.jsx)("tbody",{children:e.info.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.date}),Object(b.jsx)("td",{children:e.avgtempC}),Object(b.jsx)("td",{children:e.avgtempF}),Object(b.jsx)("td",{children:e.maxtempC}),Object(b.jsx)("td",{children:e.maxtempF}),Object(b.jsx)("td",{children:e.mintempC}),Object(b.jsx)("td",{children:e.mintempF}),Object(b.jsx)("td",{children:e.sunHour}),Object(b.jsx)("td",{children:e.totalSnow_cm}),Object(b.jsx)("td",{children:e.uvIndex})]},t)}))})]}):null]})};var O=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("section",{id:"weatherCurrentCondition",children:[null!=e.info?Object(b.jsx)("h3",{children:"Current weather condition"}):null,null!=e.info?e.info.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Feels like in C"}),Object(b.jsx)("p",{children:e.FeelsLikeC})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Feels like in F"}),Object(b.jsx)("p",{children:e.FeelsLikeF})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Cloud Cover"}),Object(b.jsx)("p",{children:e.cloudcover})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Humidity"}),Object(b.jsx)("p",{children:e.humidity})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Observed time"}),Object(b.jsx)("p",{children:e.observation_time})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Precip Inches"}),Object(b.jsx)("p",{children:e.precipInches})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Precip MM"}),Object(b.jsx)("p",{children:e.precipMM})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Pressure"}),Object(b.jsx)("p",{children:e.pressure})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Pressure Inches"}),Object(b.jsx)("p",{children:e.pressureInches})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Temp C"}),Object(b.jsx)("p",{children:e.temp_C})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Temp F"}),Object(b.jsx)("p",{children:e.temp_F})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"UV index"}),Object(b.jsx)("p",{children:e.uvIndex})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Visibility"}),Object(b.jsx)("p",{children:e.visibility})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Visibility miles"}),Object(b.jsx)("p",{children:e.visibilityMiles})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Weather code"}),Object(b.jsx)("p",{children:e.weatherCode})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Weather Type"}),Object(b.jsx)("p",{children:e.weatherDesc[0].value})]}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:e.weatherIconUrl[0].value})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Wind direction"}),Object(b.jsx)("p",{children:e.winddir16Point})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Wind degree"}),Object(b.jsx)("p",{children:e.winddirDegree})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Wind speed KMPH"}),Object(b.jsx)("p",{children:e.windspeedKmph})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Wind speed Miles"}),Object(b.jsx)("p",{children:e.windspeedMiles})]})]},t)})):null]})})},x=function(e){Object(h.a)(i,e);var t=Object(a.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={place:"bangalore",info:[],error:""},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.callApi=n.callApi.bind(Object(j.a)(n)),n}return Object(s.a)(i,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState({place:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();/[a-zA-Z]+/.test(this.state.place)?this.callApi():this.setState({error:"Invalid city name given",info:[]})}},{key:"callApi",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({place:this.state.place})};fetch("https://weather591.herokuapp.com/weather/place",t).then((function(e){return e.json()})).then((function(t){return e.setState({info:t})})),this.setState({error:""})}},{key:"render",value:function(){var e,t,i,n,c,d,l,r,s,j,h,a,x,p,u,v,m;return Object(b.jsxs)("div",{id:"weatherApp",children:[Object(b.jsx)("h1",{children:"Weather App"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("label",{htmlFor:"weatherSearch",children:"Enter the place name to get weather information"}),Object(b.jsx)("input",{id:"weatherSearch",value:this.state.place,onChange:this.handleChange,placeholder:"Enter the city name"}),Object(b.jsx)("input",{type:"submit",value:"Get Weather Info"})]}),Object(b.jsxs)("div",{id:"weatherInfo",children:[0!==this.state.info.length?Object(b.jsxs)("h2",{children:['You searched for the place \xa0"',Object(b.jsxs)("strong",{children:[null===(e=this.state.info)||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.request.map((function(e){return e.query})),'"']})]}):Object(b.jsx)("h2",{className:"error",children:this.state.error}),console.log(null===(n=this.state.info)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.data),Object(b.jsx)(O,{info:""!==(null===(d=this.state.info)||void 0===d||null===(l=d.data)||void 0===l||null===(r=l.data)||void 0===r?void 0:r.current_condition)?null===(s=this.state.info)||void 0===s||null===(j=s.data)||void 0===j||null===(h=j.data)||void 0===h?void 0:h.current_condition:null}),Object(b.jsx)(o,{info:""!==(null===(a=this.state.info)||void 0===a||null===(x=a.data)||void 0===x||null===(p=x.data)||void 0===p?void 0:p.weather)?null===(u=this.state.info)||void 0===u||null===(v=u.data)||void 0===v||null===(m=v.data)||void 0===m?void 0:m.weather:null})]})]})}}]),i}(c.a.Component);l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("weather"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c06ada3.chunk.js.map