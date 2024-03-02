import React from 'react';
import './page3.css';

const Page3 = () => {
  return (
    <div className="page3">
      <div class="extra"></div>
      <div className="row">
      <div class="col-md-4 text-center">
          <h1>WHAT MAKES US AWESOME?</h1>
        </div>
        <div class="col-md-8">
          <div class="rect">
            <div class="icon1"></div>
            <h1>Superior <br/> Quality</h1>
            <p>
            We have a team of talented professionals who are passionate about their work. 
            They take pride in their work and always strive to produce the highest quality results.
            </p>
          </div>
          <div class="rect">
            <div class="icon2"></div>
            <h1>Comprehensive <br/> Services</h1>
            <p>
            We offer a wide range of services, so you can get everything you need from one source. 
            This can save you time and money, and it ensures that all your marketing needs are taken care of.
            </p>
          </div>
          <div class="rect">
            <div class="icon3"></div>
            <h1>Strong <br/> Network</h1>
            <p>
            We have a large network of contacts and resources. 
            They can connect you with the right people and help you get your message out to the right audience.
            </p>
          </div>
        </div>
        </div>
        <div class="extra"></div>
    </div>
  )
}

export default Page3;
