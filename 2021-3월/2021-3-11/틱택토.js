var table = document.querySelector(`#table`);
var result = document.querySelector(`#result`);
var rows = [];
var dataset = [];
var turn = `X`;

function referee (event) {
    var index_row = rows.indexOf(this.parentNode);
    var index_ver = dataset[index_row].indexOf(this);
    console.log(index_row, index_ver);

    if (dataset[index_row][index_ver].textContent !== ``) {
        result.textContent = `Not empty`;
    } else {
        result.textContent = ``;
        dataset[index_row][index_ver].textContent = turn;

        var clear = false;
        if (
            dataset[index_row][0].textContent === turn &&
            dataset[index_row][1].textContent === turn &&
            dataset[index_row][2].textContent === turn
        ) {clear = true;}
        if (
            dataset[0][index_ver].textContent === turn &&
            dataset[1][index_ver].textContent === turn &&
            dataset[2][index_ver].textContent === turn
        ) {clear = true;}
        if (
            dataset[0][0].textContent === turn &&
            dataset[1][1].textContent === turn &&
            dataset[2][2].textContent === turn
        ) {clear = true;}
        if (
            dataset[2][0].textContent === turn &&
            dataset[1][1].textContent === turn &&
            dataset[0][2].textContent === turn
        ) {clear = true;}
        if (clear) {
            result.textContent = `${turn}'s Victory!`;
            turn = `X`;
            setTimeout (function () {
                result.textContent = ``;
                dataset.forEach(function (element) {
                    element.forEach(function (cell) {
                        cell.textContent = ``;
                    });
                });
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

for (var i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    rows.push(row);
    dataset.push([]);
    for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', referee);
        dataset[i].push(cell);
        row.appendChild(cell);
    }
    table.appendChild(row);
}