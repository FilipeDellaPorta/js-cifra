# 🔐 Projeto: Ciframento de Mensagens em JavaScript

Este repositório contém um código simples em JavaScript para cifrar e decifrar mensagens utilizando a técnica de deslocamento de caracteres (Cifra de César). A mensagem original é transformada com base no valor de movimentos fornecido, e pode ser restaurada ao seu estado original utilizando o mesmo número de deslocamentos.

## 📜 Sobre o Projeto

O código implementa duas funções principais:
- **cifraMensagem:** Cifra a mensagem original, deslocando cada caractere um número de posições determinado.
- **decifraMensagem:** Decifra a mensagem cifrada, revertendo o deslocamento dos caracteres para a mensagem original.

### Exemplo de uso:

```javascript
const mensagemSecreta = "minhamensagemsecreta";

// Exibe a mensagem secreta original
console.log(mensagemSecreta);

// Cifra a mensagem com 3 movimentos
const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);
console.log(mensagemCifrada);

// Decifra a mensagem para verificar a integridade
const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);
console.log(mensagemDecifrada);
