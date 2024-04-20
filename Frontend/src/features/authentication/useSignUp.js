import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { login as loginReducer } from "../user/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: signUp,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success(`${data.username} welcome`);
      dispatch(loginReducer(data));
      navigate("/shop");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { signUp, isPending, isError, error };
}

export default useSignUp;
