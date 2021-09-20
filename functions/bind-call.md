```js
function greet() {
  console.log(`Hello! Meow name is ${this.name}`);
}

const japaneeseCat = {
  name: "私の涙の果てしない海",
};

const belorussianCat = {
  name: "Вадзiм",
};

const japaneeseCatGreet = greet.bind(japaneeseCat);
japaneeseCatGreet.call(belorussianCat);
```
