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

router.route("/").get(getUsers).post(addUser);

router
  .route("/:userId/")
  .get(getUserById)
  .put(updateUser)
  .delete(removeUser);

router
  .route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
