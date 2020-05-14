const Book = require("../Models/Book")

exports.get_conditions = async (req, res, next) => {

    const year = req.body.form_values;//grab the year 
    const conditions = []
    
    try {

        const books_found = await Book.find({ year: year })//check if the given year and condition exists in the database

        if (!books_found.length) return res.status(204).json({ message: "Book not found"})

        books_found.forEach(book => conditions.push(book.condition))

        return res.status(200).json({conditions:conditions, success:true})
    }

    catch (err) {

        res.status(500).json({ error: "Database error" })

    }

}
