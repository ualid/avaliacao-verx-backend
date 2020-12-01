const express = require("express");
const UserServiceClass = require("../../services/users");
const userService = new UserServiceClass();
let router = express.Router();

router.get("/", userService.index);
router.get("/:id", userService.show);
router.post("/", userService.store);
router.put("/:id", userService.update);
router.delete("/:id", userService.destroy);
router.patch("/:id", userService.update);

module.exports = router;
