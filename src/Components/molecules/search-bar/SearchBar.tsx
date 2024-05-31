import React from 'react';
import {Input} from '../../atoms/input/index';
import style from "./Searchbar.module.scss"
import searchIcon from "../../../../public/menu-icons/searchIcon.svg";
import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div className={style.search_bar_container}>
      <i className={style.Icon}>
        <Image src={searchIcon} alt={""} />
      </i>
      <Input
        typeInput={"text"}
        placeholderText={"Digite o nome do seu pedido"}
        disableFaEye={true}
        disableAnimation={true}
        LabelName={"Buscar"}
        InputContainerCSS={style.inputContainer}
        labelCSS={style.label}
        nameCSS={style.input_search} />
    </div>
  );
};

export default SearchBar;
