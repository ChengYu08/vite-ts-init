import s from "./index.module.scss";
import classNames from "classnames";

import PhotoCard from "@/components/PhotoCard";
import Identity from "@/assets/images/Identity.png";
import Credentials from "@/assets/images/Credentials.png";
import Credit from "@/assets/images/Credit.png"
import Gated from "@/assets/images/Gated.png"
import Authentication from "@/assets/images/Authentication.png"
import Social from "@/assets/images/Social.png"
import { Translation } from "react-i18next";


const wallConfig = [
  {
    photo: Identity,
    title: <Translation>{t => t("ia")}</Translation>,
    desc: <Translation>{t => t("iait")}</Translation>,
  },
  {
    photo: Credentials,
    title: <Translation>{t => t("Credentials")}</Translation>,
    desc: <Translation>{t => t("crttdiaam")}</Translation>,
  },

  {
    photo: Credit,
    title: <Translation>{t => t("CreditScore")}</Translation>,
    desc: <Translation>{t => t("Csrta")}</Translation>,
  },
  {
    photo: Gated,
    title: <Translation>{t => t("gatedG")}</Translation>,
    desc: <Translation>{t => t("ggrtas")}</Translation>,
  },
  {
    photo: Authentication,
    title: <Translation>{t => t("Authentication")}</Translation>,
    desc: <Translation>{t => t("astp")}</Translation>,
  },
  {
    photo: Social,
    title: <Translation>{t => t("sgph")}</Translation>,
    desc: <Translation>{t => t("sgpuwm")}</Translation>,
  },
];
export default function PhotoWall(prop: { className?: string }) {
  return (
    <div className={classNames([s.container, prop.className])}>
      {wallConfig.map((item, idx) => {
        return <PhotoCard {...item} key={idx} />;
      })}
    </div>
  );
}
