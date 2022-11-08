import {useState} from "react";
import{login, logout} from "../store";
import {useDispatch, useSelector} from "react-redux"; 

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state: any)=> state.user.value.username);
    return (
        <div>
            <h1>
                {username}
                <input 
                onChange={(event)=>{
                    setNewUsername(event.target.value)
                    }}/>
                <button onClick={() => dispatch(login({username: newUsername}))}> 
                Submit Login</button>
                <button> Logout</button>

            </h1>
        </div>
    )
}