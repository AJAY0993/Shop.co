import { useRef } from "react";
import AuthForm from "./AuthForm";
import useLogin from "./useLogin";
import toast from "react-hot-toast";

const guestCredentials = {
  email: "test@email.com",
  password: "loremipsum",
};
function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, isPending } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      toast.error("Please provide required field");
      return;
    }
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <AuthForm>
      <AuthForm.Container>
        <AuthForm.Form
          title="login"
          subtitle="Welcome back to Shop.co"
          onSubmit={handleSubmit}
          btnText="login"
          submitting={isPending}
        >
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
            type="password"
            ref={passwordRef}
          />
        </AuthForm.Form>

        <AuthForm.Footer
          text="dont't have an account"
          linkText="sign up"
          to="/signup"
        />
        <p className="my-2">
          Continue with{" "}
          <button
            className="bg-transparent font-bold"
            onClick={() => {
              login(guestCredentials);
            }}
          >
            guest credentials
          </button>
        </p>
      </AuthForm.Container>
    </AuthForm>
  );
}

export default LoginForm;
