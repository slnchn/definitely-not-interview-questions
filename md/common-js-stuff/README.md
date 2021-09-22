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

### 1.6. [Классическая гнилая задача про всплытие](./hoisting.md).

<details>
<summary>Ответ</summary>

```sh
## Результат
1
0
```

Для начала давайте упростим задачу и пройдемся по шагам.

```js
var flag = 0;

function foo() {
  if (true) {
    flag = 1; // 2
  }

  return flag; // 3
}

console.log(foo()); // 1
console.log(flag); // 4
```

1. Вызываем `foo`;
2. Находим ближайшую видимую переменную `flag` (снаружи `foo`), и перезаписываем в нее;
3. Возвращаем ближайшую `flag`, это - `1`;
4. Показываем `flag`, это - `1`, так как в `foo` она была перезаписана.

Теперь рассмотрим нашу задачу.

```js
// Что и почему выведется в консоль ?

var flag = 0;

function foo() {
  if (true) {
    flag = 1; // 3
  } else {
    var flag = -1; // 2
  }
  return flag; // 4
}

console.log(foo()); // 1
console.log(flag); // 5
```

1. Вызываем `foo`;
2. Видим объявление переменной `flag` внутри `foo`, `flag` всплывает в самый верх `foo`;
3. Находим ближайшую переменную `flag`( в самом верху `foo`) и перезаписываем в нее. **`flag` снаружи функции не трогаем**;
4. Возвращаем `flag` из самого верха `foo` и показываем его в первом `console.log` - `1`;
5. Показываем во втором `console.log` `flag` снаружи `foo` - `0`;

</details>

### 1.7. [Классическая задача про стрелков](../shooters.md) (с выходом в `let`).

<details>
<summary>Ответ</summary>

Мы используем `var` в цикле.

Для каждой итерации цикла используется одна и та же переменная `var`.

Но если мы будем использовать `let`, для каждой итерации цикла будет создаваться новая переменная.

```js
// будет работать
var shooters = [];
for (let i = 0; i < 10; i++) {
  // вот здесь меняем var на let
  shooters.push(() => {
    console.log(i);
  });
}

shooters.forEach((shooter) => shooter());
```

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

### 1.10. [Задача про Set](./set.md).

<details>
<summary>Ответ</summary>

1. Первый `console.log()` выведет "2";

- В Set не добавляются элементы, которые в нем уже есть: один раз добавится единица и один раз - двойка.

2. Второй `console.log()` выведет "3";

- Несмотря на то, что передаются объекты с одинаковыми данными, **это разные объекты и ссылки на них разные**.

- Следовательно Set считает, что добавляются три разных элемента.

</details>

### 1.11. Есть два объекта `Date`. Как узнать, какая из дат раньше ?

<details>
<summary>Ответ</summary>

Операторами `<`, `>`.

</details>
