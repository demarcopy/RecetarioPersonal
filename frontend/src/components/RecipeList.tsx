type RecipeListProps = {
  recipes: string[]
}

function RecipeList({ recipes }: RecipeListProps) {
  if (recipes.length === 0) {
    return <p>No hay recetas todavía</p>
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe}>{recipe}</li>
      ))}
    </ul>
  )
}

export default RecipeList
