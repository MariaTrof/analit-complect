import { FC } from "react";
import cls from "./Contacts.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Link } from "react-router-dom";

const Contacts: FC = () => {
  return (
    <>
      <div className={cls.container}>
        <div className={cls.head}>
          <div className={cls.main_title}>Конктактная информация</div>
        </div>

        <div className={cls.text_block}>
          <div className={cls.text}>
            <div className={cls.title}>Адрес:</div>
            <br />
            Наш Адрес: 125212, г. Москва, Кронштадтский бульвар, 7А, офис 315
            <br />
            Часы Работы: 9.00 - 17.00
            <br />
            <div className={cls.title}>Прочая информация</div>
            <br />
            Наш телефон +7 499 270 05 91
            <br /> Почта: ak405@inbox.ru
            <div className={cls.email}>
              <Link to="/mail" className={cls.link}>
                Написать нам на Почту{" "}
              </Link>
            </div>
          </div>

          <div className={cls.mapBox}>
            <YMaps>
              <Map
                defaultState={{
                  center: [55.842382, 37.48706],
                  zoom: 17,
                }}
              >
                <Placemark geometry={[55.842382, 37.48706]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
