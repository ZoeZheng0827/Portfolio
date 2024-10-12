document.addEventListener('DOMContentLoaded', function() {
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

    createStars();

    const images = document.querySelectorAll('.gallery-image');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentImageIndex = 0;

    function openLightbox(index) {
        lightbox.style.display = 'block';
        showImage(index);
    }

    function showImage(index) {
        currentImageIndex = index;
        lightboxImg.src = images[index].src;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    close.addEventListener('click', closeLightbox);

    prev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    next.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', e => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prev.click();
            } else if (e.key === 'ArrowRight') {
                next.click();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
});