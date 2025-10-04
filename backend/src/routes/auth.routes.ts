import { Router } from "express";
import { SignIn, SignUp } from "../controllers/auth.controller";
import {
  creatNewRecipe,
  findRecipesName,
} from "../controllers/recipe.controller";
import { authMiddleware } from "../middleware/auth.middleware";
const router = Router();

router.post("/register", SignUp);
router.post("/login", SignIn);

router.post("/create-recipe", creatNewRecipe, authMiddleware);
router.get("/recipes-by-name", findRecipesName, authMiddleware);
export default router;
