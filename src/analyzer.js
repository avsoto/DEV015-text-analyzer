const analyzer = {
  getWordCount: (text) => {
    const variosBlancos = /[ ]+/g;
    text = text.trim();

    text = text.replace(variosBlancos," ");

    const words = text.split(" ");
    const num = words.length;

    return num;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const wordCount = text.length;
    return wordCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres =  /[^a-zA-Z0-9]/g;

    text = text.replace(/\s+/g, "");
    text = text.replace(caracteres,"");

    const wordCount = text.length;
    return wordCount;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const variosBlancos = /[ ]+/g;

    text = text.trim().replace(variosBlancos, " ");

    const words = text.split(" ");
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
