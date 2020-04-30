const Book = require("../Models/Book")

exports.search_for_book = async (req, res, next) => {

    const year = req.body.form_values;//grab the year 
    //if it does exist, get the best condition
    const condition_weighting = [["Poor", 1], ["Fair", 2], ["Mint", 3]]

    try {

        const books_found = await Book.find({ year: year })//check if the given year and condition exists in the database

        if (!books_found.length) return res.status(404).json({ error: "Book not found", year:year }) //if it doesn't exist, return a 404

        //*Book exists
        const best_condition = find_best_condition(books_found, condition_weighting)//find the best condition stored in the database

       return res.status(200).json({ message: "Book found successfully", book: {year:year, condition: best_condition}, success:true, type:"search"})//return the book with the best condition

    }

    catch (err) {

        res.status(500).json({ error: "Database error" })

    }

}

const find_best_condition = (books_found, condition_weighting) => {

    let best_condition_weighting = 0;//initial weighting
    let best_condition = null;//initial condition

    books_found.forEach(book => {//go through every book with the year that was found

        condition_weighting.forEach(condition => {//compare it to the condition weightings

            //when the conditions match up
            if (book.condition === condition[0]) 
            
            //if the condition of this current book is better than the current best condition, replace it 
            if (condition[1] > best_condition_weighting) best_condition_weighting = condition[1]

        })
    }
    )
    //convert the weighting to value
    if(best_condition_weighting === 1) best_condition = "Poor" 
    if(best_condition_weighting === 2) best_condition = "Fair" 
    if(best_condition_weighting === 3) best_condition = "Mint" 
    
    //return the value
   return best_condition

}