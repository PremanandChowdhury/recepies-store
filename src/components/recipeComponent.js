import styled from 'styled-components'

export const RecipeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  gap: 20px;
  justify-content: space-evenly;
`

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 250px;
  box-shadow: 0 3px 10px 0 #aaa;
  border-radius: 4px;
`

export const ItemImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`

export const IngredientsLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  border: solid 1px #006800;
  color: #006800;
  margin-bottom: 12px;
  padding: 10px 15px;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
`

export const SeeMoreRecipeLabel = styled(IngredientsLabel)`
  color: #aa2500;
  border: solid 1px #aa2500;
`
