var audio = document.createElement('audio');
audio.setAttribute('src', 'music/sound.mp3' );
audio.loop = true;
audio.play();

document.addEventListener('click', () => {
    audio.play().catch(error => {
        console.log("Error", error);
    });
}, { once: true });