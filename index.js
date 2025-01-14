const metals = [
    [[279,307],[223,191],[269,277],[231,166],[203,269],[190,138],[308,217]],
    [[179,191],[264,312],[285,340],[245,217],[251,142],[211,201],[302,177]],
    [[208,271],[285,226],[255,213],[230,154],[185,229]],
    [[202,260]]
];
// [],[],[],[],[],[],[]

const quests = [
    [[313,186],[305,177],[288,192],[303,191],[312,180]],
    [[294,193],[297,198],[277,201],[282,205],[290,212]],
    [[274,198],[282,168],[283,210],[250,197],[284,227]],
    [[208,103],[267,209],[263,245],[307,233],[278,287],[274,169]],
    [[273,194],[284,232],[260,168],[282,306],[245,255],[183,102]],
    [[247,167],[238,199],[314,215],[262,283],[213,188],[261,146],[217,92]],
    [[212,171],[194,93],[236,151],[222,265],[231,288]],
    [[204,207],[211,120],[249,285],[211,220]],
    [[245,132],[215,189],[190,194],[204,161]],
    [[212,191],[185,129],[186,284]],
    [[262,274],[252,290]]
];



/* 4019 3313
    321 265 */

const mapGrid = document.querySelector('.mapGrid');
const findTileButton = document.querySelector('.lowBarSection:nth-child(3) button');
const tile = document.querySelector('.tile');
const inputX = document.querySelector('#xCoord');
const inputY = document.querySelector('#yCoord');
const inputWrapperX = document.querySelector('.inputWrapper:nth-child(1)');
const inputWrapperY = document.querySelector('.inputWrapper:nth-child(2)');

const questButtonsWrapper = document.querySelector('.lowBarSection:nth-child(1) div');
const metalButtonsWrapper = document.querySelector('.lowBarSection:nth-child(2) div');

const lowBarSection1 = document.querySelector('.lowBarSection:nth-child(1)');
const lowBarSection2 = document.querySelector('.lowBarSection:nth-child(2)');
const lowBarSection3 = document.querySelector('.lowBarSection:nth-child(3)');
const lowBarSection4 = document.querySelector('.lowBarSection:nth-child(4)');

const lowBarSection4Quests = document.querySelector('.lowBarSection:nth-child(4) button:nth-child(1)');
const lowBarSection4Metals = document.querySelector('.lowBarSection:nth-child(4) button:nth-child(2)');
const lowBarSection4TileFinder = document.querySelector('.lowBarSection:nth-child(4) button:nth-child(3)');


// ////////////////////GET TILE COORDS////////////////////////////
mapGrid.addEventListener('click', (event) =>{

    if (event.target === event.currentTarget){
    
    const x = event.offsetX;
    const y = event.offsetY;

    const collumnX = Math.floor((x/12.5 + 7)) - 5;
    const rowY = Math.floor((y/12.5)) + 1;

    let clickedTile = document.createElement('div');
    clickedTile.style.width = '12.5px';
    clickedTile.style.height = '12.5px';
    clickedTile.style.gridColumn = `${collumnX - 1}`;
    clickedTile.style.gridRow = `${rowY}`
    clickedTile.classList.add('glowy');
    clickedTile.classList.add('tile');
    clickedTile.style.display = 'block';

    tile.style.display = 'none';
    inputX.value = collumnX + 5;
    inputY.value =rowY + 80;    

    clearGrid();

    mapGrid.appendChild(clickedTile); //After clean up !!!

    inputWrapperX.classList.remove('shine');
    inputWrapperY.classList.remove('shine');
    inputWrapperX.classList.add('shine');
    inputWrapperY.classList.add('shine');


    }else{
        clearGrid();
    };
    
});
// /////////////////////////ESCAPE TILES CLEAR EVENT///////////////////////////////////
document.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape'){
        clearGrid();
    };
});
// ///////////////////////////TILE FINDER EVENT///////////////////////////////
findTileButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const inputX = document.querySelector('#xCoord');
    const inputY = document.querySelector('#yCoord');

    if(inputX.value > 5 && inputX.value < 328 && inputY.value > 80 && inputY.value < 346){

    tile.style.gridColumn  = `${inputX.value - 6}`;
    tile.style.gridRow  = `${inputY.value - 80}`;
    tile.classList.add('glowy');
    tile.style.display = 'block';

    clearGrid();

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
// ///////////////////////FEED button events to QUEST METAL BUTTONS///////////////////////////////
const buttonsEvents = function(data, buttonWrapper){
    for (let g = 0; g <= buttonWrapper.children.length - 1; g++){
        buttonWrapper.children[g].addEventListener('click', (event) => {
    
            clearGrid();
            
    
            for( let y = data[g].length - 1; y >=0; y--){
            
                    const gridXcoord = (data[g])[y][0] - 5;
                    const gridYcoord = (data[g])[y][1] - 80;
    
                    const metalMarker = document.createElement('div');
                    metalMarker.style.gridColumn = `${gridXcoord - 1}`;
                    metalMarker.style.gridRow = `${gridYcoord}`;
                    metalMarker.classList.add('tile');
                    metalMarker.classList.add('glowy');
                    metalMarker.style.display = 'block';
                    mapGrid.appendChild(metalMarker);
    
                    tile.style.display ='none';
                    
                };
    
            }
        );
    };
};
// //////////////////////////////////////////////////////////

buttonsEvents(quests, questButtonsWrapper);
buttonsEvents(metals, metalButtonsWrapper);

let clearGrid = function(){
    if(mapGrid.children.length > 1){ //remove all other tiles
        for( let i = mapGrid.children.length -1; i >= 1; i--){
            mapGrid.removeChild(mapGrid.children[i]);   
        };
    }
};

let clearLowBar = function(){
    lowBarSection1.style.display = 'none'
    lowBarSection2.style.display = 'none'
    lowBarSection3.style.display = 'none'
    lowBarSection4.style.display = 'flex'
}

lowBarSection4Quests.addEventListener('click', ()=>{
    lowBarSection1.style.display = 'flex'
    lowBarSection4.style.display = 'none'

});
lowBarSection4Metals.addEventListener('click', ()=>{
    lowBarSection2.style.display = 'flex'
    lowBarSection4.style.display = 'none'
});
lowBarSection4TileFinder.addEventListener('click', ()=>{
    lowBarSection3.style.display = 'flex'
    lowBarSection4.style.display = 'none'
});
