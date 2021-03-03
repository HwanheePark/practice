var reset = function(){
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    solution = number1 * number2;
};
reset();

var body = document.body;
var question = document.createElement('div');
question.textContent = `${number1} X ${number2} 는?`;
body.append(question);
var form = document.createElement('form');
body.append(form);
var answer = document.createElement('input');
answer.placeholder = `Enter a number.`;
form.append(answer);
var sub_button = document.createElement('button');
sub_button.textContent = `입력`;
form.append(sub_button);
var result = document.createElement('div');
body.append(result);
answer.focus();

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(solution === Number(answer.value)){
        result.textContent = `딩동댕!`;
        reset();
        question.textContent = `${number1} X ${number2} 는?`;
        answer.value = ``;
        answer.focus();
    } else {
        result.textContent = `땡!`;
        answer.value = ``;
        answer.focus();
    }
});




// var reset = function(){
//     var number1 = Math.ceil(Math.random() * 9);
//     var number2 = Math.ceil(Math.random() * 9);
//     var solution = number1 * number2;
// };
// reset();
// while(true){
//     var answer = Number(prompt(`${number1} X ${number2} 는?`));
//     if(solution === answer){
//         alert(`딩동댕!`);
//         reset();
//     } else {
//         alert(`땡!`);
//     }
// }