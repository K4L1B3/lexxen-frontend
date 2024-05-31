import React, { ChangeEvent, useState } from "react";
import style from "./OTPInput.module.scss";
import { Button } from "@/Components/atoms/button/index";
import { useTranslation } from "react-i18next";
import Logo from "../../../../assets/SymbolText.svg";
import Image from "next/image";

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const { t } = useTranslation();

  const initialCount = 60;
  const [isActive, setIsActive] = useState(false);
  const [counterTimer, setCounterTimer] = useState(initialCount);

  const [otpValues, setOtpValues] = useState<Array<string>>(
    Array(length).fill(""),
  );

  const handleCounterTime = () => {
    // lógica para mandar o email via API
    // lógica para fazer um contador
    if (!isActive) {
      setIsActive(true);
      const intervalId = setInterval(() => {
        setCounterTimer((prevCounter) => {
          console.log(prevCounter);
          if (prevCounter <= 1) {
            clearInterval(intervalId);
            setIsActive(false);
            return initialCount;
          }
          return prevCounter - 1;
        });
      }, 1000);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = event.target;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(0, 1);
    setOtpValues(newOtpValues);
    onChange(newOtpValues.join(""));

    // Move o foco para o próximo campo
    if (value && index < length - 1) {
      (
        document.getElementById(`otp-field-${index + 1}`) as HTMLInputElement
      )?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text").slice(0, length);
    const newOtpValues = pasteData.split("");
    setOtpValues([
      ...newOtpValues,
      ...Array(length - newOtpValues.length).fill(""),
    ]);
    onChange(newOtpValues.join(""));
  };

  return (
    <div className={style.container}>
      <Image className={style.logo} src={Logo} alt={"Pandora Logo Img"} />
      <div className={style.titleVerifyContainer}>
        <h1>{t("check_your_email")}</h1>
        <div className={style.textContainer}>
          <span>{t("send_4_digit")}</span>
          <strong>exemple@Email.com</strong>
        </div>
      </div>
      <div className={style.inputContainer}>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <input
              className={style.OTPInput}
              key={index}
              id={`otp-field-${index}`}
              type="tel"
              value={otpValues[index]}
              onChange={(e) => handleChange(e, index)}
              onPaste={handlePaste}
              maxLength={1}
              autoFocus={index === 0}
            />
          ))}
      </div>
      <div className={style.buttonContainer}>
        <Button
          type={"button"}
          translationKey={"check"}
          nameCSS={style.buttonVerify}
          eventButton={"/resetPassword"}
        />
        <div
          onClick={!isActive ? handleCounterTime : undefined}
          className={`${style.resendEmailContainer} ${isActive ? style.disabledDiv : ''}`}
        >
          <span>
            {isActive
              ? `${t("send_email_again")} (${counterTimer})`
              : `${t("Did_not_get_the_email?")} ${t("send_email_again")}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OTPInput;
