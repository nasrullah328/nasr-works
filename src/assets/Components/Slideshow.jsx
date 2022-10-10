import SimpleImageSlider from "react-simple-image-slider";
import iphone12 from '../images/iphone1.jpg'
import iphone2 from '../images/iphone2.jpg'
import Samsung1 from '../images/samsung1.jpg'
import Samsung2 from '../images/samsung2.jpg'
import Samsung3 from '../images/samsung3.jpg'
import vivo1 from '../images/vivo1.jpg'
import mi1 from '../images/mi1.jpg'
import './Slideshow.css'
import './Typed'
import Typed from 'react-typed';

const Slideshow = () => {
  const images = [
    { url: iphone12 },
    { url:  Samsung1 },
    { url: iphone2 },
    { url: vivo1 },
    { url: mi1 },
    { url: Samsung2 },
    { url: Samsung3 },
  ];
return (
  <div className="Typed-Slideshow">
    <div className="typed">
                <p className='para'>
                    Buy your dream phone from our website
                </p>   
    <Typed className="Names"
            strings={['Iphone', 'Samsung', 'MI' , 'vivo']}
                typeSpeed={120}
                backSpeed={120}
                loop
            />
    </div>
    <div className="img-prop">
      <SimpleImageSlider className='properties'
        width={1518}
        height={620}
        images={images}
        showBullets={true}
       showNavs={true}
      autoPlays={true}
      />
    </div>
    </div>
  
  );
}
export default Slideshow;