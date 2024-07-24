const analyzer = {
  getWordCount: (text) => {
    const metricItems = document.querySelectorAll('.container ul li');
    const variosBlancos = /[ ]+/g;

    text = text.trim();

    text = text.replace(variosBlancos," ");

    const words = text.split(" ");
    const num = words.length;

    metricItems[4].innerHTML = "Palabras: " + `${num}`;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const metricItems = document.querySelectorAll('.container ul li');

    const wordCount = text.length;
    metricItems[0].innerHTML = "Caracteres: " + `${wordCount}`;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const metricItems = document.querySelectorAll('.container ul li');
    const caracteres =  /[^a-zA-Z0-9]/g;

    text = text.replace(/\s+/g, "");
    text = text.replace(caracteres,"");

    const wordCount = text.length;
    metricItems[2].innerHTML = "Caracteres sin espacio: " + `${wordCount}`;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const metricItems = document.querySelectorAll('.container ul li');
    const variosBlancos = /[ ]+/g;

    text = text.trim().replace(variosBlancos, " ");

    const words = text.split(" ");
    const num = words.length;

    let totalLength = 0;

    for(let i=0;i<words.length;i++){
      totalLength += words[i].length;
    }

    const averageWordLength = num > 0 ? (totalLength / num).toFixed(2) : 0;

    metricItems[5].innerHTML = "Promedio longitud: " + `${averageWordLength}`;

  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const metricItems = document.querySelectorAll('.container ul li');
    const numeros = /[^0-9]/g;

    text = text.replace(numeros,"").length;

    metricItems[1].innerHTML = "Números: " + `${text}`;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const metricItems = document.querySelectorAll('.container ul li');
    const numeros = /\d+/g;
    let suma = 0;

    const numerosEnTexto = text.match(numeros);

    if (numerosEnTexto !== null) {
      numerosEnTexto.forEach(numeroStr => {
        const numero = parseInt(numeroStr, 10); // Convertir la cadena a número entero
        suma =suma + numero; // Sumar el número a 'suma'
      });
    }

    metricItems[3].innerHTML = "Suma números: " + `${suma}`;

  },
};

export default analyzer;
