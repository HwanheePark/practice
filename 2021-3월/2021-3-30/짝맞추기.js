var wrapper = document.querySelector('#wrapper');
var result = document.querySelector('#result');
var hor = 3;
var ver = 4;
var click_flag = true;
var click_card = [];
var clear_card = [];
var time_start;
var colors = [
    `red`, `red`, 
    `gold`, `gold`, 
    `springgreen`, `springgreen`, 
    `grey`, `grey`, 
    `green`, `green`, 
    `purple`, `purple`
];
function shuffle () {
    color_candidates = JSON.parse(JSON.stringify(colors));
    color = [];
    for (var i = 0; color_candidates.length > 0; i++) {
        color.push(color_candidates.splice(Math.floor(Math.random() * color_candidates.length), 1)[0]);
    }
}

function card_setting(hor, ver) {
    shuffle();
    click_flag = false;
    for (var i = 0; i < hor * ver; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        var card_inner = document.createElement('div');
        card_inner.className = 'card_inner';
        var card_front = document.createElement('div');
        card_front.className = 'card_front';
        var card_back = document.createElement('div');
        card_back.className = 'card_back';
        card_back.style.background = color[i];
        card_inner.appendChild(card_front);
        card_inner.appendChild(card_back);
        card.appendChild(card_inner);
        wrapper.appendChild(card);
        (function (card) {
            card.addEventListener('click', function () {
                if (click_flag && !click_card.includes(card) && !clear_card.includes(card)) {
                    click_card.push(card);
                    card.classList.toggle('flipped');
                    if (click_card.length === 2) {
                        if (
                            click_card[0].querySelector('.card_back').style.background === 
                            click_card[1].querySelector('.card_back').style.background
                        ) {
                            clear_card.push(click_card[0], click_card[1]);
                            click_card = [];
                            if (clear_card.length === hor * ver) {
                                click_flag = false;
                                clear_card = [];
                                time_end = new Date();
                                result.textContent = `Time taken : ${(time_end - time_start) / 1000}sec`;
                                setTimeout(function () {
                                    document.querySelectorAll('.card').forEach(function(card) {
                                        card.classList.toggle('flipped');
                                    })
                                    setTimeout(function () {
                                        wrapper.innerHTML = '';
                                        card_setting(hor, ver);
                                    }, 300);
                                }, 3000);
                            }
                        } else {
                            click_flag = false;
                            setTimeout(function () {
                                click_card[0].classList.toggle('flipped');
                                click_card[1].classList.toggle('flipped');
                                click_card = [];
                                click_flag = true;
                            }, 1000);
                        }
                    }
                }
            });
        })(card);
    }
    
    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function () {
            card.classList.toggle('flipped');
        }, 1000 + (80 * index));
    });
    setTimeout(function () {
        document.querySelectorAll('.card').forEach(function (card) {
            card.classList.toggle('flipped');
        })
        click_flag = true;
        time_start = new Date();
    }, 5000);
}
card_setting(hor, ver);