let one = document.getElementById('1');
let two = document.getElementById('2');
let tree = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');


let food = document.getElementById('food');
let pizza = document.getElementById('pizza');
let asian = document.getElementById('asian');
let burger = document.getElementById('burger');
let barbecue = document.getElementById('barbecue');
let dessert = document.getElementById('dessert');
let seafood = document.getElementById('seafood');
let salad = document.getElementById('salad');
let drinks = document.getElementById('drinks');



food.style.display = 'block';
pizza.style.display = 'none';
asian.style.display = 'none';
burger.style.display = 'none';
barbecue.style.display = 'none';
dessert.style.display = 'none';
seafood.style.display = 'none';
salad.style.display = 'none';
drinks.style.display = 'none';

two.addEventListener('click', function(){
    if (pizza.style.display == 'none'){
        pizza.style.display = 'block';
        pizza.style.marginTop = '80px';
        food.style.display = 'none';
        asian.style.display = 'none';
        burger.style.display = 'none';
        barbecue.style.display = 'none';
        dessert.style.display = 'none';
        seafood.style.display = 'none';
        salad.style.display = 'none';
        drinks.style.display = 'none';
    }
});

tree.addEventListener('click', function(){
    if(asian.style.display == 'none'){
        asian.style.display = 'block';
        asian.style.marginTop = '80px';
        food.style.display = 'none';
        pizza.style.display = 'none';
        burger.style.display = 'none';
        barbecue.style.display = 'none';
        dessert.style.display = 'none';
        seafood.style.display = 'none';
        salad.style.display = 'none';
        drinks.style.display = 'none';
    }
});

four.addEventListener('click', function(){
    if(burger.style.display == 'none'){
        burger.style.display = 'block';
        food.style.display = 'none';
        burger.style.marginTop = '80px'
        food.style.display = 'none';
        pizza.style.display = 'none';
        asian.style.display = 'none';
        barbecue.style.display = 'none';
        dessert.style.display = 'none';
        seafood.style.display = 'none';
        salad.style.display = 'none';
        drinks.style.display = 'none';
    }
});

five.addEventListener('click', function (){
    if(barbecue.style.display == 'none'){
        barbecue.style.display = 'block';
        barbecue.style.marginTop = '80px';
        food.style.display = 'none';
        pizza.style.display = 'none';
        asian.style.display = 'none';
        burger.style.display = 'none';
        dessert.style.display = 'none';
        seafood.style.display = 'none';
        salad.style.display = 'none';
        drinks.style.display = 'none';
        
    }
});

six.addEventListener('click', function (){
    if (dessert.style.display == 'none'){
        dessert.style.display = 'block';
        dessert.style.marginTop = '80px';
        food.style.display = 'none';
        pizza.style.display = 'none';
        asian.style.display = 'none';
        burger.style.display = 'none';
        barbecue.style.display = 'none';
        seafood.style.display = 'none';
        salad.style.display = 'none';
        drinks.style.display = 'none';
    }
});

seven.addEventListener('click', function (){
    if (seafood.style.display == 'none'){
        seafood.style.display = 'block';
        seafood.style.marginTop = '80px';
        food.style.display = 'none';
        pizza.style.display = 'none';
        asian.style.display = 'none';
        burger.style.display = 'none';
        barbecue.style.display = 'none';
        dessert.style.display = 'none';
        salad.style.display = 'none';
        drinks.style.display = 'none';
    }
});

eight.addEventListener('click', function (){
    if (salad.style.display == 'none'){
        salad.style.display = 'block';
        salad.style.marginTop = '80px';
        food.style.display = 'none';
        pizza.style.display = 'none';
        asian.style.display = 'none';
        burger.style.display = 'none';
        barbecue.style.display = 'none';
        dessert.style.display = 'none';
        seafood.style.display = 'none';
        drinks.style.display = 'none';

    }
});

nine.addEventListener('click', function (){
    if (drinks.style.display == 'none'){
        drinks.style.display = 'block';
        drinks.style.marginTop = '80px';
        food.style.display = 'none';
        pizza.style.display = 'none';
        asian.style.display = 'none';
        burger.style.display = 'none';
        barbecue.style.display = 'none';
        dessert.style.display = 'none';
        seafood.style.display = 'none';
        salad.style.display = 'none';
    }
})

one.addEventListener('click', function(){
    if(food.style.display = 'block'){
        food.style.display = 'block';
        pizza.style.display = 'none';
        asian.style.display = 'none';
        burger.style.display = 'none';
        barbecue.style.display = 'none';
        dessert.style.display = 'none';
        seafood.style.display = 'none';
        salad.style.display = 'none';
        drinks.style.display = 'none';
    }
});


