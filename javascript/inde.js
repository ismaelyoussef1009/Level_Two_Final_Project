var names = document.querySelectorAll(".sub_menu_section");


names.forEach(para =>{
    para.addEventListener('click', function(){
        para.classList.add('active');
        para.style.background = 'red';

    })
})
