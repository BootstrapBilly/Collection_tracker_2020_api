const Book = require("../Models/Book")

exports.set_url = async (req,res,next) => {

    const url = req.body.form_values.url
    const year = req.body.form_values.year
    const condition = req.body.form_values.condition

    console.log(req.body)

    const url_set = await Book.findOneAndUpdate({year:year, condition:condition}, {image_url:url})

    url_set ? res.status(204) : res.status(500).json({ error: "Database error" })

    console.log(req.body.form_values)
}