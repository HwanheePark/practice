var result = document.querySelector('#result');
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');

function reset(){
    numbers = [1,2,3,4,5,6,7,8,9];
    select_numbers = [];
    for(var i = 0; i < 4; i += 1){
        select = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        select_numbers.push(select);
    }
};
reset();

var fault_count = 0;
console.log(`정답 : ${select_numbers.join('')} / 남은기회 : ${10 - fault_count}`);
form.addEventListener('submit', function(event){
    event.preventDefault();
    var answer_val = answer.value;
    if (select_numbers.join('') === answer_val){
        fault_count = 0;
        result.textContent = `홈런~~!`;
        reset();
        answer.value = ``;
    } else {
        fault_count += 1;
        var strike = 0;
        var ball = 0;
        if (fault_count >= 10){
            fault_count = 0;
            result.textContent = `당신은 졌습니다.`;
            reset();
            answer.value = ``;
        } else {
            var answer_arr = answer.value.split('');
            for(var i = 0; i < 4; i += 1){
                if (select_numbers[i] === answer_arr[i]) {
                    strike += 1;
                } else if (select_numbers.indexOf(Number(answer_arr[i])) > -1) {
                    ball += 1;
                }
            }
            result.textContent = `입력숫자 : ${answer.value} / ${strike}스트라이크 ${ball}볼 
            / 남은 기회 : ${10 - fault_count}`;
        }
    }
});