import FacilitiesCard from "./FacilitiesCard";
const Facilities = ()=>{
  return(<>
    <div id="facilities" className="relative h-full pt-16 px-2  bg-gradient-to-t from-transparent/95 to-red-900">
    <h1 className=" pb-6 text-4xl font-righteous text-yellow-200 ">Experience the Ultimate <span style={{color:'red'}}>Fitness</span>  Playground</h1>
      <div className=" flex flex-col md:flex-row justify-between items-center px-1 pb-4 gap-4">
      
      <FacilitiesCard url='https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/qmivb8u55ibjbaoyuyi9' facility='CARDIO'/>
      <FacilitiesCard url='deadlift.webp' facility='DEADLIFT'/>
      <FacilitiesCard url='strength.jpeg' facility='STRENGTH'/>
      <FacilitiesCard url='zumba.webp' facility='ZUMBA CLASSES'/>
      <FacilitiesCard url='crossfit.webp' facility='CROSSFIT'/>
      <FacilitiesCard url='https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/qonnwvsk9egqhyw2xfcf' facility='YOGA CLASSES'/>
      </div>
    </div>
  </>)
}
export default Facilities;