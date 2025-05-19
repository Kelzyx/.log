
formLogin.addEventListener("submit", function (event) {
    console.log(userId.value, passwordReset.value);
    if (userId.value === "" || passwordReset.value === "") {
        event.preventDefault();
        alert("Preencha todos os campos!");
        return
    }
    else if (!userId.value.includes("@")) {
        event.preventDefault();
        alert("O campo de e-mail deve conter um e-mail válido!");
        return
    }
    else {
        alert("Login realizado com sucesso!");
    }
})
