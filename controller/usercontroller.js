import modelusers from '../model/usermodel.js'
class controllerusers{
    static createdoc=async (req, res)=>{
        try {
           // console.log(req.body)
            const {name, email, password} = req.body
            const data= new modelusers({
                name,email, password
            }) 
            const result= await data.save()
           
           
            res.send(result)
            
        } catch (error) {
            console.log(error)
        }
        
      
    }
    static getalldoc=async(req,res)=>{
        try {
            const data=await modelusers.find()
            console.log(data)
            res.send(data)

        } catch (error) {
            console.log(error)
            
        }
       
    }
    static getsingledocbyid=async(req,res)=>{
        try {
            const data= await modelusers.findById(req.params.id)
            console.log(data)
            res.send(data)
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    static updatedocbyid=async(req,res)=>{
        try {
            const data= await modelusers.findByIdAndUpdate(req.params.id,req.body)
            console.log(data)
            res.send(data)
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

export default controllerusers