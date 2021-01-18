const form = document.getElementById("form");
const user = document.getElementById('username');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const confirm_pwd = document.getElementById('confirm_pwd');

//function showError

function showError(input, mess) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    
    small.innerText = mess;
}


function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';

}

//check email valid
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function checkusername(user) {

    if(user.value == ''){
        showError(user,'Username is required');
    } else if(user.value.length > 15) {
        showError(user,'username too long');
    } 
    
    else {
        console.log(user.value);
        showSuccess(user);
    }

}

function checkemail(email) {
    if(email.value == ''){
        showError(email,'email is required');
    } 
    
    else if(!validateEmail(email.value) ) {
        showError(email, 'invalid email')
    }
    
    else {
        console.log(email.value);
        showSuccess(email);
    }

}


function checkpwd(pwd) {

    // 8<=length<=21

    if(pwd.value == ''){
        showError(pwd,'password is required');
    }
    else if(pwd.value.length < 8 || pwd.value.length > 21) {

        showError(pwd, 'invalid length password')
    }

    else {
        showSuccess(pwd);
    }

}

function check_total_password(pwd, confirm_pwd) {
    if(pwd.value == ''){
        showError(pwd,'password is required');
    }
    else if(pwd.value.length < 8 || pwd.value.length > 21) {

        showError(pwd, 'invalid length password')
    }


    else if(pwd.value != confirm_pwd.value) { 
        showError(pwd, 'password is not the same');
        showError(confirm_pwd, 'password is not the same');
}
    else {
        showSuccess(pwd);
        showSuccess(confirm_pwd);
    }
}



form.addEventListener('submit', function(e) {

    e.preventDefault();
    
    checkusername(user);

    checkemail(email);

    check_total_password(pwd, confirm_pwd)


})