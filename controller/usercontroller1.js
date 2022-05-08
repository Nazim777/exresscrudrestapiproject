import modelusers from "../model/usermodel.js";
class usercontroller1{
    static createdoc= async(req,res)=>{
        try {
            const {name, email, password}= req.body
            const data= new modelusers({
                name, email, password
            })
            const result= await data.save()
            console.log(result)
            res.send(result) 
            
        } catch (error) {
            console.log(error)
            
        }
    }
    static getalldoc=async(req,res)=>{
        try {
            const result = await modelusers.find()
            console.log(result)
            res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }
    static getsingledocbyid=async(req,res)=>{
        try {
            const result= await modelusers.findById(req.params.id)
            console.log(result)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static updatedocbyid=async(req,res)=>{
        try {
            const result= await modelusers.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static deletedocbyid=async(req,res)=>{
        try {
            const result= await modelusers.findByIdAndDelete(req.params.id)
            console.log(result)
            res.send(result)
        } catch (error) {
            console.log(error)
            
        }

    }
}
export default usercontroller1