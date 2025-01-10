const metals = {
    copper : []
};

const quests = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

/* 4019 3313
    321 265 */

const mapGrid = document.querySelector('.mapGrid');
const findTileButton = document.querySelector('.lowBarSection:last-child button');
const tile = document.querySelector('.tile');
const inputX = document.querySelector('#xCoord');
const inputY = document.querySelector('#yCoord');
let previousTile ;

const questButtonsWrapper = document.querySelector('.lowBarSection:nth-child(1) > div');

// //////////////////////////////////////////////////////////
mapGrid.addEventListener('click', (event) =>{

    if (event.target === event.currentTarget){
    
    const x = event.offsetX;
    const y = event.offsetY;

    const collumnX = Math.floor((x/12.5 + 7)) - 5;
    const rowY = Math.floor((y/12.5)) + 1;

    let clickedTile = document.createElement('div');
    clickedTile.style.width = '12.5px';
    clickedTile.style.height = '12.5px';
    clickedTile.style.gridColumn = `${collumnX}`;
    clickedTile.style.gridRow = `${rowY}`
    clickedTile.classList.add('glowy');
    clickedTile.classList.add('tile');
    clickedTile.style.display = 'block';

    tile.style.display = 'none';
    inputX.value = collumnX + 5;
    inputY.value =rowY + 80;    

    if(mapGrid.children.length >1){
    mapGrid.removeChild(mapGrid.children[1]);   
    }

    mapGrid.appendChild(clickedTile);


    
    }else{
        mapGrid.removeChild(mapGrid.children[1]);
    };

});

// //////////////////////////////////////////////////////////
findTileButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const inputX = document.querySelector('#xCoord');
    const inputY = document.querySelector('#yCoord');

    if(inputX.value > 5 && inputX.value < 328 && inputY.value > 80 && inputY.value < 346){

    tile.style.gridColumn  = `${inputX.value - 5}`;
    tile.style.gridRow  = `${inputY.value - 80}`;
    tile.classList.add('glowy');
    tile.style.display = 'block';

    setTimeout(() => {
    tile.classList.remove('glowy');
        
    }, 10000);

    if(mapGrid.children.length > 1){
        (mapGrid.children[1]).style.display = 'none';
            };

        }else{
            alert('Coordinates in outer space, get back Elon');
        };        
});
// //////////////////////////////////////////////////////////

for (let i = 9; i >= 1; i--){
    questButtonsWrapper[i].addEventListener('click', (event) => {

    });
};