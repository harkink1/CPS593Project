const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS following (
      follow_id INT NOT NULL AUTO_INCREMENT,
      count INT,
      user_id INT,
      CONSTRAINT follow_pk PRIMARY KEY(follow_id),
      CONSTRAINT follow_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
    )`;
    await con.query(sql);
}
createTable();