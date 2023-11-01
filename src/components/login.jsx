import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Login = () => {
  return (
    
    <LoginContainer>
      <LoginForm>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
