```js
// 3.  Сделай так, чтобы у объектов-ведьмаков нельзя было вызывать методы класса Object.

const heroStuff = Object.create(null, {
  level: { value: 0, writable: true },

  levelUp: {
    // 4. А что будет, если вместо обычной функции я использую стрелочную ?
    value: function () {
      this.level += 1;
    },
  },
});

function Witcher() {}
Witcher.prototype = heroStuff;

const witcher1 = new Witcher();
const witcher2 = new Witcher();

console.log(witcher1.level);
console.log(witcher2.level);

witcher1.levelUp();

console.log(witcher1.level);
console.log(witcher2.level);

witcher1.toString();
```
