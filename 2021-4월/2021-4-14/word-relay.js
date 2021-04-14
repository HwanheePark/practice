const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

let word;
let newWord;

const start = () => {
  participant = parseInt(prompt('몇 명이 참가하나요?'), 10);
  if (participant) {
      yesOrNo = confirm(`${participant}명이 맞나요?`);
      if (yesOrNo) {
        return;
      } else {
        start();
      }
  } else {
      start();
  }
}
start();

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.textContent = word;
    $input.value = '';
    $input.focus();
    const order = Number($order.textContent);
    if (order >= participant) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    $input.value = '';
    $input.focus();
  }
};

const onInput = (e) => {
  newWord = e.target.value;
};
$input.focus();

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);