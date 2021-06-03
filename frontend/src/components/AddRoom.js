import axios from 'axios';
import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { baseURL } from '../config';
import "../style/addroom.module.css";

var room;

function AddRoom(props) {
    const dispatch = useDispatch();
    const id = useSelector(state => state.hotelID);

    const [studytable, setstudytable] = useState("");
    const [roomservice, setroomservice] = useState("");
    const [intercom, setintercom] = useState("");
    const [tv, settv] = useState("");
    const [ac, setac] = useState("");
    const [wifi, setwifi] = useState("");
    const [hotcoldwater, sethotcoldwater] = useState("");
    const [teamaker, setteamaker] = useState("");
    const [refrigerator, setrefrigerator] = useState("");
    const [heater, setheater] = useState("");
    const [filter, setfilter] = useState("");
    const [name, setname] = useState("");
    const [person, setperson] = useState("");
    const [price, setprice] = useState("");

    function setRoom(e){
        e.target.name == "room" && (room = e.target.files);
    }

    function postRoom(){ 
        if(name == ""){
            alert("Name Cannot be Empty");
        }
        else if(person == ""){
            alert("person Cannot be Empty");
        }
        else if(price == ""){
            alert("Price cannot be Empty");
        }
        else{
            var Data = new FormData();
            Data.append("roomname",name);
            Data.append("person",person);
            Data.append("price",price);
            Data.append("studytable",studytable);
            Data.append("roomservice",roomservice);
            Data.append("intercom",intercom);
            Data.append("tv",tv);
            Data.append("ac",ac);
            Data.append("wifi",wifi);
            Data.append("hotcoldwater",hotcoldwater);
            Data.append("teamaker",teamaker);
            Data.append("heater",heater);
            Data.append("refrigerator",refrigerator);
            Data.append("filter",filter);
            Data.append('hotelID',id);
            for(var i=0; i<room.length; i++){
                Data.append('room',room[i]);
            }
               axios.post(baseURL+'postRoom', Data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }).then((res)=>{
                    alert(res.data.data);
                    dispatch({type:"UNCLICKED"});
                    props.history.push('/Dashboard');
                }).catch(res=>{
                    alert("sorry you are not authorised to do this action");
                });
        }
    }

    return (
        <div>
            <h1>ADD Room</h1>
            <form style={{ width: "660px" , display: "inline-block" , marginRight: "auto" , marginLeft: "435px"}}>
                <input name='roomname' type='text' placeholder='Room Name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                <input name='person' type='number' placeholder='Persons can stay in this room' value={person} onChange={(e)=>{setperson(e.target.value)}} style={{ marginTop: "20px" }}></input>
                <input name='price' type='text' placeholder='Price/night' value={price} onChange={(e)=>{setprice(e.target.value)}} style={{ marginTop: "20px" }}></input>
                <h4>Features</h4>
                <div style={{display:"flex" , width: "150vh" , marginLeft: "-31%"}}>
                            <div>
                                <input type='checkbox' name='roomservice' id='roomservice' value={roomservice} onChange={(e)=>{setroomservice(e.target.checked)}}></input>
                                <label>Room Service</label>
                            </div>
                            <div>
                                <input type='checkbox' name='studytable' id='studytable' value={studytable} onChange={(e)=>{setstudytable(e.target.checked)}}></input>
                                <label>Study Table</label>
                            </div>
                            <div>
                                <input type='checkbox' name='intercom' id='intercom' value={intercom} onChange={(e)=>{setintercom(e.target.checked)}}></input>
                                <label>Intercom</label>
                            </div>
                            <div>
                                <input type='checkbox' name='tv' id='tv' value={tv} onChange={(e)=>{settv(e.target.checked)}}></input>
                                <label>TV</label>
                            </div>
                            <div>
                                <input type='checkbox' name='hotcoldwater' id='hotcoldwater' value={hotcoldwater} onChange={(e)=>{sethotcoldwater(e.target.checked)}}></input>
                                <label>Hot/cold Water</label>
                            </div>
                            <div>
                                <input type='checkbox' name='teamaker' id='teamaker' value={teamaker} onChange={(e)=>{setteamaker(e.target.checked)}}></input>
                                <label>Tea/Coffee Maker</label>
                            </div>
                            <div>
                                <input type='checkbox' name='wifi' id='wifi' value={wifi} onChange={(e)=>{setwifi(e.target.checked)}}></input>
                                <label>Wifi</label>
                            </div>
                            <div>
                                <input type='checkbox' name='refrigerator' id='refrigerator' value={refrigerator} onChange={(e)=>{setrefrigerator(e.target.checked)}}></input>
                                <label>Mini Refrigerator</label>
                            </div>
                            <div>
                                <input type='checkbox' name='heater' id='heater' value={heater} onChange={(e)=>{setheater(e.target.checked)}}></input>
                                <label>Room Heater</label>
                            </div>
                            <div>
                                <input type='checkbox' name='ac' id='ac' value={ac} onChange={(e)=>{setac(e.target.checked)}}></input>
                                <label>AC</label>
                            </div>

                            <div>
                                <input type='checkbox' name='filter' id='filter' value={filter} onChange={(e)=>{setfilter(e.target.checked)}}></input>
                                <label>RO filtered water</label>
                            </div>
                </div>
                <div style={{ display: "flex" , flexDirection: "column" , justifyContent: "center" , alignItems: "center" }}>
                <span style={{ color: "red" , marginBottom: "20px" }}>Note:- User can uplode maximum 7 photos</span>
                <input type='file' multiple name='room' onChange={(e)=>{setRoom(e)}} style={{ marginBottom: "20px" , marginLeft: "15%" }}></input>
                <button type='button' class="bg-danger" onClick={()=>{postRoom();}} style={{ marginBottom: "20px" }}>POST ROOM</button>
                </div>
            </form>
        </div>
    )
}
export default AddRoom;
