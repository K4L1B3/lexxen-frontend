import React, { useState } from "react";
import { LateralMenu } from "@/Components/organisms/lateral-menu/index";
import style from "./product.module.scss";
import Header from "@/Components/organisms/header/Header";
import { Table } from "@/Components/atoms/table/index";

export default function Produtos() {
  const handleToggle = (index: number) => {
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index ? { ...row, isActive: !row.isActive } : row,
      ),
    );
  };

  const [rows, setRows] = useState([
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "OnePlus 7Pro",
      description: "OnePlus",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#8a2be2" },
      isActive: false,
      onToggle: () => handleToggle(0),
    },
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "iMac Pro",
      description: "Apple",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#ff4500" },
      isActive: true,
      onToggle: () => handleToggle(1),
    },
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "iMac Pro",
      description: "Apple",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#ff4500" },
      isActive: true,
      onToggle: () => handleToggle(1),
    },
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "iMac Pro",
      description: "Apple",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#ff4500" },
      isActive: true,
      onToggle: () => handleToggle(1),
    },
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "OnePlus 7Pro",
      description: "OnePlus",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#8a2be2" },
      isActive: false,
      onToggle: () => handleToggle(0),
    },
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "OnePlus 7Pro",
      description: "OnePlus",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#8a2be2" },
      isActive: false,
      onToggle: () => handleToggle(0),
    },
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "OnePlus 7Pro",
      description: "OnePlus",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#8a2be2" },
      isActive: false,
      onToggle: () => handleToggle(0),
    },
    {
      imageUrl: "https://via.placeholder.com/50",
      name: "iMac Pro",
      description: "Apple",
      date: "00/00/00",
      tag: { text: "Lorem ipsum", color: "#ff4500" },
      isActive: true,
      onToggle: () => handleToggle(1),
    },
  ]);

  return (
    <div className={style.screen_container}>
      <LateralMenu />
      <div className={style.container_act}>
        <div className={style.container_main}>
          <Header />
          <h1 className={style.title}>Produtos</h1>
          <div className={style.horizontal_line}></div>
          <div className={style.input_container}>
            <div className={style.inputs_ajust}>
              <input type="text" className={style.input_component} />
              <input type="text" className={style.input_component} />
              <button className={style.button_component}>+ Novo Produto</button>
            </div>
            <Table rows={rows} />
          </div>
        </div>
        <div className={style.footer}>
          <p>© 2023 , feito com ❤️ by Lexxen Hub</p>
          <div className={style.div_Subfooter}>
            <a>Documentação</a>
            <p>Suporte</p>
          </div>
        </div>
      </div>
    </div>
  );
}
