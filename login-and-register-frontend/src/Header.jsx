import React from "react";
import a from "./images/a.jpeg"
import b from "./images/b.jpeg"

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
                            <h1 className="display-2">
                                Online Learning Made <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                                officiis tempora recusandae voluptate quam, nisi odio officiis
                                tempora recusandae
                            </p>
                        </div>
                        {/*  --------------- main header right side--------------  */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center flex-column align-items-start ">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={a} class="d-block w-100" alt="img-1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={b} class="d-block w-100" alt="img-2" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={a} class="d-block w-100" alt="img-3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={b} class="d-block w-100" alt="img-4" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Header;