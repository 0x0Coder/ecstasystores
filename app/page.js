
import Carousel from "./components/Carousel";
import BlackFridayCards from "./components/BlackFridayCards";
import LandingPageVideo from "./components/LandingPageVideo";
import LandingPageAd from "./components/LandingPageAd";


export default function Page() {
  return (
   
    <div className='bg-white'>
      <Carousel/>
      <BlackFridayCards/>
      <LandingPageVideo/>
      <LandingPageAd/>
      
 
    
    </div>
  
  );
}
