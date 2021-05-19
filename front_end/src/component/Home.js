import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'


export class Home extends Component {
    render() {
        return (
            <div>
                {/* BODY of homepage */}
            <Header/>
                <div id="body" >
                    <div class="icon-bar">

                        <a class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="google"><i class="fa fa-google"></i></a>
                        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
                </div>
                <div class="container-fluid">
            <div>
                <div class="image-left col-md-6 col-sm-6" id="img1Ab">
				<img src="https://www.royalheritagehaveli.com/wp-content/uploads/2020/09/Royal_Heritage-1.jpg" width="325" height="452" alt="Home"/>	
                
                </div>

                <div class="image-right col-md-6 col-sm-6" id="img2Ab">
				<img src="https://www.royalheritagehaveli.com/wp-content/uploads/2020/09/Royal_heritage_2.jpg" width="325" height="452" alt="Home"/>	
                
                		</div>
                

            </div>

                        <div id="pgc" class="panel-grid-cell">
                          
                                            <div class="content-heading">
                                                <div class="small-heading">SERVICES SINCE 2010</div>
                                                <h3  class="heading__primary">Carrying forward a glorious legacy of <br/>elegance &amp; hospitality since the seventeen hundreds</h3>
                                                <div class="description-heading"><p>Built in the 18th century by His Highness,  <br/>Madho Singh the II of Jaipur,The Royal  <br/>Heritage Haveli opens its doors after 150  <br/>years as a boutique hotel. </p></div>
                                                </div>

                        </div>
                       
                        
                        
                    







                </div>
                    {/* <div class="container-fluid">
                        <div id="attraction">
                            <h3>Attractions of India </h3>
                            <div class="row ">
                                <div class="column">
                                    <img src="image/thar.jpg" /> <h4>Hill Climbing</h4>
                                    <img src="image/gate.jpg" /><h4>Lake Tour</h4>
                                </div>
                                <div class="column">
                                    <img src="image/tajmahal.jpg" /> <h4>Wild-Life Tour</h4>
                                    <img src="image/hotel2.jpg" /><h4>Best Hotels</h4>
                                </div>
                                <div class="column">

                                    <img src="image/draft.jpg" /><h4>Water Drafting</h4>
                                    <img src="image/beach.jpg" /><h4>Nature View</h4>
                                </div>
                                <div class="column">
                                    <img src="image/redfort.jpg" /><h4>Hotair Balloon</h4>
                                    <img src="image/kerla.jpg" /><h4>Food Varites</h4>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div id="attratin1">
                        <div id="bodyhead" >
                            <p>TOP RATED HOTELS OF INDIA</p>
                            <sapn id="headsub">Hotels, resorts, luxury hotels and budget hotels to stay</sapn>
                        </div>
                        <div class="row1">
                            <div class="card">
                                <img src="image/hotel2.jpg" alt="Denim Jeans" />
                                <h1>Taj-Mahal</h1>
                                <p class="price">$19.12</p>
                                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                                <p><button>Read More</button></p>
                            </div>
                            <div class="card">
                                <img src="image/hotal3.jpg" alt="Denim Jeans" />
                                <h1>Tailored</h1>
                                <p class="price">$20.09</p>
                                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                                <p><button>Read More</button></p>
                            </div>
                            <div class="card">
                                <img src="image/hotel3.jpg" alt="Denim Jeans" />
                                <h1>Shamee</h1>
                                <p class="price">$29.99</p>
                                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                                <p><button>Read More</button></p>
                            </div>
                        
                    </div>
                    <div class="text-center">
                              <button type="button" class="btn btn-warning font-weight-bold w-25  mt-5">Read More</button>
                               </div>              
                        </div> */}
                </div>
                <hr />

                <Footer/>
            </div>
        )
    }
}

export default Home
