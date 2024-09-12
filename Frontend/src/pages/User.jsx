import Header from "../ui/Header";
import Container from "../ui/Container";
import { NavLink, Outlet } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import useLogout from "../features/authentication/useLogout";

const baseStyle =
  "rounded-md bg-stone-200 p-2 text-sm font-medium capitalize text-neutral-800";
const active =
  "rounded-md bg-neutral-800 p-2 text-sm font-medium capitalize text-neutral-100";
const logoutBtn =
  "rounded-md bg-red-500 p-2 text-sm font-medium capitalize text-neutral-100";

function User() {
  return (
    <>
      <Header />
      <Container className="px-2">
        <h3 className="m-1 my-1 text-lg font-medium">Account & Settings</h3>
        <UserNav />
        <Outlet />
      </Container>
    </>
  );
}

function UserNav() {
  const { logout } = useLogout();
  return (
    <nav>
      <ul className="my-2 flex list-none items-center gap-4">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? active : baseStyle)}
            to={"basicDetails"}
          >
            My details
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? active : baseStyle)}
            to={"myOrders"}
          >
            My Orders
          </NavLink>
        </li>
        <li className="ml-auto">
          <button className={logoutBtn} onClick={logout}>
            Logout <IoLogOut className="inline-block" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
{
  /* <>
<Header />
<Container className="px-2">
  <UserInfo />
</Container>
<NewsletterSubscriptionForm />
<Footer />
</> */
}
export default User;
