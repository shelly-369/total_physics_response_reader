function speakOut(text, lang = "de") {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    if (lang === "en") {
        msg.lang = "en-US";
    } else if (lang === "de") {
        msg.lang = "de-DE";
    }
    window.speechSynthesis.speak(msg);
}