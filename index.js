const metals = {
    copper : []
};
// 
const quests = [
    [[313,186], [305, 177],[288,192],[303, 191],[312, 180]],
    [[294,193],[297,198],[277,201],[282,205],[290,212]],
    [[274,198],[282,168],[283,210],[250,197],[284,227]],
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

    if(mapGrid.children.length > 1){
        for( let i = mapGrid.children.length -1; i >= 1; i--){
            mapGrid.removeChild(mapGrid.children[i]);   
        };
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

    if(mapGrid.children.length > 1){
        for( let i = mapGrid.children.length -1; i >= 1; i--){
            mapGrid.removeChild(mapGrid.children[i]);   
        };
    }

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

//give quest buttons activation
for (let i = 0; i <= 8; i++){
    questButtonsWrapper.children[i].addEventListener('click', (event) => {

        // if (mapGrid.children.length > 0){
        //     for(let c = mapGrid.children.length - 1; c >= 1; c--){

        //         const childToRemove = mapGrid.children[c];
        //         mapGrid.removeChild(childToRemove);
        //         console.log('x');

        //     };
        // };
        if(mapGrid.children.length > 1){
            for( let i = mapGrid.children.length -1; i >= 1; i--){
                mapGrid.removeChild(mapGrid.children[i]);   
            };
        }
        

        for( let y = quests[i].length - 1; y >=0; y--){
        

                const gridXcoord = (quests[i])[y][0] - 5;
                const gridYcoord = (quests[i])[y][1] - 80;

                console.log(gridXcoord, gridYcoord);

                const questMarker = document.createElement('div');
                questMarker.style.gridColumn = `${gridXcoord}`;
                questMarker.style.gridRow = `${gridYcoord}`;
                questMarker.classList.add('tile');
                questMarker.classList.add('glowy');
                questMarker.style.display = 'block';
                mapGrid.appendChild(questMarker);
                tile.style.display ='none';
                

            };

        }
    );
};
// //////////////////////////////////////////////////////////
