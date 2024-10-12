let currentImageIndex = 0;
const images = [
    { src: "./media/p1_1.png", description: "Creating Jack's persona helped me understand the type of user this app is for—a passionate zoologist who loves animals and wants to protect them. By defining his goals and challenges, I could better shape the app features to help him connect with others, find useful information, and support conservation efforts." },
    { src: "./media/p1_2.jpg", description: "These sketches were my first step in designing this app. I mapped out key features, like the interactive map and species categories, to visualize how users like Jack would navigate the app. This process helped me decide on the most practical and engaging layout for the app." },
    { src: "./media/p1_3.png", description: "Using Figma, I turned my sketches into a digital prototype. This step allowed me to experiment with colors, fonts, and layout to make the app look clean and easy to use. It was essential for testing the design and ensuring it would meet the needs of users while being visually appealing." },
    { src: "./media/p1_4.png", description: "The ideation poster showcases the main purpose and features of my app, such as real-time data and interactive maps. It also highlights the app’s role in connecting people with Brisbane wildlife. Creating this poster helped me and my target audiences see how the app could be valuable for people interested in conservation." }
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