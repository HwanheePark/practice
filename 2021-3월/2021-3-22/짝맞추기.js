var wrapper = document.querySelector(`#wrapper`);
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
    color.push(color_candidate.splice(Math.floor(Math.random() * color_candidate.length), 1)[0]);
}

// function card_setting (hor, ver) {
    for (var i = 0; i < hor * ver; i++) {
        var card = document.createElement(`div`);
        card.className = `card`;
        var card_inner = document.createElement(`div`);
        card_inner.className = `card_inner`;
        var card_front = document.createElement(`div`);
        card_front.className = `card_front`;
        var card_back = document.createElement(`div`);
        card_back.className = `card_back`;
        card_back.style.background = color[i];
        card_inner.appendChild(card_front);
        card_inner.appendChild(card_back);
        card.appendChild(card_inner);
        (function (c) {
            card.addEventListener(`click`, function() {
                c.classList.toggle(`flipped`);
            });
        })(card);
        wrapper.appendChild(card);
    }
// }
// card_setting(hor, ver);