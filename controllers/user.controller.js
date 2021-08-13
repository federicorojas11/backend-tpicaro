const userService = require("../services/UserService");
const error = require("../common/error");
const exceptions = require("../common/exceptions");
const UserModel = require("../models/userModel");

const getAll = async (req, res) => {
  const query = req.query;
  console.log("INIT GET USERs");
  const users = await userService.getAll(query);
  console.log("response controller " + JSON.stringify(users));
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  console.log(req.params);
  const params = req.params;
  const userId = params.id;
  const user = await userService.getById(userId);
  console.log("response controller " + JSON.stringify(user));
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const data = req.body;
  console.log("INIT CREATE USER  data:" + JSON.stringify(data));
  if (
    !data.firstName ||
    !data.lastName ||
    !data.userName ||
    !data.password ||
    !data.city_id ||
    !data.country_id
  ) {
    console.log(
      "empty value found in CREATE USER  data object:" + JSON.stringify(data)
    );
    throw new error.AppError(exceptions.exceptionType.badRequest);
  }

  // const newUser = await userService.verifyUniqueUser(data);
  console.log("datos enviados:" + data.stringify);
  await userService.createUser(data).then((x) => {
    console.log(JSON.stringify(x));
    return res.status(201).json(x);
  });
};

const login = async (req, res) => {
  const data = req.body;
  console.log("login - data:" + JSON.stringify(data));
  const userInfo = await userService.login(data);

  if (!data.userName || !data.password) {
    console.log("no name in  CREATE USER  data:" + JSON.stringify(data));
    throw new error.AppError(exceptions.exceptionType.badRequest);
  }
  res.json(userInfo);
};
module.exports = {
  createUser,
  getAll,
  getById,
  login,
};
