import { Request, Response } from "express";
import { createRecipe, findRecipesByName } from "../services/recipe.service";
interface RecipeBody {
  name: string;
  time: string;
  servings: number;
  ingredients: string;
  instructions: string;
  category_id: number;
  user_id: number;
  stars: number;
}

export const creatNewRecipe = async (
  req: Request<{}, {}, RecipeBody>,
  res: Response
) => {
  try {
    const {
      name,
      time,
      servings,
      ingredients,
      instructions,
      category_id,
      user_id,
      stars,
    } = req.body;
    const recipe = await createRecipe(
      name,
      time,
      servings,
      ingredients,
      instructions,
      category_id,
      user_id,
      stars
    );
    res.json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const findRecipesName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const recipes = await findRecipesByName(name);
    res.json(recipes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
