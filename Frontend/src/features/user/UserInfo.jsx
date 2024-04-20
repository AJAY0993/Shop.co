import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaPencil, FaX } from "react-icons/fa6";
import { getIsAuthenticated, getLoggedInUser } from "./userSlice";
import { Navigate } from "react-router-dom";
import UserProfilepic from "./UserProfilepic";
import Username from "./Username";
import UserEmail from "./UserEmail";
import Button from "../../ui/Button";
import UserAddress from "./UserAddress";
import UserOrders from "./UserOrders";
import useUpdateProfile from "./useUpdateProfile";
import Spinner from "../../ui/Spinner";

function UserInfo() {
  const user = useSelector(getLoggedInUser);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [editingMode, setEditingMode] = useState(false);
  const { updateMe, isUpdating } = useUpdateProfile();
  const profilepicRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const handleEditingMode = () => setEditingMode((s) => !s);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.username = usernameRef.current.value;
    data.email = emailRef.current.value;
    data.address = addressRef.current.value;
    if (profilepicRef.current.files.length > 0) {
      data.profilePic = profilepicRef.current.files[0];
    }
    updateMe(data);
  };
  if (isUpdating) return <Spinner />;
  return (
    <>
      <main className="relative flex flex-col items-center justify-center p-2">
        {!isAuthenticated && <Navigate to="/login" replace />}
        <Button className="absolute right-4 top-4 aspect-square w-8 rounded-full">
          {!editingMode ? (
            <FaPencil onClick={handleEditingMode} />
          ) : (
            <FaX onClick={handleEditingMode} />
          )}
        </Button>
        <form
          className=" flex flex-col items-center gap-4"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <UserProfilepic
            editingMode={editingMode}
            profilePic={user.profilePic}
            ref={profilepicRef}
          />
          <Username
            editingMode={editingMode}
            username={user.username}
            ref={usernameRef}
          />
          <UserEmail
            editingMode={editingMode}
            email={user.email}
            ref={emailRef}
          />
          <UserAddress
            editingMode={editingMode}
            address={user.address}
            ref={addressRef}
          />
          {editingMode && (
            <Button type="primary" size="sm">
              Save
            </Button>
          )}
        </form>
        <UserOrders />
      </main>
    </>
  );
}

export default UserInfo;
