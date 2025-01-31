// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer para mostrar/ocultar secciones dinámicamente
const sections = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.1, // Se activa cuando al menos el 30% de la sección es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando una sección entra en la vista, la mostramos
            entry.target.classList.add('fade-in-visible');
        } else {
            // Cuando una sección deja de estar visible, la ocultamos
            entry.target.classList.remove('fade-in-visible');
        }
    });
});

// Observar cada sección con la clase 'fade-in'
sections.forEach(section => observer.observe(section));

// Efecto de vibración en iconos de la sección de información
document.querySelectorAll('.info-item').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(5deg) scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});

// Traducciones en diferentes idiomas
const translations = {
    en: {
        "name": "Aldo Fernández",
        "subtitle": "Data Scientist | Machine Learning and NLP Enthusiast",
        "about-title": "About Me",
        "about-text": "I am a master's student at the University of Luxembourg with experience in IT Audit, Cybersecurity, Databases, and AI. My focus is on NLP, Generative AI, and Large Language Models.",
        "project1-title": "Real-time Sentiment Analysis",
        "project1-desc": "NLP system for real-time sentiment analysis using Transformers and Python.",
        "skills-title": "Courses & Skills",
        "skill1": "Machine Learning with Python",
        "skill2": "Natural Language Processing",
        "skill3": "Large Language Models",
        "skill4": "AWS AI Practitioner",
    },
    fr: {
        "name": "Aldo Fernández",
        "subtitle": "Data Scientist | Machine Learning et NLP Enthousiaste",
        "about-title": "À Propos de Moi",
        "about-text": "Je suis étudiant en master à l'Université du Luxembourg avec une expérience en audit IT, cybersécurité, bases de données et intelligence artificielle. Mon expertise porte sur le NLP, l'IA générative et les modèles de langage.",
        "project1-title": "Analyse des Sentiments en Temps Réel",
        "project1-desc": "Système NLP pour l'analyse des sentiments en temps réel avec Transformers et Python.",
        "skills-title": "Cours et Compétences",
        "skill1": "Apprentissage Automatique avec Python",
        "skill2": "Traitement du Langage Naturel",
        "skill3": "Grands Modèles de Langage",
        "skill4": "AWS AI Practitioner",
    },
    de: {
        "name": "Aldo Fernández",
        "subtitle": "Data Scientist | Maschinelles Lernen und NLP Enthusiast",
        "about-title": "Über mich",
        "about-text": "Ich bin Masterstudent an der Universität Luxemburg mit Erfahrung in IT-Audit, Cybersicherheit, Datenbanken und KI. Mein Fokus liegt auf NLP, Generativer KI und großen Sprachmodellen.",
        "project1-title": "Echtzeit-Stimmungsanalyse",
        "project1-desc": "NLP-System zur Echtzeit-Stimmungsanalyse mit Transformers und Python.",
        "skills-title": "Kurse und Fähigkeiten",
        "skill1": "Maschinelles Lernen mit Python",
        "skill2": "Verarbeitung natürlicher Sprache",
        "skill3": "Große Sprachmodelle",
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
