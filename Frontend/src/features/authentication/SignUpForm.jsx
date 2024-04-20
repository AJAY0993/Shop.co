import { useRef } from "react";
import AuthForm from "./AuthForm";
import useSignUp from "./useSignUp";

function SignUpForm() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmmPasswordRef = useRef();
  const { signUp, isPending } = useSignUp();
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmmPasswordRef.current.value,
    });
  };

  return (
    <AuthForm>
      <AuthForm.Container>
        <AuthForm.Form
          title="create your account"
          subtitle="the next gen market place Shop.co"
          onSubmit={handleSubmit}
          btnText="sign up"
          submitting={isPending}
        >
          <AuthForm.Row
            label="username"
            placeholder="username"
            name="username"
            ref={usernameRef}
          />
          <AuthForm.Row
            label="email"
            placeholder="email"
            name="email"
            ref={emailRef}
          />
          <AuthForm.Row
            label="password"
            placeholder="password"
            name="password"
            ref={passwordRef}
          />
          <AuthForm.Row
            label="confirm password"
            placeholder="confirm-password"
            name="confirm-password"
            ref={confirmmPasswordRef}
          />
        </AuthForm.Form>

        <AuthForm.Footer
          text="already have an account"
          linkText="Log in"
          to="/login"
        />
      </AuthForm.Container>
    </AuthForm>
  );
}

export default SignUpForm;
