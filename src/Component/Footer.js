import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai';
import "../Styles/Footer.css"
const Footer = () => {
  return (
    <div>
     <div className="footer">
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose your favourite destination</p>
            </div>
            <div>
            <a href="/">
           <i><AiOutlineFacebook/></i> 
            </a>
            <a href="/">
            <i><BsInstagram/></i> 
            </a>
            <a href="/">
            <i><AiFillTwitterSquare/></i> 
              </a>
            </div>
        </div>
       
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div><div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">TroubleShooting</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of Services</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
            </div>

        </div>
    </div>
    </div> 
  )
}

export default Footer
