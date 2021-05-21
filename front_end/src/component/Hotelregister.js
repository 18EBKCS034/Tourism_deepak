import React from 'react'
import './Hotelregister.css'


function Hotelregister() {
    return (
        <>

            <h2 id="Rform">Registration Form</h2>


            <div class="container">
                <form action="/action_page.php">
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name:</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Email ID:</label>
                        </div>
                        <div class="col-75">
                            <input type="email" id="email" name="email" placeholder=" Enter your Email-ID" />
                        </div>
                    </div>
             
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Hotel Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="hotelname" name="hotelname" placeholder=" Enter your Hotel Name......" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="country">City</label>
                        </div>
                        <div class="col-75">
                            <select id="city" name="city">
                                <option value="australia">Delhi</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="chennai">Chennai</option>
                                <option value="puna">Puna</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Hotel photos</label>
                        </div>
                        <div class="custom-file mb-3 col-75">
                            <input type="file" class="custom-file-input" id="customFile" name="filename" />
                            <label class="custom-file-label" for="customFile">Hotel Photos</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Attraction of hotel </label>
                        </div>
                        <div class="custom-file mb-3 col-75">
                            <input type="file" class="custom-file-input" id="customFile" name="filename" />
                            <label class="custom-file-label" for="customFile">Attration Photos</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Your Hotel Discription</label>
                        </div>
                        <div class="col-75">
                            <textarea id="subject" name="subject" class="h-100" placeholder="Write something about your hotel..." ></textarea>
                            {/* style="height:200px" */}
                        </div>
                    </div>
                    <div class="row btn">
                        <input type="submit" class="bg-danger" value="Submit Your Form" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Hotelregister
