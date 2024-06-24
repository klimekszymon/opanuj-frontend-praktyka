function validator() {
  const input = document.getElementById('input');
  const validate = document.getElementById('validate');
  const clear = document.getElementById('clear');
  const result = document.getElementById('result');

  const minMaxValidator = (num) => {
    if (num > 0 && num < 100) return true;
    else return false;
  };

  const isEvenValidator = (num) => {
    if (num % 2 === 0) return true;
    else return false;
  };

  validate.addEventListener('click', () => {
    console.log('validate', input.value);
    if (!input.value) {
      result.innerHTML = 'Empty input';
    }
    if (minMaxValidator(Number(input.value))  && isEvenValidator(Number(input.value))) {
      result.innerHTML = 'Valid';
    } else {
      result.innerHTML = 'Invalid';
    }
  });

  clear.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
