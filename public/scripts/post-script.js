import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'

const postForm = document.getElementById("post-form");
if(postForm) postForm.addEventListener('submit', create);


function create(e) {
    e.preventDefault();
  
    const name = document.getElementById("post").value;
  
    fetchData('/posts/create', {content: name, }, "POST")
    .then((data) => {
      if(!data.message) {
        setCurrentUser(data);
        window.location.href = "post.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#post-form p.error").innerHTML = errText;
      document.getElementById("pswd").value = "";
      console.log(`Error! ${errText}`)
    });
  }
  