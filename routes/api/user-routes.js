const router = require("express").Router();
const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/users").get(getUsers).post(addUser);

router
  .route("/users/:userId/:")
  .get(getUserById)
  .put(updateUser)
  .delete(removeUser);

router
  .route("users/:userId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
