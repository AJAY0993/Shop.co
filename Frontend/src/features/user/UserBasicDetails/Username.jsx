import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Username = forwardRef(({ username }, ref) => {
  return (
    <div className="grow-1 w-full">
      <label className="text-base font-normal text-stone-400" htmlFor="">
        Username
      </label>
      <input
        className=" w-full border-b-2 border-stone-400 px-0 text-left text-lg focus:border-stone-800 focus:outline-0 "
        defaultValue={username}
        name="username"
        ref={ref}
      />
    </div>
  );
});

export default Username;
