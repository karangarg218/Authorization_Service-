const {User} = require('../models/index')
class UserRepository{
    
    async create(data){
        try{
            const result = User.create(data)
            return result;
        }catch(err){
            console.log(`Error in repository`)
            throw {err}
        }
    }
    async destroy(userId){
        try{
            const result = User.destroy({
                where:{
                    userId:id
                }
            })
        }catch(Err){
            console.log(`Error in repository`)
            throw Err
        }
    }

}
module.exports = UserRepository