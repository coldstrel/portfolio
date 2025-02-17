// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//comment
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
        "name": "Aldo FERNANDEZ",
        "subtitle": "Data Scientist | Machine Learning and NLP Enthusiast",
        "about-title": "About Me",
        "about-text": "Hello, my name is Aldo, a Master’s student in Data Science at the University of Luxembourg with a strong foundation in computer science, data analysis, and machine learning. My expertise spans across statistical modeling, network analysis, natural language processing (NLP), and Generative AI, with hands-on experience in deep learning frameworks like TensorFlow and traditional machine learning libraries such as Scikit-Learn.<br><br> I am passionate about applying data science techniques to solve complex, real-world problems, from computer vision and image analysis to AI-powered automation and workplace optimization. My technical strengths include Python, Scikit-Learn, TensorFlow, NLP, Generative AI, and API integrations, complemented by strong analytical and visualization skills in Excel, PowerPoint, and GIS tools.",

        "projects-title": "My Projects",
        "skills-title": "Technical Skills & Tools",
        "project1-title": "Exploring Gender Prediction with Name Data",
        "project1-desc": "This project aims to predict gender based on first names using machine learning models.",
        "project2-title": "R Reproducible Pipeline",
        "project2-desc": "Reproducible pipeline in R to deploy a shiny app with honey bee data in the USA.",
        "project3-title": "LetzGPT",
        "project3-desc": "Chatbot designed with Langchain and OpenAI to discover Luxembourg.",
        "project4-title": "RAG Agents R1",
        "project4-desc": "Agentic RAG using DeepSeek R1 locally and Hugging Face embeddings.",
        "project5-title": "UAV LiDAR Tree Detection",
        "project5-desc": "Detection of individual trees from LiDAR data using Neural Networks.",
        "project6-title": "Tableau visualization of Bikes in NY",
        "project6-desc": "A data-driven analysis of bike-sharing usage, exploring demand patterns, user behavior, and trip trends using python and Tableau.",
    },
    fr: {
        "name": "Aldo FERNANDEZ",
        "subtitle": "Scientifique des données | Passionné par le Machine Learning et le NLP",
        "about-title": "À Propos de Moi",
        "about-text": "Bonjour, je m'appelle Aldo, étudiant en Master en Science des Données à l'Université du Luxembourg, avec une solide formation en informatique, analyse de données et apprentissage automatique. Mon expertise couvre la modélisation statistique, l'analyse de réseaux, le traitement du langage naturel (NLP) et l'IA générative, avec une expérience pratique dans les frameworks de deep learning comme TensorFlow et les bibliothèques d'apprentissage automatique classiques telles que Scikit-Learn.<br><br> Je suis passionné par l'application des techniques de science des données pour résoudre des problèmes complexes et concrets, allant de la vision par ordinateur et l'analyse d'images à l'automatisation alimentée par l'IA et l'optimisation du lieu de travail. Mes compétences techniques incluent Python, Scikit-Learn, TensorFlow, NLP, IA générative et intégrations API, ainsi que des compétences solides en analyse et visualisation de données avec Excel, PowerPoint et les outils SIG.",

        "projects-title": "Mes Projets",
        "skills-title": "Compétences Techniques & Outils",
        "project1-title": "Prédiction du Genre avec les Données des Prénoms",
        "project1-desc": "Ce projet vise à prédire le genre basé sur les prénoms en utilisant des modèles de machine learning.",
        "project2-title": "Pipeline Reproductible en R",
        "project2-desc": "Pipeline reproductible en R pour déployer une application Shiny avec des données sur les abeilles aux USA.",
        "project3-title": "LetzGPT",
        "project3-desc": "Chatbot conçu avec Langchain et OpenAI pour découvrir le Luxembourg.",
        "project4-title": "Agents RAG R1",
        "project4-desc": "RAG agentique utilisant DeepSeek R1 localement et des embeddings Hugging Face.",
        "project5-title": "Détection des Arbres LiDAR",
        "project5-desc": "Détection d’arbres individuels à partir de données LiDAR en utilisant des réseaux neuronaux.",
        "project6-title": "Visualisation Tableau des vélos à New York",
        "project6-desc": "Une analyse basée sur les données de l'utilisation des vélos en libre-service, explorant les tendances de la demande, le comportement des utilisateurs et les trajets à l'aide de Python et Tableau.",
    },
    de: {
        "name": "Aldo FERNANDEZ",
        "subtitle": "Datenwissenschaftler | Begeistert von Machine Learning und NLP",
        "about-title": "Über mich",
        "about-text": "Hallo, mein Name ist Aldo. Ich bin Masterstudent in Datenwissenschaft an der Universität Luxemburg mit einer soliden Grundlage in Informatik, Datenanalyse und maschinellem Lernen. Meine Fachkenntnisse umfassen statistische Modellierung, Netzwerkanalyse, natürliche Sprachverarbeitung (NLP) und Generative KI, mit praktischer Erfahrung in Deep-Learning-Frameworks wie TensorFlow sowie traditionellen maschinellen Lernbibliotheken wie Scikit-Learn.<br><br> Ich bin begeistert davon, Datenwissenschaftstechniken anzuwenden, um komplexe, reale Probleme zu lösen – von Computer Vision und Bildanalyse bis hin zu KI-gestützter Automatisierung und Arbeitsplatzoptimierung. Meine technischen Stärken umfassen Python, Scikit-Learn, TensorFlow, NLP, Generative KI und API-Integrationen sowie starke analytische und Visualisierungsfähigkeiten in Excel, PowerPoint und GIS-Tools.",
        "projects-title": "Meine Projekte",
        "skills-title": "Technische Fähigkeiten & Werkzeuge",
        "project1-title": "Geschlechtsvorhersage mit Namensdaten",
        "project1-desc": "Dieses Projekt zielt darauf ab, das Geschlecht basierend auf Vornamen mit maschinellen Lernmodellen vorherzusagen.",
        "project2-title": "Reproduzierbare Pipeline in R",
        "project2-desc": "Reproduzierbare Pipeline in R zur Bereitstellung einer Shiny-App mit Honigbienen-Daten in den USA.",
        "project3-title": "LetzGPT",
        "project3-desc": "Chatbot entwickelt mit Langchain und OpenAI, um Luxemburg zu entdecken.",
        "project4-title": "RAG-Agenten R1",
        "project4-desc": "Agentisches RAG mit DeepSeek R1 lokal und Hugging Face Einbettungen.",
        "project5-title": "LiDAR-Baumdetektion",
        "project5-desc": "Erkennung einzelner Bäume aus LiDAR-Daten mit neuronalen Netzwerken.",
        "project6-title": "Tableau-Visualisierung von Fahrrädern in New York",
        "project6-desc": "Eine datengetriebene Analyse der Fahrrad-Sharing-Nutzung, die Nachfrage-Muster, Nutzerverhalten und Fahrtrends mit Python und Tableau untersucht",
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

