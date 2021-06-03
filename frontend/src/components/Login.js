import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {baseURL} from '../config';
import '../style/login.css';

export default function Login(props) {

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

	const dispatch = useDispatch();


	useEffect(() => {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove("right-panel-active");
		});
		setcode2(Math.floor((Math.random() * 10000) + 1));
	}, []);

	function login(){
        axios.post(baseURL+'loginUser?email='+email+'&password='+password).then((res)=>{
            if(res.data.data[0] == undefined){
                alert("Please Enter Valid Email or Password");
            }
            else{
                alert("Hello "+res.data.data[0].name+" you are successfully logged in.");
				if(res.data.data[0].Admin){
					console.log(res.data.data[0].Admin);
					dispatch({type:"ADMIN"});
				}
                dispatch({type: "LOGIN_TRUE"});
                var uid = res.data.data[0]._id;
                dispatch({type: "LOGGEDIN",payload: uid });
                localStorage.setItem("LOGIN_ID", uid);
                props.history.push('/Dashboard');
            }
        });
    }

	function forgotPassword(){
        if(email == "" || email == undefined){
            alert("First Enter your email then request for password recovery");
        }
        else{
            axios.post(baseURL+'forgotPassword?email='+email).then((res)=>{
                alert(res.data.data);
            });
        }
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
            axios.post(baseURL+'checkUser?email='+useremail).then((res)=>{
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
                    axios.post(baseURL+'verifyUser',verify).then((res)=>{
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
			Admin:""
        }
        if( code3 == code1){
            axios.post(baseURL+'registerUser', user).then((res)=>{
                alert(res.data.data);
            });
        }
        else{
            alert("Your verification code is not correct. Please! enter a valid email or code");
        }
    }

    return (
        <div className='login'>
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h2>Create Account</h2>
			{/* <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span> */}
			<input type="text" placeholder="Name" value={username} onChange={(e)=>{setusername(e.target.value)}} />
			<input type="email" placeholder="Email" value={useremail} onChange={(e)=>{setuseremail(e.target.value)}}/>
			<input type="password" placeholder="Password" value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}}/>
			<button type="button" onClick={()=>{verify();}}>Get Verified</button>
			<input type='text' placeholder='Verification Code'value={code1} onChange={(e)=>{setcode1(e.target.value)}}/>
			<button onClick={()=>{register();}}>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			{/* <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span> */}
			<input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
			<input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
			<a onClick={()=>{forgotPassword();}}>Forgot your password?</a>
			<button type='button' onClick={()=>{login();}}>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}
