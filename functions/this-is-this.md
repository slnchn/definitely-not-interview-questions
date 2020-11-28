```js
// Что выведется в консоль ?
// А если я закомментирую стрелочную функцию и раскомментирую обычную ?
// А если вынесу содержимое метода run объекта obj3 из объекта obj3 ?
// Почему ?

const obj3 = {
  name: "obj3",

  run() {
    const sayHello = () => {
      console.log(`hello ${this.name}`);
    };

    // function sayHello() {
    //   console.log(`hello ${this.name}`);
    // }

    const obj1 = {
      name: "obj1",

      run() {
        sayHello();
      },
    };

    const obj2 = {
      name: "obj2",

      run() {
        sayHello();
      },
    };

    [obj1, obj2].forEach((obj) => {
      obj.run();
    });
  },
};

obj3.run();
```
