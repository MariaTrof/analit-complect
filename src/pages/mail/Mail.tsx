import { FC } from "react";
import cls from "./Mail.module.scss";

const Mail: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.title}>Связаться с нами!</div>
      <form className={cls.form}>
        <div className={cls.input}>
          <input type="text" placeholder="email" className={cls.inputarea} />
          <input type="text" placeholder="телефон" className={cls.inputarea} />
          <input type="text" placeholder="ФИО" className={cls.inputarea} />
        </div>
        <div className={cls.text}>
          <textarea placeholder="Введите сообщение" className={cls.textarea} />
        </div>
      </form>
      <button className={cls.btn}>Отправить</button>
    </div>
  );
};

export default Mail;
