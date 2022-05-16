import 
{ logout, fetchData } 
from './main.js'

let posts = document.getElementById("posts");
posts.innerHTML = `
  <div>
    <p class="error"></p>
    <button class="btn" id="see">See Posts</button>
    <button class="btn" id="delete">Delete Posts</button>
  </div>
`;

//document.getElementById("see").addEventListener('click', seePosts);
document.getElementById("delete").addEventListener('click', deletePosts);


function deletePosts() {
    if(confirm('Confirm Posts Deletion?')) {
      fetchData('/posts/delete', {userId: post.user_id}, "DELETE")
      .then((data) => {
        if(!data.message) {
          console.log(data.success)
          logout();
          window.location.href = "post.html"
        }
      })
      .catch((error) => {
        const errText = error.message;
        document.querySelector("#posts div p.error").innerHTML = errText;
        console.log(`Error! ${errText}`)
      })
    }
  }