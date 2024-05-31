import React from "react";
import style from "./forgotPassword.module.scss";
import EmailForm from "@/Components/molecules/email-form/EmailForm";

export default function ForgotPassword() {
  return (
    <div className={style.containerForgotPassScreen}>
      <div>
        <EmailForm />
      </div>
    </div>
  );
}
