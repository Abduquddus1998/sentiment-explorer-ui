import styled from "styled-components";

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
  isLogin: boolean;
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
`;
