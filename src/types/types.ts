import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  name: string;
  phone: number;
 message: string;

};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
  | "email"
  | "name"
  | "phone"
  | "message";
