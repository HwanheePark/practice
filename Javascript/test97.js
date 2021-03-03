var result = document.querySelector('#result');
var bonus_class = document.querySelector('.bonus_class');
var numbers = Array(45)
    .fill()
    .map(function (element, index) {
        return index + 1;
    });
console.log(numbers);
var shuffle = [];
while (numbers.length > 0) {
    var selected_number = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    shuffle.push(selected_number);
}
var winning_numbers = shuffle.slice(0, 6).sort(function (p, c){return p - c});
var bonus_number = shuffle[shuffle.length - 1];
console.log(shuffle);
console.log(`${winning_numbers} / ${bonus_number}`);

function decoration (index, append_locate){
    var ball = document.createElement('div');
    ball.textContent = index;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '100px';
    ball.style.width = '25px';
    ball.style.height = '25px';
    ball.style.textAlign = 'center';
    ball.style.fontSize = '20px';
    ball.style.marginRight = '10px';
    var backgroundcolor;
    if (index <= 10) {
        backgroundcolor = 'red';
    } else if (index <= 20) {
        backgroundcolor = 'orange';
    } else if (index <= 30) {
        backgroundcolor = 'yellow';
    } else if (index <= 40) {
        backgroundcolor = 'blue';
    } else {
        backgroundcolor = 'green';
    }
    ball.style.background = backgroundcolor;
    append_locate.appendChild(ball);
}

setTimeout(function async_callback(){
    decoration(winning_numbers[0], result);
}, 1000);
setTimeout(function async_callback(){
    decoration(winning_numbers[1], result);
}, 2000);
setTimeout(function async_callback(){
    decoration(winning_numbers[2], result);
}, 3000);
setTimeout(function async_callback(){
    decoration(winning_numbers[3], result);
}, 4000);
setTimeout(function async_callback(){
    decoration(winning_numbers[4], result);
}, 5000);
setTimeout(function async_callback(){
    decoration(winning_numbers[5], result);
}, 6000);
setTimeout(function async_callback(){
    decoration(bonus_number, bonus_class);
}, 7000);