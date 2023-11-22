const header = document.querySelector("header");


window.addEventListener("scroll", ()=>{

    header.classList.toggle("abajo", window.scrollY>0);
    
    

});