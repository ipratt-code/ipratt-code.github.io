/*
*	NodTalk.js: a way to communicate through Nod WebSockets
*	Made by github user CompactCow
*	On January 22 2021
*/

var nodSocket=new WebSocket("wss://j24amtdvi4.execute-api.us-east-1.amazonaws.com/prod"),name="";function sendJson(e){nodSocket.send(JSON.stringify(e))}function sendMessage(){""==name&&(name=document.getElementById("userName").value,document.getElementById("userName").disabled=!0),document.getElementById("userName").disabled=!0,sendJson({action:"MESSAGE",message:{id:"chat",emoji:document.getElementById("message").value,username:name,img:"",tone:""}}),document.body.innerHTML+="You: "+document.getElementById("message").value+"<br>"}nodSocket.onmessage=function(e){console.log(e.data);var n=JSON.parse(e.data),e=n.message.username,n=n.message.emoji;document.body.innerHTML+=e+": "+n+"<br>"},nodSocket.onopen=function(e){sendJson({route:"join",data:{id:"chat",team:"lt"}});setInterval(()=>{console.log("Keeping Nod alive..."),sendJson({route:"ping"})},54e4)};