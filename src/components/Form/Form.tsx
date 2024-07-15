import { FC, useState } from "react";
import emailjs from "@emailjs/browser";
import cls from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal } from "antd";

interface FormValues {
  email: string;
  phone: string;
  name: string;
  message: string;
}

const Form: FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const schema = z.object({
    email: z.string().email({ message: "Введите корректную почту" }),
    phone: z.string().min(10, { message: "Введите корректный номер" }),
    name: z.string().min(5, { message: "Введите ФИО" }),
    message: z.string().min(15, { message: "Введите Сообщение" }),
  });

  type CreateValidationSchema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateValidationSchema>({
    defaultValues: {
      email: "",
      phone: "",
      name: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  const errorStyle = {
    color: "red",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "0.75rem",
    padding: "4px",
  };

  function sendEmail(data: FormValues): Promise<void> {
    return new Promise((resolve, reject) => {
      emailjs
        .send(
          "service_f2md5i7",
          "template_dki4cu3",
          {
            email: data.email,
            phone: data.phone,
            message: data.message,
            name: data.name,
          },
          {
            publicKey: "MksrCbquWKgjVX2sb",
          }
        )
        .then((response) => {
          console.log("SUCCESS!", response);

          resolve();
          showModal();
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
          reject(error);
        });
    });
  }

  const onSubmit = (data: FormValues) => {
    if (Object.keys(errors).length === 0) {
      sendEmail(data)
        .then(() => {
          reset();
        })
        .catch(() => {
          console.error("Произошла ошибка при отправке электронного письма");
        });
    } else {
      console.error("Некоторые поля заполнены неправильно");
    }
  };
  return (
    <div className={cls.box}>
      <div className={cls.container}>
        <div className={cls.form_text}>
          <div className={cls.title}> Написать Письмо:</div>
        </div>
        <Modal
          title="Письмо успешно отправлено!"
          open={isModalOpen}
          onOk={handleOk}
        >
          <p>Нажмите "Ок" для закрытия окна</p>
        </Modal>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={cls.input}>
            <input
              type="email"
              placeholder="📧 Ваш email"
              className={cls.inputarea}
              {...register("email")}
            />
            {errors.email?.message && (
              <p style={errorStyle}>{errors.email?.message}</p>
            )}
            <input
              type="phone"
              placeholder="📞+7ХХХХХХХХХХ"
              className={cls.inputarea}
              {...register("phone")}
            />
            {errors.phone?.message && (
              <p style={errorStyle}>{errors.phone?.message}</p>
            )}
            <input
              type="text"
              placeholder="🤵 Ваше ФИО"
              className={cls.inputarea}
              {...register("name")}
            />
            {errors.name?.message && (
              <p style={errorStyle}>{errors.name?.message}</p>
            )}
            <textarea
              placeholder="✍️ Ваше сообщение"
              className={cls.textarea}
              {...register("message")}
            />
          </div>
          {errors.message?.message && (
            <p style={errorStyle}>{errors.message?.message}</p>
          )}
          <input type="submit" value="Отправить" className={cls.btn} />
        </form>
      </div>
    </div>
  );
};

export default Form;
