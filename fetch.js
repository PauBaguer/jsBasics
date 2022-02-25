import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((json) => {
    const todos = json;

    const filtered = todos.filter((todo) => todo.completed);
    console.log({ filtered: filtered });

    const mapped = todos.map((todo) =>
      Object.assign(todo, { date: new Date().toTimeString() })
    );
    console.log({ mapped: mapped });

    const reduced = todos.reduce((completed, todo) => {
      let sum = 0;
      if (todo.completed) sum = 1;
      return completed + sum;
    }, 0);
    console.log(reduced);
  });
