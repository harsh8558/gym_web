import SlidingGallery from "./SlidingGallery";

const Gallery = ()=>{
  return(<>
    <div id="gallery" className="h-full">
      <div className="sticky flex flex-col justify-center items-center gap-4  top-16 h-full bg-black ">
        <div className="flex flex-col items-center pt-2 pb-4 text-zinc-300 font-righteous">
          <h1 className="text-4xl text-yellow-200">Take a virtual Tour</h1>
          <p>Discover your new Fitness</p>
        </div>
        <video
        className="px-4 object-cover h-96 w-11/12 md:w-11/12"
        src="https://res.cloudinary.com/dxmu1ohyk/video/upload/v1737358500/gym_web/meaeqcsg9xbn6se812nh.mov"
        autoPlay
        loop
        muted
        loading="lazy"
        playsInline
        />
      </div>
      <div className="relative  ">
        <div className="flex justify-center items-center pt-8 pb-8 bg-gray-700/80 backdrop-blur-lg text-white text-3xl">
        <h1 className="text-4xl font-righteous text-yellow-200">Picture Gallery</h1>
        </div>
          <SlidingGallery/>
        <div className="flex justify-center items-center pt-8 pb-8 bg-gray-700/80 backdrop-blur-lg">
        </div>
      </div>
    </div>
  </>)
}
export default Gallery;