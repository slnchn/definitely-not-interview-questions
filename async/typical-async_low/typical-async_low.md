```js
/**
 * Что выведется в консоль ?
 *
 */

console.log(1);

setTimeout(() => {
  console.log(2);

  setTimeout(() => {
    console.log(3);
  }, 0);
}, 100);

console.log(4);
```
