import React from "react";
import './End.css'

function End() {
  return (
    <>
     <div className='end12'
                style={{
                    display: "flex", 
                    flexDirection: "row", 
                    height: "400px", 
                    
                   
                }}
            >
                <div
                    style={{
                        flex: 1, 
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="location" style={{ height: "450px", textAlign: "center" }}>
                        <h2>
                            Store Location</h2>
                        <p className='para1' style={{ marginTop: "25px" }}>
                            500 Terry Francine Street <br />
                            San Francisco, CA 94158 <br />
                            info@mysite.com <br />
                            123-456-7890</p>
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="location" style={{ height: "450px", textAlign: "center" }}>
                        <h2>
                            Shop</h2>
                        <p className='para' style={{ marginTop: "25px", fontSize: "20px" }}>
                            <p className='para2'>Shop All</p> 
                            <p className='para2'>Computer</p> 
                            <p className='para2'>Tablets</p> 
                            <p className='para2'>Drons & Cameras</p> 
                            <p className='para2'>Mobiles</p> 
                            <p className='para2'>Sale</p></p>
                    </div>
                </div>
                <div 
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="location" style={{ height: "450px", textAlign: "center" }}>
                        <h2>
                            Customer Support</h2>
                        <p className='para' style={{ marginTop: "25px", fontSize: "20px" }}>
                        <p className='para2'>Shop All</p> 
                            <p className='para2'>Contact Us</p> 
                            <p className='para2'>Help Centre</p> 
                            <p className='para2'>About Us</p> 
                            <p className='para2'>Careers</p> 
                            </p>
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="location" style={{ height: "450px", textAlign: "center" }}>
                        <h2>
                            Policy</h2>
                        <p className='para' style={{ marginTop: "25px", fontSize: "20px" }}> 
                            <p className='para2'>Shipping & Returns</p> 
                            <p className='para2'>Terms & Condition</p> 
                            <p className='para2'>Payment Method</p> 
                            <p className='para2'>FAQ</p> 
                            </p>
                    </div>

                   
                </div>
                
            </div>
            <div className='end2' style={{height:"50px", width:"100%" ,backgroundColor:"grey",textAlign:"center"}}>
                <p style={{color:"white",fontSize:"20px"}}>© 2025 by TechShop. Powered and secured by Pvt. Ltd.</p>
                <p style={{backgroundColor:"black"}}>Designed by @vaibhav_7135_</p>

            </div>
    
    </>
  );
}
export default End;