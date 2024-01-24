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
      "Translgator is a an app that helps memorize words in a foreign language through quick missing letter quizzes.",
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
  },
  ar: {
    title: "Translgator",
    subtitle: "اختبر معلوماتك عن مهنة المترجم",
    correct: "صحيح",
    incorrect: "خطأ ، حاول مرة أخرى",
    whatIsTranslgatorTitle: "؟Translgator ما هو  ",
    whatIsTranslgatorDescription:
      ".هو تطبيق يساعد على حفظ الكلمات في لغة أجنبية من خلال اختبارات سريعة للحروف المفقودة Translgator",
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
  },
};

export function getLabels(language) {
  return labels[language];
}
