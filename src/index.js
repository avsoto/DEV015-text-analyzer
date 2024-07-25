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
  characterCount.innerHTML = "Characters: " + analyzer.getCharacterCount(input.value);
  numberCount.innerHTML = "Numbers: " + analyzer.getNumberCount(input.value);
  characterNoSpacesCount.innerHTML = "Character excluding spaces: " + analyzer.getCharacterCountExcludingSpaces(input.value);
  numberSum.innerHTML = "Number sum: " + analyzer.getNumberSum(input.value);
  wordCount.innerHTML = "Words: " + analyzer.getWordCount(input.value);
  wordLengthAverage.innerHTML = "Average word length: " + analyzer.getAverageWordLength(input.value);

});


document.getElementById("reset-button").addEventListener("click", () => {
  resetButton();
});

function resetButton(){
  const descriptions = [
    "Characters: 0",
    "Numbers: 0",
    "Character excluding spaces: 0",
    "Number sum: 0",
    "Words: 0",
    "Average word length: 0"
  ];

  document.querySelector("textarea").value = "";
  const listItems = document.querySelectorAll(".stats");
  listItems.forEach((item, index) => {
    item.textContent = descriptions[index];
  });
}

window.onload = function() {
  const initialData = ['Characters: 0', 'Numbers: 0', 'Character excluding spaces: 0', 'Number sum: 0', 'Words: 0', 'Average word length: 0'];
  const listItems = document.querySelectorAll('.container ul li');

  listItems.forEach((li, index) => {
    if (initialData[index]) {
      li.textContent = initialData[index];
    }
  });
};
