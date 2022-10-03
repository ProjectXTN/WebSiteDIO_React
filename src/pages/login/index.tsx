import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


import { Column, 
        Container, 
        CriarText, 
        EsqueciText, 
        Row, 
        SubLogin, 
        Title, 
        TitleLogin,
        Wrapper,
        } from './styles';

import { api } from '../../pages/services/api';
import { IFormData } from './types';

        const schema = yup.object({
            email: yup.string().email('email não e valido').required('Campo obrigatorio'),
            password: yup.string().min(3, "No minimo 3 caracteres").required('No minimo 3 caracteres'),
          }).required();

const Login = () => {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const handleClickSingUp = () => {
        navigate('/register');
    }

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length == 1){
                navigate('/feed')
            }else {
                alert('Email ou senha invalido')
            }
        } catch {
            alert('Houve um erro');
        }
    };

    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
                    </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin> Faça seu cadastro</TitleLogin>
                    <SubLogin> Faça seu login e make the change...</SubLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Input  name="email" control={control}  errorMessage={errors?.email?.message} placeholder='email' leftIcon={<MdEmail />}/> 
                      <Input  name="password" control={control} errorMessage={errors?.password?.message}  placeholder='password' type="password" leftIcon={<MdLock />}/>
                      <Button title='Entrar' variant="secondary" type="submit"></Button>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={handleClickSingUp}>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    );
}

export { Login };