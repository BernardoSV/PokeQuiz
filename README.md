# PokeQuiz - Quem é esse Pokémon?

 <img src="https://github.com/BernardoSV/PokeQuiz/blob/master/preview/poke.gif" />
 
 ---
 
Eu passava um bom tempo decorando os nomes dos Pokémons só para ter o prazer de acertar a pergunta que vinha antes do comercial: "Quem é esse Pokémon?". Então a primeira coisa que me veio a cabeça quando descobri a PokeAPI foi fazer esse joguinho. Basicamente você tem 60 segundos para acertar o máximo de Pokémons que puder, se acertar mais do que errar você ganha. 


Para rodar o projeto na sua máquina é só colocar o repositório e usar algum plugin como o Liveserver. 

### Explicando um pouco da Mecânica

O jogo todo trabalha em cima de um array com todos os 151 Pokémons da série inicial. Então a primeira obrigação do javascript é criar, popular e embaralhar esse array. Tudo que acontece depois é sempre se referindo ao Pokémon do índice 0.

  1. Gerar uma imagem
  2. Validar o input do usuário
  3. Marcar os pontos
  4. Gerar um card e salvá-lo em um novo array. (Esses cards serão exibidos depois no final do jogo.)
  
  Em seguida o JS exclui o Pokémon do indice 0 e reinicia o processo, dessa forma eu só preciso referenciar a posição 0 do Array, deixando tudo mais facil. 
 
--- 

**2 videos que me ajudaram muito no processo de criação desse projeto:** 
   * [Como desenvolver uma pokedex com JavaScript puro](https://youtu.be/Uptu3NrBFBM)
   * [PokeDex - JavaScript Tutorial - Day 19](https://youtu.be/XL68br6JyYs)
   
Eu fiz um deploy no surge, caso queiram testar o jogo: [PokeQuiz](http://pokequiz.surge.sh)

