import { Button } from "@/Components/atoms/button/index";
import { Input } from "@/Components/atoms/input/index";
import googleLogo from "../../../../public/google-icon.svg";
import style from "./Signup.module.scss";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { post_register } from "../../../../services/api";
import router from "next/router";

export default function SignupForm() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Entrei na HandleRegister");
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (password !== confirmPassword) {
      console.log("Entrei na condição do password!");
      setError(t("notMatch"));
      return;
    }

    try {
      await post_register({ name, email, phone, password });
      router.push("/login");
      console.log("cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Error when registering. Check the data. ", error);
    }
  };

  const handleGoogleRegister = () => {
    console.log("Entrei na GOOGLEHandleRegister");
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className={style.divFormSignup}>
      <form className={style.formSignup}>
        <Input
          nameCSS={style.formInputSignup}
          typeInput={"text"}
          LabelName={t("name_placeholder")}
          htmlForName={"username"}
          disableFaEye={true}
          inputValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          nameCSS={style.formInputSignup}
          typeInput={"email"}
          LabelName={t("email_placeholder")}
          htmlForName={"useremail"}
          disableFaEye={true}
          inputValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          nameCSS={style.formInputSignup}
          typeInput={"text"}
          LabelName={t("phoneNumber_placeholder")}
          htmlForName={"phoneNumber"}
          disableFaEye={true}
          inputValue={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          nameCSS={style.formInputSignup}
          LabelName={t("password_placeholder")}
          htmlForName={"password"}
          typeInput={"password"}
          inputValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          nameCSS={style.formInputSignup}
          LabelName={t("confirmPass_placeholder")}
          htmlForName="confirmPassword"
          typeInput={"password"}
          inputValue={confirmPassword} // Adicionei esta linha
          onChange={(e) => setConfirmPassword(e.target.value)} // Adicionei esta linha
        />
        {error && <p>{error}</p>}
        <Button
          nameCSS={style.buttonSignupForm}
          translationKey={"register"}
          onClick={handleRegister}
        />
        <div className={style.separator}>
          <div className={style.line}></div>
          <span className={style.text}>OU</span>
          <div className={style.line}></div>
        </div>
        <Button
          nameCSS={style.googleButton}
          translationKey="sign_in_Google"
          iconSrc={googleLogo}
          onClick={handleGoogleRegister}
        />
      </form>
    </div>
  );
}
