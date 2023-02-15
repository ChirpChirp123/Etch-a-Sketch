//Focus on making a single 16x16 grid first before anything.
//Currently, our problem is trying to figure out how we can
//change locally appended rows/cells.


//For loading the grid via JavaScript without button prompt.
window.addEventListener('load', () =>{
    createGrid(16,16);
})

const body = document.querySelector('body');

    const container = document.createElement('div');
    container.style.cssText = "display:flex; align-items: center; flex-direction: column; background-color: grey; font-size: 3em; text-align: center;"
    container.textContent = "Hide the Cat!";

    const gridButton = document.createElement('button');
    gridButton.textContent = "beeboo";
    gridButton.addEventListener('click', () => {
        //We want the numbers to be changed with a variable.
        //"16" is just a testing value.
        let x = 20;
        createGrid(x,x);
    }, {
        once:true
    });

    const promptButton = document.createElement('button');
    promptButton.textContent = "Adjust";
    promptButton.addEventListener('click', () => {
        adjustGrid();
    })

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {

        while (drawingGrid.firstChild){
        drawingGrid.firstChild.remove();                    //WORKS. Telling the drawingGrid to remove nodes (children);
        }
    })

    const clearButton = document.createElement('button');
    clearButton.textContent = "Clear";
    clearButton.addEventListener('click', () =>{
        clear();
    })

    //Our drawing containers
    const gridContainer = document.createElement('div');
    gridContainer.className = 'gridContainer'

    const drawingGrid = document.createElement('div');
    drawingGrid.className = 'drawingGrid'

body.appendChild(gridButton);
body.appendChild(promptButton);
body.appendChild(deleteButton);
body.appendChild(clearButton);
body.appendChild(container);    
container.appendChild(gridContainer);
gridContainer.appendChild(drawingGrid);


//"Clearing" out the cells by selecting all cells created
//and changing its background color back to its default.

function clear(){       //"Erasing" the grids
    let clear = document.querySelectorAll('.cell');
    clear.forEach(cell => cell.style.cssText = "background-color: navajowhite;");
}

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

function deleteGrid() {
    while(drawingGrid.firstChild){
        drawingGrid.firstChild.remove();
    }
}



//We have to try and keep it all in one function.
//Try doing a conditional statement that can have the grid remove rows
//and have rows removing cells based on a value set in the for-loop.

function createGrid(gridLength, gridWidth) {
    let x = gridLength;
    let y = gridWidth;

//Creating//
    for (let i = 0; i <= x; i++){    //Length
        row = document.createElement('div');
        row.className = 'row';                      //*className*, needed for CSS styling
        for (let j = 0; j <= y; j++){   //Width
            cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
        drawingGrid.appendChild(row);  //Appending one after each round of loop.
    }
    let colorCell = document.querySelectorAll('.cell')
    colorCell.forEach(cell => cell.addEventListener('mouseover', () =>{
        cell.style.cssText = "background-color: blue;"
    }));
}
