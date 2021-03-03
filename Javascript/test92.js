var result = document.querySelector('#result');
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');

function reset () {
    numbers = [1,2,3,4,5,6,7,8,9];
    select_numbers = [];
    for (var i = 0; i < 4; i += 1) {
        select = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        select_numbers.push(select);
    }
    select_numbers = select_numbers.join('');
    console.log(select_numbers);
}
reset();
var fault_count = 0;

form.addEventListener('submit', function(event){
    event.preventDefault();
    answer_val = answer.value;
    if (select_numbers === answer_val) {
        result.textContent = `홈런~~!`;
        fault_count = 0;
        reset();
        answer.value = ``;
    } else {
        fault_count += 1;
        if (fault_count >= 10) {
            result.textContent = `당신은 졌습니다!`;
            fault_count = 0;
            reset();
            answer.value = ``;
        } else {
            var strike = 0;
            var ball = 0;
            select_numbers_arr = select_numbers.split('');
            answer_arr = answer.value.split('');
            console.log(select_numbers_arr);
            for (var i = 0; i < 4; i += 1) {
                if (select_numbers_arr[i] === answer_arr[i]) {
                    strike += 1;
                } else if (select_numbers_arr.indexOf(answer_arr[i]) > -1) {
                    ball += 1;
                }
            }
            result.textContent = `입력숫자 : ${answer_val} / ${strike}스트라이크 ${ball}볼 / 
            남은기회 ${10 - fault_count}`;
            answer.value = ``;
        }
    }
});