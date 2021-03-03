var table = document.querySelector('#table');
var result = document.querySelector('#result');
var rows = [];
var cells = [];
var turn = 'X';

function referee (event) {
    var what_row = rows.indexOf(event.currentTarget.parentNode);
    var what_cell = cells[what_row].indexOf(event.currentTarget);
    if (event.target.textContent !== '') {
        console.log(`Not empty`);
    } else {
        event.target.textContent = turn;
        var win = false;
        if (
            cells[what_row][0].textContent === turn &&
            cells[what_row][1].textContent === turn &&
            cells[what_row][2].textContent === turn
        ) {win = true;}
        if (
            cells[0][what_cell].textContent === turn &&
            cells[1][what_cell].textContent === turn &&
            cells[2][what_cell].textContent === turn
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
            result.textContent = `${turn}님의 승리~!`;
            cells.forEach(function(row) {
                row.forEach(function(cell) {
                    cell.textContent = ``;
                })
            });
        } else if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }
    }
}

for (var i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    rows.push(row);
    cells.push([]);
    for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', referee);
        cells[i].push(cell);
        row.appendChild(cell);
    }
    table.appendChild(row);
}
console.log(rows, cells);