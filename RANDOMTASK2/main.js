function countWords(text) {
    const words = text.trim().split(/\s+/).filter(word => word !== "");
    return words.length;
}

const textArea = document.getElementById("text-area");
const resultArea = document.getElementById("result-area");

textArea.addEventListener("input", function () {
    const text = textArea.value;
    const wordCount = countWords(text);
    resultArea.textContent = `Kelime Sayısı: ${wordCount}`;
});
