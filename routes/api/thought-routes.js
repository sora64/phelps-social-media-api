const router = require("express").Router();
const {
  getThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/thoughts").get(getThoughts).post(addThought);

router
  .route("/thoughts/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route("/thoughts/:thoughtId/reactions").post(addReaction);

router
  .route("/thoughts/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;
