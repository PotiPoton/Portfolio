// Sélectionner tous les liens de la navbar
const tabLinks = document.querySelectorAll('.tab-link');

// Boucler sur chaque lien et ajouter un écouteur d'événement
tabLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien (rechargement)

    // Cacher tout le contenu des onglets
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });

    // Afficher le contenu correspondant
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).style.display = 'block';

    // Supprimer l'ID 'active' de l'ancien onglet actif
    const activeLink = document.getElementById('active');
    if (activeLink) {
      activeLink.removeAttribute('id');
    }

    // Ajouter l'ID 'active' à l'onglet cliqué
    this.setAttribute('id', 'active');
  });
});
