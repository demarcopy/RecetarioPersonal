import { Request, Response } from 'express';
import * as recipeService from './recipe.service';

export const getRecipes = async (_: Request, res: Response) => {
  const recipes = await recipeService.findAll();
  res.json(recipes);
};

export const createRecipe = async (req: Request, res: Response) => {
  const recipe = await recipeService.create(req.body);
  res.status(201).json(recipe);
};
