import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'


let user = getCurrentUser();

if(!user) window.location.href = "login.html";

let profile = document.getElementById("profile");
profile.innerHTML = `
  <h2>Current Profile: ${user.username}</h2>
  <div>
    <p class="error"></p>
    <button class="btn" id="edit">Edit Info</button>
    <button class="btn" id="delete">Delete Account</button>
  </div>
`;

document.getElementById("edit").addEventListener('click', editProfile);
document.getElementById("delete").addEventListener('click', deleteAccount);

function editProfile() {
  profile.classList.toggle("hide");
  let editForm = document.getElementById("editForm");
  editForm.innerHTML = `
    <form id="form" class="basic-form">
      <p class="error"></p>
      <h2>Edit Profile</h2>
      <label for="username">Edit Username</label>
      <input type="text" name="username" id="username" placeholder="${user.username}">
      <br>
      <input type="submit" value="Submit">
    </form>

    <form id="passForm" class="basic-form">
      <p class="error"></p>
      <h2>Change Password</h2>
      <label for="pswd">New Password</label>
      <input type="password" name="pswd" id="pswd">
      <br>
      <input type="submit" value="Submit">
    </form>
    <button class="btn" id="cancel">Cancel</button>
  `;

  editForm.addEventListener('submit', editAccount)
  document.getElementById("cancel").addEventListener('click', (e) => {
    window.location.href = "profile.html";
  })
}

function editAccount(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  if(userName === user.username) {
    let err = "No changes made";
    document.querySelector("#editForm p.error").innerHTML = err;
  } else {
    fetchData('/users/edit', {userId: user.user_id, userName: userName}, "PUT")
    .then((data) => {
      if(!data.message) {
        removeCurrentUser();
        setCurrentUser(data);
        window.location.href = "profile.html"
      }
    })
 
    .catch((error) => {
       const errText = error.message;
       document.querySelector("#editForm p.error").innerHTML = errText;
       console.log(`Error! ${errText}`)
     });
  
  }
}

function deleteAccount() {
  if(confirm('Confirm Account Deletion?')) {
    fetchData('/users/delete', {userId: user.user_id}, "DELETE")
    .then((data) => {
      if(!data.message) {
        console.log(data.success)
        logout();
        window.location.href = "register.html"
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#profile div p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    })
  }
}