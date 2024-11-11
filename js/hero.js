const mainImages = [
    'img/hero1.jpeg',
    'img/hero2.jpeg',
    'img/hero3.jpeg',
    'img/hero4.jpeg',
];

let currentIndex = 0;

function changeBackground() {
    const heroSection = document.getElementById('hero');
    heroSection.style.backgroundImage = `url(${mainImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % mainImages.length;
}

// Cambia la imagen cada 10 segundos
setInterval(changeBackground, 10000); 

// Inicializa con la primera imagen
changeBackground();