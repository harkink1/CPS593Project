import 
{ fetchData} 
from './main.js'

const followForm = document.getElementById("follow-form");
if(followForm) followForm.addEventListener('submit', create);

//third HTTP front-end call
function create(e) { //this add a follow entry to the databse, NULL value however
    e.preventDefault();
  
    const text = document.getElementById("follow").value;
  
    fetchData('/following/create', {text}, "POST")
    .then((data) => {
      if(!data.message) {
        //setCurrentUser(data);
        window.location.href = "following.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#follow-form p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    });
  }
  