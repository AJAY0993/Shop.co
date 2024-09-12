import { createContext, forwardRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Subtitle from "../../ui/Subtitle";
import Title from "../../ui/Title";

const AuthFormContext = createContext();

function AuthForm({ children }) {
  return (
    <AuthFormContext.Provider value={{}}>{children}</AuthFormContext.Provider>
  );
}

function Container({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-2">
      {children}
    </div>
  );
}

const Form = function Form({
  title,
  subtitle,
  onSubmit,
  btnText,
  children,
  submitting,
}) {
  return (
    <form
      className="w-[36rem] max-w-full rounded-2xl border-2 border-stone-400 p-6 sm:p-12 "
      onSubmit={onSubmit}
    >
      <Title>{title}</Title>
      <Subtitle className="text-center">{subtitle}</Subtitle>
      {children}
      <Button
        type="primary"
        size="sm"
        className="my-6 rounded-lg"
        loading={submitting}
        disabled={submitting}
      >
        {btnText}
      </Button>
    </form>
  );
};
// eslint-disable-next-line react/display-name
const Row = forwardRef(function (
  { label, placeholder, name, type = "text" },
  ref,
) {
  return (
    <div className="my-6 flex flex-col justify-start">
      <label className="my-1 font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        className="flex-grow rounded-lg border-[1px] border-stone-300 px-4 ring-4 ring-transparent transition-all focus:outline-0 focus:ring-stone-500 md:py-2"
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
        type={type}
      />
    </div>
  );
});

function Footer({ text, linkText, to }) {
  return (
    <footer>
      <span className="divider"></span>
      <h4>
        {text}
        <Link className=" ml-2 font-semibold uppercase" to={to}>
          {linkText}
        </Link>
      </h4>
    </footer>
  );
}

AuthForm.Container = Container;
AuthForm.Form = Form;
AuthForm.Row = Row;
AuthForm.Footer = Footer;

{
  /* <div className="my-6 flex flex-col justify-start">
<label className="font-medium">Email</label>
<input
  className="flex-grow border-[1px] border-stone-300 px-4 py-1"
  placeholder="test@email.com"
  ref={emailRef}
/>
</div>
<div className="my-6 flex flex-col justify-start">
<label className="font-medium">Password</label>
<input
  className="flex-grow rounded-sm border-[1px] border-stone-300 px-4 py-1"
  placeholder="testpassword"
  ref={passwordRef}
/>
</div> */
}

export default AuthForm;
