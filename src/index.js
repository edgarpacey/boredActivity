const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.post("/home", function (req, res) {
  res.send("Activated.");
});

app.get("/code", (req, res) => {
  res.sendStatus(401);
});

app.get("/bored", async (request, response) => {
  const api_url = "http://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

app.get("/act", async (request, response) => {
  const api_url = "http://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json.activity);
});

app.get("/param/:key", async (request, response) => {
  const key = request.params.key;
  const api_url = "http://www.boredapi.com/api/activity?key=${key}";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json.key);
});

app.listen(port, () => {
  console.log("Listening to http://localhost:$(port)");
});
