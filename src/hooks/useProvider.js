import { useContext } from "react"
import { ContextData } from "../utilities/ContextProvider";

const useProvider = () => {
    return useContext(ContextData);
}

export default useProvider; 
