(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=(n(12),n(0)),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={today:new Date},e.setTimerForDate=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setTimerForDate=window.setInterval((function(){e.setState({today:new Date}),console.info(e.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.name;e.name!==t&&console.debug("Renamed from ".concat(e.name," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.setTimerForDate)}},{key:"render",value:function(){var e=this.props.name,t=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);function m(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.setTimerForClockName=window.setInterval((function(){e.setState({clockName:m()})}),3300),e.handleRemoveClock=function(){e.setState({hasClock:!1})},e.handleAddClock=function(){e.setState({hasClock:!0})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.addEventListener("contextmenu",this.handleRemoveClock),document.addEventListener("click",this.handleAddClock)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleRemoveClock),document.removeEventListener("click",this.handleAddClock)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(d,{name:t})]})}}]),n}(l.Component);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.581a30bf.chunk.js.map