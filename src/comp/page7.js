import React from 'react';
import './page7.css';
import blogimg1 from '../images/blogimg1.png';
import blogimg2 from '../images/blogimg2.png';
import blogimg3 from '../images/blogimg3.png';
import blogimg4 from '../images/blogimg4.png';
import blogimg5 from '../images/blogimg5.png';
import blogimg6 from '../images/blogimg6.png';
import blogimg7 from '../images/blogimg7.png';
import blogimg8 from '../images/blogimg8.png';

const Page7 = () => {
  return (
    <div className="page7 px-5 pb-5">
            <div class="m-4 border cd">
              <img src={blogimg1} alt="" class="h-50 w-100"/>
              <h4 class="p-3">7 Branding & Rebranding KPIs to Measure Your Success</h4>
            </div>

            <div class="m-4 border cd">
              <img src={blogimg2} alt="" class="h-50 w-100"/>
              <h4 class="p-3">5 Brand Refresh Examples That Got It Right</h4>
            </div>

            <div class="m-4 border cd">
              <img src={blogimg3} alt="" class="h-50 w-100"/>
              <h4 class="p-3">Brand Refresh vs Rebrand: Which One Do You Need?</h4>
            </div>

              <div class="m-4 border cd">
                <img src={blogimg4} alt="" class="h-50 w-100"/>
                <h4 class="p-3">Is Rebranding Worth the Investment? Why Rebrand Now?</h4>
              </div>
            
              <div class="m-4 border cd">
                <img src={blogimg5} alt="" class="h-50 w-100"/>
                <h4 class="p-3">Your Brand Strategy Framework: How It All Fits Together</h4>
              </div>

              <div class="m-4 border cd">
                <img src={blogimg6} alt="" class="h-50 w-100"/>
                <h4 class="p-3">The 13 Types of Branding: Explained</h4>
              </div>

              <div class="m-4 border cd">
                <img src={blogimg7} alt="" class="h-50 w-100"/>
                <h4 class="p-3">Your Complete Guide To Branding For Startups</h4>
              </div>

              <div class="m-4 border cd">
                <img src={blogimg8} alt="" class="h-50 w-100"/>
                <h4 class="p-3">How To Measure the True ROI of Branding</h4>
              </div>
    </div>
  )
}

export default Page7;
