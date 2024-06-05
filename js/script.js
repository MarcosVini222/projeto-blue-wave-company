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

}