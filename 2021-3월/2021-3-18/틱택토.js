var tbody = document.querySelector(`#tbody`);
var result = document.querySelector(`#result`);
var dataset = [];
var turn = `X`;
var win = false;
var draw = false;

function referee(index_row, index_ver) {
    result.textContent = ``;
    var row_count = 0;
    var ver_count = 0;
    var diagonal_count = 0;
    var reverse_diacount = 0;
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
            reverse_diacount++;
        }
        if (row_count === 3 || ver_count === 3 || diagonal_count === 3 || reverse_diacount === 3) {
            win = true;
        }
    }
    if (win) {
        result.textContent = `${turn}'s Victory~!`;
        setTimeout(function() {
            dataset.forEach(function(tr) {
                for(var i = 0; i < 3; i++) {
                    tr.children[i].textContent = ``;
                }
            });
            result.textContent = ``;
            win = false;
        }, 2000);
    }
};

function draw_judge() {
    all_cell = [];
    dataset.forEach(function(tr) {
        for (var i = 0; i < 3; i++) {
            all_cell.push(tr.children[i]);
        }
    });
    empty_cell = all_cell.filter(function(td){return td.textContent === ``});
    if(empty_cell.length === 0) {
        draw = true;
        result.textContent = `Draw~!`;
        setTimeout(function() {
            dataset.forEach(function(tr) {
                for(var i = 0; i < 3; i++) {
                    tr.children[i].textContent = ``;
                }
            });
            result.textContent = ``;
            draw = false;
        }, 2000);
    }
};

function progress(event) {
    if (turn === `O` || win || draw) {
        return;
    }
    var index_row = dataset.indexOf(this.parentNode);
    var index_ver = Array.prototype.indexOf.call(this.parentNode.children, this);
    if (this.textContent !== ``) {
        result.textContent = `This's filled, Choose another.`;
    } else {
        this.textContent = turn;
        referee(index_row, index_ver);
        if (win) {
            return;
        }
        draw_judge();
        if (draw) {
            return;
        }
        turn = `O`;
        setTimeout(function () {
            var computer_select = empty_cell[Math.floor(Math.random() * empty_cell.length)];
            computer_select.textContent = turn;
            var index_row = dataset.indexOf(computer_select.parentNode);
            var index_ver = Array.prototype.indexOf.call(computer_select.parentNode.children, computer_select);
            referee(index_row, index_ver);
            turn = `X`;
        }, 100);
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