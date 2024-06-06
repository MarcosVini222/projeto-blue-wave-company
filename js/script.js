document.addEventListener("DOMContentLoaded", function() {
    const users = [
      { username: "marcos", password: "12345", name: "Marcos" },
      { username: "joao", password: "5678", name: "João" }
    ];
  
    function login(event) {
      event.preventDefault();
      const usernameInput = document.getElementById("Username");
      const passwordInput = document.getElementById("password");
  
      usernameInput.classList.remove("erro");
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      const user = users.find(u => u.username === username && u.password === password);
  
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        const successMessage = document.getElementById("sucessoLogin");
        if (successMessage) {
          successMessage.textContent = "Login realizado com sucesso!";
          successMessage.classList.add("login-success");
        }
        
        window.location.href = "index.html"; 
      } else {
        const errorElement = document.getElementById("erroLogin");
        errorElement.textContent = "Username ou senha inválidos";
        setTimeout(() => {
          errorElement.textContent = "";
        }, 5000);
      }
    }
  
    function checkAuth() {
      const user = sessionStorage.getItem("user");
      if (!user) {
        window.location.href = "login.html";
      } else {
        const userInfo = JSON.parse(user);
        const userInfoElement = document.getElementById("infoUsuario");
        userInfoElement.innerHTML = `<p>Bem-vindo, ${userInfo.name} (${userInfo.username})</p>`;
      }
    }
  
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", login); 
    }
  
    if (window.location.pathname.includes("index.html")) {
      checkAuth();
    }
  });
  