function scrollToContent() {
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
}

// Contador de tiempo juntos
const startDate = new Date("2023-07-15T00:00:00"); // Cambia a tu fecha real
setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").textContent =
        `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}, 1000);

// Lógica para las tarjetas de la historia
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const nextButtons = document.querySelectorAll('.next-card-btn');
    let currentCardIndex = 0;

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Oculta la tarjeta actual
            cards[currentCardIndex].classList.remove('active');

            // Mueve al siguiente índice
            currentCardIndex++;

            // Si llegamos al final, volvemos a la primera tarjeta
            if (currentCardIndex >= cards.length) {
                currentCardIndex = 0;
            }

            // Muestra la siguiente tarjeta
            cards[currentCardIndex].classList.add('active');
        });
    });

    const memoryCards = document.querySelectorAll('.memory-card');

    memoryCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    const allAudios = document.querySelectorAll('audio');

    allAudios.forEach(audio => {
        audio.addEventListener('play', () => {
            allAudios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});

