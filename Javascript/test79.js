var body = document.body;
var table = document.querySelector('#table');
var result = document.querySelector('#result');
var rows = [];
var cells = [];
var turn = 'X';

function async_callback(event){
    var what_row = rows.indexOf(event.target.parentNode);
    var what_cell = cells[what_row].indexOf(event.target);
    console.log(`줄 : ${what_row + 1} / 칸 : ${what_cell + 1}`);

    // console.log(event.target.textContent === '');
    if (event.target.textContent === '') {
        console.log(`빈칸입니다.`);
        event.target.textContent = turn;

        var clear = false;
        if (
            cells[what_row][0].textContent === turn &&
            cells[what_row][1].textContent === turn &&
            cells[what_row][2].textContent === turn
        ) {clear = true;}
        if (
            cells[0][what_cell].textContent === turn &&
            cells[1][what_cell].textContent === turn &&
            cells[2][what_cell].textContent === turn
        ) {clear = true;}
        if (
            cells[0][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[2][2].textContent === turn
        ) {clear = true;}
        if (
            cells[2][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[0][2].textContent === turn
        ) {clear = true;}
        if (clear) {
            result.textContent = `${turn}님의 승리!`;
            turn = 'X';
            cells.forEach(function(row){
                row.forEach(function(cell){
                    cell.textContent = ``;
                });
            });
        } else if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }
    } else {
        console.log(`빈칸이 아닙니다.`);
    }
};

for(var i = 0; i < 3; i += 1){
    var row = document.createElement('tr');
    rows.push(row);
    cells.push([]);
    for(var j = 0; j < 3; j += 1){
        var cell = document.createElement('td');
        cell.addEventListener('click', async_callback);
        cells[i].push(cell);
        row.appendChild(cell);
    }
    table.appendChild(row);
}