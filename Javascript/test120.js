var table = document.querySelector('#table');
var result = document.querySelector('#result');
var rows = [];
var cells = [];
var turn = 'X';

//checking win
function referee(event) {
    var index_row = rows.indexOf(event.currentTarget.parentNode);
    var index_cell = cells[index_row].indexOf(event.currentTarget);
    console.log(index_row, index_cell);
    
    if (cells[index_row][index_cell].textContent !== ``) {
        console.log(`Not empty`);
    } else {
        cells[index_row][index_cell].textContent = turn;
        var win = false;
        if (
            cells[index_row][0].textContent === turn &&
            cells[index_row][1].textContent === turn &&
            cells[index_row][2].textContent === turn
        ) {win = true;}
        if (
            cells[0][index_cell].textContent === turn &&
            cells[1][index_cell].textContent === turn &&
            cells[2][index_cell].textContent === turn
        ) {win = true;}
        if (
            cells[0][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[2][2].textContent === turn
        ) {win = true;}
        if (
            cells[2][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[0][2].textContent === turn
        ) {win = true;}
        if (win) {
            result.textContent = `${turn}'s Victory!`;
            setTimeout (function () {
                cells.forEach(function (element) {
                    console.log(element);
                    element.forEach(function (cell) {
                        console.log(cell)
                        cell.textContent = ``;
                        result.textContent = ``;
                    })
                })
            }, 1500);
        } else {
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    }
};
//creating table & 2D array
for (var i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    rows.push(row);
    cells.push([]);
    for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');
        cells[i].push(cell);
        cell.addEventListener('click', referee);
        row.appendChild(cell);
    }
    table.appendChild(row);
}