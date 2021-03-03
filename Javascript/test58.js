var _body = document.body;
function reset(){
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    resolution = number1 * number2;
};
reset();
var question = document.createElement('div');
question.textContent = `${number1} X ${number2} 는?`;
_body.append(question);
var _form = document.createElement('form');
_body.append(_form);
var answer = document.createElement('input');
answer.placeholder = `정답은??`;
_form.append(answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력!`;
_form.append(sub_button);
var result = document.createElement('div');
_body.append(result);
answer.focus();

_form.addEventListener('submit', function(_event){
    _event.preventDefault();
    if (resolution === Number(answer.value)){
        result.textContent = `딩동댕~!`;
        reset();
        question.textContent = `${number1} X ${number2} 는?`;
        answer.value = ``;
        answer.focus();
    } else {
        result.textContent = `땡!!!!!!!!!!!!!!!!!!`;
        answer.value = ``;
        answer.focus();
    }
});





// function reset(){
//     number1 = Math.ceil(Math.random() * 9);
//     number2 = Math.ceil(Math.random() * 9);
//     resolution = number1 * number2;
// };
// reset();
// while(true){
//     var answer = Number(prompt(`${number1} X ${number2} 는?`));
//     if (resolution === answer){
//         alert(`딩동댕!`);
//         reset();
//     } else {
//         alert(`땡!`);
//     }
// }