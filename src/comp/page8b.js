import {useRef} from "react";
import './page8b.css';

const Page8b = () => {

  var nameRef=useRef('');
  var emailRef=useRef('');
  var phoneRef=useRef('');
  var msgRef=useRef('');

  function showvalue(){
    if (nameRef.current.value.trim()==='') {alert("Enter name");}
    else if (emailRef.current.value.trim()==='') {alert("Enter email");}
    else if (phoneRef.current.value.trim()==='') {alert("Enter phone number");}
    else if (msgRef.current.value.trim()==='') {alert("Enter message");}

    else{
      alert("Name: "+nameRef.current.value);
      alert("Email: "+emailRef.current.value);
      alert("Phone: "+phoneRef.current.value);
      alert("Message: "+msgRef.current.value);
      alert("Data saved successfully!");
      
      nameRef.current.value='';
      emailRef.current.value='';
      phoneRef.current.value='';
      msgRef.current.value='';
    }
  }

  return (
    <div className="page8b row container-fluid">
      <div class="col-md-6 p81 p-5">
        <h1 className="fw-bold">CONTACT INFORMATION</h1>
    <div class="email my-2">
      <div class="icon4"></div>
      <div class="text">
      <h5>EMAIL</h5> <br/>
      <h6>free@psdfreebies.com</h6>
      </div>
    </div>
    <div class="call my-2">
      <div class="icon5"></div>
      <div class="text">
      <h5>CALL US:</h5> <br/>
      <h6>+123 456 7890 <br/> +123 456 7890</h6>
      </div>
    </div>
    <div class="add">
      <div class="icon6"></div>
      <div class="text">
      <h5>ADDRESS</h5> <br/>
      <h6>123, Main Road, New City, <br/> My Country 123456</h6>
      </div>
    </div>
        </div>
        <div class="col-md-6 p82 p-5">
          <h2 className="fw-bold">SEND MESSAGE</h2>
      <div>
        <span class="label">Name</span>
        <input type="text" ref={nameRef}/>
      </div>
      <div>
        <span class="label">Email</span>
        <input type="email" ref={emailRef}/>
      </div>
      <div>
        <span class="label">Phone</span>
        <input type="number" min={10} ref={phoneRef}/>
      </div>
      <div className="msg">
        <span class="label" >Message</span>
        <input type="text" ref={msgRef}/>
      </div>
      <button onClick={showvalue}>Send</button>
        </div>
    </div>
  )
}

export default Page8b;
