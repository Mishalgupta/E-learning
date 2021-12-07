import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-12 col-lg-3 mx-auto">
                                    <h2>Follow Us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <i class="fab fa-facebook-f fontawesome-style"></i>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a
                                                href="https://www.instagram.com/"
                                                target="_thapa">
                                                <i class="fab fa-instagram fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <i class="fab fa-youtube fontawesome-style"></i>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <i class="fab fa-twitter fontawesome-style"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">
                                    Copyright @ 2021 E-learn. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;