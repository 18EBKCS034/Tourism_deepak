import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import $ from 'jquery'
import axios from 'axios'

export default function Loginform() {

	var passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    var emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const [useremail, setuseremail] = useState("");
	const [username, setusername] = useState("");
	const [userpassword, setuserpassword] = useState("");
	const [code1, setcode1] = useState("");
	const [code2, setcode2] = useState("");
	const [code3, setcode3] = useState("");

	// const dispatch = useDispatch();

	useEffect(() => {
		$(document).ready(function($) {
			 var tab = $('.tabs h3 a');
			 tab.on('click', function(event) {
			   event.preventDefault();
			   tab.removeClass('active');
			   $(this).addClass('active');
			   var tab_content = $(this).attr('href');
			   $('div[id$="tab-content"]').removeClass('active');
			   $(tab_content).addClass('active');
			 });			 
	    });
		setcode2(Math.floor((Math.random() * 10000) + 1));
	}, []);

    function login(){
        axios.get('http://localhost:3000/loginUser?email='+email+'&password='+password).then((res)=>{
            if(res.data.data[0] == undefined){
                alert("Please Enter Valid Email or Password");
            }
            else{
                alert("Hello "+res.data.data[0].name+" you are successfully logged in.");
                // dispatch({type: "LOGIN_TRUE"});
                // if(res.data.data[0].iam == "buyer"){
                //     dispatch({type: "BUYER"});
                // }
                // var uid = res.data.data[0]._id;
                // dispatch({type: "LOGGEDIN",payload: uid });
                // localStorage.setItem("LOGIN_ID", uid);
                // props.history.push('/');
            }
        });
    }

	function verify(){
		if(username == "" || username == null || username.length == 0){
            alert('Name cannot be Empty');
        }
        else if(!passwordRegex.test(userpassword)){
            alert('Password must contain 1 lower case, 1 upper case, 1 digit, 1 special character, length atleast 8');
        }
        else if(!emailRegex.test(useremail) || useremail == ""){
            alert('Enter valid email address');
        }
		else{
            axios.get('http://localhost:3000/checkUser?email='+useremail).then((res)=>{
				console.log(res.data.data[0]);
                if( res.data.data[0] != undefined){
                    alert("User with same Email is already exist");
                }
                else{ 
        			setcode2(Math.floor((Math.random() * 10000) + 1));
					setcode3(code2);
                    var verify = {
                        email:useremail,
                        code: code2
                    }
                    axios.post('http://localhost:3000/verifyUser',verify).then((res)=>{
                        alert(res.data.data);
                    });
                }
            });
        }
	}

	function register(){
        var user = {
            name: username,
            email: useremail,
            password: userpassword,
        }
        if( code3 == code1){
            axios.post('http://localhost:3000/registerUser', user).then((res)=>{
                alert(res.data.data);
            });
        }
        else{
            alert("Your verification code is not correct. Please! enter a valid email or code");
        }
    }

	return (
		<div id="background">
			<div class="form-wrap">
				<div class="tabs">
					<h3 class="signup-tab"><a class="active" href="#signup-tab-content">Sign Up</a></h3>
					<h3 class="login-tab"><a href="#login-tab-content">Login</a></h3>
				</div>
				<div class="tabs-content">
					<div id="signup-tab-content" >
						<form class="signup-form" action="" >
							<input type="text" class="input" id="user_email" autocomplete="off" placeholder="Email" value={useremail} onChange={(e)=>{setuseremail(e.target.value)}}/>
							<input type="text" class="input" id="user_name" autocomplete="off" placeholder="Username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
							<input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password" value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}}/>
							<input type="button" class="button" value="Get Verification Code" onClick={()=>{verify();}}/>
							<input style={{marginTop:"10px"}} type='text' class='input' placeholder='Enter Verification Code' value={code1} onChange={(e)=>{setcode1(e.target.value)}}></input>
							<input type='button' class='button' value='Sign Up' onClick={()=>{register();}}></input>
						</form>
						<div class="help-text">
							<p>By signing up, you agree to our</p>
							<p><a href="#">Terms of service</a></p>
						</div>
					</div>
					<div id="login-tab-content" class="active">
						<form class="login-form" action="">
							<input type="email" class="input" id="user_login"  placeholder="Email or Username" value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
							<input type="password" class="input" id="user_pass"  placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value);}}/>

							<input type="button" class="button" value="Login" onClick={()=>{login();}}/>
						</form>
						<div class="help-text">
							<p><a href="#">Forget your password?</a></p>
						</div>
					</div>
				</div>
			</div>
     	</div>
	)
}

