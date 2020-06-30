
const arrayOfPokemons = []
async function getPokemon(id) {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const response = await fetch(url);
  const pokemon = await response.json();
  arrayOfPokemons.push(pokemon)
}

async function getAllPokemons() {
	for (let i = 1; i < 152; i++) {
		await getPokemon(i);		
		arrayOfPokemons.sort(() => Math.random() - 0.5);		
  }
};

 
getAllPokemons();


const input = document.getElementById('pokeInput');
function startGame(){  
	generateImg()
	input.classList.remove("hide")
	startCountdown()
}


const pokemonImgContainer = document.getElementById('pokeImgContainer')
function generateImg(){		
	pokemonImgContainer.innerHTML = `<img src="https://pokeres.bastionbot.org/images/pokemon/${arrayOfPokemons[0].id}.png"/>`	
  pokemonImgContainer.className =`${arrayOfPokemons[0].types[0].type.name}`
}

let seconds = 60;
const h1 = document.querySelector('h1')
function countdown(){
		if((seconds - 1) >= 0){
			seconds = seconds - 1;			
				if(seconds < 10 ){
					seconds = "0" + seconds;
				} 
				h1.innerHTML = seconds
				if(seconds == 0){
					gameOver()
				}
		}
}

function startCountdown(){
	setInterval('countdown()', 1000)
}

input.addEventListener('keydown', function(event) {  
	if (event.keyCode === 13) {
		validateInput()
		input.value = ""
  }
});

let wins = 0
let loss = 0
function validateInput(){
	if (input.value == arrayOfPokemons[0].name){
		wins ++;
		generatePokemonCard(arrayOfPokemons[0].types[0].type.name)
	} else {
		generatePokemonCard(arrayOfPokemons[0].types[0].type.name + " failed")
		loss ++;
	}		
}


const pokedexArray = []
function generatePokemonCard(pokemonType) {		
	const types = arrayOfPokemons[0].types.map(typeInfo => typeInfo.type.name)	
	const pokemonCardHtml = `
	<div class="pokemonCard ${pokemonType}">
		<div class="pokemonCardImgContainer">
		<img class="pokemonCardImg" src="https://pokeres.bastionbot.org/images/pokemon/${arrayOfPokemons[0].id}.png" alt="${arrayOfPokemons[0].name}" /></div>
		<p class="pokemonIdNumber">#${arrayOfPokemons[0].id.toString()
			.padStart(3, '0')}</p>
		<h2 class="pokemonCardName">${arrayOfPokemons[0].name}</h2>
		<p class="pokemonType">${types.join(' | ')}</p>
	</div>
	`;
	pokedexArray.push(pokemonCardHtml)
	arrayOfPokemons.shift()
	generateImg()
}


function gameOver(){				
const pokedex = document.getElementById('pokedex')
const score = document.getElementById('score')
	pokemonImgContainer.remove();
	input.remove();
	let scoreResult = wins > loss ? h1.innerHTML = `YOU WIN` : h1.innerHTML = `YOU LOOSE`
	score.innerHTML = `<h3>ACERTOS: <span id="wins">${wins}</span> ERROS: <span id="loss">${loss}</span></h3>`
	pokedex.innerHTML = pokedexArray.join("")
}