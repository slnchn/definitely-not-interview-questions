```js
// 1) Что выведется в консоль ?
// 2) А если я закомментирую стрелочную функцию и раскомментирую обычную ?
// 3) А если вынесу содержимое метода run объекта obj3 из объекта obj3 ?
// Почему ?

const obj3 = {
  objName: "obj3",

  run() {
    const sayHello = () => {
      console.log(`hello ${this.objName}`);
    };

    // function sayHello() {
    //   console.log(`hello ${this.objName}`);
    // }

    const obj1 = {
      objName: "obj1",

      run() {
        sayHello();
      },
    };

    const obj2 = {
      objName: "obj2",

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
