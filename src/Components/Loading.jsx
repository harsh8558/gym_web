//import logo from "../public/logo.png";
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  z-50">
      <div className="relative">
        {/* Glowing Ring */}
        <div className="absolute inset-0 w-28 h-28 rounded-full border-4 border-transparent border-t-red-500 border-b-gray-400 animate-glow"></div>
        {/* Pulsing Logo */}
        <img
          src='https://res.cloudinary.com/dxmu1ohyk/video/upload/f_auto:video,q_auto/v1/gym_web/jkzb7pbyxti3i2nqkzuq'
          alt="Loading"
          className="relative w-28 h-28 animate-pulse-shadow"
        />
      </div>
    </div>
  );
};
export default Loading;
