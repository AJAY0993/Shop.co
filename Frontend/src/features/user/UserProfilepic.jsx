import { forwardRef } from "react";
import { FaPencil } from "react-icons/fa6";

// eslint-disable-next-line react/display-name
const UserProfilepic = forwardRef(({ editingMode, profilePic }, ref) => {
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full">
      {editingMode && (
        <>
          <label
            className="absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-center bg-stone-400 bg-opacity-50 "
            htmlFor="profilePic"
          >
            <FaPencil className="hover:block" />
          </label>
          <input
            className="absolute h-0 w-0"
            id="profilePic"
            type="file"
            name="profilePic"
            ref={ref}
          />
        </>
      )}
      <img src={profilePic} alt="user avatar" />
    </div>
  );
});
export default UserProfilepic;
