import styled from 'styled-components'
import { device } from './deviceSizes'

export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`

export const LogoComponent = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    font-size: 15px;
    margin: 0;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    margin: 0;
  }
`
export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;

  @media ${device.mobileS} {
    width: 30px;
    height: 30px;
    margin: 8px;
  }
`
export const SearchComponent = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;

  @media ${device.mobileS} {
    padding: 8px;
    width: 60%;
  }
`
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;

  @media ${device.mobileS} {
    width: 25px;
    height: 25px;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;

  @media ${device.mobileS} {
    margin-left: 10px;
    font-size: 14px;
  }
  @media ${device.mobileL} {
    margin-left: 10px;
    font-size: 14px;
  }
`
