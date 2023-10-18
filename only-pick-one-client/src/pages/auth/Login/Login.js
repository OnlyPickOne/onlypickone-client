import styled from 'styled-components'
import logo from '../../logo.png'
import logout_img from '../../logout.png'
import background_img from '../../background.png'
import { TextField } from '../../../components/Textfield/TextField'
import { BasicButton } from '../../../components/Button/BasicButton'
import { useCallback,useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  
  const [values, setValues] = useState({
    id: '',
    password: '',
  })
  
  const handleChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values, [name]: value})
  }, [values])

  const navigate=useNavigate();

  const handleClick = useCallback(() => {
    navigate('/')
  }, [navigate])

  const handleSignup = useCallback(() => {
    navigate('/auth/signup')
  }, [navigate])

  return (

    <Container>
      <NavigationBar>
        <LogoBox src={logo} alt='' onClick={handleClick()}></LogoBox>
        <Menu>이상형 월드컵</Menu>
        <Menu>이상형 월드컵 만들기</Menu>
        <AccountBttn src={logout_img} alt=''></AccountBttn>
      </NavigationBar>
      <InputContainer>
        <BackgroundImg src={background_img}></BackgroundImg>
        <TextField label='이메일' placeholder='이메일' value={values.id} name='id' onChange={handleChange}></TextField>
        <TextField label='비밀번호' placeholder='비밀번호' value={values.password} name='password' type='password' onChange={handleChange}></TextField>
        <BasicButton title='로그인' width={400}></BasicButton>
        <BasicButton title='계정 생성' width ={400} onClick={handleSignup}></BasicButton>
      </InputContainer>
    </Container>

  )
  
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

const LogoBox = styled.img`
  width:100px;
  height: 100px;
  cursor: pointer;
`

const Menu = styled.div`
  background-color: #FFF5E0;
  align-items: center;
  cursor: pointer;
`

const BackgroundImg= styled.img`
  width: 300px;
  heigth: 300px;
  margin-bottom: 20px;
`
const AccountBttn = styled.img`
  width:100px;
  height: 100px;
  cursor: pointer;
`

const InputContainer = styled.div`
  width: 1440px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`