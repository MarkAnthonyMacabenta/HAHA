function showDecisionPage() {
    // Reset to hide sad image and message before showing the decision page again.
    document.getElementById('sadImage').style.display = 'none'; // Hide sad image if visible
    document.getElementById('message').textContent = "Make your choice!"; // Reset message text

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

        // Position and movement customizations for "party" feel
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = window.innerHeight;

        confetti.style.left = startX + 'px';
        confetti.style.top = startY + 'px';

        // Adding CSS variables for confetti movement
        confetti.style.setProperty('--x-offset', (Math.random() - 0.5) * 300 + 'px');
        confetti.style.setProperty('--y-offset', (Math.random() - 0.5) * 300 + 'px');
        confetti.style.setProperty('--end-x', endX + 'px');
        confetti.style.setProperty('--end-y', endY + 'px');

        body.appendChild(confetti);

        // Remove confetti after 2 seconds
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

function handleClick(answer) {
    const message = document.getElementById('message');
    const sadImage = document.getElementById('sadImage');

    // Reset the sad image before displaying a new choice
    sadImage.style.display = 'none';

    // Show the sad image if the user selects NO
    if (answer === 'no') {
        sadImage.style.display = 'block'; // Display the sad image
        setTimeout(() => {
            sadImage.style.display = 'none'; // Hide the sad image after 1 second
        }, 1000);
    }

    // Create party confetti if YES is selected
    if (answer === 'yes') {
        createPartyConfetti(); // Show party confetti for 2 seconds
    }

    // Hide the buttons after selection
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';

    // Display text message based on the user's choice
    if (answer === 'yes') {
        message.textContent = "You chose YES! Smile 🎉";
    } else {
        message.textContent = "Ow no. Smile 😞";
    }
}