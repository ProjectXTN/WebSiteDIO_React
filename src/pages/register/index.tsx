import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IFormRegister } from './types';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { api } from '../services/api';

import { Container, 
         LinkLogin, 
         LinkLoginSpan, 
         TextContainer, 
         TextTerms, 
         TitleLogin,
         Row,
         Wrapper,
         Column,
         DivTerms
    } from './styles';


    const schema = yup.object({
        email: yup.string().email('email não e valido').required('Campo obrigatorio'),
        password: yup.string().min(3, "No minimo 3 caracteres").required('No minimo 3 caracteres'),
      }).required();



const Register = () => {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormRegister>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);


    const onSubmit = async (FormData: IFormRegister) => {
        try {
            const { data } = await api.post(`users?name=${FormData.name}&email=${FormData.email}&senha=${FormData.password}`)
            if(data.length == 1){
                navigate('/login')
            }else {
                alert('Email ou senha invalido')
            }
        } catch {
            alert('Houve um erro');
        }
    };

    const handleClickLogin = () => {
        navigate('/login');
    }

  return (
    <>
        <Header />
            <Container>
                <Column>
                    <Row>
                        <TextContainer>
                            A plataforma para voce aprender com expoerts,dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                        </TextContainer>
                    </Row>
                </Column>
                <Column>
                    <Wrapper>
                        <TextContainer>
                            Comece agora gratis
                        </TextContainer>
                        <TitleLogin> Crie sua conta e make the change...</TitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" control={control} errorMessage={errors?.name?.message} placeholder="Nome completo" leftIcon={<MdPerson />}/>
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />}/>
                            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Password" type="password"  leftIcon={<MdLock />}/>
                            <Button title='Criar minha conta' variant='secondary' type='submit'></Button>
                        </form>
                        <DivTerms>
                            <TextTerms> Ao clicar em "criar minha conta grátis", declaro que aceito as Politicas de Privacidade e os Termos de Uso da DIO.</TextTerms>
                            <LinkLogin>Ja tenho conta.<LinkLoginSpan onClick={handleClickLogin}> Fazer Login</LinkLoginSpan></LinkLogin>
                        </DivTerms>
                    </Wrapper>
                </Column>
            </Container>
    </>
  )
}


export { Register };