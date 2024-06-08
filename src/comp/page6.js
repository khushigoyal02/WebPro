import React from 'react';
import './page6.css';
import pic from '../images/servicepic.png';

const Page6 = () => {
  return (
    <div className="page6 text-white row container-fluid p-0">
      <div className="col-md-6 p-0">
        <img src={pic} alt="" className="img-fluid"/>
      </div>
          <div class="col-md-6 right p-5">
          <h1>HOW WE CAN <br/> HELP YOUR BRAND?</h1>
          <div class="para">
          <div class="col">
            <b>Provide a fresh, unbiased perspective</b> <br/>
            A creative agency offers fresh insight that can improve your marketing strategy and help achieve your business goals faster. 
            Its strategies are based on thorough market research so appropriate measures can be taken to build your business.
          </div>
          <div class="col">
            <b>Deliver efficient and effective performance</b> <br/>
            Small businesses that can’t afford their own marketing team have the most to gain from a creative agency. 
            A proven team of experts can craft and execute strategies for growth better than freelance consultants and creatives.
          </div>
          <div class="col">
            <b>Access to industry knowledge</b> <br/>
            Creative agencies work with different clients from various industries. They have access to the latest practices in each industry and know what would work best for each business. 
            They have a better understanding of which strategies would work for a certain niche and which ones would be ineffective.
          </div>
          </div>
          </div>
    </div>
  )
}

export default Page6;
