import Hero from '../Component/Hero'
import Footer from "../Component/Footer" 
import Aboutus from '../Component/Aboutus';
import img2 from  "/Users/harshsahcdeva/Desktop/projected/src/assets/3.jpg";
function About(){
  return (
   <>
   {/* <Navbar/> */}
   <Hero
   cName="hero-mid"
   heroImg={img2}
    title="About"
   btnclass="hide"/>
   <Aboutus/>
   <Footer/>
   </>
  );
}

export default About
