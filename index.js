function validate(){
	var username = document.querySelector(".usern")
	var password = document.querySelector(".passw")
	
	if(username.value =="" ||password.value=="")
	{
		alert("invalid")
	}else{
		alert("welcome")
	}
}