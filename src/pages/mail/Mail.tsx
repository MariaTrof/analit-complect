import { FC } from "react";
import cls from "./Mail.module.scss";
import Form from "../../components/Form/Form";

const Mail: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.head}>
        <div className={cls.title}>Связаться с нами</div>
      </div>
      <div className={cls.content}>
        <Form />
      </div>
    </div>
  );
};

export default Mail;
