const form = document.getElementById("register-form");
username=document.getElementById("username").value;
pwd=document.getElementById("pwd").value;
fname=document.getElementById("first_name").value;
lname=document.getElementById("last_name").value;
birth=document.getElementById("birthdate").value;
class User{
    constructor(id,userName,pswd,FName,LName,Birth){
        this.userId=id;
        this.userName=userName;
        this.setUserPassword(pswd);
        this.userFName=FName;
        this.userLName=LName;
        this.userBirth=Birth;
    }

    getUserId(){
        return this.userId;
    }
    getUserName(){
        return this.userName;
    }
    getUserPassword(){
        return this.userPassword;
    }
    getUserFName(){
        return this.userFName;
    }
    getUserLName(){
        return this.userLName;
    }
    getUserBirth(){
        return this.userBirth;
    }

    setUserId(id){
        this.userId=id;
    }
    setUserName(userName){
        this.userName=userName;
    }
    setUserPassword(pswd){
        this.userPassword=pswd;
    }
    setUserFName(FName){
        this.userFName=FName;
    }
    setUserLName(LName){
        this.userLName=LName;
    }
    setUserBirth(Birth){
        this.userBirth=Birth;
    }
}

let user1=new User(1,username,pwd,fname,lname,birth);