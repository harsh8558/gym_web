import SlidingGallery from "./SlidingGallery";

const Gallery = ()=>{
  return(<>
    <div id="gallery" className="h-full">
      <div className="sticky flex flex-col justify-center items-center gap-4  top-16  h-1/2 bg-lime-700 ">
        <div className="flex flex-col items-center pt-2 pb-4 text-zinc-300 font-righteous">
          <h1 className="text-3xl ">Take a virtual Tour</h1>
          <p>Dicrover your new Fitness</p>
        </div>
        <video
        className=" px-4 object-contain bg-gradient-to-l from-black via-transparent to-black"
        src="https://res.cloudinary.com/dxmu1ohyk/video/upload/f_auto:video,q_auto/v1/gym_web/jkzb7pbyxti3i2nqkzuq"
        autoPlay
        loop
        muted
        playsInline
        />
      </div>
      <div className="relative  ">
        <div className="flex justify-center items-center pt-8 pb-8 bg-lime-300/35 backdrop-blur-sm text-white text-3xl">
        30% OFF
        </div>
          <SlidingGallery/>
        <div className="flex justify-center items-center pt-8 pb-8 bg-zinc-300/40">
        30% OFF
        </div>
      </div>
    </div>
  </>)
}
export default Gallery;