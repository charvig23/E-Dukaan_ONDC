const mongoose = require("mongoose");
const admin = new mongoose.Schema({
    name: {
        type: String,
        default:"",
    },
    email: {
        type: String,
        default:"",
    },
    password: {
        type: String,
        default:"",
    }
});

const AdminModel = mongoose.model("admin", admin); // 1st argument is name with what we will store the model as, 2nd argument for what schema we are using to build the model

module.exports = AdminModel;