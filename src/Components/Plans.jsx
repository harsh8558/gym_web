import { NavLink } from "react-router-dom";
import ContactForm from "./ContactForm";
import PlansCard from "./PlansCard";
const Plans = ()=>{
  return(<>
  <div className="fixed z-50  bg-transparent/80 top-0 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <img 
          src="https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/tg5jgaqux1zezwel89ha" 
          className={`w-auto h-16 p-2 md:p-0.5`} 
          data-aos="fade-left"/>
        <NavLink 
          to="/home"  
          className=" text-white shadow-md px-4 bg-red-500 py-2 block hover:bg-red-700">
          Home
        </NavLink>
      </div>
    </div>
  </div>
  <div className="relative h-full pt-16 bg-gradient-to-br from-red-500 via-black to-black">
    <div className=" p-6 text-black font-righteous">
      <h1 className="text-3xl text-yellow-200 ">Find the Perfect Membership for You</h1>
      <p className="font-thin text-gray-200 pt-4 pb-4">Choose the plan that suits your fitness journey!</p>
      <div className="flex flex-col justify-center items-center gap-8">
        {/* Card */}
        <PlansCard time='12' price='12,000'/>
        <PlansCard time='6' price='7,500'/>
        <PlansCard time='3' price='4,500'/>
        <PlansCard time='1' price='2,000'/>
      {/*Card  */}
    </div>
  </div>
  <ContactForm/>
  </div>
  </>)
}
export default Plans;