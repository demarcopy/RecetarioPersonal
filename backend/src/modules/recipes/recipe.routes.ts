import { Router } from 'express';
import { getRecipes, createRecipe } from './recipe.controller';

const router = Router();

router.get('/', getRecipes);
router.post('/', createRecipe);

export default router;
