
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
    UserPicture,
    A
} from './styles'

import { useAuth } from '../hooks/useAuth';

const Header = () => {

    const { user, handleSingOut } = useAuth();

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
                {user.id ? (   
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
                {user.id ? (
                    <>
                        <UserPicture onClick={handleClickToHome} src="https://avatars.githubusercontent.com/u/77458437?v=4" />
                        <A href='#' onClick={handleSingOut}> Sair </A>
                    </>
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