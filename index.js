const email = document.getElementById('in-email');
const date = document.getElementById('in-date');
const password = document.getElementById('in-password');
const form = document.getElementById('forms');

form.addEventListener('submit', function(event){
    event.preventDefault();
    validar();
});

function validar() {
    let remail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    let redate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    let repassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    console.log(remail.test(email.value) ? "email correto": "email incorreto");
    console.log(redate.test(date.value) ? "data correta": "data incorreta");
    console.log(repassword.test(password.value) ? "senha correta": "senha incorreta");
}