import s from "./index.module.scss";
import classNames from "classnames";

import { ReactComponent as IconOne }  from "@/assets/svg/IconOne.svg";
import { ReactComponent as IconInfinitude }  from "@/assets/svg/IconInfinitude.svg";
import { ReactComponent as IconDownLoad }   from "@/assets/svg/IconDownLoad.svg";

import { ReactComponent as IconArra }   from "@/assets/svg/IconArra.svg";
import  IconPlatform from "@/assets/images/platform.png"
import IconPossibilities from "@/assets/images/possibilities.png"

import Marquee from "@/components/Marquee/Marquee";
import { Animate } from "react-simple-animate";
import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";
import card4 from "@/assets/images/card4.png";
import card5 from "@/assets/images/card5.png";
import card6 from "@/assets/images/card6.png";
import card7 from "@/assets/images/card7.png";
import card8 from "@/assets/images/card8.png";
import card9 from "@/assets/images/card9.png";
import card10 from "@/assets/images/card10.png";

const scrollTopArr = [
  card1,
  card2,
  card3,
  card4,
  card5,
];
const scrollBottomArr = [
  card6,
  card7,
  card8,
  card9,
  card10,
];

import star from "@/assets/images/IconStar.png";
import iconCircle from "@/assets/images/IconCircle.png";
import BtnType from "@/components/BtnType";
import { downloadType } from "@/utils";
import { Translation } from "react-i18next";

export default function FoldTop(prop: { className?: string }) {
  return (
    <div className={classNames([s.container, prop.className])}>
      <div className={s.topBox}>
        <img className={classNames([s.pItem, s.star])} src={star} alt="" />
        <Animate
          play
          start={{
            transform: "translateY(25px)",
          }}
          end={{ transform: "translateY(0)" }}
          duration={0.6}
          delay={0.3}
        >
          <span className={classNames([s.pItem, s.one])}>
            <IconOne />
          </span>
        </Animate>
        <Animate
          play
          start={{
            transform: "translateY(25px)",
          }}
          end={{ transform: "translateY(0)" }}
          duration={0.6}
          delay={0.3}

        >
          <img className={classNames([s.pItem, s.plat])} src={IconPlatform} alt="" />
        </Animate>

        <Animate
          play
          start={{
            transform: "translateY(20px)",
          }}
          end={{ transform: "translateY(0)" }}
          duration={0.6}
          delay={0.3}
        >
          <span className={classNames([s.pItem, s.infin])}>
            <IconInfinitude />
          </span>

        </Animate>

        <Animate
          play
          start={{
            transform: "translateY(20px)",
          }}
          end={{ transform: "translateY(0)" }}
          duration={0.6}
          delay={0.3}
        >
          <span className={classNames([s.pItem, s.arr])}>
            <IconArra />
          </span>
        </Animate>


        <Animate
          play
          start={{
            transform: "translateY(25px)",
          }}
          end={{ transform: "translateY(0)" }}
          duration={0.6}
          delay={0.3}
        >
          <img className={classNames([s.pItem, s.poss])} src={IconPossibilities} alt="" />
        </Animate>

      </div>
      <div className={s.socialDesc}>
        <Translation>{t => t("scwdec")}</Translation>
      </div>
      <BtnType className={s.joinBtn}>
        <div className={s.download} onClick={() => downloadType()}>
          <IconDownLoad />
          <span className={s.f}><Translation>{t => t("Download")}</Translation></span>
        </div>
      </BtnType>
      {/* <BtnType type={2} className={s.launchBtn}>
        launch web IM
      </BtnType> */}

      <div className={s.queueBox}>
        <div className={s.disable}></div>
        <div className={s.topBox}></div>
        <Marquee direction="left">
          {scrollTopArr.map((i, idx: number) => {
            return <img className={s.imgItem} src={i} alt="" key={idx} />;
          })}
        </Marquee>
        <Marquee direction="right">
          {scrollBottomArr.map((i, idx) => {
            return <img className={s.imgItem} src={i} alt="" key={idx + '2'} />;
          })}
        </Marquee>
        <div className={s.bottomBox}></div>
      </div>

      <div className={s.bottomBox}>
        <img src={iconCircle} alt="" className={classNames([s.circle, 's-rotate'])} />
        <div className={s.bText}>
          <span className={s.p}><Translation>{t => t("pb")}</Translation> </span>
          <span className={s.k}><Translation>{t => t("kp")}</Translation></span>
        </div>
      </div>
    </div>
  );
}
