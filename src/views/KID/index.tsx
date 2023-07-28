import s from "./index.module.scss";
import classNames from "classnames";
import BtnType from "@/components/BtnType";
import kidBg from "@/assets/images/kidBg.png";
import { Translation } from "react-i18next";
export default function KID(prop: { className?: string }) {
  return (
    <div className={classNames([s.container, prop.className])}>
      <img src={kidBg} alt="" className={s.kidBg} />
      <div className={s.title}><Translation>{t=>t("kid")}</Translation></div>
      <div className={s.subTitle}><Translation>{t=>t("ydy")}</Translation></div>
      <div className={s.conintBox}>
        <Translation>{t=>t("kiaddi")}</Translation>
      </div>
      <BtnType className={s.premint}><Translation>{t=>t("lm")}</Translation></BtnType>
    </div>
  );
}
