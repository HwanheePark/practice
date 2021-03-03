var _body = document.body;
var question = document.createElement('div');
question.textContent = `깃발`;
_body.append(question);
var for_enter = document.createElement('form');
_body.append(for_enter);
var answer = document.createElement('input');
for_enter.append(answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
for_enter.append(sub_button);
var result = document.createElement('div');
result.textContent = `딩동댕!`;
_body.append(result);
answer.focus();

for_enter.addEventListener('submit', function(_event){
    _event.preventDefault();
    if(question.textContent[question.textContent.length-1]===answer.value[0]){
        result.textContent = `딩동댕!`;
        question.textContent = answer.value;
        answer.value = '';
        answer.focus();
    } else {
        result.textContent = `땡!`;
        answer.value = '';
        answer.focus();
    }
});



// var word = `깃발`;

// while(true){
//     var answer = prompt(word);
//     if(word[word.length - 1] === answer[0]){
//         alert(`딩동댕!`);
//         word = answer;
//     } else {
//         alert(`땡!`);
//     }
// ;}