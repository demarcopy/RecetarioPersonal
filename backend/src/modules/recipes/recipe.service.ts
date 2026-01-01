import { prisma } from '../../database/prisma';

export const findAll = () => {
  return prisma.recipe.findMany();
};

export const create = (data: any) => {
  return prisma.recipe.create({ data });
};
