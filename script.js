// Menu Hamburger Toggle
document.addEventListener('DOMContentLoaded', function() {
    
    // === MENU HAMBURGER ===
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        // Toggle menu au clic sur le hamburger
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
    
    // === FILTRAGE DES PROJETS ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCategories = document.querySelectorAll('.project-category');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Retirer la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Ajouter la classe active au bouton cliqué
                this.classList.add('active');
                
                // Obtenir la catégorie sélectionnée
                const category = this.getAttribute('data-category');
                
                // Filtrer les projets
                projectCategories.forEach(projectCat => {
                    if (category === 'all') {
                        projectCat.style.display = 'block';
                    } else {
                        if (projectCat.getAttribute('data-category') === category) {
                            projectCat.style.display = 'block';
                        } else {
                            projectCat.style.display = 'none';
                        }
                    }
                });
                
                // Mettre à jour le compteur de projets
                updateProjectCount();
            });
        });
    }
    
    // Fonction pour compter les projets visibles
    function updateProjectCount() {
        const visibleProjects = document.querySelectorAll('.project-category:not([style*="display: none"]) .project-card');
        const countElement = document.getElementById('projectCount');
        if (countElement) {
            countElement.textContent = visibleProjects.length;
        }
    }
    
    // Initialiser le compteur au chargement
    updateProjectCount();

    // Validation du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const nom = document.getElementById('nom').value.trim();
            const email = document.getElementById('email').value.trim();
            const sujet = document.getElementById('sujet').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Réinitialiser les messages d'erreur
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => {
                msg.style.display = 'none';
                msg.textContent = '';
            });
            
            let isValid = true;
            
            // Validation du nom
            if (nom === '') {
                showError('nomError', 'Le nom est requis');
                isValid = false;
            } else if (nom.length < 2) {
                showError('nomError', 'Le nom doit contenir au moins 2 caractères');
                isValid = false;
            }
            
            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                showError('emailError', 'L\'email est requis');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showError('emailError', 'Veuillez entrer un email valide');
                isValid = false;
            }
            
            // Validation du sujet
            if (sujet === '') {
                showError('sujetError', 'Le sujet est requis');
                isValid = false;
            } else if (sujet.length < 3) {
                showError('sujetError', 'Le sujet doit contenir au moins 3 caractères');
                isValid = false;
            }
            
            // Validation du message
            if (message === '') {
                showError('messageError', 'Le message est requis');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Le message doit contenir au moins 10 caractères');
                isValid = false;
            }
            
            // Si le formulaire est valide
            if (isValid) {
                // Afficher le message de succès
                document.getElementById('successMessage').style.display = 'block';
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
                // Masquer le message de succès après 5 secondes
                setTimeout(function() {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
                
                // Ici, vous pourriez ajouter du code pour envoyer les données à un serveur
                console.log('Formulaire soumis avec succès!');
                console.log('Nom:', nom);
                console.log('Email:', email);
                console.log('Sujet:', sujet);
                console.log('Message:', message);
            }
        });
    }
    
    // Fonction pour afficher les messages d'erreur
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Effet de survol sur les cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Navigation mobile (menu hamburger - optionnel)
    // Vous pouvez ajouter cette fonctionnalité plus tard si nécessaire
});

// Objet JavaScript pour gérer le portfolio
const Portfolio = {
    proprietaire: "Votre Nom",
    email: "email@example.com",
    telephone: "+226 XX XX XX XX",
    
    competences: [
        { nom: "HTML5", niveau: 85 },
        { nom: "CSS3", niveau: 80 },
        { nom: "JavaScript", niveau: 70 },
        { nom: "Responsive Design", niveau: 75 },
        { nom: "Git & GitHub", niveau: 65 },
        { nom: "UI/UX Design", niveau: 60 }
    ],
    
    projets: [
        {
            titre: "Site Web Vitrine",
            description: "Un site web vitrine moderne et responsive",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            titre: "Application To-Do",
            description: "Une application de gestion de tâches",
            technologies: ["JavaScript", "LocalStorage", "CSS"]
        }
    ],
    
    afficherInfos: function() {
        console.log("=== Informations Portfolio ===");
        console.log("Propriétaire:", this.proprietaire);
        console.log("Email:", this.email);
        console.log("Téléphone:", this.telephone);
        console.log("Nombre de compétences:", this.competences.length);
        console.log("Nombre de projets:", this.projets.length);
    },
    
    ajouterCompetence: function(nom, niveau) {
        this.competences.push({ nom: nom, niveau: niveau });
        console.log("Compétence ajoutée:", nom);
    },
    
    ajouterProjet: function(titre, description, technologies) {
        this.projets.push({
            titre: titre,
            description: description,
            technologies: technologies
        });
        console.log("Projet ajouté:", titre);
    }
};

// Exemple d'utilisation de l'objet Portfolio
// Portfolio.afficherInfos();