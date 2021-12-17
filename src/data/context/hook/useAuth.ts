import { useContext } from "react";
import AuthContext from "../AuthContext";
// import AuthContext from '../AuthContext';


const useAuth = () => useContext(AuthContext)
// const useAuthData = () => useContext(AuthContext)

export default useAuth