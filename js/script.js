document.addEventListener("DOMContentLoaded", function () {
  const users = [
    { username: "BlueWaveUser", password: "@12345", name: "Marcos" },
    { username: "BlueWaveUser1", password: "@5678", name: "João" },
  ];

  function login(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("Username");
    const passwordInput = document.getElementById("password");

    usernameInput.classList.remove("erro");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      const successMessage = document.getElementById("sucessoLogin");
      if (successMessage) {
        successMessage.textContent = "Login realizado com sucesso!";
        successMessage.classList.add("login-success");
      }

      setTimeout(function () {
        window.location.href = "index.html";
      }, 1000);
    } else {
      const errorElement = document.getElementById("erroLogin");
      errorElement.textContent = "Username ou senha inválidos";
      setTimeout(() => {
        errorElement.textContent = "";
      }, 3000);
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

window.watsonAssistantChatOptions = {
  integrationID: "9c5ee59c-2b83-43b4-b3a5-a3da2c1d4f53",
  region: "au-syd",
  serviceInstanceID: "8ba7c4f8-4487-4bf1-b86a-7bd7d7009b1e",
  onLoad: async (instance) => {
    await instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
