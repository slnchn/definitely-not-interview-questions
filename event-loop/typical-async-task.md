```js
// Что выведется в консоль ?
// Почему ?

setTimeout(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  console.log(2);

  setTimeout(() => {
    console.log(3);

    Promise.resolve().then(() => {
      console.log(4);
    });
  }, 0);
}, 2000);

setTimeout(() => {
  console.log(5);
}, 0);

Promise.resolve().then(() => {
  console.log(6);
});

console.log(7);
```
