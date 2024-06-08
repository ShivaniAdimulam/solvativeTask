const userModel = require("../models/userModel");

module.exports.registration = async function (req, res) {
    try {
        let data = req.body
        const createUser = await userModel.create(data)
        return res.status(201).send({ status: true, message: "User created successfully", data: createUser })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.editProfile = async function (req, res) {
    try {
        let profile = req.body
        let userId = req.params.id.trim()
        let updated = await userModel.findOneAndUpdate({ _id: userId }, { $set: profile }, { new: true })
        return res.status(200).send({ status: true, message: "Data updated succefully", data: updated })
       } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
       }
}

module.exports.getUserList = async function (req, res) {
    try {
        
        let data = await userModel.find()
        return res.status(200).send({ status: true, message: "User List is here", data: data })
       } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
       }
}