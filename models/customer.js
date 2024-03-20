const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all customers
async function getAllCustomersModel() {
    const db = await getDb();
    return db.collection("customers").find().toArray();
};

//get single customer
async function getSingleCustomerModel(id) {
    const db = await getDb();
    return db.collection("customers").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateCustomerModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("customers").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                phoneNumber: payload.phone
            }
        }
    )
}


// put function for customer
async function setSingleCustomerModel(payload = {}) {
    const db = await getDb();

    return db.collection("customers").insertOne(
        {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phoneNumber: payload.phone
        }
    )
};



// delete funtion
async function deleteSingleCustomerModel(id) {
    const db = await getDb();

    return db.collection("customers").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllCustomersModel, updateCustomerModel, getSingleCustomerModel, setSingleCustomerModel, deleteSingleCustomerModel };