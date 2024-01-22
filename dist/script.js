// Fungsi di dalam navigasi

const burger = document.querySelector('#burger');
const nav    = document.querySelector('#navigasi');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger_active');
    nav.classList.toggle('hidden');
});

// Fungsi di dalam menu slider (slide show)

var slide_Index = 1;
showSlide(slide_Index);

function nextSlide(n) {
    showSlide(slide_Index += n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("img-slide");

    if (n > slides.length) {
        slide_Index = 1;
    }
    
    if (n < 1) {
        slide_Index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slide_Index-1].style.display = "block";
}
