import { Button } from "@/Components/atoms/button/index";
import { Input } from "@/Components/atoms/input/index";
import googleLogo from "../../../../public/google-icon.svg";
import style from "./LoginForm.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleForgotPasswordClick = () => {
    return router.push("/forgotPassword");
  };

  return (
    <div className={style.divFormLogin}>
      <form className={style.formLogin}>
        <Input
          nameCSS={style.formInputLogin}
          typeInput={"email"}
          LabelName={t("email_placeholder")}
          htmlForName={"username"}
          disableFaEye={true}
        />
        <Input
          nameCSS={style.formInputLogin}
          LabelName={t("password_placeholder")}
          htmlForName="password"
          typeInput={"password"}
        />
        <span
          className={style.forgotPassword}
          onClick={handleForgotPasswordClick}
        >
          Esqueci minha senha
        </span>
        <Button
          nameCSS={style.buttonLoginForm}
          eventButton={"/home"}
          translationKey={"sign_in"}
        />
        <div className={style.separator}>
          <div className={style.line}></div>
          <span className={style.text}>OU</span>
          <div className={style.line}></div>
        </div>
        <Button
          nameCSS={style.googleButton}
          eventButton={"/home"}
          translationKey={"sign_in_Google"}
          iconSrc={googleLogo}
        />
      </form>
    </div>
  );
}
