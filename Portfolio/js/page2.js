let currentImageIndex = 0;
const images = [
    { src: "./media/p2_1.jpg", description: "This initial sketch helped set the overall look and feel of the website. It includes basic elements like the search bar and navigation, allowing me to define the style before diving into detailed designs. This step ensured a consistent theme across all pages." },
    { src: "./media/p2_2.png", description: "In Figma, I created four main pages: the Encyclopedia, Animal Information, Quiz, and Gallery pages. These layouts focus on user-friendly design, making it easy for users to explore and learn about wildlife. I refined the colors, fonts, and images to create a cohesive, engaging experience." },
    { src: "./media/p2_3.png", description: "Using Miro, I presented the Quiz and Gallery page layouts, explaining each feature with notes. This was useful for breaking down the interactive elements, such as the quiz and gallery functions, and ensuring each page was intuitive for users." },
    { src: "./media/p2_4.png", description: "This Miro board explains the Encyclopedia and Animal Information pages. I highlighted features like the alphabetical categories and detailed animal info sections. This helped refine the educational aspects of the site, making it both informative and user-friendly." },
    { src: "./media/WildSnap2.png", description: "The final mockup showcases the complete website, combining all pages into one cohesive design. It highlights the interactive features and the overall layout, making the website engaging and easy to navigate for users interested in wildlife." }
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