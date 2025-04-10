import React from "react";
import "./Footer.css";

function Footer() {

    
        const handleScroll = () => {
            window.scrollBy({
              top: 800, 
              behavior: "smooth",
            });
          };
        
return(
    <>
    <div className="footer">

<img src="https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1508,h_706,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png" alt="" />
          
            <h1 className="imgontext">Incredible Prices <br /> on All Your <br />Favorite Items
            <p>Get More for less on selected brands</p>
            </h1>

          <button onClick={handleScroll} className="getstarted">Get Started</button>
    </div>
    
    </>
)

}
export default Footer;