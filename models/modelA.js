const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all books
async function getAllBooksModel() {
    const db = await getDb();
    return db.collection("Book").find().toArray();
};

//get single book
async function getSingleBookModel(id) {
    const db = await getDb();
    return db.collection("Book").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateBookModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("Book").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                Title: payload.Title,
                Author: payload.Author,
                Genre: payload.Genre,
                Publisher: payload.Publisher,
                ISBN: payload.ISBN,
                PublishedYear: payload.PublishedYear,
                AvailabilityStatus: payload.AvailabilityStatus
            }
        }
    )
}


// put function for book
async function setSingleBookModel(payload = {}) {
    const db = await getDb();

    return db.collection("Book").insertOne(
        {
            Title: payload.Title,
            Author: payload.Author,
            Genre: payload.Genre,
            Publisher: payload.Publisher,
            ISBN: payload.ISBN,
            PublishedYear: payload.PublishedYear,
            AvailabilityStatus: payload.AvailabilityStatus
        }
    )
};



// delete funtion
async function deleteSingleBookModel(id) {
    const db = await getDb();

    return db.collection("Book").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllBooksModel, updateBookModel, getSingleBookModel, setSingleBookModel, deleteSingleBookModel };