import { useState } from "react"
import { Spinner } from "./Spinner";
import axios from "axios";

export const Balance = () => {

    const [state, setState] = useState("Get Balance");
    const [spin, setSpin] = useState(false);

    function getBalance(){
        setSpin(true);
        axios.get("http://localhost:3000/api/v1/account/balance", {headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }}).then(response => {
            console.log(response)
            setState(""+ response.data.balance);
            setSpin(false);
        })
    }
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance: 
            <button  onClick={getBalance} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4">
                {spin?<Spinner/>:state}
            </button>
        </div>
    </div>
}