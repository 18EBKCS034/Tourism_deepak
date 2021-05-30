import React, { useState } from 'react';
import '../style/Hotelregister.css';
import { useSelector } from 'react-redux';
import {baseURL} from '../config';
import axios from 'axios';


function Hotelregister(props) {

    var hotel;

    const userId = useSelector(state => state.UserData);

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [hotelname, sethotelname] = useState("");
    const [city, setcity] = useState("");
    const [description, setdescription] = useState("");
    const [hotelprice, sethotelprice] = useState("");
    const [wifi, setwifi] = useState("");
    const [kitchen, setkitchen] = useState("");
    const [laundry, setlaundry] = useState("");
    const [dryClean, setdryClean] = useState("");
    const [lift, setlift] = useState("");
    const [bar, setbar] = useState("");
    const [parking, setparking] = useState("");
    const [location, setlocation] = useState("");
    const [pool, setpool] = useState("");
    const [spa, setspa] = useState("");

    function setImg(e){
        e.target.name == "hotel" && (hotel = e.target.files);
    }

    function sendData(){
        if(name == ""){
            alert("Name Cannot be Empty");
        }
        else if(email == ""){
            alert("Email Cannot be Empty");
        }
        else if(hotelname == ""){
            alert("Hotel Name Cannot be Empty");
        }
        else if(city == ""){
            alert("City Cannot be Empty");
        }
        else if(description == ""){
            alert("Description Cannot be Empty");
        }
        else if(hotelprice == ""){
            alert("Price Cannot be Empty");
        }
        else{
            var formData = new FormData();
            formData.append("name",name);
            formData.append("email",email);
            formData.append("hotelname",hotelname);
            formData.append("city",city);
            formData.append("description",description);
            formData.append('location',location);
            formData.append("price",hotelprice);
            formData.append("bar",bar);
            formData.append("wifi",wifi);
            formData.append("dryClean",dryClean);
            formData.append("lift",lift);
            formData.append("laundry",laundry);
            formData.append("kitchen",kitchen);
            formData.append("pool",pool);
            formData.append("spa",spa);
            formData.append("userId",userId);
            for(var h of hotel){
                formData.append('hotel',h);
            }
            axios.post(baseURL+'postHotel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res)=>{
                alert(res.data.data);
                props.history.push('/');
            }).catch(res=>{
                alert("sorry you are not authorised to do this action");
            });
        }
    }

    return (
        <div>

            <h2 id="Rform">Registration Form</h2>


            <div class="container">
                <form>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name:</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." value={name} onChange={(e)=>{setname(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Email ID:</label>
                        </div>
                        <div class="col-75">
                            <input type="email" id="email" name="email" placeholder=" Enter your Email-ID"  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        </div>
                    </div>
             
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Hotel Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="hotelname" name="hotelname" placeholder=" Enter your Hotel Name......" value={hotelname} onChange={(e)=>{sethotelname(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Hotel Price</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="hotelname" name="hotelprice" placeholder=" Enter your Hotel Price/night" value={hotelprice} onChange={(e)=>{sethotelprice(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="country">City</label>
                        </div>
                        <div class="col-75">
                            <select id="city" name="city" onChange={(e)=>{setcity(e.target.value)}}>
                            <option value=''>Select a city</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Mumbai'>Mumbai</option>
                            <option value='Kolkata'>Kolkata</option>
                            <option value='Chennai'>Chennai</option>
                            <option value='Bangalore'>Bangalore</option>
                            <option value='Dehradun'>Dehradun</option>
                            <option value='Jaipur'>Jaipur</option>
                            <option value='Goa'>Goa</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Location</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="location" name="location" placeholder=" Enter your Hotel's location" value={location} onChange={(e)=>{setlocation(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Hotel photos</label>
                        </div>
                        <div class="custom-file mb-3 col-75">
                            <input name="hotel" onChange={(e)=>{setImg(e)}} type='file' multiple style={{height:"40px",width:"840px",border:"2px solid grey",marginTop:"-20px",marginLeft:"-30px"}}/>
                        </div>
                    </div>

                    

                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Your Hotel Discription</label>
                        </div>
                        <div class="col-75">
                            <textarea id="subject" name="subject" class="h-100" placeholder="Write something about your hotel..." value={description} onChange={(e)=>{setdescription(e.target.value)}} ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Attraction of hotel </label>
                        </div>
                        <div class="custom-file mb-3 col-75 attraction">
                            <div>
                                <input type='checkbox' name='wifi' id='wifi' value={wifi} onChange={(e)=>{setwifi(e.target.checked)}}></input>
                                <label>Wifi</label>
                            </div>
                            <div>
                                <input type='checkbox' name='bar' id='bar' value={bar} onChange={(e)=>{setbar(e.target.checked)}}></input>
                                <label>Bar</label>
                            </div>      
                            <div>
                                <input type='checkbox' name='kitchen' id='kitchen' value={kitchen} onChange={(e)=>{setkitchen(e.target.checked)}}></input>
                                <label>Kitchen</label>
                            </div>
                            <div>
                                <input type='checkbox' name='laundry' id='laundry' value={laundry} onChange={(e)=>{setlaundry(e.target.checked)}}></input>
                                <label>Laundry</label>
                            </div>
                            <div>
                                <input type='checkbox' name='lift' id='lift' value={lift} onChange={(e)=>{setlift(e.target.checked)}}></input>
                                <label>Lift</label>
                            </div>
                            <div>
                                <input type='checkbox' name='parking' id='parking' value={parking} onChange={(e)=>{setparking(e.target.checked)}}></input>
                                <label>Parking</label>
                            </div>
                            <div>
                                <input type='checkbox' name='pool' id='pool' value={pool} onChange={(e)=>{setpool(e.target.checked)}}></input>
                                <label>Swimming Pool</label>
                            </div>
                            <div>
                                <input type='checkbox' name='spa' id='spa' value={spa} onChange={(e)=>{setspa(e.target.checked)}}></input>
                                <label>SPA</label>
                            </div>
                        </div>
                    </div>
                    <div class="row btn">
                        <input type="button" class="bg-danger" value="Submit Your Form" onClick={()=>{sendData();}}/>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}

export default Hotelregister
