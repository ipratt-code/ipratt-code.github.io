// stops form from reloading page (thx stackoverflow!!!)
var form = document.getElementById("loginform");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// applying js func to login button
// document.getElementById("loginbtn").onclick = getLoginResponse;
function updatePage(data) {
	document.getElementById("datareturn").textContent = "Returned data: " + JSON.stringify(data);
}

function getLoginResponse() {
	var formJson = $('form').serializeJSON()
	formJson.type = "login"
	$.post("https://ipratt-codedb.thingcoder1.repl.co/login",
	formJson,
	function(data){
		data = JSON.parse(data);
		if(data.error != undefined){
			if(data.error == "username does not exist"){
				window.alert("username does not exist");
				location.href = 'register';
			} else if(data.error == "incorrect password"){
				window.alert("incorrect password");
				location.href = 'login';
			}

		}
		updatePage(data);
    });
}