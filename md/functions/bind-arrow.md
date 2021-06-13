```js
// Предполагается, что мы вызываем код ниже ве объектов и функций - просто код в файле
// Что выведется в консоль ?

const greet = () => {
  console.log(`Hello! Meow name is ${this.catName}`);
};

const japaneeseCat = {
  catName: "私の涙の果てしない海",
};

const belorussianCat = {
  catName: "Вадзiм",
};

const japaneeseCatGreet = greet.bind(japaneeseCat);
belorussianCat.greet = japaneeseCatGreet;
belorussianCat.greet();
```
