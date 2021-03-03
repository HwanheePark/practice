var _body = document.body;
function reset(){
    numbers = [1,2,3,4,5,6,7,8,9];
    s_numbers = [];
    for (var i = 0; i < 4; i++){
        select = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        s_numbers.push(select);
    }
};
reset();
var result = document.createElement('div');
_body.append(result);
var _form = document.createElement('form');
_body.append(_form);
var answer = document.createElement('input');
answer.placeholder = `당신의 선택은?`;
_form.append(answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
_form.append(sub_button);
var _boolean = document.createElement('div');
_body.append(_boolean);
answer.focus();

_form.addEventListener('submit', function(_event){
    _event.preventDefault();
    console.log(`정답:${s_numbers.join('')}`);
    if (s_numbers.join('') === answer.value){
        result.textContent = `홈런~~!`;
        _boolean.textContent = `홈런~~!`;
        reset();
        answer.value = '';
        answer.focus();
    } else {
        var strike = 0;
        var ball = 0;
        for(var i = 0; i < 4; i++){
            if (s_numbers[i] === Number(answer.value.split('')[i])){
                strike ++;
            } else if(s_numbers.indexOf(Number(answer.value.split('')[i])) > -1){
                ball ++;
            }
        }
        result.textContent = `입력숫자 : ${answer.value} / ${strike}스트라이크 ${ball}볼`;
        _boolean.textContent = ``;
        answer.value = '';
        answer.focus();
    }
});