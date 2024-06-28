import { Button } from "@/Components/atoms/button/index";
import { Input } from "@/Components/atoms/input/index";
import Image from "next/image";
import logo from "../../../../public/SymbolText.svg";
import style from "./EmailForm.module.scss";
import { useTranslation } from "react-i18next";

export default function EmailForm() {

  const { t } = useTranslation();

  return (
    <div className={style.email_form_container}>
      <Image className={style.logo} src={logo} alt="Logo Pandora Chat" />
      <div className={style.email_content}>
        <h1 className={style.tituloH1}>Redefina sua senha</h1>
        <span className={style.textoSpan}>
          Insira seu e-mail ou nome de usuário para <br />
          enviarmos as instruções de redefinição de senha.
        </span>
        <Input
          typeInput={"email"}
          LabelName={t("email_placeholder")}
          disableFaEye={true}
          nameCSS={style.inputEmail}
        />
      </div>
      <Button
        translationKey={"send"}
        nameCSS={style.sendButton}
        eventButton={"/codeVerificationPassword"}
      />
    </div>
  );
}
