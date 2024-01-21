export default async function translateWord(word) {
  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "24c1d13f2dmshb1b109c2496ed28p101b71jsnddad1909d6c9",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: word,
      target: "es",
      source: "en",
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const translatedWord = result.data.translations[0].translatedText;
    return translatedWord;
  } catch (error) {
    console.error(error);
    return false;
  }
}
