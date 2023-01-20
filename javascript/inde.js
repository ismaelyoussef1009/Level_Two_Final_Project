// var names = document.querySelectorAll(".sub_menu_section");


// names.forEach(para =>{
//     para.addEventListener('click', function(){
//         para.classList.add('active');
//         para.style.background = 'red';

//     })
// });

var ALL = document.getElementById('1');
var Pizza = document.getElementById('2');
var Asian = document.getElementById('3');
var Burgers = document.getElementById('4');
var Barbecue = document.getElementById('5');
var Dessert = document.getElementById('6');
var Seafood = document.getElementById('7');
var Shrimp = document.getElementById('8');
var Drinks = document.getElementById('9');
let colors = 'white';
const color = '#FA801B'

ALL.style.background = colors;
Pizza.style.background = colors;
Asian.style.background = colors;
Burgers.style.background = colors;
Barbecue.style.background = colors;
Dessert.style.background = colors;
Seafood.style.background = colors;
Shrimp.style.background = colors;
Drinks.style.background = colors;

// var allItems = ['ALL', 'Pizza', 'Asian', 'Burgers', 'Barbecue', 'Dessert', 'Seafood', 'Shrimp',  'Drinks'];
// const man = allItems.style.background = colors;

ALL.addEventListener("click", function() {
    if(ALL.style.background == colors){
        ALL.style.background = color;
        Pizza.style.background = colors;
        Asian.style.background = colors;
        Burgers.style.background = colors;
        Barbecue.style.background = colors;
        Dessert.style.background = colors;
        Seafood.style.background = colors;
        Shrimp.style.background = colors;
        Drinks.style.background = colors;
    }
});

Pizza.addEventListener("click", function() {
    if(Pizza.style.background == colors){
        Pizza.style.background = color;
        ALL.style.background = colors;
        Asian.style.background = colors;
        Burgers.style.background = colors;
        Barbecue.style.background = colors;
        Dessert.style.background = colors;
        Seafood.style.background = colors;
        Shrimp.style.background = colors;
        Drinks.style.background = colors;
    }
});

Asian.addEventListener("click", function() {
    if(Asian.style.background == colors){
        Asian.style.background = color;
        ALL.style.background = colors;
        Pizza.style.background = colors;
        Burgers.style.background = colors;
        Barbecue.style.background = colors;
        Dessert.style.background = colors;
        Seafood.style.background = colors;
        Shrimp.style.background = colors;
        Drinks.style.background = colors;
    }
});

Burgers.addEventListener("click", function() {
    if(Burgers.style.background == colors){
        Burgers.style.background = color;
        ALL.style.background = colors;
        Pizza.style.background = colors;
        Asian.style.background = colors;
        Barbecue.style.background = colors;
        Dessert.style.background = colors;
        Seafood.style.background = colors;
        Shrimp.style.background = colors;
        Drinks.style.background = colors;
    }
});

Barbecue.addEventListener("click", function() {
    if(Barbecue.style.background == colors){
        Barbecue.style.background = color;
        ALL.style.background = colors;
        Pizza.style.background = colors;
        Asian.style.background = colors;
        Burgers.style.background = colors;
        Dessert.style.background = colors;
        Seafood.style.background = colors;
        Shrimp.style.background = colors;
        Drinks.style.background = colors;
    }
});

Dessert.addEventListener("click", function() {
    if(Dessert.style.background == colors){
        Dessert.style.background = color;
        ALL.style.background = colors;
        Pizza.style.background = colors;
        Asian.style.background = colors;
        Burgers.style.background = colors;
        Barbecue.style.background = colors;
        Seafood.style.background = colors;
        Shrimp.style.background = colors;
        Drinks.style.background = colors;
    }
});

Seafood.addEventListener("click", function() {
    if(Seafood.style.background == colors){
        Seafood.style.background = color;
        ALL.style.background = colors;
        Pizza.style.background = colors;
        Asian.style.background = colors;
        Burgers.style.background = colors;
        Barbecue.style.background = colors;
        Dessert.style.background = colors;
        Shrimp.style.background = colors;
        Drinks.style.background = colors;
    }
});

Shrimp.addEventListener("click", function() {
    if(Shrimp.style.background == colors){
        Shrimp.style.background = color;
        ALL.style.background = colors;
        Pizza.style.background = colors;
        Asian.style.background = colors;
        Burgers.style.background = colors;
        Barbecue.style.background = colors;
        Dessert.style.background = colors;
        Seafood.style.background = colors;
        Drinks.style.background = colors;
    }
});

Drinks.addEventListener("click", function() {
    if(Drinks.style.background == colors){
        Drinks.style.background = color;
        ALL.style.background = colors;
        Pizza.style.background = colors;
        Asian.style.background = colors;
        Burgers.style.background = colors;
        Barbecue.style.background = colors;
        Dessert.style.background = colors;
        Seafood.style.background = colors;
        Shrimp.style.background = colors;
    }
});