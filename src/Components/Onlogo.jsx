import { useEffect, useState, useRef } from "react";

const Onlogo = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            
            const rect = imageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            
            if (elementCenter > windowHeight * 0.25 && elementCenter < windowHeight * 0.75) {
                setIsExpanded(true);
            } else {
                setIsExpanded(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-screen bg-black">
            <div className="flex justify-center items-center h-full">
              <div className={`bg-white transition-all duration-500 ease-in-out object-contain
                        ${isExpanded 
                            ? 'w-full h-1/2 rounded-none object-contain' 
                            : 'w-[100px] h-[100px] rounded-full object-contain'
                        }`}>

                        <img
                          ref={imageRef}
                          src="https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/e89ubjwy0toalapezfmi"
                          // className={`transition-all duration-500 ease-in-out object-contain
                          //     ${isExpanded 
                          //         ? 'w-full h-1/2 rounded-none object-contain' 
                          //         : 'w-[100px] h-[100px] rounded-full object-contain'
                          //     }`}
                          className="w-full h-1/2"
                          alt="logo"
                        />
                </div>
                
            </div>
        </div>
    );
};

export default Onlogo;