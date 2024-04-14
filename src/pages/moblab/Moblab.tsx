import { FC } from "react";
import cls from "./Moblab.module.scss";
import Mob1 from "../../assets/IMG_20181101_101354.jpg";
import Mob2 from "../../assets/IMG_20181029_151032.jpg";

const Moblab: FC = () => {
  return (
    <>
      <div className={cls.container}>
       
        <div className-={cls.content}>  
        <div className={cls.title}>Мобильная Лаборатория</div>
          <div className={cls.text}> 
        <p className={cls.text_box}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            maximus tincidunt facilisis. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Vivamus diam tellus,
            luctus a sapien vitae, elementum mollis dui. Etiam maximus ante eu
            ligula placerat, nec suscipit ex viverra. Nulla lorem magna, lacinia
            molestie rhoncus in, placerat ut sem. Aliquam ut purus nisl. Mauris
            eu tortor nec nisi dapibus mattis. Cras vitae vehicula tellus,
            fermentum ultricies diam. Vivamus sit amet lorem vel turpis
            scelerisque malesuada non sit amet sem. Aliquam in efficitur libero.
            Fusce vitae urna vitae ex sollicitudin semper ac at ante. Sed ut
            ligula tempus, hendrerit massa at, varius orci. Fusce eros dolor,
            aliquet non tristique et, euismod ac orci. Pellentesque vulputate
            ante vitae enim sagittis, nec mollis erat sagittis. Vestibulum
            cursus, nibh sed pretium fermentum, libero arcu scelerisque orci,
            sed facilisis nunc neque vel tortor. Morbi sed ligula ullamcorper,
            auctor urna auctor, lacinia erat.
            <br />
            Pellentesque et mauris vel risus volutpat ultricies at et orci.
            Morbi semper magna ac lobortis luctus. Aliquam venenatis condimentum
            tincidunt. Phasellus nibh massa, pellentesque a felis quis,
            vestibulum imperdiet nisi. Cras sollicitudin odio sed elit pretium
            molestie. Donec dapibus mattis massa ac vulputate. Morbi sed magna
            eu ligula lacinia aliquam nec et purus. Donec orci lorem, rhoncus
            sed sem in, vulputate tempor lorem. Duis sit amet imperdiet eros.
        </p>
            
           <div className={cls.pic}>
            <img src={Mob1} className={cls.images} />
            <img src={Mob2} className={cls.imga} />
          </div> 
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default Moblab;
//
