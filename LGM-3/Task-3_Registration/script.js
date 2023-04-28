function funcSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("output").style.display = "block";
    document.getElementById("print-name").textContent = name;
    document.getElementById("print-email").textContent = email;
    document.getElementById("print-password").textContent = password;
}

