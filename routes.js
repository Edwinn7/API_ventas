const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get("/vendedor", cors(), controller.readvendedores);   // Read All
router.get("/vendedor/:idvend", cors(), controller.readvendedor);    // Read
router.delete("/vendedor/:idvend", cors(), controller.deletevendedor);  // Delete
router.put("/vendedor/:idvend", cors(), controller.updatevendedor);  // Update
router.post("/vendedor", cors(), controller.createvendedor);  // Create

router.get("/venta", cors(), controller.readventas);  // Read All
router.get("/venta/:idvend", cors(), controller.readventa);   // Read
router.delete("/venta/:idvend", cors(), controller.deleteventa); // Delete
router.put("/venta/:idvend", cors(), controller.updateventa); // Update
router.post("/venta", cors(), controller.createventa); // Create


module.exports = router;
