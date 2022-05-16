import 
{ fetchData} 
from './main.js'

const commentForm = document.getElementById("comment-form");
if(commentForm) commentForm.addEventListener('submit', create);

//second HTTP front-end call
function create(e) { //this add a follow entry to the following database, but not producing any values
    e.preventDefault();
  
    const text = document.getElementById("post").value;
  
    fetchData('/comments/create', {text}, "POST")
    .then((data) => {
      if(!data.message) {
        window.location.href = "comments.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#comment-form p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    });
  }
  