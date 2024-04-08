import { FC } from "react";
import cls from './SideBar.module.scss';


const SideBar: FC =  () => {
    return(
        <div className={cls.container}>
            <div className={cls.box}>
                <div className={cls.list}>
                    <ul className={cls.links}>
                        <a className={cls.link}>Контактная Информация</a><br/>
                        <a className={cls.link}>О компании</a><br/>
                         <a className={cls.link}>Мобильная Лабратория</a><br/>
                        <a className={cls.link}>Технического Обслуживание</a><br/>
                         <a className={cls.link}>Системы Экологического <br/> Мониторинга</a><br/>
                        <a className={cls.link}>Инженеринг</a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;