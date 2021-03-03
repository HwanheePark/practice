var result = document.querySelector('#result');
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');
function reset() {
    numbers = [1,2,3,4,5,6,7,8,9];
    selected_numbers = [];
    for (var i = 0; i < 4; i ++) {
        var select = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        selected_numbers.push(select);
    }
    selected_numbers = selected_numbers.join('');
    selected_numbers_arr = selected_numbers.split('');
    console.log(selected_numbers);
};
reset();

fault_count = 0;
form.addEventListener('submit', function(event) {
    event.preventDefault();
    fault_count += 1;
    var answer_val = answer.value;
    var answer_arr = answer_val.split('');
    if (selected_numbers === answer_val) {
        result.textContent = `Home run~~!`;
        reset();
        fault_count = 0;
        answer.value = ``;
    } else {
        if (fault_count >= 10) {
            result.textContent = `You lose.`;
            reset();
            fault_count = 0;
            answer.value = ``;
        } else {
            var strike = 0;
            var ball = 0;
            for (var i = 0; i < 4; i++) {
                if (selected_numbers_arr[i] === answer_arr[i]) {
                    strike += 1;
                } else if (selected_numbers_arr.indexOf(answer_arr[i]) > -1) {
                    ball += 1;
                }
            }
            result.textContent = `entered numbers : ${answer_val} / ${strike}strike ${ball}ball / 
            remaining chances ${10 - fault_count}`;
            answer.value = ``;
        }
    }
});