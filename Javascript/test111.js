var table = document.querySelector('#table');
var result = document.querySelector('#result');
var rows = [];
var cells = [];
var turn = 'X';

function referee(event) {
    var target_td = event.currentTarget;
    var rows_index = rows.indexOf(target_td.parentNode);
    var cells_index = cells[rows_index].indexOf(target_td);
    console.log(rows_index, cells_index)
    if (target_td.textContent !== '') {
        console.log(`빈칸이 아닙니다.`);
    } else {
        target_td.textContent = turn;
        var win = false;
        if (
            cells[rows_index][0].textContent === turn &&
            cells[rows_index][1].textContent === turn &&
            cells[rows_index][2].textContent === turn
        ) {win = true};
        if (
            cells[0][cells_index].textContent === turn &&
            cells[1][cells_index].textContent === turn &&
            cells[2][cells_index].textContent === turn
        ) {win = true};
        if (
            cells[0][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[2][2].textContent === turn
        ) {win = true};
        if (
            cells[2][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[0][2].textContent === turn
        ) {win = true};
        if (win) {
            result.textContent = `${turn}'s Victory~!`
            cells.forEach(function(row) {
                row.forEach(function(cell) {
                    cell.textContent = ``;
                })
            })
        } else {
            if (turn === 'X') {
                turn = 'O';
            } else if (turn === 'O') {
                turn = 'X';
            }
        }
    }
};

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