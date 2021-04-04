"use strict";

let express = require("express");
let fs = require("fs");
let GuestBookEntry = require("./src/GuestBookEntry");

fs.readFile("./data.json", "utf-8", (err, data) => {
  if (err) throw err;
  let d = JSON.parse(data);

  let entries = [];
  for (let entry of d) {
    entries.push(new GuestBookEntry(entry.title, entry.content));
  }

  //Start server
  let app = express();
  app.set("view engine", "ejs");
  app.set("views", "./views");

  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("./public"));

  app.get("/index", (req, res) => {
    res.render("index", { entries: entries });
  });

  app.get("/index/:id", (req, res) => {
    let id = req.params.id;
    res.render("index", { title: id });
  });

  app.post("/guestbook/new", (req, res) => {
    let body = req.body;
    let content = body.content;
    let title = body.title;
    entries.push(new GuestBookEntry(title, content));
    //write new data in data.json
    fs.writeFile(
      "./data.json",
      JSON.stringify(entries),
      { encoding: "utf-8" },
      (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
      }
    );
    res.redirect("/index");
    res.end();
  });

  app.listen(5000, () => {
    console.log("App wurde gestartet auf localhost:5000");
  });
});
