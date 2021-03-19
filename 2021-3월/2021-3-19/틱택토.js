var tbody = document.querySelector(`#tbody`);
var result = document.querySelector(`#result`);
var dataset = [];
var turn = `X`;
var win = false;
var draw = false;

function referee(target) {
    var index_row = dataset.indexOf(target.parentNode);
    var index_ver = Array.prototype.indexOf.call(target.parentNode.children, target);
    var row_count = 0;
    var ver_count = 0;
    var diagonal_count = 0;
    var reverse_diagonal_count = 0;
    for (var i = 0; i < 3; i++) {
        if (dataset[index_row].children[i].textContent === turn) {
            row_count++;
        }
        if (dataset[i].children[index_ver].textContent === turn) {
            ver_count++;
        }
        if (dataset[i].children[i].textContent === turn) {
            diagonal_count++;
        }
        if (dataset[2 - i].children[i].textContent === turn) {
            reverse_diagonal_count++;
        }
    }
    if (row_count === 3 || ver_count === 3 || diagonal_count === 3 || reverse_diagonal_count === 3) {
        win = true;
        result.textContent = `${turn}'s Victory~!`;
        setTimeout(function () {
            dataset.forEach(function (tr) {
                for (var i = 0; i < 3; i++) {
                    tr.children[i].textContent = ``;
                    tr.children[i].classList.remove(`X`);
                    tr.children[i].classList.remove(`O`);
                }
            })
            result.textContent = ``;
            win = false;
        }, 2000);
    }
};

function draw_referee() {
    var all_cell = [];
    dataset.forEach(function (tr) {
        for(var i = 0; i < 3; i++) {
            all_cell.push(tr.children[i]);
        }
    });
    empty_cell = all_cell.filter(function (td) {return td.textContent === ``});
    if (empty_cell.length === 0) {
        draw = true;
        result.textContent = `Draw~!`;
        setTimeout(function () {
            dataset.forEach(function (tr) {
                for (var i = 0; i < 3; i++) {
                    tr.children[i].textContent = ``;
                    tr.children[i].classList.remove(`X`);
                    tr.children[i].classList.remove(`O`);
                }
            })
            result.textContent = ``;
            draw = false;
        }, 2000);
    }
};

function progress() {
    if (turn === `O` || win || draw) {
        return;
    }
    if (this.textContent !== ``) {
        result.textContent = `This's filled, Choose another.`;
        setTimeout(function() {
            result.textContent = ``;
        }, 2000);
    } else {
        this.classList.add(`X`);
        this.textContent = turn;
        referee(this);
        if (win) {
            return;
        }
        draw_referee();
        if (draw) {
            return;
        }
        turn = `O`;
        setTimeout(function () {
            var computer_select = empty_cell[Math.floor(Math.random() * empty_cell.length)];
            computer_select.textContent = turn;
            computer_select.classList.add(`O`);
            referee(computer_select);
            turn = `X`;
        }, 500);
    }
};

for (var i = 0; i < 3; i++) {
    var tr = document.createElement(`tr`);
    dataset.push(tr);
    for (var j = 0; j < 3; j++) {
        var td = document.createElement(`td`);
        td.addEventListener(`click`, progress);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}