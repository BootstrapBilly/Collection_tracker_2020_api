const Book = require("../Models/Book")

exports.upload_photo = async (req,res,next) => {

    const year = req.params.book_year

    console.log(req.files)
    console.log(year)

    const image = req.files;

    const imageUrl = image[0].path.replace(/\\/g,"/");

    try {

        const image_uploaded = await Book.findOneAndUpdate({year:year}, {photo:imageUrl})

        image_uploaded ? res.status(201).json({success:true}) : res.status(424).json({success:false})

    }

    catch(error){

        res.status(500).json({ error: "Database error" })

    }

}