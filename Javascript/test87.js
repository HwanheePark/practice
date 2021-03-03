var result = document.querySelector('#result');
var bonus_class = document.querySelector('.bonus');

var numbers = Array(45)
    .fill()
    .map(function (element, index){
        return index + 1;
    });
console.log(numbers);

var shuffle = [];
while (numbers.length > 0) {
    var select = numbers.splice(Math.floor(Math.random() * (numbers.length)), 1)[0];
    shuffle.push(select);
}
console.log(shuffle);

var bonus = shuffle[shuffle.length - 1];
var select_numbers = shuffle.slice(0, 6).sort(function (p, c){return p - c});
console.log(select_numbers, bonus);

function decoration (index, result){
    var ball = document.createElement('div');
    ball.textContent = index;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '100px';
    ball.style.width = '25px';
    ball.style.height = '25px';
    ball.style.textAlign = 'center';
    ball.style.marginRight = '10px';
    ball.style.fontSize = '20px';
    var backgroundcolor;
    if (index <= 10) {
        backgroundcolor = 'red';
    } else if (index <= 20) {
        backgroundcolor = 'orange';
    } else if (index <= 30) {
        backgroundcolor = 'yellow';
    } else if (index <= 40) {
        backgroundcolor = 'skyblue';
    } else {
        backgroundcolor = 'green';
    }
    ball.style.background = backgroundcolor;
    result.appendChild(ball);
};

setTimeout(function async_callback(){
    decoration(select_numbers[0], result);
}, 1000);
setTimeout(function async_callback(){
    decoration(select_numbers[1], result);
}, 2000);
setTimeout(function async_callback(){
    decoration(select_numbers[2], result);
}, 3000);
setTimeout(function async_callback(){
    decoration(select_numbers[3], result);
}, 4000);
setTimeout(function async_callback(){
    decoration(select_numbers[4], result);
}, 5000);
setTimeout(function async_callback(){
    decoration(select_numbers[5], result);
}, 6000);
setTimeout(function async_callback(){
    decoration(bonus, bonus_class);
}, 7000);