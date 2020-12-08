```js
// 1. Какие уровни будут у каждого ведьмака (для варианта 1 и варианта 2) ?

// 1 Вариант
const heroStuff = {
  level: 0,

  levelUp() {
    this.level += 1;
  },
};

// 2 Вариант
// const heroStuff = {
//   info: {
//     level: 0,
//     name: "",
//   },

//   levelUp() {
//     this.info.level += 1;
//   },
// };

function Witcher() {}
Witcher.prototype = {
  ...heroStuff,
};

const witcher1 = new Witcher();
const witcher2 = new Witcher();

console.log(witcher1.level);
console.log(witcher2.level);

witcher1.levelUp();

console.log(witcher1.level);
console.log(witcher2.level);

// 2. Можно ли вызывать методы класса Object (.toString, .valueOf) у объектов-ведьмаков ?

// 3. Сделай так, чтобы у объектов-ведьмаков нельзя было вызывать методы класса Object.
```
