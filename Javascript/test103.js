var table = document.querySelector('#table');
var tbody = document.querySelector('#table tbody');
var dataset = [];

document.querySelector('#execution').addEventListener('click', function(){
    var row = parseInt(document.querySelector('#row').value);
    var column = parseInt(document.querySelector('#column').value);
    var mine = parseInt(document.querySelector('#mine').value);
    
    var cell_array = Array(row * column)
        .fill()
        .map(function (element, index){
            return index;
        });
    console.log(cell_array);
    var mine_locate = [];
    while (mine > 0) {
        var select = cell_array.splice(Math.floor(Math.random() * cell_array.length), 1)[0];
        mine_locate.push(select);
        mine -= 1;
    }
    console.log(mine_locate);

    for (var i = 0; i < row; i ++) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < column; j++) {
            arr.push(1);
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                var target_tr = event.currentTarget.parentNode;
                var target_tbody = event.currentTarget.parentNode.parentNode;
                var row = Array.prototype.indexOf.call(target_tbody.children, target_tr);
                var cell = Array.prototype.indexOf.call(target_tr.children, event.currentTarget);
                event.currentTarget.textContent = `!`;
                console.log(target_tbody, target_tr, event.currentTarget, row, cell);
                dataset[row][cell] = `!`;
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    for (var k = 0; k < mine_locate.length; k++) {
        var mine_row = Math.floor(mine_locate[k] / 10);
        var mine_column = mine_locate[k] % 10;
        console.log(mine_row, mine_column);
        tbody.children[mine_row].children[mine_column].textContent = 'X';
        dataset[mine_row][mine_column] = 'X';
    }
    console.log(dataset);
});