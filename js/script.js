const users = [
    { username: "marcos", password: "12345", name: "Marcos" },
    { username: "joao", password: "5678", name: "João" }
];

function login(event){
    event.preventDefault();
    const usernameInput = document.getElementById("Username");
    const passwordInput = document.getElementById("Password");

    usernameInput.classList.remove("erro")

    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        sessionStorage.setItem("user", JSON.stringify(user));
        const sucessMessage = document.getElementById("sucessoLogin");
        if(sucessMessage){
            sucessMessage.textContent = "Login realizado com sucesso!";
            sucessMessage.classList.add("login-sucess");
        }
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    }else{
        const errorElement = document.getElementById("erroLogin");
        errorElement.textContent = "Usuário ou senha incorretos ou inválidos"
        setTimeout(() => {
            errorElement.textContent = "";
        }, 5000);
    }

}