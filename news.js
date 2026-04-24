/*
 * ===========================================
 *   NEWS DATA — EliteStore
 * ===========================================
 *
 *   HOW TO ADD A NEW NEWS ITEM:
 *   1. Copy one of the objects below
 *   2. Paste it at the TOP of the array (newest first)
 *   3. Fill in the fields:
 *      - date: "YYYY-MM-DD" format
 *      - title_ua: title in Ukrainian
 *      - title_en: title in English
 *      - title_gr: title in Greek
 *      - desc_ua: description in Ukrainian
 *      - desc_en: description in English
 *      - desc_gr: description in Greek
 *
 *   TEMPLATE:
 *   {
 *       date: "2026-05-01",
 *       title_ua: "Заголовок українською",
 *       title_en: "Title in English",
 *       title_gr: "Τίτλος στα Ελληνικά",
 *       desc_ua: "Опис українською",
 *       desc_en: "Description in English",
 *       desc_gr: "Περιγραφή στα Ελληνικά"
 *   },
 *
 * ===========================================
 */

const NEWS_DATA = [
    {
        date: "2026-04-20",
        title_ua: "Новий дракон 'Розета'!",
        title_en: "New Dragon 'Rosetta'!",
        title_gr: "Νέος Δράκος 'Rosetta'!",
        desc_ua: "Представляємо нового чудового дракона Розета з гарними кристальними крилами!",
        desc_en: "Introducing the new magnificent dragon Rosetta with beautiful crystal wings!",
        desc_gr: "Παρουσιάζουμε το νέο υπέροχο δράκο Rosetta με όμορφα κρυσταλλικά φτερά!"
    },
    {
        date: "2026-04-15",
        title_ua: "Пасхальний івент!",
        title_en: "Easter Event!",
        title_gr: "Ιστορία Πάσχας!",
        desc_ua: "Спеціальний пасхальний івент з eksklusive тваринами!",
        desc_en: "Special Easter event with exclusive animals!",
        desc_gr: "Ειδικό γεγονός Πάσχας με αποκλειστικά ζώα!"
    },
    {
        date: "2026-04-10",
        title_ua: "Оновлення гри v1.2",
        title_en: "Game Update v1.2",
        title_gr: "Ενημέρωση Παιχνιδιού v1.2",
        desc_ua: "Нові функції, виправлення помилок та покращення перформансу!",
        desc_en: "New features, bug fixes and performance improvements!",
        desc_gr: "Νέα χαρακτηριστικά, διορθώσεις σφαλμάτων και βελτιώσεις απόδοσης!"
    }
];
