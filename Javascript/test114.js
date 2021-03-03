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
        .map(function (element, index){
            return index;
        });
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
            arr.push('1');
            td.addEventListener()
            //좌클릭
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    for (var k = 0; k < mine_locate.length; k++) {
        var mine_hor = Math.floor(mine_locate[k] / hor);
        var mine_ver = mine_locate[k] % hor;
        tbody.children[mine_hor].children[mine_ver].textContent = 'X';
        dataset[mine_][mine_ver] = 'X';
    }
    console.log(dataset)
});