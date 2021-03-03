var _body = document.body;
function reset(){
    numbers = [1,2,3,4,5,6,7,8,9];
    q_numbers = [];
    for(var i = 0; i < 4; i++){
        choice = numbers.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        q_numbers.push(choice);
    };
};
reset();
var result = document.createElement('div');
_body.append(result);
var h3_result = document.createElement('h3');
result.append(h3_result);
var _form = document.createElement('form');
_body.append(_form);
var _input = document.createElement('input');
_input.maxLength = 4;
_form.append(_input);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
_form.append(sub_button);
var boolean = document.createElement('div');
_body.append(boolean);
var h1_boolean = document.createElement('h1');
boolean.append(h1_boolean);
_input.focus();

_form.addEventListener('submit', function(_event){
    _event.preventDefault();
    var answer = _input.value;
    console.log(answer, q_numbers, q_numbers.join('')===answer);
    if (q_numbers.join('') === answer) {
        h3_result.textContent = `홈런~~!`;
        h1_boolean.textContent = `홈런~~!`;
        reset();
        _input.value = ``;
        _input.focus();
    } else {
        var answer_arr = answer.split('');
        var strike = 0;
        var ball = 0;
        for (var i = 0; i < 4; i++){
            if(q_numbers[i]===Number(answer_arr[i])){
                strike ++;
            } else if (q_numbers.indexOf(Number(answer_arr[i])) > -1){
                ball ++;
            }
        }
        h3_result.textContent = `입력 숫자 : ${answer} / ${strike}스트라이크 ${ball}볼`;
        h1_boolean.textContent = ``;
        _input.value = ``;
        _input.focus();
    }
});


