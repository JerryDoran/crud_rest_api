const express = require('express');
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser
} = require('../controllers/users');

const router = express.Router();

// all routes are starting with '/users'
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;
