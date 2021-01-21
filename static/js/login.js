// stops form from reloading page (thx stackoverflow!!!)
var form = document.getElementById("loginform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// applying js func to login button
document.getElementById("loginbtn").onclick = login;
function login() {
	var formdata = $('form').serializeJSON()
	console.log(formdata);
	document.getElementById("usernamereturn").textContent = "Your username: " + formdata.username
	document.getElementById("passwordreturn").textContent = "Your password: " + formdata.password
}