import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import AuthCheck from "./features/authentication/AuthCheck";
import ProtectRoute from "./ui/ProtectRoute";
import UserOrders from "./features/user/UserOrders";
import FullPageLoader from "./ui/FullPageLoader";

const UserBasicDetails = lazy(
  () => import("./features/user/UserBasicDetails/UserBasicDetails"),
);

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Shop = lazy(() => import("./pages/Shop"));
const WishList = lazy(() => import("./pages/WishList"));
const User = lazy(() => import("./pages/User"));
const Order = lazy(() => import("./pages/Order"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Suspense fallback={<FullPageLoader />}>
          <AuthCheck>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<Product />} />
                <Route
                  path="/wishlist"
                  element={
                    <ProtectRoute>
                      <WishList />
                    </ProtectRoute>
                  }
                />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/me"
                  element={
                    <ProtectRoute>
                      <User />
                    </ProtectRoute>
                  }
                >
                  <Route
                    index
                    element={<Navigate to="basicDetails" replace />}
                  />
                  <Route path="basicDetails" element={<UserBasicDetails />} />
                  <Route path="myOrders" element={<UserOrders />} />
                </Route>
                <Route
                  path="/order/:id"
                  element={
                    <ProtectRoute>
                      <Order />
                    </ProtectRoute>
                  }
                />
                <Route path="*" element={<h1>Page not found</h1>} />
              </Routes>
            </BrowserRouter>
          </AuthCheck>
        </Suspense>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </>
  );
}

export default App;
