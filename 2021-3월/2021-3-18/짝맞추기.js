var hor = 4;
var ver = 3;
var color_candidate = [
    `red`, `red`, 
    `gold`, `gold`, 
    `springgreen`, `springgreen`, 
    `grey`, `grey`, 
    `green`, `green`, 
    `purple`, `purple`
];
var color = [];
for (var i = 0; color_candidate.length > 0; i++) {
    color = color.concat(color_candidate.splice(Math.floor(Math.random() * color_candidate.length), 1));
}
console.log(color);

function card_setting (hor, ver) {
    for (var i = 0; i < hor * ver; i++) {
        var card = document.createElement('div');
        card.className = `card`;
        var card_inner = document.createElement('div');
        card_inner.className = `card_inner`;
        var card_front = document.createElement('div');
        card_front.className = `card_front`;
        var card_back = document.createElement('div');
        card_back.className = `card_back`;
        card_back.style.background = color[i];
        card_inner.appendChild(card_front);
        card_inner.appendChild(card_back);
        card.append(card_inner);
        (function (c) {
            card.addEventListener(`click`, function() {
                c.classList.toggle(`flipped`);
                //toggle은 스위치 개념으로 flipped가 없으면 넣고 있으면 빼는 역할을 한다.
            })
        })(card);
        document.querySelector('#wrapper').appendChild(card);
    }
}
card_setting(hor, ver);