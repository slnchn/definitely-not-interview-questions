## 5. DOM

### 5.1. Какая разница между `element.innerHTML` и `element.outerHTML` ?

<details>
<summary>Ответ</summary>

[Разница между `element.innerHTML` и `element.outerHTML`](https://itchief.ru/javascript/textcontent#id-2)

</details>

### <strong style="color: crimson;">5.2.</strong> Как можно добавить обработчик события клика на кнопку (несколько способов) ?

<details>
<summary>Ответ</summary>

1. Через HTML;

```html
<button onclick="someFunctionDeclaredInScripts">Don't click me please</button>
```

В этом случае верстка и скрипт сильно связаны (плохо).

Так можно добавить только один обработчик, если не объединять обработчики в один (плохо).

2. Через JS-1;

```js
const button = document.getElementById("send-message-button");
button.onclick = (event) => {
  // ...
};
```

Верстка и скрипт слабо связаны (хорошо).

Так можно добавить только один обработчик, если не объединять обработчики в один (плохо).

3. Через JS-2;

```js
const button = document.getElementById("send-message-button");
button.addEventListener("click", (event) => {
  // ...
});
```

Верстка и скрипт слабо связаны (хорошо).

Так можно добавить сколько угодно обработчиков (хорошо).

Чтобы удалить обработчик, нужно иметь ссылку на него (плохо).

</details>

### 5.3. Как убрать конкретный обработчик события ?

<details>
<summary>Ответ</summary>

```js
function onClick() {
  console.log("Meow");
}

const button = document.getElementById("send-message-button");
button.addEventListener("click", onClick); // add event listener
button.removeEventListener("click", onClick); // remove event listener
```

</details>

### <strong style="color: crimson;">5.4.</strong> [Задача про котика](./cancel-basic-behavior.md).

<details>
<summary>Ответ</summary>

```js
document.getElementById("google-link").addEventListener("click", (event) => {
  event.preventDefault();

  console.log(":3");
});
```

</details>
