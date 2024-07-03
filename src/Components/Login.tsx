import {
  FormSubTitle,
  InputWrapper,
  LoginForm,
  LoginWrapper,
  SubmitButton,
} from "./LoginStyles";
import { EmailIcon, LockIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <LoginWrapper>
      <LoginForm>
        <FormSubTitle align="center">
          Welcome to BotForge! Enter your details to login.
        </FormSubTitle>
        <InputWrapper>
          <EmailIcon />
          <input type="text" name="email" placeholder="Email Address" />
        </InputWrapper>
        <InputWrapper>
          <LockIcon />
          <input type="password" name="password" placeholder="Password" />
        </InputWrapper>
        <SubmitButton isLogin={true} marginTop="30px">
          Login
        </SubmitButton>
        <SubmitButton
          isLogin={false}
          marginTop="15px"
          onClick={() => navigate("/register")}
        >
          Create account
        </SubmitButton>
      </LoginForm>
    </LoginWrapper>
  );
}
