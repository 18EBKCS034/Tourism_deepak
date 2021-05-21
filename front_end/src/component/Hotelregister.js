import React, { useState } from 'react';
import './Hotelregister.css';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Hotelregister() {

    var hotel;

    const userId = useSelector(state => state.UserData);

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [hotelname, sethotelname] = useState("");
    const [city, setcity] = useState("");
    const [description, setdescription] = useState("");

    function setValue(e){
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
        else{
            var formData = new FormData();
            formData.append("name",name);
            formData.append("email",email);
            formData.append("hotelname",hotelname);
            formData.append("city",city);
            formData.append("description",description);
            formData.append("userId",userId);
            for(var h of hotel){
                formData.append('hotel',h);
            }
            console.log(formData);
            axios.post("http://localhost:3000/postHotel", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res)=>{
                alert(res.data.data);
            }).catch(res=>{
                alert("sorry you are not authorised to do this action");
            });
        }
    }

    return (
        <div>

            <h2 id="Rform">Registration Form</h2>


            <div class="container">
                <form action="/action_page.php">
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
                            <label for="country">City</label>
                        </div>
                        <div class="col-75">
                            <select id="city" name="city" onChange={(e)=>{setcity(e.target.value)}}>
                                <option value="Delhi">Delhi</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Puna">Puna</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Hotel photos</label>
                        </div>
                        <div class="custom-file mb-3 col-75">
                            <input style={{height:"40px",width:"840px",border:"2px solid grey",marginTop:"-20px",marginLeft:"-30px"}} type="file" multiple  name="hotel" onChange={(e)=>{setValue(e);}} />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Attraction of hotel </label>
                        </div>
                        <div class="custom-file mb-3 col-75">
                            <input type="file" class="custom-file-input" id="customFile" name="filename" />
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
                    <div class="row btn">
                        <input type="button" class="bg-danger" value="Submit Your Form" onClick={()=>{sendData();}}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hotelregister
