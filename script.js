// script.js

// YES/NO button handlers
DOMContentLoadedEventHandler = () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', handleYes);
    noButton.addEventListener('click', handleNo);
};

const handleYes = () => {
    triggerConfetti();
    playMusic();
};

const handleNo = () => {
    // Handle No button click
};

// Confetti animation
const triggerConfetti = () => {
    // Code to trigger confetti animation
};

// Heart particle effects
const createHeartParticles = () => {
    // Code to create heart particle effects
};

// Music control
const playMusic = () => {
    const audio = new Audio('path_to_music_file.mp3');
    audio.play();
};

document.addEventListener('DOMContentLoaded', DOMContentLoadedEventHandler);