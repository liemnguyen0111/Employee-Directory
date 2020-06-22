const router = require("express").Router();

router.use("/api", require("./departmentRoutes"));
router.use("/api", require("./roleRoutes"));
router.use("/api", require("./employeeRoutes"));

module.exports = router;