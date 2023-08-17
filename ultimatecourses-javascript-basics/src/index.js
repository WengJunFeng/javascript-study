import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

const ul = document.createElement("ul");
// document.body.appendChild(ul);
app.appendChild(ul);

console.log("Hello World!");

// 跨域请求，虽然 Github 支持 CORS, 但不是每个服务端都应该支持
fetch("https://api.github.com/users")
  // fetch("/api/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.login;
      ul.appendChild(li);
    });
  });
