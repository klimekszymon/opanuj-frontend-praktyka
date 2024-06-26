export default function validator() {
    // Pobranie elementów z DOM
    const input = document.getElementById('input');
    const validate = document.getElementById('validate');
    const clear = document.getElementById('clear');
    const result = document.getElementById('result');
  
    // Funkcje walidujące
    const notEmpty = (value) => value !== '' || 'Value cannot be empty';
    const isNumber = (value) =>
      typeof value === 'number' || 'Value must be a number';
    const isEven = (value) => value % 2 === 0 || 'Value must be even';
    const isInRange = (value) =>
      (value > 0 && value < 100) || 'Value must be in range 0-100';
  
    // Funkcja walidująca
    function validateInput(value, ...validators) {
      const errors = [];
  
      validators.forEach((validator) => {
        const result = validator(value);
        if (result !== true) {
          errors.push(result);
        }
      });
  
      return errors.length > 0 ? errors : true;
    }
    validate.addEventListener('click', () => {
      // Użycie funkcji walidującej
      const validationResult = validateInput(
        Number(input.value),
        notEmpty,
        isNumber,
        isInRange,
        isEven
      );
      if (validationResult === true) {
        result.innerHTML = 'Valid';
      } else {
        result.innerHTML = `Invalid ${validationResult.join(', ')}`;
      }
    });
  
    clear.addEventListener('click', () => {
      input.value = '';
      result.innerHTML = '';
    });
  }
  
//  validator();
  