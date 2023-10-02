const { Router } = require("express");
const router = Router();
const { getToDo, saveToDo, updateToDo, deletetodo  } = require("../controllers/TodoControllers");


router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deletetodo);
module.exports = router;