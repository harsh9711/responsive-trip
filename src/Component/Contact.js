import Hero from './Hero'
import Contactform from "./Contactform"
import img2 from  "/Users/harshsahcdeva/Desktop/projected/src/assets/4.jpg";
import Footer from "./Footer" 
function Contact(){
  return (
   <>
   <Hero
   cName="hero-mid"
   heroImg={img2}
    title="Contact"
   btnclass="hide"/>
   <Contactform/>
<Footer/>
   </>
  );
}

export default Contact
