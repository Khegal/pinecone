import express from "express";
import * as fs from "fs";
import { nanoid } from "nanoid";
import { object, string } from "yup";
import bcrypt from "bcrypt";

const PORT = 3333;
const app = express();
const saltRounds = 10;
app.use(express.json());

let users = [];

let todos = [];

let signUpSchema = object({
  userName: string().required("Must not be empty"),
  password: string().required("Must not be empty").min(8),
  email: string().email("Must be a valid email").required("Must not be empty"),
});

let loginSchema = object({
  email: string().email("Must be a valid email").required("Must not be empty"),
  password: string().required("Must not be empty").min(8),
});

let changePassword = object({
  email: string().email("Must be a valid email").required("Must not be empty"),
  password: string().required("Must not be empty").min(8),
  newPassword: string(),
});

let changeEmail = object({
  email: string().email("Must be a valid email").required("Must not be empty"),
  password: string().required("Must not be empty").min(8),
  newEmail: string(),
});

if (fs.existsSync("users.json")) {
  const data = fs.readFileSync("users.json", "utf-8");
  if (data.length > 0) {
    users = JSON.parse(data);
  }
}

app.get("/users", (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ error: "No users found" });
  }
  res.json(users);
});

app.post("/users/signup", async (req, res) => {
  try {
    const { userName, email, password } = await signUpSchema.validate(req.body);

    users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const emailCheck = users.find((user) => user.email === email);
    if (emailCheck) {
      return res.status(400).send({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      id: nanoid(),
      userName,
      email,
      password: hashedPassword,
    };

    users.push(newUser);
    fs.writeFileSync("users.json", JSON.stringify(users));

    res.status(201).json({ message: "New user created" });
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const { email, password } = await loginSchema.validate(req.body);

    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).send({ message: "Incorrect password" });
    }

    return res.status(200).send({ message: "Successful login" });
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
});

app.put("/users/changePassword", async (req, res) => {
  try {
    const { email, password, newPassword } = await changePassword.validate(
      req.body
    );
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Incorrect password" });
    }

    // Update password and save to file
    user.password = await bcrypt.hash(newPassword, saltRounds);
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    return res.status(200).send({ message: "Password updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
});

app.put("/users/changeEmail", async (req, res) => {
  try {
    const { email, password, newEmail } = await changeEmail.validate(req.body);
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const newEmailTaken = users.some(
      (userWithSame) => userWithSame.email === newEmail
    );

    if (newEmailTaken) {
      return res.status(400).send({ message: "Email already in use" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Incorrect password" });
    }

    if (user.email === newEmail) {
      return res
        .status(400)
        .send({ message: "New email is the same as the current email" });
    }

    user.email = newEmail;
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    return res.status(200).send({ message: "Email updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
});

if (fs.existsSync("todos.json")) {
  const data = fs.readFileSync("todos.json", "utf-8");
  if (data.length > 0) {
    todos = JSON.parse(data);
  }
}

if (fs.existsSync("todos.json")) {
  const data = fs.readFileSync("todos.json", "utf-8");
  if (data.length > 0) {
    todos = JSON.parse(data);
  }
}

// GET all todos
app.get("/todos", (req, res) => {
  if (todos.length === 0) {
    return res.status(404).json({ error: "No todos found" });
  }

  res.json(todos);
});

// POST a new todo
app.post("/todos", (req, res) => {
  const title = req.body.title;
  if (!title) return res.status(400).send({ message: "Title is not found" });

  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title: title,
    checked: false,
  };
  todos.push(newTodo);

  // Write to file
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2), "utf-8");
  return res.send(newTodo);
});

// GET a specific todo by ID
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send({ message: "Id not found!" });

  const todo = todos.find((item) => item.id === Number(id));
  if (!todo) return res.status(404).send({ message: "Todo not found!" });

  return res.send(todo);
});

// DELETE a todo by ID
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send({ message: "Id not found!" });

  const index = todos.findIndex((item) => item.id === Number(id));
  if (index === -1) return res.status(404).send({ message: "Todo not found!" });

  const deletedTodo = todos.splice(index, 1);

  // Write updated todos to file
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2), "utf-8");
  return res.send(deletedTodo[0]);
});

// PUT (update) a todo by ID
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send({ message: "Id not found!" });

  const todo = todos.find((item) => item.id === Number(id));
  if (!todo) return res.status(404).send({ message: "Todo not found!" });

  const { title, checked } = req.body;
  if (title !== undefined) todo.title = title;
  if (checked !== undefined) todo.checked = checked;

  // Write updated todos to file
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2), "utf-8");
  return res.send(todo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
