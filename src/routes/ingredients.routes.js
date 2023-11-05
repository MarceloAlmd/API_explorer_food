const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/uploads");
const IngredientsController = require("../controllers/ingredientsControllers");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const ingredientsRoutes = Router();
const upload = multer(uploadConfig.MULTER);
const ingredientsController = new IngredientsController();

ingredientsRoutes.patch(
  "/:id",
  upload.single("image_ingredient"),
  ensureAuthenticated,
  verifyUserAuthorization(["admin"]),
  ingredientsController.update
);

module.exports = ingredientsRoutes;
