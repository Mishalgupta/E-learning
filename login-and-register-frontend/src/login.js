import React, { useState } from "react"
import axios from "axios"
import './register.css'
import { useHistory, NavLink } from "react-router-dom"

const Login = ({ updateUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                updateUser(res.data.user)
                history.push("/error")
            })
    }

    return (
        <>
            <div style={{ backgroundColor: "#f2f6ff", margin: "0" }}>
                <form id="form">
                    <div>
                        <h1 id="register"> Sign in </h1>
                    </div>
                    <div id="input-wrapper">
                        <table>
                            <tr>
                                <td style={{ width: "300px" }}>
                                    <div class="input-box">
                                        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" style={{ outline: "none", border: "none " }}></input>
                                    </div>
                                </td>
                                <td rowspan="4s">
                                    <img src="https://drive.google.com/uc?export=view&id=1sjtwWDxx05eMyteDmDFGT5lJ7whJF-We" alt="Register Logo" id="image1" style={{ height: "250px", textAlign: "right" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="input-box">
                                        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" style={{ border: "none" }} />
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <div style={{ textAlign: "left" }}>
                            <input type="button" name="Sign in" value="Sign in" id="but1" onClick={login} />
                        </div>
                        <a class="already" to="#">Don't have an account?
                            <button style={{ borderStyle: "none" }}>
                                <NavLink class="nav-link" to="/register">
                                    Register here.
                                </NavLink>
                            </button>.
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login