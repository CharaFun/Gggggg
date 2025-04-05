function showAlert() {
    alert("Секрет: этот сайт сделан с помощью Grok!");
}
function updateText() {
    let input = document.getElementById("input").value;
    let text = document.getElementById("about-text");
    if (input) {
        text.innerText = input;
        text.style.color = "green";
    } else {
        text.innerText = "Введите текст!";
        text.style.color = "red";
    }
}
function changeEmail() {
    let email = document.getElementById("email");
    email.innerText = "newemail@mail.com";
    email.style.color = "#007BFF";
}
