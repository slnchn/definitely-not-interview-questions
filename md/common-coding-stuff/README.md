## 0. Общие вопросы по проге

### Что такое каррирование ?

<details>
<summary>Ответ</summary>

_Что такое ?_

```js
function sum(a, b) {
  return a + b;
}

sum(1, 2); // 3

function add(a) {
  return (b) => {
    return a + b;
  };
}

add(1)(2); // 3
```

_Зачем нужно ?_

Одна из целей - частичное применение аргументов.

```js
/**
 *
 * Сложная синхронная функция, которая долго и синхронно считает скидку
 * и вызывает много сайд-эффектов.
 *
 * @param {Object} customerData - данные о покупателе
 * @returns {number} - скидка
 *
 **/
function calculateDiscount(customerData) {
  /* */
}

function calculatePrice(customerData, originalPrice) {
  const discount = calculateDiscount(customerData);
  return discount * originalPrice;
}

// если много товаров, нужно вызывать долгую calculateDiscount каждый раз,
// даже если скидка такая же
const price = calculatePrice({ age: 22 }, 100);
const price2 = calculatePrice({ age: 22 }, 120);
const price3 = calculatePrice({ age: 22 }, 130);

// ...

function carryCalculatePrice(customerData) {
  const discount = calculateDiscount(customerData);
  return (originalPrice) => {
    return discount * originalPrice;
  };
}

// если много товаров, нужно вызывать долгую calculateDiscount можно вызвать только один раз,
// если скидка такая же
const calculatePrice = carryCalculatePrice({ age: 22 });
const price = calculatePrice(100);
const price2 = calculatePrice(120);
const price3 = calculatePrice(130);
```

[Статья про каррирование на learn.javascript.ru](https://learn.javascript.ru/currying-partials)

</details>

### Процедурное программирование vs Функциональное программирование vs ООП

<details>
<summary>Ответ</summary>

**Процедурное программирование, функциональное программирование и ООП - парадигмы как организовывать код.**

Процедурная парадигма - просто что-то общее выносим в функции (процедуры) и используем где надо.  
Помогает уменьшить дублирование кода.

Функциональная парадигма - можно использовать функции в качестве аргументов и возвращаемых значений (функции как объекты первого порядка).

ООП парадигма - группируем сущности в объекты.

</details>

### Функции высшего порядка

<details>
<summary>Ответ</summary>

Функция высшего порядка - функция, которая принимает в качестве аргументов или возвращает в качестве результата другие функции.  
Типичный пример - `Array.prototype.sort`.

</details>

### Как работают браузеры ?

<details>
<summary>Ответ</summary>

[Reflow, repaint](https://habr.com/ru/post/224187/).

[How browsers work ?](https://www.html5rocks.com/ru/tutorials/internals/howbrowserswork/).

[Critical rendering path](https://habr.com/ru/post/320430/).

</details>

### Что такое cookies ?

<details>
<summary>Ответ</summary>

[HTTP cookies](https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies)

</details>
