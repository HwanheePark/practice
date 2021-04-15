let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (number) => (event) => {
  if (!operator) { //비어있다
    numOne += number;
    $result.value += number;
    return;
  }
  //비어있지 않다
  if (!numTwo) { //numTwo 누르기 직전
    $result.value = '';
  }
  numTwo += number;
  $result.value += number;
}; //고차함수 (high order function)

const onClickOperator = (op) => () => {
  if (numTwo) {
    onClickCalculator()(); //고차함수에 의해 반환된 함수 실행
    operator = op;
    $operator.value = op;
    return;
  }
  if (numOne) {
    operator = op;
    $operator.value = op;
  }
};

const onClickCalculator = () => () => {
  if (numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case 'X':
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
      case '/':
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      default:
        break;
    }
    numOne = $result.value;
    numTwo = '';
    operator = '';
    $operator.value = '';
  }
};

const onClickClear = () => () => {
  numOne = '';
  numTwo = '';
  operator = '';
  $operator.value = '';
  $result.value = '';
};

document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('X'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#calculate').addEventListener('click', onClickCalculator('='));
document.querySelector('#clear').addEventListener('click', onClickClear('C'));