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
   let apenasMinusculasSemAcento = /^[a-z\s]+$/;

   if (!apenasMinusculasSemAcento.test(entrada)) {
      return false;
   } else {
      return true;
   }
};

const processamentoCriptografar = async () => {
   let entradaUsuario = document.getElementById("entrada").value;
   if (validarEntrada(entradaUsuario)) {
      escondeFoto();
      mostrarResultados("titulo", "Criptografada:");
      mostrarResultados("saida", criptografar(entradaUsuario));
      ativarBotaoDeCopiar();
   } else {
      mostrarResultados(
         "titulo",
         "Não pode ter letras maiúsculas ou caracteres especiais..."
      );
   }
   await sleep(3000);
   entradaUsuarioVazia();
};

const processamentoDescriptografar = async () => {
   let entradaUsuario = document.getElementById("entrada").value;
   if (validarEntrada(entradaUsuario)) {
      escondeFoto();
      mostrarResultados("titulo", "Descriptografada:");
      mostrarResultados("saida", descriptografar(entradaUsuario));
      ativarBotaoDeCopiar();
   } else {
      mostrarResultados(
         "titulo",
         "Não pode ter letras maiúsculas ou caracteres especiais..."
      );
   }
   await sleep(3000);
   entradaUsuarioVazia();
};

const mostrarResultados = (id, mensagem) => {
   document.getElementById(id).textContent = mensagem;
};

const ativarBotaoDeCopiar = () => {
   let botaoEscondido = document.getElementById("copia");
   botaoEscondido.style.display = "block";
};

const desativarBotaoDeCopiar = () => {
   let botaoEscondido = document.getElementById("copia");
   botaoEscondido.style.display = "none";
};

const sleep = (milliseconds) => {
   return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const escondeFoto = () => {
   let esconderFoto = document.getElementById("img-desktop-1");
   esconderFoto.style.display = "none";
};

const mostraFoto = () => {
   let mostraFoto = document.getElementById("img-desktop-1");
   mostraFoto.style.display = "block";
};

const copiandoTexto = async () => {
   let texto = document.getElementById("saida").textContent;
   try {
      await navigator.clipboard.writeText(texto);
   } catch (err) {
      mostrarResultados("copia", "Erro!");
   }
   mostrarResultados("copia", "Copiado!");
   await sleep(3000);
   mostrarResultados("copia", "Copiar");
   entradaUsuarioVazia();
};

const entradaUsuarioVazia = () => {
   let entrada = document.getElementById("entrada").value;
   console.log(entrada.trim().length === 0);
   if (entrada.trim().length === 0) {
      mostrarResultados("titulo", "Nenhuma mensagem encontrada");
      mostrarResultados(
         "saida",
         "Digite um texto que você deseja criptografar ou descriptografar"
      );
      mostraFoto();
      desativarBotaoDeCopiar();
   }
};
