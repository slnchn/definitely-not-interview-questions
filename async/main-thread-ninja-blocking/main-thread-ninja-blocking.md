Я хочу сломать свой проект но так, чтобы никто не заметил.

Могу вызывать `endlessTimeout` или `endlessPromise`.

Что из этого действительно заблочит программу ?

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
function endlessTimeout() {
  setTimeout(endlessTimeout, 0);
}

function endlessPromise() {
  return Promise.resolve().then(endlessPromise);
}

document.getElementById("za-warudo-btn").addEventListener("click", () => {
  // endlessTimeout();
  // endlessPromise();
});

let helloesCounter = 0;
document.getElementById("greet-btn").addEventListener("click", () => {
  console.log(`Hello-${(helloesCounter += 1)}`);
});
```
