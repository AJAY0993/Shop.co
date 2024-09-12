import { useRef } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated, getLoggedInUser } from "../userSlice";
import { Navigate } from "react-router-dom";
import useUpdateProfile from "../useUpdateProfile";
import UserProfilepic from "./UserProfilepic";
import Username from "./Username";
import UserAddress from "./UserAddress";
import UserMobile from "./UserMobile";
import UserEmail from "./UserEmail";
import Button from "../../../ui/Button";
import Spinner from "../../../ui/Spinner";

function UserBasicDetails() {
  const user = useSelector(getLoggedInUser);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const { updateMe, isUpdating } = useUpdateProfile();
  const profilepicRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const mobileRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.username = usernameRef.current.value;
    data.email = emailRef.current.value;
    data.address = addressRef.current.value;
    data.mobileNumber = mobileRef.current.value;
    if (profilepicRef.current.files.length > 0) {
      data.profilePic = profilepicRef.current.files[0];
    }
    updateMe(data);
  };
  if (isUpdating) return <Spinner />;
  return (
    <>
      <div className="relative p-2">
        {!isAuthenticated && <Navigate to="/login" replace />}
        <form
          className="m-auto flex w-full flex-col items-start gap-8  sm:w-[30rem]"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <UserProfilepic profilePic={user.profilePic} ref={profilepicRef} />
          <Username username={user.username} ref={usernameRef} />
          <UserEmail email={user.email} ref={emailRef} />
          <UserMobile mobileNumber={user.mobileNumber} ref={mobileRef} />
          <UserAddress address={user.address} ref={addressRef} />

          <Button type="primary" size="sm" disabled={isUpdating}>
            {!isUpdating ? "Save" : <Spinner inButton={true} />}
          </Button>
        </form>
      </div>
    </>
  );
}

export default UserBasicDetails;
