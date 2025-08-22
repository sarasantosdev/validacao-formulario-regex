const email = document.getElementById('in-email');
const date = document.getElementById('in-date');
const password = document.getElementById('in-password');
const form = document.getElementById('forms');
const message = document.getElementById('message');

let fields = [
    {
        input: email,
        field: "email",
        regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
        error: "Email incorreto"
    },
    {
        input: date,
        field: "date",
        regex: /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
        error: "Formato de data inválido"
    },
    {
        input: password,
        field: "password",
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
        error: "Senha incorreta"
    }
];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validar();
});

function validar() {
    for (let el of fields) {
        if (!el.input.value) {
            message.textContent = "Preencha os campos";
            return;
        }
        if (!el.regex.test(el.input.value)) {
           message.textContent = el.error;
           return;
        }
    }
    message.textContent = "Campos preenchidos com sucesso!";
}