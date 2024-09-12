import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const UserProfilepic = forwardRef(({ profilePic }, ref) => {
  return (
    <div className="relative   overflow-hidden">
      <div className="flex items-center gap-4">
        <img
          className="aspect-square max-h-12 rounded-full"
          src={profilePic}
          alt="user avatar"
        />
        <label
          className="cursor-pointer rounded bg-stone-200 px-2 py-1 text-base font-medium capitalize text-stone-900 transition-all hover:bg-stone-300 active:bg-stone-400"
          htmlFor="profilePic"
        >
          change
        </label>
        <input
          className="absolute h-0 w-0"
          id="profilePic"
          type="file"
          name="profilePic"
          ref={ref}
        />
      </div>
    </div>
  );
});
export default UserProfilepic;
