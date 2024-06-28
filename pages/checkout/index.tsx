import React, { FormEvent } from "react";
import style from "./checkout.module.scss";
import Image from "next/image";
import { DropdownWithOutIcon } from "@/Components/atoms/DropdownWithOutIcon";
import cupomIcon from "../../public/checkout-icons/cupom.svg";
import TimerIcon from "../../public/checkout-icons/clockTimer.svg";
import TruckIcon from "../../public/checkout-icons/truckCEP.svg";
import RefreshIcon from "../../public/checkout-icons/reloadCEP.svg";
import logo from "../../public/logo/logoLexxen.svg";
import arrowViewAll from "../../public/checkout-icons/arrowSeeAllCheckout.svg";
import googledoc from "../../public/Produtos/google-home.png";
import iphone from "../../public/Produtos/iphone.png";
import creditCardicon from "../../public/checkout-icons/mastercardBandeira.svg";
import creditCardiconblack from "../../public/checkout-icons/cartaoDeCreditoCinza.svg";
import arrowButtonCheckout from "../../public/checkout-icons/arrowButtonCheckout.svg";

const products = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit",
    image: googledoc,
    price: 299.0,
    originalPrice: 999.0,
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit",
    image: iphone,
    price: 299.0,
    originalPrice: 999.0,
  },
];

export default function Checkout() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };


  return (
    <div className={style.container_component}>
      {/* Lado Esquerdo */}
      <div className={style.left_side_container}>
        {/* Seção de Preço */}
        <div className={style.price_container}>
          <div className={style.timer_container}>
            <Image
              src={TimerIcon}
              alt="Ícone de caminhão"
              width={24}
              height={24}
            />
            <p>Sua oferta atual termina em 7h 30m 45s!</p>
          </div>
          <div className={style.container_info_price}>
            <div className={style.container_info_price_inside}>
              <div className={style.price_value_container}>
                <h2>Total</h2>
                <span className={style.total_price}>R$149.00</span>
              </div>
              <div className={style.desconto_container}>
                <p>Desconto total</p>
                <span className={style.discount}>R$1198.00</span>
              </div>
              <div className={style.frete}>
                <p>Frete</p>
                <div className={style.price_frete_container}>
                  <span className={style.shipping_fee}>R$10.00</span>
                  <span className={style.free_shipping}>Free</span>
                </div>
              </div>
            </div>
            <button className={style.add_coupon_button}>
              <Image className={style.cupom} src={cupomIcon} alt={"Cupom"} />
              <span>Add cupom</span>
            </button>
          </div>
        </div>

        {/* Seção de CEP */}
        <div className={style.cep_container_p1}>
          <div className={style.cep_container_p2}>
            <Image
              src={TruckIcon}
              alt="Ícone de caminhão"
              width={24}
              height={24}
            />
            <div className={style.cep_container_p3}>
              <span>CEP</span>
              <input
                type="text"
                placeholder="00000-000"
                className={style.cep_input}
              />
              <button className={style.update_cep_button}>
                <Image
                  className={style.image_refresh}
                  src={RefreshIcon}
                  alt="Atualizar CEP"
                />
              </button>
            </div>
          </div>

          <button className={style.view_all_button}>
            <span>Ver todos</span>
            <Image src={arrowViewAll} alt="Seta" />
          </button>
        </div>

        {/* Lista de Produtos */}
        <div className={style.products_container}>
          {products.map((product) => (
            <div key={product.id} className={style.product_item}>
              <Image
                src={product.image}
                alt={product.name}
                width={50}
                height={50}
              />
              <div className={style.product_info}>
                <p>{product.name}</p>
                <div className={style.product_quantity}>
                  <button className={style.quantity_button_left}>-</button>
                  <span className={style.product_quantity_number}>1</span>
                  <button className={style.quantity_button_right}>+</button>
                </div>
              </div>
              <div className={style.product_price}>
                <span className={style.price}>R${product.price}</span>
                <span className={style.original_price}>
                  R${product.originalPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lado Direito */}
      <div className={style.right_side_container}>
        <div className={style.container_outside_form}>
          <Image src={logo} alt={"LOGO LEXXEN"} className={style.image_logo} />
          <form onSubmit={handleSubmit} className={style.form_div}>
            <div className={style.form_div_p1}>
              <h2>Informações básicas</h2>
              <div className={style.container_input_div_p1}>
                <div className={style.input_div}>
                  <label>Email</label>
                  <input type="text" placeholder="     Exemple@gmail.com" />
                </div>
                <div className={style.input_div}>
                  <label>País</label>
                  <DropdownWithOutIcon
                    label={"Brasil"}
                    items={[]}
                    NameCSS={style.dropDownStyle}
                  />
                </div>
                <div className={style.input_div}>
                  <label>Endereço</label>
                  <input type="text" placeholder="     Avenida paulista, 459" />
                </div>
              </div>
            </div>
            <div className={style.form_div_p2}>
              <div className={style.container_input_div_p2}>
                <h2>Detalhes do Pagamento</h2>
                <div className={style.credit_Card_container}>
                  <label>Número do cartão</label>
                  <input type="text" placeholder="      7563 4592 4863 9328" />
                  <Image
                    src={creditCardicon}
                    alt={"credit"}
                    className={style.credit_card_flag}
                  />
                </div>
                <div className={style.details_input_container}>
                  <div className={style.input_fields}>
                    <div className={style.details_input}>
                      <label>Nome</label>
                      <input type="text" placeholder=" Alexandre L Siqueira" />
                    </div>
                    <div className={style.details_input}>
                      <label>Data</label>
                      <input type="text" placeholder=" 05/28" />
                    </div>
                    <div className={style.details_input}>
                      <label>CVV</label>
                      <input type="text" placeholder=" 445" />
                      <Image
                        src={creditCardiconblack}
                        alt={"credit"}
                        className={style.credit_card_blackflag}
                      />
                    </div>
                  </div>
                  <button className={style.button_pay}>
                    <span>Pagar</span>
                    <Image
                      src={arrowButtonCheckout}
                      alt={"credit"}
                      className={style.arrowButtonCheckout}
                    />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
