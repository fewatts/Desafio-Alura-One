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
   let caracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
   let letrasMaiusculas = /[A-Z]/;
   let apenasMinusculas = /^[a-z]+$/;

   if (
      caracteresEspeciais.test(entrada) ||
      letrasMaiusculas.test(entrada) ||
      !apenasMinusculas.test(entrada)
   ) {
      return false;
   } else {
      return true;
   }
};

const processamentoCriptografar = () => {
   let inputUsuario = document.getElementById("input").value;
   if (validarEntrada(inputUsuario)) {
      console.log(criptografar(inputUsuario));
   } else {
      console.log("hmmm tem coisa errada ai");
   }
};

const processamentoDescriptografar = () => {
   let inputUsuario = document.getElementById("input").value;
   if (validarEntrada(inputUsuario)) {
      console.log(descriptografar(inputUsuario));
   } else {
      console.log("hmmm tem coisa errada ai");
   }
};

const mostrarResultados = () => {

}