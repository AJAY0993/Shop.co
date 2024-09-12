import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const UserAddress = forwardRef(({ address }, ref) => {
  return (
    <div className="grow-1 w-full">
      <label
        className="text-base font-normal capitalize text-stone-400"
        htmlFor="address"
      >
        address
      </label>
      <input
        className=" w-full border-b-2 border-stone-400 px-0 text-left text-lg focus:border-stone-800 focus:outline-0 "
        defaultValue={address}
        name="address"
        ref={ref}
      />
    </div>
  );
});

export default UserAddress;
