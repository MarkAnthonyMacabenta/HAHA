function showDecisionPage() {
    
    document.getElementById('sadImage').style.display = 'none';
    document.getElementById('message').textContent = "Make your choice!";

    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('decisionPage').classList.remove('hidden');
}

function createPartyConfetti() {
    const body = document.body;
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const colors = ['#ff0', '#ff6f00', '#ff007f', '#4caf50', '#2196f3', '#9c27b0'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
 
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = window.innerHeight;

        confetti.style.left = startX + 'px';
        confetti.style.top = startY + 'px';

        confetti.style.setProperty('--x-offset', (Math.random() - 0.5) * 300 + 'px');
        confetti.style.setProperty('--y-offset', (Math.random() - 0.5) * 300 + 'px');
        confetti.style.setProperty('--end-x', endX + 'px');
        confetti.style.setProperty('--end-y', endY + 'px');

        body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

function handleClick(answer) {
    const message = document.getElementById('message');
    const sadImage = document.getElementById('sadImage');

    sadImage.style.display = 'none';

    if (answer === 'no') {
        sadImage.style.display = 'block';
        setTimeout(() => {
            sadImage.style.display = 'none';
        }, 1000);
    }

    
    if (answer === 'yes') {
        createPartyConfetti();
    }

    
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';

    
    if (answer === 'yes') {
        message.textContent = "You chose YES! Smile 🎉";
    } else {
        message.textContent = "Ow no. Smile 😞";
    }
}
