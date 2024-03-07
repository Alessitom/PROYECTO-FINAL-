function toggleEstrella(star) {
    star.classList.toggle('clicked');
    const flipCard = star.parentElement.parentElement;
    const cardTitle = flipCard.querySelector('.flip-card-front h3').innerText;
    const cardId = flipCard.id;
    const sectionFavoritos = document.querySelector('.favoritos-list');

    if (star.classList.contains('clicked')) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const sectionId = flipCard.closest('section').id; // Obtiene el id de la sección contenedora
        a.href = '#' + sectionId; // Enlace apunta al id de la sección
        a.textContent = '- ' + cardTitle;
        li.appendChild(a);
        sectionFavoritos.appendChild(li);
    } else {
        const cardsInFavoritos = sectionFavoritos.querySelectorAll('.favoritos-list li');
        cardsInFavoritos.forEach(card => {
            if (card.textContent.trim() === '- ' + cardTitle) {
                card.remove();
            }
        });
    }
}
