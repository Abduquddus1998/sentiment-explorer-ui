import {
  FormSubTitle,
  InputWrapper,
  LoginForm,
  LoginWrapper,
  SubmitButton,
  FormTitle,
} from "./LoginStyles";
import { EmailIcon, LockIcon } from "./Icons";

export default function Register() {
  return (
    <LoginWrapper>
      <LoginForm>
        <FormTitle>Create account</FormTitle>
        <FormSubTitle>
          Welcome to BotForge! Enter your details and start exploring sentiments
          of the sentences
        </FormSubTitle>
        <InputWrapper>
          <EmailIcon />
          <input type="text" name="email" placeholder="Email Address" />
        </InputWrapper>
        <InputWrapper>
          <LockIcon />
          <input type="password" name="password" placeholder="Password" />
        </InputWrapper>
        <InputWrapper>
          <LockIcon />
          <input
            type="password"
            name="conf_password"
            placeholder="Confirm Password"
          />
        </InputWrapper>
        <SubmitButton isLogin={true} marginTop="30px">
          Create account
        </SubmitButton>
      </LoginForm>
    </LoginWrapper>
  );
}
