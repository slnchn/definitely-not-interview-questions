```js
// Я хочу, чтобы при клике на кнопку строка, полученная из props, была форматирована и отправлена в базу данных
// Форматирование и отправка реализованы в методе onSubmit
// Будет работать ?

import { sendToDatabase } from "task.domain-model";

class SubmitNewTaskButton {
  constructor(props) {
    this.newTaskTitle = props.newTaskTitle;
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
