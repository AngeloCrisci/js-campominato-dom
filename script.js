console.log('JS OK')

// * #MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

//* FUNZIONI

// Funzione per creare celle

function createGrid(content) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.append(content);
    return grid;
}

// Funzione per creare le bombe

function generateBombs (totalGrids){
    const bombs = [];

    while(bombs.length < totalBombs){
        const randomNumber = Math.floor(Math.random() * totalGrids) + 1;
        if (!bombs.includes(randomNumber)) bombs.push(randomNumber);
    }

    return bombs;
}

//* FASE DI PREPARAZIONE
// Recupero gli elementi

const button = document.getElementById('play-button')
const grids = document.getElementById('grids')
const scoreElement = document.getElementById('score')

//* IMPOSTAZIONI INIZIALI

// (PER BONUS)
const totalBombs = 16;
let score = 0;
const rows = 9;
const cols = 9;
const totalGrids = 100;
const totalScore = totalGrids - totalBombs; 

// Creo le bombe

const bombs = generateBombs(totalGrids , totalBombs);
console.log(bombs);

// Aggiungo Button più creazioni delle griglie

button.addEventListener('click' , function (){
    // ! Blocco l'evento 
    event.preventDefault();

    grids.innerHTML = '';

    button.innerText = 'Ricomincia';

    // Creo le celle
    
    for( let i = 0; i < totalGrids ; i++){
        const grid = createGrid(i + 1);
        grids.appendChild(grid);

        grid.addEventListener('click', function (){
        console.log(i + 1)
        if(grid.classList.contains('active')) return;
           else {
             grid.classList.add('active') 
           }
        if(bombs.includes(i + 1)){
            console.log(`Hai perso, hai totalizzato ${score} punti`)
            grid.innerText = '',
            grid.classList.add('bomb')
        } else {
            score++;
            scoreElement.innerText = score;
            if(score === totalScore){
                console.log(`Hai vinto , hai totalizzato ${score} punti`)
            }
        }
        

       
    })
}
})
