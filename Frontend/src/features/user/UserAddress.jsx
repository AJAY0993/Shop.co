import { forwardRef } from "react";
import Subtitle from "../../ui/Subtitle";

// eslint-disable-next-line react/display-name
const UserAddress = forwardRef(({ editingMode, address }, ref) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {editingMode ? (
        <label className="text-xl font-medium" htmlFor="address">
          Address:
          <textarea
            id="address"
            className=" min-w-72 text-center hover:border-0 hover:outline-0 focus:outline-2"
            defaultValue={address}
            name="email"
            ref={ref}
          />
        </label>
      ) : (
        <Subtitle>
          <address>{address}</address>
        </Subtitle>
      )}
    </div>
  );
});

export default UserAddress;
