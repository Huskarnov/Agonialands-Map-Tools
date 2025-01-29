const metals = [
    [[279,307],[269,277],[231,166],[203,269],[190,138],[308,217]],
    [[179,191],[264,312],[285,340],[245,217],[251,142],[211,201],[302,177]],
    [[208,271],[285,226],[255,213],[230,154],[185,229],[203,203]],
    [[202,260]],
    [[289,177],[290,177],[290,176],[291,176],
        [306,215],[307,215],[307,214],[307,213],[308,213],[308,214],[309,213],[309,214],
        [256,244],[257,244],[258,244],[256,245],[257,245],[258,245],[257,246],[258,246],
        [221,159],[222,159],[223,159],[221,160],[222,160],[223,160]]
];
// [],[],[],[],[],[],[]

const quests = [
    [[307,188],[313,186],[305,177],[288,192],[303,191],[312,180]],
    [[307,188],[294,193],[297,198],[277,201],[282,205],[290,212]],
    [[307,188],[274,198],[282,168],[283,210],[250,197],[284,227]],
    [[307,188],[208,103],[267,209],[263,245],[307,233],[278,287],[274,169]],
    [[307,188],[273,194],[284,232],[260,168],[282,306],[245,255],[183,102]],
    [[307,188],[247,167],[238,199],[314,215],[262,283],[213,188],[261,146],[217,92]],
    [[307,188],[212,171],[194,93],[236,151],[222,265],[231,288]],
    [[307,188],[204,207],[211,120],[249,285],[211,220]],
    [[307,188],[245,132],[215,189],[190,194],[204,161]],
    [[266, 192],[212,191],[185,129],[186,284]],
    [[266, 192],[262,274],[252,290]],
    [[238, 206],[264, 325],[175,137]],
    [[297,227]],
    [[297,227]],
    [[169,329]],
    [[275, 220],[294,220]],
    [[307,188],[238, 206]],
    [[307,188],[211,98]],
    [[266, 192],[229,180],[236,170]]
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
const lowBarSection4 = document.querySelector('.lowBarChoice');

const lowBarSection4Quests = document.querySelector('.lowBarChoice button:nth-child(1)');
const lowBarSection4Metals = document.querySelector('.lowBarChoice button:nth-child(2)');
const lowBarSection4TileFinder = document.querySelector('.lowBarChoice button:nth-child(3)');

const backButton = document.querySelector('.back');

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
        clearLowBar();
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

        // alert(mapGrid.getBoundingClientRect().width);
        // globalThis.scrollTo({ top: (2222), left: (2222), behavior: "smooth" });

    // globalThis.scrollTo({ top: (((inputY.value - 6)*(12.5))), left: ((inputX.value - 80)*(12.5)), behavior: "smooth" });

        // 265 321 

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

            clearLowBar();
            clearGrid();
            
    
            for( let y = data[g].length - 1; y >=0; y--){
            
                    const gridXcoord = (data[g])[y][0] - 5;
                    const gridYcoord = (data[g])[y][1] - 80;
    
                    const metalMarker = document.createElement('div');
                    metalMarker.style.gridColumn = `${gridXcoord - 1}`;
                    metalMarker.style.gridRow = `${gridYcoord}`;
                    
                    
                    if(y == 0 && (data.length > 6)){
                        metalMarker.classList.add('tile-giver');
                        metalMarker.classList.add('glowy-giver');
                    }else{
                        metalMarker.classList.add('tile');
                        metalMarker.classList.add('glowy');
                    };

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

function clearLowBar(){
//window.innerHeight > window.innerWidth
    
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

backButton.addEventListener('click',()=>{
    clearLowBar()
}); 

