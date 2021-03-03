var image_coordinates = 0;
var rock_scissor_paper = {
    scissor : '0',
    rock : '-100px',
    paper : '100px'
};

console.log(Object.entries(rock_scissor_paper));
var find = Object.entries(rock_scissor_paper).find(function(v) {
    console.log(v);
    return v[0] === 'paper';
});
console.log(find);

setInterval(function(){
    if (image_coordinates === rock_scissor_paper.scissor) {
        image_coordinates = rock_scissor_paper.rock;
    } else if (image_coordinates === rock_scissor_paper.rock) {
        image_coordinates = rock_scissor_paper.paper;
    } else {
        image_coordinates = rock_scissor_paper.scissor;
    }
    document.querySelector('#computer').style.background = 
    `url(가위바위보.png) ${image_coordinates} 0`;
}, 100);

document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log(`나 : ${this.textContent} `)
    });
});