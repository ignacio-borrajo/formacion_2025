import { useState } from "react"
import api from "../../../api/api"
import { useNavigate } from "react-router-dom"


const LoginForm=()=>{
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleClick=()=>{
        api.post('token/',{username,password})
        .then((response)=>{
            console.log("Login successful: ",response.data)
            sessionStorage.setItem("token",response.data.access)
            sessionStorage.setItem("refresh",response.data.refresh)
            navigate("/")
        })
        .catch((error)=>{
            console.error("Login failed:", error)
        })
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text"className="form-control" name="username" id="username" placeholder="Username"
                value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"className="form-control" name="password" id="password" placeholder="password"
                value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
            >
                Login
            </button>
            
            
        </div>
    )
}


export default LoginForm