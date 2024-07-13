import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.getElementById('text').addEventListener('input', (event) => {
  analyzer.getWordCount(event.target.value);
});



