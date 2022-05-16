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