const emailInput = document.querySelector("#emailInput");
const submitBtn = document.querySelector("#submitBtn");
const errorP = document.getElementById("formErrorMsg");

const ValidateEmail = () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailInput.value.match(mailformat))
    {
        errorP.style.display = "block"
        emailInput.focus();
        return false;
    } else {
        errorP.style.display = "none";
        emailInput.focus();
    }
}