```js
/**
 * Напиши фунцию delay, которая работает как setTimeout, только с API промисов
 */

const delay = "your code here :3";

// должно работать так
delay(1000)
  .then(() => {
    console.log("One second just passed, sheesh!");
  })
  .catch(() => {
    console.log("better not get here..");
  })
  .finally(() => {
    console.log("I'll alwayse be called in the end");
  });
```

```js
/**
 * Промисифицируй fs.readFile
 *
 * Пример чтения файла с fs.readFile
 *
 * const fs = require("fs");
 * fs.readFile("./index.js", "utf8", (err, text) => {
 *   if (err) {
 *     console.log("error happened! (text-variable is undefined)");
 *   }
 *
 *   console.log(text);
 * });
 *
 */

const readFilePromisified = "your code here :3";

// должно работать так
readFilePromisified("./file.txt")
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log("file was not found or something");
  })
  .finally();
```
