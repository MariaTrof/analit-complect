import { FC, PropsWithChildren } from "react";
import cls from "./NavBar.module.scss";
import { Carousel } from "antd";
import Img1 from "../../assets/tock1.jpg";
import Img2 from "../../assets/tock2.jpg";
import Img3 from "../../assets/tock3.jpg";

const NavBar: FC<PropsWithChildren> = () => {
  return (
  <div className={cls.box}>

    <div className={cls.container}>
          <Carousel autoplay className={cls.images}>
  <div>
  <img src={Img1} alt="Image 1" className={cls.images} />
</div>
<div>
  <img src={Img2} alt="Image 2" className={cls.images}/>
</div>
<div>
  <img src={Img3} alt="Image 3" className={cls.images}/>
</div>

  </Carousel>
          
    
    </div> 
    </div>
  );
};

export default NavBar;
