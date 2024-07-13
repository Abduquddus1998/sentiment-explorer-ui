import styled, { keyframes } from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.mainTextColor};
`;

export const LoginForm = styled.div`
  width: 450px;
`;

export const FormTitle = styled.div`
  font-size: 51px;
  font-weight: 600;
  line-height: 56px;
  text-align: left;
  margin-bottom: 20px;
`;

export const FormSubTitle = styled.div<{ align?: string }>`
  font-size: 22px;
  font-weight: 400;
  line-height: 35px;
  margin-bottom: 15px;
  text-align: ${(props) => props.align || "left"};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 46px;
  padding: 0 20px;
  gap: 12px;
  border-radius: 20px;
  margin-bottom: 15px;
  border: 1px solid ${(props) => props.theme.inputBorderColor};
  background-color: ${(props) => props.theme.inputBackgroundColor};

  input {
    width: 100%;
    height: 90%;
    background-color: inherit;
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    padding: 0;
    color: ${(props) => props.theme.inputTextColor};

    &::placeholder {
      font-size: 16px;
      color: ${(props) => props.theme.inputPlaceholderColor};
    }

    &:focus {
      outline: none;
    }
  }
`;

interface SubmitButtonProps {
  isLogin?: boolean;
  marginTop?: string;
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  height: 48px;
  padding: 0 50px;
  gap: 12px;
  border-radius: 20px;
  margin-top: ${(props) => props.marginTop};
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.isLogin ? props.theme.buttonBgColor : "#fff"};
  color: ${(props) =>
    props.isLogin ? props.theme.buttonTextColor : props.theme.inputTextColor};

  &:disabled {
    opacity: 0.6;
    cursor: unset;
  }
`;

export const ErrorMessage = styled.div<{ align?: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: ${(props) => props.align || "center"};
  color: #ea2853ff;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;
