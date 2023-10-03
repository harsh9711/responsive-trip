import Hero from '../Component/Hero'
import Footer from "../Component/Footer" 
import Trip from '../Component/Trip';
import img4 from  "/Users/harshsahcdeva/Desktop/projected/src/assets/6.jpg";
function Service(){
  return (
   <>
   {/* <Navbar/> */}
   <Hero
   cName="hero-mid"
   heroImg={img4}
    title="Contact"
   btnclass="hide"/>
   <Trip/>
   <Footer/>
   </>
  );
}

export default Service
