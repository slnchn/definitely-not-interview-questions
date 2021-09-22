Когда я нажимаю на "Za warudo", на следующие пять секунд:

- Интерфейс блокируется;
- Обработчик события на кнопку не выполняется;
- Кот перестает флексить (в `Chrome Version 87.0.4280.88 (Official Build) (64-bit)` кот флексит не переставая; для полного погружения открой страницу в `Firefox 84.0` (или более ранний) );

Почему так происходит ?

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="za-warudo-btn">Za warudo</button>

    <button id="greet-btn">Greet</button>

    <img src="./dancing-head-cat.gif" alt="kit" />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo
      assumenda omnis autem eligendi, pariatur aperiam dolores aliquam eum
      voluptatum. Explicabo ea aspernatur reiciendis ratione consequatur amet
      adipisci quod nam.
    </p>

    <script src="./main-thread-blocking.js"></script>
  </body>
</html>
```

`main-thread-blocking.js`

```js
function timeStop(ms) {
  const start = performance.now();
  let now = performance.now();

  while (now - start < ms) {
    now = performance.now();
    if ((now - start) % 100 === 0) {
      console.log(now - start);
    }
  }
}

document.getElementById("za-warudo-btn").addEventListener("click", () => {
  timeStop(5000);
});

let helloesCounter = 0;
document.getElementById("greet-btn").addEventListener("click", () => {
  console.log(`Hello-${(helloesCounter += 1)}`);
});
```
