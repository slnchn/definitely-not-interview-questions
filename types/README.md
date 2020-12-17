## 2. Типы

### 2.1. [Задача про приведение типов](./casting.md).

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

Насчет `Array`:

- `typeof [] === 'object'`;
- `[] instanceof Object === true`;
- `Array.prototype.__proto__ === Object.prototype`;

Насчет `Function`:

- Если вы выполните `typeof (function() {})` вернется строка `"function"`;
- Но все же функция это не отдельный тип - она как и массив наследуется от объекта (`(function() {}) instanceof Object === true`);

</details>

### 2.3. [Найти первое число](./find-first-number.md).

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
