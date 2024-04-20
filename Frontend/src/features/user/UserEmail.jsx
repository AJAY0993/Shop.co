import { forwardRef } from "react";
import Subtitle from "../../ui/Subtitle";

// eslint-disable-next-line react/display-name
const UserEmail= forwardRef(({ editingMode, email },ref) =>{
  return (
    <div className="flex flex-col items-center">
      {!editingMode && <Subtitle>{email}</Subtitle>}
      {editingMode && (
        <label className="text-xl font-medium ">
          Email:
          <input
            className=" text-center  hover:border-0 hover:outline-0  focus:outline-2"
            defaultValue={email}
            name="email"
            ref={ref}
          />
        </label>
      )}
    </div>
  );
})

export default UserEmail;
