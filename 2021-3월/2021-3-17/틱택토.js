var tbody = document.querySelector(`#tbody`);
var result = document.querySelector(`#result`);
var dataset = [];
var turn = `X`;
var win = false;
var draw_count = 0;

function referee (index_row, index_ver) {
    if (
        dataset[index_row].children[0].textContent === turn &&
        dataset[index_row].children[1].textContent === turn &&
        dataset[index_row].children[2].textContent === turn
    ) {win = true;}
    if (
        dataset[0].children[index_ver].textContent === turn &&
        dataset[1].children[index_ver].textContent === turn &&
        dataset[2].children[index_ver].textContent === turn
    ) {win = true;}
    if (
        dataset[0].children[0].textContent === turn &&
        dataset[1].children[1].textContent === turn &&
        dataset[2].children[2].textContent === turn
    ) {win = true;}
    if (
        dataset[2].children[0].textContent === turn &&
        dataset[1].children[1].textContent === turn &&
        dataset[0].children[2].textContent === turn
    ) {win = true;}
    if (win) {
        result.textContent = `${turn}'s Victory~!`;
        setTimeout(function() {
            dataset.forEach(function(tr) {
                for (var i = 0; i < 3; i++) {
                    tr.children[i].textContent = ``;
                }
            });
            result.textContent = ``;
            win = false;
            turn = `X`;
        }, 2000);
    }
};

function draw () {
    draw_count = 0;
    var count = 0;
    for (var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if (
                dataset[i].children[j].textContent !== ``
            ) {
                count++;
            }
        }
        if (count === 3) {
            draw_count++;
        }
        count = 0;
    }
    if (draw_count === 3) {
        result.textContent = `Draw~!`;
        setTimeout(function () {
            dataset.forEach(function (tr) {
                for (var i = 0; i < 3; i++) {
                    tr.children[i].textContent = ``;
                }
            })
            result.textContent = ``;
            draw_count = 0;
        }, 2000);
    }
};

function progress (event) {
    if (turn === `O` || win || draw_count === 3) {
        return;
    }
    var index_row = dataset.indexOf(this.parentNode);
    var index_ver = Array.prototype.indexOf.call(this.parentNode.children, this);
    if (this.textContent !== ``) {
        result.textContent = `This's filled, Choose another.`;
        setTimeout(function() {
            result.textContent = ``;
        }, 2000);
    } else {
        this.textContent = turn;
        referee(index_row, index_ver);
        if (win) {
            return;
        }
        draw();
        if (draw_count === 3) {
            return;
        }
        turn = `O`;
        //컴퓨터 선택
        setTimeout(function() {
            var select_candidate = [];
            dataset.forEach(function(tr) {
                for (var i = 0; i < 3; i++) {
                    select_candidate.push(tr.children[i]);
                }
            })
            select_candidate = select_candidate.filter(function(td) {return !td.textContent});
            var computer_select = select_candidate[Math.floor(Math.random() * select_candidate.length)];
            computer_select.textContent = turn;
            var index_row = dataset.indexOf(computer_select.parentNode);
            var index_ver = Array.prototype.indexOf.call(computer_select.parentNode.children, computer_select);
            referee(index_row, index_ver);
            turn = `X`;
        }, 1000);
    }
};

for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    dataset.push(tr);
    for (var j = 0; j < 3; j++) {
        var td = document.createElement(`td`);
        td.addEventListener(`click`, progress);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}