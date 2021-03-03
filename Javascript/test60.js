var body = document.body;
var question = document.createElement('div');
question.textContent = `시금치`;
body.append(question);
var form = document.createElement('form');
var answer = document.createElement('input');
answer.placeholder = `Enter a word.`;
form.append(answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
form.append(sub_button);
body.append(form);
var result = document.createElement('div');
body.append(result);
answer.focus();

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(question.textContent[question.textContent.length - 1] === answer.value[0]){
        result.textContent = `딩동댕!`;
        question.textContent = answer.value;
        answer.value = ``;
        answer.focus();
    } else {
        result.textContent = `땡!`;
        answer.value = ``;
        answer.focus();
    }
});

// var question = `시금치`;
// while(true){
//     var answer = prompt(question);
//     if(question[question.length - 1] === answer[0]){
//         alert(`딩동댕!`);
//         question = answer;
//     } else {
//         alert(`땡!`)
//     }
// };