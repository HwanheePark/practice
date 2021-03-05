var computer_image = document.querySelector('#computer_image');
var my_image = document.querySelector('#my_image');
var result = document.querySelector('#result');
var select_object = {
    rock : `-98px`,
    scissor : `0px`,
    paper : `101px`
}
var image_coordinates = select_object.rock;
console.log(select_object[rock], select_object.rock)

function interval_start() {
    interval_rockScissorPaper = setInterval(function () {
        if (image_coordinates === select_object.rock) {
            image_coordinates = select_object.scissor
        } else if (image_coordinates === select_object.scissor) {
            image_coordinates = select_object.paper
        } else {
            image_coordinates = select_object.rock
        }
        computer_image.style.background = `url(가위바위보.png) ${image_coordinates} 0`;
    }, 100);
}
interval_start();

var score = {
    rock : 1,
    scissor : 0,
    paper : -1
}
console.log(score[rock], score.rock)
function computers_select () {
    return Object.entries(select_object).find(function(v) {
        return v[1] === image_coordinates;
    })[0];
}

function clean () {
    setTimeout (() => {
        result.textContent = ``;
        my_image.style.background = ``;
    }, 1500)
}

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval_rockScissorPaper);
        clean();
        setTimeout(function() {
            interval_start();
        }, 1500);
        var my_select = this.id;
        var my_score = score[my_select];
        var computer_score = score[computers_select()];
        var score_compare = my_score - computer_score;
        if (score_compare === 0) {
            result.textContent = `Draw~`;
            my_image.style.background = `url(가위바위보.png) ${select_object[my_select]} 0`;
        } else if ([1, -2].includes(score_compare)) {
            result.textContent = `You Win~!`;
            my_image.style.background = `url(가위바위보.png) ${select_object[my_select]} 0`;
        } else {
            result.textContent = `You Lose.`;
            my_image.style.background = `url(가위바위보.png) ${select_object[my_select]} 0`;
        }
    });
});