var result = document.querySelector('#result');
var form = document.querySelector('#form');
var answer = document.querySelector('#answer');
//creating homerun numbers
function reset() {
    numbers = [1,2,3,4,5,6,7,8,9];
    homerun = [];
    for (var i = 0; i < 4; i++) {
        select = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        homerun.push(select);
    }
    homerun = homerun.join('');
    homerun_arr = homerun.split('');
    console.log(homerun);
}
reset();

var fault_count = 0;
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var answer_val = answer.value;
    var answer_arr = answer_val.split('');
    //checking Home run
    if (homerun === answer_val) {
        result.textContent = `Home run~~!`;
        fault_count = 0;
        reset();
        answer.value = ``;
    } else {
        fault_count += 1;
        //checking lose
        if (fault_count >= 10) {
            result.textContent = `You lose.`;
            fault_count = 0;
            reset();
            answer.value = ``;
        } else {
            var strike = 0;
            var ball = 0;
            //checking strike, ball count
            for (var i = 0; i < 4; i++) {
                if (homerun_arr[i] === answer_arr[i]) {
                    strike += 1;
                } else if (homerun_arr.indexOf(answer_arr[i]) > -1) {
                    ball += 1;
                }
            }
            result.textContent = `Entered numbers : ${homerun} / ${strike}strike ${ball}ball / 
            Remaining chances : ${10 - fault_count}`;
            answer.value = ``;
        }
    }
    
});