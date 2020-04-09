const Book = require("../Models/Book")

exports.search_for_book = async (req, res, next) => {

    const year = req.body.year;//grab the year 
    const condition = req.body.condition//and condition from the request

    try {

        const book_exists = await Book.findOne({ year: year, condition: condition })//check if the given year and condition exists in the database
    
        //if it does, return it, if not then return book not found
        book_exists ? res.status(200).json({message:"Book found successfully", book:book_exists}) : res.status(404).json({error:"Book not found"})

    }

    catch(err) {

        res.status(500).json({error:"Database error"})

    }

}