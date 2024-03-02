import React from 'react';
import crbg from '../images/page2.jpg';
import './page2.css';

const Page2 = () => {
  return (
    <div className="page2 row text-white mt-5">
        <div class="col-md-6">
          <img src={crbg} class="img-fluid"/>
        </div>
        <div class="col-md-6 p-5">
          <h1>WHAT IS A <br/> CREATIVE AGENCY?</h1>
          <p>A creative agency consists of one or more teams of experts in different fields. The agency may specialize in advertising, design, technology, strategy, 
            or offer all of the above. Their teams often include copywriters, graphic designers, web developers, consultants and strategists, and data visualization experts. <br/> <br/>
  
            A creative agency can offer you the services you need to optimize your business’ marketing and advertising efforts, among other avenues for growth. 
            This agency can be tasked to develop strategies for improving customer service and increasing revenue. It can develop campaigns to widen your market base. It can also integrate technological solutions to better promote brands and enhance customer experience.</p>
        </div>
    </div>
  )
}

export default Page2;
