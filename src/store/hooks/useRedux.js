import { useDispatch, useSelector } from "react-redux";
import { loginUser, getProfile, selectAuth, logout, selectUser } from "../slices/authSlice";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  const login = (credentials) => dispatch(loginUser(credentials)).unwrap();
  const getUserInfo = () => dispatch(getProfile()).unwrap();

  const logoutUser = () => dispatch(logout());
  return {
    ...auth,
    login,
    getUserInfo,   

    logout: logoutUser,
  };
};
