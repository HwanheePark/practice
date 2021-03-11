var screen = document.querySelector(`#screen`);
var result = document.querySelector(`#result`);
var average = document.querySelector(`#average`);
var record_textContent = document.querySelector(`#record_textContent`);
var time_start;
var record_sum = 0;
var record = [];
function average_calculator() {
    for (var i = 0; i < record.length; i++) {
        record_sum += record[i];
    }
    average_value = record_sum / record.length;
    console.log(`average : ${average_value}`)
}

screen.addEventListener(`click`, function () {
    if (screen.classList.contains(`ready`)) {
        screen.classList.remove(`ready`);
        screen.classList.add(`waiting`);
        screen.textContent = `Click when the color changes.`;
        timeout = setTimeout(function () {
            time_start = new Date();
            screen.click();    
        }, Math.floor(Math.random() * 1000) + 2000);
    } else if (screen.classList.contains(`waiting`)) {
        if (!time_start) {
            clearTimeout(timeout);
            screen.classList.remove(`waiting`);
            screen.classList.add(`ready`);
            screen.innerHTML = `You committed a foul!<br>Try again.`;
        } else {
            screen.classList.remove(`waiting`);
            screen.classList.add(`now`);
            screen.textContent = `Click!!!`;
        }
    } else if (screen.classList.contains(`now`)) {
        time_end = new Date();
        record.push((time_end - time_start) /1000);
        screen.classList.remove(`now`);
        screen.classList.add(`ready`);
        screen.textContent = `Click to Start`
        result.textContent = (time_end - time_start) / 1000;
        average_calculator();
        average.textContent = `average : ${average_value}`;
        record_textContent.textContent = `record : ${record}`;
        time_start = null;
        time_end = null;
        record_sum = 0;
    }
});