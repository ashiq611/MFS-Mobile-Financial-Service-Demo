var myPhonenumber= 123456789;
var pin= 1234;

var logBtn= document.getElementById("logBtn");



logBtn.addEventListener('click', function(){
    var inputPhone= document.getElementById("phone");
    var inputPin= document.getElementById("pin");
    var numError= document.getElementById("num_error")
    var pinError= document.getElementById("pin_error")

    if(inputPhone.value==''){
      
        inputPhone.style.border="2px solid red";
        inputPhone.focus();
        numError.innerText= "please give your phone number";
    }
    else if(inputPin.value==''){
        
        inputPin.style.border="2px solid red";
        inputPin.focus();
        pinError.innerText= "please give your pin"
    }
    else if(inputPhone.value!=myPhonenumber && inputPin.value!=pin){
       
        inputPhone.style.border="2px solid red";
        inputPin.style.border="2px solid red";
        inputPhone.focus();
        pinError.innerText= "Wrong Phone or Pin"
        inputPhone.value='';
        inputPin.value='';
    }
    else{
        window.location.href= "home.html";
    }

})



