
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {

    return(<>
        <Header/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight> # RANKING TOP 5 DA SEMANA</TitleHighLight>
                <UserInfo  percentual={75} name="Pedro Henrique" image="https://avatars.githubusercontent.com/u/77458437?v=4"/>
                <UserInfo  percentual={60} name="Pedro Henrique" image="https://avatars.githubusercontent.com/u/77458437?v=4"/>
                <UserInfo  percentual={50} name="Pedro Henrique" image="https://avatars.githubusercontent.com/u/77458437?v=4"/>
                <UserInfo  percentual={45} name="Pedro Henrique" image="https://avatars.githubusercontent.com/u/77458437?v=4"/>
                <UserInfo  percentual={40} name="Pedro Henrique" image="https://avatars.githubusercontent.com/u/77458437?v=4"/>
            </Column>
        </Container>
        </>
    );
}

export { Feed };