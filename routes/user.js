let express = require("express");
let router = express.Router();
const user_controller = require("../controllers/userController");

router.get("/", user_controller.getAll);

router.get("/:id", user_controller.get);

module.exports = router;
