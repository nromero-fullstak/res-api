const express = require("express");

 const router = express.Router();

//crear usuarios//
router.post("/users", (req, res) => {
    res.send("create user");
});



 module.exports = router;
 //comentary//