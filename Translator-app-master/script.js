async function translateText() {
  const text = document.getElementById("inputText").value;
  const lang = document.getElementById("language").value;

  if (!text) {
    alert("Please enter some text");
    return;
  }

  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`
    );
    const data = await res.json();
    document.getElementById("outputText").innerText = data.responseData.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    document.getElementById("outputText").innerText = "Error translating text.";
  }
}
