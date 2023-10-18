import styled from 'styled-components'
import logo from '../../logo.png'
import logout_img from '../../logout.png'
import background_img from '../../background.png'
import { TextField } from '../../../components/Textfield/TextField'
import { BasicButton } from '../../../components/Button/BasicButton'
import { checkPassValidation, emailValidation} from "../../../utils/checkValidation"
import { useCallback,useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  
  const [values, setValues] = useState({
    id: '',
    password: '',
    verifyEmail: '',
    verifyNumber: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    checkPass: '',
})
  

  const navigate=useNavigate();

  const handleClick = useCallback(() => {
    navigate('/')
  }, [navigate])

  const createAccount = useCallback(()=>{
    navigate('/')
  },[navigate])

  const handleLogin = useCallback(()=>{
    navigate('/auth/login')
  },[navigate]) 

  const verifyEmail = () => {
    console.log("이메일 인증")
  }
  const handleChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'email') {
        setErrors({...errors, email: emailValidation(value)})
    } else if (name === 'checkPass') {
        setErrors({...errors, checkPass: checkPassValidation(values.password, value)})
    }
    
    setValues({...values, [name]: value})
}, [errors, values])


  return (

    <Container>
      <NavigationBar>
        <LogoBox src={logo} alt='' onClick={handleClick}></LogoBox>
        <Menu onClick={handleClick}>이상형 월드컵</Menu>
        <Menu>이상형 월드컵 만들기</Menu>
        <AccountBttn src={logout_img} alt=''></AccountBttn>
      </NavigationBar>
      <InputContainer>
        <BackgroundImg src={background_img}></BackgroundImg>
        <VerifyContainer>
          <TextField label='이메일' placeholder='이메일' value={values.email} name='email' onChange={handleChange} error={errors.email}></TextField>
          <BasicButton title='인증' onClick={verifyEmail} width={100}></BasicButton>
        </VerifyContainer>
        <TextField label='인증번호' placeholder='인증번호' value={values.verifyNumber} name='verifyNumber' type='verifyNumber' onChange={handleChange}></TextField>
        <TextField label='비밀번호' placeholder='비밀번호' value={values.password} name='password' type='password' onChange={handleChange}></TextField>
        <TextField label='비밀번호 확인' placeholder='비밀번호 확인' value={values.checkpass} name='checkPass' type='password' onChange={handleChange} error={errors.checkPass}></TextField>
        <BasicButton title='계정 생성' onClick={createAccount} width={400}></BasicButton>
        <TextBox>계정이 있으신가요?</TextBox>
        <BasicButton title='로그인하기' onClick={handleLogin} width={400}></BasicButton>
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
  margin-bottom: 30px;
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

const VerifyContainer = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-contents: center;
  align-items: center;
  margin-bottom: 7px;
`

const TextBox = styled.div`
  width: 500px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  color: #AB9696;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`