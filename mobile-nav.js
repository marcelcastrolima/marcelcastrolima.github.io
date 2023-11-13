const navButtom = document.querySelector('#mobile-buttom');
const mainNav = document.getElementById("main-nav");
var size = window.matchMedia("(max-width: 800px)");

var clicked = 0;

window.addEventListener("resize", function() {
    if (size.matches) {
        mainNav.style.display = "none";
        clicked = 0;
        
    } else {
        mainNav.style.display = "flex";
    };
});

navButtom.addEventListener('click', function() {
    if (clicked === 0) {
        mainNav.style.display = "flex";
        clicked = 1;
    
    } else {
        mainNav.style.display = "none";
        clicked = 0;
    }
});


