import React from 'react'

import '../style/Hotelpage.css'
import Footer from './Footer';
export default function Hotelpage() {
    return (
        <>
            
            <div>

                <div class="row">
                    <div class="column" >
                        <div class="Hroom">
                            <img src="https://www.royalheritagehaveli.com/wp-content/uploads/sb-instagram-feed-images/165226081_142714467769743_2949865498024574619_nfull.jpg" alt="" />
                           
                        </div>
                        
                    <div className='searchResult__info'>
                        <div className="searchResult__infoTop">
                           
                            {/* NAME OF HOTEL */}
                            <h2 id="Hroomh2">Jasvilas</h2>


                            {/* ADDRESS */}
                            <h5> C-9, S.J.S. Highway, Bani Park, Bani Park, 302016 Jaipur, India</h5>


                            {/* DISCRIPTION OF HOTEL */}

                            <p>Offering an outdoor swimming pool, Jasvilas is located just 1.5 km from Jaipur Railway Station. It provides special facilities for differently abled guests. Free Wi-Fi access is available throughout the property.

                            The air-conditioned rooms here will provide you with a flat-screen cable TV and a seating area. Featuring a shower, private bathrooms also come with free toiletries.
                               </p>
                            <div>
                                <img src='images/wifi.png' />
                                <img src='images/food.png' />
                                <img src='images/laundry.png' />
                                <img src='images/bar.png' />
                                <img src='images/parking.png' />
                                <img src='images/lift.png' />
                                <img src='images/pool.png' />
                                <img src='images/SPA.png' />
                            </div>
                        </div>

                        <div className="searchResult__infoBottom">
                            <div className="searchResult__stars">
                                {/* <StarIcon className="searchResult__star" /> */}
                                <p>
                                    {/* <strong>{star}</strong> */}
                                </p>
                            </div>
                            <div className='searchResults__price'>

                                {/* <p>{total}</p> */}
                            </div>
                        </div>
                
        </div>
       </div>
                



            </div>
      
            <h2 id="pageh1">Our Rooms</h2>

            <h2 id="pageh2">Select Your Room Type</h2>
            <div class="cardss">
            <div class="cardp1">
                <img src="https://www.royalheritagehaveli.com/wp-content/uploads/2015/10/Suite2-1-270x270.jpg" alt="Room1" />
                <h1>Luxery Room</h1>
                <p class="price1">$39.99</p>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button>Book Now</button></p>
            </div>
            <div class="cardp1">
                <img src="https://www.royalheritagehaveli.com/wp-content/uploads/2015/10/IMG_20200923_180450_1-270x270.jpg" alt="Room1" />
                <h1>Queen Bed Room</h1>
                <p class="price1">$50</p>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button>Book Now</button></p>
            </div>
            <div class="cardp1">
                <img src="https://www.royalheritagehaveli.com/wp-content/uploads/2015/10/Signature5-1-270x270.jpg" alt="Room1" />
                <h1>Classic Room</h1>
                <p class="price1">$10</p>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button>Book Now</button></p>
            </div>
                </div>
        
        </div>
        <div id="Hroomfooter">
               <Footer/>
           </div>
        </>
            
    )
}
