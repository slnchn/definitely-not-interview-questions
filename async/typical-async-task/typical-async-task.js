console.log(0);

setTimeout(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve()
  // 1
  .then(() => {
    console.log(3);
    throw new Error();
  })
  // 2
  .then(() => {
    console.log(4);
  })
  // 3
  .then(() => {
    console.log(5);
  })
  // 4
  .then(() => {
    console.log(6);
  })

  // 5
  .then(() => {
    console.log(7);
  })
  // 6
  .catch(() => {
    console.log(8);
  });

Promise.resolve()
  // 1
  .then(() => {
    console.log(9);
  })
  // 2
  .then(() => {
    console.log(10);
  })
  // 3
  .then(() => {
    console.log(11);
  })
  // 4
  .then(() => {
    console.log(12);
  })
  // 5
  .then(() => {
    console.log(13);
  })
  // 6
  .then(() => {
    console.log(14);
  })
  // 7
  .catch(() => {
    console.log(15);
  });

console.log(16);
