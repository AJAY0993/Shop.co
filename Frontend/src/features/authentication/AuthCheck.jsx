import { useEffect } from "react";
import useGetAuthenticatedUser from "./useCheckIsAuthenticated";
import FullPageLoader from "../../ui/FullPageLoader";

function AuthCheck({ children }) {
  const { getIsAuthenticatedUser, isChecking } = useGetAuthenticatedUser();
  useEffect(() => {
    getIsAuthenticatedUser();
  }, [getIsAuthenticatedUser]);

  if (isChecking) return <FullPageLoader />;
  return children;
}

export default AuthCheck;
