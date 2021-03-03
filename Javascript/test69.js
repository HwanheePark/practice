var body = document.body;
var reset = function(){
    numbers = [1,2,3,4,5,6,7,8,9];
    s_numbers = [];
    for(var i = 0; i < 4; i += 1){
        select = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        s_numbers.push(select);
    }
};
reset();
var result = document.createElement('div');
body.append(result);
var form = document.createElement('form');
body.append(form);
var answer = document.createElement('input');
answer.placeholder = `숫자 4개를 입력하시오.`;
answer.maxLength = 4;
form.append(answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
form.append(sub_button);
answer.focus();
var fault_count = 0;

form.addEventListener('submit', function(event){
    event.preventDefault();
    var answer_val = answer.value;
    console.log(`정답 : ${s_numbers.join('')}, ${s_numbers.join('') === answer_val}`);
    if (s_numbers.join('') === answer_val){
        result.textContent = `홈런~~!`;
        fault_count = 0;
        reset();
        answer.value = ``;
        answer.focus();
    } else {
        fault_count += 1;
        if (fault_count >= 10){
            result.textContent = `당신은 졌습니다. 정답은 ${s_numbers.join('')}였습니다.`;
            fault_count = 0;
            reset();
            answer.value = ``;
            answer.focus();
        } else {
            var strike = 0;
            var ball = 0;
            var answer_arr = answer.value.split('');
            for(var i = 0; i < 4; i += 1){
                if (s_numbers[i] === Number(answer_arr[i])){
                    strike += 1;
                } else if (s_numbers.indexOf(Number(answer_arr[i])) > -1){
                    ball += 1;
                }
            }
            result.textContent = `입력숫자 : ${answer_val} / ${strike}스트라이크 ${ball}볼 
            / 틀린횟수 : ${fault_count}`;
            answer.value = ``;
            answer.focus();
        }
    }
});