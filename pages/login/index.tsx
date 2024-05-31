import style from "../login/login.module.scss";
import { LoginForm } from "@/Components/molecules/login-form/index";
import { useRouter } from "next/router";
import logoIcon from "../../public/SymbolText.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleSignupRouter = () => {
    router.push("/signup");
  };

  const handleTermsAndPolicy = () => {
    router.push("/termsAndPolicy");
  };

  return (
    <main>
      <div className={style.loginScreenContainer}>
        <Image className={style.logo} src={logoIcon} alt="Icon" />
        <span className={style.welcome}>{t("welcome_back")}</span>
        <LoginForm />
        <div className={style.termsAndLinkContainer}>
          <div className={style.signupLinkContainer}>
            <span className={style.newUser} onClick={handleSignupRouter}>
              Não possui uma conta?
            </span>
            <span className={style.newUserSignup} onClick={handleSignupRouter}>
              Cadastre-se
            </span>
          </div>
          <div className={style.termsOfUseDiv}>
            <span onClick={handleTermsAndPolicy} className={style.termsOfUse}>
              {t("use_terms_privacy_police")}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
