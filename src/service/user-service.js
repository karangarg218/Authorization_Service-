const UserRepository = require('../repository/user-repository')
class UserService{
    constructor(){
        this.UserRepository = new UserRepository()
    }

    async create(data){
        try{
          const user= await this.UserRepository.create(data);
          return user;
        }catch(Err){
            console.log(`Error in repository layer`)
            throw {Err}
        }
    }
}

module.exports=UserService