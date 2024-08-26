console.log('JS OK')

// * #MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

//* FUNZIONI

function createGrid(content) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.append(content);
    return grid;
}

//* FASE DI PREPARAZIONE
// Recupero gli elementi

const button = document.getElementById('play-button')
const grids = document.getElementById('grids')

//* IMPOSTAZIONI INIZIALI

// (PER BONUS)
const rows = 9;
const cols = 9;
const totalGrids = rows + cols;

// Aggiungo Button più creazioni delle griglie

button.addEventListener('click' , function (){
    // ! Blocco l'evento 
    event.preventDefault();

    button.innerText = 'Ricomincia';

    // Creo le celle
    
    for( let i = 0; i < 100; i++){
        const grid = createGrid(i + 1);
        grids.appendChild(grid);

    grid.addEventListener('click', function (){
        console.log(i + 1)
        grid.classList.add('active')
        
    })
}
})
