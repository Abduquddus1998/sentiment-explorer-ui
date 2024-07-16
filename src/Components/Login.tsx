import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  ErrorMessage,
  FormSubTitle,
  InputWrapper,
  LoginForm,
  LoginWrapper,
  Spinner,
  SubmitButton,
} from "./LoginStyles";
import { EmailIcon, LockIcon } from "./Icons";

import { useLogin } from "../hooks/auth";

import { saveCredentials } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const mutation = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/main");
    }
  }, []);

  const onLogin = async () => {
    if (!email || !password) return;

    const params = { email, password };

    const { data, error } = await mutation.mutateAsync(params);

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
        <FormSubTitle align="center">
          Welcome to BotForge! Enter your details to login.
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton isLogin={true} marginTop="30px" onClick={onLogin}>
          {mutation.isPending ? <Spinner /> : <>Login</>}
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
