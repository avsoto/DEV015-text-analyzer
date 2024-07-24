import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.querySelector("textarea").addEventListener('input', (event) => {
  analyzer.getWordCount(event.target.value);
  analyzer.getCharacterCount(event.target.value);
  analyzer.getCharacterCountExcludingSpaces(event.target.value);
  analyzer.getNumberCount(event.target.value);
  analyzer.getNumberSum(event.target.value);
  analyzer.getAverageWordLength(event.target.value);
});



document.getElementById("reset-button").addEventListener("click", () => {
  resetButton();
});

function resetButton(){
  const descriptions = [
    "Caracteres: 0",
    "Números: 0",
    "Caracteres sin espacio: 0",
    "Suma números: 0",
    "Palabras: 0",
    "Promedio longitud: 0"
  ];

  document.querySelector("textarea").value = "";
  const listItems = document.querySelectorAll(".stats");
  listItems.forEach((item, index) => {
    item.textContent = descriptions[index];
  });
}
