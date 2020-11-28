```js
// Уже написаны два класса: 'Воин' и 'Колдун'
// Нужно написать новый класс 'Ведьмак'
// Объекты класса 'Воин' обладают свойством шваркнуть мечом
// Объекты класса 'Колдун' обладают свойством шваркнуть магией
// Любой уважающий себя ведьмак может и то, и то -> нужно чтобы 'Ведьмак' наследовал свойства и класса 'Воин', и класса 'Колдун'
// Как же это сделать, холера...

function Warrior() {
  this.physicalAttack = () => {
    console.log("шваркнул мечом, проверяй");
  };
}

function Wizard() {
  this.magicAttack = () => {
    console.log("шваркнул магией, проверяй");
  };
}

function Witcher({ name }) {
  // your code here :3
  this.name = name;
}

const geralt = new Witcher({ name: "Geralt of Rivia" });
geralt.magicAttack();
geralt.physicalAttack();
```
