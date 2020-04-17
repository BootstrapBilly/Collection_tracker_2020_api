const Book = require("../Models/Book")

exports.worth_buying = async (req, res, next) => {

    console.log(req.body)

    const year = req.body.form_values.year;//grab the year 
    const new_book_condition = req.body.form_values.condition//and condition from the request

    try {

        const books_found = await Book.find({ year: year })//check if the books exist in the collection

        if (!books_found) return res.status(200).json({ message: "Book missing from collection", worth_buying: true, success:true  }) //if the book is missing, its worth buying

        const condition_weighting = [["Poor", 1], ["Fair", 2], ["Mint", 3]]//set out the value of each condition

        const current_best_condition = find_best_condition(books_found, condition_weighting)//find the best condition currently stored in the database

        const condition_of_new_book = condition_weighting.find(book => book[0] === new_book_condition)[1]//Get the weighting for the condition of the new book

        //if the new book is in better condition, its worth buying, if not it is not worth buying
        condition_of_new_book > current_best_condition ? res.status(200).json({message: "Condition upgrade", worth_buying: true, success:true }) : res.status(200).json({message: "Current condition is better", worth_buying: false, success:true  })

    }

    catch (err) {

        res.status(500).json({ error: "Database error" })

    }

}

const find_best_condition = (owned_books, condition_weighting) => {

    let best_condition = 0;//initialise the best condition 

    const owned_book_conditions = []//define an array to store the conditions of the currently owned books

    owned_books.forEach(book => owned_book_conditions.push(book.condition))//populate the array with the conditions of each owned book

    condition_weighting.forEach(weighting => {//loop through the condition weighting array

        owned_book_conditions.forEach(condition => {//on each loop, loop through the array of conditions of currently owned books

            let current_book_condition;//define a variable to hold the current iteration of the loop

            if (weighting[0] === condition) {//if the current iteration of the owned books array matches the current iteration of the weighting array, e.g. "Fair" matches "Fair"

                current_book_condition = weighting[1]//assign the weighting value to the current_book_condition

                if (current_book_condition > best_condition) {//if the current condition is better than the stored best condition, overwrite it
                    best_condition = current_book_condition
                }
            }
        })

    }
    )
    return best_condition//return the best condition
}
