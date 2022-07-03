// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();
    		
let forcaDoAtaqueJogador1=0;
let forcaDoAtaqueJogador2=0;

  if (jogador1.toUpperCase() === "ATAQUE") forcaDoAtaqueJogador1 = 3;
  else if (jogador1.toUpperCase() === "PEDRA") forcaDoAtaqueJogador1 = 2;
  else if (jogador1.toUpperCase() === "PAPEL") forcaDoAtaqueJogador1 = 1;

  if (jogador2.toUpperCase() === "ATAQUE") forcaDoAtaqueJogador2 = 3;
  else if (jogador2.toUpperCase() === "PEDRA") forcaDoAtaqueJogador2 = 2;
  else if (jogador2.toUpperCase() === "PAPEL") forcaDoAtaqueJogador2 = 1;

  if (jogador1 && jogador2) {
  if(jogador1 >=0 || jogador1 < 0 || jogador2 >=0 || jogador2 < 0) print("Faça uma entrada válida");
  else if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE") print("Aniquilacao mutua");
  else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL") print("Ambos venceram");

  else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PEDRA") print("Sem ganhador");

  else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu");
  else if (jogador1.toUpperCase() === "PEDRA " && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu");

  else if (forcaDoAtaqueJogador1 > forcaDoAtaqueJogador2) print("Jogador 1 venceu");

  else if (forcaDoAtaqueJogador1 < forcaDoAtaqueJogador2) print("Jogador 2 venceu");

}
  else print("Faça uma entrada válida");
}
