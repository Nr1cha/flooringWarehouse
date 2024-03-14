const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all members
async function getAllMembersModel() {
    const db = await getDb();
    return db.collection("member").find().toArray();
};

//get single member
async function getSingleMemberModel(id) {
    const db = await getDb();
    return db.collection("member").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateMemberModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("member").updateOne(
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


// put function for member
async function setSingleMemberModel(payload = {}) {
    const db = await getDb();

    return db.collection("member").insertOne(
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

    return db.collection("member").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllMembersModel, updateMemberModel, getSingleMemberModel, setSingleMemberModel, deleteSingleMemberModel };