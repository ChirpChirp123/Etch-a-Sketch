//Focus on making a single 16x16 grid first before anything.


const body = document.querySelector('body');

    const container = document.createElement('div');
    container.style.cssText = "display:flex; flex-direction: column; background-color: grey; font-size: 3em; text-align: center;"
    container.textContent = "Hide the Cat!";

    const gridButton = document.createElement('button');
    gridButton.textContent = "beeboo";
    gridButton.style.cssText = "font-size: 48px;"
    gridButton.addEventListener('click', () => {
        //We want the numbers to be changed with a variable.
        //"16" is just a testing value.
        for(let i = 0; i <= 16; i++){
        createDiv(16, 16);
        }
    }, {
        once:true
    });

    const clearGrid = document.createElement('button');
    clearGrid.textContent = "Clear";
    clearGrid.style.cssText = "font-size: 48px";
    clearGrid.addEventListener('click', () =>{
        clear();
    })

    //Our drawing grid
    const gridContainer = document.createElement('div');
    gridContainer.className = 'gridContainer'

    const drawingGrid = document.createElement('div');
    drawingGrid.className = 'drawingGrid'

body.appendChild(gridButton);
body.appendChild(clearGrid);
body.appendChild(container);    
container.appendChild(gridContainer);
gridContainer.appendChild(drawingGrid);













//For creating a grid without >16 lines of code.

function createDiv(gridLength, gridWidth) {
    let x = gridLength;
    let y = gridWidth;

    for (let i = 0; i < x; i++){    //Length
        var row = document.createElement('div');
        row.className = 'row';                       //(.className) = Needed for CSS
        for (let j = 1; j <= y; j++){   //Width
            var cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
    let gridCells = document.querySelectorAll('.cell')
    gridCells.forEach(cell => cell.addEventListener('mouseover', () =>{
        cell.style.cssText = "background-color: blue;"
    }))
    gridContainer.appendChild(row);
}

//"Clearing" out the cells by selecting all cells created
//and changing its background color back to its default.

function clear(){
    let clear = document.querySelectorAll('.cell');
    clear.forEach(cell => cell.style.cssText = "background-color: navajowhite;");
}





















const bigButton = document.createElement('button');
bigButton.textContent = "Increase"
bigButton.addEventListener('click', () =>{

})

const smallButton = document.createElement('button');
smallButton.textContent = "Decrease"
smallButton.addEventListener('click', () =>{
    
})

function gridSize(change){
    if (change === "Smaller"){

    } else if (change === "Bigger"){

    } else {
        return;
    }
}