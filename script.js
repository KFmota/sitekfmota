// Affiche un message quand on clique sur le bouton
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btnMessage');
    button.addEventListener('click', () => {
        alert('Severine, 2KM DE CHEZ TOI EST CHAUDE ! 🎉');
    });
});
