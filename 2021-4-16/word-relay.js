const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

let word;
let newWord;

const start = () => {
  participant = parseInt(prompt('몇 명이 참가하나요?'), 10);
  if (!participant) {
    start();
  } else {
    yesOrNo = confirm(`${participant}명이 맞습니까?`);
  }
  if (!yesOrNo) {
    start();
  }
};
start();

const onInput = (e) => {
  newWord = e.target.value;
};

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.textContent = word;
    $input.value = '';
    $input.focus();
  } else {
    $input.value = '';
    $input.focus();
    return;
  }
  const order = Number($order.textContent);
  if (order >= participant) {
    $order.textContent = 1;
  } else {
    $order.textContent = order + 1;
  }
};
$input.focus();

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);