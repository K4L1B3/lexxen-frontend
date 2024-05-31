import React, { useEffect, useState } from "react";
import style from "./Input.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface IInputProps {
  placeholderText?: string;
  typeInput: string;
  htmlForName?: string;
  LabelName?: string;
  nameCSS?: string;
  disableAnimation?: boolean;
  disableFaEye?: boolean;
  inputValue?: string;
  InputContainerCSS?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelCSS?: string;
}

const Input: React.FC<IInputProps> = ({
  typeInput,
  placeholderText,
  htmlForName,
  LabelName,
  nameCSS,
  disableAnimation,
  disableFaEye,
  inputValue = "",
  onChange,
  labelCSS,
  InputContainerCSS,
}) => {
  const { t } = useTranslation();
  const [inputValueForm, setInputValueForm] = useState(inputValue)
  const [isFocused, setIsFocused] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    setInputValueForm(inputValue);
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueForm(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  const toggleShowPassword = () => {
    if (!disableFaEye) {
      setShowPass(!showPass);
      setEyeIcon(showPass ?  faEyeSlash : faEye);
    }
  };

  const handleFocus = () => !disableAnimation && setIsFocused(true);
  const handleBlur = () =>
    !disableAnimation && setIsFocused(inputValueForm.length > 0 ? true : false);


  return (
    <div className={`${style.inputContainer} ${InputContainerCSS || ''}`}>
      <label
        className={`${style.label} ${labelCSS || ''} ${(isFocused || inputValueForm) && !disableAnimation ? style.labelFocused : ""}`}
        htmlFor={htmlForName}
      >
        {LabelName}
      </label>
      <input
        className={`${style.input} ${nameCSS}`}
        type={
          typeInput === "password"
            ? showPass
              ? "text"
              : "password"
            : typeInput
        }
        placeholder={isFocused ? placeholderText : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValueForm}
        autoComplete="off"
      />
      {!disableFaEye && (
          <FontAwesomeIcon
        icon={eyeIcon}
        className={`${style.icon} ${disableFaEye ? style.disabled : ''}`}
        onClick={toggleShowPassword}
      />
      )}

    </div>
  );
};

export default Input;
