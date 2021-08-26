import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'

import {
  Header,
  LogoComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput,
} from './components/headerComponent'

import {
  RecipeListContainer,
  RecipeContainer,
  ItemImage,
  RecipeName,
  IngredientsLabel,
  SeeMoreRecipeLabel,
} from './components/recipeComponent'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const RecipeComponent = (props) => {
  console.log(props)
  const { recipeObj } = props

  return (
    <RecipeContainer>
      <ItemImage src={recipeObj.image} alt='Paneer' />
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsLabel>Ingredients</IngredientsLabel>
      <SeeMoreRecipeLabel>See Complete Recipe</SeeMoreRecipeLabel>
    </RecipeContainer>
  )
}

const API_ID = 'c1111d7b'
const API_KEY = 'f11f79726b1c17c42bb03ded26af7ce5'

const App = () => {
  const [timeOutId, setTimeOutId] = useState()
  const [recipeList, setRecipeList] = useState([])

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`
    )
    setRecipeList(response.data.hits)
  }

  const handleInputChange = (e) => {
    clearTimeout(timeOutId)
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 500)
    setTimeOutId(timeout)
  }

  return (
    <Container>
      <Header>
        <LogoComponent>
          <AppIcon src='/hamburger.svg' alt='Logo' />
          Recipe Store
        </LogoComponent>
        <SearchComponent>
          <SearchIcon src='/search-icon.svg' alt='Search Icon' />
          <SearchInput
            placeholder='Search Recipe'
            onChange={handleInputChange}
          />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length &&
          recipeList.map((recipeObj, index) => (
            <RecipeComponent recipeObj={recipeObj.recipe} key={index} />
          ))}
      </RecipeListContainer>
    </Container>
  )
}

export default App
