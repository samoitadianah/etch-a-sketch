let container = document.getElementById('container');
let resetBtn = document.getElementById('reset');
let eraseBtn = document.getElementById('erase');
let blackBtn = document.getElementById('blackBtn');
let colorBtn = document.getElementById('colorful');
let shadesBtn = document.getElementById('shades');

function clearGrid() {
    if(container.hasChildNodes()){
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
    }
}
function makegrid(grid){    
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    for(let i=0;i<(grid*grid);i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "gridCell";
    }
}

function request(){
    clearGrid();
    let gridSize = Number(prompt('Enter a grid size (Max size 64)'));
    if(gridSize>64 || gridSize === 0 ){
        alert('Please enter a number less than 64');
        makegrid(16);
    } else{
        makegrid(gridSize);
    }
    paintBlack();
}

request();

function randomColor(){
    let colors = ['RGB(192, 192, 192)', 'RGB(128, 128, 128)', 'RGB(255, 0, 0)', 'RGB(128, 0, 0)', 'RGB(255, 255, 0)', 'RGB(128, 128, 0)', 'RGB(0, 255, 0)', 'RGB(0, 128, 0)', 'RGB(0, 255, 255)', 'RGB(0, 128, 128)', 'RGB(0, 0, 255)', 'RGB(0, 0, 128)', 'RGB(255, 0, 255))', 'RGB(128, 0, 128))', 'RGB(255, 87, 51)', 'RGB(255, 160, 122)', 'RGB(233, 150, 122)', 'RGB(250, 128, 114)', 'RGB(240, 128, 128)', 'RGB(205, 92, 92)', 'RGB(128,0,0)', 'RGB(139,0,0)', 'RGB(165,42,42)', 'RGB(178,34,34)', 'RGB(220,20,60)', 'RGB(255,99,71)', 'RGB(255,127,80)', 'rgb(184,134,11)'];

    let value = Math.floor(Math.random()*(colors.length-1)
    );
    return colors[value];
}
function paintBlack(){
    let gridCell = document.querySelectorAll('.gridCell');
    let cells = Array.from(gridCell);
    cells.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            elem.style.backgroundColor = "black";
            elem.style.borderColor = "white";
        });
    });
}
function eraseCell() {
    let gridCell = document.querySelectorAll('.gridCell');
    let blackCells = Array.from(gridCell);
    blackCells.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            elem.style.backgroundColor = "white";
            elem.style.borderColor = "#d8d8d8";
        });
    });
}
function colorfulCell() {
    let gridCell = document.querySelectorAll('.gridCell');
    let colorCells = Array.from(gridCell);
    colorCells.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            elem.style.backgroundColor = randomColor();
            elem.style.borderColor = "#d8d8d8";
        });
    });
}
function shadesCell() {
    let gridCell = document.querySelectorAll('.gridCell');
    let shadesCell = Array.from(gridCell);
    let blackShades =['#7a7a7a', '#707070', '#666666', '#5c5c5c', '#525252', '#474747', "#3d3d3d", '#333333', '#292929', '#1f1f1f', '#141414', '#0a0a0a', '#000000'];
    let val = 0;
    shadesCell.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            if (val<10){val++;}
            elem.style.backgroundColor = "black";
            elem.style.opacity = Number(elem.style.opacity)+0.1;
            elem.style.borderColor = "#d8d8d8";
        });
    });
}

resetBtn.addEventListener('click', () => {
    request();
});

eraseBtn.addEventListener('click', () => {
    eraseCell();
})
blackBtn.addEventListener('click', () => {
    paintBlack();
})
colorBtn.addEventListener('click', () => {
    colorfulCell();
})
shadesBtn.addEventListener('click', () => {
    shadesCell();
})