let usernames = document.querySelector("input[type = text]");
let Email = document.querySelector("input[type = email]");
let passwords = document.querySelector("input[type = password]");
let createAccount = document.querySelector(".btn2");



const users = [];
let myUsers = "users";

createAccount.addEventListener("click", ismael =>{
    ismael.preventDefault();
    const user = {
        username: usernames.value,
        email: Email.value,
        password: btoa(passwords.value),
    }

    users.push(user);
    localStorage.setItem(myUsers, JSON.stringify(users));

    // localStorage.setItem(usernames.value,JSON.stringify(user));
    // localStorage.setItem(password.value,password.value);
    const btnUser = localStorage.getItem(myUsers);
    const User = JSON.parse(btnUser);
    console.log(User);
});