import React, { Component } from 'react'
import $ from 'jquery'


export class Loginform extends Component {
componentDidMount(){
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

}	
 
  


    render() {
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
					<input type="email" class="input" id="user_email" autocomplete="off" placeholder="Email"/>
					<input type="text" class="input" id="user_name" autocomplete="off" placeholder="Username"/>
					<input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password"/>
					<input type="submit" class="button" value="Sign Up"/>
				</form>
				<div class="help-text">
					<p>By signing up, you agree to our</p>
					<p><a href="#">Terms of service</a></p>
				</div>
			</div>

			<div id="login-tab-content" class="active">
				<form class="login-form" action="">
					<input type="email" class="input" id="user_login"  placeholder="Email or Username"/>
					<input type="password" class="input" id="user_pass"  placeholder="Password"/>
					<input type="checkbox" class="checkbox" id="remember_me"/>
					<label for="remember_me">Remember me</label>

					<input type="submit" class="button" value="Login"/>
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
}

export default Loginform
