var result = document.querySelector('#result');
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');
function reset () {
    numbers = [1,2,3,4,5,6,7,8,9];
    selected_number = [];
    for (var i = 0; i < 4; i++) {
        var select = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        selected_number.push(select);
    }
    selected_number = selected_number.join('');
    console.log(selected_number);
};
reset();

var fault_count = 0;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var answer_val = answer.value;
    if (selected_number === answer_val) {
        result.textContent = `홈런~!`;
        fault_count = 0;
        reset();
        answer.value = ``;
    } else {
        fault_count += 1;
        if (fault_count >= 10) {
            result.textContent = `You lose~!`;
            fault_count = 0;
            reset();
            answer.value = ``;
        } else {
            var strike = 0;
            var ball = 0;
            var selected_number_arr = selected_number.split('');
            var answer_arr = answer.value.split('');
            for (var i = 0; i < 4; i++) {
                if (selected_number_arr[i] === answer_arr[i]) {
                    strike += 1;
                } else if (selected_number_arr.indexOf(answer_arr[i]) > -1) {
                    ball += 1;
                }
            }
            result.textContent = `입력숫자 : ${answer_val} / ${strike}스트라이크 ${ball}볼 / 
            남은기회 ${10 - fault_count}`;
            answer.value = ``;
        }
    }
});