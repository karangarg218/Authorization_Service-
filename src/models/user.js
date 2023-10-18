"use strict";
const { SALT } = require("../config/serverConfig");
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const {} = require("../config/serverConfig");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role, {
        through: "User_Roles",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 300],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(async (user) => {
    try {
      const encryptedPassword = await bcrypt.hash(user.password, SALT);

      user.password = encryptedPassword;
    } catch (Err) {
      throw new Error(`Error in hashing ${Err}`);
    }
  });
  return User;
};
