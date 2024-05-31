import React from "react";
import style from "./Button.module.scss";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

interface IButton {
  translationKey?: string;
  textButton?: string;
  iconSrc?: string;
  eventButton?: string;
  type?: "button" | "submit" | "reset";
  nameCSS?: string;
  iconCSS?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonComponent: React.FC<IButton> = ({
  translationKey,
  iconSrc,
  eventButton,
  type = "button",
  nameCSS,
  iconCSS,
  onClick,
  textButton
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleSubmitButton = () => {
    if (!eventButton) {
      console.error(
        "URL de redirecionamento não fornecida corretamente para ButtonComponent",
      );
      return;
    }
    return router.push(eventButton);
  };

  return (
    <div>
      <button
        onClick={onClick || handleSubmitButton}
        className={nameCSS || style.buttonComponent}
        type={type}
      >
        {textButton}
        {translationKey && t(translationKey)}
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="Icon"
            className={iconCSS || style.buttonIcon}
            width={10}
            height={24}
          />
        )}
      </button>
    </div>
  );
};

export default ButtonComponent;
