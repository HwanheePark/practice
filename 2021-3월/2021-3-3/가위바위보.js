var computer_image = document.querySelector('#computer_image');
var my_image = document.querySelector('#my_image');
var result = document.querySelector('#result');
var rsp_object = {
    rock : `-98px`,
    scissor : `0px`,
    paper : `101px`
}
var image_coordinates = rsp_object.rock;

function interval_start() {
    interval = setInterval(function() {
        if (image_coordinates === rsp_object.rock) {
            image_coordinates = rsp_object.scissor;
        } else if (image_coordinates === rsp_object.scissor) {
            image_coordinates = rsp_object.paper;
        } else {
            image_coordinates = rsp_object.rock;
        }
        computer_image.style.background = `url(가위바위보.png) ${image_coordinates} 0`;
    }, 100);
}
interval_start();

var score = {
    rock : 1,
    scissor : 0,
    paprer : -1
};

function computer_select() {
    return Object.entries(rsp_object).find(function (v) {
        return v[1] === image_coordinates;
    })[0];
}

function clean_reservation() {
    setTimeout (() => {
        result.textContent = ``;
        my_image.style.background = ``;
    }, 1500);
}

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function() {
            interval_start();
        }, 1500);
        clean_reservation();
        var my_select = this.id;
        var my_score = score[my_select];
        var computer_score = score[computer_select()];
        var score_compare = my_score - computer_score;
        if (score_compare === 0) {
            result.textContent = `Draw~`;
            my_image.style.background = `url(가위바위보.png) ${rsp_object[my_select]} 0`;
        } else if ([1, -2].includes(score_compare)) {
            result.textContent = `You Win~!`;
            my_image.style.background = `url(가위바위보.png) ${rsp_object[my_select]} 0`;
        } else {
            result.textContent = `You lose~`;
            my_image.style.background = `url(가위바위보.png) ${rsp_object[my_select]} 0`;
        }
    });
});