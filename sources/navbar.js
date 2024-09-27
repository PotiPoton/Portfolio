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

    // Récupérer la valeur de l'attribut data-tab de l'onglet cliqué
    const tabId = this.getAttribute('data-tab');

    // Afficher le contenu correspondant
    document.getElementById(tabId).style.display = 'block';
  });
});