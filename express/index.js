import express from "express";

const app = express();

app.use(express.json());

const todo = [
  {
    id: 0,
    title: "gg",
    checked: false,
  },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/bye", (req, res) => {
  res.send("nuy from express");
});

app.get("/todos", (req, res) => {
  res.json(todo);
});

app.post("/todos", (req, res) => {
  const input = req.body;
  const { title } = input;

  const newTodo = {
    id: todo[todo.length - 1].id + 1,
    title,
    checked: false,
  };

  todo.push(newTodo);
  res.send(newTodo);
});

app.delete("/todos", (req, res) => {
  const id = req.body.id;
  const index = todo.findIndex((todobyId) => todobyId.id === Number(id));

  if (index === -1) {
    res.status(404).send({ message: "id not found" });
  } else {
    todo.splice(index, 1);
    res.status(200).send(Number(id));
  }
});

app.patch("/todos", (req, res) => {
  const id = req.body.id;
  const index = todo.findIndex((todobyId) => todobyId.id === Number(id));
  if (!id) {
    res.status(404).send({ message: "id not found in body" });
  } else {
    if (index === -1) {
      res.status(404).send({ message: "id not found" });
    } else {
      todo[index] = { id: Number(id), title: todo[index].title, checked: true };
      res.status(200).send({ message: "checked" });
    }
  }
});

app.get("/greet", (req, res) => {
  res.send("hi from express");
});

app.listen(3000, () => {
  console.log("running on my assc");
});
