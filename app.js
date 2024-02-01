/**
 * Criptografa uma string de entrada substituindo caracteres específicos.
 * @param {string} entrada - A string de entrada a ser criptografada.
 * @returns {string} - A string criptografada.
 */
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

/**
 * Descriptografa uma string criptografada, revertendo as substituições.
 * @param {string} criptografada - A string criptografada a ser descriptografada.
 * @returns {string} - A string descriptografada.
 */
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

/**
 * Valida se a entrada contém apenas letras minúsculas sem acentos.
 * @param {string} entrada - A string de entrada a ser validada.
 * @returns {boolean} - true se a entrada for válida, false caso contrário.
 */
const validarEntrada = (entrada) => {
   let apenasMinusculasSemAcento = /^[a-z\s]+$/;

   if (!apenasMinusculasSemAcento.test(entrada)) {
      return false;
   } else {
      return true;
   }
};

/**
 * Processa a criptografia da entrada do usuário e exibe os resultados.
 * @async
 */
const processamentoCriptografar = async () => {
   let entradaUsuario = document.getElementById("entrada").value;
   if (validarEntrada(entradaUsuario)) {
      escondeFoto();
      mostrarResultados("titulo", "Criptografada:");
      mostrarResultados("saida", criptografar(entradaUsuario));
      ativarBotaoDeCopiar();
   } else {
      if (entradaUsuarioVazia()) {
         mostrarResultados("titulo", "Caixa de entrada vazia...");
         mostrarResultados("saida", "");
         desativarBotaoDeCopiar();
      } else {
         mostrarResultados(
            "titulo",
            "Não pode ter letras maiúsculas ou caracteres especiais..."
         );
      }
   }
   await sleep(3000);
   processandoEntradaVazia();
};

/**
 * Processa a descriptografia da entrada do usuário e exibe os resultados.
 * @async
 */
const processamentoDescriptografar = async () => {
   let entradaUsuario = document.getElementById("entrada").value;
   if (validarEntrada(entradaUsuario)) {
      escondeFoto();
      mostrarResultados("titulo", "Descriptografada:");
      mostrarResultados("saida", descriptografar(entradaUsuario));
      ativarBotaoDeCopiar();
   } else {
      if (entradaUsuarioVazia()) {
         mostrarResultados("titulo", "Caixa de entrada vazia...");
         mostrarResultados("saida", "");
         desativarBotaoDeCopiar();
      } else {
         mostrarResultados(
            "titulo",
            "Não pode ter letras maiúsculas ou caracteres especiais..."
         );
      }
   }
   await sleep(5000);
   processandoEntradaVazia();
};

/**
 * Atualiza o conteúdo de um elemento HTML com uma mensagem.
 * @param {string} id - O ID do elemento HTML a ser atualizado.
 * @param {string} mensagem - A mensagem a ser exibida no elemento.
 */
const mostrarResultados = (id, mensagem) => {
   document.getElementById(id).textContent = mensagem;
};

/**
 * Ativa o botão de cópia para o usuário.
 */
const ativarBotaoDeCopiar = () => {
   let botaoEscondido = document.getElementById("copia");
   botaoEscondido.style.display = "block";
};

/**
 * Desativa o botão de cópia para o usuário.
 */
const desativarBotaoDeCopiar = () => {
   let botaoEscondido = document.getElementById("copia");
   botaoEscondido.style.display = "none";
};

/**
 * Aguarda o tempo especificado em milissegundos.
 * @param {number} milliseconds - O tempo de espera em milissegundos.
 * @returns {Promise} - Uma promise que é resolvida após o tempo de espera.
 */
const sleep = (milliseconds) => {
   return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

/**
 * Esconde a imagem exibida no conteúdo.
 */
const escondeFoto = () => {
   let esconderFoto = document.getElementById("img-desktop-1");
   esconderFoto.style.display = "none";
};

/**
 * Exibe a imagem no conteúdo.
 */
const mostraFoto = () => {
   let mostraFoto = document.getElementById("img-desktop-1");
   mostraFoto.style.display = "block";
};

/**
 * Copia o texto exibido na saída para a área de transferência.
 * @async
 */
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

/**
 * Realiza o processamento adequado quando a entrada do usuário está vazia.
 */
const processandoEntradaVazia = () => {
   if (entradaUsuarioVazia()) {
      mostrarResultados("titulo", "Nenhuma mensagem encontrada");
      mostrarResultados(
         "saida",
         "Digite um texto que você deseja criptografar ou descriptografar"
      );
      if (window.innerWidth >= 769 && window.innerWidth <= 1700) {
         mostraFoto();
      }
      desativarBotaoDeCopiar();
   }
};

/**
 * Verifica se a entrada do usuário está vazia.
 * @returns {boolean} - true se a entrada estiver vazia, false caso contrário.
 */
const entradaUsuarioVazia = () => {
   let entrada = document.getElementById("entrada").value;
   if (entrada.trim().length === 0) {
      return true;
   } else {
      return false;
   }
};
