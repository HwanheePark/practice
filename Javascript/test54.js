var _body = document.body;
var question = document.createElement('div');
question.textContent = `기차`;
_body.append(question);
var _form = document.createElement('form');
_body.append(_form);
var answer = document.createElement('input');
answer.placeholder = `입력하시오`;
_form.append(answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
_form.append(sub_button);
var result = document.createElement('div');
_body.append(result);
answer.focus();

_form.addEventListener('submit', function(_event){
    _event.preventDefault();
    if (question.textContent[question.textContent.length-1]===answer.value[0]){
        result.textContent = `딩동댕!`
        question.textContent = answer.value;
        answer.value = ``;
        answer.focus();
    } else {
        result.textContent = `땡!`
        answer.value = ``;
        answer.focus();
    }
});










// var word = `기차`;
// while (true) {
//     var answer = prompt(word);
//     if(word[word.length-1]===answer[0]){
//         alert(`딩동댕!`);
//         word = answer;
//     } else {
//         alert(`땡!`);
//     }
// }