import React, { useEffect, useState } from 'react'
import '../style/profile.css';
import axios from 'axios';
import { baseURL } from '../config';
import { useSelector } from 'react-redux';


export default function Profile() {

  const id = useSelector(state => state.UserData);

    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    // const [newname, setnewname] = useState("");

    useEffect(() => {
      var uid = localStorage.getItem("LOGIN_ID");
       axios.post(baseURL+'getUser?id='+uid).then((res)=>{
            setemail(res.data.data[0].email);
            setname(res.data.data[0].name);
       });
    }, []);

    function updateName(){
      
          var data = {
              id:id,
              name: name,
          }
          axios.post(baseURL+"updateName", data).then((res)=>{
              // alert(res.data.data);
              window.location.reload(true);
          });
        document.getElementById('update').style.display = 'none';
        document.getElementById('btnprofiles').style.display = 'block';
  }

  function show(){
      document.getElementById('update').style.display = 'block';
      document.getElementById('btnprofiles').style.display = 'none';
  }


    return (
      <div>
          <h2 id="profiles">User Profile</h2>

          <div class="cards">
            <h1>{name}</h1>
            <p class="titles">{email}</p>
            <p></p>
            <div class="atag">
              <a href="#"><i class="fa fa-dribbble"></i></a> 
              <a href="#"><i class="fa fa-twitter"></i></a>  
              <a href="#"><i class="fa fa-linkedin"></i></a>  
              <a href="#"><i class="fa fa-facebook"></i></a> 
            </div>
            <div id='update' style={{display:"none"}}>
            <input type='text' value={name} onChange={(e)=>{setname(e.target.value);}} placeholder='Enter New Name'></input>
            <button onClick={()=>{updateName();}}>Update</button>
            </div>

            <p><button id="btnprofiles" onClick={()=>{show();}}>Update Name</button></p>
          </div>
     </div>

    )
}
