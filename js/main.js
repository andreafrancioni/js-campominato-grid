let numCells= 100;
let grid = document.getElementById("grid");

for (let i = 1; i <= numCells; i++){
    let oneCell = buildSquare(i);
    grid.appendChild(oneCell);
    oneCell.innerHTML = i;
}

/*** FUNZIONE CREA QUADRATI***/
function buildSquare(number) {
    const cell = document.createElement("div");
    cell.classList.add("square");

    cell.addEventListener("click", function(){
        cell.classList.toggle("selected");
    });
    return cell;
}