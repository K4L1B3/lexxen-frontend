import { Button } from "@/Components/atoms/button/index";
import { Input } from "@/Components/atoms/input/index";
import style from "./resetPasswordForm.module.scss";
import { useTranslation } from "react-i18next";

export default function ResetPasswordForm() {

  const { t } = useTranslation();

  return (
    <div className={style.divFormReset}>
      <form className={style.formReset}>
        <Input
          nameCSS={style.formInputReset}
          typeInput={"password"}
          LabelName={t("password_placeholder")}
          htmlForName={"password"}
          disableFaEye={false}
        />
        <Input
          nameCSS={style.formInputReset}
          typeInput={"password"}
          LabelName={t("confirmPass_placeholder")}
          htmlForName={"useremail"}
          disableFaEye={false}
        />
        <Button
          nameCSS={style.buttonResetForm}
          eventButton={"/login"}
          translationKey={"confirm"}
        />
      </form>
    </div>
  );
}
