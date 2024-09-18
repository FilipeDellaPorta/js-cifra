const mensagemSecreta = "alura";
const quantidadeDeMovimentos = 4;

console.log(mensagemSecreta);

function cifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos);
  });

  return mensagemCifrada.join("");
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, quantidadeDeMovimentos);

console.log(mensagemCifrada);

function decifraMensagem(mensagem, movimentos) {
  const mensagemDecifrada = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere - movimentos);
  });

  return mensagemDecifrada.join("");
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, quantidadeDeMovimentos);

console.log(mensagemDecifrada);
