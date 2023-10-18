export const emailValidation = (value) => {
  const regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!regex.test(value)) {
      return '올바른 이메일을 입력해주세요'
  }
  return false
}

export const checkPassValidation = (password, checkPass) => {
  if (password !== checkPass) {
      return '비밀번호가 일치하지 않습니다'
  }
}