import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { logout as logoutReducer } from "../user/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: logout,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      dispatch(logoutReducer());
      navigate("/shop");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { logout, isPending, isError, error };
}

export default useLogout;
