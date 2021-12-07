import React, { useState } from "react";
import './index.css';
import { NavLink } from "react-router-dom";
const Navbar = ({ updateUser }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <section className="navbar-bg">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container">
                        <NavLink class="navbar-brand" to="/">
                            E-Learn
                        </NavLink>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink class="nav-link active" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <button class="btn  btn-style" type="submit">
                                    <NavLink class="nav-link" to="/login">
                                        Logout
                                    </NavLink>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;