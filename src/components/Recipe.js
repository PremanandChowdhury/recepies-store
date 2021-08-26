import styled from 'styled-components'

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 250px;
  box-shadow: 0 3px 10px 0 #aaa;
  border-radius: 6px;
`

const ItemImage = styled.img`
  height: 200px;
`

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`

const IngredientsLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  border: solid 1px green;
  color: green;
  margin-bottom: 12px;
  padding: 10px 15px;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
`

const SeeMoreRecipeLabel = styled(IngredientsLabel)`
  color: #eb3300;
  border: solid 1px #eb3300;
`

const SingleRecipe = () => {
  return (
    <RecipeContainer>
      <ItemImage src='/hamburger.svg' alt='Paneer' />
      <RecipeName>Aloo Tikki</RecipeName>
      <IngredientsLabel>Ingredients</IngredientsLabel>
      <SeeMoreRecipeLabel>See Complete Recipe</SeeMoreRecipeLabel>
    </RecipeContainer>
  )
}

export default SingleRecipe
