const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all customers
async function getAllCustomersModel() {
    const db = await getDb();
    return db.collection("customers").find().toArray();
};

//get single customer
async function getSingleMemberModel(id) {
    const db = await getDb();
    return db.collection("customers").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateMemberModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("customers").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                phone: payload.phone,
                memstatus: payload.memstatus
            }
        }
    )
}


// put function for customer
async function setSingleMemberModel(payload = {}) {
    const db = await getDb();

    return db.collection("customers").insertOne(
        {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phone: payload.phone,
            memstatus: payload.memstatus
        }
    )
};



// delete funtion
async function deleteSingleMemberModel(id) {
    const db = await getDb();

    return db.collection("customers").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllCustomersModel, updateMemberModel, getSingleMemberModel, setSingleMemberModel, deleteSingleMemberModel };