var body = document.body;
var reset = function(){
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    solution = number1 * number2;
};
reset();
var question = document.querySelector('#question');
question.textContent = `${number1} X ${number2} 는?`;
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');
// answer.maxLength = 2;
var result = document.querySelector('#result');

form.addEventListener('submit', function(event){
    event.preventDefault();
    if (solution === Number(answer.value)){
        result.textContent = `딩동댕~!`;
        reset();
        question.textContent = `${number1} X ${number2} 는?`;
        answer.value = ``;
    } else {
        result.textContent = `땡!`;
        answer.value = ``;
    }
})