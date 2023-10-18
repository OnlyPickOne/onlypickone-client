import styled from 'styled-components'
import login_img from '../login.png'
import logo from '../logo.png'

import { useCallback } from 'react';
import {useNavigate} from 'react-router-dom'


export const Home = () =>{

  const navigate = useNavigate();

  const handleLocation = useCallback(() => {
    navigate('/auth/login')
  }, [navigate])
  
  const createGame = useCallback(()=>{
    navigate('/games')
  },[navigate])
  return (
    <Container>
      <NavigationBar>
        <LogoBox src={logo}></LogoBox>
        <Menu>이상형 월드컵</Menu>
        <Menu onClick={createGame}>이상형 월드컵 만들기</Menu>
        <AccountBttn src={login_img} onClick={handleLocation}></AccountBttn>
      </NavigationBar>
      <FunctionBar>
        <Function>인기</Function>
        <Function>최신</Function>
        <Function>내 게임</Function>
        <SearchBar>검색</SearchBar>
      </FunctionBar>
      <GameContainer>
        <Game>
          <Thumbnail></Thumbnail>
          <GameTitle>제목</GameTitle>
          <GameDescription>설명</GameDescription>
        </Game>
        <Game>
          <Thumbnail></Thumbnail>
          <GameTitle>제목</GameTitle>
          <GameDescription>설명</GameDescription>
        </Game>
        <Game>
          <Thumbnail></Thumbnail>
          <GameTitle>제목</GameTitle>
          <GameDescription>설명</GameDescription>
        </Game>
        <Game>
          <Thumbnail></Thumbnail>
          <GameTitle>제목</GameTitle>
          <GameDescription>설명</GameDescription>
        </Game>
        <Game>
          <Thumbnail></Thumbnail>
          <GameTitle>제목</GameTitle>
          <GameDescription>설명</GameDescription>
        </Game>
        <Game>
          <Thumbnail></Thumbnail>
          <GameTitle>제목</GameTitle>
          <GameDescription>설명</GameDescription>
        </Game>
      </GameContainer>
    </Container>
    
  );
}


const Container = styled.div`
  background-color: #FFF5E0;
`

const NavigationBar = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const FunctionBar = styled.div`
  display: flex;
  justify-content: space-around;
`

const GameContainer= styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
  gap : 10px 20px;
`

const Game= styled.div`
  width: 100px;
  heigth: 100px;
`

const Thumbnail = styled.img`
  width:300px;
  heigth: 300px;
`

const GameTitle= styled.div`

`

const GameDescription= styled.div`

`

const LogoBox = styled.img`
  width: 100px;
  heigth: 100px;
`

const Menu = styled.div`
  background-color: #FFF5E0;
  align-items: center;
  cursor: pointer;
`

const AccountBttn = styled.img`
  width: 100px;
  heigth: 100px;
  cursor: pointer;
`
const Function = styled.div`
  display: flex;
  align-items: center;
`

const SearchBar = styled.div`
  width: 50px;
  height: 10px;
`