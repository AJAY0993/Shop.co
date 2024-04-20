import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { login as loginReducer } from "../user/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success(`${data.username} welcome`);
      dispatch(loginReducer(data));
      navigate("/shop");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { login, isPending, isError, error };
}

export default useLogin;
