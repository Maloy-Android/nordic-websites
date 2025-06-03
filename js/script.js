let lastScrollTop = 0;
let currentLanguage = 'ru';
const header = document.querySelector('header');
const SCROLL_THRESHOLD = 100;

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
}

window.addEventListener('scroll', handleScroll);

function openSettings() {
    document.getElementById('settingsModal').style.display = "flex";
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = "none";
}

function showAbout() {
    hideAllSections();
    document.getElementById('about').style.display = "block";
}

function showAuthors() {
    hideAllSections();
    document.getElementById('authors').style.display = "block";
}

function showContacts() {
    hideAllSections();
    document.getElementById('contacts').style.display = "block";
}

function showFaq() {
    hideAllSections();
    document.getElementById('faq').style.display = "block";
}

function hideAllSections() {
    document.getElementById('about').style.display = "none";
    document.getElementById('authors').style.display = "none";
    document.getElementById('contacts').style.display = "none";
    document.getElementById('faq').style.display = "none";
}

function changeLanguage() {
    const language = document.getElementById('language').value;
    if (language !== currentLanguage) {
        currentLanguage = language;
        updateLanguage();
    }
}

function updateLanguage() {
    const translations = {
        ru: {
            title: "Nordic Sites - Создание сайтов",
            title_info: "Создание современных и адаптивных сайтов",
            about: "О нас",
            about_info: "Привет! Мы — команда, которая любит создавать красивые, удобные и рабочие сайты. Мы не просто делаем сайты — мы решаем задачи бизнеса с помощью цифровых решений. Нам важно, чтобы вы были довольны не только результатом, но и процессом. Мы всегда готовы выслушать, подсказать и помочь. Создадим сайт, который будет действительно работать на вас!",
            authors: "Авторы",
            contacts: "Контакты",
            techTitle: "Наши технологии",
            techDesc: "Мы занимаемся созданием современных и адаптивных сайтов, используя следующие технологии:",
            settings: "Настройки",
            apply: "Применить",
            email: "nordicsites1@gmail.com",
            telegram: "Telegram",
            instagram: "Instagram",
            footer: "Все права защищены.",
            technologies: "Наши технологии",
            technologies_info: "Мы занимаемся созданием современных и адаптивных сайтов, используя следующие технологии:",
            html_info: "Для структурирования и разметки страниц, создаем семантически правильный и чистый код.",
            css_info: "Для стилизации сайтов, создаем привлекательные и удобные интерфейсы с адаптивным дизайном",
            java_sript_Info: "Для реализации интерактивных элементов и функционала, пишем чистый и оптимизированный код.",
            faq_title: "Как связаться с вами?",
            faq_info: "Вы можете связаться с нами через раздел Контакты или написать на электронную почту.",
            faq_item_title: "Каковы ваши цены?",
            faq_item_info: "Цены зависят от проекта. Пожалуйста, свяжитесь с нами для получения более детальной информации.",
            themeLabel: "Тема:",
            lightOption: "Светлая",
            darkOption: "Тёмная",
            languageLabel: "Язык:",
            russianOption: "Русский",
            englishOption: "Английский",
            applyButton: "Применить"
        },
        en: {
            title: "Nordic Sites - Website Creation",
            title_info: "Creating modern and responsive websites",
            about: "About Us",
            about_info: "Hi! We are a team that loves to create beautiful, user-friendly and functional websites. We don't just make websites — we solve business problems using digital solutions. It is important to us that you are satisfied not only with the result, but also with the process. We are always ready to listen, prompt and help. Let's create a website that will really work for you!",
            authors: "Authors",
            contacts: "Contacts",
            techTitle: "Our Technologies",
            techDesc: "We create modern and responsive websites using the following technologies:",
            settings: "Settings",
            apply: "Apply",
            email: "nordicsites1@gmail.com",
            telegram: "Telegram",
            instagram: "Instagram",
            footer: "All rights reserved.",
            technologies: "Our technologies",
            technologies_info: "We create modern and responsive websites using the following technologies:",
            html_info: "To structure and mark up the pages, we create semantically correct and clean code.",
            css_info: "To style websites, we create attractive and user-friendly interfaces with responsive design.",
            java_sript_Info: "To implement interactive elements and functionality, we write clean and optimized code.",
            faq_title: "How can I contact you?",
            faq_info: "You can contact us through the Contacts section or send us an email.",
            faq_item_title: "What are your prices?",
            faq_item_info: "Prices depend on the project. Please contact us for more detailed information.",
            themeLabel: "Theme:",
            lightOption: "Light",
            darkOption: "Dark",
            languageLabel: "Language:",
            russianOption: "Russian",
            englishOption: "English",
            applyButton: "Apply"
        }
    };
    
    document.title = translations[currentLanguage].title;
    document.querySelector("header p").textContent = translations[currentLanguage].title_info;
    document.querySelector('header h1').textContent = translations[currentLanguage].title;
    document.getElementById("settingsModal").querySelector("h2").textContent = translations[currentLanguage].settings;
    document.getElementById('about').querySelector('h2').textContent = translations[currentLanguage].about;
    document.getElementById('authors').querySelector('h2').textContent = translations[currentLanguage].authors;
    document.getElementById('contacts').querySelector('h2').textContent = translations[currentLanguage].contacts;
    document.querySelector('main h2').textContent = translations[currentLanguage].techTitle;
    document.querySelector('main > p').textContent = translations[currentLanguage].techDesc;

    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks[0].innerHTML = `<i class="fab fa-telegram"></i> ${translations[currentLanguage].telegram}`;
    contactLinks[1].innerHTML = `<i class="fab fa-instagram"></i> ${translations[currentLanguage].instagram}`;
    contactLinks[2].innerHTML = `<i class="fas fa-envelope"></i> ${translations[currentLanguage].email}`;
    
    const techCards = document.querySelectorAll('.card p');
    if (techCards.length >= 3) {
        techCards[0].textContent = translations[currentLanguage].html_info;
        techCards[1].textContent = translations[currentLanguage].css_info;
        techCards[2].textContent = translations[currentLanguage].java_sript_Info;
    }
    
    document.querySelector('#faq h2').textContent = translations[currentLanguage].faq_title;
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 2) {
        faqItems[0].querySelector('h3').textContent = translations[currentLanguage].faq_title;
        faqItems[0].querySelector('p').textContent = translations[currentLanguage].faq_info;
        faqItems[1].querySelector('h3').textContent = translations[currentLanguage].faq_item_title;
        faqItems[1].querySelector('p').textContent = translations[currentLanguage].faq_item_info;
    }

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.querySelector('h2').textContent = translations[currentLanguage].about;
        const aboutParagraph = aboutSection.querySelector('.about_items p');
        if (aboutParagraph) {
            aboutParagraph.textContent = translations[currentLanguage].about_info;
        }
    }

    const buttons = document.querySelectorAll('.action-button');
    if (buttons.length >= 5) {
        buttons[0].textContent = translations[currentLanguage].settings;
        buttons[1].textContent = translations[currentLanguage].about;
        buttons[2].textContent = translations[currentLanguage].authors;
        buttons[3].textContent = translations[currentLanguage].contacts;
        buttons[4].textContent = "FAQ";
    }
    
    const settingsModal = document.getElementById('settingsModal');
    if (settingsModal) {
        settingsModal.querySelector('label[for="theme"]').textContent = translations[currentLanguage].themeLabel;
        settingsModal.querySelector('label[for="language"]').textContent = translations[currentLanguage].languageLabel;
        
        const themeSelect = document.getElementById('theme');
        themeSelect.options[0].text = translations[currentLanguage].lightOption;
        themeSelect.options[1].text = translations[currentLanguage].darkOption;
        
        const languageSelect = document.getElementById('language');
        languageSelect.options[0].text = translations[currentLanguage].russianOption;
        languageSelect.options[1].text = translations[currentLanguage].englishOption;
        
        settingsModal.querySelector('.action-button').textContent = translations[currentLanguage].applyButton;
    }
    
    document.querySelector('footer p').textContent = `&copy; 2025 Nordic Sites. ${translations[currentLanguage].footer}`;
}

window.onclick = function(event) {
    if (event.target === document.getElementById('settingsModal')) {
        closeSettings();
    }
}

function applySettings() {
    const theme = document.getElementById('theme').value;
    const elementsToDarken = [
        document.body,
        document.querySelector('header'),
        document.querySelector('main'),
        document.querySelector('footer'),
        ...document.querySelectorAll('.card'),
        ...document.querySelectorAll('.about-section'),
        ...document.querySelectorAll('.contact-section'),
        ...document.querySelectorAll('.author'),
        ...document.querySelectorAll('.contact-link'),
        ...document.querySelectorAll('.faq-item')
    ];

    if (theme === 'dark') {
        elementsToDarken.forEach(el => el.classList.add('dark'));
        localStorage.setItem('theme', 'dark');
    } else {
        elementsToDarken.forEach(el => el.classList.remove('dark'));
        localStorage.setItem('theme', 'light');
    }
    closeSettings();
}
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('theme').value = savedTheme;
        applySettings();
    }
    
    lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
};
