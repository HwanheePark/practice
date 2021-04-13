const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

let word;
let newWord;
//confirm을 취소하면 null값이 되고 parseInt로 감싸면서 NaN이 되어 나온다.
const start = () => {
  participant = parseInt(prompt('몇 명이 참가하나요?'), 10); //10은 10진법
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
  if (!word || word[word.length - 1] === newWord[0]) { //제시어가 비었는가?
    word = newWord;
    $word.textContent = word;
    $input.value = '';
    $input.focus();
    const order = Number($order.textContent); //현재 순서
    if (order + 1 > participant) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    $input.value = '';
    $input.focus();
  }
};
const onInput = (event) => {
  newWord = event.target.value;
};
$input.focus();

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);