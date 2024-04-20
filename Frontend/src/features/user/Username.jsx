import { forwardRef } from "react";
import Subtitle from "../../ui/Subtitle";

// eslint-disable-next-line react/display-name
const Username = forwardRef(({ editingMode, username }, ref) => {
  return (
    <div className="flex flex-col items-center">
      {!editingMode && <Subtitle>{username}</Subtitle>}
      {editingMode && (
        <label className="text-xl font-medium" htmlFor="">
          Username:
          <input
            className=" text-center hover:border-0 hover:outline-0 focus:outline-2"
            defaultValue={username}
            name="username"
            ref={ref}
          />
        </label>
      )}
    </div>
  );
});

export default Username;
