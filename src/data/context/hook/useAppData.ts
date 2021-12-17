import { useContext } from "react";
import AppContext from "../AppContext";
// import AuthContext from '../AuthContext';


const useAppData = () => useContext(AppContext)
// const useAuthData = () => useContext(AuthContext)

export default useAppData