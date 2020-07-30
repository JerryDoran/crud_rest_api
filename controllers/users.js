const { v4: uuidv4 } = require('uuid');

let users = [];

const createUser = (req, res) => {
  const user = {
    ...req.body,
    id: uuidv4(),
  };

  users.push(user);

  res.send(`User with name ${user.firstName} added to database`);
};

const getUsers = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  console.log(id);
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from database`);
};

const updateUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  const { firstName, lastName, age } = req.body;

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }

  res.send(`User with the id ${id} has been updated`);
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
