var computer = document.querySelector('#computer');
var result = document.querySelector('#result');
var rsp_object = {
    rock : '-98px',
    scissor : 0,
    paper : '101px'
};
var image_coordinates = rsp_object.rock;

function interval_maker() {
    interval = setInterval (function () {
        if (image_coordinates === rsp_object.rock) {
            image_coordinates = rsp_object.scissor;
        } else if (image_coordinates === rsp_object.scissor) {
            image_coordinates = rsp_object.paper;
        }  else {
            image_coordinates = rsp_object.rock;
        }
        document.querySelector('#computer').style.background = 
        `url(가위바위보.png) ${image_coordinates} 0`;
    }, 100)
}
interval_maker();

function computer_select () {
    return Object.entries(rsp_object).find(function(v) {
        return v[1] === image_coordinates;
    })[0];
}

function clean() {
    setTimeout(() => {
        result.textContent = ``;
    }, 1000);
}

var score = {
    rock : 1,
    scissor : 0,
    paper : -1
};

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function() {
            interval_maker();
        }, 1000);
        var my_select = this.id;
        var my_score = score[my_select];
        var computer_score = score[computer_select()];
        var score_compare = my_score - computer_score;
        console.log(my_score, computer_score)
        if (score_compare === 0) {
            result.textContent = `Draw~!`;
            clean();
        } else if ([1, -2].includes(score_compare)) {
            result.textContent = `Win~!`;
            clean();
        } else {
            result.textContent = `lose~!`;
            clean();
        }
    });
});