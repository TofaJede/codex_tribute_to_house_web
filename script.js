document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bg-audio');
    const volume = document.getElementById('volume');
    const vinyl = document.getElementById('vinyl');

    // try to play audio after load
    const playAudio = () => {
        audio.volume = volume.value;
        const promise = audio.play();
        if (promise !== undefined) {
            promise.catch(() => {
                // autoplay blocked, keep muted
            });
        }
    };
    playAudio();

    volume.addEventListener('input', () => {
        audio.volume = volume.value;
    });

    // simple form submission handler
    const form = document.getElementById('contact-form');
    const response = document.getElementById('form-response');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        response.classList.remove('hidden');
    });
});
