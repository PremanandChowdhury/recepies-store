import Header from './components/Header'
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
    </Container>
  )
}

export default App
