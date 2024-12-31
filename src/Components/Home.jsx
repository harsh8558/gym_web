import WhatsappBtn from "./WhatsappBtn";

const Home = ()=>{
  return(<>
    <div id="home" className="sticky top-0 left-0 w-full h-screen">
      <video
        className="absolute  top-0 left-0 w-full h-full object-cover  "
        src="../public/intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: 'brightness(1.7) contrast(1.2)' }}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-righteous font-bold animate-bounce drop-shadow-lg">Welcome to Our Gym</h1>
        <p className="font-righteous mt-4 text-lg md:text-2xl">Achieve your fitness goals with us</p>
        <button className="mt-6 px-5 py-4 bg-red-600 hover:bg-red-700 rounded-sm shadow-lg text-white transform transition-transform hover:scale-105">
          Join Now
        </button>
      </div>
    </div>
    <WhatsappBtn/>    
  </>)
}
export default Home;