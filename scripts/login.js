


formLogin.addEventListener('submit', function (event) {
    if (window.email.value.trim() === "" || window.password.value.trim() === "") {
        event.preventDefault();
    } else {
        event.preventDefault();
        LoginButton.textContent = "Logado!";
        setTimeout(function () {
            formLogin.submit();
        }, 900);
    }
})
