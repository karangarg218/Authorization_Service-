const { User } = require("../models/index");
class UserRepository {
  async create(data) {
    try {
      const result = User.create(data);
      return result;
    } catch (err) {
      console.log(`Error in repository`);
      throw { err };
    }
  }
  async destroy(userId) {
    try {
      const result = User.destroy({
        where: {
          userId: id,
        },
      });
      return result;
    } catch (Err) {
      console.log(`Error in repository`);
      throw Err;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (Err) {
      console.log(`Error in repository`);
      throw { Err };
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (Err) {
      console.log(`Error in repository`);
      throw { Err };
    }
  }
}
module.exports = UserRepository;
