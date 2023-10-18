import styled from "styled-components";

export const BasicButton = ({title, onClick, width, disabled}) => {
    return (
        <Container disabled={disabled} width={width} onClick={onClick}>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`
    background-color: #141E46;
    width:  ${({width}) => width}px;
    height: 50px;
    display: flex;
    border-radius: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`

const Title = styled.div`
    color: #ffffff;
    font-size: 17px;
    font-weight: bold;
`