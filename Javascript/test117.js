var result = document.querySelector('#result');
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');

function reset() {
    numbers = [1,2,3,4,5,6,7,8,9];
    selected_numbers = [];
    for (var i = 0; i < 4; i++) {
        var select = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        selected_numbers.push(select);
    }
    selected_numbers = selected_numbers.join('');
    selected_numbers_arr = selected_numbers.split('');
    console.log (selected_numbers);
};
reset();

var fault_count = 0;
//eventListener 
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var answer_val = answer.value;
    var answer_arr = answer_val.split('');
    //Homerun check
    if (selected_numbers === answer_val) {
        result.textContent = `Home run~~!`;
        fault_count = 0;
        reset();
        answer.value = ``;
    } else {
        fault_count += 1;
        //fault_count >= 10 check
        if (fault_count >= 10) {
            result.textContent = `You lose.`;
            fault_count = 0;
            reset();
            answer.value = ``;
        } else {
            //show strike & ball & fault_count
            var strike = 0;
            var ball = 0;
            for (var i = 0; i < 4; i++) {
                if (selected_numbers_arr[i] === answer_arr[i]) {
                    strike += 1;
                } else if (selected_numbers_arr.indexOf(answer_arr[i]) > -1) {
                    ball += 1;
                }
            }
            result.textContent = `Entered numbers : ${selected_numbers} / ${strike}strike ${ball}ball / 
            Remaning chances : ${10 - fault_count}`;
            answer.value = ``;
        }
    }
});