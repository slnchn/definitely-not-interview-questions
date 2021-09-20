```js
// Уже написаны два класса: 'Воин' и 'Колдун'
// Нужно написать новый класс 'Ведьмак'
// Объекты класса 'Воин' обладают свойством шваркнуть мечом
// Объекты класса 'Колдун' обладают свойством шваркнуть магией
// Любой уважающий себя ведьмак может и то, и то -> нужно чтобы 'Ведьмак' наследовал свойства и класса 'Воин', и класса 'Колдун'
// Более того, любой уважающий себя ведьмак перед каждым описанным выше действием должен бахнуть элексиров

function Warrior() {}
Warrior.prototype = {
  physicalAttack() {
    console.log("шваркнул мечом, проверяй");
  },

  constructor: Warrior,
};

function Wizard() {}
Wizard.prototype = {
  magicAttack() {
    console.log("шваркнул магией, проверяй");
  },

  constructor: Wizard,
};

function Witcher() {}
// your code here :3

const geralt = new Witcher({ name: "Geralt of Rivia" });
geralt.magicAttack();
geralt.physicalAttack();
```
