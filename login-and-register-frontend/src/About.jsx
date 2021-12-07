import React, { useState } from "react";
import howToUseApp from "./API/howToUse.js";

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howToUseApp);
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./images/hero3.jpg" alt="aboutusIMg" />
                        </div>

                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h1 className="main-heading">About Us</h1>

                            {aboutData.map((curElem) => {
                                const { id, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <br />
                            {/* <button className="btn-style btn-style-border">learn more</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aboutus;