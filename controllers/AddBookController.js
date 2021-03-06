const Book = require("../Models/Book")

exports.add_book = async (req, res, next) => {

    
    const year = req.body.form_values.year;//grab the year 
    const condition = req.body.form_values.condition//and condition from the request
    const url = req.body.form_values.url ? req.body.form_values.url.url : null//and condition from the request

    const book_exists = await Book.findOne({ year: year, condition: condition })//check if the given year and condition already exists in the database

    if (book_exists) return res.status(409).json({ error: "Book already exists with that year and condition. Only 1 copy of each condition is allowed for each year.", book:req.body.form_values})

    const new_book = new Book({year:year, condition:condition, image_url:url} )//create a new book with the given input

    const book_saved = await new_book.save()//save the new book

    const books_found = await Book.find({ year: year })//check if the given year and condition exists in the database

    //if it saved successfully, send a 201 status, if it failed, send a database error
    book_saved ? res.status(201).json({message: "Book saved successfully", success:true, books:books_found, type:"add"}) : res.status(500).json({error:"Something went wrong with the database"})

}