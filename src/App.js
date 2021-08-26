import Header from './components/Header'
import RecipeList from './components/RecipeList'
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <Container>
      <Header />
      <RecipeList />
    </Container>
  )
}

export default App
