## 3. Наследование

### 3.1. Как можно наследовать один объект от другого JS ?

<details>
<summary>Ответ</summary>

```js
// 1. Функциональное наследование

function Cat(color) {
  this.color = color;
  this.hasCuteCatEars = true;
}

function Person(name) {
  this.name = name;
  this.canSpeakHumanLanguage = true;
}

function CatPerson(name, color = "gray") {
  Cat.call(this, color);
  Person.call(this, name);
}

const catPerson = new CatPerson("Felix Argyle");
// Felix Argyle speaks human language and has cute cat ears UwU

// 2. Прототипное наследование

const wizard = {
  hasMana: true,
  knowsSpells: true,
};

function Necromancer() {}

Necromancer.prototype = {
  ...wizard,
};

const necromancer = new Necromancer();
// necromancer has all wizard's props

// 3. Сахарное наследование
// (это тоже самое прототипное наследование, только с синтаксическим сахаром - ключевым словом extends)

import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
}
```

</details>

### 3.2. [Напиши функцию-конструктор](./constructor-function.md).

<details>
<summary>Ответ</summary>

```js
function Cat({ name }) {
  this.name = name;
  this.isCute = true;
}

const cat = new Cat({ name: "кирилл" });
```

</details>

### 3.3. [Реализуй множественное функциональное наследование](./multiple-inheritance_functional.md).

<details>
<summary>Ответ</summary>

```js
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
  Warrior.call(this);
  Wizard.call(this);
  this.name = name;
}

const geralt = new Witcher({ name: "Geralt of Rivia" });
geralt.magicAttack();
geralt.physicalAttack();
```

</details>

### 3.4. [Реализуй множественное прототипное наследование](./multiple-inheritance_prototype.md).

<details>
<summary>Ответ</summary>

```js
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
Witcher.prototype = {
  ...Warrior.prototype,
  ...Wizard.prototype,

  constructor: Witcher,
};

const geralt = new Witcher({ name: "Geralt of Rivia" });
geralt.magicAttack();
geralt.physicalAttack();
```

</details>

### 3.5. [Задача про прототип](./object-prototype.md).

<details>
<summary>Ответ</summary>

```js
// 1 вариант
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

// 1)
// 1.a) Для первого варианта уровни будут разные;
// 1.b) Для второго варианта уровни будут одинаковые (у ведьмаков одинаковая ссылка на объект { level: 0, name: "", });

// 2) Можно, потому что у прототипа ведьмаков прототип - Object;

// 3) Нужно сделать так, чтобы:
// 3.a) У прототипа ведьмаков не было Object в прототипе;
// 3.b) При записи в прототип Witcher не использовался объект с  Objec в прототипе;

const heroStuff = Object.create(null); // 3.a

heroStuff.level = 0;
// а что будет, если использовать стрелочную функцию для levelUp ?
// this будет не heroStuff и не witcher, а внешний this (если мы не внутри объекта, то window или global)
heroStuff.levelUp = function () {
  this.level += 1;
};

function Witcher() {}
Witcher.prototype = heroStuff; // 3.b

const witcher1 = new Witcher();
const witcher2 = new Witcher();

console.log(witcher1.level);
console.log(witcher2.level);

witcher1.levelUp();

console.log(witcher1.level);
console.log(witcher2.level);

witcher1.toString(); // тут будет ошибка
```

</details>

### 3.6. Как работает оператор `delete` с функциональным наследованием ? А с прототипным ?.

<details>
<summary>Ответ</summary>

**`delete` может удалять только те свойства, которые находятся непосредственно в объекте, к которому применен `delete`.**

Поэтому:

1. При функциональном наследовании все наследуемые свойства внутри свмого результирующего объекта. Поэтому `delete` может удалять и собственные, и наследованые свойства таких объектов;
2. При прототипном наследовании все наследуемые свойства внутри прототипа. `delete` не может их достать;

</details>
