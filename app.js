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

const validarEntrada = (entrada) => {
   let apenasMinusculasSemEspacos = /^[a-z\s]+$/;

   if (!apenasMinusculasSemEspacos.test(entrada)) {
      return false;
   } else {
      return true;
   }
};

const processamentoCriptografar = () => {
   let inputUsuario = document.getElementById("input").value;
   if (validarEntrada(inputUsuario)) {
      mostrarResultados("h2", "");
      mostrarResultados("p", criptografar(inputUsuario));
   } else {
      mostrarResultados("h2", "");
      mostrarResultados(
         "p",
         "Não pode ter letras maiúsculas ou caracteres especiais..."
      );
   }
};

const processamentoDescriptografar = () => {
   let inputUsuario = document.getElementById("input").value;
   if (validarEntrada(inputUsuario)) {
      mostrarResultados("h2", "");
      mostrarResultados("p", descriptografar(inputUsuario));
   } else {
      mostrarResultados("h2", "");
      mostrarResultados(
         "p",
         "Não pode ter letras maiúsculas ou caracteres especiais..."
      );
   }
};

const mostrarResultados = (id, mensagem) => {
   document.getElementById(id).textContent = mensagem;
};
