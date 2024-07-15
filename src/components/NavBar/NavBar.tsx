import { FC } from "react";
import cls from "./NavBar.module.scss";
import { Carousel } from "antd";
import Img1 from "../../assets/dan-roizer-GygPFmXGD1o-unsplash.jpg";
import Img2 from "../../assets/thibaut-marquis.jpg";
import Img3 from "../../assets/philipp-reiner-jyMTzkGK-qc-unsplash.jpg";
import Img4 from "../../assets/kristaps-ungurs-kYN0KehKdBY-unsplash.jpg";
import Img5 from "../../assets/mick-haupt-GaUFhztFaZg-unsplash.jpg";
import Img6 from "../../assets/peter-lloyd-rRWyOn9gat4-unsplash.jpg";
import Img7 from "../../assets/emran-hatamleh-_IReRWgIWRo-unsplash.jpg";



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
                <div>
              <img src={Img6} alt="Image 5" className={cls.images} />
            </div>
                <div>
              <img src={Img7} alt="Image 5" className={cls.images} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
