import { Appbar } from "./AppBar"
import { Balance } from "./Balance"
import { Users } from "./Users"
export function Dashboard(){
    return<>
     <Appbar />
        <div className="m-8">
            <Balance/>
            <Users />
        </div>
    </>
}