var body = document.body;
var table = document.createElement('table');
var rows = [];
var cells = [];
var async_callback = function(event){
    var what_row = rows.indexOf(event.target.parentNode);
    console.log(`what row : ${what_row + 1}`);
    var what_cell = cells[what_row].indexOf(event.target);
    console.log(`what cell : ${what_cell + 1}`);
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
body.appendChild(table);
