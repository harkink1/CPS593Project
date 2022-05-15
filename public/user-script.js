async function postData(url = '',data = {}){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    if(response.ok){
        return await response.json();
    } else{
        throw await response.json();
    }
}

const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit',login);

function login(e){
    e.preventDefault();

    const name = document.getElementById("username").value;
    const pswd = document.getElementById("pswd").value;
    postData('http://localhost:3000/users/login', {username: name, password: pswd})
    .then((data) => {
        if(!data.message) {
            window.location.href = "post.html";
        }
    })
    .catch((error) => {
        const errText = error.message;
        document.querySelector("#login-form p.error").innerHTML = errText;
        document.getElementById("pswd").value = "";
        console.log(`Error! ${errText}`)
    });
}

//setting local storage
function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}
  
function removeCurrentUser() {
    localStorage.removeItem('user')
}
  
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}
  
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener('click', logout)
  
function logout() {
    removeCurrentUser();
    window.location.href = "login.html";
}

const regForm = document.getElementById("register-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pswd").value;

  fetchData('/users/register', {username: name, password: pswd}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "post.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}
