import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
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
const Placeholder = styled.img`
  text-align: center;
  height: 120px;
  opacity: 0.5;
  margin: 200px 0;
`
const RecipeComponent = (props) => {
  const [show, setShow] = useState(false)
  const { recipeObj } = props

  return (
    <>
      <Dialog open={show}>
        <DialogTitle id='responsive-dialog-title'>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj, index) => (
                <tr key={index}>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsLabel
            autoFocus
            onClick={() => window.open(recipeObj.url)}
            color='primary'>
            See More
          </IngredientsLabel>
          <SeeMoreRecipeLabel
            onClick={() => setShow(false)}
            color='primary'
            autoFocus>
            Close
          </SeeMoreRecipeLabel>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <ItemImage src={recipeObj.image} alt='Recipe Thumbnail' />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsLabel onClick={() => setShow(true)}>
          Ingredients
        </IngredientsLabel>
        <SeeMoreRecipeLabel onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoreRecipeLabel>
      </RecipeContainer>
    </>
  )
}

const API_ID = process.env.REACT_APP_API_ID
const API_KEY = process.env.REACT_APP_API_KEY

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
        {recipeList.length ? (
          recipeList.map((recipeObj, index) => (
            <RecipeComponent recipeObj={recipeObj.recipe} key={index} />
          ))
        ) : (
          <Placeholder src='/hamburger.svg' />
        )}
      </RecipeListContainer>
    </Container>
  )
}

export default App
