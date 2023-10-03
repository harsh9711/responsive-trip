import React from 'react'
import Hero from '../Component/Hero'
import Trip from '../Component/Trip'
import Navbar from '../Component/Navbar';
import img1 from "/Users/harshsahcdeva/Desktop/projected/src/assets/1.jpg"
import Destination from '../Component/Destination';
import Footer from '../Component/Footer';
function Home(){
  return (
   <>
   {/* <Navbar/> */}
   <Hero
   cName="hero"
   heroImg={img1}
    title="Your Journey Your Storey"
   text="Choose Your Favourite Destination"
   buttontext="Travel Plan"
   url="/"
   btnclass="show"/>
   <Destination/>
   <Trip/>
   <Footer/>
   </>
  );
}

export default Home
