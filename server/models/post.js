const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS posts (
      post_id INT NOT NULL AUTO_INCREMENT,
      contents VARCHAR(255),
      user_id INT,
      CONSTRAINT posts_pk PRIMARY KEY(post_id),
      CONSTRAINT posts_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
    )`;
    await con.query(sql);
}
createTable();

let getPosts = async () => { //get ALL posts from ALL users
  const sql = `SELECT * FROM posts`;
  return await con.query(sql);
};

async function getPost(post) { //get all posts from a user
  let sql;
  if(post.userId) { //if the user id matches
    sql = `SELECT * FROM posts
      WHERE user_id = ${post.userId}
    `;
  } else {
    throw Error('No Posts!') //if no userid match then no posts!
  }

  return await con.query(sql);
}

async function createPost(post) { //create a post
  const sql = `INSERT INTO posts (contents)
    VALUES ("${post.contents}")
  `;

  const insert = await con.query(sql);
  const newPost = await getPost(post);
  return newPost[0];
}

async function deletePost(postId) { //delete a post
  const sql = `DELETE FROM posts 
    WHERE post_id = ${postId}
  `;
  await con.query(sql);
 
} 

module.exports = { getPosts, createPost, getPost, deletePost, createTable };