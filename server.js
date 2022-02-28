// importation
const express = require("express");


// creation de l'instance
const app = express();
// simple routes

app.get("/", (req, res) => {
  res.send("hello wooorllldd");
});

// crud create=post read=get update=put d=delete
const contact = [
  {
    name: "malek ferjani",
    email: "malekferjani@gmail.com",
    id: 1,
  },
  {
    name: "ma",
    email: "malekferjani@gmail.com",
    id: 2,
  },
  {
    name: "malek ferjani",
    email: "malekferjani@gmail.com",
    id: 3,
  },
  {
    name: "malek ferjani",
    email: "malekferjani@gmail.com",
    id: 4,
  },
];

app.get("/users", (req, res) => {
  res.status(200).send({ msg: "this is the list", contact });
});
// /users/:userid
// req.params{users:userid}

app.get("/users/:userId", (req, res) => {
  const ID = Number(req.params.userId);
  const findtheId = contact.find((el) => el.id === ID);
  if (findtheId) {
    res.status(200).send({ msg: "the user id is", findtheId });
  } else {
    res.status(400).send({ msg: "cannot find th id" });
  }
});

// create:=post

app.post("users/add", (req, res) => {
  const newUser=req.body
  contacts=[...contact,newUser]
  res.status(200).send({msg:'the new user is him',contacts})
});

// creation of server
const port = 5000;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`the server is runing on ${port}`);
});
