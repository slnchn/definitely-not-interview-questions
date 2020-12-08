## 1. Общие приколы JS

### 1.1. В чем разница между значением и ссылкой на значение ?

<details>
<summary>Ответ</summary>

```js
const value = 11; // в value хранится само число 11
const valueCopy = value; // в valueCopy хранится копия value - новое независимое число 11

const reference = { name: "Sasha" }; // в reference хранится ссылка - адрес куска динамической памяти в которой хранится объект
const copyReference = reference; // в copyReference хранится копия адреса того же куска динамической памяти в которой хранится объект
copyReference.surname = "Shine"; // обращаемся по ссылке copyReference, а она такая же как reference -> записываем свойсвто в объект
```

</details>

### 1.2. Как создать копию объекта ?

<details>
<summary>Ответ</summary>

```js
// 1. Модно, стильно, молодежно (shallow copy)
const obj = { name: "Sasha Shine" };
const copyObj = { ...obj };

// 2. То же самое, но менее молодежно (shallow copy)
const obj = { name: "Sasha Shine" };
const copyObj = Object.assign({}, obj);

// 3. Медленно (deep copy)
const obj = { name: "Sasha Shine" };
const copyObj = JSON.parse(JSON.stringify(obj));

// 4. Jedi style, но тоже медленно (deep copy)
function iterationCopy(src) {
  let target = {};
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      // if the value is a nested object, recursively copy all it's properties
      if (isObject(src[prop])) {
        target[prop] = iterationCopy(src[prop]);
      } else {
        target[prop] = src[prop];
      }
    }
  }

  return target;
}

const obj = { name: "Sasha Shine" };
const copyObj = iterationCopy(source);
```

</details>

### 1.3. В чем разница между _shallow_ и _deep_ копией ?

<details>
<summary>Ответ</summary>

**Shallow copy** - создаем копию только самых верхних свойств. Более глубокие свойства _не копируются_.
**Deep copy** - полная копия.

```js
// shallow copy
const obj = {
  name: "Sasha Shine",
  personal: {
    veryPersonal: {
      favoriteManga: "Berzerk",
      favoriteAnime: "Your name",
    },
  },
};

const shallowCopy = { ...obj };
shallowCopy.personal.veryPersonal.favoriteManga = "Tokyo Ghoul :Re"; // favoriteManga в оригинальном объекте поменялась

// deep copy
const obj = {
  name: "Sasha Shine",
  personal: {
    veryPersonal: {
      favoriteManga: "Berzerk",
      favoriteAnime: "Your name",
    },
  },
};

const deepCopy = JSON.parse(JSON.stringify(obj));
shallowCopy.personal.veryPersonal.favoriteManga = "Tokyo Ghoul :Re"; // favoriteManga в оригинальном объекте все еще БЕРЗЕКЕР
```

</details>

### 1.4. В чем разница между `var`, `let` и `const` ?

<details>
<summary>Ответ</summary>

Вкратце:

1. К let и const нельзя обратиться до объявления (типа не всплывают (на самом деле всплывают (нет (да))));
2. Области видимости let и const ограничиваются блоками (if, for, функция), а область видимости var - только функцией;
3. Если использовать let-индекс в цикле for, в каждой итерации создается новая переменная, а если var, то все время одна и та же;

[let, const](https://learn.javascript.ru/let-const)

[var](https://learn.javascript.ru/var)

</details>

### 1.5. Можно ли переопределять `var`, `let` и `const` ?

<details>
<summary>Ответ</summary>

```js
/**
 *
 * Видел такую задачу моего старого лида.
 * Переменная temp объевляется внутри блока.
 * Поэтому temp видна только внутри блока, потому что это const.
 * А вот если бы это был var temp, все было бы ок, потому что var ограничивается только функцией.
 *
 */

function task3() {
  let left = "left";
  let right = "right";

  if (true) {
    const temp = left;
    left = right;
    right = temp;
  }

  console.log(left, right); // выведется "right", "left", все ок
  console.log(temp); // а тут смэрть
}

/**
 *
 * Но при чем тут переопределение ?.
 * Внутри блоков можно переопределять let и const и они не будут конфликтовать с внешними переменными.
 * Разве что ESLint будет ругаться :)
 *
 */

function task3() {
  let left = "left";
  let right = "right";

  if (true) {
    const temp = left;
    const left = right;
    const right = temp;
  }

  console.log(left, right); // вот тут выведется "left", "right", потому что перестановки выполнялись с новыми переменными
  console.log(temp); // тут все еще смэрть
}
```

</details>

### 1.6. [Классическая гнилая задача про всплытие](./common-js-stuff/hoisting.md).

<details>
<summary>Ответ</summary>
</details>

### 1.7. [Классическая задача про стрелков](./shooters.md) (с выходом в `let`).

<details>
<summary>Ответ</summary>
</details>

### 1.8. Что такое temporal dead zone ?

<details>
<summary>Ответ</summary>

[Temporal dead zone](https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/)

</details>

### 1.9. Расскажи что знаешь про Set и Map.

<details>
<summary>Ответ</summary>

[Set и Map](https://learn.javascript.ru/map-set)

</details>

### 1.10. [Задача про Set](./common-js-stuff/set.md).

<details>
<summary>Ответ</summary>

</details>

### 1.11. Есть два объекта `Date`. Как узнать, какая из дат раньше ?

<details>
<summary>Ответ</summary>

Операторами `<`, `>`.

</details>

---

## 2. Типы

### 2.1. [Задача про приведение типов](./types/casting.md).

### 2.2. Назови типы данных в JS.

<details>
<summary>Ответ</summary>

~~Вот они слева направо:~~

- Number;
- BigInt;
- String;
- Boolean;
- null (`typeof null === 'object'`, но это неправда :D);
- undefined;
- Symbol;
- Object;

Насчет Array:

- `typeof [] === 'object'`;
- `[] instanceof Object === true`;
- `Array.prototype.__proto__ === Object.prototype`;

</details>

### 2.3. [Найти первое число](./types/find-first-number.md).

<details>
<summary>Ответ</summary>

```js
const firstNumber [null, null, undefined, "12asas", "111", 11, 2, 3, 4, 6].find(
  (item) => typeof item === "number"
);
```

Еще часто проверяют так, но в этой задаче это неправильно (из-за приведения типов).

`isNaN` неявно приводит свой аргумент к числу.

В первой итерации цикла `isNaN` пытается привести `"12asas"` к к Number и получает `NaN`.

Идет дальше, пытается привести `null` к к числу **и получает число 0**.

После этого цикл ошибочно считает, что число найдено, хотя на самом деле был найден `null`.

```js
const firstNumber [null, null, undefined, "12asas", "111", 11, 2, 3, 4, 6].find(
  (item) => ["12asas", null, undefined, "111", 11, 2, 3, 4, 6].find(item => !Number.isNaN(item))
);
```

</details>

### 2.4. Что будет в результате `1 + 2 + '3'` ?.

<details>
<summary>Ответ</summary>

`'33'` - сначала сложение чисел (1 + 2 = 3), потом конкатенация со строкой (3 + '3' = '33').

```js
1 + 2 + +"3"; // а тут будет 6, потому что один плюс пойдёт приводить строку '3' к числу :)
```

</details>

---

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

### 3.2. [Напиши функцию-конструктор](./inheritance/constructor-function.md).

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

### 3.3. [Реализуй множественное функциональное наследование](./inheritance/multiple-inheritance_functional.md).

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

### 3.4. [Реализуй множественное прототипное наследование](./inheritance/multiple-inheritance_prototype.md).

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
Witcher.prototype {
  ...Warrior,
  ...Wizard,
};

const geralt = new Witcher({ name: "Geralt of Rivia" });
geralt.magicAttack();
geralt.physicalAttack();
```

</details>

### 3.5. [Задача про прототип](./inheritance/object-prototype.md).

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

---

## Arrays

| Вопрос                                                                        |
| ----------------------------------------------------------------------------- |
| [Задача про дублирование элементов массива](./arrays/resolve-duplication.md). |
| [Массив котиков](./arrays/cats-array.md).                                     |

---

## DOM

| Вопрос                                                                       |
| ---------------------------------------------------------------------------- |
| Какая разница между `element.innerHTML` и `element.outerHTML` ?              |
| Как можно добавить обработчик события клика на кнопку (несколько способов) ? |
| Как убрать конкретный обработчик события ?                                   |
| [Задача про котика](./DOM/cancel-basic-behavior.md).                         |

---

## Functions

| Вопрос                                                                                        |
| --------------------------------------------------------------------------------------------- |
| Какая разница между `call` / `apply` / `bind` ?                                               |
| Какие аргументы передаются в `call` / `apply` / `bind` ?                                      |
| [Задача про силу bind](./functions/bind-context.md)                                           |
| [Задача про силу bind-2](./functions/bind-call.md)                                            |
| [Гниловатая задача про bind](./functions/bind-multiple-times.md)                              |
| [Гнилая задача про bind](./functions/bind-arrow.md)                                           |
| Предположим, в твоем браузере нет bind. Сделай так, чтобы был :3.                             |
| Какая разница между обычной функцией и стрелочной ?                                           |
| [Типичная ~~вечеринка с бассейном~~ задача про this](./functions/this-is-this.md)             |
| [Классическая задача про стрелков](./shooters.md) (с выходом в замыкания)                     |
| Назови примеры, как можно использовать замыкания.                                             |
| [Function expression / function declaration](./functions/function-expression-declaration.md). |

---

## Event Loop

| Вопрос                                                                       |
| ---------------------------------------------------------------------------- |
| [Классическая задача про асинхронность](./event-loop/typical-async-task.md). |
