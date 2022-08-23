import { Component } from "react";

class About extends Component{
    render(){
        return(
            <div>
            <div id="aboutmain">
        <div className="jumbotron">
            <div className="jumbotron-inner">
                <div className="top-box">
                    <div className="content-box">
                        <h1 className="hclass">
                            About US
                        </h1>
                        <p className="pabout">
                            APIMatic is a developer experience platform for web APIs.  <br /> Our mission is to make developers productive through automatic code generation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="img-layer-container">
                <div className="team-image" id="team-image">
                    <img className="imgmid" src="https://apimatic.io/img/theme/aboutUs/images-1.png" />
                </div>

                <div className="circles-container">
                    <div className="img-1">
                        <img className="imgmid" src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />                        
                    </div>
                    <div className="img-2">
                        <img className="imgmid" src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />                        
                    </div>                    
                </div>           
            </div>
        </div>

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
                <div className="container-divider"></div>
                </div>
        )
    }
}

export default About;