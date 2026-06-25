const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.json());

const books = [{ id: 1, title: "Book 1", author: "Author 1" },
{ id: 2, title: "Book 2", author: "Author 2" },
{ id: 3, title: "Book 3", author: "Author 3" },
]

app.get("/getbooks", (req, res) => {
    res.json(books)
})

app.get("/getdata", (req, res) => {
    res.send("Library API");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.listen(5000, () => {
    console.log("Server started fosho fosho");
});