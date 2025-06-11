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


function showSettingsButton() {
    document.getElementById('settings-button').style.display = "block";
}

function hideSettingsButton() {
    document.getElementById('settings-button').style.display = "none";
}

function showTechnologiesButton() {
    document.getElementById('technologies-button').style.display = "block";
}

function hideTechnologiesButton() {
    document.getElementById('technologies-button').style.display = "none";

}

function showAboutButton() {
    document.getElementById('about-button').style.display = "block";
}

function hideAboutButton() {
    document.getElementById('about-button').style.display = "none";
}

function showAuthorsButton() {
    document.getElementById('authors-button').style.display = "block";
}

function hideAuthorsButton() {
    document.getElementById('authors-button').style.display = "none";
}

function showContactsButton() {
    document.getElementById('contacts-button').style.display = "block";
}

function hideContactsButton() {
    document.getElementById('contacts-button').style.display = "none";
}

function showFaqButton() {
    document.getElementById('faq-button').style.display = "block";
}

function hideFaqButton() {
    document.getElementById('faq-button').style.display = "none";
}

function openSettings() {
    hideSettingsButton();
    document.getElementById('settingsModal').style.display = "flex";
}

function closeSettings() {
    showSettingsButton();
    document.getElementById('settingsModal').style.display = "none";
}

function showAbout() {
    hideAllSections();
    hideAboutButton();
    showTechnologiesButton();
    showAuthorsButton();
    showContactsButton();
    showFaqButton();
    document.getElementById('about').style.display = "block";
}

function showTechnologies() {
    hideAllSections();
    hideTechnologiesButton();
    showAboutButton();
    showAuthorsButton();
    showContactsButton();
    showFaqButton();
    document.getElementById('technologies').style.display = "block";
    document.getElementById('technologies-info').style.display = "block";
    document.getElementById('card-container').style.display = "block";
}

function showAuthors() {
    hideAllSections();
    hideAuthorsButton();
    showTechnologiesButton();
    showAboutButton();
    showContactsButton();
    showFaqButton();
    document.getElementById('authors').style.display = "block";
}

function showContacts() {
    hideAllSections();
    hideContactsButton();
    showTechnologiesButton();
    showAboutButton();
    showAuthorsButton();
    showFaqButton();
    document.getElementById('contacts').style.display = "block";
}

function showFaq() {
    hideAllSections();
    hideFaqButton();
    showTechnologiesButton();
    showAboutButton();
    showAuthorsButton();
    showContactsButton();
    document.getElementById('faq').style.display = "block";
}

function hideAllSections() {
    document.getElementById('about').style.display = "none";
    document.getElementById('authors').style.display = "none";
    document.getElementById('contacts').style.display = "none";
    document.getElementById('faq').style.display = "none";
    document.getElementById('technologies').style.display = "none";
    document.getElementById('technologies-info').style.display = "none";
    document.getElementById('card-container').style.display = "none";
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
            title: "Nordic Sites",
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
            faq_title: "Часто задаваемые вопросы",
            java_sript_Info: "Для реализации интерактивных элементов и функционала, пишем чистый и оптимизированный код.",
            faq_contact_title: "Как связаться с вами?",
            faq_info: "Вы можете связаться с нами через раздел Контакты или написать на электронную почту.",
            faq_item_title: "Каковы ваши цены?",
            faq_item_info: "Цены зависят от проекта. Пожалуйста, свяжитесь с нами для получения более детальной информации.",
            faq_item_title_1: "Чем именно вы занимаетесь?",
            faq_item_title_2: "Мы также помогаем с доработкой и поддержкой существующих сайтов.",
            faq_item_title_3: "Почему нам стоит выбрать именно вас, а не более опытное агентство/фрилансера?",
            faq_item_info_1: "Мы создаем современные и эффективные сайты для бизнеса.",
            faq_item_info_2: "Наша специализация включает разработку продающих лендингов, информативных сайтов-визиток, функциональных корпоративных сайтов и интернет-магазинов.",
            faq_item_info_3: "Мы открыты к сотрудничеству с любым бизнесом, стремящимся усилить свое присутствие в интернете!",
            faq_item_info_4: "Особенно успешно работаем с малым и средним бизнесом, стартапами, специалистами (фрилансерами) и компаниями, оказывающими локальные услуги.",
            faq_item_info_5: "Наш подход позволяет найти решение для каждой ниши.",
            faq_item_info_6: "Как начинающая студия, мы делаем ставку на максимальную вовлеченность и индивидуальный подход каждому клиенту.",
            faq_item_info_7: "Вы получаете персонального менеджера и команду, которая будет сфокусирована именно на вашем проекте.",
            faq_item_info_8: "Мы предлагаем приятные цены без переплаты за громкое имя, используем современные технологии горим желанием доказать свою эффективность через ваш успех.",
            faq_item_info_9: "Для нас важен каждый проект!",
            themeLabel: "Тема:",
            lightOption: "Светлая",
            darkOption: "Тёмная",
            languageLabel: "Язык:",
            russianOption: "Русский",
            ukrainianOption: "Украинский",
            italianOption: "Итальянский",
            englishOption: "Английский",
            applyButton: "Применить"
        },
        en: {
            title: "Nordic Sites",
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
            faq_title: "Frequently asked questions",
            faq_contact_title: "How can I contact you?",
            faq_info: "You can contact us through the Contacts section or send us an email.",
            faq_item_title: "What are your prices?",
            faq_item_title_1: "What exactly do you do?",
            faq_item_title_2: "We also assist with refining and maintaining existing websites.",
            faq_item_title_3: "Why should we choose you over a more experienced agency/freelancer?",
            faq_item_info_1: "We create modern and effective business websites.",
            faq_item_info_2: "Our specialization includes developing sales landing pages, informative business card sites, functional corporate websites, and online stores.",
            faq_item_info_3: "We are open to collaborating with any business striving to strengthen its online presence!",
            faq_item_info_4: "We work especially well with small and medium businesses, startups, specialists (freelancers), and companies providing local services.",
            faq_item_info_5: "Our approach allows us to find a solution for every niche.",
            faq_item_info_6: "As a startup studio, we focus on maximum engagement and a personalized approach for each client.",
            faq_item_info_7: "You receive a personal manager and a team dedicated exclusively to your project.",
            faq_item_info_8: "We offer competitive prices without overpaying for a big name, use modern technologies, and are passionate about proving our effectiveness through your success.",
            faq_item_info_9: "Every project matters to us!",
            faq_item_info: "Prices depend on the project. Please contact us for more detailed information.",
            themeLabel: "Theme:",
            lightOption: "Light",
            darkOption: "Dark",
            languageLabel: "Language:",
            russianOption: "Russian",
            ukrainianOption: "Ukrainian",
            italianOption: "Italian",
            englishOption: "English",
            applyButton: "Apply"
        },
        ua: {
            title: "Nordic Sites",
            title_info: "Створення сучасних та адаптивних веб-сайтів",
            about: "Про нас",
            about_info: "Привіт! Ми команда, яка любить створювати красиві, зручні та функціональні веб-сайти. Ми не просто робимо сайти — ми вирішуємо бізнес-задачі за допомогою цифрових рішень. Для нас важливо, щоб ви залишилися задоволені не лише результатом, а й процесом. Ми завжди готові слухати, підказувати та допомагати. Давайте створимо сайт, який справді працюватиме на вас!",
            authors: "Автори",
            contacts: "Контакти",
            techTitle: "Наші технології",
            techDesc: "Ми створюємо сучасні та адаптивні веб-сайти, використовуючи такі технології:",
            settings: "Налаштування",
            apply: "Застосувати",
            email: "nordicsites1@gmail.com",
            telegram: "Telegram",
            instagram: "Instagram",
            footer: "Усі права захищені.",
            technologies: "Наші технології",
            technologies_info: "Ми створюємо сучасні та адаптивні веб-сайти, використовуючи такі технології:",
            html_info: "Щоб структурувати та розмічати сторінки, ми створюємо семантично правильний та чистий код.",
            css_info: "Для стилізації веб-сайтів ми створюємо привабливі та зручні інтерфейси з адаптивним дизайном.",
            java_sript_Info: "Щоб реалізувати інтерактивні елементи та функціональність, ми пишемо чистий та оптимізований код.",
            faq_title: "Поширені запитання",
            faq_contact_title: "Як я можу з вами зв'язатися?",
            faq_info: "Ви можете зв'язатися з нами через розділ 'Контакти' або надіслати нам електронного листа.",
            faq_item_title: "Які ваші ціни?",
            faq_item_title_1: "Чим саме ви займаєтесь?",
            faq_item_title_2: "Ми також допомагаємо з доопрацюванням та підтримкою існуючих сайтів.",
            faq_item_title_3: "Чому нам варто вибрати саме вас, а не більш досвідчене агентство/фрілансера?",
            faq_item_info_1: "Ми створюємо сучасні та ефективні сайти для бізнесу.",
            faq_item_info_2: "Наша спеціалізація включає розробку продаючих лендінгів, інформативних сайтів-візиток, функціональних корпоративних сайтів та інтернет-магазинів.",
            faq_item_info_3: "Ми відкриті до співпраці з будь-яким бізнесом, який прагне посилити свою присутність в інтернеті!",
            faq_item_info_4: "Особливо успішно працюємо з малим та середнім бізнесом, стартапами, спеціалістами (фрілансерами) та компаніями, які надають локальні послуги.",
            faq_item_info_5: "Наш підхід дозволяє знайти рішення для кожної ніші.",
            faq_item_info_6: "Як початкова студія, ми робимо ставку на максимальну залученість та індивідуальний підхід до кожного клієнта.",
            faq_item_info_7: "Ви отримуєте персонального менеджера та команду, яка буде сфокусована саме на вашому проекті.",
            faq_item_info_8: "Ми пропонуємо приємні ціни без переплати за гучне ім'я, використовуємо сучасні технології та палаємо бажанням довести свою ефективність через ваш успіх.",
            faq_item_info_9: "Для нас важливий кожен проект!",
            faq_item_info: "Ціни залежать від проекту. Будь ласка, зв'яжіться з нами для отримання детальнішої інформації.",
            themeLabel: "Тема:",
            lightOption: "Світла",
            darkOption: "Темна",
            languageLabel: "Мова:",
            russianOption: "Російська",
            ukrainianOption: "Українська",
            italianOption: "Італійський",
            englishOption: "Англійська",
            applyButton: "Застосувати"
        },
        it: {
            title: "Siti Nordici",
            title_info: "Creazione di siti web moderni e reattivi",
            about: "Chi Siamo",
            about_info: "Ciao! Siamo un team che ama creare siti web belli, user-friendly e funzionali. Non ci limitiamo a realizzare siti web: risolviamo problemi aziendali utilizzando soluzioni digitali. È importante per noi che tu sia soddisfatto non solo del risultato, ma anche del processo. Siamo sempre pronti ad ascoltare, consigliare e aiutare. Creiamo un sito web che funzionerà davvero per te!",
            authors: "Autori",
            contacts: "Contatti",
            techTitle: "Le Nostre Tecnologie",
            techDesc: "Creiamo siti web moderni e reattivi utilizzando le seguenti tecnologie:",
            settings: "Impostazioni",
            apply: "Applica",
            email: "nordicsites1@gmail.com",
            telegram: "Telegram",
            instagram: "Instagram",
            footer: "Tutti i diritti riservati.",
            technologies: "Le nostre tecnologie",
            technologies_info: "Creiamo siti web moderni e reattivi utilizzando le seguenti tecnologie:",
            html_info: "Per strutturare e contrassegnare le pagine, creiamo codice semanticamente corretto e pulito.",
            css_info: "Per stilizzare i siti web, creiamo interfacce attraenti e user-friendly con design reattivo.",
            java_sript_Info: "Per implementare elementi interattivi e funzionalità, scriviamo codice pulito e ottimizzato.",
            faq_title: "Domande frequenti",
            faq_contact_title: "Come posso contattarvi?",
            faq_item_title_1: "Cosa fate esattamente?",
            faq_item_title_2: "Aiutiamo anche con il perfezionamento e la manutenzione di siti web esistenti.",
            faq_item_title_3: "Perché dovremmo scegliere voi invece di un'agenzia/freelancer più esperta?",
            faq_item_info_1: "Creiamo siti web moderni ed efficaci per le aziende.",
            faq_item_info_2: "La nostra specializzazione include lo sviluppo di landing page di vendita, siti web informativi biglietti da visita, siti web aziendali funzionali e negozi online.",
            faq_item_info_3: "Siamo aperti a collaborare con qualsiasi azienda che mira a rafforzare la propria presenza online!",
            faq_item_info_4: "Lavoriamo con particolare successo con piccole e medie imprese, startup, specialisti (freelancer) e aziende che forniscono servizi locali.",
            faq_item_info_5: "Il nostro approccio ci consente di trovare una soluzione per ogni nicchia.",
            faq_item_info_6: "Come studio alle prime armi, puntiamo sul massimo coinvolgimento e un approccio personalizzato per ogni cliente.",
            faq_item_info_7: "Riceverai un manager personale e un team focalizzato esclusivamente sul tuo progetto.",
            faq_item_info_8: "Offriamo prezzi competitivi senza pagare un sovrapprezzo per un nome famoso, utilizziamo tecnologie moderne e bruciamo dal desiderio di dimostrare la nostra efficacia attraverso il tuo successo.",
            faq_item_info_9: "Ogni progetto è importante per noi!",
            faq_info: "Puoi contattarci tramite la sezione Contatti o inviarci un'email.",
            faq_item_title: "Quali sono i vostri prezzi?",
            faq_item_info: "I prezzi dipendono dal progetto. Ti preghiamo di contattarci per ulteriori informazioni.",
            themeLabel: "Tema:",
            lightOption: "Chiaro",
            darkOption: "Scuro",
            languageLabel: "Lingua:",
            russianOption: "Russo",
            ukrainianOption: "Ucraino",
            italianOption: "Italiano",
            englishOption: "Inglese",
            applyButton: "Applica"
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
    if (faqItems.length >= 5) {
        faqItems[0].querySelector('h3').textContent = translations[currentLanguage].faq_contact_title;
        const p0 = faqItems[0].querySelectorAll('p');
        if (p0.length >= 1) p0[0].textContent = translations[currentLanguage].faq_info;

        faqItems[1].querySelector('h3').textContent = translations[currentLanguage].faq_item_title;
        const p1 = faqItems[1].querySelectorAll('p');
        if (p1.length >= 1) p1[0].textContent = translations[currentLanguage].faq_item_info;

        faqItems[2].querySelector('h3').textContent = translations[currentLanguage].faq_item_title_1;
        const p2 = faqItems[2].querySelectorAll('p');
        if (p2.length >= 1) p2[0].textContent = translations[currentLanguage].faq_item_info_1;
        if (p2.length >= 2) p2[1].textContent = translations[currentLanguage].faq_item_info_2;

        faqItems[3].querySelector('h3').textContent = translations[currentLanguage].faq_item_title_2;
        const p3 = faqItems[3].querySelectorAll('p');
        if (p3.length >= 1) p3[0].textContent = translations[currentLanguage].faq_item_info_3;
        if (p3.length >= 2) p3[1].textContent = translations[currentLanguage].faq_item_info_4;
        if (p3.length >= 3) p3[2].textContent = translations[currentLanguage].faq_item_info_5;

        faqItems[4].querySelector('h3').textContent = translations[currentLanguage].faq_item_title_3;
        const p4 = faqItems[4].querySelectorAll('p');
        if (p4.length >= 1) p4[0].textContent = translations[currentLanguage].faq_item_info_6;
        if (p4.length >= 2) p4[1].textContent = translations[currentLanguage].faq_item_info_7;
        if (p4.length >= 3) p4[2].textContent = translations[currentLanguage].faq_item_info_8;
        if (p4.length >= 4) p4[3].textContent = translations[currentLanguage].faq_item_info_9;
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
        buttons[1].textContent = translations[currentLanguage].technologies;
        buttons[2].textContent = translations[currentLanguage].about;
        buttons[3].textContent = translations[currentLanguage].authors;
        buttons[4].textContent = translations[currentLanguage].contacts;
        buttons[5].textContent = "FAQ";
    }
    
    const settingsModal = document.getElementById('settingsModal');
    if (settingsModal) {
        settingsModal.querySelector('label[for="theme"]').textContent = translations[currentLanguage].themeLabel;
        settingsModal.querySelector('label[for="language"]').textContent = translations[currentLanguage].languageLabel;
        
        const themeSelect = document.getElementById('theme');
        themeSelect.options[0].text = translations[currentLanguage].lightOption;
        themeSelect.options[1].text = translations[currentLanguage].darkOption;
        
        const languageSelect = document.getElementById('language');
        languageSelect.options[0].text = translations[currentLanguage].englishOption;
        languageSelect.options[1].text = translations[currentLanguage].ukrainianOption;
        languageSelect.options[2].text = translations[currentLanguage].russianOption;
        languageSelect.options[3].text = translations[currentLanguage].italianOption;
        
        settingsModal.querySelector('.action-button').textContent = translations[currentLanguage].applyButton;
    }
    
    document.querySelector('footer p').textContent = `2025 Nordic Sites. ${translations[currentLanguage].footer}`;
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
