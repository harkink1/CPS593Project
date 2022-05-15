const users = [
    {
        userID: 1,
        userName: "12345",
        password: "password"
    }
]

let getUsers = () => users;

function login(username, password){
    const user = users.filter((u) => u.userName === username);
    if(!user[0]) throw Error('User not found');
    if(user[0].password !== password) throw Error('Password is incorrect');

    return user[0];
}

function register(user){
    const u = userExists(user.username);
    if(u.length>0) throw Error('Username already exists')

    const newUser = {
        userId: users[users.length-1].userId + 1,
        userName: user.username,
        password: user.password
    }
    users.push(newUser);
    return newUser;
}

function userExists(username){
    return users.filter((u) => u.userName === username);
}

module.exports = { getUsers, login, register };

