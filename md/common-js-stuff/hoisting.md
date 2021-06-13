```js
// Что и почему выведется в консоль ?

var flag = 0;

function foo() {
  if (true) {
    flag = 1;
  } else {
    var flag = -1;
  }
  return flag;
}

console.log(foo());
console.log(flag);
```
