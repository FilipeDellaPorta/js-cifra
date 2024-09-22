import { generateKeyPairSync, createSign, createVerify } from "crypto";

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

let dados = "Essa string vai ser assinada.";

//Assinatura
const assinador = createSign("rsa-sha256");
assinador.update(dados);

const assinatura = assinador.sign(privateKey, "hex");
console.log(`Assinatura: ${assinatura}`);

//Intermediário (alguém que mudou/trocou alguma informação no meio do caminho) vai retornar false no isVerificado
//dados += " Arquivo alterado.";

//Envio deste documento => Documento, assinatura e chave pública
const verificador = createVerify("rsa-sha256");
verificador.update(dados);

const isVerificado = verificador.verify(publicKey, assinatura, "hex");
console.log(isVerificado);
