import AddRecipeButton from "./components/AddRecipeButton"
import Header from "./components/Header"
import RecipeList from "./components/RecipeList"


function App() {
  const recipes = ["Milanesas", "Pasta", "Tarta de verduras"]


  return (
    <>
      <Header />
      <AddRecipeButton />
      <RecipeList recipes={recipes} />
    </>
  )
}

export default App
