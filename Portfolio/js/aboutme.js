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

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const size = Math.random() * 15 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.querySelector('.hearts').appendChild(heart);

        heart.style.setProperty('--heart-size', `${size}px`);

        heart.animate([
            { transform: 'scale(0) rotate(45deg)', opacity: 1 },
            { transform: 'scale(1) rotate(45deg)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => heart.remove();
    }

    setInterval(createHeart, 100);
});