var tbody = document.querySelector('#tbody');
var result = document.querySelector('#result');
var rows = [];
var dataset = [];
var turn = `X`;
var win = false;
var draw_count = 0;

function referee (index_row, index_ver) {
    if (
        dataset[index_row].children[0].textContent === turn &&
        dataset[index_row].children[1].textContent === turn &&
        dataset[index_row].children[2].textContent === turn
    ) {win = true};
    if (
        dataset[0].children[index_ver].textContent === turn &&
        dataset[1].children[index_ver].textContent === turn &&
        dataset[2].children[index_ver].textContent === turn
    ) {win = true};
    if (
        dataset[0].children[0].textContent === turn &&
        dataset[1].children[1].textContent === turn &&
        dataset[2].children[2].textContent === turn
    ) {win = true};
    if (
        dataset[2].children[0].textContent === turn &&
        dataset[1].children[1].textContent === turn &&
        dataset[0].children[2].textContent === turn
    ) {win = true};
    if (win) {
        result.textContent = `${turn}'s Victory!`;
        trun = `X`;
        setTimeout (function () {
            dataset.forEach(function (tr) {
                tr.children[0].textContent = ``;
                tr.children[1].textContent = ``;
                tr.children[2].textContent = ``;
            });
            result.textContent = ``;
            win = false;
        }, 2000);
        return;
    }
};

function reach_3_draw () {
    draw_count = 0;
    dataset.forEach(function (tr) {
        if (
            tr.children[0].textContent !== `` &&
            tr.children[1].textContent !== `` &&
            tr.children[2].textContent !== ``
        ) {
            draw_count++;
        }
    });
    if (draw_count === 3) {
        return true;
    }
};

function progress (event) {
    if (turn === `O` || win || draw_count === 3) {
        return;
    }
    var index_row = dataset.indexOf(this.parentNode);
    var index_ver = Array.prototype.indexOf.call(this.parentNode.children, this);
    if (this.textContent !== ``) {
        result.textContent = `This's filled, choose another.`;
        setTimeout(function () {
            result.textContent = ``;
        }, 2000);
    } else {
        this.textContent = turn;
        referee(index_row, index_ver);
        if (win) {
            return;
        }
        if (reach_3_draw()) {
            result.textContent = `Draw~!`;
            setTimeout(function () {
                dataset.forEach(function (tr) {
                    tr.children[0].textContent = ``;
                    tr.children[1].textContent = ``;
                    tr.children[2].textContent = ``;
                })
                result.textContent = ``;
                draw_count = 0;
            }, 2000);
            return;
        }
        turn = `O`;
        setTimeout(function() {
            var computer_candidate = [];
            dataset.forEach(function(tr) {
                computer_candidate.push(tr.children[0], tr.children[1], tr.children[2]);
            });
            computer_candidate = computer_candidate.filter(function (td) {return !td.textContent});
            var computer_select = computer_candidate[Math.floor(Math.random() * computer_candidate.length)];
            computer_select.textContent = turn;
            var index_row = dataset.indexOf(computer_select.parentNode);
            var index_ver = Array.prototype.indexOf.call(computer_select.parentNode.children, computer_select);
            referee(index_row, index_ver);
            turn = `X`;
        }, 1000)
    }
};

for (var i = 0; i < 3; i++) {
    var tr = document.createElement(`tr`);
    rows.push(tr);
    dataset.push(tr);
    for (var j = 0; j < 3; j++) {
        var td = document.createElement(`td`);
        td.addEventListener('click', progress);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}