// Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password=$("#password");
var $confirm_password=$("#confirm_password");
//hide hints
$("form span").hide();

function isPasswordValid(){
    return ($password.val().length > 8);
}

function arePasswordsMatching(){
    return ($password.val() === $confirm_password.val());    
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();   
}

function passWordEvent() {
    //find out if password is valid
    if(isPasswordValid()){
        //hide hint if valid
        $password.next().hide();
    } else {
        //else show hint
        $password.next().show();
    }
}

function confirmPasswordEvent(){
    //find out if password and confirmation match
    if(arePasswordsMatching()){
    //hide hint if  match
        $confirm_password.next().hide();
    }else {
        $confirm_password.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input
$password.focus(passWordEvent).keyup(passWordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//when event happens on confirmatio
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();










