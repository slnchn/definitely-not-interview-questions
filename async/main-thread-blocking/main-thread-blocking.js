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
