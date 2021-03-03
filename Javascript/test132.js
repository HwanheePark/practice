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

    var cell_array = Array(hor * ver)
        .fill()
        .map(function (element, index) {
            return index;
        });
    console.log(cell_array);
    var mine_location = [];
    while (mine > 0) {
        var select = cell_array.splice(Math.floor(Math.random() * cell_array.length), 1)[0];
        mine_location.push(select);
        mine -= 1;
    }
    console.log(mine_location);

    for (var i = 0; i < hor; i++) {
        var tr = document.createElement('tr');
        dataset.push([]);
        for (var j = 0; j < ver; j++) {
            var td = document.createElement('td');
            dataset[i].push(1);
            td.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                var target_td = event.currentTarget;
                var target_tr = target_td.parentNode;
                var target_tbody = target_tr.parentNode;
                var hor = Array.prototype.indexOf.call(target_tbody.children, target_tr);
                var ver = Array.prototype.indexOf.call(target_tr.children, target_td);
                if (target_td.textContent === `` || target_td.textContent === `X`) {
                    target_td.textContent = `!`;
                } else if (target_td.textContent === `!`) {
                    target_td.textContent = `?`;
                } else if (target_td.textContent === `?`) {
                    if (dataset[hor][ver] === 1) {
                        target_td.textContent = ``;
                    } else {
                        target_td.textContent = `X`;
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
                if (dataset[hor][ver] === `X`) {
                    target_td.textContent = `펑`;
                } else {
                    var surrounding = [
                        dataset[hor][ver-1], dataset[hor][ver+1]
                    ];
                    if (dataset[hor-1]) {
                        surrounding.push(
                            dataset[hor-1][ver-1], dataset[hor-1][ver], dataset[hor-1][ver+1]
                        )
                    }
                    if (dataset[hor+1]) {
                        surrounding.push(
                            dataset[hor+1][ver-1], dataset[hor+1][ver], dataset[hor+1][ver+1]
                        )
                    }
                    var surrounding_mine = surrounding.filter(function(v) {
                        return v === `X`;
                    }).length;
                    target_td.textContent = surrounding_mine;
                    if (surrounding_mine === 0) {
                        var surrounding = [
                            tbody.children[hor].children[ver-1],
                            tbody.children[hor].children[ver+1]
                        ]
                        if (tbody.children[hor-1]) {
                            surrounding.push(
                                tbody.children[hor-1].children[ver-1],
                                tbody.children[hor-1].children[ver],
                                tbody.children[hor-1].children[ver+1]
                            )
                        }
                        if (tbody.children[hor+1]) {
                            surrounding.push(
                                tbody.children[hor+1].children[ver-1],
                                tbody.children[hor+1].children[ver],
                                tbody.children[hor+1].children[ver+1]
                            )
                        }
                        surrounding.filter(function (v) {return !!v;})
                            .forEach(function(side_cell) {
                                side_cell.click();
                            })
                    }
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    for (var k = 0; k < mine_location.length; k++) {
        var mine_hor = Math.floor(mine_location[k] / ver);
        var mine_ver = mine_location[k] % ver;
        tbody.children[mine_hor].children[mine_ver].textContent = 'X';
        dataset[mine_hor][mine_ver] = 'X';
    }
    console.log(dataset);
});