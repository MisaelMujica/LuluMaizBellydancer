//===================REVELADO DEL PRIMER ELEMENTO=====================//
document.addEventListener('DOMContentLoaded', function() {
    var firstReveal = document.querySelector('.reveal');
    if (firstReveal) {
        setTimeout(function() {
            firstReveal.classList.add('active');
        }, 200); // Añade un retraso de 100ms
    }
});



//=========================REVELADO GENERAL===========================//
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}



//===================REVELADO DEL PRIMER ELEMENTO=====================//
window.addEventListener('scroll', reveal);
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("primera-seccion").classList.add("visible");
});