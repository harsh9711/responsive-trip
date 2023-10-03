import Hero from '../Component/Hero'
import Contactform from "../Component/Contactform"
import img2 from  "/Users/harshsahcdeva/Desktop/projected/src/assets/4.jpg";
import Footer from "../Component/Footer" 
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
