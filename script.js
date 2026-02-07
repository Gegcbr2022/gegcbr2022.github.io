const translations = {
  ua: {
    brand: "Telegram CRM Bot",
    brand_tag: "Telegram CRM для заявок і підтримки",
    eyebrow: "Telegram-бот + Google Sheets = прозорий контроль",
    hero_title: "Додатковий канал роботи з клієнтами та повний контроль заявок",
    hero_sub: "Збирайте заявки, документи, звернення та відгуки. Усе в Telegram і збережено у Google Sheets.",
    cta_primary: "Зв'язатися",
    cta_secondary: "Написати в Telegram",
    pill_1: "Заявки",
    pill_2: "Документи",
    pill_3: "Платежі",
    pill_4: "Аналітика",
    stat_1: "Конверсія заявок",
    stat_2: "Втрачених документів",
    stat_3: "Єдиний канал комунікації",
    stat_note: "Дані в таблиці оновлюються автоматично",
    pain_title: "Болі сервісу",
    pain_1: "Клієнти скаржаться на якість відповіді",
    pain_2: "Менеджери не доводять угоди до кінця",
    pain_3: "Важливі документи губляться",
    pain_4: "Немає прозорої статистики",
    solution_title: "У нас є рішення",
    solution_text: "CRM Telegram Bot створює додатковий канал роботи з клієнтами, зберігає всі матеріали та дозволяє контролювати роботу менеджерів.",
    how_title: "Як це працює",
    how_1_title: "Сценарій в боті",
    how_1_text: "Клієнт заповнює форму, додає файли, залишає відгук.",
    how_2_title: "Telegram теми",
    how_2_text: "Для кожного клієнта створюється окремий топік.",
    how_3_title: "Google Sheets",
    how_3_text: "Дані, статуси, документи і оплати фіксуються автоматично.",
    how_4_title: "Аналітика",
    how_4_text: "Звіти за день, тиждень, рік та контроль KPI.",
    qr_title: "Відгуки про співробітників через QR",
    qr_text: "Персональні QR-коди на кожного працівника. Клієнт сканує, залишає оцінку і коментар. Дані зберігаються в таблиці, формується рейтинг і KPI.",
    qr_label: "QR для відгуків",
    pay_title: "Оплата через українські банки",
    pay_text: "Перекази через українські банки та реквізити, підтвердження квитанціями.",
    adapt_title: "Адаптація під будь-яку задачу",
    adapt_text: "Заявки, комерційні пропозиції, підтримка, збір лідів, внутрішні опитування.",
    track_title: "Відстеження джерел",
    track_text: "Реферальні посилання, QR, канали трафіку та прозора аналітика.",
    contact_title: "Зв'язатися",
    contact_text: "Напишіть нам у Telegram — відповімо швидко.",
    form_note: "Відкриється чат у Telegram.",
  },
  de: {
    brand: "Telegram CRM Bot",
    brand_tag: "Telegram CRM fur Anfragen und Support",
    eyebrow: "Telegram Bot + Google Sheets = volle Transparenz",
    hero_title: "Zusatzlicher Kundenkanal und volle Kontrolle uber Anfragen",
    hero_sub: "Sammeln Sie Anfragen, Dokumente, Support und Feedback. Alles in Telegram und in Google Sheets gespeichert.",
    cta_primary: "Kontakt aufnehmen",
    cta_secondary: "In Telegram schreiben",
    pill_1: "Anfragen",
    pill_2: "Dokumente",
    pill_3: "Zahlungen",
    pill_4: "Analytics",
    stat_1: "Conversion der Anfragen",
    stat_2: "Verlorene Dokumente",
    stat_3: "Ein einziger Kanal",
    stat_note: "Daten werden automatisch aktualisiert",
    pain_title: "Service-Probleme",
    pain_1: "Kunden beschweren sich uber Antworten",
    pain_2: "Deals werden nicht abgeschlossen",
    pain_3: "Wichtige Dokumente gehen verloren",
    pain_4: "Keine klare Statistik",
    solution_title: "Unsere Losung",
    solution_text: "Telegram schafft einen zusatzlichen Kundenkanal, speichert alle Materialien und macht Leistung messbar.",
    how_title: "So funktioniert es",
    how_1_title: "Bot-Prozess",
    how_1_text: "Kunden fullen das Formular aus und laden Dateien hoch.",
    how_2_title: "Telegram Threads",
    how_2_text: "Jeder Kunde bekommt einen eigenen Thread.",
    how_3_title: "Google Sheets",
    how_3_text: "Daten, Status, Dokumente und Zahlungen werden erfasst.",
    how_4_title: "Analytics",
    how_4_text: "Reports nach Tag, Woche, Jahr und KPI-Kontrolle.",
    qr_title: "Mitarbeiter-Feedback via QR",
    qr_text: "QR-Codes pro Mitarbeiter. Kunde bewertet und kommentiert. Daten in der Tabelle, Rankings und KPI.",
    qr_label: "QR fur Feedback",
    pay_title: "Zahlungen uber deutsche Banken",
    pay_text: "SEPA-Transfers oder Bankdaten, Belege als Bestatigung.",
    adapt_title: "Anpassbar fur jede Aufgabe",
    adapt_text: "Anfragen, Angebote, Support, Leads, interne Umfragen.",
    track_title: "Quellen-Tracking",
    track_text: "Referral-Links, QR, Traffic-Kanale und transparente Analytik.",
    contact_title: "Kontakt aufnehmen",
    contact_text: "Schreiben Sie uns in Telegram — wir antworten schnell.",
    form_note: "Der Telegram-Chat wird geoffnet.",
  }
};

const buttons = document.querySelectorAll(".lang-btn");
const textNodes = document.querySelectorAll("[data-i18n]");
const placeholders = document.querySelectorAll("[data-i18n-placeholder]");

function setLanguage(lang) {
  textNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });

  placeholders.forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      node.setAttribute("placeholder", translations[lang][key]);
    }
  });

  buttons.forEach((btn) => btn.classList.remove("is-active"));
  document.querySelector(`[data-lang="${lang}"]`).classList.add("is-active");
  document.documentElement.lang = lang === "ua" ? "uk" : "de";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

setLanguage("ua");

