import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMe as updateMeApi } from "../../services/userApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";

function useUpdateProfile() {
  const client = useQueryClient();
  const dispatch = useDispatch();
  const {
    mutate: updateMe,
    isUpdating,
    isError,
    error,
  } = useMutation({
    mutationFn: updateMeApi,
    onSuccess: (data) => {
      toast.success("Profile updated successfully");
      dispatch(login(data));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateMe, isUpdating, isError, error };
}

export default useUpdateProfile;
