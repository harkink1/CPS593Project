const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS comments (
      comment_id INT NOT NULL AUTO_INCREMENT,
      contents VARCHAR(255),
      user_id INT,
      CONSTRAINT comment_pk PRIMARY KEY(comment_id),
      CONSTRAINT user_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
    )`;
    await con.query(sql);
}
createTable();

let getComments = async () => {
    const sql = `SELECT * FROM comments`;
    return await con.query(sql);
  };
  
  async function getComment(comment) { //retrieve all comments
    let sql;
    if(comment.userId) { //if comments for id get them
      sql = `SELECT * FROM comments
        WHERE user_id = ${comment.userId}
      `;
    } else {
      throw Error('No Comments!') //otherwise return no comments
    }
  
    return await con.query(sql);
  }

  async function createComment(comment) { //create a new comment
  
    const sql = `INSERT INTO comments (contents)
      VALUES ("${comment.contents}")
    `;
  
    const insert = await con.query(sql);
    const newComment = await getComment(comment);
    return newComment[0];
  }

  async function deleteComment(commentId) { //delet old comment
    const sql = `DELETE FROM comments 
      WHERE comment_id = ${commentId}
    `;
    await con.query(sql);
   
  }

  module.exports = { getComments, createComment, deleteComment,  getComment, createTable };  