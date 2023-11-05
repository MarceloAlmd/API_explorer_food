const { Router } = require("express");
const uploadsConfig = require("../configs/uploads");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const DishesControllers = require("../controllers/dishesControllers");
const dishesRoutes = Router();
const dishesControllers = new DishesControllers();

const uploads = multer(uploadsConfig.MULTER);

dishesRoutes.use(ensureAuthenticated);
dishesRoutes.post("/", uploads.single("image_dish"), dishesControllers.create);
dishesRoutes.delete("/:id", dishesControllers.delete);
dishesRoutes.get("/:id", dishesControllers.show);
dishesRoutes.get("/", dishesControllers.index);
dishesRoutes.put(
  "/:id",
  uploads.single("image_dish"),
  dishesControllers.update
);

module.exports = dishesRoutes;
