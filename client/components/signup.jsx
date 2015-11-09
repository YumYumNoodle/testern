SignUp = React.createClass({


	handleSubmit(event) {
		event.preventDefault();

		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
		Accounts.createUser({email: email, password: password});
        

      	return false;
	},

	render() {
		return(
			<div>
	   		<h2>Sign Up</h2>
		    	<form className="register" onSubmit={this.handleSubmit}>
			        <p>Email: <input type="email" name="email" ref="email"/>*Do not use your real email address,sdf make something up</p>
			        <p>Password: <input type="password" name="password" ref="password"/>*Do not use one of your usual password, make something up</p>
			        <p><input type="submit" value="Sign Up"/></p>
		    	</form>
	    	</div>
		)
	}

})


