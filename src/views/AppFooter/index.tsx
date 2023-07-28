import s from "./index.module.scss";
import classNames from "classnames";
import { ReactComponent as IconLogo } from "@/assets/svg/IconLogo.svg";
import { ReactComponent as IconTwitter } from "@/assets/svg/IconTwitter.svg";
import { ReactComponent as IconMirror } from "@/assets/svg/IconMirror.svg";
import { ReactComponent as IconMedium } from "@/assets/svg/IconMedium.svg";
// import { ReactComponent as IconDiscord } from "@/assets/svg/IconDiscord.svg";
import TypeBtn from "@/components/BtnType";
import { Translation } from "react-i18next";

const channelBtnConfig = [
  {
    name: "Twitter",
    icon: <IconTwitter />,
  },
  {
    name: "Medium",
    icon: <IconMedium />,
  },
  // {
  //   name: "Discord",
  //   icon: <IconDiscord />,
  // },
  {
    name: "Mirror",
    icon: <IconMirror />,
  },
];
export default function AppFooter(props: { className?: string }) {
  const { className } = props;
  return (
    <div className={classNames([s.container, className])}>
      <div className={s.footerMain}>
        <div className={s.leftBox}>
          <IconLogo />
          <div className={s.logoDesc}><Translation>{t => t("dsgp")}</Translation></div>
        </div>
        <div className={s.rightBox}>
          <div className={s.navItem}>
            <div className={s.navTitle}><Translation>{t => t("Product")}</Translation></div>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("kntapp")}</Translation>
            </TypeBtn>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("kp")}</Translation>
            </TypeBtn>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("Ktask")}</Translation>
            </TypeBtn>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("sgh")}</Translation>
            </TypeBtn>
          </div>
          <div className={s.navItem}>
            <div className={s.navTitle}><Translation>{t => t("devCenter")}</Translation></div>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("kapi")}</Translation>
            </TypeBtn>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("Docs")}</Translation>
            </TypeBtn>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("Inspiration")}</Translation>
            </TypeBtn>
          </div>
          <div className={s.navItem}>
            <div className={s.navTitle}><Translation>{t => t("About")}</Translation></div>
            <TypeBtn className={s.nav} type={3}>
              <Translation>{t => t("cus")}</Translation>
            </TypeBtn>
            {/* <TypeBtn className={s.nav} type={3}>
              Brandkit
            </TypeBtn> */}
          </div>
          <div className={s.navItem}>
            <div className={s.navTitle}><Translation>{t => t("Media")}</Translation></div>
            <div className={s.channelBox}>
              {channelBtnConfig.map((item, index) => {
                return (
                  <TypeBtn
                    className={s.channelBtn}
                    key={index}
                    type={2}
                    children={item.icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={s.footerCopyright}>
        <span><Translation>{t => t("reserved")}</Translation></span>
      </div>
    </div>
  );
}
