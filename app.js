"use strict";

// Lecture 1
// let Car = require("./Car.js");

// let a = new Car();
// a.drive();

// // Lecture 2
// let http = require("http");

// let server = http.createServer((request, response) => {
//   let url = request.url;
//   if (url == "/mars.html") {
//     response.write("Hallo Mars!");
//   } else if (url == "/mond.html") {
//     response.write("Hallo Mond!");
//   } else {
//     response.write("Hallo Welt!");
//   }
//   response.end();
// });

// server.listen(5000);

// Lecture 3
let express = require("express");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/index", (req, res) => {
  res.render("index", { title: "Hallo" });
});

app.get("/index/:id", (req, res) => {
  let id = req.params.id;
  res.render("index", { title: id });
});

app.listen(5000, () => {
  console.log("App wurde gestartet auf localhost:5000");
});
