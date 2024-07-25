const analyzer = {
  getWordCount: (text) => {
    const whiteSpaces = /[ ]+/g;

    const words = text.split("").replace(whiteSpaces," ").trim();
    return words.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characters =  /[^a-zA-Z0-9]/g;

    text = text.replace(/\s+/g, "");
    text = text.replace(characters,"");

    return text.length;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const whiteSpaces = /[ ]+/g;
    const words = text.split(" ").trim().replace(whiteSpaces, " ");
    const num = words.length;

    let totalLength = 0;

    for(let i=0;i<words.length;i++){
      totalLength += words[i].length;
    }

    const averageWordLength = num > 0 ? (totalLength / num) : 0;
    return parseFloat(averageWordLength.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const wordArray = text.match(/-?\b\d+(\.\d+)?\b/g) || [];
    return wordArray.length;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

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
