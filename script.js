// Affiche un message quand on clique sur le bouton
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btnMessage');
    button.addEventListener('click', () => {
        alert('Bravo, tu as cliqué sur le bouton ! 🎉');
    });
});
