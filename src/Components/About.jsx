const About = ()=>{
  return(<>
    <div id="about" className="md:hidden h-full px-2 pt-16 relative bg-gradient-to-t from-red-900 to-transparent/95">
      <h1 className="text-4xl text-yellow-200 pb-4 font-righteous">Energy Fitness Gym</h1>
      <div className="relative">
        {/* Background image container with reduced opacity */}
        <div className="absolute inset-0 bg-[url('../public/logo.png')] opacity-40 bg-no-repeat bg-contain bg-center"></div>
        {/* Text content with full opacity */}
        <div className="relative z-10 text-xl bg-black/50 font-righteous text-stone-300 rounded-xl p-4">
          Welcome to Energy Fitness Gym, your premier destination for fitness and wellness! Our state-of-the-art facility is equipped with top-notch equipment and staffed by expert trainers who are dedicated to helping you reach your health and fitness goals. Whether you're a seasoned athlete or just starting out on your fitness journey, our gym offers a supportive and motivating environment to help you push yourself to new heights. From cardio and strength training to group fitness classes and personalized coaching, we have everything you need to achieve a stronger, healthier, and happier you!
        </div>
        <div></div>
      </div>
    </div>
    <div id="about" className="hidden md:block md:h-full px-2 pt-16 relative bg-gradient-to-t from-red-900 to-transparent/95">
      <h1 className="text-4xl text-yellow-200 pb-4 font-righteous">Energy Fitness Gym</h1>
      <div className="relative">
        <div className="flex justify-between">
          <div className="  w-3/4  flex justify-center items-center text-xl bg-black/50 font-righteous text-stone-300 rounded-md overflow-hidden p-4">
            Welcome to Energy Fitness Gym, your premier destination for fitness and wellness! Our state-of-the-art facility is equipped with top-notch equipment and staffed by expert trainers who are dedicated to helping you reach your health and fitness goals. Whether you're a seasoned athlete or just starting out on your fitness journey, our gym offers a supportive and motivating environment to help you push yourself to new heights. From cardio and strength training to group fitness classes and personalized coaching, we have everything you need to achieve a stronger, healthier, and happier you! Welcome to Energy Fitness Gym, your premier destination for fitness and wellness! Our state-of-the-art facility is equipped with top-notch equipment and staffed by expert trainers who are dedicated to helping you reach your health and fitness goals. Whether you're a seasoned athlete or just starting out on your fitness journey, our gym offers a supportive and motivating environment to help you push yourself to new heights. From cardio and strength training to group fitness classes and personalized coaching, we have everything you need to achieve a stronger, healthier, and happier you!
          </div>
          <div className=" rounded-md bg-black/50 flex justify-center">
            <img 
              src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1735647349/gym_web/e89ubjwy0toalapezfmi.png"
              className="w-1/2 opacity-50 bg-no-repeat bg-contain bg-center"/>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default About;