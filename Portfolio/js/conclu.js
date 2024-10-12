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

    const text = `[Tap for quick access to all Conclusion]
    This course has not only expanded my technical skills but also taught me valuable lessons about flexibility and collaboration.
    I’ve learned that creativity flourishes when combined with feedback, and sometimes, scaling back ambitious ideas leads to a more focused and polished result. Moving forward, I want to continue building my foundation in coding, especially in areas like PHP, to better bring my design ideas to life. I’m excited to keep exploring the balance between design and technology and look forward to seeing how these combined skills can shape my future projects in meaningful ways. 
    By maintaining a mindset open to feedback and adaptation, I’m confident that my future work will reflect the growth I’ve experienced here. In particular, I aim to keep refining both my design and technical skills, so I can deliver more well-rounded and innovative solutions in the digital space. I’m eager to see where this path will take me as I continue learning and evolving in the field of interaction design.`;

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
                typingText.innerHTML = typingText.innerHTML.replace(`[Tap for quick access to all Conclusion]`, '');
            }, 1); 
        }
    }
    

    typeText();

    document.addEventListener('click', completeTyping);
});