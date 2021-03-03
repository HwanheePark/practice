const _body = document.body;

var number1 = Math.ceil(Math.random() * 9);
var number2 = Math.ceil(Math.random() * 9);
var question = number1 * number2;

const div_question = document.createElement('div');
div_question.textContent = `${number1} X ${number2} 는?`;
_body.append(div_question);
const _form = document.createElement('form');
_body.append(_form);
const answer = document.createElement('input');
_form.append(answer);
const sub_button = document.createElement('button');
sub_button.textContent = `입력!`
_form.append(sub_button);
const result = document.createElement('div');
result.textContent = ``;
_body.append(result);
answer.focus();

_form.addEventListener('submit', function(_event){
    _event.preventDefault();
    if(question === Number(answer.value)){
        result.textContent = `딩동댕!`;
        var number1 = Math.ceil(Math.random() * 9);
        var number2 = Math.ceil(Math.random() * 9);
        question = number1 * number2;
        div_question.textContent = `${number1} X ${number2} 는?`;
        answer.value = ``;
        answer.focus();
    } else {
        result.textContent = `땡!`;
        answer.value = ``;
        answer.focus();
    }
});


// while(true){
//     var number1 = Math.ceil(Math.random() * 9);
//     var number2 = Math.ceil(Math.random() * 9);
//     var question = number1 * number2;
//     var condition = true;
//     while(condition){
//         var answer = Number(prompt(`${number1} X ${number2} 는?`));
//         if(question === answer){
//             alert(`딩동댕!`);
//             condition = false;
//         } else {
//             alert(`땡!`)
//         }
//     };
// };