var my_image = document.querySelector('#my_image');
var rsp_object = {
    rock : '-98px',
    scissor : '0px',
    paper : '101px'
};
var image_coordinates = rsp_object.rock;
console.log(Object.entries(rsp_object));
//interval
function interval_maker() {
    interval = setInterval (function () {
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
    rock : 1,
    scissor : 0,
    paper : -1
};

function computer_select() {
    return Object.entries(rsp_object).find(function(v) {
        return v[1] === image_coordinates;
    })[0];
}

function clean() {
    setTimeout(() => {
        result.textContent = ``;
    }, 2000);
}

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function() {
            interval_maker();
        }, 2000);
        var my_select = this.id;
        var my_score = score[my_select];
        var computer_score = score[computer_select()];
        var score_compare = my_score - computer_score;
        
        my_image.style.width = `98px`;
        my_image.style.height = `150px`;
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