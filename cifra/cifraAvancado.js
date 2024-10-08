const mensagem = "BANANA";
const mensagem2 = "ZUMBA";

const quantidadeDeMovimentos = 1;
const quantidadeDeMovimentos2 = 6;

console.log(mensagem2);

function cifrar(offset, mensagem) {
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let codLetraAscii = mensagem.charCodeAt(i);
    if (codLetraAscii >= 65 && codLetraAscii <= 90) {
      let calculoOffset = ((codLetraAscii - 65 + offset) % 26) + 65;
      resultado += String.fromCharCode(calculoOffset);
    } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
      let calculoOffset = ((codLetraAscii - 97 + offset) % 26) + 97;
      resultado += String.fromCharCode(calculoOffset);
    } else {
      resultado += String.fromCharCode(codLetraAscii);
    }
  }
  return resultado;
}

const mensagemCifrada = cifrar(quantidadeDeMovimentos2, mensagem2);
console.log(mensagemCifrada);

function decode(offset, mensagem) {
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let codLetraAscii = mensagem.charCodeAt(i);
    if (codLetraAscii >= 65 && codLetraAscii <= 90) {
      let calculoOffset = ((codLetraAscii - 90 - offset) % 26) + 90;
      resultado += String.fromCharCode(calculoOffset);
    } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
      let calculoOffset = ((codLetraAscii - 122 - offset) % 26) + 122;
      resultado += String.fromCharCode(calculoOffset);
    } else {
      resultado += String.fromCharCode(codLetraAscii);
    }
  }
  return resultado;
}

const mensagemDecifrada = decode(quantidadeDeMovimentos2, mensagemCifrada);
console.log(mensagemDecifrada);
