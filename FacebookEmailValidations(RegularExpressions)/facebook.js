function validateEmailPassword(){
    var form=document.login;
    var res=form.res1.value;
    var pass=form.pass1.value;
    var eregx= new RegExp("^.+@.+\..$");
    var pregx3=new RegExp("[6-9]{1}[0-9]{9}$");
    var paregx1=new RegExp("((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$");
    if(eregx.test(res) || pregx3.test(res))
    {
        if(paregx1.test(pass)){
            form.submit();
        }
        else{
            alert("wrong password");
            form.pass1.focus();
        }
    }
    else
    {
        alert("Invalid email or mobile number");
        form.res1.focus();
       }
    }
 function sname(){
    var form=document.signup;
    var ress=form.res2.value;
    var passw=form.pass2.value;
    var fname=form.fname1.value;
    var srname=form.srname1.value;
    var fnregx2=/^[a-zA-Z]{3,20}$/;
    var snregx5=/^[a-zA-Z]{3,20}$/;
    var eregx1= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})?$/;
    var phregx3=/^([6-9]{1})[0-9]{9}$/;
    var paregx4=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$/;
    if(fnregx2.test(fname) &&  snregx5.test(srname)){
        if(eregx1.test(ress) || phregx3.test(ress))
    {
        if(paregx4.test(passw)){
            form.submit();
        }
        else{
            alert("wrong password");
            form.pass2.focus();
        }
    }
    else
    {
        alert("Invalid email or mobile number");
        form.res2.focus();
       }

    }
    else{
        alert("Invalid user name...")
        form.fname1.focus();
    }
}