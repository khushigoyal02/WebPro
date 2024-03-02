import React, {useState} from "react";
import './signin.css';

export default function SignIn()
{
	const [name, setName]=useState('');
	const [email, setEmail]=useState('');
	const [password, setPassword]=useState('');
	const [clickst, setClickst]=useState(false);
    const [action, setAction]=useState("Sign In");

 function si(){
	if (email.trim()==='') {alert("Enter email");}
    else if (password.trim()==='') {alert("Enter password");}
	else {setClickst(!clickst);}
 }

 function su(){
	if (name.trim()==='') {alert("Enter name");}
    else if (email.trim()==='') {alert("Enter email");}
    else if (password.trim()==='') {alert("Enter password");}
	else {setClickst(!clickst);}
 }

  function callonclick(){ action==="Sign In" ? si() : su() }

  function clear(){
	{action=="Sign In" ? setAction("Sign Up") : setAction("Sign In")}
	if (action==="Sign In"){setName("");}
	setEmail("");
	setPassword("");
	setClickst(false);
  }
	
    return(
	    <div className="row mt-5 signin">
			<div className="col-md-6 left">
        <h1 className="text-center fw-bold">{action}</h1>
        {action==="Sign In" ? <div></div> :
			  <div className="form-group">
				    <label for="name"> Enter Name </label>
					<input type="text" onChange={e=>setName(e.target.value)} value={name} className="form-control"/>
				</div>
        }
				<div className="form-group my-2">
				    <label for="email"> Enter Email </label>
					<input type="email" onChange={e=>setEmail(e.target.value)} value={email} className="form-control"/>
				</div>
				<div className="form-group my-2">
				    <label for="password"> Enter Password </label>
					<input type="password" onChange={e=>setPassword(e.target.value)} value={password} className="form-control"/>
				</div>
				<button className="my-4 position-relative start-50 translate-middle-x main" onClick={callonclick}> {action}</button>
        
        {action==="Sign Up" ? <div></div>:
        <div className="text-center">
        <span>Don't have an account?</span>
        <button className="change text-decoration-underline text-primary" onClick={clear}>Sign up</button>
        </div>}

        {action==="Sign In" ? <div></div>:
        <div className="text-center">
        <span>Already have an account?</span>
        <button className="change text-decoration-underline text-primary" onClick={clear}>Sign in</button>
        </div>}
			</div>
			
			<div className="col-md-6 p-5 right text-white">
			    <h3 className="text-center fw-bold">When you click on button you will see the data here </h3>
				{
					clickst && 
					( <div className="signin-text text-center">
              {action=="Sign In" ? <p></p>:
					    <p> Name :- {name} </p> }
						<p> Email :- {email} </p>
						<p> Password :- {password} </p>
					</div> )
				}
			</div>
		</div>
	);
}
