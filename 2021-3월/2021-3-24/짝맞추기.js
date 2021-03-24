var wrapper = document.querySelector(`#wrapper`);
var result = document.querySelector(`#result`);
var hor = 3;
var ver = 4;
var click_flag = true;
var click_card = [];
var clear_card = [];
var start_time;
var colors =  [
    `red`, `red`, 
    `gold`, `gold`, 
    `springgreen`, `springgreen`, 
    `grey`, `grey`, 
    `green`, `green`, 
    `purple`, `purple`
];
function shuffle () {
    color_candidate = colors.slice();
    shuffled_colors = [];
    for (var i = 0; color_candidate.length > 0; i++) {
        shuffled_colors = shuffled_colors.concat(color_candidate.splice(Math.floor(Math.random() * color_candidate.length), 1));
    }
};

function card_setting (hor, ver) {
    shuffle();
    click_flag = false;
    for (var i = 0; i < hor * ver; i++) {
        var card = document.createElement(`div`);
        card.className = `card`;
        var card_inner = document.createElement(`div`);
        card_inner.className = `card_inner`;
        var card_front = document.createElement(`div`);
        card_front.className = `card_front`;
        var card_back = document.createElement(`div`);
        card_back.className = `card_back`;
        card_back.style.background = shuffled_colors[i];
        card_inner.appendChild(card_front);
        card_inner.appendChild(card_back);
        card.appendChild(card_inner);
        (function (c) {
            card.addEventListener(`click`, function() {
                if (click_flag && !clear_card.includes(c) && !click_card.includes(c)) {
                    c.classList.toggle(`flipped`);
                    click_card.push(c);
                    if (click_card.length === 2) {
                        if (
                            click_card[0].querySelector(`.card_back`).style.background === 
                            click_card[1].querySelector(`.card_back`).style.background
                        ) {
                            clear_card.push(click_card[0], click_card[1]);
                            console.log(clear_card);
                            click_card = [];
                            if (clear_card.length === hor * ver) {
                                //클리어 했을 때
                                var end_time = new Date();
                                result.textContent = `Time taken : ${(end_time - start_time) / 1000}sec`;
                                click_flag = false;
                                setTimeout(function () {
                                    document.querySelectorAll(`.card`).forEach(function (card) {
                                        card.classList.toggle(`flipped`);
                                    })
                                    setTimeout(function () {
                                        wrapper.innerHTML = ``;
                                        clear_card = [];
                                        card_setting(hor, ver);
                                    }, 300);
                                }, 3000);
                            }
                        } else {
                            click_flag = false;
                            setTimeout( function () {
                                click_card[0].classList.remove(`flipped`);
                                click_card[1].classList.remove(`flipped`);
                                click_flag = true;
                                click_card = []
                            }, 1000);
                        }
                    }
                }
            });
        })(card);
        wrapper.appendChild(card);
    }

    document.querySelectorAll(`.card`).forEach(function (card, index) {
        setTimeout(function () {
            card.classList.add(`flipped`);
        }, 1000 + 100 * index);
    });
    setTimeout(function () {
        document.querySelectorAll(`.card`).forEach(function (card) {
            card.classList.remove(`flipped`);
        });
        click_flag = true;
        start_time = new Date();
    }, 5000);
}
card_setting(hor, ver);