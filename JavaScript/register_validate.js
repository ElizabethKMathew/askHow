function formValidation()
{
	var fname = document.registration.first_name.value;  
	var lname = document.registration.last_name.value;  
	var email = document.registration.email.value;  
	var pwd = document.registration.pwd.value;  
	var cpwd = document.registration.cnfrm_pwd.value;  

	var flag=0;

	if (fname=="") {  
  		alert("First name can't be blank");
      	return false;  
	}
	else if(lname=="")
		{  
  		alert("Last name can't be blank");
      	return false;  
	}
	else if(email==""){
  		alert("Email can't be blank");
      	return false;  
	}
	else if(pwd==""){
		alert("Password field can't be blank");
      	return false;  
	}
	else if(cpwd=="")
	{
		alert("Confirm Password field can't be blank");
      	return false;  
	}

	else{
		flag=1;
	}
	if(pwd.length<6 && flag==1){
		alert("Password must be of atleast 6 characters");
		return false;
	}
	else{
		flag=1;
	}
	if(pwd!=cpwd && flag==1){
		alert("Password mismatch");
		return false;
	}
	else{
		flag=1;
	}
	
    var gender=document.registration.gender.value;
    if ( (document.registration.gender[0].checked == false ) && ( document.registration.gender[1].checked == false ) ) 
    { 
    	alert( "Please choose your Gender: Male or Female" ); 
    	return false;
    } 

    var language=document.registration.language.value;
     
     if ( (document.registration.language[0].checked == false ) && ( document.registration.language[1].checked == false ) && ( document.registration.language[2].checked == false )) 
    { 
    	alert( "Please choose your language" ); 
    	return false;
    }
  
   var countryName=document.registration.country.value;
    if(countryName == "select")  
    {  
    	alert('Select your country from the list');  
    	return false;  
    }
    if(flag==1)
    {
    	alert("form successfully submitted");
    	return true;
    }

    
}



    
  