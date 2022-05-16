const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS following (
      follow_id INT NOT NULL AUTO_INCREMENT,
      count VARCHAR(255),
      user_id INT,
      CONSTRAINT follow_pk PRIMARY KEY(follow_id),
      CONSTRAINT follow_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
    )`;
    await con.query(sql);
}
createTable();

let getFollows = async () => {
    const sql = `SELECT * FROM following`;
    return await con.query(sql);
  };
  
  async function getFollow(follow) { //retrieve follows
    let sql;
    if(follow.count>0) { //if have more than zero follow, show number
      sql = `SELECT * FROM following
        WHERE count = ${follow.count}
      `;
    } else {
      throw Error('Not followed/following!') //have/are no follow
    }
  
    return await con.query(sql);
  }

  async function createFollow(follow) { //add a new follow
  
    const sql = `INSERT INTO following (count)
      VALUES ("${follow.count}")
    `;
  
    const insert = await con.query(sql);
    const newFollow = await getFollow(follow);
    return newFollow[0];
  }

  async function removeFollow(followId) { //remove a follow
    const sql = `DELETE FROM following 
      WHERE follow_id = ${followId}
    `;
    await con.query(sql);
   
  }
  module.exports = { getFollows, createFollow, getFollow, removeFollow, createTable };