var table = document.querySelector('#table');
var tbody = document.querySelector('#table tbody');
var dataset = [];

document.querySelector('#execution').addEventListener('click', function() {
    tbody.innerHTML = ``;
    dataset = [];
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    console.log(hor, ver, mine);

    var cell_arr = Array(hor * ver)
        .fill()
        .map(function (element, index) {
            return index;
        });
    console.log(cell_arr);
    var mine_locate = [];
    while (mine > 0) {
        var select = cell_arr.splice(Math.floor(Math.random() * cell_arr.length), 1)[0];
        mine_locate.push(select);
        mine -= 1;
    }
    console.log(mine_locate);

    for (var i = 0; i < hor; i++) {
        var tr = document.createElement('tr');
        var arr = [];
        dataset.push(arr);
        for (var j = 0; j < ver; j++) {
            var td = document.createElement('td');
            arr.push(1);
            td.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                var target_td = event.currentTarget;
                var target_tr = target_td.parentNode;
                var target_tbody = target_tr.parentNode;
                var hor = Array.prototype.indexOf.call(target_tbody.children, target_tr);
                var ver = Array.prototype.indexOf.call(target_tr.children, target_td);
                if (target_td.textContent === `` || target_td.textContent === 'X') {
                    target_td.textContent = `!`;
                } else if (target_td.textContent === '!') {
                    target_td.textContent = '?';
                } else if (target_td.textContent === '?') {
                    if (dataset[hor][ver] === 1) {
                        target_td.textContent = ``;
                    } else {
                        target_td.textContent = 'X';
                    }
                }
            });
            td.addEventListener('click', function (event) {
                var target_td = event.currentTarget;
                var target_tr = target_td.parentNode;
                var target_tbody = target_tr.parentNode;
                var hor = Array.prototype.indexOf.call(target_tbody.children, target_tr);
                var ver = Array.prototype.indexOf.call(target_tr.children, target_td);
                event.currentTarget.classList.add('opened');
                if (dataset[hor][ver] === 'X') {
                    target_td.textContent = `팡`;
                } else {
                    var surroundings = [
                        dataset[hor][ver-1], dataset[hor][ver+1]
                    ]
                    if (dataset[hor-1]) {
                        surroundings = surroundings.concat(
                        dataset[hor-1][ver-1], dataset[hor-1][ver], dataset[hor-1][ver+1])
                    }
                    if (dataset[hor+1]) {
                        surroundings = surroundings.concat(
                        dataset[hor+1][ver-1], dataset[hor+1][ver], dataset[hor+1][ver+1])
                    }
                    var surrounding_mine = surroundings.filter(function(v) {
                        return v === 'X';
                    }).length;
                    target_td.textContent = surrounding_mine;
                    
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    for (var k = 0; k < mine_locate.length; k++) {
        var mine_hor = Math.floor(mine_locate[k] / ver);
        var mine_ver = mine_locate[k] % ver;
        tbody.children[mine_hor].children[mine_ver].textContent = 'X';
        dataset[mine_hor][mine_ver] = 'X';
    }
    console.log(dataset);
});