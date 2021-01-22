// stops form from reloading page (thx stackoverflow!!!)
var form = document.getElementById("registerform");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// applying js func to login button
// document.getElementById("registerbtn").onclick = getRegisterResponse;

function updatePage(data) {
	document.getElementById("datareturn").textContent = "Returned data: " + JSON.stringify(data);
}

function getRegisterResponse() {
	var formJson = $('form').serializeJSON()
	console.log(formJson);
	formJson.type = "register"
	$.post("https://ipratt-codedb.thingcoder1.repl.co/register",
	formJson,
	function(data){
		data = JSON.parse(data);
		if(data.error != undefined){
			window.alert(data.error);
		}
		updatePage(data);
    });
}