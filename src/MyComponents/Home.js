import { Component } from "react";
import brick from "../images/brick.png";
import sand from "../images/sand.png";
import chip from "../images/chips.png";

class Home extends Component {
    render() {
        return (
            <div className="footergap">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner slider">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://www.fritsch-international.com/fileadmin/_processed_/csm_Sand_g_cf3b041233.png" className="d-block w-100" alt="..."></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://www.fritsch-international.com/fileadmin/_processed_/csm_Sand_g_cf3b041233.png" className="d-block w-100" alt="..."></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.fritsch-international.com/fileadmin/_processed_/csm_Sand_g_cf3b041233.png" className="d-block w-100" alt="..."></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="story-container">
                    <div className="ourservice">
                        <h3 className="text-center">
                            Our Services
                        </h3>
                        <p>
                            Our code generation engine enables API providers to generate SDKs for their APIs within minutes and at a fraction of the cost. We provide tools like our API editor and API transformer to further aid API providers in minimizing the time required to ship excellent quality SDKs to the developers using their APIs. Our code generation engine is also capable of generating succinct and error-free documentation for APIs and SDKs, both. The documentation for the SDKs includes dynamic screenshots detailing usage instructions tailored to the provider's specific API and also code snippets showing example usage. As the cherry on the cake, we provide beautifully designed DX portals to encapsulate this documentation.
                        </p> </div>
                </div>

                <div className="container d-flex align-items-center justify-content-center flex-wrap">
                    <div className="box">
                        <div className="body">
                            <div className="imgContainer"> <img src={brick} alt="" /> </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h3 className="text-white fs-5">BRICK</h3>
                                    <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="body">
                            <div className="imgContainer"> <img src={sand} alt="" /> </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h3 className="text-white fs-5">SAND</h3>
                                    <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="body">
                            <div className="imgContainer"> <img src={chip} alt="" /> </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h3 className="text-white fs-5">CHIPS</h3>
                                    <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default Home;