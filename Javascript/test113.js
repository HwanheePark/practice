var form = document.querySelector('#form');
var result = document.querySelector('#result');
var image = {
    rock : '-98px',
    scissor : '0px',
    paper : '101px'
};
var image_coordinates = image.rock;

function interval_maker() {
    interval = setInterval(function(){
        if (image_coordinates === image.rock) {
            image_coordinates = image.scissor;
        } else if (image_coordinates === image.scissor) {
            image_coordinates = image.paper;
        } else if (image_coordinates === image.paper) {
            image_coordinates = image.rock;
        }
        document.querySelector('#image').style.background = 
        `url(가위바위보.png) ${image_coordinates} 0`;
    }, 100);
}
interval_maker();

var score = {
    rock : 1,
    scissor : 0,
    paper : -1
};

function computers_select() {
    return Object.entries(image).find(function(v) {
        return v[1] === image_coordinates;
    })[0];
};

function clean() {
    setTimeout(() => {
        result.textContent = ``;
    }, 1000);
};

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function(){
            interval_maker();
        }, 1000);
        var my_select = this.id;
        var my_score = score[my_select];
        var computer_score = score[computers_select()];
        var score_compare = my_score - computer_score;
        if (score_compare === 0) {
            result.textContent = `Draw~!`;
            clean();
        } else if ([1, -2].includes(score_compare)) {
            result.textContent = `Win~!`;
            clean();
        } else {
            result.textContent = `Lose~!`;
            clean();
        }
    });
});