import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const input = document.querySelector("textarea");
const characterCount = document.querySelector("li[data-testid=character-count]");
const numberCount = document.querySelector("li[data-testid=number-count]");
const characterNoSpacesCount = document.querySelector("li[data-testid=character-no-spaces-count]");
const numberSum = document.querySelector("li[data-testid=number-sum]");
const wordCount = document.querySelector("li[data-testid=word-count]");
const wordLengthAverage = document.querySelector("li[data-testid=word-length-average]");


input.addEventListener('input', function() {
  characterCount.innerHTML = "Caracteres:" + analyzer.getCharacterCount(input.value);
  numberCount.innerHTML = "Numeros:" + analyzer.getNumberCount(input.value);
  characterNoSpacesCount.innerHTML = "Caracteres sin espacios:" + analyzer.getCharacterCountExcludingSpaces(input.value);
  numberSum.innerHTML = "Suma numeros:" + analyzer.getNumberSum(input.value);
  wordCount.innerHTML = "Palabras:" + analyzer.getWordCount(input.value);
  wordLengthAverage.innerHTML = "Promedio longitud:" + analyzer.getAverageWordLength(input.value);

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

window.onload = function() {
  const initialData = ['Caracteres: 0', 'Números: 0', 'Caracteres sin espacio: 0', 'Suma números: 0', 'Palabras: 0', 'Promedio longitud: 0'];
  const listItems = document.querySelectorAll('.container ul li');

  listItems.forEach((li, index) => {
    if (initialData[index]) {
      li.textContent = initialData[index];
    }
  });
};
