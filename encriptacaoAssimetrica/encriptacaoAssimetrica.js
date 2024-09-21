import { generateKeyPairSync } from "crypto";

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

//console.log(publicKey);
//console.log(privateKey);

import { publicEncrypt, privateDecrypt } from "crypto";

//enviando informação pública
const dadosCriptografados = publicEncrypt(
  publicKey,
  Buffer.from("Mensagem super secreta")
);

console.log(dadosCriptografados.toString("hex"));

//recebendo a informação
const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados);

console.log(`Dados decifrados: ${dadosDecifrados.toString("utf-8")}`);
