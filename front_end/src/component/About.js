import React, { Component } from 'react';
import Footer from './Footer';

export class About extends Component {
    render() {
        return (
            <>
            <div>
                 <div class="container-fluid" id="about1">
        <img class="img-fluid" id="aboutimg1"src="image/hg.jpg" /> 
       <h1> <div id="about2"class="bottom-left">About Us</div></h1>
    </div>
   
    <div class="clearfix">
    
          <img id="img1" src="image/hotel1.jpg" alt="garden" />
          <div class="about3">
          <h2 id="h2">OUR HOTEL</h2>
          Built in the 18th century, The Royal opens its doors after 150 years as a boutique hotel.
          Royals Known for their warm hospitality, Royals give each guest a personalised and 
          truthful taste of the bygone era of the Maharaja’s way of life. An ethereal destination,
          Royals complete with rambling lawns, serene courtyards, plush interiors and stately living areas.
          Only eighteen suites and one apartment are in service as the hotel is dedicated to providing 
          a quiet and tranquil haven of space and luxury to the discerning few.
          Escape the mundane with exceptional hospitality, perfected over generations. 
          “Our home and our heart are open to you, at the Royal ” 
     </div>

    </div>
    <h2 id="h3">WELCOME LETTER FROM <br/>ROYALS</h2>
    <div class="clearfix1">
      
      <img class="img2" src="image/hotel.jpg" alt="hg1" />
      <div class="about4">
      Dear Honorable Guest,
       I am delighted to personally welcome you to our family property, The Royals.
        My ancestors often entertained guests; taking them for deer and wild boar hunts in the surrounding 
        jungle on Queen’s road, named after Queen Mary of England. During her visits to Delhi Durbar in 1911, 
        the Queen also visited Jaipur and took a drive to see the animals in our private sanctuary.
         The days were filled with adventure in the wilderness and the evenings complete with food, 
         drinks and companionship inside the safety of these walls.
         Today, we are proud to continue the tradition of hosting guests in a similar way. While your
         days may be filled with different adventures in the Pink City of Jaipur, we will continue to
          entertain you in the traditional style of yesteryears.
           Sincerely,
           Royals
           </div>
    </div>
        
            </div>
             </>
        )
    }
}

export default About
