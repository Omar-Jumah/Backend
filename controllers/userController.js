const User = require('../models/userModel');

async function createUser(req,res){
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            created_at: new Date(),
            Credit: req.body.Credit
        });
        res.send(user);
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
}
async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
}

async function getAllUsers(req,res){
    try {
        const users = await User.find();
    res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
    }
async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
