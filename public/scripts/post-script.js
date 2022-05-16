import 
{ fetchData} 
from './main.js'

const postForm = document.getElementById("post-form");
if(postForm) postForm.addEventListener('submit', create);

//first HTTP fron-end call
function create(e) { //this add a post entry to the posts database, but not producing any values
    e.preventDefault();
  
    const text = document.getElementById("post").value;
  
    fetchData('/posts/create', {text}, "POST")
    .then((data) => {
      if(!data.message) {
        window.location.href = "posts.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#post-form p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    });
  }
  