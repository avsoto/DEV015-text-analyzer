const analyzer = {
  getWordCount: (text) => {
    const whiteSpaces = /[ ]+/g;

    text = text.replace(whiteSpaces," ").trim();
    const words = text.split(" ")
    return words.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // Expresión regular que coincide con cualquier carácter que no sea una letra o número
    const nonAlphanumeric =  /[^a-zA-Z0-9]/g;

    // Elimina espacios y signos de puntuación
    text = text.replace(nonAlphanumeric,"");

    return text.length;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // Dividir el texto en palabras
    const words = text.split(" ");

    //Calcular la longitud total de todas las palabras
    let totalLength = 0;

    for(let i=0;i<words.length;i++){
      totalLength += words[i].length;
    }

    // Calcular longitud media de las palabras
    const averageWordLength = totalLength/words.length;
    return parseFloat(averageWordLength.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const wordArray = text.match(/-?\b\d+(\.\d+)?\b/g) || [];
    return wordArray.length;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    if(text.endsWith(".")){
      text = text.slice(0,-1);
    }

    const wordsArray = text.split(" ");

    let suma = 0;

    for (const word of wordsArray) {

      const numero = Number(word);
      if (  !isNaN(numero) ) {
        suma = suma + numero
      }
    }
    return suma;
  },
};

export default analyzer;
