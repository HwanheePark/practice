var tbody = document.querySelector('#tbody');
var result = document.querySelector('#result');
var rows = [];
var dataset = [];
var turn = `X`;

function referee (event) {
    var index_row = Array.prototype.indexOf.call(tbody.children, this.parentNode);
    var index_ver = Array.prototype.indexOf.call(this.parentNode.children, this);
    console.log(index_row, index_ver);
    // console.log(dataset);
    if (dataset[index_row].children[index_ver].textContent !== ``) {
        result.textContent = `Not empty, Choose another`;
    } else {
        this.textContent = turn;
        var win = false;
        if (
            dataset[index_row].children[0].textContent === turn &&
            dataset[index_row].children[1].textContent === turn &&
            dataset[index_row].children[2].textContent === turn
        ) {win = true}
        if (
            dataset[0].children[index_ver].textContent === turn &&
            dataset[1].children[index_ver].textContent === turn &&
            dataset[2].children[index_ver].textContent === turn
        ) {win = true}
        if (
            dataset[0].children[0].textContent === turn &&
            dataset[1].children[1].textContent === turn &&
            dataset[2].children[2].textContent === turn
        ) {win = true}
        if (
            dataset[2].children[0].textContent === turn &&
            dataset[1].children[1].textContent === turn &&
            dataset[0].children[2].textContent === turn
        ) {win = true}
        if (win) {
            result.textContent = `${turn}'s Victory!`;
            turn = 'X';
            setTimeout (function () {
                dataset.forEach(function (tr) {
                    tr.children[0].textContent = ``;
                    tr.children[1].textContent = ``;
                    tr.children[2].textContent = ``;
                });
                result.textContent = ``;
            }, 1500);
        } else {
            if (turn === `X`) {
                turn = `O`;
            } else {
                turn = `X`;
            }
        }
    }
};

for (var i = 0; i < 3; i++) {
    var tr = document.createElement(`tr`);
    rows.push(tr);
    dataset.push(tr);
    for (var j = 0; j < 3; j++) {
        var td = document.createElement(`td`);
        td.addEventListener('click', referee);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}