import style from "../signup/signup.module.scss";
import { useRouter } from "next/router";
import logoIcon from "../../public/SymbolText.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SignupForm from "@/Components/molecules/signup-form/SignupForm";

export default function Signup() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleSignupRouter = () => {
    router.push("/login");
  };

  const handleTermsAndPolicy = () => {
    router.push("/termsAndPolicy");
  };

  return (
    <main>
      <div className={style.signupScreenContainer}>
        <Image className={style.logo} src={logoIcon} alt="Icon" />
        <span className={style.welcome}>{t("signup")}</span>
        <SignupForm />
        <div className={style.termsAndLinkContainer}>
          <div className={style.signupLinkContainer}>
            <span className={style.newUser} onClick={handleSignupRouter}>
              Já possui uma conta?
            </span>
            <span className={style.newUserSignup} onClick={handleSignupRouter}>
              Login
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
