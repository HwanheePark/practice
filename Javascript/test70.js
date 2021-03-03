var body = document.body;
var table = document.createElement('table');
body.appendChild(table);
var rows = [];
var cells = [];
var turn = `X`;

var async_callback = function(event){
    var what_row = rows.indexOf(event.target.parentNode);
    console.log(`what_row : ${what_row + 1}`);
    var what_cell = cells[what_row].indexOf(event.target);
    console.log(`what_cell : ${what_cell + 1}`);

    if(cells[what_row][what_cell].textContent === ''){
        console.log(`빈칸입니다.`);
        cells[what_row][what_cell].textContent = turn;
        if (turn === 'X'){
            turn = 'O';
        } else {
            turn = 'X';
        }
    } else {
        console.log(`빈칸이 아닙니다.`)
    }
    var clear = false;
    if(
        cells[what_row][0].textContent === turn &&
        cells[what_row][1].textContent === turn &&
        cells[what_row][2].textContent === turn
    ) {clear = true;}
    if(
        cells[0][what_cell].textContent === turn &&
        cells[1][what_cell].textContent === turn &&
        cells[2][what_cell].textContent === turn
    ) {clear = true;}
    
};

for(var i = 0; i < 3; i += 1){
    var row = document.createElement('tr');
    table.appendChild(row);
    rows.push(row);
    cells.push([]);
    for(var j = 0; j < 3; j += 1){
        var cell = document.createElement('td');
        row.appendChild(cell);
        cell.addEventListener('click', async_callback);
        cells[i].push(cell);
    }
}