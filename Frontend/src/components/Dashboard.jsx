import { useEffect, useState } from "react"
import { Appbar } from "./AppBar"
import { Balance } from "./Balance"
import { Users } from "./Users"
import { Spinner } from "./Spinner"
import axios from "axios"
export function Dashboard(){
    const [state, setState]= useState(true);
    const [firstName, setfirstName]= useState("");
    useEffect(() => {
        setState(false)
        axios.get("http://localhost:3000/api/v1/user/userinfo", {headers:{Authorization: "Bearer " + localStorage.getItem("token") }})
            .then(response => {

                setfirstName(response.data.info.firstName);
                setState(true)
            })
    }, []);
    return <>{state ? <div><Appbar firstName={firstName} />
        <div className="m-8">
            <Balance />
            <Users />
        </div></div> : <Spinner></Spinner>}



    </>
}