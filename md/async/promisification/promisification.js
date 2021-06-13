const fs = require("fs");

// 1) setTimeout promisification

const delay = (ms) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};

console.log("zero seconds passed");
delay(1000).then(() => {
  console.log("one second passed");
});

// 2) fs.readFile promisification

const readFilePromisified = (filepath, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, text) => {
      if (err) {
        reject(err);
      }

      resolve(text);
    });
  });
};

readFilePromisified("./async/promisification/promisification.md", "utf8")
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });
