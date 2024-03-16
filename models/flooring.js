const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all books
async function getAllFlooringsModel() {
    const db = await getDb();
    return db.collection("flooring").find().toArray();
};

//get single book
async function getSingleFlooringModel(id) {
    const db = await getDb();
    return db.collection("flooring").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateFlooringModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("flooring").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                Name: payload.Name,
                Description: payload.Description,
                Price: payload.Price,
                Category: payload.Category,
                Stock: payload.Stock,
                Manufacturer: payload.Manufacturer,
                date_added: payload.date_added,
                Weight_kg: payload.Weight_kg,
                Product_id: payload.Product_id
            }
        }
    )
}


// put function for book
async function setSingleFlooringModel(payload = {}) {
    const db = await getDb();

    return db.collection("flooring").insertOne(
        {
            Name: payload.Name,
            Description: payload.Description,
            Price: payload.Price,
            Category: payload.Category,
            Stock: payload.Stock,
            Manufacturer: payload.Manufacturer,
            date_added: payload.date_added,
            Weight_kg: payload.Weight_kg,
            Product_id: payload.Product_id
        }
    )
};



// delete funtion
async function deleteSingleFlooringModel(id) {
    const db = await getDb();

    return db.collection("flooring").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllFlooringsModel, updateFlooringModel, getSingleFlooringModel, setSingleFlooringModel, deleteSingleFlooringModel };