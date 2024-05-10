import { FC } from "react";
import cls from "./NavBar.module.scss";
import { Carousel } from "antd";
import Img1 from "../../assets/alexandre-lecocq-k8kogBkUWCk-unsplash.jpg";
import Img2 from "../../assets/adriel-kloppenburg-en-5xoYnjTE-unsplash.jpg";
import Img3 from "../../assets/chris-barbalis--nYBR0LFTvQ-unsplash.jpg";
import Img4 from "../../assets/dawid-zawila-9d33wIMMzoE-unsplash.jpg";
import Img5 from "../../assets/chris-barbalis-doicC_ATzkQ-unsplash.jpg";

const NavBar: FC = () => {
  return (
    <div className={cls.box}>
      <div className={cls.container}>
        <div className={cls.carousel}>
          <Carousel autoplay className={cls.ant_component}>
            <div>
              <img src={Img1} alt="Image 1" className={cls.images} />
            </div>
            <div>
              <img src={Img2} alt="Image 2" className={cls.images} />
            </div>
            <div>
              <img src={Img3} alt="Image 3" className={cls.images} />
            </div>
            <div>
              <img src={Img4} alt="Image 4" className={cls.images} />
            </div>
            <div>
              <img src={Img5} alt="Image 5" className={cls.images} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
