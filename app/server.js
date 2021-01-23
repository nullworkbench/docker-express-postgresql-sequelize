const express = require("express");
const app = express();

const models = require("./models/index");

// 全て取得して返す
app.get("/", (req, res) => {
  models.Post.findAll().then((posts) => {
    res.send(posts);
  });
  //   res.send("Hello World!");
});

// createして/へリダイレクトする
app.get("/create", (req, res) => {
  models.Post.create({
    title: "sample title",
    body: "sample body",
  });
  res.redirect("/");
});

app.listen(9000, () => {
  console.log("The app listening on port 5000");
});
