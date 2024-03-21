const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all employees
async function getAllEmployeesModel() {
    const db = await getDb();
    return db.collection("employees").find().toArray();
};

//get single employee
async function getSingleEmployeeModel(id) {
    const db = await getDb();
    return db.collection("employees").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateEmployeeModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("employees").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                emp_id: payload.emp_id,
                emp_email: payload.emp_email,
                emp_phone: payload.emp_phone,
                hire_date: payload.hire_date,
                job_title: payload.job_title,
                Department: payload.Department
            }
        }
    )
}


// put function for employee
async function setSingleEmployeeModel(payload = {}) {
    const db = await getDb();

    return db.collection("employees").insertOne(
        {
            firstName: payload.firstName,
            lastName: payload.lastName,
            emp_id: payload.emp_id,
            emp_email: payload.emp_email,
            emp_phone: payload.emp_phone,
            hire_date: payload.hire_date,
            job_title: payload.job_title,
            Department: payload.Department
        }
    )
};



// delete funtion
async function deleteSingleEmployeeModel(id) {
    const db = await getDb();

    return db.collection("employees").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllEmployeesModel, updateEmployeeModel, getSingleEmployeeModel, setSingleEmployeeModel, deleteSingleEmployeeModel };