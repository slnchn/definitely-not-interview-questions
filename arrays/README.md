## 4. Arrays

### 4.1. [Задача про дублирование элементов массива](./resolve-duplication.md).

<details>
<summary>Ответ</summary>

```js
function resolveDuplication(array) {
  return array.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }

    return [...acc, item];
  }, []);
}
```

</details>

### 4.2. [Массив котиков](./cats-array.md).

<details>
<summary>Ответ</summary>

```js
function paintRed(array) {
  return array.map((item) => ({ ...item, color: "red" }));
}
```

</details>
