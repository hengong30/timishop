const container = document.getElementById('loginForm');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function loginClick() {
    let adminAccount = {
        "userName": "timishop@ga.com",
        "passWord": "timi"
    }
    var emailLogin = document.querySelector(".email--login");
    var passLogin = document.querySelector(".password--login");
    if (emailLogin.value == adminAccount.userName && passLogin.value == adminAccount.passWord) {
        emailLogin.value = "";
        passLogin.value = "";
        window.location = "./navbar/history.html";
    }
}

function linkAccount() {
    var modalElement = document.querySelector(".modal");
    modalElement.style.display = "flex";
    console.log(modalElement)
}


function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }