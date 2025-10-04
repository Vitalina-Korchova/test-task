import { prisma } from "../prisma/client";

export const createRecipe = async (
  name: string,
  time: string,
  servings: number,
  ingredients: string,
  instructions: string,
  category_id: number,
  user_id: number,
  stars: number
) => {
  const recipe = await prisma.recipe.create({
    data: {
      name,
      time: new Date(time),
      servings,
      ingredients,
      instructions,
      category_id,
      user_id,
      stars,
    },
  });
  return recipe;
};

export const findRecipesByName = async (name: string) => {
  const recipes = await prisma.recipe.findMany({
    where: {
      name: {
        equals: name,
      },
    },
  });
  return recipes;
};
