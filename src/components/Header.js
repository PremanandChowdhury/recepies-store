import styled from 'styled-components'

const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`

const LogoComponent = styled.div`
  display: flex;
  align-items: center;
`
const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`
const SearchComponent = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`

const HeaderComponent = () => {
  return (
    <Header>
      <LogoComponent>
        <AppIcon src='/hamburger.svg' alt='Logo' />
        Recipe Store
      </LogoComponent>
      <SearchComponent>
        <SearchIcon src='/search-icon.svg' alt='Search Icon' />
        <SearchInput placeholder='Search Recipe' />
      </SearchComponent>
    </Header>
  )
}

export default HeaderComponent
