import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import logo from './images/logo.png';
import Home from './comp/home.js';
import AboutUs from './comp/aboutus.js';
import Blog from './comp/blog.js';
import Services from './comp/services.js';
import ContactUs from './comp/contactus.js';
import SignIn from './comp/signin.js';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.png';

function App() {
  return (
	<Router>
	<div className="App">
	    <nav class="navbar navbar-expand-lg bg-white w-100 z-2">
            <div class="container-fluid">
              <div class="mx-5 extra"></div>
              <div class="logo">
                <img src={logo} className="mx-1"/>
                <h1>WEBPRO</h1>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <div class="m-auto"></div>
                <ul class="navbar-nav fw-bold">
                  <li class="nav-item">
                    <Link class="nav-link" to="/" href="#">HOME</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/aboutus" href="#">ABOUT US</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/blog" href="#">BLOG</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/services" href="#">SERVICES</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contactus" href="#">CONTACT US</Link>
                  </li>
                  <li class="nav-item last">
                    <Link class="nav-link" to="/signin" href="#">SIGN IN</Link>
                  </li>
                </ul>
              </div>
            </div>
      </nav>


      <div className="route-comp">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/aboutus" element={<AboutUs/>} />
          <Route exact path="/blog" element={<Blog/>} />
			    <Route exact path="/services" element={<Services/>} />
			    <Route exact path="/contactus" element={<ContactUs/>} />
          <Route exact path="/signin" element={<SignIn/>} />
        </Routes>
      </div>

      <footer className="p-5">
        <div class="box pb-5">
          <div class="col">
          <h3 className="text-white fw-bold">Resources</h3>
          <p className="m-0 text-secondary">Resource center</p>
          <p className="m-0 text-secondary">Testimonials</p>
          <p className="m-0 text-secondary">STV</p>
          </div>

          <div class="col">
          <h3 className="text-white fw-bold">Offices</h3>
          <p className="m-0 text-secondary">Chicago <br/> <b className="text-primary">+1 949.614.0759</b></p>
          <p className="m-0 text-secondary">New York <br/> <b className="text-primary">+1 646.351.0639</b></p>
          </div>

          <div class="col">
          <h3 className="text-white fw-bold">Partners</h3>
          <p className="m-0 text-secondary">Huddle</p>
          <p className="m-0 text-secondary">Column Five</p>
          <p className="m-0 text-secondary">Influencer Marketing Hub</p>
          </div>

          <div class="col">
          <h3 className="text-white fw-bold">Follow us on social</h3>
          <div className="d-flex mt-3">
            <a href="https://twitter.com" ><img src={twitter} className="mx-2"/></a>
            <a href="https://www.facebook.com"><img src={facebook} className="mx-2"/></a>
            <a href="https://in.linkedin.com"><img src={linkedin} className="mx-2"/></a>
            <a href="https://www.instagram.com"><img src={instagram} className="mx-2"/></a>
          </div>
          </div>
        </div>
      
      <hr className="text-white border-3"/>
      <ul class="nav position-relative start-50 translate-middle-x">
      <li class="nav-item">
        <a class="nav-link link-light text-decoration-none fw-bold mx-2" href="#">@2023 Webpro. All rights reserved.</a>
      </li>

        <li class="nav-item first">
        <a class="nav-link link-light text-decoration-none fw-bold mx-2" href="#">Terms & Conditions</a>
        </li>

        <li class="nav-item">
        <a class="nav-link link-light text-decoration-none fw-bold mx-2" href="#">Privacy</a>
        </li>

        <li class="nav-item">
        <a class="nav-link link-light text-decoration-none fw-bold mx-2" href="#">Security</a>
        </li>

        <li class="nav-item">
        <a class="nav-link link-light text-decoration-none fw-bold mx-2" href="#">Cookie Declaration</a>
        </li>
      </ul>
      </footer>
	</div>
	</Router>
  );
}

export default App;
