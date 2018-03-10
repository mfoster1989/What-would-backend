const express = require("express");
const app = express();
const cors = require("cors")
const queries = require("./queries");
const bodyParser = require("body-parser");
const database = require("./database-connection")

app.use(cors())
app.use(bodyParser.json());

app.get("/", (request, response) => {
    queries
        .list("questions")
        .catch(console.error);
});

app.get("/questions", (request, response) => {
    queries.list("questions").then(questions => {
        response.json({ questions });
    }).catch(console.error);
});

app.get("/questions/:id", (request, response) => {
    queries.read("questions", request.params.id).then(questions => {
        questions
            ? response.json({ questions })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/questions", (request, response) => {
    queries.create("questions", request.body).then(questions => {
        response.status(201).json({ questions: questions });
    }).catch(console.error);
});

app.delete("/questions/:id", (request, response) => {
    queries.delete("questions", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/questions/:id", (request, response) => {
    queries.update("questions", request.params.id, request.body).then(questions => {
        response.json({ questions: questions[0] });
    }).catch(console.error);
});

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
