import React from 'react'
import '../style/profile.css';


export default function Profile() {
    return (
        <div>
    
<h2 id="profile">User Profile Card</h2>

<div class="card">
  {/* <img src="/w3images/team2.jpg" alt="John"/> */}
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div>
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button id="btnprofile">Contact</button></p>
</div>
    </div>

    )
}
