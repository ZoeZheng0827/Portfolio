let currentImageIndex = 0;
const images = [
    { src: "./media/p3_1.png", description: "This first version of the animal info page reflects my attempt to organize the content to present animal information clearly. While basic, it helped me understand the layout and think about where future interactive elements could fit. This stage was key for building a solid foundation for my team." },
    { src: "./media/p3_2.png", description: "In the HTML, I used semantic elements to create a clean structure. Writing this code helped me appreciate how accessible HTML can provide a strong base for further development." },
    { src: "./media/p3_3.png", description: "The CSS brought the layout to life, focusing on a grid structure for responsiveness. Though simple, this process showed me how CSS shapes user experience by organizing and styling content effectively." },
    { src: "./media/p3_4.jpg", description: "The final version reflects our team’s refined vision, built on my initial work. This project taught me how essential collaboration is, as my basic layout allowed the team to add advanced features that enhance WildSnap’s educational purpose." }
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