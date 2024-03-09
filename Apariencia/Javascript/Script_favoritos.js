/**
 * Función para alternar la clase 'clicked' en la estrella (icono de favorito).
 * Agrega o quita un ejercicio de la lista de favoritos.
 */
function toggleEstrella(star) {
    // Alterna la clase 'clicked' en la estrella para cambiar su estado visual
    star.classList.toggle('clicked');
    
    // Obtiene la tarjeta (flip-card) que contiene la estrella
    const flipCard = star.parentElement.parentElement;
    
    // Obtiene el título de la tarjeta (flip-card)
    const cardTitle = flipCard.querySelector('.flip-card-front h3').innerText;
    
    // Obtiene el id de la tarjeta (flip-card)
    const cardId = flipCard.id;
    
    // Obtiene la sección que contiene la lista de favoritos
    const sectionFavoritos = document.querySelector('.favoritos-list');

    // Si la estrella ha sido activada (agregar a favoritos)
    if (star.classList.contains('clicked')) {
        // Crea un nuevo elemento de lista (li) y un enlace (a)
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        // Obtiene el id de la sección contenedora de la tarjeta
        const sectionId = flipCard.closest('section').id;
        
        // El enlace apunta al id de la sección
        a.href = '#' + sectionId;
        
        // Establece el texto del enlace con el título de la tarjeta
        a.textContent = '- ' + cardTitle;
        
        // Agrega el enlace al elemento de lista
        li.appendChild(a);
        
        // Agrega el elemento de lista a la lista de favoritos
        sectionFavoritos.appendChild(li);
    } else { // Si la estrella ha sido desactivada (quitar de favoritos)
        // Obtiene todas las tarjetas en la lista de favoritos
        const cardsInFavoritos = sectionFavoritos.querySelectorAll('.favoritos-list li');
        
        // Itera sobre cada tarjeta en la lista de favoritos
        cardsInFavoritos.forEach(card => {
            // Si el texto de la tarjeta coincide con el título de la tarjeta a quitar
            if (card.textContent.trim() === '- ' + cardTitle) {
                // Elimina la tarjeta de la lista de favoritos
                card.remove();
            }
        });
    }
}
