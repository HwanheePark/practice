var _body = document.body;
function reset(){
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    answer = number1 * number2;
};
reset();
var question = document.createElement('div');
question.textContent = `${number1} X ${number2} 는?`;
_body.append(question);
var _form = document.createElement('form');
_body.append(_form);
var _answer = document.createElement('input');
_answer.placeholder = `입력하시오`
_form.append(_answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
_form.append(sub_button);
var result = document.createElement('div');
_body.append(result);
_answer.focus();

_form.addEventListener('submit', function(_event){
    _event.preventDefault();
    if (answer===Number(_answer.value)){
        result.textContent = `딩동댕!`;
        reset();
        question.textContent = `${number1} X ${number2} 는?`;
        _answer.value = ``;
        _answer.focus();
    } else {
        result.textContent = `땡!`;
        _answer.value = ``;
        _answer.focus();
    }
});





// var number1 = Math.ceil(Math.random() * 9);
// var number2 = Math.ceil(Math.random() * 9);
// var answer = number1 * number2;
// while(true){
//     var _answer = Number(prompt(`${number1} X ${number2} 는?`));
//     if (answer === _answer){
//         alert(`딩동댕!`);
//         number1 = Math.ceil(Math.random() * 9);
//         number2 = Math.ceil(Math.random() * 9);
//         answer = number1 * number2;
//     } else {
//         alert(`땡!`);
//     }
// }