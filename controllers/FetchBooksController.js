const Book = require("../Models/Book")

exports.fetch_books = async (req, res, next) => {

    try {

        const books_found = await Book.find({})//check if the given year and condition exists in the database

        !books_found.length ? res.status(404).json({ error: "No books found" }) : res.status(200).json({ success: true, books: books_found })

    }

    catch (err) {

        res.status(500).json({ error: "Database error" })

    }

}
