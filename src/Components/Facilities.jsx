import FacilitiesCard from "./FacilitiesCard";
const Facilities = ()=>{
  return(<>
    <div id="facilities" className="relative">
      <div className="pt-14 pb-4 flex flex-col md:flex-row justify-between items-center bg-gradient-to-t from-transparent/95 to-red-900  gap-4">
      <h1 className="w-11/12 pt-2 pb-6 text-3xl font-righteous text-slate-200 ">Experience the Ultimate <span style={{color:'red'}}>Fitness</span>  Playground</h1>
      <FacilitiesCard url='cardio.webp' facility='CARDIO'/>
      <FacilitiesCard url='deadlift.webp' facility='DEADLIFT'/>
      <FacilitiesCard url='strength.jpeg' facility='STRENGTH'/>
      <FacilitiesCard url='zumba.webp' facility='ZUMBA CLASSES'/>
      <FacilitiesCard url='crossfit.webp' facility='CROSSFIT'/>
      <FacilitiesCard url='yoga.webp' facility='YOGA CLASSES'/>
      </div>
    </div>
  </>)
}
export default Facilities;