let usernames = document.querySelector("input[type = text]");
let Email = document.querySelector("input[type = email]");
let passwords = document.querySelector("input[type = password]");
let setbtn = document.querySelector(".btn");
let h1 = document.getElementById("man");

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
    // const h1 = localStorage.getItem(usernames.value);
    const User = JSON.parse(btnUser);

    for(i = 0; i < User.length; i++){
        if (usernames.value == User[i].username){
            if(passwords.value == atob(User[i].password)){
                alert(`${usernames.value} welcome to you`);
                // h1.style.innerhtml = `${usernames.value}`;
                h1.innerHTML = `${usernames.value} welcome!`;
                console.log(usernames.value);
                // `${usernames.value} Account created successfully`;
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