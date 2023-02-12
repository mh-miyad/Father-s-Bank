 const button = document.getElementById('btn-submit');
 const emailField = document.getElementById('user-mail');
 const passwordField = document.getElementById('user-password');



 button.addEventListener('click',function () {
    let  email  = emailField.value;
    let  password  = passwordField.value;
    let setmail = '123@mail.com';
    if (email == setmail && password == 1234 ) {
        window.location.href = 'index.html';
        
    }else{
        alert(' Password or Email  was Wrong')
    }
 });