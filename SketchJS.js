//Focus on making a single 16x16 grid first before anything.
//Currently, our problem is trying to figure out how we can
//change locally appended rows/cells.


//For loading the grid via JavaScript without button prompt.
window.addEventListener('load', () =>{
    createGrid(20);
})

const body = document.querySelector('body');

    const container = document.createElement('div');
    container.className = 'container';
    container.textContent = "Hide the Cat!";

    const promptButton = document.createElement('button');
    promptButton.textContent = "Adjust";
    promptButton.addEventListener('click', () => {
        adjustGrid();
    })

    const clearButton = document.createElement('button');   //"Erasing" the grids
    clearButton.textContent = "Clear";
    clearButton.addEventListener('click', () =>{
        let clear = document.querySelectorAll('.cell');
        clear.forEach(cell => cell.style.backgroundColor = "navajowhite");
    })

    const rgbButton = document.createElement('input');
    rgbButton.setAttribute("type", "color");
    rgbButton.id = "rgbButton";
    

    //Our drawing container
    const drawingGrid = document.createElement('div');
    drawingGrid.className = 'drawingGrid'

body.appendChild(promptButton);
body.appendChild(clearButton);
body.appendChild(rgbButton);
body.appendChild(container);    
container.appendChild(drawingGrid);


//"Clearing" out the cells by selecting all cells created
//and changing its background color back to its default.

function adjustGrid(){
    let gridVolume = parseInt(prompt("How many squares on each side?",""));

    if (gridVolume > 100) {
        return error();
    } else if ((gridVolume <= 100) && (gridVolume > 0)){
        deleteGrid();
        createGrid(gridVolume, gridVolume);
    } else if (gridVolume < 0){
        return error();  
    } else {
        return;
    }
}

function error(){
    alert ("Can't go over 100 or under 0, please use a smaller number");
    return adjustGrid();
}

//Saying that "while a 'firstChild' exists, remove it."
//A loop that'll only last as long as there are still nodes appended.
function deleteGrid() {
    while(drawingGrid.firstChild){
        drawingGrid.firstChild.remove();
    }
}

//Call this function 3 times in (style.backgroundColor = `rgb`) for random colors.
function randomColor(){
    return Math.floor(Math.random() * 255);
}

//We have to try and keep it all in one function.
//cellSize used to have our # of cells scale to the fixed size of the grid. 
function createGrid(x) {

//Creating//
    for (let i = 1; i <= x; i++){    //Length
        row = document.createElement('div');
        row.className = 'row';                      //*className*, needed for CSS styling
        let cellSize = (960/x);
        for (let j = 1; j <= x; j++){   //Width
            cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            cell.style.backgroundColor = "NavajoWhite";
            row.appendChild(cell);
        }
        drawingGrid.appendChild(row);  //Appending one after each round of loop.
    }
    let colorCell = document.querySelectorAll('.cell')
    colorCell.forEach(cell => cell.addEventListener('mouseover', () =>{
        cell.style.backgroundColor = "blue";
        cell.style.opacity = 0.1 + 0.1;
        //cell.style.backgroundColor = rgbButton.value;
    }));
}