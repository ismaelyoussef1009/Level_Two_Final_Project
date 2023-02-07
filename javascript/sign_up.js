let usernames = document.querySelector("input[type = text]");
let Email = document.querySelector("input[type = email]");
let passwords = document.querySelector("input[type = password]");
let createAccount = document.querySelector(".btn2");
let h1 = document.getElementById("man");



const users = [];
let myUsers = "users";

createAccount.addEventListener("click", ismael =>{
    ismael.preventDefault();
    const user = {
        username: usernames.value,
        email: Email.value,
        password: btoa(passwords.value),
    }
    
    // checking for user
    if (usernames.value == ''  || usernames.value == null){
        alert('user name is required');
        return;
    }


    for( i = 0; i < users.length; i++){
        if (usernames.value == users[i].username){
            alert(`${usernames.value} Already exssite`);
            return;
        
        }
    };

    // checking for email
    for( i = 0; i < users.length; i++){
        if (Email.value ==  users[i].email){
            alert('email already exist');
            return;
        
        }
    };

    if(users.push(user)){
        localStorage.setItem(myUsers, JSON.stringify(users));
        // `${usernames.value} Account created successfully`
        alert(`${usernames.value} Account created successfully`);
        location.href = 'index.html';
    }
    
    const btnUser = localStorage.getItem(myUsers);
    const h1 = localStorage.getItem(usernames.value)
    const User = JSON.parse(btnUser);
    // console.log(User);

   
});