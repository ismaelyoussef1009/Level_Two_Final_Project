let usernames = document.querySelector("input[type = text]");
let Email = document.querySelector("input[type = email]");
let passwords = document.querySelector("input[type = password]");
let setbtn = document.querySelector(".btn");

let btn = document.getElementById('you');
let form = document.getElementById('isma');
let formBtn = document.getElementById('btn')

form.style.display = 'none';
btn.style.display = 'block';
formBtn.style.display = 'block';

btn.addEventListener('click', function (){
    if(form.style.display == 'none'){
        form.style.display = 'block';
        // btn.style.display = 'black'

    }
});

formBtn.addEventListener('click', function (){
    if (form.style.display == 'block'){
        form.style.display = 'none';
    }
});







let myUsers = "users";

setbtn.addEventListener("click", youssef =>{
    youssef.preventDefault();
    const btnUser = localStorage.getItem(myUsers);
    const User = JSON.parse(btnUser);

    for(i = 0; i < User.length; i++){
        if (usernames.value == User[i].username){
            if(passwords.value == atob(User[i].password)){
                alert("welcome to you");
            }
            else {
                alert('password not found');
            }
        }
        else {
            console.log(User[i].username);
            alert('username not found');
        }
    }

    
});