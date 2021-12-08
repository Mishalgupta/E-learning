import React, { useState } from "react"
import axios from "axios"
import './register.css'
import img from './images/istockphoto-1299975932-170667a.jpg'
import { useHistory, NavLink } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <>
            <div style={{ backgroundColor: "#f2f6ff", margin: "0" }}>
                <form id="form">
                    <div>
                        <h1 id="register"> Sign Up </h1>
                    </div>
                    <div id="input-wrapper">
                        <table>
                            <tr>
                                <td style={{ width: "300px" }}>
                                    <div class="input-box">
                                        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} style={{ outline: "none", border: "none " }} />
                                    </div>
                                </td>
                                <td rowspan="4s">
                                    <img src={img} alt="Register Logo" id="image1" style={{ height: "250px", textAlign: "right" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="input-box">
                                        <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} style={{ border: "none" }} />

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="input-box">
                                        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange} style={{ border: "none" }} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="input-box">
                                        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} style={{ border: "none" }} />

                                    </div>
                                </td>
                            </tr>
                        </table>

                        <div style={{ textAlign: "left" }}>
                            <input type="button" name="Register" value="Register" id="but1" onClick={register} />
                        </div><a class="already" to="#">You already have an account?
                            <button style={{ borderStyle: "none" }}>
                                <NavLink class="nav-link" to="/login">
                                    Sign in here.
                                </NavLink>
                            </button>.
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register