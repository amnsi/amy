function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.querySelector('.hearts').appendChild(heart);
    
    // Set random horizontal position and size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create a heart every 300ms
setInterval(createHeart, 300);
