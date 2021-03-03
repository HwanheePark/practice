var table = document.querySelector('#table');
var tbody = document.querySelector('#table tbody');
var dataset = [];

document.querySelector('#execution').addEventListener('click', function() {
    tbody.innerHTML = ``;
    dataset = [];
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    var cell_array = Array(hor * ver)
        .fill()
        .map(function(element, index){
            return index;
        })
    var mine_locate = [];
    while (mine > 0) {
        var select = cell_array.splice(Math.floor(Math.random() * cell_array.length), 1)[0];
        mine_locate.push(select);
        mine -= 1;
    }
    
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
                var target_tr = event.currentTarget.parentNode;
                var target_tbody = event.currentTarget.parentNode.parentNode;
                var hor = Array.prototype.indexOf.call(target_tbody.children, target_tr);
                var ver = Array.prototype.indexOf.call(target_tr.children, event.currentTarget);
                if (target_td.textContent === '' || target_td.textContent === 'X') {
                    target_td.textContent = '!';
                } else if (target_td.textContent === '!') {
                    target_td.textContent = '?';
                } else {
                    if (dataset[hor][ver] === 'X') {
                        target_td.textContent = 'X';
                    } else {
                        target_td.textContent = '';
                    }
                }
            });
            td.addEventListener('click', function(event) {
                var target_td = event.currentTarget;
                var target_tr = target_td.parentNode;
                var target_tbody = target_tr.parentNode;
                var hor = Array.prototype.indexOf.call(target_tbody.children, target_tr);
                var ver = Array.prototype.indexOf.call(target_tr.children, target_td);
                if (dataset[hor][ver] === 'X') {
                    target_td.textContent = `펑`;
                } else {
                    var surroundings = [
                        dataset[hor][ver-1], dataset[hor][ver+1]
                    ]
                    if (dataset[hor-1]) {
                        surroundings = surroundings.concat(
                        dataset[hor-1][ver-1], dataset[hor-1][ver], dataset[hor-1][ver+1]);
                    }
                    if (dataset[hor+1]) {
                        surroundings = surroundings.concat(
                        dataset[hor+1][ver-1], dataset[hor+1][ver], dataset[hor+1][ver+1]);
                    }
                    target_td.textContent = surroundings.filter(function(v) {
                        return v === 'X';
                    }).length;
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
});