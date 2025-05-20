window.eyeIcon.addEventListener("click", function () {
    if (window.password.type === "password") {
        window.password.type = "text";
    } else {
        window.password.type = "password";
    }
})