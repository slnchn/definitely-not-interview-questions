```js
// Что выведется в консоль ?

function sum(a, b, c) {
  return a + b + c;
}

const sumAB = sum.bind(null, 1, 5);
const sumC = sumAB.bind(null, 2);

console.log(sumC());
```
