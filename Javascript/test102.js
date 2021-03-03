var computer = document.querySelector('#computer');
var result = document.querySelector('#result');
var image_coordinates = '-98px';
var rock_scissor_paper = {
    rock : '-98px',
    scissor : '0px',
    paper : '100px'
};
console.log(Object.entries(rock_scissor_paper));

function interval_maker() {
    interval = setInterval (function () {
        if (image_coordinates === rock_scissor_paper.rock) {
            image_coordinates = rock_scissor_paper.scissor;
        } else if (image_coordinates === rock_scissor_paper.scissor) {
            image_coordinates = rock_scissor_paper.paper;
        } else {
            image_coordinates = rock_scissor_paper.rock;
        }
        computer.style.background = `url(가위바위보.png) ${image_coordinates} 0`;
    }, 100);
}
interval_maker();

var score = {
    rock: 1,
    scissor: 0,
    paper: -1
};

function computers_select (image_coordinates) {
    return Object.entries(rock_scissor_paper).find(function(v) {
        return v[1] === image_coordinates;
    })[0];
}
function clean() {
    setTimeout(() => {
        result.textContent = ``;
    }, 1000);
}

document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        clearInterval(interval);
        setTimeout(function() {
            interval_maker();
        }, 1000);
        var my_score = score[this.id];
        var computer_score = score[computers_select(image_coordinates)];
        var score_compare = my_score - computer_score;
        if (score_compare === 0) {
            result.textContent = `Draw~!`;
            clean();
        } else if ([1, -2].includes(score_compare)) {
            result.textContent = `win~!`;
            clean();
        } else {
            result.textContent = `lose~!`;
            clean();
        }
    });
});