// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Configuración de Intersection Observer para mostrar/ocultar secciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('fade-in-visible', entry.isIntersecting);
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));

// Efecto de vibración en iconos
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
      "about-title": "About Me",
      "about-text": "I am a master's student at the University of Luxembourg with experience in IT Audit, Cybersecurity, Databases, and AI. My focus is on NLP, Generative AI, and Large Language Models.",
      "project1-title": "Exploring Gender Prediction with Name Data",
      "project1-desc": "This project aims to predict gender based on first names using machine learning models.",
      "project2-title": "R Reproducible Pipeline",
      "project2-desc": "Reproducible pipeline in R to deploy a shiny app with honey bee data in USA.",
      "project3-title": "LetzGPT",
      "project3-desc": "Chatbot designed with Langchain and OpenAI to discover Luxembourg.",
    },
    fr: {
      "about-title": "À Propos de Moi",
      "about-text": "Je suis étudiant en master à l'Université du Luxembourg avec une expérience en audit IT, cybersécurité, bases de données et intelligence artificielle. Mon expertise porte sur le NLP, l'IA générative et les modèles de langage.",
      "project1-title": "Prédiction du Genre avec les Données des Prénoms",
      "project1-desc": "Ce projet vise à prédire le genre basé sur les prénoms en utilisant des modèles d'apprentissage automatique.",
      "project2-title": "Pipeline Reproductible en R",
      "project2-desc": "Pipeline reproductible en R pour déployer une application Shiny avec des données d'abeilles aux USA.",
      "project3-title": "LetzGPT",
      "project3-desc": "Chatbot conçu avec Langchain et OpenAI pour découvrir le Luxembourg.",
    },
    de: {
      "about-title": "Über mich",
      "about-text": "Ich bin Masterstudent an der Universität Luxemburg mit Erfahrung in IT-Audit, Cybersicherheit, Datenbanken und KI. Mein Fokus liegt auf NLP, generativer KI und großen Sprachmodellen.",
      "project1-title": "Gendervorhersage mit Namensdaten",
      "project1-desc": "Dieses Projekt zielt darauf ab, das Geschlecht basierend auf Vornamen mit maschinellen Lernmodellen vorherzusagen.",
      "project2-title": "Reproduzierbare Pipeline in R",
      "project2-desc": "Reproduzierbare Pipeline in R zur Bereitstellung einer Shiny-App mit Honigbienen-Daten in den USA.",
      "project3-title": "LetzGPT",
      "project3-desc": "Chatbot entwickelt mit Langchain und OpenAI, um Luxemburg zu entdecken.",
    }
  };
  

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
