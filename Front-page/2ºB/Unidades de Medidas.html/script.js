document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.sound-button');
    const sound = document.getElementById('hover-sound');

    button.addEventListener('mouseenter', function () {
        sound.currentTime = 0; // Recomeça o som desde o início
        sound.play();
    });
});