import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
const WhatsappBtn = ()=>{
  return(<>
    <div className="fixed z-10 bottom-4 right-4">
      <a
        href="https://wa.me/919219353574?text=Hi%20there!%20I%20need%20help%20with%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white  animate-bounce rounded-full shadow-lg hover:bg-green-600"
      >
        <FontAwesomeIcon icon={faWhatsapp} className='text-3xl'/>
      </a>
    </div>
    <div className="fixed z-10 bottom-4 left-4">
      <a
        href="https://wa.me/919219353574?text=Hi%20there!%20I%20need%20help%20with%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white  animate-bounce rounded-2xl shadow-lg "
      >
        <FontAwesomeIcon icon={faInstagram} className='text-4xl'/>
      </a>
    </div>
  </>)
}
export default WhatsappBtn;