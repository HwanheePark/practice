var table = document.querySelector('#table');
var tbody = document.querySelector('#table tbody');
var result = document.querySelector('#result');

document.querySelector('#execution').addEventListener('click', function() {
    tbody.innerHTML = ``;
    result.textContent = ``;
    var dataset = [];
    var stop_flag = false;
    var open_count =0;
    var hor = parseInt(document.querySelector(`#hor`).value);
    var ver = parseInt(document.querySelector(`#ver`).value);
    var mine = parseInt(document.querySelector(`#mine`).value);

    var cell_array = Array(hor * ver)
        .fill()
        .map(function (element, index) {
            return index;
        });
    var mine_location = [];
    while(mine > 0) {
        var select = cell_array.splice(Math.floor(Math.random() * cell_array.length), 1)[0];
        mine_location.push(select);
        mine -= 1;
    }
    mine = parseInt(document.querySelector(`#mine`).value);
    
    for (var i = 0; i < hor; i++) {
        var tr = document.createElement('tr');
        var arr = [];
        dataset.push(arr);
        for (var j = 0; j < ver; j++) {
            var td = document.createElement('td');
            arr.push(0);
            td.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                if (stop_flag) {
                    return;
                }
                var target_td = event.currentTarget;
                var target_tr = target_td.parentNode;
                var index_hor = Array.prototype.indexOf.call(tbody.children, target_tr);
                var index_ver = Array.prototype.indexOf.call(target_tr.children, target_td);
                if (dataset[index_hor][index_ver] === 1) {
                    return;
                } else if (target_td.textContent === `` || target_td.textContent === `X`) {
                    target_td.textContent = `!`;
                    target_td.classList.add(`exclamation_mark`);
                } else if (target_td.textContent === `!`) {
                    target_td.textContent = `?`;
                    target_td.classList.remove(`exclamation_mark`)
                    target_td.classList.add(`question_mark`);
                } else if (target_td.textContent === `?`) {
                    target_td.classList.remove(`question_mark`);
                    if (dataset[index_hor][index_ver] === 0) {
                        target_td.textContent = ``;
                    } else {
                        target_td.textContent = `X`;
                    }
                }
            });
            td.addEventListener('click', function (event) {
                if (stop_flag) {
                    return;
                }
                var target_td = event.currentTarget;
                var target_tr = target_td.parentNode;
                var index_hor = Array.prototype.indexOf.call(tbody.children, target_tr);
                var index_ver = Array.prototype.indexOf.call(target_tr.children, target_td);
                if (
                    dataset[index_hor][index_ver] === 1 ||
                    target_td.textContent === `!` ||
                    target_td.textContent === `?`
                    ) {
                    return;
                }
                target_td.classList.add(`opened`);
                open_count ++;
                if (dataset[index_hor][index_ver] === `X`) {
                    target_td.textContent = `펑`;
                    target_td.classList.add('mine');
                    result.textContent = `You failed.`;
                    stop_flag = true;
                } else {
                    //숫자 표시
                    dataset[index_hor][index_ver] = 1;
                    var surroundings = [
                        dataset[index_hor][index_ver-1],
                        dataset[index_hor][index_ver+1]
                    ]
                    if (dataset[index_hor+1]) {
                        surroundings = surroundings.concat(
                            dataset[index_hor+1][index_ver-1],
                            dataset[index_hor+1][index_ver],
                            dataset[index_hor+1][index_ver+1]
                        )
                    }if (dataset[index_hor-1]) {
                        surroundings = surroundings.concat(
                            dataset[index_hor-1][index_ver-1],
                            dataset[index_hor-1][index_ver],
                            dataset[index_hor-1][index_ver+1]
                        )
                    }
                    var surrounding_mines = surroundings.filter(function (v) {
                        return v === `X`;
                    }).length;
                    target_td.textContent = surrounding_mines || ``;

                    //0일때 주변 8칸 오픈
                    if (surrounding_mines === 0) {
                        var surrounding_cell = [
                            tbody.children[index_hor].children[index_ver-1],
                            tbody.children[index_hor].children[index_ver+1]
                        ]
                        if (tbody.children[index_hor-1]) {
                            surrounding_cell.push(
                                tbody.children[index_hor-1].children[index_ver-1],
                                tbody.children[index_hor-1].children[index_ver],
                                tbody.children[index_hor-1].children[index_ver+1]
                            )
                        }
                        if (tbody.children[index_hor+1]) {
                            surrounding_cell.push(
                                tbody.children[index_hor+1].children[index_ver-1],
                                tbody.children[index_hor+1].children[index_ver],
                                tbody.children[index_hor+1].children[index_ver+1]
                            )
                        }
                        surrounding_cell.filter(function (v) {return !!v})
                            .forEach(function (sidecell) {
                                var sidecell_tr = sidecell.parentNode;
                                var index_sidecell_hor = Array.prototype.indexOf.call(tbody.children, sidecell_tr);
                                var index_sidecell_ver = Array.prototype.indexOf.call(sidecell_tr.children, sidecell);
                                if (dataset[index_sidecell_hor][index_sidecell_ver] !==1 ) {
                                    sidecell.click();
                                }
                            });

                    }
                }
                if (open_count === hor * ver - mine) {
                    stop_flag = true;
                    result.textContent = `Mission Complete!`;
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    for (var k = 0; k < mine; k++) {
        var mine_hor = Math.floor(mine_location[k] / ver);
        var mine_ver = mine_location[k] % ver;
        // tbody.children[mine_hor].children[mine_ver].textContent = `X`;
        dataset[mine_hor][mine_ver] = `X`;
    }
    console.log(dataset);
});
document.querySelector('#execution').click();