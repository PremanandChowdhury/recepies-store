import styled from 'styled-components'
import SingleRecipe from './Recipe'

const RecipeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`

const RecipeList = () => {
  return (
    <RecipeListContainer>
      <SingleRecipe />
      <SingleRecipe />
      <SingleRecipe />
      <SingleRecipe />
      <SingleRecipe />
    </RecipeListContainer>
  )
}

export default RecipeList
