const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");
const { JWT_KEY } = require("../config/serverConfig");
var jwt = require("jsonwebtoken");
class UserService {
  constructor() {
    this.UserRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.UserRepository.create(data);
      console.log(user)
      return user;
    } catch (Err) {
      console.log(`Error in service layer`);
      throw { Err };
    }
  }

  async signIn(email, plainPassword) {
    try {
      // ->fetch the user
      const user = await this.UserRepository.getByEmail(email);
      const passwordMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("password does not match!!!");
        throw { error: "incorrect password" };
      }
      const newJwt = this.createToken({ email: user.email, id: user.id });
      console.log(newJwt)
      return newJwt;
    } catch (Err) {
      console.log(`Error in service layer sign in`);
      throw { Err };
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return result;
    } catch (Err) {
      console.log(`somethign went wrong in the token creation `);
      console.log(Err);
      throw new Error('Error while creating the token')
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (Err) {
      console.log(`somethign went wrong in the token creation `);
      console.log(Err);
      throw new Error('Error in verfying the token')
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (Err) {
      throw { Err };
    }
  }
}

module.exports = UserService;
