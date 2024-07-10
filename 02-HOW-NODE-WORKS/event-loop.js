const fs = require('fs');

fs.readFile('./test-file.txt', () => {
  console.log('I/O task finished');
  console.log('----------------------');

  setTimeout(() => console.log('Timer 1 finished'), 0);
  setTimeout(() => console.log('Timer 2 finished'), 3000);
  setImmediate(() => console.log('Immediate 1 finished'));
});

console.log('Hello from the top level code');
