document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const audio = document.getElementById('bgAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const rotatingText = document.querySelector('.rotating-text');
    
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

    let isPlaying = false;

    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            video.play();
            audio.pause();
            rotatingText.style.animationPlayState = 'paused';
            playPauseBtn.textContent = '▶';
        } else {
            video.pause();
            audio.play();
            rotatingText.style.animationPlayState = 'running';
            playPauseBtn.textContent = '⏸';
        }
        isPlaying = !isPlaying;
    });
});


