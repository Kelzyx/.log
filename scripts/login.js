
window.eyeIcon.addEventListener("click", function (event) {
    if (window.Password.type === "password") {
        window.Password.type = "text";
        window.eyeIcon.src = "./src/assets/eyeClosed.png";
    } else {
        window.Password.type = "password";
        window.eyeIcon.src = "./src/assets/eyeOpen.png";
    }
})

window.form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.buttonLogin.textContent = "Entrou!";
    setTimeout(function () {
        window.form.submit();
    }, 2000);
})


