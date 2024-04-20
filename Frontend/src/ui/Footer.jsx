import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Icon from "./Icon";
import P from "./P";
import Row from "./Row";
import Title from "./Title";

function Footer() {
  return (
    <footer className=" bg-stone-200 p-4">
      <Row classes="justify-between max-w-[66rem] m-auto gap-4 border-b-2 border-stone-400">
        <div className="max-w-64">
          <Title>
            <span className="text-left uppercase">shop.co</span>
          </Title>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            maiores nulla dolorum suscipit aliquid, voluptates molestias?
            Doloremque alias porro sunt magnam m?
          </P>
          <Row classes="gap-2 pb-4">
            <Icon>
              <FaGithub className="" />
            </Icon>
            <Icon>
              <FaLinkedin />
            </Icon>
            <Icon>
              <FaTwitter />
            </Icon>
          </Row>
        </div>
        <Ul heading="company">
          <Li>about</Li>
          <Li>features</Li>
          <Li>works</Li>
          <Li>career</Li>
        </Ul>
        <Ul heading="help">
          <Li>customer support</Li>
          <Li>delivery details</Li>
          <Li>terms & conditions</Li>
          <Li>privacy</Li>
        </Ul>
        <Ul heading="FAQ">
          <Li>customer support</Li>
          <Li>delivery details</Li>
          <Li>terms & conditions</Li>
          <Li>privacy</Li>
        </Ul>
        <Ul heading="RESOURCES">
          <Li>customer support</Li>
          <Li>delivery details</Li>
          <Li>terms & conditions</Li>
          <Li>privacy</Li>
        </Ul>
      </Row>
    </footer>
  );
}

function Li({ children }) {
  return (
    <li className="text-sm font-normal capitalize  text-stone-600">
      {children}
    </li>
  );
}

function Ul({ children, heading }) {
  return (
    <ul className="my-4 list-none ">
      <li className="mb-4">
        <h3 className="font-semibold uppercase tracking-wider">{heading}</h3>
      </li>
      {children}
    </ul>
  );
}
export default Footer;
