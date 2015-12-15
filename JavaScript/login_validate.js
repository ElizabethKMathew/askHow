function formValidation()
{
	var usermail=document.getElementById("uemail");
	var pwd=document.getElementById("pwd");
	var pwd_len = pwd.value.length;  
		if(pwd==""||pwd_len<6)
		{
			alert("Password should not be empty / Password must be atleast 6 characters");  
			pwd.focus();  
			return false;  
		}  
		else
		{
			location.href="../HTML/welcome.html?userEmail="+usermail.value;
			alert("Successfully submitted");
			return true;  
		}

}
	
	



