//Focus on making a single 16x16 grid first before anything.
//Currently, our problem is trying to figure out how we can
//change locally appended rows/cells.


//For loading the grid via JavaScript without button prompt.
window.addEventListener('load', () =>{
    createGrid(13);
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
//For increments, try to keep variables global or values are stuck locally.
//For calculations, we do "var X" = "var X + so-so" so our values can change.
let percent = 0;

function randomColor(){
    let r = (Math.floor(Math.random() * 255));
    let g = (Math.floor(Math.random() * 255));
    let b = (Math.floor(Math.random() * 255));

    r = (r - ((r/100) * percent));
    g = (g - ((g/100) * percent));
    b = (b - ((b/100) * percent));

    percent += 10;

    return `rgb(${r},${g},${b})`;
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
    
    //let cellOpacity = 0;

    let colorCell = document.querySelectorAll('.cell')
    colorCell.forEach(cell => cell.addEventListener('mouseover', () =>{
        //cell.style.backgroundColor = "blue";
        //cell.style.opacity = `${cellOpacity += 0.1}`;
        cell.style.backgroundColor = randomColor();
        //cell.style.backgroundColor = `rgb(${(randomColor())}, ${(randomColor())}, ${(randomColor())})`;
        //cell.style.backgroundColor = (rgbButton.value);
    }));
}


//1. To convert a color hue to black, we'd need to understand their values.
//2. We know that black has the value of "0, 0, 0".
//3. We'll need a formula that can gradually decrease our chosen hue by "10%" down to 0's.
//4. Eventually a cell would turn black after 10 hovers.

//We could try using rgb(x, x, x) and apply a variable into the style values to calculate.
//For this, we'll need a new variable that stores the "10%" value and can be used for equation.
//This variable could be let percent = (255/10);

//With the "percent" variable, we could set up another function within "randomColor()"
//This would be above the random value generator for hierachy reasons.
//This function would return "percent += 25.5" to incrementally decrease the hue values.
//So after 10 passes, any random integers produced would be subtracted by "255"
//This would return nothing above "0" and any color will become black after 10 passes.
//Have a conditional statement to prevent high numbers if above "255"