var table = document.querySelector('#table');
var result = document.querySelector('#result');
var rows = [];
var cells = [];
var turn = 'X';

//addEventLisner click
function referee(event) {
    //좌표
    var row_index = rows.indexOf(event.currentTarget.parentNode);
    var cell_index = cells[row_index].indexOf(event.currentTarget);
    //빈칸확인
    if (cells[row_index][cell_index].textContent !== '') {
        console.log(`빈칸이 아닙니다.`);
    } else {
        //3칸 연속인지 확인
        cells[row_index][cell_index].textContent = turn;
        var win = false;
        if (
            cells[row_index][0].textContent === turn &&
            cells[row_index][1].textContent === turn &&
            cells[row_index][2].textContent === turn
        ) {win = true;}
        if (
            cells[0][cell_index].textContent === turn &&
            cells[1][cell_index].textContent === turn &&
            cells[2][cell_index].textContent === turn
        ) {win = true;}
        if (
            cells[0][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[2][2].textContent === turn
        ) {win = true;}
        if (
            cells[2][0].textContent === turn &&
            cells[1][1].textContent === turn &&
            cells[0][2].textContent === turn
        ) {win = true;}
        //맞으면 종료, 아니면 턴넘김
        if (win) {
            result.textContent = `${turn}님의 승리~!`;
            setTimeout(function () {
                result.textContent = ``;
                cells.forEach(function (row) {
                    row.forEach(function (cell) {
                        cell.textContent = ``;
                    })
                })
            }, 1500);
        } else {
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    }
}

//2차원 배열, 테이블 만들기
for (var i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    rows.push(row);
    cells.push([]);
    for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');
        cells[i].push(cell);
        cell.addEventListener('click', referee);
        row.appendChild(cell);
    }
    table.appendChild(row);
}
console.log(cells);