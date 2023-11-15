const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const colorFondo = document.querySelector('.container');


ham.addEventListener('click', ()=>{
    enlaces.classList.toggle('activado');
    
})

colorFondo.addEventListener('click', () =>{
    colorFondo.classList.toggle('clicked')
})


