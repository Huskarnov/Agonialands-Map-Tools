const findTileButton = document.querySelector('.tileFinder button');
const tile = document.querySelector('.tile');


findTileButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const tileX = document.querySelector('#xCoord')
    const tileY = document.querySelector('#yCoord')

    tile.style.gridColumn  = `${tileX.value - 5}`;
    tile.style.gridRow  = `${tileY.value - 80}`;
    tile.style.display = 'block';
    console.log('xxx');
});