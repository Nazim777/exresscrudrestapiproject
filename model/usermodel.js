import mongoose from "mongoose";
const usershema= new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
})

const modelusers= mongoose.model('crudusers',usershema)
export default modelusers