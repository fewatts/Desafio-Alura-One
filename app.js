const criptografar = (entrada) => {
   const substituicoes = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
   };

   return entrada
      .split("")
      .map((char) => substituicoes[char] || char)
      .join("");
};

const descriptografar = (criptografada) => {
   const substituicoesInvertidas = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
   };

   return criptografada.replace(
      /(enter|imes|ai|ober|ufat)/g,
      (match) => substituicoesInvertidas[match]
   );
};
