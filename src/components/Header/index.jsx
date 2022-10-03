import React from 'react';
import logo from '../../assets/logo.png'
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';


import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    Img,
    UserPicture
} from './styles'

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/login');
    };

    const handleClickToHome = () => {
        navigate('/');
    };

    const handleClickSingUp = () => {
        navigate('/register');
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <Img src={logo} alt="Logo da dio"  onClick={handleClickToHome}/>
                {autenticado ? (   
                    <>             
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/> 
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture onClick={handleClickToHome} src="https://avatars.githubusercontent.com/u/77458437?v=4" />
                ) : (
                    <>
                        <MenuRight onClick={handleClickToHome}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSingIn}/>
                        <Button title="Cadastrar" onClick={handleClickSingUp} />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header } ;