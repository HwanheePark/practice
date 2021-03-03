var my_image = document.querySelector('#my_image');
var result = document.querySelector('#result');
var rsp_object = {
    rock: '-98px',
    scissor: '0px',
    paper: '101px'
};
var image_coordinates = rsp_object.rock;

function interval_maker() {
    interval = setInterval (function() {
        if (image_coordinates === rsp_object.rock) {
            image_coordinates = rsp_object.scissor;
        } else if (image_coordinates === rsp_object.scissor) {
            image_coordinates = rsp_object.paper;
        } else {
            image_coordinates = rsp_object.rock;
        }
        document.querySelector('#computer_image').style.background = 
        `url(가위바위보.png) ${image_coordinates} 0`;
    }, 100);
}
interval_maker();

var score = {
    rock: 1,
    scissor: 0,
    paper: -1
};

function computer_select() {
    return Object.entries(rsp_object).find(function (v) {
        return v[1] === image_coordinates;
    })[0];
}

function clean() {
    setTimeout (() => {
        result.textContent = ``
        my_image.style.background = ``;
    }, 1500);
}

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(interval);
        setTimeout(function() {
            interval_maker();
        }, 1500);
        clean();
        var my_select = this.id;
        var my_score = score[my_select];
        var computer_score = score[computer_select()];
        var score_compare = my_score - computer_score;
        if (score_compare === 0) {
            result.textContent = `Draw~`;
            my_image.style.background = `url(가위바위보.png) ${rsp_object[my_select]} 0`;
        } else if ([1, -2].includes(score_compare)) {
            result.textContent = `Win~!`;
            my_image.style.background = `url(가위바위보.png) ${rsp_object[my_select]} 0`;
        } else {
            result.textContent = `Lose.`;
            my_image.style.background = `url(가위바위보.png) ${rsp_object[my_select]} 0`;
        }
    });
});