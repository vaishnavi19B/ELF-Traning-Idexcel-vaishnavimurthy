function validateEmail(){
    var email=document.getElementById('email1').value;
    var regx= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]{4}).([a-z]{2,3})?$/;
    if(regx.test(email))
    {
       alert("valid emailid")
    }
    else{
        alert("Enter valid email address..!")
        return false
    }
}