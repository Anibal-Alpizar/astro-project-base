import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function ButtonSubscribe() {
    const [subscribe, setSubscribe] = useState(false)
    return (
        <>
            <button onClick={() => {
                toast.success("Felicidades, ya estas suscrito")
            }}>
                {
                    subscribe ? "Ya estas suscrito" : "Suscribete"
                }
            </button>
            <ToastContainer />
        </>

    )
}

export default ButtonSubscribe