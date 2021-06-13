## 6. Functions

### 6.1. Какая разница между `call` / `apply` / `bind` ?

<details>
<summary>Ответ</summary>

- Все методы принимают объект, который будет использоваться в качестве `this`;
- Дальше передаются аргументы вызываемой функции;
- В `call` аргументы передаются _через запятую_;
- В `apply` аргументы передаются _массивом_;
- **`call` и `apply` сразу вызывают функцию** с переданными контекстом и аргументами, а **`bind` возвращает функцию**, которая вызовется с переданными контекстом и аргументами;

</details>

### 6.2. [Задача про силу bind](./bind-context.md).

<details>
<summary>Ответ</summary>

```bash
"Hello! Meow name is 私の涙の果てしない海"
```

Привязанный однажды контекст нельзя изменить.

</details>

### 6.3. [Задача про силу bind-2](./bind-call.md).

<details>
<summary>Ответ</summary>

```bash
"Hello! Meow name is 私の涙の果てしない海"
```

Привязанный однажды контекст нельзя изменить.

</details>

### 6.4. [Гниловатая задача про bind](./bind-multiple-times.md).

<details>
<summary>Ответ</summary>

```bash
8
```

Мы не можем изменить уже привязанный контекст, но можем добавлять аргументы каждым вызовом `bind`.

</details>

### 6.5. [Гнилая задача про bind](./bind-arrow.md).

<details>
<summary>Ответ</summary>

```bash
"Hello! Meow name is undefined"
```

1. У стрелочных функций нет своего `this`;
2. Если внутри стрелочной функции используется `this` - это внешний `this`;
3. В этой задаче мы объявляем функцию на _верхнем уровне файла_ -> `this === window` (если запускаем этот код в браузере) или `this === global` (если запускаем этот код в Node.js);
4. `this` навсегда останется таким;
5. При вызове этой `greet` всегда будет возвращаться это `Hello! Meow name is ${window.catName}` (или `Hello! Meow name is ${global.catName}`, если запускаем этот код в Node.js);
6. Свойства catName нет в `window` -> `window.catName === undefined ` -> `"Hello! Meow name is undefined"`;

</details>

### 6.6. Предположим, в твоем браузере нет bind. Сделай так, чтобы был :3.

<details>
<summary>Ответ</summary>

Нужно написать полифилл `bind`.

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...outerArgs) {
    const fn = this;
    return function (...args) {
      return fn.apply(context, [...outerArgs, ...args]);
    };
  };
}
```

[Разница между `element.innerHTML` и `element.outerHTML`](https://itchief.ru/javascript/textcontent#id-2)

</details>

### 6.7. Какая разница между обычной функцией и стрелочной ?

<details>
<summary>Ответ</summary>

[Разница между стрелочной и обычной функцией](https://medium.com/better-programming/difference-between-regular-functions-and-arrow-functions-f65639aba256#:~:text=Unlike%20regular%20functions%2C%20arrow%20functions,closest%20non%2Darrow%20parent%20function.)

</details>

### 6.8. [Типичная задача про this](./this-is-this.md).

<details>
<summary>Ответ</summary>

1.

```bash
"hello obj3"
"hello obj3"
```

- Стрелочная функция не имеет своего `this` и захватывает внешний `this`;
- Внешний `this` в этом случае - `obj3`;

2.

```bash
"hello undefined"
"hello undefined"
```

- Мы вызываем обычную функцию без контекста объекта;
- Тогда её `this` - глобальный объект - `window` или `global`, в которых точно нет свойства `objName`;

3.

```bash
"hello undefined"
"hello undefined"
```

```bash
"hello undefined"
"hello undefined"
```

- Внешним `this` стрелочной функции станет глобальный объект, в котором точно нет свойства `objName`;
- Контекстом обычной функции останется глобальный объект, в котором точно нет свойства `objName`;

</details>

### 6.9 [Классическая задача про стрелков](../shooters.md) (с выходом в замыкания).

<details>
<summary>Ответ</summary>

```js
// Обернем push функцией
// Теперь каждое число сохраняется в замыкании!
var shooters = [];
for (var i = 0; i < 10; i++) {
  ((index) => {
    shooters.push(() => {
      console.log(index);
    });
  })(i);
}

shooters.forEach((shooter) => shooter());
```

[Почему так](https://learn.javascript.ru/task/make-army)

</details>

### 6.10 Назови примеры, как можно использовать замыкания.

<details>
<summary>Ответ</summary>

[Например, private-свойства](https://stackoverflow.com/a/2728341)

</details>

### 6.11 [Function expression / declaration](./function-expression-declaration.md).

<details>
<summary>Ответ</summary>

Первая - expression.

Вторая - declaration.

Функции, созданные через Function declaration **всплывают**.

</details>

### 6.11 [Метод-обработчик-события](./onclick-method.md).

<details>
<summary>Ответ</summary>

Работать не будет.

Когда я добавляю обработчик вот так `buttonElement.addEventListener("click", this.onSubmit);`, метод onSubmit контекст выполнения.

Это значит, что когда произойдет событие `click`, программа сломается, из-за того что `this` внутри `onSubmit` - это `window`, и в нем нет поля `newTaskTitle`.

```js
// более простой пример
const cat = {
  catName: "андрей",

  sayHello() {
    console.log(`Hello! Meow name is ${this.catName}.`);
  },
};

cat.sayHello(); // все нормально, вызываем метод в контексте кота-Андрея

const sayHello = cat.sayHello;
sayHello(); // "Hello! Meow name is undefined", так как вызываем метод вне контекста (this === window)
```

Как исправить ?

Привязать контекст:

```js
import { sendToDatabase } from "task.domain-model";

class SubmitNewTaskButton {
  constructor(props) {
    this.newTaskTitle = props.newTaskTitle;

    this.onSubmit = this.onSubmit.bind(this); // с этим будет работать
  }

  onSubmit() {
    const updatedTitle = this.newTaskTitle.toLowerCase().trim();
    sendToDatabase(updatedTitle);
  }

  render() {
    const buttonElement = document.createElement("button");
    buttonElement.addEventListener("click", this.onSubmit);
    return buttonElement;
  }
}
```

</details>
