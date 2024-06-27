import style from "./Header.module.scss";
import { Dropdown } from "@/Components/atoms/Dropdown/index";
import Profile from "@/Components/atoms/profile/Profile";
import { SearchBar } from "@/Components/molecules/search-bar/index";
import bell from "../../../../public/others/bell.svg";
import Image from "next/image";

const handleItemClick = (item: string) => {
  console.log(`Clicked on ${item}`);
};

const items = [
  { label: "Minha Loja 1", onClick: () => handleItemClick("Minha Loja 1") },
  { label: "Minha Loja 2", onClick: () => handleItemClick("Minha Loja 2") },
  { label: "Minha Loja 3", onClick: () => handleItemClick("Minha Loja 3") },
];

export default function Header() {
  return (
    <div className={style.header_container}>
      <SearchBar />
      <div className={style.divisor_header}>
        <Dropdown label="Selecione a Loja" items={items} />
        <Image src={bell} alt={"bell"} />
        <Profile mainColor={"pink"} badgeColor={"green"} />
      </div>
    </div>
  );
}
