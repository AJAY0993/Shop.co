import { useMutation } from "@tanstack/react-query";
import { getAuthenticatedUser as getAuthenticatedUserApi } from "../../services/userApi";
import { login } from "../user/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";

function useGetAuthenticatedUser() {
  const [isChecking, setIsChecking] = useState(true);
  const dispatch = useDispatch();
  const { mutate: getIsAuthenticatedUser } = useMutation({
    mutationFn: getAuthenticatedUserApi,
    onSuccess: (data) => {
      dispatch(login(data));
      toast.success(`Welcome back  ${data.username}`);
    },
    onError: (err) => {
      console.log(err);
      toast.error("You are not logged in");
    },
    onSettled: () => setIsChecking(false),
  });

  return { getIsAuthenticatedUser, isChecking };
}

export default useGetAuthenticatedUser;
