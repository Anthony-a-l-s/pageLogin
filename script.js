const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value.trim();


    if (!email || !password) {
        errorMessage.textContent = "E-mail e senha são obrigatórios!";
        errorMessage.style.color = "red";
        return;
    }

    if (!validarEmail(email)) {
        errorMessage.textContent = "Por favor, insira um e-mail válido!";
        errorMessage.style.color = "red";
        return;
    }


    errorMessage.textContent = "Login realizado com sucesso!";
    errorMessage.style.color = "green";
    console.log({ email, password });


    form.reset();
});

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}