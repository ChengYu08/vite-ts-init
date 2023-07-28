import { useState } from "react";
import s from "./index.module.scss";
import classNames from "classnames";
import { ReactComponent as IconDLog } from "@/assets/svg/IconDLog.svg";
import { ReactComponent as IconCloseW } from "@/assets/svg/IconCloseW.svg";
import { downloadType } from "@/utils";
import { Translation } from "react-i18next";
export default function DownLoadCard(prop: { className?: string }) {
  const [isShow, setIsShow] = useState(true);
  if (!isShow) {
    return null
  }

  function downloadHandel() {
    downloadType();
    setIsShow(false);
  }
  return (
    <div className={classNames([s.container, prop.className])}>
      <IconDLog />
      <div className={s.rightBox}>
        <div className={s.title}><Translation>{t => t("kntapp")}</Translation></div>
        <div className={s.subTitle}><Translation>{t => t("ywsl")}</Translation></div>
      </div>
      <div className={s.e}></div>
      <div className={s.downBox} onClick={downloadHandel}><Translation>{t => t("Download")}</Translation></div>
      <span className={s.close} onClick={
        () => {
          setIsShow(false);
        }
      }>
        <IconCloseW />
      </span>
    </div>
  );
}
