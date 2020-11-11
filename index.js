function Validate() {
    var email = document.querySelector("#Email");
    var result = document.getElementById("result");
    if (email.value === ""){
        result.innerHTML = "Please fill in the required field";
        result.style.color = "red";
        email.style.border = "2px solid red";
        email.style.backgroundImage = "url(images/icon-error.svg)"
    }
    else {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) === false){
            result.innerHTML = "Please provide a valid email";
            result.style.color = "red";
            email.style.border = "2px solid red";
            email.style.backgroundImage = "url(images/icon-error.svg)";
        }else {
            result.innerHTML = "Thank You we will get back to you";
            email.style.backgroundImage = ""
            result.style.color = "green";
            email.style.border = "2px solid hsl(0, 36%, 70%)";
        }
    }
    
}