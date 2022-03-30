// @desc Register a new user
// @route POST /api/users
// @access PUBLIC
const registerUser = (req, res) => {
  res.status(201).json({ message: "Test user created" });
};

module.exports = { registerUser };
