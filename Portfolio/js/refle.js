// script.js
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

    const text = `[Tap for quick access to all Reflection]
    Throughout this course, I've gained insight into both design and coding, and the learning process has been both challenging and rewarding. Starting with pixel art, I realized the importance of simplicity and clarity, especially when designing visuals that need to engage users immediately. Experimenting with JavaScript animations introduced me to the exciting potential of interactive elements; watching my animated pixel animals come to life showed me how even small touches can make a big difference in user experience. Diving into PHP was a new challenge that tested my patience and adaptability. Despite the initial struggles, each step I took in learning PHP boosted my confidence in tackling backend functionality, something I hadn’t experienced before.
    Collaborating with my team, I learned the value of balancing creative ideas with realistic expectations, and I appreciated the constructive feedback we shared. These experiences have deepened my understanding of design computing and reinforced my desire to continue exploring this field where creativity and technical skills merge. 
    Moving forward, I am motivated to improve my coding skills to better execute my ideas and make meaningful contributions to future projects. This experience taught me that even small achievements, build the foundation for more advanced work.`;

const typingText = document.getElementById('typing-text');
let index = 0;
let isTypingComplete = false;
let typingInterval;

function typeText() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        typingInterval = setTimeout(typeText, 80); 
    } else {
        isTypingComplete = true;
    }
}

function completeTyping() {
    if (!isTypingComplete) {
        clearTimeout(typingInterval);
        typingText.innerHTML = text;
        isTypingComplete = true;

        setTimeout(() => {
            typingText.innerHTML = typingText.innerHTML.replace(`[Tap for quick access to all Reflection]`, '');
        }, 1); 
    }
}

typeText();

document.addEventListener('click', completeTyping);
});