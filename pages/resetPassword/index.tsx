import style from "../resetPassword/resetPassword.module.scss";
import logoIcon from "../../public/SymbolText.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import ResetPasswordForm from "@/Components/molecules/reset-form/resetPasswordForm";

export default function Signup() {
  const { t } = useTranslation();

  return (
    <main>
      <div className={style.resetPassScreenContainer}>
        <Image className={style.logo} src={logoIcon} alt="Icon" />
        <span className={style.welcome}>{t("reset_password")}</span>
        <ResetPasswordForm />
      </div>
    </main>
  );
}
