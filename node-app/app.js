"use strict";

const express = require("express");
const app = express();

const USERS = require("./users.json");
const uuid = require("uuid/v4");

const bodyParser = express.json();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

function handleGetUsers(req, res) {
  const data = USERS.users;
  res.json(data);
}

function addNewUser(req, res) {
  const userList = USERS.users;
  const { name, age, occupation } = req.body;
  console.log(req.body);
  const id = uuid();
  const newUser = {
    id: id,
    name: name,
    age: age,
    occupation: occupation
  };
  console.log(newUser);
  if (!name) {
    return res.status(400).send("Name required");
  }

  if (!age) {
    return res.status(400).send("Password required");
  }

  if (!occupation) {
    return res.status(400).send("Occupation required");
  }
  userList.push(newUser);
  res
    .status(204)
    .location(`http://localhost:8080/user/${id}`)
    .json(userList);
}

function updateUser(req, res) {
  const { id } = req.params;
  console.log(id);
  const { name, age, occupation } = req.body;
  const userList = USERS.users.filter(u => u.id !== id);
  console.log(userList);

  const updatedUser = {
    id: id,
    name: name,
    age: age,
    occupation: occupation
  };
  console.log(updatedUser);
  userList.push(updatedUser);
  res.status(201).json(updatedUser);
}

app.get("/users", handleGetUsers);

app.post("/user", bodyParser, addNewUser);

app.get("user/:id", (req, res) => {
  const { id } = req.params;
  const user = USERS.users.find(u => u.id === id);

  if (!user) {
    res.status(404).send("User not found");
  }

  res.json(user);
});

app.post("/user/:id", bodyParser, updateUser);

// app.delete()

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
