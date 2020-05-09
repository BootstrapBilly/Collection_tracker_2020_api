const Book = require("../Models/Book")

exports.delete_book = async (req, res, next) => {

    const year = req.body.form_values.year;//grab the year 
    const condition = req.body.form_values.condition//and condition from the request

    const book_exists = await Book.findOne({ year: year, condition: condition })//check if the given year and condition exists in the database
    if (!book_exists) return res.status(404).json({ error: "Book was not found"})//if it doesn't, return a 404

    const book_deleted = await Book.deleteOne({year:year, condition:condition})//otherwise, delete the book 

    const books_found = await Book.find({ year: year })//check if the given year and condition exists in the database

    //if the book was deleted successfully, send a 204, if not send a 500
    book_deleted ? res.status(200).json({message:"Book deleted successfully", success:true, type:"delete", books:books_found, year:year, condition:condition}) : res.status(500).json({error:"Something went wrong with the database"})

}