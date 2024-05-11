const express = require("express");

const books = express.Router();

// Index

books.get("/", (req, res) => {
  res.send([
    {
      title: "The Shinobi Initiative",

      description:
        "The reality-bending adventures of a clandestine service agency in the year 2166",

      year: 2014,

      quantity: 10,

      imageURL: "https://imgur.com/LEqsHy5.jpeg",
    },
    {
      title: "Tess the Wonder Dog",

      description: "The tale of a dog who gets super powers",

      year: 2007,

      quantity: 3,

      imageURL: "https://imgur.com/cEJmGKV.jpg",
    },
  ]);
});

module.exports = books;
