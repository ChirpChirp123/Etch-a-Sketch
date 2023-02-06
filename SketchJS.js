//Focus on making a single 16x16 grid first before anything.


const body = document.querySelector('body');

    const container = document.createElement('div');
    container.style.cssText = "display:flex; flex-direction: column; background-color: grey; font-size: 3em; text-align: center;"
    container.textContent = "Hide the Cat!";

    const gridButton = document.createElement('button');
    gridButton.textContent = "beeboo";
    gridButton.addEventListener('click', () => {
        for(let i = 0; i <= 16; i++){
        createDiv(16, 16);
        }
    }, {
        once:true
    });

    const gridContainer = document.createElement('div');
    gridContainer.style.cssText = "display:flex; justify-content: center; padding: 1em;";

container.appendChild(gridContainer);
body.appendChild(gridButton);
body.appendChild(container);











//For creating a grid without >16 lines of code.

function createDiv(gridLength, gridWidth) {
    let x = gridLength;
    let y = gridWidth;

    for (let i = 0; i < x; i++){    //Length
        var row = document.createElement('div');
        row.className = 'row';                       //Needed for CSS
        for (let j = 1; j <= y; j++){   //Width
            var cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
    gridContainer.appendChild(row);
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