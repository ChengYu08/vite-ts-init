import s from "./index.module.scss";
import classNames from "classnames";

// import { ReactComponent as IconACCEL }   from "@/assets/svg/IconACCEL.svg";
// import { ReactComponent as  IconPANTERA }  from "@/assets/svg/IconPANTERA.svg";
// import { ReactComponent as  IconA16z } from "@/assets/svg/IconA16z.svg";
// import { ReactComponent as  IconOpenSea }  from "@/assets/svg/IconOpenSea.svg";
// import { ReactComponent as  IconCoinBase }  from "@/assets/svg/IconCoinBase.svg";
// import { ReactComponent as  IconJaneStreet }  from "@/assets/svg/IconJaneStreet.svg";
// import { ReactComponent as  IconPolygon }  from "@/assets/svg/IconPolygon.svg";
// import { ReactComponent as  IconAVALANCHE }  from "@/assets/svg/IconAVALANCHE.svg";
// import { ReactComponent as  IconMaker }  from "@/assets/svg/IconMaker.svg";
// import { ReactComponent as  IconGauntlet }  from "@/assets/svg/IconGauntlet.svg";

import { ReactComponent as IconMore } from "@/assets/svg/IconLearn.svg";
import { ReactComponent as IconCode } from "@/assets/svg/IconCode.svg";
import { ReactComponent as IconPerson } from "@/assets/svg/IconPerson.svg";
import joinLeft from "@/assets/images/joinLeft.png";
import joinRight from "@/assets/images/joinRight.png";
import { ReactComponent as IconBtnApple } from "@/assets/svg/IconBtnApple.svg";
import { ReactComponent as IconBtnPlay } from "@/assets/svg/IconBtnPlay.svg";
import { ReactComponent as IconBtnCode } from "@/assets/svg/IconBtnCode.svg";

import TypeBtn from "@/components/BtnType";
import { Translation } from "react-i18next";
// const iconArr = [
//   <IconACCEL />,
//   <IconPANTERA />,
//   <IconA16z />,
//   <IconOpenSea />,
//   <IconCoinBase />,
//   <IconJaneStreet />,
//   <IconPolygon />,
//   <IconAVALANCHE />,
//   <IconMaker />,
//   <IconGauntlet />,
// ];

export default function BackedBy(props: { className?: string }) {
  const { className } = props;
  return (
    <div className={classNames([s.container, className])}>
      {/* <div className={s.title}>Backed By</div>
      <div className={s.brandsBox}>
        {iconArr.map((Icon, idx) => {
          return (
            <div className={s.brand} key={idx}>
              {Icon}
            </div>
          );
        })}
      </div> */}
      <div className={s.unlockBox}>
        <div className={s.t}>
          <Translation>{t => t("uaowf")}</Translation>
        </div>
        <div className={s.subT}>
          <Translation>{t => t("wyad")}</Translation>
        </div>
      </div>
      <div className={s.joinAccessBox}>
        <div className={classNames(s.joinBox)}>
          <div className={s.topBox}>
            <div>
              <div className={s.tt}>
                <IconPerson />
                <span><Translation>{t => t("fu")}</Translation></span>
              </div>
              <div className={s.joinTitle}><Translation>{t => t("gyki")}</Translation></div>
            </div>
            <div className={s.rrBox}>
              <TypeBtn
                className={s.channelItem}
                type={2}
                children={<IconBtnApple />}
              />
              <TypeBtn
                className={s.channelItem}
                type={2}
                children={<IconBtnPlay />}
              />
              <TypeBtn
                className={s.channelItem}
                type={2}
                children={<IconBtnCode />}
              />
            </div>
          </div>
          <div className={s.bottomBox}>
            <img alt="bgImg" className={s.bgImg} src={joinLeft} />
          </div>
        </div>
        <div className={classNames(s.joinBox)}>
          <div className={s.topBox}>
            <div>
              <div className={s.tt}>
                <IconCode />
                <span><Translation>{t => t("fd")}</Translation></span>
              </div>
              <div className={s.joinTitle}><Translation>{t => t("dm")}</Translation></div>
            </div>
            <div className={s.rrBox}>
              <IconMore />
            </div>
          </div>
          <div className={s.bottomBox}>
            <img alt="bgImg" className={s.bgImg} src={joinRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
