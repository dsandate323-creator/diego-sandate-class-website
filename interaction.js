// Select the DOM elements from interaction.html
const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strengthBar');
const feedbackText = document.getElementById('feedbackText');

// Listen for input actions as the user types real-time
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const length = password.length;

    if (length === 0) {
        strengthBar.style.width = '0%';
        strengthBar.style.backgroundColor = '#0004ff';
        feedbackText.innerText = 'Status: Empty';
        feedbackText.style.color = '#00ff40';
    } else if (length < 6) {
        strengthBar.style.width = '30%';
        strengthBar.style.backgroundColor = '#006eff';
        feedbackText.innerText = 'Status: Weak 🔴';
        feedbackText.style.color = '#5d00d6';
    } else if (length >= 6 && length < 10) {
        strengthBar.style.width = '60%';
        strengthBar.style.backgroundColor = '#ff00d4';
        feedbackText.innerText = 'Status: Medium 🟡';
        feedbackText.style.color = '#e100ff';
    } else {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = '#00ff6a';
        feedbackText.innerText = 'Status: Strong 💪 🟢';
        feedbackText.style.color = '#2ecc71';
    }
    });