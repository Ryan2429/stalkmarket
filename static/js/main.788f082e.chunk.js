(this.webpackJsonpstalkmarket=this.webpackJsonpstalkmarket||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),i=a(4),u=a(5),c=a(7),o=a(6),m=(a(2),function(e){var t=e.day;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"logo-font"},"STALK MARKET"),r.a.createElement("h4",{className:"logo-font-smaller",style:{lineHeight:1}},"Buy turnips to begin playing!",r.a.createElement("br",null),"Get 3000 bells to win!"),r.a.createElement("h5",{className:"today"},"Today is ",t,"!")))}),d=function(e){var t=e.day,a=e.turnipPrice,n=e.buyTurnips;return r.a.createElement("div",null,"Sunday"===t?r.a.createElement("div",null,r.a.createElement("button",{onClick:n,className:"buyTurnips"},"Click To Buy Turnips!",r.a.createElement("br",null),"The turnip price today is: ",a," bells")):null)},y=function(e){var t=e.day,a=e.turnipPrice,n=e.sellTurnips;return r.a.createElement("div",null,"Sunday"!==t?r.a.createElement("div",null,r.a.createElement("button",{onClick:n,className:"sellTurnips"},"Click To Sell Turnips!",r.a.createElement("br",null),"The turnip price today is: ",a," bells")):null)},p=function(e){var t=e.bells,a=e.turnips;return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://www.models-resource.com/resources/big_icons/36/35107.png",height:"300em",width:"350em",alt:"bells"}),r.a.createElement("h1",{className:"bellText"},t),r.a.createElement("img",{src:"https://wyspstore2.s3.amazonaws.com/thumbs/823851001-th.png",height:"300em",width:"250em",alt:"turnips"}),r.a.createElement("h1",{className:"turnipText"},a)))},h=function(e){var t=e.toNextDay;return r.a.createElement("button",{className:"nextDay",onClick:t},"Proceed to the next day!")},b=function(e){var t=e.removeRules;return r.a.createElement("div",{style:{backgroundImage:"url('https://wallpaperaccess.com/full/164553.png')",zIndex:"1",position:"fixed",color:"black",fontFamily:"Cute Font",fontSize:"1rem",textAlign:"left",paddingRight:"5%",paddingLeft:"5%",bottom:0,top:0,left:0,right:0}},r.a.createElement("h2",null,"Welcome to",r.a.createElement("span",{style:{fontSize:"1.8rem"}}," ",r.a.createElement("u",null,"Stalk Market!"))," The following are the rules:"),r.a.createElement("h2",null,r.a.createElement("ul",null,"* Earn 3000 bells to win!"),r.a.createElement("ul",null,"* Turnips can be bought but not sold on Sunday. If it is Sunday and you still have turnips they will ",r.a.createElement("i",null,r.a.createElement("u",null,"ROT AWAY!"))),r.a.createElement("ul",null,"* If you don't have enough bells to buy turnips, you lose!")),r.a.createElement("button",{className:"startGame",onClick:t},"Press Here To Start!"))},E=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).removeRules=function(){n.setState({gameStarted:!0})},n.newGame=function(){var e=Math.floor(60*Math.random()+50);n.setState({bells:1e3,turnips:0,day:"Sunday",turnipPrice:e,gameStarted:!1})},n.buyTurnips=function(){var e=n.state.turnips,t=n.state.bells,a=n.state.turnipPrice;t>a&&n.setState({bells:t-a,turnips:e+1}),0===e&&a>t&&(alert("Game Over! You ran out of bells! Sorry, press OK to start a New Game!"),n.newGame())},n.sellTurnips=function(){var e=n.state.turnips,t=n.state.bells,a=n.state.turnipPrice;e>0&&n.setState({turnips:e-1,bells:t+a}),t>3e3&&(alert("You won! Click OK to start a New Game!"),n.newGame())},n.toNextDay=function(){var e=Math.floor(60*Math.random()+50);"Sunday"===n.state.day?n.setState({day:"Monday",turnipPrice:e}):"Monday"===n.state.day?n.setState({day:"Tuesday",turnipPrice:e}):"Tuesday"===n.state.day?n.setState({day:"Wednesday",turnipPrice:e}):"Wednesday"===n.state.day?n.setState({day:"Thursday",turnipPrice:e}):"Thursday"===n.state.day?n.setState({day:"Friday",turnipPrice:e}):"Friday"===n.state.day?n.setState({day:"Saturday",turnipPrice:e}):"Saturday"===n.state.day&&n.setState({day:"Sunday",turnipPrice:e,turnips:0})};var r=Math.floor(60*Math.random()+50);return n.state={turnipPrice:r,bells:1e3,day:"Sunday",turnips:0,gameStarted:!1},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,!1===this.state.gameStarted?r.a.createElement(b,{removeRules:this.removeRules}):r.a.createElement("div",{className:"background1"},r.a.createElement(m,{day:this.state.day}),r.a.createElement("div",null,r.a.createElement(d,{day:this.state.day,turnipPrice:this.state.turnipPrice,buyTurnips:this.buyTurnips}),r.a.createElement(y,{day:this.state.day,turnipPrice:this.state.turnipPrice,sellTurnips:this.sellTurnips})),r.a.createElement(h,{toNextDay:this.toNextDay,day:this.state.day}))),r.a.createElement("div",{className:"background2"},r.a.createElement(p,{bells:this.state.bells,turnips:this.state.turnips})))}}]),a}(r.a.Component);s.a.render(r.a.createElement(E,null),document.getElementById("root"))},2:function(e,t,a){},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.788f082e.chunk.js.map