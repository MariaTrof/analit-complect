import { FC } from "react";
import cls from "./Contacts.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Contacts: FC = () => {
  return (
   <>
   <div className={cls.page_title}>Конктактная информация</div>
      <div className={cls.container}> 
      <div className={cls.text_block}>
       <div className={cls.title}>Адресс:</div>
        <div className={cls.text}>
           <br/>
          Наш Адресс: Кронштадтский бульвар, 7Ас1, Москва, 125212
          <br />
          Часы Работы:
          9.00 - 17.00
          <br/>

         <div className={cls.title}>Прочая информация</div> 
          <br/>
         Наш телефон +7 499 270 05 91
          <br/>  Почта: ak405@inbox.ru
        </div>
      </div>

      <div className={cls.map}>
        <div className={cls.mapBox}>
          <YMaps>
            <Map
              defaultState={{
                center: [55.842382, 37.48706],
                zoom: 17,
              }}
            >
              <Placemark geometry={[55.842382, 37.48706]}  />
            </Map>
          </YMaps>
        </div>

      </div>
    </div>
   </>
    
  );
};
export default Contacts;
