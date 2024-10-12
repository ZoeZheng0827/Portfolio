let currentImageIndex = 0;
const images = [
    { src: "./media/pixel_bg.jpg", description: "I spent around four hours creating this initial pixel background, aiming for a peaceful wildlife scene with mountains, trees, and animals by a lake. Although it had a simple charm, I realized the edges weren’t crisp enough for our site, so we chose not to use it. This experience taught me the importance of clarity in pixel art and inspired me to try different techniques." },
    { src: "./media/p4_2.png", description: "My JavaScript code is part of the animation setup for adding moving GIF elements to a scene on the webpage. The code creates functions to dynamically add animated elements (like birds and foxes) and control their movement across the screen." },
    { src: "./media/p4_3.png", description: "Wanting to bring the animals to life, I used JavaScript to animate pixel art of foxes running across a forest. This playful animation added energy to the site and engaged users visually. This process helped me grasp JavaScript’s animation capabilities, reinforcing how interactive elements can boost user engagement." },
    { src: "./media/p4_4.png", description: "For the gallery page, I’ve been working on PHP and JavaScript to enable image uploads and handle data with GET and POST methods. While it’s still a work in progress, I’m proud of the technical skills I’ve gained. Building this interactive feature has been essential for making the gallery dynamic, allowing users to share their own wildlife photos and connect more deeply with the content." }
];

function createStars() {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        stars.appendChild(star);
    }
}

function openModal(index) {
    currentImageIndex = index;
    showImage();
    document.getElementById('lightboxModal').style.display = "flex";
}

function showImage() {
    const img = document.getElementById("lightboxImage");
    img.src = images[currentImageIndex].src;
    
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    
    prev.style.display = currentImageIndex === 0 ? "none" : "block";
    next.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
}

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage();
}

function openDescriptionPopup() {
    const popup = document.getElementById("descriptionPopup");
    const description = document.getElementById("imageDescription");
    description.textContent = images[currentImageIndex].description;
    popup.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    createStars();

    document.querySelector(".close").onclick = function() {
        document.getElementById('lightboxModal').style.display = "none";
    }

    document.querySelector(".prev").onclick = function() {
        changeImage(-1);
    }

    document.querySelector(".next").onclick = function() {
        changeImage(1);
    }

    document.querySelector(".close-popup").onclick = function() {
        document.getElementById('descriptionPopup').style.display = "none";
    }

    document.querySelector(".heart-icon").onclick = openDescriptionPopup;

    window.onclick = function(event) {
        const modal = document.getElementById('lightboxModal');
        const popup = document.getElementById('descriptionPopup');
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            document.getElementById('lightboxModal').style.display = "none";
            document.getElementById('descriptionPopup').style.display = "none";
        }
    });
});