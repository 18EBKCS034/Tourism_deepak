import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                {/* BODY of homepage */}

                <div id="body" >
                    <div class="icon-bar">
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="google"><i class="fa fa-google"></i></a>
                        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
                </div>
                    <div class="container">
                        <div id="bodyhead" >
                            <p>About Nainital</p>
                            <sapn id="headsub">Famous for lake, dazzling daylife, Temples</sapn>
                        </div>

                        <div id="bodyparagraph">
                            <p>
                                <img src="https://slusi.dacnet.nic.in/dmwai/UTTARaKHAND/District/NAINITAL.png" />
                          Nainital is a popular hill station in the Indian state of Uttarakhand. It is the judicial capital of Uttarakhand, the High Court of the state being located there, and is the headquarters of the Kumaon division as well as an eponymous district. It also houses the Governor of Uttarakhand, who resides in the Raj Bhavan. Nainital was the summer capital of the United Provinces.

                          <h4>Topography</h4>
                           The city of Nainital covers a total area of 11.73 km2 (4.53 sq mi), and is located at 29.38°N 79.45°E,[6] at an average elevation of 2,084 metres (6,837 ft) above sea level. The slopes of the nearby mountains are most populated, with an altitude ranging from 1,940–2,100 m (6,360–6,890 ft). The highest point nearby is the Naina Peak, with an height of 2,619 m (8,593 ft).
                            The city is located in the Kumaon foothills of the outer Himalayas at a distance of 285 km (177 mi) from the state capital Dehradun and 345 km (214 mi) from New Delhi, the capital of India.

                          </p>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div id="attraction">
                            <h3>Attractions of Nainital </h3>
                            <div class="row ">
                                <div class="column">
                                    <img src="image/38582.jpg" /> <h4>Hill Climbing</h4>
                                    <img src="image/lake.jpg" /><h4>Lake Tour</h4>
                                </div>
                                <div class="column">
                                    <img src="image/wildlife.jpg" /> <h4>Wild-Life Tour</h4>
                                    <img src="image/hotel2.jpg" /><h4>Best Hotels</h4>
                                </div>
                                <div class="column">

                                    <img src="image/draft.jpg" /><h4>Water Drafting</h4>
                                    <img src="image/2159510.jpg" /><h4>Nature View</h4>
                                </div>
                                <div class="column">
                                    <img src="image/airballon.jpg" /><h4>Hotair Balloon</h4>
                                    <img src="image/food.jpg" /><h4>Food Varites</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="attratin1">
                        <div id="bodyhead" >
                            <p>Best Hotels in Nainital</p>
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
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Home
