import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FormSubTitle,
  InputWrapper,
  LoginForm,
  LoginWrapper,
  SubmitButton,
  FormTitle,
  ErrorMessage,
  Spinner,
} from "./LoginStyles";
import { EmailIcon, LockIcon } from "./Icons";

import { useRegister } from "../hooks/auth";

import { saveCredentials } from "../utils/auth";

export default function Register() {
  const navigate = useNavigate();
  const mutation = useRegister();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onRegister = async () => {
    if (!email || !password || !confirmPass) return;

    if (email && password !== confirmPass) {
      setError("Please ensure both password fields have same value");
      return;
    }

    const params = { email, password };

    const { error, data } = await mutation.mutateAsync(params);
    console.log("res", error, data);
    if (error) {
      setError(error.message);
      return;
    }

    if (data && data.access_token) {
      saveCredentials(data);
      navigate("/main");
    }
  };

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
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <LockIcon />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <LockIcon />
          <input
            type="password"
            name="conf_password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton isLogin={true} marginTop="30px" onClick={onRegister}>
          {mutation.isPending ? <Spinner /> : <>Create account</>}
        </SubmitButton>
      </LoginForm>
    </LoginWrapper>
  );
}
