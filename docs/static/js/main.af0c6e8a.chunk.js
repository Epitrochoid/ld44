(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},19:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),o=a.n(s),r=(a(18),a(2)),l=a(3),i=a(5),m=a(4),d=a(1),u=a(6),f=(a(19),a(10)),h=a(11),v=a(7),p=(a(23),a(24),{BASE_HIT_NUMBER:8,HIT_DICE_SIDES:12});function y(e,t){console.log("In resolveMelee");var a,n=p.BASE_HIT_NUMBER+e.stats.acc-t.stats.eva+Math.floor(Math.random()*p.HIT_DICE_SIDES+1),c=Math.max(function(e,t){return e.baseDmg+e.stats.str-t.stats.def}(e,t),0);if(n<=1)a="".concat(e.name," fails to land a hit! ").concat(t.name," received no damage!");else if(n<=10&&n>=2){var s=Math.floor(.5*c);t.hp=t.hp-s,a="".concat(e.name," lands a glancing blow upon ").concat(t.name,". ").concat(s," damage was dealt")}else if(n>=20){var o=Math.max(2*c,1);t.hp=t.hp-o,a="".concat(e.name," lands a critical hit! ").concat(o," damage oozes out from ").concat(t.name)}else t.hp=t.hp-c,a="".concat(e.name," hits ").concat(t.name,". ").concat(c," damage was dealt");return console.log("Out resolveMelee"),{attacker:e,defender:t,logMessage:a}}var E=[{id:0,name:"Earthquake",type:"damage",cost:{str:1},effect:{damage:5}},{id:1,name:"Blood Boil",type:"damage",cost:{def:1},effect:{damage:5}},{id:2,name:"Bolt Throw",type:"damage",cost:{acc:1},effect:{damage:5}},{id:3,name:"Shadow Strike",type:"damage",cost:{eva:1},effect:{damage:5}},{id:4,name:"Sap",type:"debuff",cost:{acc:1},effect:{debuffStr:5}},{id:5,name:"Fraility",type:"debuff",cost:{eva:1},effect:{debuffStr:5}},{id:6,name:"Bewilder",type:"debuff",cost:{acc:1},effect:{debuffDef:5}},{id:7,name:"Spore Cloud",type:"debuff",cost:{eva:1},effect:{debuffDef:5}},{id:8,name:"Haze",type:"debuff",cost:{str:1},effect:{debuffAcc:5}},{id:9,name:"Dust Devil",type:"debuff",cost:{def:1},effect:{debuffAcc:5}},{id:10,name:"Sand Trap",type:"debuff",cost:{str:1},effect:{debuffEva:5}},{id:11,name:"Freeze",type:"debuff",cost:{def:1},effect:{debuffEva:5}},{id:12,name:"Cauterize",type:"heal",cost:{con:1},effect:{heal:1}},{id:13,name:"Cauterize",type:"heal",cost:{con:1},effect:{heal:1}},{id:14,name:"Cauterize",type:"heal",cost:{con:1},effect:{heal:1}}];var g=function(e){if(e>=E.length)return E;for(var t=[];t.length<e;){var a=Math.floor(Math.random()*E.length);-1===t.indexOf(a)&&t.push(a)}var n=[];return t.forEach(function(e){n.push(E[e])}),n},b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).castSpell=function(t){console.log("in cast spell",t,Object(d.a)(e));var a=e.addLogMessage(e.state.combatLog,"You cast ".concat(t.name)),n=function(e,t,a){var n;return a.cost.str&&(e.stats.str=e.stats.str-a.cost.str),a.cost.def&&(e.stats.def=e.stats.def-a.cost.def),a.cost.acc&&(e.stats.acc=e.stats.acc-a.cost.acc),a.cost.eva&&(e.stats.eva=e.stats.eva-a.cost.eva),a.cost.con&&(e.stats.con=e.stats.con-a.cost.con),a.effect.damage&&(t.hp=t.hp-a.effect.damage,n="".concat(t.name," is seared for ").concat(a.effect.damage," magical damage!")),a.effect.debuffStr&&(t.stats.str=Math.max(t.stats.str-a.effect.debuffStr,0),n="".concat(t.name," appears to struggle lifting their weapon")),a.effect.debuffDef&&(t.stats.def=Math.max(t.stats.def-a.effect.debuffDef,0),n="".concat(t.name," looks confused and is no longer bracing themselves against an attack")),a.effect.debuffAcc&&(t.stats.acc=Math.max(t.stats.acc-a.effect.debuffAcc,0),n="".concat(t.name," squints their eyes as they look off to your left")),a.effect.debuffEva&&(t.stats.eva=Math.max(t.stats.eva-a.effect.debuffEva,0),n="".concat(t.name," stumbles around as they loose their footing")),a.effect.heal&&(e.hp=e.stats.con,n="As your wounds close, you feel much better.  Kind of..."),{attacker:e,defender:t,logMessage:n}}(e.state.player,e.state.enemy,t);n.attacker.cards=[];var c=e.addLogMessage(a,n.logMessage);n.defender.hp<=0?e.state.endEncounter(!0,n.attacker):e.setState({player:n.attacker,enemy:n.defender,enableAction:!1,combatLog:c})},e.state={player:{stats:{}},enemy:{stats:{}},enableAction:!0,combatLog:[],endEncounter:function(){}},e._displayActions=e.displayActions.bind(Object(d.a)(e)),e._attack=e.attack.bind(Object(d.a)(e)),e._defend=e.defend.bind(Object(d.a)(e)),e._draw=function(){var t;return(t=e).draw.apply(t,arguments)},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"displayActions",value:function(){return this.state.player.cards&&0!==this.state.player.cards.length?c.a.createElement("div",{className:"button-box"}):c.a.createElement("div",{className:"button-box"},c.a.createElement(v.AwesomeButton,{type:"primary",onPress:this._attack},"Attack"),c.a.createElement(v.AwesomeButton,{type:"secondary",onPress:this._draw},"Cast Blood Magic"))}},{key:"attack",value:function(){if(console.log("In attack"),this.state.enableAction){var e=y(this.state.player,this.state.enemy);console.log("!!",e);var t=this.addLogMessage(this.state.combatLog,e.logMessage);e.defender.hp<=0?this.state.endEncounter(!0,e.attacker):this.setState({player:e.attacker,enemy:e.defender,enableAction:!1,combatLog:t})}}},{key:"defend",value:function(){console.log("In defend (being attacked)");var e=y(this.state.enemy,this.state.player),t=this.addLogMessage(this.state.combatLog,e.logMessage);e.defender.hp<=0?this.state.endEncounter(!1,e.defender):this.setState({player:e.defender,enemy:e.attacker,enableAction:!0,combatLog:t})}},{key:"draw",value:function(){console.log("draw");var e=this.state.player,t=Object(h.a)({},e,{cards:Object(f.a)(g(3))});this.setState({player:t})}},{key:"addLogMessage",value:function(e,t){for(e.unshift(t);e.length>10;)e.pop();return e}},{key:"displayEntity",value:function(e){return c.a.createElement("div",{className:"entity-data"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"info-column column"},e.name),c.a.createElement("div",{className:"stat-name-column column"},"Str"),c.a.createElement("div",{className:"stat-value-column column"},e.stats.str)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"info-column column"},"Base DMG: ",e.baseDmg),c.a.createElement("div",{className:"stat-name-column column"},"Def"),c.a.createElement("div",{className:"stat-value-column column"},e.stats.def)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"info-column column"},"HP: ",e.hp),c.a.createElement("div",{className:"stat-name-column column"},"Acc"),c.a.createElement("div",{className:"stat-value-column column"},e.stats.acc)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"info-column column"}),c.a.createElement("div",{className:"stat-name-column column"},"Eva"),c.a.createElement("div",{className:"stat-value-column column"},e.stats.eva)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"info-column column"}),c.a.createElement("div",{className:"stat-name-column column"},"Const"),c.a.createElement("div",{className:"stat-value-column column"},e.stats.con)))}},{key:"componentWillReceiveProps",value:function(e){console.log("in component will receive props",e);var t=e.player,a=e.enemy,n=e.endEncounter;this.setState({player:t,enemy:a,endEncounter:n})}},{key:"componentDidUpdate",value:function(e){console.log("in component did update",e),!1===this.state.enableAction&&this.defend()}},{key:"componentDidMount",value:function(){console.log("in component did mount",this.props);var e=this.props,t=e.player,a=e.enemy,n=e.endEncounter;this.setState({player:t,enemy:a,endEncounter:n})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"column"},this.displayEntity(this.state.player)),c.a.createElement("div",{class:"column"},this.displayEntity(this.state.enemy))),this.displayActions(),c.a.createElement(k,{cards:this.state.player.cards,handler:this.castSpell}),c.a.createElement(w,{logs:this.state.combatLog}))}}]),t}(n.Component),k=function(e){var t=e.cards,a=void 0===t?[]:t,n=e.handler,s=void 0===n?function(){}:n;return c.a.createElement("div",{className:"hand"},a.map(function(e){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("div",{className:"title"},e.name),c.a.createElement("div",{className:"spacing"},c.a.createElement("strong",null,"Cost:")," ",function(e){var t=[];e.str&&t.push("-".concat(e.str," STR"));e.def&&t.push("-".concat(e.def," DEF"));e.acc&&t.push("-".concat(e.acc," ACC"));e.eva&&t.push("-".concat(e.eva," EVA"));e.con&&t.push("-".concat(e.con," CON"));return t.join(", ")}(e.cost),c.a.createElement("br",null),c.a.createElement("strong",null,"Effect:")," ",function(e){var t=[];e.damage&&t.push("Deals ".concat(e.damage," magical damage"));e.debuffStr&&t.push("Lowers enemy STR by ".concat(e.debuffStr));e.debuffDef&&t.push("Lowers enemy DEF by ".concat(e.debuffDef));e.debuffAcc&&t.push("Lowers enemy ACC by ".concat(e.debuffAcc));e.debuffEva&&t.push("Lowers enemy EVA by ".concat(e.debuffEva));e.heal&&t.push("Heals your HP back to full");return t.join("<br/>")}(e.effect),c.a.createElement("br",null)),c.a.createElement("button",{className:"action",onClick:function(){s(e)}},"Play!"))}))},w=function(e){var t=e.logs,a=void 0===t?[]:t;return c.a.createElement("div",{className:"log-container"},"Combat Log:",a.map(function(e){return c.a.createElement("div",{className:"log-message"},e)}))};var N=b,M=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={player:{stats:{},baseDmg:2,cards:[]},enemy:{id:0},inEncounter:!1,isGameOver:!1},e._endEncounter=e.endEncounter.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"endEncounter",value:function(e,t){console.log("Encounter over, player won: ",e,t),this.setState({inEncounter:!1,isGameOver:!e,player:t})}},{key:"startNewEncounter",value:function(){var e=this.randomEnemy();e.id=this.state.enemy.id+1,this.setState({enemy:e,inEncounter:!0})}},{key:"newPlayer",value:function(){return{name:"Player",stats:{acc:10,eva:10,str:10,def:10,con:10},baseDmg:2,hp:10}}},{key:"randomEnemy",value:function(){return{name:"Reaper",stats:{acc:Math.floor(4*Math.random()+8),eva:Math.floor(4*Math.random()+8),str:Math.floor(4*Math.random()+8),def:Math.floor(4*Math.random()+8),con:10},baseDmg:Math.floor(2*Math.random()+1),hp:10}}},{key:"startNewGame",value:function(){var e=this.newPlayer();this.setState({player:e});this.setState({enemy:{name:"Reaper",stats:{acc:10,eva:10,str:8,def:5,con:10},baseDmg:1,hp:10,id:1},inEncounter:!0,isGameOver:!1})}},{key:"componentDidMount",value:function(){this.startNewGame()}},{key:"render",value:function(){var e=this;return this.state.inEncounter?(console.log("In encounter with eneemy: ",this.state.enemy),c.a.createElement("div",{className:"World"},c.a.createElement(N,{player:this.state.player,enemy:this.state.enemy,endEncounter:this._endEncounter,key:this.state.enemy.id}))):this.state.isGameOver?c.a.createElement("div",null,c.a.createElement("p",null,"You failed"),c.a.createElement("button",{onClick:function(){return e.startNewGame()}},"Try again?")):c.a.createElement("div",null,c.a.createElement("p",null,"Another one bites the dust"),c.a.createElement("button",{onClick:function(){return e.startNewEncounter()}},"Keep going"))}}]),t}(n.Component);var S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.af0c6e8a.chunk.js.map