const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all orders
async function getAllOrdersModel() {
    const db = await getDb();
    return db.collection("orders").find().toArray();
};

//get single order
async function getSingleOrderModel(id) {
    const db = await getDb();
    return db.collection("orders").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateOrderModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("orders").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                product: payload.product,
                quantity: payload.quantity,
                pricePerSquareFoot: payload.pricePerSquareFoot,
                totalCost: payload.totalCost,
                paymentMethod: payload.paymentMethod
            }
        }
    )
}


// put function for order
async function setSingleOrderModel(payload = {}) {
    const db = await getDb();

    return db.collection("orders").insertOne(
        {
            product: payload.product,
            quantity: payload.quantity,
            pricePerSquareFoot: payload.pricePerSquareFoot,
            totalCost: payload.totalCost,
            paymentMethod: payload.paymentMethod
        }
    )
};



// delete funtion
async function deleteSingleOrderModel(id) {
    const db = await getDb();

    return db.collection("orders").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllOrdersModel, updateOrderModel, getSingleOrderModel, setSingleOrderModel, deleteSingleOrderModel };