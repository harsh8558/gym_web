import AOS from "aos";

import { useEffect } from "react";
const FacilitiesCard = ({url,facility})=>{
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 150,
      delay: 100,
      once: true, // Whether animation should happen only once
    });
  }, []);
  
  return(<>
    <div 
      data-aos="fade-up"
      className=" relative w-11/12   h-80 rounded-2xl  bg-black">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat shadow-md  opacity-60 rounded-2xl" 
        style={{backgroundImage:`url(${url})`, filter: 'brightness(0.7) contrast(1.2)' , loading:"lazy"}}></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-slate-100 font-righteous text-2xl">{facility} <br/> AREA</div>
    </div>
  </>)
}
export default FacilitiesCard;