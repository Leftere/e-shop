

import slide1Desktop from "../../assets/slider-imgs/desktop/spring-collection-2019-desktop.jpg";
import slide2Desktop from "../../assets/slider-imgs/desktop/short-sleeves-2019-desktop.jpg";
// top slider mobile photos
import slide1Mob from "../../assets/slider-imgs/mobile/spring-collection-2019-mobile.jpg";
import slide2Mob from "../../assets/slider-imgs/mobile/short-sleeves-2019-mobile.jpg";
// bottom slider desktop photos
import shirts1Desktop from "../../assets/slider-imgs/desktop/Before_and_After_Ash_Erie_Desktop.jpg";
import shirts2Desktop from "../../assets/slider-imgs/desktop/Before_and_After_Traditional_Desktop.jpg";
// bottom slider mobile photos
import shirts1Mobile from "../../assets/slider-imgs/mobile/Before_and_After_Ash_Erie_Mobile.jpg";
import shirts2Mobile from "../../assets/slider-imgs/mobile/Before_and_After_Traditional_Mobile.jpg";

     let slider1 = [
        { url : slide1Desktop,
            mobileUrl : slide1Mob,
           },
          { url : slide2Desktop,
            mobileUrl : slide2Mob 
          },
     ]

     let slider2 = [
        { url : shirts1Desktop,
            mobileUrl: shirts1Mobile }, 
        {url: shirts2Desktop, 
            mobileUrl: shirts2Mobile} 
     ]

     let images = [slider1, slider2];

export default images;