import React from "react";
import { OTPInput } from "@/Components/molecules/otp-input/index";
import style from "./codeVerificationPassword.module.scss";

export default function CodeVeirfication() {
  const handleOtpChange = (otp: string) => {
    console.log("OTP:", otp);
  };

  return (
    <div className={style.CodeVeirficationContainer}>
      <div>
        <OTPInput length={4} onChange={handleOtpChange} />
      </div>
    </div>
  );
}
