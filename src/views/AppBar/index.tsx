import  { useState } from "react";
import  { ReactComponent as IconLogo } from "@/assets/svg/IconLogo.svg";
import { ReactComponent as IconMenu }  from "@/assets/svg/IconMenu.svg";
import { ReactComponent as IconClose }  from "@/assets/svg/IconClose.svg";

import { ReactComponent as IconDown }  from "@/assets/svg/IconDown.svg";
import { ReactComponent as IconUp }  from "@/assets/svg/IconUp.svg";
import s from "./index.module.scss";
import { bodyToScroll, linkUrl } from "@/utils";
import { Translation } from "react-i18next";

const MenuConfig = [
  {
    title: <Translation>{t=>t("kntid")}</Translation>,
    // items: [
    //   {
    //     title: "Join waitlist",
    //     href: "https://www.baidu.com/",
    //     tab: "Releasing soon",
    //   },
    //   {
    //     title: "Web IM",
    //     href: "https://www.baidu.com/",
    //   },
    //   {
    //     title: "Generate KID",
    //     href: "https://www.baidu.com/",
    //   },
    //   {
    //     title: "Discovery my graph",
    //     href: "https://www.baidu.com/",
    //   },
    // ],
  },
  {
    title: <Translation>{t=>t("kntapp")}</Translation>,
    href: "https://www.baidu.com/",
  },
  {
    title: <Translation>{t=>t("KKCoin")}</Translation>,
    href: "https://www.baidu.com/",
  },
  {
    title: <Translation>{t=>t("Blog")}</Translation>,
    href: "https://www.baidu.com/",
  },
];

export default function AppBar() {
  const [isOpenMenu, setIsOPenMenu] = useState(false);

  function renderBtn() {
    return (
      <span
        className={s.btn}
        onClick={() => {
          setIsOPenMenu(!isOpenMenu);
          bodyToScroll(isOpenMenu);
        }}
      >
        {isOpenMenu ? <IconClose/> : <IconMenu />}
      </span>
    );
  }

  function renderHideMenu() {
    if (isOpenMenu) {
      return (
        <div className={s.hideMenu}>
          {MenuConfig.map((it, idx) => {
            return <FoldPlant {...it} key={idx} />;
          })}
        </div>
      );
    }
  }

  return (
    <div className={s.container}>
      <span className={s.logo} onClick={
        ()=>{
          linkUrl("https://konnect.chat/");
        }
      }>
        <IconLogo />
      </span>
      {renderBtn()}
      {renderHideMenu()}
    </div>
  );
}

function FoldPlant(props) {
  const { items = [], title, href } = props;

  const [isOPen, setIsOpen] = useState(false);

  function renderBtn() {
    if (items.length <= 0) {
      return <span></span>;
    }
    return <span> {isOPen ? <IconUp/> : <IconDown/>}</span>;
  }

  function renderChildMenu() {
    if (items.length <= 0) {
      return null;
    }
    if (!isOPen) {
      return null;
    }
    return (
      <div className={s.childMenuBox}>
        {items.map((i, idx: number) => {
          return (
            <div key={idx} className={s.childItem} onClick={()=>{
              if(i.href) {
                linkUrl(i.href);
              }
            }}>
              <span className={s.title}>{i.title}</span>
              {i.tab && <span className={s.tab}>{i.tab}</span>}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={s.foldPlant} onClick={()=>{
      if(href) {
        linkUrl(href);
      }
    }}>
      <div
        className={s.topBox}
        onClick={() => {
          setIsOpen(!isOPen);
        }}
      >
        <span className={s.title}>{title}</span>
        {renderBtn()}
      </div>
      {renderChildMenu()}
    </div>
  );
}
