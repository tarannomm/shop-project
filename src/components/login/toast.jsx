import { toast ,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const notify=(type)=>{
    if(type==="success") toast.success("sign in successfully")
    else{
        toast.error("invalid data!!!")
    }
}