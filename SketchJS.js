//Focus on making a single 16x16 grid first before anything.


const body = document.querySelector('body');

    const container = document.createElement('div');
    container.style.cssText = "display:flex; align-items: center; flex-direction: column; background-color: grey; font-size: 3em; text-align: center;"
    container.textContent = "Hide the Cat!";

    const gridButton = document.createElement('button');
    gridButton.textContent = "beeboo";
    gridButton.style.cssText = "font-size: 48px;"
    gridButton.addEventListener('click', () => {
        //We want the numbers to be changed with a variable.
        //"16" is just a testing value.
        let x = 100;
        for(let i = 0; i <= (x); i++){ 
        createDiv(x, x);
        }
    }, {
        once:true
    });

    const promptButton = document.createElement('button');
    promptButton.style.cssText = "font-size: 48px;"
    promptButton.textContent = "Adjust";
    promptButton.addEventListener('click', () => {
        promptAdjust();
    })

    const clearButton = document.createElement('button');
    clearButton.textContent = "Clear";
    clearButton.style.cssText = "font-size: 48px";
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
body.appendChild(clearButton);
body.appendChild(container);    
container.appendChild(gridContainer);
gridContainer.appendChild(drawingGrid);








//Notes: Ignore the grid having "defunct" rows on generation, focus on removing/appending.
//For creating a grid without >16 lines of code.

function createDiv(gridLength, gridWidth) {
    let x = gridLength;
    let y = gridWidth;

//Currently "row" is a local variable, if we would have to change it
//then we'd have to use another function within "createDiv"

    for (let i = 0; i <= x; i++){    //Length
        var row = document.createElement('div');
        row.className = 'row';                       //(.className) = Needed for CSS
        
        for (let j = 0; j <= y; j++){   //Width
            var cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
    drawingGrid.appendChild(row);
    //Careful of Hierachy, if above (appendchild) then one row is missing.
    
    let gridCells = document.querySelectorAll('.cell')
    gridCells.forEach(cell => cell.addEventListener('mouseover', () =>{
        cell.style.cssText = "background-color: blue;"
    }));
}


//"Clearing" out the cells by selecting all cells created
//and changing its background color back to its default.

function clear(){
    let clear = document.querySelectorAll('.cell');
    clear.forEach(cell => cell.style.cssText = "background-color: navajowhite;");
}

function promptAdjust(){
    let gridVolume = prompt("How many squares per side?", );
    if (gridVolume > 100) {
        return error();
    } else if ((gridVolume <= 100) && (gridVolume > 0)){
        for (let i = 0; i <= gridVolume; i++){
        createGrid(gridVolume, gridVolume);
        }
    } else if (gridVolume < 0){
        return error();  
    } else {
        return;
    }
}

function error(){
    alert ("Can't go over 100 or under 0, please use a smaller number");
    return promptAdjust();
}

//We have to try and keep it all in one function.
//Try doing a conditional statement that can have the grid remove rows
//and have rows removing cells based on a value set in the for-loop.

function createGrid(gridLength, gridWidth) {
    let x = gridLength;
    let y = gridWidth;

//Creating//
if ((x != gridVolume) || (y != gridVolume)){
    for (let i = 0; i <= x; i++){    //Length
        var row = document.createElement('div');
        row.className = 'row';                       //(.className) = Needed for CSS

        for (let j = 0; j <= y; j++){   //Width
            var cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
    drawingGrid.appendChild(row);
    //Careful of Hierachy, if above (appendchild) then one row is missing.
    
    let colorCell = document.querySelectorAll('.cell')
    colorCell.forEach(cell => cell.addEventListener('mouseover', () =>{
        cell.style.cssText = "background-color: blue;"
    }));


//Deleting -> Creating//
} else {
    for (let iDel = 0; iDel<= 100; iDel++){     //100* to completely clear all rows+cells from grid.
        drawingGrid.removeChild(row);

        for (let jDel = 0; jDel <= 100; jDel++){
            row.removeChild(cell);
        }
    }

    for (let iAdd = 0; iAdd <= x; iAdd++){
        var row = document.createElement('div');

        for(let jAdd = 0; jAdd <= y; jAdd++){
            var cell = document.createElement('div');
            row.appendChild(cell);
        }
    }
    drawingGrid.appendChild(row);

    let colorCell = document.querySelectorAll('.cell');
    colorCell.forEach(cell => cell.addEventListener('mouseover', () =>{
        cell.style.cssText = "background-color: blue;"
    }))

}
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