import React from 'react';
import Ipad from '../images/tablet.png';
import './page4.css';

const Page4 = () => {
  return (
    <div className="page4 text-white row container-fluid p-0">
      <div className="col-md-6 left p-5">
      <h1>TYPES OF <br/> SERVICES OFFERED</h1>
          <div class="container grid">
            <div class="row row-cols-2 row-cols-auto">
              <div class="col">
                <b>ADVERTISING</b> <br/> 
                Businesses often hire agencies to produce advertising campaigns. 
                A creative agency is often better-equipped to perform the market research you need for effective advertising. 
              </div>
              <div class="col">
                <b>DESIGN</b> <br/> 
                Creative agencies can offer graphic design deliverables that abide by and reflect your brand . 
                They can be tapped to conceptualize, render, and implement a new packaging design for your products. 
              </div>
              <div class="col">
                <b>DIGITAL AND INTERACTIVE SOLUTIONS</b> <br/> 
                A creative agency can help businesses adapt to the digital age by providing them with innovative solutions. 
                Many adept agencies can design and develop websites and mobile apps for your brand.
              </div>
              <div class="col">
                <b>CONSULTING</b> <br/> 
                A creative agency can also offer consulting services to businesses. The agency, in this case, uses client data and market research to grow your business. 
                They use this insight to develop strategies for expansion to new markets. 
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-6 p-0">
          <img src={Ipad} alt="" className="img-fluid"/>
          </div>
    </div>
  )
}

export default Page4;
