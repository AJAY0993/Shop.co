import { useSelector } from "react-redux";
import { getLoggedInUser } from "../user/userSlice";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import ProtectRoute from "../../ui/ProtectRoute";
import { Navigate } from "react-router-dom";

function CheckoutForm({ onSubmit, isCheckingOut }) {
  const user = useSelector(getLoggedInUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  const inputClass =
    "block flex-grow  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-stone-500 focus:ring-stone-500  ";
  if (!user) return <Navigate replace to="/login" />;
  return (
    <ProtectRoute>
      <div className="min-w-72 rounded-lg bg-neutral-50 p-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Row classes="flex-col ">
            <label
              htmlFor="address"
              className="text-gray-90 mb-2 block text-sm font-medium"
            >
              Shipping Address
            </label>
            <textarea
              id="address"
              rows="4"
              className={inputClass}
              placeholder="Shipping Address"
              required
              defaultValue={user.address}
            ></textarea>
          </Row>
          <Row classes="flex-col">
            <label
              htmlFor="Mob no"
              className="text-gray-90 mb-2 block text-sm font-medium"
            >
              Mob no
            </label>

            <input type="tel" className={inputClass} required />
          </Row>
          <Button
            type="primary"
            size="sm"
            loading={isCheckingOut}
            disabled={isCheckingOut}
          >
            Confirm
          </Button>
        </form>
      </div>
    </ProtectRoute>
  );
}

export default CheckoutForm;
