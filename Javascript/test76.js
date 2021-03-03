var body = document.body;
var question = document.querySelector('#question');
question.textContent = `사과`;
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');
var result = document.querySelector('#result');

form.addEventListener('submit', function(event){
    event.preventDefault();
    if (question.textContent[question.textContent.length - 1] === answer.value[0]){
        result.textContent = `딩동댕!`;
        question.textContent = answer.value;
        answer.value = ``;
    } else {
        result.textContent = `땡!`;
        answer.value = ``;
    }
});





// var question = `사과`;
// while(true){
//     var answer = prompt(question);
//     if(question[question.length - 1] === answer[0]){
//         alert(`딩동댕!`);
//         question = answer;
//     } else {
//         alert(`땡!`);
//     }
// }