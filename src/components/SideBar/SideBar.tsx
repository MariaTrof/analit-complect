import { FC } from "react";
import cls from './SideBar.module.scss';
import { Link } from "react-router-dom";


const SideBar: FC =  () => {
    return(
        <div className={cls.container}>
            <div className={cls.box}>
                <div className={cls.list}>
                    <ul className={cls.links}>
                        <Link to="/contacts" className={cls.link}>Контактная Информация</Link><br/>
                        <Link to="/about" className={cls.link}>О компании</Link><br/>
                         <Link to="/moblab" className={cls.link}>Мобильная Лабратория</Link><br/>
                        <Link to="/service" className={cls.link}>Технического Обслуживание</Link><br/>
                         <Link to="/system" className={cls.link}>Системы Экологического <br/> Мониторинга</Link><br/>
                        <Link to="/engineer" className={cls.link}>Инженеринг</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;