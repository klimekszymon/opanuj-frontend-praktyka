
// Define operations in a scalable way
export  const operations = [
  { name: 'add', symbol: '+', function: (a, b) => a + b },
  { name: 'subtract', symbol: '-', function: (a, b) => a - b },
  { name: 'multiply', symbol: '*', function: (a, b) => a * b },
  { name: 'divide', symbol: '/', function: (a, b) => b !== 0 ? a / b : 'Error: Division by zero' },
];