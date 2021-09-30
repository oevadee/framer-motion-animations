import React from 'react';
import ZipSquadLogo from 'assets/zip-squad-logo.svg';
import { Input } from 'components/input';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, ButtonVariants } from 'components/button';
import { Routes } from 'router/routes';
import { Link } from 'react-router-dom';

const SWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SLogoWrapper = styled.div`
    margin-bottom: 48px;
`;

const SForm = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const SButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SLoginButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.small};
    margin: 0;
`;

const SLink = styled(Link)`
    display: grid;
    place-items: center;
    transform: translateY(-1px);
`;

export const LoginView = () => {
    const { register, getValues, handleSubmit } = useForm();

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <SForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="username"
                    placeholder="Enter username"
                    register={register}
                    getValues={getValues}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    register={register}
                    getValues={getValues}
                />
                <SButtonsWrapper>
                    <SLoginButtonWrapper>
                        <SParagraph>Don't have an account?</SParagraph>
                        <SLink to={Routes.Register}>
                            <Button variant={ButtonVariants.Secondary}>Just register</Button>
                        </SLink>
                    </SLoginButtonWrapper>
                    <Button>Register</Button>
                </SButtonsWrapper>
            </SForm>
        </SWrapper>
    );
};
