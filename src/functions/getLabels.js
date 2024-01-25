const labels = {
  en: {
    title: "Translgator",
    subtitle: "Test your knowledge of the translator profession",
    correct: "Correct",
    incorrect: "Incorrect, try again",
    congratulations: "Congratulations!",
    tryAgain: "Try again",
    whatIsTranslgatorTitle: "What is Translgator ?",
    whatIsTranslgatorDescription:
      "An app that helps memorize words in a language through quick missing letter quizzes",
    submit: "Submit",
    about: "About",
    home: "Home",
    enterHereToTranslate:
      "Enter a sentence/word here to reherse, challenge yourself!",
    translate: "Translate",
    check: "Check",
    fillTheBlanks: "Fill the blanks",
    error: "Error, please try again",
    pageNotAvailable: "Page not available",
    returnHome: "Return to home page",
    language: "Language",
    appTitle: "Enter a sentence/word here to reherse",
    inputPlaceholder: "Apple, Car, Hello, ...",
    toLanguage: "To",
    start: "Start",
    contact: "Contact",
  },
  ar: {
    title: "Translgator",
    subtitle: "اختبر معلوماتك عن مهنة المترجم",
    correct: "صحيح",
    incorrect: "خطأ ، حاول مرة أخرى",
    whatIsTranslgatorTitle: "؟Translgator ما هو  ",
    whatIsTranslgatorDescription:
      "تطبيق يساعد على حفظ الكلمات في لغة مراد تعلمها من خلال اختبارات سريعة للحروف المفقودة ",
    congratulations: "تهانينا!",
    tryAgain: "حاول مرة أخرى",
    submit: "إرسال",
    about: "حول",
    home: "الصفحة الرئيسية",
    enterHereToTranslate: "! أدخل كلمة او جملة لتختبر نفسك ، تحدى نفسك",
    translate: "ترجم",
    check: "تحقق",
    fillTheBlanks: "املأ الفراغات",
    error: "حدث خطأ ، حاول مرة أخرى",
    pageNotAvailable: "الصفحة غير متوفرة",
    returnHome: "العودة إلى الصفحة الرئيسية",
    language: "اللغة",
    appTitle: "أدخل كلمة او جملة لتختبر ذاكرتك ",
    inputPlaceholder: "تفاحة ، سيارة ، مرحبا ... الخ",
    toLanguage: "إلى",
    start: "ابدأ",
    contact: "للتواصل",
  },
};

export function getLabels(language) {
  return labels[language];
}
