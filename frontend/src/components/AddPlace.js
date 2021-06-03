import axios from 'axios';
import React, { useState } from 'react'
import { baseURL } from '../config';

var tourist;

export default function AddPlace(props) {

    const [name, setname] = useState("");
    // const [location, setlocation] = useState("");
    const [city, setcity] = useState("");
    const [description, setdescription] = useState("");

    function setImg(e){
        e.target.name == 'tourist' && (tourist = e.target.files);
    }

    function postTourist(){
        if(name == ""){
            alert("Name cannot be empty");
        }
        // else if(location == ""){
        //     alert("Location cannot be empty");
        // }
        else if(city == ""){
            alert("Choose a city");
        }
        else if(description == ""){
            alert("Description cannot be empty");
        }
        else{
           var formData = new FormData();
           formData.append('name',name);
        //    formData.append('location',location);
           formData.append('city',city);
           formData.append('description', description);
           for(var i=0; i<tourist.length; i++){
                formData.append('tourist',tourist[i]);
           }
           axios.post(baseURL+'postPlace',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            }).then((res)=>{
                alert(res.data.data);
                props.history.push('/Dashboard');
            }).catch(res=>{
                alert("sorry you are not authorised to do this action");
            });
        }
    }

    return (
        <div>
            <h1>App Tourist Place</h1>
            <form style={{ width: "660px" , display: "inline-block" , marginRight: "auto" , marginLeft: "435px"}}>
                <input name='name' placeholder='Enter name of place' value={name} onChange={(e)=>{setname(e.target.value);}} style={{ width: "87.5vh" , height: "6.5vh" , border: "1px solid lightgray" }}></input>
                {/* <input name='location' placeholder='enter location of place' value={location} onChange={(e)=>{setlocation(e.target.value);}}></input> */}
                <select onChange={(e)=>{setcity(e.target.value);}}>
                        <option value=''>Select a City</option>
                        <option value='Delhi'>Delhi</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Kolkata'>Kolkata</option>
                        <option value='Chennai'>Chennai</option>
                        <option value='Bangalore'>Bangalore</option>
                        <option value='Dehradun'>Dehradun</option>
                        <option value='Jaipur'>Jaipur</option>
                        <option value='Goa'>Goa</option>
                </select>
                <textarea name='description' placeholder='Enter description' value={description} onChange={(e)=>{setdescription(e.target.value);}}></textarea>
                <div style={{ display: "flex" , flexDirection: "column" , justifyContent: "center" , alignItems: "center" }}>
                <span style={{ color: "red" , marginBottom: "20px" }}>Note:- User can uplode maximum 7 photos</span>
                <input name='tourist' type='file' multiple onChange={(e)=>{setImg(e);}} style={{ marginBottom: "20px" , marginLeft: "15%" }}></input>
                <button type='button' className='bg-danger' onClick={()=>{postTourist();}} style={{ marginBottom: "20px" }}>Post Place</button>
                </div>
            </form>
        </div>
    )
}
