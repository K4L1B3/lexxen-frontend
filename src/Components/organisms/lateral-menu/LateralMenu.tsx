import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LateralMenu.module.scss";
import logo from "../../../../public/logo/logo.svg";
import home_icon from "../../../../public/menu-icons/icon1.svg";
import document_icon from "../../../../public/menu-icons/icon2.svg";
import cart_icon from "../../../../public/menu-icons/icon3.svg";
import product_icon from "../../../../public/menu-icons/icon4.svg";
import marketing_icon from "../../../../public/menu-icons/icon5.svg";
import config_icon from "../../../../public/menu-icons/icon6.svg";
import checkout_icon from "../../../../public/menu-icons/icon7.svg";
import help_icon from "../../../../public/others/iterrogationIcon.png"
import { Button } from "@/Components/atoms/button";

function LateralMenu() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={logo} alt={"lexxen logo"} className={styles.logoSvg} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.first_nav}>
          <li className={styles.link_container}>
            <Link href="/dashboard" className={styles.navItem}>
              <i className={styles.icon}>
                <Image src={home_icon} alt={"Home"} className={styles.iconDash} />
              </i>
              Dashboard
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/orders" className={styles.navItem}>
              <i className={styles.icon}>
                <Image src={document_icon} alt={"document"} />
              </i>
              Pedidos
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/cart" className={styles.navItem}>
              <i className={styles.icon}>
                <Image src={cart_icon} alt={"cart"} />
              </i>
              Carrinho
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/products" className={styles.navItem}>
              <i className={styles.icon}>
                <Image src={product_icon} alt={"product"} />
              </i>
              Produtos
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/marketing" className={styles.navItem}>
              <i className={styles.icon}>
                <Image src={marketing_icon} alt={"marketing"} />
              </i>
              Marketing
            </Link>
          </li>
        </ul>
        <h3 className={styles.accountTitle}>ACCOUNT PAGES</h3>
        <ul className={styles.second_nav}>
          <li className={styles.link_container}>
            <Link href="/settings" className={styles.navItem}>
              <i className={styles.icon}>
                <Image src={config_icon} alt={"config"} />
              </i>
              Configurações
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link
              href="/checkout"
              className={`${styles.navItem} ${styles.active}`}
            >
              <i className={styles.icon}>
                <Image src={checkout_icon} alt={"chekout"} />
              </i>
              Checkout
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.helpBox}>
        <i className={styles.icon}>
          <Image src={help_icon} alt={"help"} />
        </i>
        <h4>Precisa de ajuda?</h4>
        <p>Lorem ipsum dolor sit amet</p>
        <Button
          nameCSS={styles.faqButton}
          textButton={"Perguntas Frequentes"}
        />
      </div>
    </div>
  );
}

export default LateralMenu;
