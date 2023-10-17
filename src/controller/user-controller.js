const UserService = require("../service/user-service");
const userService = new UserService();
const create = async (req, res) => {
  try {
    UserData = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await userService.create(UserData);
    return res.status(201).json({
      data: response,
      err: {},
      message: `sucessfully created the user`,
    });
  } catch (Err) {
    return res.status(500).json({
      data: {},
      err: Err,
      message: `cannot create the user`,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(req.body.email,req.body.password)
    console.log(`from resposne ${response}`)
    return res.status(201).json({
      data:response,
      success:true,
      err:{},
      message:'successfully signed in'
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `something went wrong`,
      err: error,
      success: false,
      data: {},
    });
  }
};
module.exports = {
  create,
  signIn
};
